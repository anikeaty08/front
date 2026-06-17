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
50: '#fbf8f3',
100: '#f5efe4',
200: '#eadbc3',
300: '#dec09b',
400: '#d0a070',
500: '#c6844e', // Gold/Bronze Primary
600: '#ba6a40',
700: '#9b5336',
800: '#7f4431',
900: '#67392b', // Deep Leather
},
slate: {
850: '#151f2e', // Custom dark
}
},
spacing: {
'128': '32rem',
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
      

<nav className="fixed w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-brand-500 rounded-md flex items-center justify-center text-white">
<iconify-icon icon="lucide:mountain-snow" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-widest uppercase text-slate-900">Golden Vertex</span>
</div>

<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-500">
<a className="hover:text-brand-600 transition-colors" href="#">Buy</a>
<a className="hover:text-brand-600 transition-colors" href="#">Sell</a>
<a className="hover:text-brand-600 transition-colors" href="#">Developments</a>
<a className="hover:text-brand-600 transition-colors" href="#">Agents</a>
<a className="hover:text-brand-600 transition-colors" href="#">News</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-xs font-medium bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-slate-800 transition-all shadow-sm" href="#contact">
                    Book Consultation
                    <iconify-icon icon="lucide:arrow-up-right" strokeWidth="1.5" width="14"></iconify-icon>
</a>
<button className="md:hidden text-slate-900">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Canadian Modern Architecture" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/20 to-slate-50"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium mb-6">
<span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse"></span>
                #1 Agency in Toronto &amp; Vancouver
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight mb-6 leading-tight text-shadow-sm">
                Canada's Finest <br/> <span className="text-white/90">Living Spaces.</span>
</h1>
<p className="text-lg md:text-xl text-slate-100 max-w-2xl mx-auto mb-10 font-light">
                Discover architectural masterpieces from the Rockies to the Atlantic. Golden Vertex curates the exceptional.
            </p>

<div className="bg-white p-2 rounded-2xl shadow-xl max-w-2xl mx-auto flex flex-col md:flex-row gap-2">
<div className="flex-1 flex items-center px-4 border-b md:border-b-0 md:border-r border-slate-100 py-3 md:py-0">
<iconify-icon className="text-slate-400 mr-3" icon="lucide:map-pin" strokeWidth="1.5" width="20"></iconify-icon>
<input className="w-full text-sm outline-none text-slate-700 placeholder-slate-400 bg-transparent" placeholder="City, Neighborhood, or Address" type="text"/>
</div>
<div className="flex-1 flex items-center px-4 py-3 md:py-0">
<iconify-icon className="text-slate-400 mr-3" icon="lucide:home" strokeWidth="1.5" width="20"></iconify-icon>
<select className="w-full text-sm outline-none text-slate-700 bg-transparent appearance-none cursor-pointer">
<option>Property Type</option>
<option>Condo</option>
<option>Detached</option>
<option>Townhouse</option>
</select>
</div>
<button className="bg-brand-500 hover:bg-brand-600 text-white rounded-xl px-8 py-3 font-medium text-sm transition-colors flex items-center justify-center gap-2">
                    Search
                    <iconify-icon icon="lucide:search" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="py-10 border-b border-slate-200 bg-white">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-slate-400 uppercase tracking-widest mb-8">Trusted by Canada's Leading Developers</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">

<span className="text-lg font-semibold tracking-tight">TRIDEL</span>
<span className="text-lg font-semibold tracking-tight">DANIELS</span>
<span className="text-lg font-semibold tracking-tight">MATTAMY</span>
<span className="text-lg font-semibold tracking-tight">GREAT GULF</span>
<span className="text-lg font-semibold tracking-tight">CONCORD</span>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-6">Elevating the Standard of Canadian Real Estate.</h2>
<div className="space-y-6 text-slate-600 leading-relaxed">
<p>
                        At Golden Vertex, we believe a home is more than a structure; it's the foundation of your legacy. Founded in the heart of Toronto, we have expanded our expertise coast-to-coast.
                    </p>
<p>
                        Whether you are seeking a penthouse in Vancouver's Coal Harbour or a heritage estate in Westmount, Montreal, our data-driven approach and white-glove service ensure a seamless transaction.
                    </p>
</div>
<div className="mt-8 flex gap-8">
<div>
<p className="text-3xl font-semibold text-brand-600 tracking-tight">$2B+</p>
<p className="text-xs text-slate-500 mt-1 uppercase tracking-wide">Volume Sold</p>
</div>
<div>
<p className="text-3xl font-semibold text-brand-600 tracking-tight">1.5k</p>
<p className="text-xs text-slate-500 mt-1 uppercase tracking-wide">Families Housed</p>
</div>
<div>
<p className="text-3xl font-semibold text-brand-600 tracking-tight">12</p>
<p className="text-xs text-slate-500 mt-1 uppercase tracking-wide">Office Hubs</p>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-100 rounded-full blur-2xl opacity-60"></div>
<img alt="Interior Design" className="relative rounded-2xl shadow-xl w-full h-96 object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=2653&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<div>
<h3 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">Curated Listings</h3>
<p className="text-slate-500 mt-2 text-sm">Handpicked properties across the country.</p>
</div>
<a className="hidden md:flex items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-700" href="#">
                    View All
                    <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-xl bg-slate-100 aspect-[4/3] mb-4">
<span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-slate-900 text-[10px] font-semibold px-2 py-1 rounded uppercase tracking-wider z-10">Just Listed</span>
<img alt="House 1" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600596542815-e32cb131320d?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start mb-2">
<div>
<h4 className="text-lg font-medium text-slate-900 tracking-tight group-hover:text-brand-600 transition-colors">The Rosedale Estate</h4>
<p className="text-sm text-slate-500">Toronto, ON</p>
</div>
<p className="text-lg font-semibold text-slate-900">$4,250,000</p>
</div>
<div className="flex gap-4 text-xs text-slate-500 border-t border-slate-100 pt-3 mt-2">
<span className="flex items-center gap-1"><iconify-icon icon="lucide:bed" width="14"></iconify-icon> 4 Beds</span>
<span className="flex items-center gap-1"><iconify-icon icon="lucide:bath" width="14"></iconify-icon> 3 Baths</span>
<span className="flex items-center gap-1"><iconify-icon icon="lucide:maximize" width="14"></iconify-icon> 3,200 sqft</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-xl bg-slate-100 aspect-[4/3] mb-4">
<img alt="House 2" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start mb-2">
<div>
<h4 className="text-lg font-medium text-slate-900 tracking-tight group-hover:text-brand-600 transition-colors">Coal Harbour View</h4>
<p className="text-sm text-slate-500">Vancouver, BC</p>
</div>
<p className="text-lg font-semibold text-slate-900">$2,800,000</p>
</div>
<div className="flex gap-4 text-xs text-slate-500 border-t border-slate-100 pt-3 mt-2">
<span className="flex items-center gap-1"><iconify-icon icon="lucide:bed" width="14"></iconify-icon> 2 Beds</span>
<span className="flex items-center gap-1"><iconify-icon icon="lucide:bath" width="14"></iconify-icon> 2 Baths</span>
<span className="flex items-center gap-1"><iconify-icon icon="lucide:maximize" width="14"></iconify-icon> 1,400 sqft</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-xl bg-slate-100 aspect-[4/3] mb-4">
<img alt="House 3" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start mb-2">
<div>
<h4 className="text-lg font-medium text-slate-900 tracking-tight group-hover:text-brand-600 transition-colors">Plateau Character</h4>
<p className="text-sm text-slate-500">Montreal, QC</p>
</div>
<p className="text-lg font-semibold text-slate-900">$1,150,000</p>
</div>
<div className="flex gap-4 text-xs text-slate-500 border-t border-slate-100 pt-3 mt-2">
<span className="flex items-center gap-1"><iconify-icon icon="lucide:bed" width="14"></iconify-icon> 3 Beds</span>
<span className="flex items-center gap-1"><iconify-icon icon="lucide:bath" width="14"></iconify-icon> 2 Baths</span>
<span className="flex items-center gap-1"><iconify-icon icon="lucide:maximize" width="14"></iconify-icon> 1,850 sqft</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight mb-8">Explore Top Locations</h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<a className="relative rounded-xl overflow-hidden aspect-square group" href="#">
<img alt="Toronto" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&amp;w=2565&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
<div className="absolute bottom-4 left-4 text-white">
<p className="text-lg font-medium tracking-tight">Toronto</p>
<p className="text-xs opacity-80">240 Listings</p>
</div>
</a>
<a className="relative rounded-xl overflow-hidden aspect-square group" href="#">
<img alt="Vancouver" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1559511260-66a654ae98e2?q=80&amp;w=2525&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
<div className="absolute bottom-4 left-4 text-white">
<p className="text-lg font-medium tracking-tight">Vancouver</p>
<p className="text-xs opacity-80">180 Listings</p>
</div>
</a>
<a className="relative rounded-xl overflow-hidden aspect-square group" href="#">
<img alt="Montreal" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1519178173668-2fc416dde9f6?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
<div className="absolute bottom-4 left-4 text-white">
<p className="text-lg font-medium tracking-tight">Montreal</p>
<p className="text-xs opacity-80">150 Listings</p>
</div>
</a>
<a className="relative rounded-xl overflow-hidden aspect-square group" href="#">
<img alt="Calgary" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1582293041005-2965b2699e1d?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
<div className="absolute bottom-4 left-4 text-white">
<p className="text-lg font-medium tracking-tight">Calgary</p>
<p className="text-xs opacity-80">95 Listings</p>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h3 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Holistic Real Estate Solutions</h3>
<p className="text-slate-500">From valuation to closing, our team provides comprehensive services tailored to the Canadian market nuances.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="p-8 border border-slate-100 rounded-2xl hover:border-brand-200 hover:shadow-lg transition-all bg-slate-50/50">
<div className="w-12 h-12 bg-white rounded-lg border border-slate-200 flex items-center justify-center mb-6 text-brand-600 shadow-sm">
<iconify-icon icon="lucide:home" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-slate-900 mb-2">Buying &amp; Investing</h4>
<p className="text-sm text-slate-500 leading-relaxed">Access to off-market listings and expert negotiation strategies to secure your asset.</p>
</div>
<div className="p-8 border border-slate-100 rounded-2xl hover:border-brand-200 hover:shadow-lg transition-all bg-slate-50/50">
<div className="w-12 h-12 bg-white rounded-lg border border-slate-200 flex items-center justify-center mb-6 text-brand-600 shadow-sm">
<iconify-icon icon="lucide:trending-up" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-slate-900 mb-2">Selling &amp; Marketing</h4>
<p className="text-sm text-slate-500 leading-relaxed">High-end staging, drone photography, and global exposure for your property.</p>
</div>
<div className="p-8 border border-slate-100 rounded-2xl hover:border-brand-200 hover:shadow-lg transition-all bg-slate-50/50">
<div className="w-12 h-12 bg-white rounded-lg border border-slate-200 flex items-center justify-center mb-6 text-brand-600 shadow-sm">
<iconify-icon icon="lucide:compass" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-slate-900 mb-2">Relocation Services</h4>
<p className="text-sm text-slate-500 leading-relaxed">Seamless moving experiences for executives and families relocating to Canada.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-850 text-white relative overflow-hidden">
<div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
<div className="md:w-1/2">
<div className="inline-block px-3 py-1 rounded border border-brand-500/30 text-brand-400 text-[10px] font-bold uppercase tracking-widest mb-6">Private Office</div>
<h3 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 leading-tight">The Golden Collection.</h3>
<p className="text-slate-400 mb-8 leading-relaxed">
                    Exclusive access to Canada's most prestigious ultra-luxury properties. Strictly confidential. Available only to qualified members of the Vertex Private Office.
                </p>
<button className="bg-brand-600 hover:bg-brand-500 text-white px-6 py-3 rounded-full text-sm font-medium transition-all flex items-center gap-2">
                    Request Access
                    <iconify-icon icon="lucide:lock" strokeWidth="1.5" width="14"></iconify-icon>
</button>
</div>
<div className="md:w-1/2 w-full">
<div className="grid grid-cols-2 gap-4">
<img alt="Luxury 1" className="rounded-lg opacity-80 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1628151016140-1e5b8e957dbd?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<img alt="Luxury 2" className="rounded-lg opacity-80 hover:opacity-100 transition-opacity mt-8" src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-8 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
<div className="text-center md:text-left">
<p className="text-sm font-medium text-slate-500 mb-1">Market Trend</p>
<div className="flex items-baseline gap-2">
<h4 className="text-2xl font-semibold text-slate-900">High Demand</h4>
<span className="text-green-600 text-xs font-medium bg-green-50 px-2 py-1 rounded">+5.4% YoY</span>
</div>
</div>
<div className="h-10 w-px bg-slate-200 hidden md:block"></div>
<div className="text-center md:text-left">
<p className="text-sm font-medium text-slate-500 mb-1">Avg. Days on Market</p>
<h4 className="text-2xl font-semibold text-slate-900">18 Days</h4>
</div>
<div className="h-10 w-px bg-slate-200 hidden md:block"></div>
<div className="text-center md:text-left">
<p className="text-sm font-medium text-slate-500 mb-1">Active Listings</p>
<h4 className="text-2xl font-semibold text-slate-900">1,240</h4>
</div>
<div className="h-10 w-px bg-slate-200 hidden md:block"></div>
<a className="text-sm font-semibold text-brand-600 flex items-center gap-1 hover:gap-2 transition-all" href="#">
                    View Full Report
                    <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight text-center mb-16">Client Stories</h3>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-6 bg-slate-50 rounded-xl">
<div className="flex gap-1 text-brand-500 mb-4">
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-slate-600 text-sm italic mb-6">"Golden Vertex found us our dream cottage in Muskoka before it even hit the market. Their network is unmatched."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-slate-300 rounded-full"></div>
<div>
<p className="text-sm font-medium text-slate-900">Sarah Jenkins</p>
<p className="text-xs text-slate-400">Buyer, Toronto</p>
</div>
</div>
</div>

<div className="p-6 bg-slate-50 rounded-xl">
<div className="flex gap-1 text-brand-500 mb-4">
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-slate-600 text-sm italic mb-6">"Professionalism at its finest. They handled the sale of our commercial property in Calgary with precision."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-slate-300 rounded-full"></div>
<div>
<p className="text-sm font-medium text-slate-900">David Chen</p>
<p className="text-xs text-slate-400">Investor, Calgary</p>
</div>
</div>
</div>

<div className="p-6 bg-slate-50 rounded-xl">
<div className="flex gap-1 text-brand-500 mb-4">
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-slate-600 text-sm italic mb-6">"Relocating from the UK was stressful until we met the team. They sorted everything from housing to schools."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-slate-300 rounded-full"></div>
<div>
<p className="text-sm font-medium text-slate-900">Emma Thompson</p>
<p className="text-xs text-slate-400">Relocation, Montreal</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6 text-center">
<h3 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Meet the Experts</h3>
<p className="text-slate-500 max-w-xl mx-auto mb-12">Our agents are top-tier professionals with deep local knowledge.</p>
<div className="grid md:grid-cols-4 gap-6">
<div className="group">
<div className="aspect-[3/4] rounded-lg overflow-hidden mb-4 bg-slate-200">
<img alt="Agent" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-base font-medium text-slate-900">Michael Ross</h4>
<p className="text-xs text-slate-500">Senior Partner</p>
</div>
<div className="group">
<div className="aspect-[3/4] rounded-lg overflow-hidden mb-4 bg-slate-200">
<img alt="Agent" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=2576&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-base font-medium text-slate-900">Elena Vostok</h4>
<p className="text-xs text-slate-500">Luxury Specialist</p>
</div>
<div className="group">
<div className="aspect-[3/4] rounded-lg overflow-hidden mb-4 bg-slate-200">
<img alt="Agent" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-base font-medium text-slate-900">James Alistair</h4>
<p className="text-xs text-slate-500">Commercial Lead</p>
</div>
<div className="group">
<div className="aspect-[3/4] rounded-lg overflow-hidden mb-4 bg-slate-200">
<img alt="Agent" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&amp;w=2661&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-base font-medium text-slate-900">Sophia Lane</h4>
<p className="text-xs text-slate-500">Interior Consultant</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="rounded-2xl bg-slate-900 text-white p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
<div className="max-w-xl">
<span className="text-brand-400 font-medium text-xs tracking-widest uppercase mb-2 block">Pre-Construction</span>
<h3 className="text-3xl font-semibold mb-4 tracking-tight">The Vertex Tower: Toronto</h3>
<p className="text-slate-300 mb-6">Launching Fall 2024. Experience waterfront living redefined. Priority registration is now open.</p>
</div>
<div className="flex-shrink-0">
<button className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-3 rounded-full text-sm font-medium transition-colors">
                        Register Now
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-3xl mx-auto px-6">
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight mb-8">Frequently Asked Questions</h3>
<div className="space-y-4">
<details className="group bg-white p-4 rounded-lg border border-slate-200 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-slate-900 list-none">
                        Do you handle international buyers?
                        <span className="transition group-open:rotate-180">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<p className="text-slate-500 text-sm mt-3 leading-relaxed">Yes, we specialize in helping international clients navigate the Canadian Foreign Buyer Ban regulations and find eligible properties.</p>
</details>
<details className="group bg-white p-4 rounded-lg border border-slate-200 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-slate-900 list-none">
                        What areas do you service?
                        <span className="transition group-open:rotate-180">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<p className="text-slate-500 text-sm mt-3 leading-relaxed">Our primary hubs are Toronto, Vancouver, Montreal, and Calgary, but we have a network across all provinces.</p>
</details>
<details className="group bg-white p-4 rounded-lg border border-slate-200 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-slate-900 list-none">
                        Do you offer property management?
                        <span className="transition group-open:rotate-180">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<p className="text-slate-500 text-sm mt-3 leading-relaxed">Yes, for our investment clients, we offer full-service property management solutions.</p>
</details>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-400 py-16" id="contact">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 text-white mb-6">
<iconify-icon icon="lucide:mountain-snow" width="20"></iconify-icon>
<span className="font-semibold tracking-widest uppercase">Golden Vertex</span>
</div>
<p className="text-sm leading-relaxed mb-6">
                    Redefining Canadian real estate with integrity, innovation, and an unwavering commitment to excellence.
                </p>
<div className="flex gap-4">
<a className="text-white hover:text-brand-400 transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="20"></iconify-icon></a>
<a className="text-white hover:text-brand-400 transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="20"></iconify-icon></a>
<a className="text-white hover:text-brand-400 transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h5 className="text-white font-medium mb-4">Discover</h5>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white transition-colors" href="#">New Listings</a></li>
<li><a className="hover:text-white transition-colors" href="#">Open Houses</a></li>
<li><a className="hover:text-white transition-colors" href="#">Sold Records</a></li>
<li><a className="hover:text-white transition-colors" href="#">Market Reports</a></li>
</ul>
</div>
<div>
<h5 className="text-white font-medium mb-4">Company</h5>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Press</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h5 className="text-white font-medium mb-4">Newsletter</h5>
<p className="text-xs mb-4">Subscribe for exclusive market updates.</p>
<form className="flex gap-2">
<input className="bg-slate-800 border-none rounded-md px-3 py-2 text-sm w-full focus:ring-1 focus:ring-brand-500 outline-none text-white" placeholder="Email address" type="email"/>
<button className="bg-brand-600 hover:bg-brand-500 text-white rounded-md px-3 py-2">
<iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</form>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs">
<p>© 2024 Golden Vertex Real Estate. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Service</a>
</div>
</div>
</footer>

    </>
  );
}
