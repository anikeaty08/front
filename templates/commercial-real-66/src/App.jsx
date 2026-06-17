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
      

<nav className="absolute top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-900/40 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-4">
<button className="text-white hover:text-slate-200 transition-colors">
<iconify-icon icon="lucide:menu" width="24"></iconify-icon>
</button>

<div className="flex items-center gap-2 text-white">
<div className="flex items-center justify-center">
<img alt="Total Capital Inc" className="w-auto h-10 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0ed9c6d0-91c9-4fc0-abb0-4edf7f05a324_320w.webp"/>
</div>
<span className="text-lg font-semibold tracking-tight font-geist" style={{}}>Total Capital Inc</span>
</div>
</div>
<div className="hidden md:flex items-center gap-6">
<button className="text-white/80 hover:text-white transition-colors">
<iconify-icon icon="lucide:globe" width="20"></iconify-icon>
</button>
<button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-md text-sm font-medium transition-colors shadow-lg shadow-red-900/20 font-geist">
                    Log In
                </button>
<button className="border border-white/30 text-white hover:bg-white/10 px-5 py-2.5 rounded-md text-sm font-medium transition-colors font-geist">
                    Advertise
                </button>
</div>
</div>
</nav>

<div className="relative w-full min-h-[85vh] bg-slate-900 flex flex-col justify-center items-center pt-32 pb-24 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="City Skyline" className="w-full h-full object-cover opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/695b0158-8dff-4a87-aeeb-3ee4a1bd1bb5_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/80"></div>

<div className="bg-red-900/20 mix-blend-overlay absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center">

<h1 className="text-4xl md:text-5xl lg:text-6xl text-white text-center tracking-tight mb-12 max-w-4xl leading-tight font-playfair font-light" style={{}}>
                Discover Premium Commercial Real Estate Opportunities
            </h1>

<div className="w-full max-w-5xl bg-slate-800/40 backdrop-blur-xl border border-white/10 rounded-2xl p-2 md:p-6 shadow-2xl">

<div className="flex flex-wrap justify-center gap-6 mb-8 text-white/70 border-b border-white/10 pb-4 md:border-none md:pb-0">
<button className="font-medium text-white pr-2 pb-2 pl-2 relative font-geist">
                        For Lease
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 rounded-full"></span>
</button>
<button className="hover:text-white transition-colors pr-2 pb-2 pl-2 font-geist">For Sale</button>
</div>

<div className="flex justify-between items-start overflow-x-auto no-scrollbar gap-8 md:gap-4 mb-8 px-2 md:px-8 w-full">

<button className="group flex flex-col items-center gap-3 min-w-[70px] focus:outline-none">
<iconify-icon className="text-white group-hover:text-red-400 transition-colors" icon="lucide:building-2" strokeWidth="1.5" width="28"></iconify-icon>
<span className="text-sm font-medium text-white/80 group-hover:text-white font-geist">Office</span>
</button>

<button className="group flex flex-col items-center gap-3 min-w-[70px] focus:outline-none">
<iconify-icon className="text-white group-hover:text-red-400 transition-colors" icon="lucide:store" strokeWidth="1.5" width="28"></iconify-icon>
<span className="text-sm font-medium text-white/80 group-hover:text-white font-geist">Retail</span>
</button>

<button className="group flex flex-col items-center gap-3 min-w-[70px] focus:outline-none">
<iconify-icon className="text-white group-hover:text-red-400 transition-colors" icon="lucide:factory" strokeWidth="1.5" width="28"></iconify-icon>
<span className="text-sm font-medium text-white/80 group-hover:text-white font-geist">Industrial</span>
</button>

<button className="group flex flex-col items-center gap-3 min-w-[70px] focus:outline-none">
<iconify-icon className="text-white group-hover:text-red-400 transition-colors" icon="lucide:stethoscope" strokeWidth="1.5" width="28"></iconify-icon>
<span className="text-sm font-medium text-white/80 group-hover:text-white font-geist">Medical</span>
</button>

<button className="group flex flex-col items-center gap-3 min-w-[70px] focus:outline-none">
<iconify-icon className="text-white group-hover:text-red-400 transition-colors" icon="lucide:utensils" strokeWidth="1.5" width="28"></iconify-icon>
<span className="text-sm font-medium text-white/80 group-hover:text-white font-geist">Restaurant</span>
</button>

<div className="hidden md:flex flex-col items-center justify-center h-full pt-1 opacity-50">
<iconify-icon className="text-white" icon="lucide:arrow-right" width="20"></iconify-icon>
</div>
</div>

