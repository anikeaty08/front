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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 glass-nav border-b border-stone-200/60">
<div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

<div className="flex items-center gap-3 cursor-pointer group">
<div className="w-10 h-10 bg-[#1C1917] rounded-sm flex items-center justify-center text-white shadow-xl shadow-stone-900/10 group-hover:scale-105 transition-transform duration-500">
<iconify-icon icon="lucide:gem" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="flex flex-col justify-center">
<span className="text-lg font-semibold tracking-tight text-stone-900 leading-none serif">LUXE</span>
<span className="text-[9px] uppercase tracking-[0.2em] text-[#A18058] font-medium mt-0.5">Estates</span>
</div>
</div>

<div className="hidden md:flex items-center gap-1 bg-stone-100/50 p-1.5 rounded-full border border-stone-200/50 backdrop-blur-sm">
<a className="px-6 py-2 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-xs font-medium text-stone-900 transition-all border border-stone-100" href="#">Buy</a>
<a className="px-6 py-2 rounded-full text-stone-500 hover:text-stone-900 text-xs font-medium transition-all" href="#">Rent</a>
<a className="px-6 py-2 rounded-full text-stone-500 hover:text-stone-900 text-xs font-medium transition-all" href="#">Sell</a>
<a className="px-6 py-2 rounded-full text-stone-500 hover:text-stone-900 text-xs font-medium transition-all" href="#">Agents</a>
</div>

<div className="flex items-center gap-8">
<a className="hidden md:block text-xs font-medium text-stone-600 hover:text-stone-900 transition-colors uppercase tracking-wide" href="#">Sign in</a>
<a className="group bg-[#1C1917] hover:bg-[#292524] text-[#FAFAF9] text-xs font-medium py-3 px-6 rounded-full transition-all shadow-xl shadow-stone-900/10 flex items-center gap-3" href="#">
<span>List Property</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" width="14"></iconify-icon>
</a>
<button className="md:hidden text-stone-900">
<iconify-icon icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative pt-36 pb-32 lg:pt-52 lg:pb-40 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Luxury Home" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=2606&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-[#3f3b35]/20 mix-blend-multiply"></div>
<div className="absolute inset-0 hero-mask"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-end gap-12 lg:gap-20">

<div className="lg:w-7/12">
<div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#1C1917]/80 backdrop-blur-md border border-[#A18058]/30 text-[#FAFAF9] text-[10px] font-medium tracking-widest uppercase mb-8 shadow-2xl">
<span className="w-1.5 h-1.5 rounded-full bg-[#A18058] animate-pulse"></span>
                        Q3 Market Report Available
                    </div>
<h1 className="text-6xl md:text-7xl lg:text-8xl text-stone-50 mb-8 leading-[0.95] drop-shadow-lg">
                        Curating the <br/>
<span className="italic font-light opacity-90 text-stone-200">exceptional.</span>
</h1>
<p className="text-stone-200 text-lg font-light mb-12 max-w-xl leading-relaxed opacity-90 drop-shadow-md">
                        We represent the world's most refined portfolio of architectural residences. Experience real estate reimagined through data and design.
                    </p>

<div className="bg-[#FAFAF9]/95 p-3 rounded-[2rem] shadow-2xl shadow-[#1C1917]/10 max-w-2xl border border-white/40 backdrop-blur-xl">
<div className="flex flex-col md:flex-row items-center divide-y md:divide-y-0 md:divide-x divide-stone-200">

<div className="w-full md:w-[35%] px-6 py-4 group cursor-pointer hover:bg-white rounded-2xl transition-colors">
<label className="block text-[9px] font-bold text-[#A18058] uppercase tracking-widest mb-1.5">Location</label>
<div className="flex items-center justify-between">
<input className="w-full bg-transparent border-none outline-none text-stone-900 text-sm font-medium placeholder-stone-400 cursor-pointer group-hover:bg-transparent font-sans" type="text" value="Montecito, CA"/>
</div>
</div>

