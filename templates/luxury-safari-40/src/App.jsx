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
      

<header className="fixed top-0 inset-x-0 z-50 bg-stone-50/70 backdrop-blur-xl border-b border-stone-200/50">
<div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-12">
<a className="text-xl font-medium tracking-tighter uppercase text-stone-900 flex items-center gap-2" href="#">
<iconify-icon height="24" icon="solar:leaf-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
                    AURA
                </a>
<nav className="hidden md:flex items-center gap-8 text-sm font-light text-stone-500">
<a className="hover:text-stone-900 transition-colors" href="#">Destinations</a>
<a className="hover:text-stone-900 transition-colors" href="#">Lodges</a>
<a className="hover:text-stone-900 transition-colors" href="#">Conservation</a>
<a className="hover:text-stone-900 transition-colors" href="#">Journal</a>
</nav>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 text-sm font-light text-stone-600 hover:text-stone-900 transition-colors">
<iconify-icon height="18" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    Search
                </button>
<button className="text-xs font-medium bg-stone-900 text-white px-5 py-2.5 rounded-full hover:bg-stone-800 transition-all active:scale-95 shadow-sm">
                    Inquire
                </button>
</div>
</div>
</header>

<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden mx-4 sm:mx-6 lg:mx-8 mt-4 rounded-[2rem] bg-stone-900">
<div className="absolute inset-0 z-0">
<img alt="Elephant in Savanna" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-stone-900/10 mix-blend-multiply"></div>
</div>
<div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white mt-12">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-8">
<span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
<span className="text-xs font-light tracking-wide text-stone-200 uppercase">Now booking 2025 seasons</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6 leading-tight">
                Immerse in the <br/> <span className="text-stone-300 italic font-light">untamed</span> wild.
            </h1>
<p className="text-lg md:text-xl text-stone-300 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                Curated luxury expeditions across Africa's most breathtaking landscapes. Experience nature in its purest form without compromising on elegance.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<button className="bg-white text-stone-900 px-7 py-3.5 rounded-full text-sm font-medium hover:bg-stone-100 transition-all flex items-center justify-center gap-2 w-full sm:w-auto shadow-lg shadow-white/10">
                    Explore Journeys
                    <iconify-icon height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
<button className="bg-stone-800/40 backdrop-blur-md border border-white/10 text-white px-7 py-3.5 rounded-full text-sm font-medium hover:bg-stone-800/60 transition-all flex items-center justify-center gap-2 w-full sm:w-auto">
<iconify-icon height="20" icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                    Watch Film
                </button>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
<div className="flex flex-col">
<div className="h-12 w-12 rounded-2xl bg-stone-200/50 flex items-center justify-center mb-6 text-stone-800 border border-stone-200">
<iconify-icon height="24" icon="solar:compass-square-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3 text-stone-900">Master Guides</h3>
<p className="text-stone-500 text-sm font-light leading-relaxed">Traverse the savanna with seasoned conservationists who possess an intimate knowledge of local ecosystems, tracking the most elusive wildlife.</p>
</div>
<div className="flex flex-col">
<div className="h-12 w-12 rounded-2xl bg-stone-200/50 flex items-center justify-center mb-6 text-stone-800 border border-stone-200">
<iconify-icon height="24" icon="solar:buildings-2-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3 text-stone-900">Sustainable Luxury</h3>
<p className="text-stone-500 text-sm font-light leading-relaxed">Retreat to architecturally stunning, off-grid lodges that blend seamlessly with the environment, offering unparalleled comfort under the stars.</p>
</div>
<div className="flex flex-col">
<div className="h-12 w-12 rounded-2xl bg-stone-200/50 flex items-center justify-center mb-6 text-stone-800 border border-stone-200">
<iconify-icon height="24" icon="solar:camera-minimalistic-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3 text-stone-900">Private Encounters</h3>
<p className="text-stone-500 text-sm font-light leading-relaxed">Enjoy exclusive access to pristine concessions and private reserves, ensuring uninterrupted, profound encounters with majestic creatures.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-stone-200/60">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900 mb-4">Iconic Landscapes</h2>
<p className="text-stone-500 text-sm font-light leading-relaxed">Select from our meticulously curated regions, each offering a distinct microclimate and unforgettable ecosystem.</p>
</div>
<a className="group inline-flex items-center gap-2 text-sm font-medium text-stone-900 hover:text-stone-600 transition-colors pb-1 border-b border-stone-900 hover:border-stone-600" href="#">
                    View all regions
                    <iconify-icon className="transition-transform group-hover:translate-x-1" height="16" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">