<div className="relative w-full">
<div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400">
<iconify-icon icon="lucide:map-pin" width="20"></iconify-icon>
</div>
<input className="w-full bg-white text-slate-800 text-lg py-4 pl-12 pr-14 rounded-full shadow-lg outline-none focus:ring-2 focus:ring-red-500/50 transition-all placeholder:text-slate-400" placeholder="Enter a city, zip code, or address" type="text"/>
<button className="absolute inset-y-1 right-1 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-colors flex items-center justify-center shadow-md">
<iconify-icon icon="lucide:search" strokeWidth="2" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="py-16 md:py-24 bg-white border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="">
<h2 className="text-3xl md:text-4xl tracking-tight text-slate-900 leading-tight mb-4 font-playfair font-light" style={{}}>
                        Trust the market leader for your next commercial investment.
                    </h2>
<p className="text-lg text-slate-500 font-normal leading-relaxed font-geist">
                        For over 30 years, PrimeSpace has connected investors with high-value opportunities, leveraging data-driven insights to power smarter decisions across the globe.
                    </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">

<div className="flex flex-col md:items-center md:border-r border-slate-200 md:px-6">
<span className="text-3xl text-slate-900 tracking-tight font-playfair font-light" style={{}}>500K+</span>
<span className="text-base text-slate-500 mt-1 font-geist">Active Listings</span>
</div>

<div className="flex flex-col md:items-center md:border-r border-slate-200 md:px-6">
<span className="text-3xl text-slate-900 tracking-tight font-playfair font-light" style={{}}>25M+</span>
<span className="text-base text-slate-500 font-geist mt-1" style={{}}>Monthly Visitors</span>
</div>

<div className="flex flex-col md:items-center md:px-6">
<span className="text-3xl text-slate-900 tracking-tight font-playfair font-light" style={{}}>$500B+</span>
<span className="text-base text-slate-500 mt-1 font-geist">Transaction Value</span>
</div>
</div>
</div>
</div>
</div>

<div className="bg-slate-50 py-16 md:py-24">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-lg text-slate-500 mb-12 font-medium font-geist">Companies actively searching on PrimeSpace</p>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 hover:grayscale-0 transition-all duration-500 opacity-60 grayscale gap-x-8 gap-y-8 items-center justify-items-center">
<div className="flex items-center justify-center">
<iconify-icon className="text-slate-800" height="36" icon="simple-icons:amazon" width="96"></iconify-icon>
</div>
<div className="flex items-center justify-center">
<iconify-icon className="text-slate-800" height="36" icon="simple-icons:netflix" width="96"></iconify-icon>
</div>
<div className="flex items-center justify-center">
<iconify-icon className="text-slate-800" height="36" icon="simple-icons:tesla" width="96"></iconify-icon>
</div>
<div className="flex items-center justify-center">
<iconify-icon className="text-slate-800" height="36" icon="simple-icons:chase" width="96"></iconify-icon>
</div>
<div className="flex items-center justify-center">
<iconify-icon className="text-slate-800" height="36" icon="simple-icons:ibm" width="96"></iconify-icon>
</div>
<div className="flex items-center justify-center">
<iconify-icon className="text-slate-800" height="36" icon="simple-icons:lockheedmartin" width="96"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="bg-white border-t border-slate-100 py-16 md:py-24">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl tracking-tight text-slate-900 mb-8 font-playfair font-light" style={{}}>Trending on PrimeSpace</h2>
<div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-200 mb-10">
<div className="flex items-center gap-8 overflow-x-auto no-scrollbar">
<button className="pb-4 border-b-2 border-red-600 font-medium text-red-600 whitespace-nowrap px-1 font-geist">For Lease</button>
<button className="pb-4 border-b-2 border-transparent hover:border-slate-300 text-slate-500 hover:text-slate-800 transition-colors font-medium whitespace-nowrap px-1 font-geist">For Sale</button>
</div>
<a className="hidden md:flex items-center text-red-600 font-medium hover:text-red-700 transition-colors mb-4 md:mb-0 group font-geist" href="#">
                    See More
                    <iconify-icon className="ml-1 group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" width="18"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 mb-5">