<div className="w-full md:w-[30%] px-6 py-4 group cursor-pointer hover:bg-white rounded-2xl transition-colors">
<label className="block text-[9px] font-bold text-[#A18058] uppercase tracking-widest mb-1.5">Collection</label>
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-stone-900">Historic Estates</span>
<iconify-icon className="text-stone-400" icon="lucide:chevron-down" width="14"></iconify-icon>
</div>
</div>

<div className="w-full md:w-[35%] px-6 py-3 flex items-center gap-3">
<div className="flex-1 group cursor-pointer hover:bg-white rounded-2xl transition-colors -ml-4 pl-4 py-1">
<label className="block text-[9px] font-bold text-[#A18058] uppercase tracking-widest mb-1.5">Budget</label>
<span className="text-sm font-medium text-stone-900">$5M - $25M+</span>
</div>
<button className="w-14 h-14 bg-[#1C1917] rounded-full flex items-center justify-center text-[#A18058] hover:bg-[#292524] transition-colors shadow-lg hover:scale-105 duration-300">
<iconify-icon icon="lucide:search" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="hidden lg:block lg:w-5/12 pb-4">
<div className="grid grid-cols-2 gap-4">
<div className="bg-[#1C1917]/40 backdrop-blur-xl border border-white/10 p-6 rounded-t-2xl rounded-bl-2xl text-white">
<div className="text-3xl font-normal serif italic mb-1">12k+</div>
<div className="text-[10px] text-stone-300 font-medium uppercase tracking-wider">Verified Listings</div>
</div>
<div className="bg-[#FAFAF9]/90 backdrop-blur-xl border border-white/20 p-6 rounded-t-2xl rounded-br-2xl text-stone-900">
<div className="text-3xl font-normal serif italic mb-1">$4.2B</div>
<div className="text-[10px] text-stone-500 font-medium uppercase tracking-wider">Annual Volume</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="border-b border-stone-200 bg-[#FAFAF9]">
<div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-10">
<span className="text-[10px] font-semibold text-[#A18058] tracking-[0.2em] uppercase shrink-0">As seen in</span>
<div className="flex items-center gap-16 flex-wrap justify-center w-full opacity-40 grayscale mix-blend-multiply">
<iconify-icon className="text-stone-900" icon="simple-icons:architecturaldigest" width="90"></iconify-icon>
<iconify-icon className="text-stone-900" icon="simple-icons:forbes" width="80"></iconify-icon>
<iconify-icon className="text-stone-900" icon="simple-icons:bloomberg" width="90"></iconify-icon>
<iconify-icon className="text-stone-900" icon="simple-icons:vogue" width="70"></iconify-icon>
</div>
</div>
</section>

<section className="py-28 bg-[#F5F5F4]"> 
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 md:flex justify-between items-end border-b border-stone-200 pb-8">
<div className="max-w-xl">
<span className="text-[#A18058] font-bold tracking-widest text-[10px] uppercase mb-3 block">Our Methodology</span>
<h2 className="text-4xl md:text-5xl text-stone-900 mb-4 serif leading-tight">The art of the search.</h2>
<p className="text-stone-500 text-sm leading-relaxed max-w-md">Combining white-glove concierge service with proprietary market intelligence technology.</p>
</div>
<div className="mt-8 md:mt-0">
<a className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-300 hover:border-stone-900 pb-1 transition-all" href="#">
                        Discover the technology
                        <iconify-icon icon="lucide:arrow-up-right" width="14"></iconify-icon>
</a>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[340px]">

<div className="md:col-span-2 row-span-1 bg-white rounded-[2rem] p-10 border border-stone-100 shadow-sm relative overflow-hidden group">
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="w-12 h-12 rounded-full bg-[#FAFAF9] border border-stone-100 flex items-center justify-center text-[#A18058] mb-6 shadow-sm">
<iconify-icon icon="lucide:scan-line" width="22"></iconify-icon>
</div>
<div>
<h3 className="text-2xl text-stone-900 mb-3 serif italic">Immersive Tours</h3>
<p className="text-stone-500 text-sm max-w-sm leading-relaxed">Experience properties through high-fidelity LiDAR digital twins before booking a private viewing.</p>
</div>
</div>