<div className="md:col-span-8 group relative h-[32rem] overflow-hidden rounded-3xl cursor-pointer bg-stone-100">
<img alt="Serengeti Plains" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent"></div>
<div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end">
<div className="flex justify-between items-end">
<div>
<div className="flex items-center gap-2 mb-3">
<iconify-icon className="text-stone-300" height="16" icon="solar:map-point-linear" width="16"></iconify-icon>
<span className="text-xs font-medium text-stone-300 uppercase tracking-widest">Tanzania</span>
</div>
<h3 className="text-3xl font-medium tracking-tight text-white mb-2">Serengeti National Park</h3>
<p className="text-sm font-light text-stone-300 max-w-md opacity-80 transform translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">Witness the Great Migration across vast, endless plains. A profound display of the circle of life.</p>
</div>
<div className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 border border-white/20">
<iconify-icon height="20" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="md:col-span-4 flex flex-col gap-6 h-[32rem]">
<div className="flex-1 group relative overflow-hidden rounded-3xl cursor-pointer bg-stone-100">
<img alt="Okavango Delta" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent"></div>
<div className="absolute inset-x-0 bottom-0 p-6">
<span className="text-xs font-medium text-stone-300 uppercase tracking-widest mb-2 block">Botswana</span>
<h3 className="text-xl font-medium tracking-tight text-white">Okavango Delta</h3>
</div>
</div>
<div className="flex-1 group relative overflow-hidden rounded-3xl cursor-pointer bg-stone-100">
<img alt="Kruger Reserve" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent"></div>
<div className="absolute inset-x-0 bottom-0 p-6">
<span className="text-xs font-medium text-stone-300 uppercase tracking-widest mb-2 block">South Africa</span>
<h3 className="text-xl font-medium tracking-tight text-white">Kruger Reserve</h3>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-stone-50">
<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-stone-900 mb-6">Design your itinerary</h2>
<p className="text-stone-500 text-sm md:text-base font-light mb-12 max-w-2xl mx-auto">Provide us with your travel parameters, and our concierge team will begin crafting your bespoke wilderness experience.</p>
<form className="bg-white border border-stone-200/80 p-2.5 rounded-3xl flex flex-col md:flex-row gap-2 max-w-3xl mx-auto shadow-sm shadow-stone-200/50">
<div className="flex-1 relative flex items-center px-5 py-3.5 bg-stone-50 rounded-2xl hover:bg-stone-100 transition-colors cursor-pointer group border border-transparent hover:border-stone-200">
<iconify-icon className="text-stone-400 mr-4 group-hover:text-stone-600 transition-colors" height="20" icon="solar:calendar-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<div className="flex flex-col text-left w-full">
<label className="text-[0.65rem] text-stone-400 font-medium uppercase tracking-widest mb-0.5">Arrival</label>
<input className="bg-transparent border-none text-sm text-stone-900 font-medium focus:outline-none placeholder-stone-400 w-full cursor-pointer" placeholder="Select dates" type="text"/>
</div>
</div>
<div className="w-px bg-stone-200/80 hidden md:block my-2"></div>
<div className="flex-1 relative flex items-center px-5 py-3.5 bg-stone-50 rounded-2xl hover:bg-stone-100 transition-colors cursor-pointer group border border-transparent hover:border-stone-200">
<iconify-icon className="text-stone-400 mr-4 group-hover:text-stone-600 transition-colors" height="20" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<div className="flex flex-col text-left w-full relative">
<label className="text-[0.65rem] text-stone-400 font-medium uppercase tracking-widest mb-0.5">Guests</label>
<select className="bg-transparent border-none text-sm text-stone-900 font-medium focus:outline-none appearance-none w-full cursor-pointer pr-6">
<option>2 Adults, 0 Children</option>
<option>1 Adult</option>
<option>Family (4)</option>
<option>Group (6+)</option>
</select>
<iconify-icon className="text-stone-400 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
<button className="bg-stone-900 text-white rounded-2xl px-8 py-4 md:py-0 font-medium text-sm hover:bg-stone-800 transition-colors flex items-center justify-center gap-2 active:scale-[0.98]" type="button">
                    Request
                    <iconify-icon height="16" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
</form>
</div>
</section>

<footer className="bg-white pt-20 pb-8 border-t border-stone-200/60">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
<div className="md:col-span-5">
<div className="text-xl font-medium tracking-tighter uppercase text-stone-900 mb-6 flex items-center gap-2">
<iconify-icon height="20" icon="solar:leaf-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                        AURA
                    </div>
<p className="text-sm font-light text-stone-500 max-w-sm mb-8 leading-relaxed">
                        Redefining the African safari through low-impact luxury, profound conservation efforts, and unforgettable wildlife encounters.
                    </p>
<div className="flex gap-4">
<a className="h-10 w-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:text-stone-900 hover:bg-stone-50 transition-all" href="#">
<iconify-icon height="18" icon="solar:global-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<a className="h-10 w-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:text-stone-900 hover:bg-stone-50 transition-all" href="#">
<iconify-icon height="18" icon="solar:letter-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<a className="h-10 w-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:text-stone-900 hover:bg-stone-50 transition-all" href="#">
<iconify-icon height="18" icon="solar:camera-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>
</div>
<div className="md:col-span-2 md:col-start-8">
<h4 className="text-xs font-medium text-stone-900 uppercase tracking-widest mb-6">Journeys</h4>
<ul className="space-y-4 text-sm font-light text-stone-500">
<li><a className="hover:text-stone-900 transition-colors" href="#">Classic Safari</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Photographic</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Family Expeditions</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Private Villas</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="text-xs font-medium text-stone-900 uppercase tracking-widest mb-6">Company</h4>
<ul className="space-y-4 text-sm font-light text-stone-500">
<li><a className="hover:text-stone-900 transition-colors" href="#">Our Ethos</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Conservation</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Journal</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Careers</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-stone-400">
<p>© 2024 Aura Expeditions Ltd. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-stone-900 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-stone-900 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