<img alt="Office Building" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=2301&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
<span className="text-xs font-semibold text-slate-900 tracking-wide uppercase font-geist">Office</span>
</div>
<button className="absolute top-4 right-4 text-white hover:scale-110 transition-transform drop-shadow-md">
<iconify-icon icon="lucide:heart" strokeWidth="2" width="24"></iconify-icon>
</button>
</div>
<div className="flex flex-col gap-1">
<p className="text-xl font-semibold text-slate-900 tracking-tight font-geist">From $66 SF/YR</p>
<p className="text-slate-500 font-normal font-geist">18565-18575 Jamboree Rd</p>
<p className="text-slate-500 font-normal font-geist">Irvine, CA 92612</p>
<p className="text-slate-400 text-sm mt-2 font-geist">Up to 65,300 SF</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 mb-5">
<img alt="Coworking Space" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&amp;w=2664&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
<span className="text-xs font-semibold text-slate-900 tracking-wide uppercase font-geist">Coworking</span>
</div>
<button className="absolute top-4 right-4 text-white hover:scale-110 transition-transform drop-shadow-md">
<iconify-icon icon="lucide:heart" strokeWidth="2" width="24"></iconify-icon>
</button>
</div>
<div className="flex flex-col gap-1">
<p className="text-xl font-semibold text-slate-900 tracking-tight font-geist">From $35 SF/YR</p>
<p className="text-slate-500 font-normal font-geist">3420 Lacrosse Ln</p>
<p className="text-slate-500 font-normal font-geist">Naperville, IL 60564</p>
<p className="text-slate-400 text-sm mt-2 font-geist">Up to 3,200 SF</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 mb-5">
<img alt="Retail Space" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&amp;q=80"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
<span className="text-xs font-semibold text-slate-900 tracking-wide uppercase font-geist">Retail</span>
</div>
<button className="absolute top-4 right-4 text-white hover:scale-110 transition-transform drop-shadow-md">
<iconify-icon icon="lucide:heart" strokeWidth="2" width="24"></iconify-icon>
</button>
</div>
<div className="flex flex-col gap-1">
<p className="text-xl font-semibold text-slate-900 tracking-tight font-geist">From $27 SF/YR</p>
<p className="text-slate-500 font-normal font-geist">4101-4103 San Fernando Rd</p>
<p className="text-slate-500 font-normal font-geist">Glendale, CA 91204</p>
<p className="text-slate-400 text-sm mt-2 font-geist">Up to 15,300 SF</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 mb-5">
<img alt="Restaurant Space" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
<span className="text-xs font-semibold text-slate-900 tracking-wide uppercase font-geist">Restaurant</span>
</div>
<button className="absolute top-4 right-4 text-white hover:scale-110 transition-transform drop-shadow-md">
<iconify-icon icon="lucide:heart" strokeWidth="2" width="24"></iconify-icon>
</button>
</div>
<div className="flex flex-col gap-1">
<p className="text-xl font-semibold text-slate-900 tracking-tight font-geist">From $45 SF/YR</p>
<p className="text-slate-500 font-normal font-geist">1200 Biscayne Blvd</p>
<p className="text-slate-500 font-normal font-geist">Miami, FL 33132</p>
<p className="text-slate-400 text-sm mt-2 font-geist">2,500 - 5,000 SF</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 mb-5">
<img alt="Land" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&amp;w=2832&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
<span className="text-xs font-semibold text-slate-900 tracking-wide uppercase font-geist">Land</span>
</div>
<button className="absolute top-4 right-4 text-white hover:scale-110 transition-transform drop-shadow-md">
<iconify-icon icon="lucide:heart" strokeWidth="2" width="24"></iconify-icon>
</button>
</div>
<div className="flex flex-col gap-1">
<p className="text-xl font-semibold text-slate-900 tracking-tight font-geist">$4,500,000</p>
<p className="text-slate-500 font-normal font-geist">Old Spanish Trail</p>
<p className="text-slate-500 font-normal font-geist">Tucson, AZ 85748</p>
<p className="text-slate-400 text-sm mt-2 font-geist">12.5 Acres</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 mb-5">
<img alt="Medical Office" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&amp;w=2653&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
<span className="text-xs font-semibold text-slate-900 tracking-wide uppercase font-geist">Medical</span>
</div>
<button className="absolute top-4 right-4 text-white hover:scale-110 transition-transform drop-shadow-md">
<iconify-icon icon="lucide:heart" strokeWidth="2" width="24"></iconify-icon>
</button>
</div>
<div className="flex flex-col gap-1">
<p className="text-xl font-semibold text-slate-900 tracking-tight font-geist">From $32 SF/YR</p>
<p className="text-slate-500 font-normal font-geist">7500 Medical Center Dr</p>
<p className="text-slate-500 font-normal font-geist">West Hills, CA 91307</p>
<p className="text-slate-400 text-sm mt-2 font-geist">1,200 - 8,000 SF</p>
</div>
</div>
</div>

<div className="mt-12 md:hidden flex justify-center">
<button className="w-full max-w-xs bg-slate-50 border border-slate-200 text-slate-900 font-medium py-3 rounded-lg hover:bg-slate-100 transition-colors font-geist">
                    View All Listings
                </button>
</div>
</div>
</div>

<div className="bg-slate-50 border-t border-slate-200 py-16 md:py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col items-center text-center mb-12">
<h2 className="text-3xl md:text-4xl text-slate-900 tracking-tight mb-3 font-playfair font-light" style={{}}>
                    Discover Your Next Investment at Auction
                </h2>
