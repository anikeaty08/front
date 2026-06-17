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
50: '#eff6ff',
100: '#dbeafe',
200: '#bfdbfe',
300: '#93c5fd',
400: '#60a5fa',
500: '#3b82f6', // Primary Blue
600: '#2563eb', // Hover Blue
700: '#1d4ed8',
800: '#1e40af',
900: '#1e3a8a', // Deep Navy
950: '#172554',
},
slate: {
850: '#151f2e',
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
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
<div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white shadow-sm">
<iconify-icon icon="lucide:building-2" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tight text-slate-900 uppercase">Azure Estate</span>
</div>

<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-500">
<a className="hover:text-brand-600 transition-colors" href="#buy">Buy</a>
<a className="hover:text-brand-600 transition-colors" href="#rent">Rent</a>
<a className="hover:text-brand-600 transition-colors" href="#sell">Sell</a>
<a className="hover:text-brand-600 transition-colors" href="#new-projects">Developments</a>
<a className="hover:text-brand-600 transition-colors" href="#agents">Agents</a>
</div>

<div className="flex items-center gap-4">
<div className="hidden md:flex items-center gap-4">
<a className="flex items-center gap-2 text-xs font-medium text-slate-600 hover:text-brand-600 transition-colors" href="tel:+18005550199">
<iconify-icon icon="lucide:phone" strokeWidth="1.5" width="14"></iconify-icon>
                        (800) 555-0199
                    </a>
<a className="flex items-center gap-2 text-xs font-medium bg-brand-600 text-white px-4 py-2.5 rounded-full hover:bg-brand-700 transition-all shadow-sm shadow-brand-200" href="#contact">
                        Get Valuation
                    </a>
</div>
<button className="md:hidden text-slate-900">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-slate-50">

<div className="absolute inset-0 z-0">
<img alt="Modern Home" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600596542815-3ad19fb812a7?q=80&amp;w=2575&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/30 to-slate-900/60"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center w-full pt-12">

<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight mb-6 leading-tight text-shadow-sm">
                Discover Luxury Living <br/> Across <span className="text-brand-200">America.</span>
</h1>
<p className="text-lg md:text-xl text-slate-100 max-w-2xl mx-auto mb-10 font-light tracking-wide">
                Exclusive properties in New York, Los Angeles, and Miami. <br className="hidden md:block"/> Experience a seamless real estate journey.
            </p>

<div className="bg-white p-3 md:p-4 rounded-2xl shadow-2xl shadow-slate-900/20 max-w-4xl mx-auto backdrop-blur-sm bg-white/95">

<div className="flex gap-6 mb-4 px-2 border-b border-slate-100 pb-2">
<button className="text-sm font-semibold text-brand-600 border-b-2 border-brand-600 pb-2">Buy</button>
<button className="text-sm font-medium text-slate-500 hover:text-brand-600 transition-colors pb-2">Rent</button>
<button className="text-sm font-medium text-slate-500 hover:text-brand-600 transition-colors pb-2">Sold</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-3">

<div className="relative bg-slate-50 rounded-xl px-4 py-3 border border-slate-100 hover:border-brand-300 transition-colors group">
<label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Location</label>
<div className="flex items-center">
<iconify-icon className="text-brand-500 mr-2" icon="lucide:map-pin" width="16"></iconify-icon>
<input className="w-full text-sm bg-transparent outline-none text-slate-700 font-medium placeholder-slate-400" placeholder="Beverly Hills, Tribeca..." type="text"/>
</div>
</div>

<div className="relative bg-slate-50 rounded-xl px-4 py-3 border border-slate-100 hover:border-brand-300 transition-colors group">
<label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Property Type</label>
<div className="flex items-center">
<iconify-icon className="text-brand-500 mr-2" icon="lucide:home" width="16"></iconify-icon>
<select className="w-full text-sm bg-transparent outline-none text-slate-700 font-medium cursor-pointer">
<option>Single Family</option>
<option>Condo / Co-op</option>
<option>Townhouse</option>
<option>Multi-Family</option>
</select>
</div>
</div>

<div className="relative bg-slate-50 rounded-xl px-4 py-3 border border-slate-100 hover:border-brand-300 transition-colors group">
<label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Price Range</label>
<div className="flex items-center">
<iconify-icon className="text-brand-500 mr-2" icon="lucide:dollar-sign" width="16"></iconify-icon>
<select className="w-full text-sm bg-transparent outline-none text-slate-700 font-medium cursor-pointer">
<option>$500k - $1M</option>
<option>$1M - $5M</option>
<option>$5M - $10M+</option>
</select>
</div>
</div>

<button className="bg-brand-600 hover:bg-brand-700 text-white rounded-xl px-4 py-3 font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-500/30">
<iconify-icon icon="lucide:search" strokeWidth="2" width="18"></iconify-icon>
                        Search
                    </button>
</div>

<div className="mt-3 flex flex-wrap gap-2 px-1">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-slate-100 text-[10px] font-medium text-slate-600 cursor-pointer hover:bg-brand-50 hover:text-brand-600 transition-colors">
<iconify-icon className="text-brand-500" icon="lucide:check-circle" width="12"></iconify-icon> Open House
                    </span>
<span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-slate-100 text-[10px] font-medium text-slate-600 cursor-pointer hover:bg-brand-50 hover:text-brand-600 transition-colors">
<iconify-icon className="text-brand-500" icon="lucide:check-circle" width="12"></iconify-icon> Waterfront
                    </span>
<span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-slate-100 text-[10px] font-medium text-slate-600 cursor-pointer hover:bg-brand-50 hover:text-brand-600 transition-colors">
<iconify-icon className="text-brand-500" icon="lucide:check-circle" width="12"></iconify-icon> New Construction
                    </span>
</div>
</div>
</div>
</section>

<section className="py-10 border-b border-slate-100 bg-white">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">Trusted by leading partners</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0">

<div className="flex items-center gap-2 text-slate-800 font-bold text-lg"><iconify-icon className="text-brand-600" icon="lucide:building"></iconify-icon> RELATED</div>
<div className="flex items-center gap-2 text-slate-800 font-bold text-lg"><iconify-icon className="text-brand-600" icon="lucide:box"></iconify-icon> DOUGLAS ELLIMAN</div>
<div className="flex items-center gap-2 text-slate-800 font-bold text-lg"><iconify-icon className="text-brand-600" icon="lucide:hexagon"></iconify-icon> SOTHEBY'S</div>
<div className="flex items-center gap-2 text-slate-800 font-bold text-lg"><iconify-icon className="text-brand-600" icon="lucide:triangle"></iconify-icon> LENNAR</div>
<div className="flex items-center gap-2 text-slate-800 font-bold text-lg"><iconify-icon className="text-brand-600" icon="lucide:landmark"></iconify-icon> CHASE</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
<div>
<span className="text-brand-600 font-semibold text-xs tracking-widest uppercase mb-2 block">Exclusive Properties</span>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Featured Listings</h2>
<p className="text-slate-500 mt-2 text-sm max-w-lg">Handpicked properties offering the best value and lifestyle in prime US markets.</p>
</div>
<a className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200 transition-all hover:shadow-md" href="#">
                    View All Listings
                    <iconify-icon icon="lucide:arrow-right" strokeWidth="2" width="16"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-200 transition-all duration-300">
<div className="relative aspect-[4/3] overflow-hidden">
<span className="absolute top-4 left-4 bg-white/95 backdrop-blur text-slate-900 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider z-10 shadow-sm">Verified</span>
<span className="absolute top-4 right-4 bg-slate-900/50 backdrop-blur text-white p-2 rounded-full z-10 hover:bg-brand-600 cursor-pointer transition-colors">
<iconify-icon icon="lucide:heart" width="16"></iconify-icon>
</span>
<img alt="Property" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-slate-900 tracking-tight group-hover:text-brand-600 transition-colors">Hollywood Hills Estate</h3>
<p className="text-lg font-bold text-brand-600">$4,500,000</p>
</div>
<p className="text-sm text-slate-500 flex items-center gap-1 mb-4">
<iconify-icon icon="lucide:map-pin" width="14"></iconify-icon> Los Angeles, CA 90068
                        </p>
<div className="flex gap-4 text-xs font-medium text-slate-600 border-t border-slate-100 pt-4">
<span className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded"><iconify-icon className="text-slate-400" icon="lucide:bed-double" width="14"></iconify-icon> 3 Beds</span>
<span className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded"><iconify-icon className="text-slate-400" icon="lucide:bath" width="14"></iconify-icon> 3 Baths</span>
<span className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded"><iconify-icon className="text-slate-400" icon="lucide:maximize" width="14"></iconify-icon> 2,850 sqft</span>
</div>
<button className="w-full mt-5 bg-slate-900 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-brand-600 transition-colors">View Details</button>
</div>
</div>

<div className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-200 transition-all duration-300">
<div className="relative aspect-[4/3] overflow-hidden">
<span className="absolute top-4 left-4 bg-brand-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider z-10 shadow-sm">Just Listed</span>
<span className="absolute top-4 right-4 bg-slate-900/50 backdrop-blur text-white p-2 rounded-full z-10 hover:bg-brand-600 cursor-pointer transition-colors">
<iconify-icon icon="lucide:heart" width="16"></iconify-icon>
</span>
<img alt="Property" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=2653&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-slate-900 tracking-tight group-hover:text-brand-600 transition-colors">Hamptons Retreat</h3>
<p className="text-lg font-bold text-brand-600">$8,250,000</p>
</div>
<p className="text-sm text-slate-500 flex items-center gap-1 mb-4">
<iconify-icon icon="lucide:map-pin" width="14"></iconify-icon> East Hampton, NY 11937
                        </p>
<div className="flex gap-4 text-xs font-medium text-slate-600 border-t border-slate-100 pt-4">
<span className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded"><iconify-icon className="text-slate-400" icon="lucide:bed-double" width="14"></iconify-icon> 5 Beds</span>
<span className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded"><iconify-icon className="text-slate-400" icon="lucide:bath" width="14"></iconify-icon> 5.5 Baths</span>
<span className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded"><iconify-icon className="text-slate-400" icon="lucide:maximize" width="14"></iconify-icon> 6,200 sqft</span>
</div>
<button className="w-full mt-5 bg-slate-900 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-brand-600 transition-colors">View Details</button>
</div>
</div>

<div className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-200 transition-all duration-300">
<div className="relative aspect-[4/3] overflow-hidden">
<span className="absolute top-4 left-4 bg-white/95 backdrop-blur text-slate-900 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider z-10 shadow-sm">Open House</span>
<span className="absolute top-4 right-4 bg-slate-900/50 backdrop-blur text-white p-2 rounded-full z-10 hover:bg-brand-600 cursor-pointer transition-colors">
<iconify-icon icon="lucide:heart" width="16"></iconify-icon>
</span>
<img alt="Property" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-slate-900 tracking-tight group-hover:text-brand-600 transition-colors">Tribeca Loft</h3>
<p className="text-lg font-bold text-brand-600">$2,100,000</p>
</div>
<p className="text-sm text-slate-500 flex items-center gap-1 mb-4">
<iconify-icon icon="lucide:map-pin" width="14"></iconify-icon> New York, NY 10013
                        </p>
<div className="flex gap-4 text-xs font-medium text-slate-600 border-t border-slate-100 pt-4">
<span className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded"><iconify-icon className="text-slate-400" icon="lucide:bed-double" width="14"></iconify-icon> 2 Beds</span>
<span className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded"><iconify-icon className="text-slate-400" icon="lucide:bath" width="14"></iconify-icon> 2 Baths</span>
<span className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded"><iconify-icon className="text-slate-400" icon="lucide:maximize" width="14"></iconify-icon> 1,400 sqft</span>
</div>
<button className="w-full mt-5 bg-slate-900 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-brand-600 transition-colors">View Details</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-brand-600 font-semibold text-xs tracking-widest uppercase mb-2 block">Our Expertise</span>
<h3 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Everything You Need at One Place</h3>
<p className="text-slate-500 text-sm">We provide end-to-end real estate services for buyers, sellers, and investors.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 border border-slate-100 rounded-2xl hover:border-brand-200 hover:shadow-lg transition-all bg-slate-50/50 group">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:search" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-slate-900 mb-2">For Buyers</h4>
<ul className="space-y-2 text-sm text-slate-500 mt-4">
<li className="flex items-center gap-2"><iconify-icon className="text-brand-500" icon="lucide:check" width="14"></iconify-icon> Exclusive Inventory</li>
<li className="flex items-center gap-2"><iconify-icon className="text-brand-500" icon="lucide:check" width="14"></iconify-icon> Private Tours</li>
<li className="flex items-center gap-2"><iconify-icon className="text-brand-500" icon="lucide:check" width="14"></iconify-icon> Mortgage Pre-Approval</li>
</ul>
</div>

<div className="p-8 border border-slate-100 rounded-2xl hover:border-brand-200 hover:shadow-lg transition-all bg-slate-50/50 group">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:tag" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-slate-900 mb-2">For Sellers</h4>
<ul className="space-y-2 text-sm text-slate-500 mt-4">
<li className="flex items-center gap-2"><iconify-icon className="text-brand-500" icon="lucide:check" width="14"></iconify-icon> Home Valuation</li>
<li className="flex items-center gap-2"><iconify-icon className="text-brand-500" icon="lucide:check" width="14"></iconify-icon> Premium Staging</li>
<li className="flex items-center gap-2"><iconify-icon className="text-brand-500" icon="lucide:check" width="14"></iconify-icon> Closing Support</li>
</ul>
</div>

<div className="p-8 border border-slate-100 rounded-2xl hover:border-brand-200 hover:shadow-lg transition-all bg-slate-50/50 group">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:trending-up" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-slate-900 mb-2">For Investors</h4>
<ul className="space-y-2 text-sm text-slate-500 mt-4">
<li className="flex items-center gap-2"><iconify-icon className="text-brand-500" icon="lucide:check" width="14"></iconify-icon> High ROI Deals</li>
<li className="flex items-center gap-2"><iconify-icon className="text-brand-500" icon="lucide:check" width="14"></iconify-icon> Pre-Construction</li>
<li className="flex items-center gap-2"><iconify-icon className="text-brand-500" icon="lucide:check" width="14"></iconify-icon> Property Management</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600/20 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<span className="text-brand-400 font-semibold text-xs tracking-widest uppercase mb-2 block">Why Azure Estate</span>
<h3 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 leading-tight">Not just agents. <br/>We are your partners.</h3>
<p className="text-slate-400 mb-8 leading-relaxed">
                        With over 10 years of experience in the US market, we bring transparency and expertise to every transaction.
                    </p>
<div className="space-y-4">
<div className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-400 flex-shrink-0 mt-1">
<iconify-icon icon="lucide:shield-check" width="14"></iconify-icon>
</div>
<div>
<h5 className="font-medium text-white">Licensed Brokerage</h5>
<p className="text-sm text-slate-500">Fully licensed and insured with National Association of Realtors membership.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-400 flex-shrink-0 mt-1">
<iconify-icon icon="lucide:users" width="14"></iconify-icon>
</div>
<div>
<h5 className="font-medium text-white">Local Market Experts</h5>
<p className="text-sm text-slate-500">Deep knowledge of neighborhoods, school districts, and zoning.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-400 flex-shrink-0 mt-1">
<iconify-icon icon="lucide:clock" width="14"></iconify-icon>
</div>
<div>
<h5 className="font-medium text-white">Fast Closures</h5>
<p className="text-sm text-slate-500">Efficient paperwork and title processing to save you time.</p>
</div>
</div>
</div>
<div className="mt-10 flex gap-8 border-t border-slate-800 pt-8">
<div>
<p className="text-3xl font-bold text-white tracking-tight">10+</p>
<p className="text-xs text-slate-400 mt-1 uppercase tracking-wide">Years Active</p>
</div>
<div>
<p className="text-3xl font-bold text-white tracking-tight">1,000+</p>
<p className="text-xs text-slate-400 mt-1 uppercase tracking-wide">Families Housed</p>
</div>
<div>
<p className="text-3xl font-bold text-white tracking-tight">$1B+</p>
<p className="text-xs text-slate-400 mt-1 uppercase tracking-wide">Sales Volume</p>
</div>
</div>
</div>
<div className="relative h-full min-h-[400px]">
<img alt="Agent Meeting" className="rounded-2xl shadow-2xl border border-slate-700 w-full h-full object-cover" src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&amp;w=2573&amp;auto=format&amp;fit=crop"/>

<div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl max-w-[200px]">
<div className="flex items-center gap-2 mb-2">
<div className="flex text-yellow-400 text-xs">
<iconify-icon icon="lucide:star" width="12"></iconify-icon>
<iconify-icon icon="lucide:star" width="12"></iconify-icon>
<iconify-icon icon="lucide:star" width="12"></iconify-icon>
<iconify-icon icon="lucide:star" width="12"></iconify-icon>
<iconify-icon icon="lucide:star" width="12"></iconify-icon>
</div>
<span className="text-xs font-bold text-slate-900">4.9/5</span>
</div>
<p className="text-[10px] text-slate-500">"The most transparent process I've ever experienced."</p>
<p className="text-[10px] font-semibold text-slate-900 mt-1">- Sarah J.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight mb-8">Serving Top Markets</h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<a className="relative rounded-xl overflow-hidden aspect-square group" href="#">
<img alt="New York" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1496442226666-8d4a0e62e6e9?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4 text-white">
<p className="text-lg font-medium tracking-tight">New York</p>
<p className="text-xs opacity-80 group-hover:text-brand-300 transition-colors">Manhattan &amp; Brooklyn</p>
</div>
</a>
<a className="relative rounded-xl overflow-hidden aspect-square group" href="#">
<img alt="Los Angeles" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1534190239940-9ba8944ea261?q=80&amp;w=2832&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4 text-white">
<p className="text-lg font-medium tracking-tight">Los Angeles</p>
<p className="text-xs opacity-80 group-hover:text-brand-300 transition-colors">Beverly Hills &amp; Venice</p>
</div>
</a>
<a className="relative rounded-xl overflow-hidden aspect-square group" href="#">
<img alt="Miami" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1535498730771-e735b998cd64?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4 text-white">
<p className="text-lg font-medium tracking-tight">Miami</p>
<p className="text-xs opacity-80 group-hover:text-brand-300 transition-colors">South Beach &amp; Brickell</p>
</div>
</a>
<a className="relative rounded-xl overflow-hidden aspect-square group" href="#">
<img alt="Austin" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4 text-white">
<p className="text-lg font-medium tracking-tight">Austin</p>
<p className="text-xs opacity-80 group-hover:text-brand-300 transition-colors">Downtown &amp; Hills</p>
</div>
</a>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-y border-slate-200">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
<div>
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight mb-4">About Azure Estate</h3>
<p className="text-slate-600 mb-4 leading-relaxed">
                    We are a premier team of real estate professionals dedicated to redefining the property buying experience. Our focus is on market intelligence, integrity, and client satisfaction across the United States.
                </p>
<p className="text-slate-600 mb-6 leading-relaxed">
                    Whether you are looking for a luxury penthouse in NYC or a vacation home in Florida, we guide you every step of the way.
                </p>
<a className="text-brand-600 font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all" href="#">
                    Read Our Full Story <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
<div className="flex gap-4">
<img alt="Office" className="w-1/2 rounded-lg object-cover shadow-sm" src="https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<img alt="Building" className="w-1/2 rounded-lg object-cover shadow-sm mt-8" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight text-center mb-16">What Our Clients Say</h3>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-6 bg-white border border-slate-100 rounded-xl hover:shadow-lg transition-shadow">
<div className="flex gap-1 text-yellow-400 mb-4">
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-slate-600 text-sm italic mb-6">"Incredible service. Helped us navigate a bidding war and secure our dream home in San Francisco."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 font-bold text-xs">ER</div>
<div>
<p className="text-sm font-medium text-slate-900">Emily Ross</p>
<p className="text-xs text-slate-400">Buyer, San Francisco</p>
</div>
</div>
</div>

<div className="p-6 bg-white border border-slate-100 rounded-xl hover:shadow-lg transition-shadow">
<div className="flex gap-1 text-yellow-400 mb-4">
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-slate-600 text-sm italic mb-6">"Their market analysis was spot on. Sold our property in Austin for 15% over asking price."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 font-bold text-xs">DC</div>
<div>
<p className="text-sm font-medium text-slate-900">David Chen</p>
<p className="text-xs text-slate-400">Seller, Austin</p>
</div>
</div>
</div>

<div className="p-6 bg-white border border-slate-100 rounded-xl hover:shadow-lg transition-shadow">
<div className="flex gap-1 text-yellow-400 mb-4">
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-slate-600 text-sm italic mb-6">"Found our office headquarters through Azure. Professional, timely, and excellent negotiation skills."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 font-bold text-xs">JP</div>
<div>
<p className="text-sm font-medium text-slate-900">John Peterson</p>
<p className="text-xs text-slate-400">Investor, New York</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white">
<div className="max-w-5xl mx-auto px-6">
<div className="bg-brand-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl shadow-brand-500/30 overflow-hidden relative">

<div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2"></div>
<h3 className="text-3xl font-semibold mb-4 tracking-tight relative z-10">Still looking for the perfect home?</h3>
<p className="text-brand-100 mb-8 max-w-lg mx-auto relative z-10">Get a free consultation with our licensed brokers and a customized list of properties.</p>
<div className="flex flex-col md:flex-row justify-center gap-4 relative z-10">
<button className="bg-white text-brand-600 hover:bg-slate-50 px-8 py-3 rounded-xl font-semibold text-sm transition-colors flex items-center justify-center gap-2">
                        Talk to a Broker
                        <iconify-icon icon="lucide:phone-call" width="16"></iconify-icon>
</button>
<button className="bg-brand-700 text-white hover:bg-brand-800 px-8 py-3 rounded-xl font-semibold text-sm transition-colors border border-brand-500 flex items-center justify-center gap-2">
                        Schedule Viewing
                        <iconify-icon icon="lucide:calendar" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<footer className="bg-slate-850 text-slate-400 py-16 border-t border-slate-800" id="contact">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-12">

<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 text-white mb-6">
<div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="lucide:building-2" width="18"></iconify-icon>
</div>
<span className="font-semibold tracking-tight uppercase">Azure Estate</span>
</div>
<p className="text-sm leading-relaxed mb-6">
                    Your trusted partner for buying, selling, and renting luxury properties across the USA.
                </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-brand-400 transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-brand-400 transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-brand-400 transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-brand-400 transition-colors" href="#"><iconify-icon icon="lucide:facebook" width="20"></iconify-icon></a>
</div>
</div>

<div>
<h5 className="text-white font-medium mb-4 tracking-wide text-sm">Quick Links</h5>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-brand-400 transition-colors" href="#">Featured Listings</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">New Developments</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Sell Your Home</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Market Reports</a></li>
</ul>
</div>

<div>
<h5 className="text-white font-medium mb-4 tracking-wide text-sm">Contact Us</h5>
<ul className="space-y-3 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="text-brand-500 mt-1" icon="lucide:map-pin" width="16"></iconify-icon>
<span>880 Fifth Avenue,<br/>New York, NY 10021</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-500" icon="lucide:phone" width="16"></iconify-icon>
<span>(212) 555-0123</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-500" icon="lucide:mail" width="16"></iconify-icon>
<span>hello@azureestate.com</span>
</li>
</ul>
</div>

<div>
<h5 className="text-white font-medium mb-4 tracking-wide text-sm">Newsletter</h5>
<p className="text-xs mb-4">Subscribe for latest market trends and hot deals.</p>
<form className="flex flex-col gap-2">
<input className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm w-full focus:ring-1 focus:ring-brand-500 outline-none text-white placeholder-slate-500" placeholder="Email address" type="email"/>
<button className="bg-brand-600 hover:bg-brand-500 text-white rounded-lg px-3 py-2 text-sm font-medium transition-colors">
                        Subscribe
                    </button>
</form>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
<p>© 2024 Azure Estate. Equal Housing Opportunity. DRE# 01234567</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Service</a>
<a className="hover:text-white" href="#">Fair Housing</a>
</div>
</div>
</footer>

    </>
  );
}