<div className="absolute top-0 right-0 h-full w-1/2 overflow-hidden mask-image-l">
<div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent z-10"></div>
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="md:col-span-1 row-span-2 bg-[#1C1917] rounded-[2rem] p-10 border border-stone-800 shadow-2xl relative overflow-hidden flex flex-col justify-between group">

<div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
<div className="absolute top-[-50%] right-[-50%] w-full h-full bg-[#A18058]/10 rounded-full blur-[100px]"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-stone-800/50 border border-stone-700 flex items-center justify-center text-[#D4B996] mb-8">
<iconify-icon icon="lucide:gem" width="22"></iconify-icon>
</div>
<h3 className="text-2xl text-[#FAFAF9] mb-3 serif italic">AI Valuation</h3>
<p className="text-stone-400 text-sm leading-relaxed mb-10 font-light">
                            Our proprietary algorithm analyzes 150+ luxury-specific data points to predict long-term asset appreciation.
                        </p>
</div>

<div className="relative h-40 w-full border-t border-stone-800 pt-6">
<div className="flex justify-between items-center mb-4">
<span className="text-[9px] uppercase text-stone-500 font-bold tracking-widest">Growth Projection</span>
<span className="text-xs font-medium text-[#A18058]">+12.4%</span>
</div>
<svg className="w-full h-full overflow-visible" viewbox="0 0 100 40">
<path d="M0 35 C 20 35, 30 20, 50 25 C 70 30, 80 5, 100 0" fill="none" stroke="#57534E" stroke-dasharray="2 2" strokeWidth="1"></path>
<path d="M0 35 C 20 32, 30 15, 50 18 C 70 21, 80 2, 100 -5" fill="none" stroke="#A18058" strokeWidth="2"></path>

<circle className="animate-ping" cx="100" cy="-5" fill="#A18058" opacity="0.5" r="3"></circle>
<circle cx="100" cy="-5" fill="#FAFAF9" r="2"></circle>
</svg>
</div>
</div>

<div className="bg-white rounded-[2rem] p-10 border border-stone-100 shadow-sm flex flex-col justify-between hover:border-[#A18058]/30 transition-colors group">
<div className="w-12 h-12 rounded-full bg-[#F5F5F4] border border-stone-100 flex items-center justify-center text-stone-600 mb-4 group-hover:bg-[#A18058] group-hover:text-white transition-colors duration-500">
<iconify-icon icon="lucide:shield-check" width="22"></iconify-icon>
</div>
<div>
<h3 className="text-xl text-stone-900 mb-3 serif italic">Legal Verification</h3>
<p className="text-stone-500 text-xs leading-relaxed">Every deed, title, and permit is pre-vetted by our in-house legal team.</p>
</div>
</div>

<div className="bg-white rounded-[2rem] p-10 border border-stone-100 shadow-sm flex flex-col justify-between hover:border-[#A18058]/30 transition-colors group">
<div className="w-12 h-12 rounded-full bg-[#F5F5F4] border border-stone-100 flex items-center justify-center text-stone-600 mb-4 group-hover:bg-[#A18058] group-hover:text-white transition-colors duration-500">
<iconify-icon icon="lucide:key" width="22"></iconify-icon>
</div>
<div>
<h3 className="text-xl text-stone-900 mb-3 serif italic">Private Access</h3>
<p className="text-stone-500 text-xs leading-relaxed">Unlock exclusive "pocket listings" before they reach the public market.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-28 bg-[#FAFAF9] relative">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<span className="text-[#A18058] font-bold tracking-[0.2em] text-[10px] uppercase mb-3 block">Exclusive Collection</span>
<h2 className="text-4xl md:text-5xl text-stone-900 serif leading-tight">Curated Residences</h2>
</div>

<div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
<button className="px-6 py-2 bg-[#1C1917] text-white rounded-full text-xs font-medium tracking-wide shadow-lg">All</button>
<button className="px-6 py-2 bg-white border border-stone-200 text-stone-500 hover:text-stone-900 hover:border-stone-400 rounded-full text-xs font-medium tracking-wide transition-all whitespace-nowrap">Waterfront</button>
<button className="px-6 py-2 bg-white border border-stone-200 text-stone-500 hover:text-stone-900 hover:border-stone-400 rounded-full text-xs font-medium tracking-wide transition-all whitespace-nowrap">Penthouse</button>
<button className="px-6 py-2 bg-white border border-stone-200 text-stone-500 hover:text-stone-900 hover:border-stone-400 rounded-full text-xs font-medium tracking-wide transition-all whitespace-nowrap">Estates</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">

<div className="group cursor-pointer">
<div className="relative aspect-[4/3] overflow-hidden rounded-[1rem] mb-6">
<img alt="Modern Villa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&amp;w=2671&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/50 via-transparent to-transparent opacity-60"></div>

<div className="absolute top-4 left-4 flex gap-2">
<span className="bg-[#FAFAF9]/95 backdrop-blur-md px-3 py-1.5 rounded-sm text-[9px] font-bold text-stone-900 uppercase tracking-widest shadow-sm">Verified</span>
</div>

<div className="absolute bottom-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
<div className="bg-[#1C1917] text-[#FAFAF9] px-4 py-2 rounded-full text-xs font-medium shadow-xl flex items-center gap-2">
                                View Details <iconify-icon icon="lucide:arrow-right" width="10"></iconify-icon>
</div>
</div>
</div>
<div>
<div className="flex justify-between items-baseline mb-2">
<h3 className="text-xl text-stone-900 serif italic">The Edge Estate</h3>
<span className="text-lg font-medium text-stone-900 font-sans">$12,500,000</span>
</div>
<p className="text-stone-500 text-xs uppercase tracking-widest mb-4">Malibu, California</p>
<div className="flex items-center gap-6 text-stone-500 text-xs border-t border-stone-200 pt-4">
<div className="flex items-center gap-2">
<iconify-icon icon="lucide:bed-double" width="14"></iconify-icon>
<span>6 Beds</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="lucide:bath" width="14"></iconify-icon>
<span>7 Baths</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="lucide:maximize" width="14"></iconify-icon>
<span>8,200 sqft</span>
</div>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/3] overflow-hidden rounded-[1rem] mb-6">
<img alt="Apartment" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/50 via-transparent to-transparent opacity-60"></div>
<div className="absolute top-4 left-4 flex gap-2">
<span className="bg-[#1C1917]/80 backdrop-blur-md px-3 py-1.5 rounded-sm text-[9px] font-bold text-white uppercase tracking-widest border border-white/10">New</span>
</div>
</div>
<div>
<div className="flex justify-between items-baseline mb-2">
<h3 className="text-xl text-stone-900 serif italic">Skyline Penthouse</h3>
<span className="text-lg font-medium text-stone-900 font-sans">$8,950,000</span>
</div>
<p className="text-stone-500 text-xs uppercase tracking-widest mb-4">Tribeca, New York</p>
<div className="flex items-center gap-6 text-stone-500 text-xs border-t border-stone-200 pt-4">
<div className="flex items-center gap-2">
<iconify-icon icon="lucide:bed-double" width="14"></iconify-icon>
<span>3 Beds</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="lucide:bath" width="14"></iconify-icon>
<span>3.5 Baths</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="lucide:maximize" width="14"></iconify-icon>
<span>3,400 sqft</span>
</div>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/3] overflow-hidden rounded-[1rem] mb-6">
<img alt="Modern House" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/50 via-transparent to-transparent opacity-60"></div>
<div className="absolute top-4 left-4 flex gap-2">
<span className="bg-[#A18058] backdrop-blur-md px-3 py-1.5 rounded-sm text-[9px] font-bold text-white uppercase tracking-widest shadow-sm">Rare</span>
</div>
</div>
<div>
<div className="flex justify-between items-baseline mb-2">
<h3 className="text-xl text-stone-900 serif italic">Desert Modern</h3>
<span className="text-lg font-medium text-stone-900 font-sans">$4,200,000</span>
</div>
<p className="text-stone-500 text-xs uppercase tracking-widest mb-4">Scottsdale, Arizona</p>
<div className="flex items-center gap-6 text-stone-500 text-xs border-t border-stone-200 pt-4">
<div className="flex items-center gap-2">
<iconify-icon icon="lucide:bed-double" width="14"></iconify-icon>
<span>4 Beds</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="lucide:bath" width="14"></iconify-icon>
<span>4 Baths</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="lucide:maximize" width="14"></iconify-icon>
<span>4,100 sqft</span>
</div>
</div>
</div>
</div>
</div>
<div className="mt-20 text-center">
<button className="bg-transparent border border-stone-300 text-stone-900 hover:bg-[#1C1917] hover:text-white hover:border-[#1C1917] px-10 py-4 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 inline-flex items-center gap-3">
                    View Entire Portfolio
                    <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="bg-[#1C1917] py-28 overflow-hidden relative">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>