<a className="inline-flex items-center text-red-600 font-medium hover:text-red-700 transition-colors group font-geist" href="#">
                    Learn More About Auctions
                    <iconify-icon className="ml-1 transition-transform group-hover:translate-x-1" icon="lucide:arrow-right" width="18"></iconify-icon>
</a>
</div>
<div className="flex flex-col gap-10">

<div className="relative w-full rounded-2xl overflow-hidden shadow-sm ring-1 ring-slate-200 group bg-white">

<div className="relative aspect-[4/3] md:aspect-[21/9] w-full bg-slate-100">
<img alt="Auction Property" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?w=2560&amp;q=80"/>

<div className="bg-gradient-to-t from-slate-900/20 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>

<div className="hidden md:flex absolute top-6 bottom-6 left-6 w-80 bg-white rounded-xl shadow-2xl z-10 flex-col overflow-hidden ring-1 ring-black/5">

<div className="flex-1 p-8 flex flex-col items-center justify-center text-center border-b border-slate-100">
<div className="w-12 h-12 rounded-full bg-slate-50 text-slate-700 flex items-center justify-center mb-5">
<iconify-icon icon="lucide:gavel" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-2 font-geist">Upcoming</span>
<h3 className="text-2xl text-slate-900 tracking-tight font-playfair font-light" style={{}}>Office Building</h3>
<p className="text-slate-500 font-medium mt-1 font-geist">Washington, DC</p>
</div>

<div className="py-5 px-6 border-b border-slate-100 bg-slate-50/50 text-center">
<div className="flex items-center justify-center gap-1.5 text-xl font-mono font-medium text-slate-900 mb-1">
<span className="font-geist">4d</span><span className="text-slate-300 font-geist">:</span>
<span className="font-geist">21h</span><span className="text-slate-300 font-geist">:</span>
<span className="font-geist">32m</span>
</div>
<span className="text-xs font-semibold text-slate-400 uppercase tracking-wide font-geist">Auction Starts</span>
</div>

<div className="p-8 text-center bg-white">
<p className="text-3xl text-slate-900 tracking-tight font-playfair font-light" style={{}}>$4,000,000</p>
<span className="text-xs font-semibold text-slate-400 uppercase tracking-wide mt-1 block font-geist">Starting Bid</span>
</div>
</div>

<button className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full items-center justify-center text-slate-900 shadow-lg hover:scale-110 hover:bg-white transition-all duration-300 z-10">
<iconify-icon icon="lucide:arrow-right" strokeWidth="2" width="24"></iconify-icon>
</button>
</div>

<div className="md:hidden p-6 bg-white border-t border-slate-100">
<div className="flex items-start justify-between mb-6">
<div>
<span className="text-xs font-bold text-red-600 uppercase tracking-wide font-geist">Upcoming Auction</span>
<h3 className="text-xl font-semibold text-slate-900 mt-1 font-geist">Office Building</h3>
<p className="text-slate-500 font-geist">Washington, DC</p>
</div>
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center">
<iconify-icon className="text-slate-600" icon="lucide:gavel" width="20"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-100">
<div>
<p className="text-lg font-mono font-medium text-slate-900 font-geist">4d 21h 32m</p>
<p className="text-xs text-slate-400 font-semibold uppercase mt-1 font-geist">Time Left</p>
</div>
<div className="text-right">
<p className="text-lg font-bold text-slate-900 font-geist">$4.0M</p>
<p className="text-xs text-slate-400 font-semibold uppercase mt-1 font-geist">Starting Bid</p>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

<div className="lg:col-span-2">
<p className="text-lg text-slate-500 leading-relaxed font-normal max-w-3xl font-geist">
                            Identify and bid on quality assets through our transparent and competitive platform—all online. Join the investors worldwide who have partnered with us to successfully transact 11,000+ properties.
                        </p>
</div>

<div className="bg-white rounded-xl border border-slate-200 p-5 flex items-center gap-4 shadow-sm hover:shadow-md hover:border-red-100 transition-all cursor-pointer group">
<div className="flex-shrink-0 w-12 h-12 rounded-lg bg-slate-50 text-slate-400 border border-slate-100 flex items-center justify-center group-hover:bg-red-50 group-hover:text-red-600 group-hover:border-red-100 transition-colors">
<iconify-icon className="" icon="lucide:calendar" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="">
<h4 className="text-base font-semibold text-slate-900 font-geist">Next Event | December 15th</h4>
<span className="text-sm font-medium text-red-600 mt-0.5 block group-hover:text-red-700 font-geist">See Available Listings</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white border-t border-slate-200 py-16 md:py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col gap-10">

<div className="flex flex-col gap-6">
<h2 className="text-3xl md:text-4xl text-slate-900 tracking-tight font-playfair font-light" style={{}}>Explore Popular Cities</h2>

<div className="flex items-center gap-8 border-b border-slate-200">
<button className="pb-3 border-b-2 border-red-600 font-medium text-slate-900 px-0.5 transition-colors font-geist">
                            US Cities
                        </button>
<button className="pb-3 border-b-2 border-transparent font-medium text-slate-500 hover:text-slate-800 hover:border-slate-300 px-0.5 transition-all font-geist">
                            International Cities
                        </button>
</div>
</div>

<div className="relative group">
<button className="absolute -right-5 top-[38%] -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center text-slate-900 hover:scale-110 hover:shadow-xl transition-all cursor-pointer hidden lg:flex">
<iconify-icon icon="lucide:arrow-right" strokeWidth="2" width="24"></iconify-icon>
</button>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

<div className="group/city cursor-pointer">
<div className="aspect-[3/4] w-full rounded-2xl overflow-hidden bg-slate-100 relative mb-4">
<img alt="New York City" className="w-full h-full object-cover transition-transform duration-700 group-hover/city:scale-105" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-slate-900/0 group-hover/city:bg-slate-900/5 transition-colors duration-300"></div>
</div>
<h3 className="text-lg font-medium text-slate-900 font-geist">New York City</h3>
</div>

<div className="group/city cursor-pointer">
<div className="aspect-[3/4] w-full rounded-2xl overflow-hidden bg-slate-100 relative mb-4">
<img alt="Los Angeles" className="w-full h-full object-cover transition-transform duration-700 group-hover/city:scale-105" src="https://images.unsplash.com/photo-1462206092226-f46025ffe607?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-slate-900/0 group-hover/city:bg-slate-900/5 transition-colors duration-300"></div>
</div>
<h3 className="text-lg font-medium text-slate-900 font-geist">Los Angeles</h3>
</div>

<div className="group/city cursor-pointer">
<div className="aspect-[3/4] w-full rounded-2xl overflow-hidden bg-slate-100 relative mb-4">
<img alt="Chicago" className="w-full h-full object-cover transition-transform duration-700 group-hover/city:scale-105" src="https://images.unsplash.com/photo-1494522358652-f30e61a60313?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/0 group-hover/city:bg-slate-900/5 transition-colors duration-300"></div>
</div>
<h3 className="text-lg font-medium text-slate-900 font-geist">Chicago</h3>
</div>

<div className="group/city cursor-pointer">
<div className="aspect-[3/4] w-full rounded-2xl overflow-hidden bg-slate-100 relative mb-4">
<img alt="Washington D.C." className="w-full h-full object-cover transition-transform duration-700 group-hover/city:scale-105" src="https://images.unsplash.com/photo-1617581629397-a72507c3de9e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/0 group-hover/city:bg-slate-900/5 transition-colors duration-300"></div>
</div>
<h3 className="text-lg font-medium text-slate-900 font-geist">Washington D.C.</h3>
</div>

<div className="group/city cursor-pointer">
<div className="aspect-[3/4] w-full rounded-2xl overflow-hidden bg-slate-100 relative mb-4">
<img alt="Miami" className="w-full h-full object-cover transition-transform duration-700 group-hover/city:scale-105" src="https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/0 group-hover/city:bg-slate-900/5 transition-colors duration-300"></div>
</div>
<h3 className="text-lg font-medium text-slate-900 font-geist">Miami</h3>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white border-t border-slate-200 py-16 md:py-24">
<div className="max-w-7xl mx-auto px-6">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
<h2 className="text-3xl md:text-4xl text-slate-900 tracking-tight font-playfair font-light" style={{}}>Commercial Real Estate Explained</h2>
<a className="inline-flex items-center text-red-600 font-medium hover:text-red-700 transition-colors group font-geist" href="#">
                    More Articles
                    <iconify-icon className="ml-1 transition-transform group-hover:translate-x-1" icon="lucide:arrow-right" width="18"></iconify-icon>
</a>
</div>