<div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#292524] rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#A18058]/20 rounded-full blur-[150px] translate-x-1/2 translate-y-1/2"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-24">
<div className="lg:w-5/12">
<h2 className="text-4xl md:text-5xl text-[#FAFAF9] serif italic mb-6">
                        A brokerage in <br/>your pocket.
                    </h2>
<p className="text-stone-400 text-base mb-12 leading-relaxed font-light">
                        Manage listings, schedule private viewings, and sign encrypted documents securely. The future of real estate is seamless.
                    </p>
<ul className="space-y-6 mb-12">
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-[#A18058]/20 flex items-center justify-center text-[#A18058] mt-0.5 border border-[#A18058]/20">
<iconify-icon icon="lucide:check" width="12"></iconify-icon>
</div>
<div>
<h4 className="text-stone-200 text-sm font-medium">Real-time Analytics</h4>
<p className="text-stone-500 text-xs mt-1">Track market trends and valuation changes instantly.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-[#A18058]/20 flex items-center justify-center text-[#A18058] mt-0.5 border border-[#A18058]/20">
<iconify-icon icon="lucide:check" width="12"></iconify-icon>
</div>
<div>
<h4 className="text-stone-200 text-sm font-medium">Concierge Chat</h4>
<p className="text-stone-500 text-xs mt-1">Direct line to your dedicated agent and legal team.</p>
</div>
</li>
</ul>
<div className="flex gap-4">
<button className="bg-[#FAFAF9] text-[#1C1917] px-8 py-3.5 rounded-xl text-sm font-semibold hover:bg-stone-200 transition-colors flex items-center gap-3">
<iconify-icon icon="lucide:apple" width="18"></iconify-icon>
                            App Store
                        </button>
</div>
</div>

<div className="lg:w-7/12 relative flex justify-center lg:justify-end">

<div className="relative w-[340px] h-[680px] bg-[#0c0a09] rounded-[56px] border-[8px] border-[#292524] shadow-2xl overflow-hidden rotate-[-6deg] hover:rotate-0 transition-all duration-700 ring-1 ring-white/10">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-8 bg-black rounded-b-2xl z-20"></div>

<div className="w-full h-full bg-[#FAFAF9] relative overflow-hidden flex flex-col">

<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover opacity-20 grayscale sepia" src="https://assets.website-files.com/63a9fb94e473f36dbe0995c6/63a9fb94e473f36a8d099616_map-bg.jpg"/>
</div>

<div className="relative z-10 p-6 pt-16 flex flex-col h-full">

<div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg shadow-stone-900/5 p-4 flex items-center gap-3 mb-6 border border-stone-100">
<iconify-icon className="text-stone-400" icon="lucide:search"></iconify-icon>
<div className="flex-1 text-xs text-stone-600 font-medium">San Francisco, CA</div>
<div className="w-8 h-8 rounded-full bg-[#1C1917] flex items-center justify-center text-white">
<iconify-icon icon="lucide:sliders-horizontal" width="14"></iconify-icon>
</div>
</div>

<div className="absolute top-44 left-8 bg-[#1C1917] text-[#FAFAF9] px-4 py-2 rounded-lg text-xs font-bold shadow-xl flex items-center gap-2 animate-bounce duration-[2000ms]">
                                    $5.4M
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#A18058]"></div>
</div>
<div className="absolute top-60 right-6 bg-white text-[#1C1917] px-4 py-2 rounded-lg text-xs font-bold shadow-xl border border-stone-100">
                                    $3.2M
                                </div>

<div className="mt-auto bg-white/95 backdrop-blur-xl rounded-[20px] p-4 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] border border-stone-100">
<div className="flex gap-4">
<img className="w-24 h-24 rounded-2xl object-cover" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
<div className="flex-1 flex flex-col justify-center">
<div className="flex justify-between items-start mb-1">
<h4 className="text-sm text-stone-900 serif italic font-bold">The Loft</h4>
<iconify-icon className="text-stone-300" icon="lucide:heart" width="16"></iconify-icon>
</div>
<p className="text-[10px] text-stone-500 mb-3 uppercase tracking-wider">SoHo District</p>
<div className="flex justify-between items-center">
<span className="text-sm font-bold text-stone-900">$2,400,000</span>
<button className="w-8 h-8 rounded-full bg-[#1C1917] text-[#FAFAF9] flex items-center justify-center hover:bg-[#A18058] transition-colors">
<iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#FAFAF9] pt-24 pb-12 border-t border-stone-200">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-20">

<div className="lg:w-1/3">
<div className="flex items-center gap-3 mb-8">
<div className="w-8 h-8 bg-[#1C1917] rounded-sm flex items-center justify-center text-white">
<iconify-icon icon="lucide:gem" width="14"></iconify-icon>
</div>
<span className="text-lg font-bold tracking-tight text-stone-900 serif">LUXE Estate</span>
</div>
<p className="text-stone-500 text-sm leading-relaxed mb-8 max-w-sm font-light">
                        Redefining luxury real estate with technology, data, and world-class service. We are building the future of how the world buys homes.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-400 hover:bg-[#1C1917] hover:text-white hover:border-[#1C1917] transition-all duration-300" href="#">
<iconify-icon icon="lucide:twitter" width="16"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-400 hover:bg-[#1C1917] hover:text-white hover:border-[#1C1917] transition-all duration-300" href="#">
<iconify-icon icon="lucide:instagram" width="16"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-400 hover:bg-[#1C1917] hover:text-white hover:border-[#1C1917] transition-all duration-300" href="#">
<iconify-icon icon="lucide:linkedin" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 gap-16 lg:gap-24 w-full lg:w-auto">
<div>
<h4 className="font-bold text-[#A18058] text-[10px] uppercase tracking-[0.2em] mb-8">Platform</h4>
<ul className="space-y-4">
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Browse Homes</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Agents</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Valuation</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Mobile App</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-[#A18058] text-[10px] uppercase tracking-[0.2em] mb-8">Company</h4>
<ul className="space-y-4">
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">About</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Careers</a> <span className="text-[9px] text-[#A18058] bg-[#A18058]/10 px-1.5 py-0.5 rounded ml-1 font-medium">Hiring</span></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Press</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div className="hidden md:block">
<h4 className="font-bold text-[#A18058] text-[10px] uppercase tracking-[0.2em] mb-8">Legal</h4>
<ul className="space-y-4">
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Terms of Service</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
</div>

<div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<span className="text-stone-400 text-xs font-medium">© 2024 LuxeEstate Inc. All rights reserved.</span>
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[#A18058]"></div>
<span className="text-stone-500 text-xs font-medium">System Operational</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