<div className="relative group">
<button className="absolute -right-5 top-[38%] -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center text-slate-900 hover:scale-110 hover:shadow-xl transition-all cursor-pointer hidden lg:flex">
<iconify-icon icon="lucide:arrow-right" strokeWidth="2" width="24"></iconify-icon>
</button>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<a className="flex flex-col group/article" href="#">
<div className="w-full aspect-[16/10] rounded-2xl overflow-hidden bg-red-700 relative mb-5 shadow-sm ring-1 ring-slate-900/5">
<img alt="Podcast Guest" className="w-full h-full object-cover opacity-50 mix-blend-multiply transition-transform duration-700 group-hover/article:scale-105" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-tr from-red-900/90 via-red-800/50 to-transparent"></div>
<div className="absolute top-6 left-6">
<div className="flex flex-col leading-none text-white italic">
<span className="text-lg font-medium opacity-90 mb-0.5 font-geist">in the</span>
<span className="text-4xl tracking-tighter not-italic font-playfair font-light" style={{}}>LOOP</span>
</div>
</div>
<div className="absolute bottom-5 right-5">
<div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 text-white group-hover/article:scale-110 transition-transform">
<iconify-icon icon="lucide:play" width="18"></iconify-icon>
</div>
</div>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 leading-tight group-hover/article:text-red-600 transition-colors font-geist">The Shifting Landscape of Office Districts with Evan Smith</h3>
<p className="text-slate-500 leading-relaxed text-base line-clamp-3 font-geist">In this episode of In the Loop, discover how JBG Smith is reimagining National Landing into a vibrant mixed-use district.</p>
</a>

<a className="flex flex-col group/article" href="#">
<div className="w-full aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 relative mb-5 shadow-sm ring-1 ring-slate-900/5">
<img alt="Commercial Buildings" className="w-full h-full object-cover transition-transform duration-700 group-hover/article:scale-105" src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/0 group-hover/article:bg-slate-900/5 transition-colors duration-300"></div>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 leading-tight group-hover/article:text-red-600 transition-colors font-geist">Types of Commercial Real Estate Investment Properties</h3>
<p className="text-slate-500 leading-relaxed text-base line-clamp-3 font-geist">Understanding commercial properties and their investment potential involves analyzing market trends and asset classes.</p>
</a>

<a className="flex flex-col group/article" href="#">
<div className="w-full aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 relative mb-5 shadow-sm ring-1 ring-slate-900/5">
<img alt="City Sunset" className="w-full h-full object-cover transition-transform duration-700 group-hover/article:scale-105" src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/0 group-hover/article:bg-slate-900/5 transition-colors duration-300"></div>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 leading-tight group-hover/article:text-red-600 transition-colors font-geist">The 3 Most Common Types of Commercial Leases</h3>
<p className="text-slate-500 leading-relaxed text-base line-clamp-3 font-geist">Understanding Gross, Net, and Percentage Lease Structures and their implications for long-term tenant relationships.</p>
</a>
</div>
</div>
</div>
</div>

<div className="w-full bg-slate-900 relative overflow-hidden py-24 border-t border-slate-800">

<div className="absolute inset-0 z-0 pointer-events-none">
<img alt="Commercial Skyscraper" className="absolute right-0 top-0 h-full w-full md:w-3/5 object-cover opacity-30 mix-blend-luminosity" src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/20"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6">

<h2 className="text-3xl md:text-5xl text-white tracking-tight mb-20 max-w-3xl leading-tight font-playfair font-light" style={{}}>
                PrimeSpace Listings Lease or Sell 14% Faster<span className="align-top text-2xl text-slate-500 font-playfair font-light" style={{}}>*</span>
</h2>

<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

<div className="flex flex-col gap-6 group">
<div className="text-white opacity-90 group-hover:opacity-100 transition-opacity">
<iconify-icon icon="lucide:megaphone" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<div>
<h3 className="text-2xl text-white mb-3 tracking-tight font-playfair font-light" style={{}}>Right Audience</h3>
<p className="text-lg text-slate-400 font-normal leading-relaxed font-geist">
                            96% of the Fortune 1000 search on PrimeSpace for their next commercial investment.
                        </p>
</div>
</div>

<div className="flex flex-col gap-6 group">
<div className="text-white opacity-90 group-hover:opacity-100 transition-opacity">
<iconify-icon icon="lucide:lightbulb" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<div>
<h3 className="text-2xl text-white mb-3 tracking-tight font-playfair font-light" style={{}}>Engage Prospects</h3>
<p className="text-lg text-slate-400 font-normal leading-relaxed font-geist">
                            Stunning photography, professional videos and cinematic drone shots to showcase assets.
                        </p>
</div>
</div>

<div className="flex flex-col gap-6 group">
<div className="text-white opacity-90 group-hover:opacity-100 transition-opacity">
<iconify-icon icon="lucide:handshake" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<div>
<h3 className="text-2xl text-white mb-3 tracking-tight font-playfair font-light" style={{}}>More Opportunity</h3>
<p className="text-lg text-slate-400 font-normal leading-relaxed font-geist">
                            Find a qualified tenant or buyer, faster than before with our global network.
                        </p>
</div>
</div>
</div>

<button className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white transition-all bg-white/10 border border-white/10 rounded-lg hover:bg-white/15 backdrop-blur-md group shadow-2xl shadow-black/20 font-geist">
                Explore Marketing Solutions
            </button>

<p className="mt-16 text-sm font-normal text-slate-600 max-w-2xl font-geist">
                *Based on internal analysis comparing properties advertised on PrimeSpace to properties listed only on competing platforms.
            </p>
</div>
</div>

<div className="w-full bg-slate-50 py-16 md:py-24 border-t border-slate-200">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl text-slate-900 mb-10 tracking-tight leading-tight font-playfair font-light" style={{}}>
                Commercial Real Estate Fundamentals: Essential Questions for Investors &amp; Businesses
            </h2>
<div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden divide-y divide-slate-100">

<div className="bg-white">
<button className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none">
<span className="text-xl font-medium text-slate-900 font-geist">Is PrimeSpace available for international property searches?</span>
<iconify-icon className="text-slate-400" icon="lucide:chevron-up" width="24"></iconify-icon>
</button>
<div className="px-6 md:px-8 pb-8">
<p className="text-lg text-slate-500 font-normal leading-relaxed font-geist">
                            Yes, <a className="text-red-600 font-medium hover:text-red-700 transition-colors font-geist" href="#">PrimeSpace operates globally</a>, with dedicated platforms for commercial real estate in the <a className="text-red-600 font-medium hover:text-red-700 transition-colors font-geist" href="#">United Kingdom</a>, <a className="text-red-600 font-medium hover:text-red-700 transition-colors font-geist" href="#">Germany</a>, <a className="text-red-600 font-medium hover:text-red-700 transition-colors font-geist" href="#">Japan</a>, and <a className="text-red-600 font-medium hover:text-red-700 transition-colors font-geist" href="#">Australia</a>. These region-specific versions offer localized commercial property listings, market data, and search capabilities tailored to international investors.
                        </p>
</div>
</div>

<div className="bg-white">
<button className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-slate-50 transition-colors group focus:outline-none">
<span className="text-xl font-medium text-slate-900 group-hover:text-red-600 transition-colors font-geist">Office Space or Coworking: Which fits your business needs?</span>
<iconify-icon className="text-slate-400 group-hover:text-red-600 transition-colors" icon="lucide:chevron-down" width="24"></iconify-icon>
</button>
</div>

<div className="bg-white">
<button className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-slate-50 transition-colors group focus:outline-none">
<span className="text-xl font-medium text-slate-900 group-hover:text-red-600 transition-colors font-geist">What should I know before investing in multifamily properties?</span>
<iconify-icon className="text-slate-400 group-hover:text-red-600 transition-colors" icon="lucide:chevron-down" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<footer className="bg-slate-950 text-slate-300 py-24 border-t border-slate-900 font-sans relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-red-500/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 border-b border-slate-800 pb-16 mb-16">
<div className="flex flex-col justify-center">
<h3 className="text-3xl md:text-4xl text-white tracking-tight mb-4 leading-tight font-playfair font-light" style={{}}>Transform your commercial portfolio today.</h3>
<p className="text-lg text-slate-400 mb-8 max-w-md font-normal font-geist">Join over 25,000 investors and brokers using PrimeSpace to find assets and close deals faster.</p>
<div className="flex flex-wrap gap-4">
<button className="bg-red-600 hover:bg-red-500 text-white px-6 py-3.5 rounded-lg font-medium transition-all shadow-lg shadow-red-900/20 hover:shadow-red-900/40 flex items-center gap-2 group font-geist">
                            List Your Property
                            <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</button>
<button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-6 py-3.5 rounded-lg font-medium transition-colors font-geist">
                            Contact Sales
                        </button>
</div>
</div>
<div className="lg:pl-12">
<form className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-800 shadow-2xl relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-3xl rounded-full -mr-16 -mt-16 transition-opacity opacity-50 group-hover:opacity-100"></div>
<h4 className="text-white font-medium mb-2 text-lg font-geist">Subscribe to Market Watch</h4>
<p className="text-slate-400 text-sm mb-6 font-normal font-geist">Get weekly insights on commercial real estate trends, off-market opportunities, and data reports.</p>
<div className="flex flex-col sm:flex-row gap-3">
<div className="relative flex-grow">
<iconify-icon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" icon="lucide:mail" width="18"></iconify-icon>
<input className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-10 pr-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 transition-all font-normal" placeholder="email@company.com" type="email"/>
</div>
<button className="bg-white text-slate-950 px-6 py-3 rounded-lg font-semibold hover:bg-slate-200 transition-colors shadow-lg font-geist" type="button">
                                Subscribe
                            </button>
</div>
<p className="text-xs text-slate-600 mt-4 font-normal font-geist">By subscribing, you agree to our <a className="underline hover:text-slate-500 font-geist" href="#">Privacy Policy</a> and consent to receive updates.</p>
</form>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-12 gap-x-8 mb-20">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-3 mb-6 text-white group" href="#">
<div className="w-9 h-9 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center text-white shadow-inner border border-white/10 font-bold font-geist">
                            PS
                        </div>
<span className="text-xl font-semibold tracking-tight group-hover:text-red-100 transition-colors font-geist">PrimeSpace</span>
</a>
<p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-8 font-normal font-geist">
                        Empowering the commercial real estate world with data-driven insights, advanced analytics, and a seamless global marketplace experience.
                    </p>
<div className="flex gap-3">
<a className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-700 transition-all" href="#">
<iconify-icon icon="simple-icons:linkedin" width="16"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-700 transition-all" href="#">
<iconify-icon icon="simple-icons:x" width="16"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-700 transition-all" href="#">
<iconify-icon icon="simple-icons:instagram" width="18"></iconify-icon>
</a>
</div>
</div>
<div className="">
<h4 className="text-white font-medium mb-6 font-geist">Marketplace</h4>
<ul className="space-y-3.5 text-sm font-normal text-slate-400">
<li><a className="hover:text-red-400 transition-colors font-geist" href="#">Office Space</a></li>
<li className=""><a className="hover:text-red-400 transition-colors font-geist" href="#">Retail</a></li>
<li className=""><a className="hover:text-red-400 transition-colors font-geist" href="#">Industrial</a></li>
<li className=""><a className="hover:text-red-400 transition-colors font-geist" href="#">Multifamily</a></li>
<li><a className="hover:text-red-400 transition-colors font-geist" href="#">Land &amp; Farm</a></li>
<li><a className="hover:text-red-400 transition-colors font-geist" href="#">Medical</a></li>
</ul>
</div>
<div className="">
<h4 className="text-white font-medium mb-6 font-geist">Services</h4>
<ul className="space-y-3.5 text-sm font-normal text-slate-400">
<li><a className="hover:text-red-400 transition-colors font-geist" href="#">List a Property</a></li>
<li><a className="hover:text-red-400 transition-colors font-geist" href="#">Find a Broker</a></li>
<li><a className="hover:text-red-400 transition-colors font-geist" href="#">Property Auctions</a></li>
<li className=""><a className="hover:text-red-400 transition-colors font-geist" href="#">Valuation Tools</a></li>
<li><a className="hover:text-red-400 transition-colors font-geist" href="#">Market Research</a></li>
</ul>
</div>
<div className="">
<h4 className="text-white font-medium mb-6 font-geist">Company</h4>
<ul className="space-y-3.5 text-sm font-normal text-slate-400">
<li><a className="hover:text-red-400 transition-colors font-geist" href="#">About Us</a></li>
<li className=""><a className="hover:text-red-400 transition-colors inline-flex items-center gap-2 font-geist" href="#">Careers <span className="text-[10px] uppercase font-bold bg-red-500/20 text-red-300 px-1.5 py-0.5 rounded tracking-wide font-geist">Hiring</span></a></li>
<li><a className="hover:text-red-400 transition-colors font-geist" href="#">Press &amp; News</a></li>
<li><a className="hover:text-red-400 transition-colors font-geist" href="#">Investor Relations</a></li>
<li className=""><a className="hover:text-red-400 transition-colors font-geist" href="#">Contact</a></li>
</ul>
</div>
<div className="">
<h4 className="text-white font-medium mb-6 font-geist">Resources</h4>
<ul className="space-y-3.5 text-sm font-normal text-slate-400">
<li><a className="hover:text-red-400 transition-colors font-geist" href="#">Blog</a></li>
<li className=""><a className="hover:text-red-400 transition-colors font-geist" href="#">Guides</a></li>
<li className=""><a className="hover:text-red-400 transition-colors font-geist" href="#">Help Center</a></li>
<li className=""><a className="hover:text-red-400 transition-colors font-geist" href="#">API Documentation</a></li>
<li><a className="hover:text-red-400 transition-colors font-geist" href="#">System Status</a></li>
</ul>
</div>
</div>

<div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-500 font-normal">
<div className="flex flex-col md:flex-row items-center gap-1 md:gap-4">
<p className="font-geist">© 2024 PrimeSpace Real Estate Inc.</p>
<span className="hidden md:inline text-slate-700 font-geist">•</span>
<p className="font-geist">123 Market Street, San Francisco, CA</p>
</div>
<div className="flex gap-8">
<a className="hover:text-white transition-colors font-geist" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors font-geist" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors font-geist" href="#">Sitemap</a>
<div className="flex items-center gap-2 text-slate-400 ml-4 border-l border-slate-800 pl-6">
<iconify-icon icon="lucide:globe" width="16"></iconify-icon>
<span className="hover:text-white cursor-pointer transition-colors font-geist">English (US)</span>
</div>
</div>
</div>
</div>
</footer>

    </>
  );
}
