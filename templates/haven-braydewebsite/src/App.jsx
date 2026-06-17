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
      

<aside className="w-64 bg-[#E8DFD1] wood-texture flex-shrink-0 flex flex-col hidden md:flex transition-all duration-300 border-r border-[#C4A484]/20 shadow-[4px_0_24px_rgba(0,0,0,0.02)] z-30 relative">

<div className="h-20 flex items-center px-8 border-b border-[#C4A484]/20">
<span className="text-[#2C2C2C] text-lg font-serif font-light tracking-[0.2em] uppercase">H a v e n</span>
</div>

<div className="flex-1 overflow-y-auto py-8 flex flex-col gap-1 px-4">
<span className="font-sans text-xs uppercase tracking-widest font-normal text-[#6B6B6B] mb-3 px-4">Menu</span>
<a className="flex items-center space-x-4 px-4 py-3.5 rounded-xl bg-white/70 shadow-sm text-[#2C2C2C] transition-all group border border-[#FFFFFF]" href="#">
<iconify-icon className="text-[#8B5F4C]" icon="solar:widget-5-linear" width="20"></iconify-icon>
<span className="font-sans text-sm font-light">Dashboard</span>
</a>
<a className="flex items-center space-x-4 px-4 py-3.5 rounded-xl text-[#6B6B6B] hover:bg-white/40 hover:text-[#2C2C2C] transition-all group" href="#">
<iconify-icon icon="solar:buildings-2-linear" width="20"></iconify-icon>
<span className="font-sans text-sm font-light">Properties</span>
</a>
<a className="flex items-center space-x-4 px-4 py-3.5 rounded-xl text-[#6B6B6B] hover:bg-white/40 hover:text-[#2C2C2C] transition-all group" href="#">
<iconify-icon icon="solar:map-point-search-linear" width="20"></iconify-icon>
<span className="font-sans text-sm font-light">Marketplace</span>
</a>
<a className="flex items-center space-x-4 px-4 py-3.5 rounded-xl text-[#6B6B6B] hover:bg-white/40 hover:text-[#2C2C2C] transition-all group" href="#">
<iconify-icon icon="solar:pie-chart-2-linear" width="20"></iconify-icon>
<span className="font-sans text-sm font-light">Portfolio</span>
</a>
<a className="flex items-center space-x-4 px-4 py-3.5 rounded-xl text-[#6B6B6B] hover:bg-white/40 hover:text-[#2C2C2C] transition-all group" href="#">
<iconify-icon icon="solar:document-text-linear" width="20"></iconify-icon>
<span className="font-sans text-sm font-light">Documents</span>
</a>
<span className="font-sans text-xs uppercase tracking-widest font-normal text-[#6B6B6B] mt-8 mb-3 px-4">System</span>
<a className="flex items-center space-x-4 px-4 py-3.5 rounded-xl text-[#6B6B6B] hover:bg-white/40 hover:text-[#2C2C2C] transition-all group" href="#">
<iconify-icon icon="solar:chat-round-dots-linear" width="20"></iconify-icon>
<span className="font-sans text-sm font-light flex-1">Messages</span>
<span className="bg-[#8B5F4C] text-white font-sans text-[10px] font-normal px-2 py-0.5 rounded-full shadow-sm">3</span>
</a>
<a className="flex items-center space-x-4 px-4 py-3.5 rounded-xl text-[#6B6B6B] hover:bg-white/40 hover:text-[#2C2C2C] transition-all group" href="#">
<iconify-icon icon="solar:settings-linear" width="20"></iconify-icon>
<span className="font-sans text-sm font-light">Settings</span>
</a>
</div>

<div className="p-6 border-t border-[#C4A484]/20">
<div className="bg-gradient-to-br from-[#FFFFFF] to-[#F5F0E8] p-5 rounded-2xl border border-[#C4A484]/30 shadow-sm">
<div className="flex items-center justify-between mb-3">
<span className="font-sans text-xs font-normal text-[#2C2C2C] tracking-widest uppercase">Pro Member</span>
<iconify-icon className="text-[#8B5F4C]" icon="solar:star-fall-linear" width="16"></iconify-icon>
</div>
<p className="font-sans text-xs text-[#6B6B6B] font-light leading-relaxed mb-4">Access advanced analytics and off-market deals.</p>
<button className="w-full bg-[#8B5F4C] hover:bg-[#7A5241] text-white font-sans text-xs py-2.5 rounded-xl transition-colors font-light shadow-sm">
                    Upgrade Plan
                </button>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col overflow-hidden relative">

<header className="h-20 bg-[#F5F0E8]/80 backdrop-blur-md border-b border-[#C4A484]/20 flex items-center justify-between px-8 lg:px-12 z-20 sticky top-0">
<div className="flex items-center">
<button className="md:hidden mr-5 text-[#2C2C2C] hover:text-[#8B5F4C] transition-colors">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<div className="hidden sm:flex items-center bg-white border border-[#C4A484]/30 rounded-full px-5 py-2.5 focus-within:ring-4 focus-within:ring-[#8B5F4C]/10 focus-within:border-[#8B5F4C] transition-all w-80 shadow-sm">
<iconify-icon className="text-[#6B6B6B] mr-3" icon="solar:magnifer-linear" width="18"></iconify-icon>
<input className="bg-transparent border-none outline-none font-sans text-sm font-light w-full text-[#2C2C2C] placeholder:text-[#6B6B6B]" placeholder="Search properties, markets, documents..." type="text"/>
</div>
</div>
<div className="flex items-center space-x-6">
<button className="relative text-[#6B6B6B] hover:text-[#2C2C2C] transition-colors">
<iconify-icon icon="solar:bell-linear" width="22"></iconify-icon>
<span className="absolute top-0 right-0 w-2 h-2 bg-[#C44C4C] rounded-full ring-2 ring-[#F5F0E8]"></span>
</button>
<div className="w-px h-6 bg-[#C4A484]/30"></div>
<button className="flex items-center space-x-3 group">
<img alt="User" className="w-9 h-9 rounded-full object-cover border border-[#C4A484]/50 group-hover:border-[#8B5F4C] transition-all shadow-sm" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div className="hidden md:block text-left">
<p className="font-sans text-sm font-light text-[#2C2C2C] leading-none mb-1.5">Alex Morgan</p>
<p className="font-sans text-[10px] text-[#6B6B6B] leading-none uppercase tracking-widest font-normal">Investor</p>
</div>
<iconify-icon className="text-[#6B6B6B] hidden md:block ml-1" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto px-8 lg:px-12 py-10 no-scrollbar">
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-5">
<div>
<h1 className="font-serif text-3xl font-light text-[#2C2C2C] tracking-tight mb-2">Portfolio Overview</h1>
<p className="font-sans text-sm font-light text-[#6B6B6B]">A curated view of your real estate assets and daily performance.</p>
</div>
<button className="bg-[#8B5F4C] text-white px-6 py-3 rounded-xl font-sans text-sm font-light hover:bg-[#7A5241] transition-all shadow-md hover:shadow-lg flex items-center space-x-2">
<iconify-icon icon="solar:add-circle-linear" width="18"></iconify-icon>
<span>Add Property</span>
</button>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

<div className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#E8DFD1] shadow-sm relative overflow-hidden group hover:shadow-md transition-all duration-300">
<div className="absolute top-0 left-0 w-full h-1 bg-[#8B5F4C] opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-5">
<div className="w-10 h-10 rounded-full bg-[#F5F0E8] flex items-center justify-center text-[#8B5F4C] border border-[#C4A484]/20">
<iconify-icon icon="solar:wallet-money-linear" width="22"></iconify-icon>
</div>
<span className="flex items-center font-sans text-xs font-light text-[#8B5F4C] bg-[#F5F0E8] px-2.5 py-1 rounded-full tracking-wide">
<iconify-icon className="mr-1" icon="solar:arrow-right-up-linear" width="12"></iconify-icon>
                            12.3%
                        </span>
</div>
<h3 className="font-sans text-sm font-normal uppercase tracking-widest text-[#6B6B6B] mb-2">Total Value</h3>
<p className="font-serif text-2xl font-extralight text-[#2C2C2C] tracking-tight">$2,450,000</p>
</div>

<div className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#E8DFD1] shadow-sm relative overflow-hidden group hover:shadow-md transition-all duration-300">
<div className="absolute top-0 left-0 w-full h-1 bg-[#C4A484] opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-5">
<div className="w-10 h-10 rounded-full bg-[#F5F0E8] flex items-center justify-center text-[#C4A484] border border-[#C4A484]/20">
<iconify-icon icon="solar:graph-up-linear" width="22"></iconify-icon>
</div>
<span className="flex items-center font-sans text-xs font-light text-[#8B5F4C] bg-[#F5F0E8] px-2.5 py-1 rounded-full tracking-wide">
<iconify-icon className="mr-1" icon="solar:arrow-right-up-linear" width="12"></iconify-icon>
                            4.2%
                        </span>
</div>
<h3 className="font-sans text-sm font-normal uppercase tracking-widest text-[#6B6B6B] mb-2">Monthly Cash Flow</h3>
<p className="font-serif text-2xl font-extralight text-[#2C2C2C] tracking-tight">$8,420</p>
</div>

<div className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#E8DFD1] shadow-sm relative overflow-hidden group hover:shadow-md transition-all duration-300">
<div className="absolute top-0 left-0 w-full h-1 bg-[#6B8E6B] opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-5">
<div className="w-10 h-10 rounded-full bg-[#F5F0E8] flex items-center justify-center text-[#6B8E6B] border border-[#C4A484]/20">
<iconify-icon icon="solar:home-angle-linear" width="22"></iconify-icon>
</div>
</div>
<h3 className="font-sans text-sm font-normal uppercase tracking-widest text-[#6B6B6B] mb-2">Active Properties</h3>
<p className="font-serif text-2xl font-extralight text-[#2C2C2C] tracking-tight">3</p>
</div>

<div className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#E8DFD1] shadow-sm relative overflow-hidden group hover:shadow-md transition-all duration-300">
<div className="absolute top-0 left-0 w-full h-1 bg-[#8B5F4C] opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-5">
<div className="w-10 h-10 rounded-full bg-[#F5F0E8] flex items-center justify-center text-[#8B5F4C] border border-[#C4A484]/20">
<iconify-icon icon="solar:users-group-rounded-linear" width="22"></iconify-icon>
</div>
<span className="flex items-center font-sans text-xs font-light text-[#6B6B6B] bg-[#F5F0E8] px-2.5 py-1 rounded-full tracking-wide">
                            Target: 95%
                        </span>
</div>
<h3 className="font-sans text-sm font-normal uppercase tracking-widest text-[#6B6B6B] mb-2">Occupancy Rate</h3>
<p className="font-serif text-2xl font-extralight text-[#2C2C2C] tracking-tight">94%</p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">

<div className="lg:col-span-8 space-y-10">

<div className="bg-[#FFFFFF] rounded-3xl border border-[#E8DFD1] shadow-sm p-8">
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
<h2 className="font-serif text-xl font-light text-[#2C2C2C] tracking-tight">Portfolio Performance</h2>
<div className="flex bg-[#F5F0E8] p-1.5 rounded-xl border border-[#C4A484]/20">
<button className="px-4 py-1.5 font-sans text-xs font-light uppercase tracking-widest text-[#6B6B6B] hover:text-[#2C2C2C] rounded-lg transition-colors">1M</button>
<button className="px-4 py-1.5 font-sans text-xs font-light uppercase tracking-widest text-[#6B6B6B] hover:text-[#2C2C2C] rounded-lg transition-colors">3M</button>
<button className="px-4 py-1.5 font-sans text-xs font-normal uppercase tracking-widest bg-[#FFFFFF] text-[#2C2C2C] shadow-sm rounded-lg transition-all">1Y</button>
<button className="px-4 py-1.5 font-sans text-xs font-light uppercase tracking-widest text-[#6B6B6B] hover:text-[#2C2C2C] rounded-lg transition-colors">All</button>
</div>
</div>

<div className="h-72 w-full relative group">

<div className="absolute inset-0 flex flex-col justify-between pt-2 pb-8">
<div className="border-b border-dashed border-[#C4A484]/30 w-full h-0"></div>
<div className="border-b border-dashed border-[#C4A484]/30 w-full h-0"></div>
<div className="border-b border-dashed border-[#C4A484]/30 w-full h-0"></div>
<div className="border-b border-[#C4A484]/30 w-full h-0"></div>
</div>

<div className="absolute left-0 h-full flex flex-col justify-between pt-0 pb-8 font-sans text-xs font-light text-[#6B6B6B] tracking-wide hidden sm:flex">
<span>$2.5M</span>
<span>$2.0M</span>
<span>$1.5M</span>
<span>$1.0M</span>
</div>

<div className="absolute bottom-0 w-full flex justify-between font-sans text-xs font-light uppercase tracking-widest text-[#6B6B6B] sm:pl-14">
<span>Jan</span>
<span>Mar</span>
<span>May</span>
<span>Jul</span>
<span>Sep</span>
<span>Nov</span>
</div>

<div className="absolute inset-0 sm:pl-14 pb-8">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 100">
<defs>
<lineargradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#8B5F4C" stop-opacity="0.12"></stop>
<stop offset="100%" stop-color="#8B5F4C" stop-opacity="0"></stop>
</lineargradient>
</defs>

<path d="M0,80 C20,75 30,50 50,45 C70,40 80,20 100,10 L100,100 L0,100 Z" fill="url(#areaGradient)"></path>

<path d="M0,80 C20,75 30,50 50,45 C70,40 80,20 100,10" fill="none" stroke="#8B5F4C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>

<circle className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" cx="50" cy="45" fill="#FFFFFF" r="3.5" stroke="#8B5F4C" strokeWidth="2"></circle>
<circle cx="100" cy="10" fill="#FFFFFF" r="4.5" stroke="#8B5F4C" strokeWidth="2"></circle>
</svg>

<div className="absolute top-[5%] right-[0%] -translate-y-full -translate-x-1/2 bg-[#2C2C2C] text-white px-4 py-2.5 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-10 flex flex-col items-center">
<div className="font-serif text-base font-light tracking-wide mb-1">$2,450,000</div>
<div className="font-sans text-[10px] uppercase tracking-widest text-[#E8DFD1]">Nov 24, 2023</div>
<div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#2C2C2C] rotate-45"></div>
</div>
</div>
</div>
</div>

<div>
<div className="flex justify-between items-center mb-6 px-1">
<h2 className="font-serif text-xl font-light text-[#2C2C2C] tracking-tight">Active Portfolio</h2>
<a className="font-sans text-sm font-light text-[#8B5F4C] hover:text-[#7A5241] transition-colors flex items-center group" href="#">
                                View all <iconify-icon className="ml-1.5 group-hover:translate-x-1 transition-transform" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="flex gap-6 overflow-x-auto pb-6 pt-2 px-1 no-scrollbar snap-x">

<div className="min-w-[300px] sm:min-w-[340px] bg-[#FFFFFF] rounded-2xl border border-[#E8DFD1] shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 snap-start cursor-pointer group">
<div className="relative h-48 w-full overflow-hidden">
<img alt="Property" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/90 via-[#2C2C2C]/20 to-transparent"></div>
<div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-[#2C2C2C] font-sans text-[10px] font-normal tracking-widest uppercase px-3 py-1.5 rounded-full shadow-sm flex items-center">
<span className="w-1.5 h-1.5 rounded-full bg-[#6B8E6B] mr-2"></span> Occupied
                                    </div>
<div className="absolute bottom-4 left-5 right-5 text-white">
<h3 className="font-sans text-base font-light mb-1 drop-shadow-sm">742 Evergreen Terrace</h3>
<p className="font-sans text-xs font-light text-white/80 drop-shadow-sm">Austin, TX</p>
</div>
</div>
<div className="p-6 bg-[#FFFFFF]">
<div className="flex justify-between items-end mb-5">
<div>
<p className="font-sans text-xs font-normal uppercase tracking-widest text-[#6B6B6B] mb-1.5">Est. Value</p>
<p className="font-serif text-lg italic font-extralight text-[#2C2C2C] tracking-tight">$850,000</p>
</div>
<div className="text-right">
<p className="font-sans text-xs font-normal uppercase tracking-widest text-[#6B6B6B] mb-1.5">Equity</p>
<p className="font-sans text-sm font-light text-[#2C2C2C]">42%</p>
</div>
</div>
<div className="h-px w-full bg-[#C4A484]/20 mb-5"></div>
<div className="grid grid-cols-2 gap-5">
<div>
<p className="font-sans text-xs font-normal uppercase tracking-widest text-[#6B6B6B] mb-1.5">Cash Flow</p>
<p className="font-sans text-sm font-light text-[#8B5F4C]">+$2,100/mo</p>
</div>
<div>
<p className="font-sans text-xs font-normal uppercase tracking-widest text-[#6B6B6B] mb-1.5">Cap Rate</p>
<p className="font-sans text-sm font-light text-[#2C2C2C]">6.5%</p>
</div>
</div>
</div>
</div>

<div className="min-w-[300px] sm:min-w-[340px] bg-[#FFFFFF] rounded-2xl border border-[#E8DFD1] shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 snap-start cursor-pointer group">
<div className="relative h-48 w-full overflow-hidden">
<img alt="Property" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/90 via-[#2C2C2C]/20 to-transparent"></div>
<div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-[#2C2C2C] font-sans text-[10px] font-normal tracking-widest uppercase px-3 py-1.5 rounded-full shadow-sm flex items-center">
<span className="w-1.5 h-1.5 rounded-full bg-[#C44C4C] mr-2"></span> Vacant
                                    </div>
<div className="absolute bottom-4 left-5 right-5 text-white">
<h3 className="font-sans text-base font-light mb-1 drop-shadow-sm">1024 Silicon Avenue</h3>
<p className="font-sans text-xs font-light text-white/80 drop-shadow-sm">San Jose, CA</p>
</div>
</div>
<div className="p-6 bg-[#FFFFFF]">
<div className="flex justify-between items-end mb-5">
<div>
<p className="font-sans text-xs font-normal uppercase tracking-widest text-[#6B6B6B] mb-1.5">Est. Value</p>
<p className="font-serif text-lg italic font-extralight text-[#2C2C2C] tracking-tight">$1,150,000</p>
</div>
<div className="text-right">
<p className="font-sans text-xs font-normal uppercase tracking-widest text-[#6B6B6B] mb-1.5">Equity</p>
<p className="font-sans text-sm font-light text-[#2C2C2C]">68%</p>
</div>
</div>
<div className="h-px w-full bg-[#C4A484]/20 mb-5"></div>
<div className="grid grid-cols-2 gap-5">
<div>
<p className="font-sans text-xs font-normal uppercase tracking-widest text-[#6B6B6B] mb-1.5">Cash Flow</p>
<p className="font-sans text-sm font-light text-[#C44C4C]">-$850/mo</p>
</div>
<div>
<p className="font-sans text-xs font-normal uppercase tracking-widest text-[#6B6B6B] mb-1.5">Cap Rate</p>
<p className="font-sans text-sm font-light text-[#2C2C2C]">4.2%</p>
</div>
</div>
</div>
</div>

<div className="min-w-[300px] sm:min-w-[340px] bg-[#FFFFFF] rounded-2xl border border-[#E8DFD1] shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 snap-start cursor-pointer group">
<div className="relative h-48 w-full overflow-hidden">
<img alt="Property" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/90 via-[#2C2C2C]/20 to-transparent"></div>
<div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-[#2C2C2C] font-sans text-[10px] font-normal tracking-widest uppercase px-3 py-1.5 rounded-full shadow-sm flex items-center">
<span className="w-1.5 h-1.5 rounded-full bg-[#6B8E6B] mr-2"></span> Occupied
                                    </div>
<div className="absolute bottom-4 left-5 right-5 text-white">
<h3 className="font-sans text-base font-light mb-1 drop-shadow-sm">88 Ocean Drive</h3>
<p className="font-sans text-xs font-light text-white/80 drop-shadow-sm">Miami, FL</p>
</div>
</div>
<div className="p-6 bg-[#FFFFFF]">
<div className="flex justify-between items-end mb-5">
<div>
<p className="font-sans text-xs font-normal uppercase tracking-widest text-[#6B6B6B] mb-1.5">Est. Value</p>
<p className="font-serif text-lg italic font-extralight text-[#2C2C2C] tracking-tight">$450,000</p>
</div>
<div className="text-right">
<p className="font-sans text-xs font-normal uppercase tracking-widest text-[#6B6B6B] mb-1.5">Equity</p>
<p className="font-sans text-sm font-light text-[#2C2C2C]">15%</p>
</div>
</div>
<div className="h-px w-full bg-[#C4A484]/20 mb-5"></div>
<div className="grid grid-cols-2 gap-5">
<div>
<p className="font-sans text-xs font-normal uppercase tracking-widest text-[#6B6B6B] mb-1.5">Cash Flow</p>
<p className="font-sans text-sm font-light text-[#8B5F4C]">+$420/mo</p>
</div>
<div>
<p className="font-sans text-xs font-normal uppercase tracking-widest text-[#6B6B6B] mb-1.5">Cap Rate</p>
<p className="font-sans text-sm font-light text-[#2C2C2C]">7.8%</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 space-y-10">

<div className="bg-[#FFFFFF] rounded-3xl border border-[#E8DFD1] shadow-sm p-8">
<div className="flex justify-between items-center mb-8">
<h2 className="font-serif text-xl font-light text-[#2C2C2C] tracking-tight">Upcoming Actions</h2>
<button className="text-[#6B6B6B] hover:text-[#2C2C2C] transition-colors">
<iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon>
</button>
</div>
<div className="space-y-5">

<label className="flex items-start space-x-4 group cursor-pointer p-3 -mx-3 rounded-xl hover:bg-[#F5F0E8] transition-colors">
<div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded border border-[#C4A484]/50 group-hover:border-[#8B5F4C] bg-white flex items-center justify-center transition-colors">
<iconify-icon className="text-[#8B5F4C] opacity-0 group-hover:opacity-50" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<div>
<p className="font-sans text-sm font-light text-[#2C2C2C] group-hover:text-[#8B5F4C] transition-colors mb-1">Review lease renewal</p>
<p className="font-sans text-xs font-light text-[#6B6B6B]">742 Evergreen Terrace • Due in 2 days</p>
</div>
<span className="ml-auto flex-shrink-0 w-2 h-2 rounded-full bg-[#C44C4C] mt-2.5"></span>
</label>

<label className="flex items-start space-x-4 group cursor-pointer p-3 -mx-3 rounded-xl hover:bg-[#F5F0E8] transition-colors">
<div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded border border-[#C4A484]/50 group-hover:border-[#8B5F4C] bg-white flex items-center justify-center transition-colors">
<iconify-icon className="text-[#8B5F4C] opacity-0 group-hover:opacity-50" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<div>
<p className="font-sans text-sm font-light text-[#2C2C2C] group-hover:text-[#8B5F4C] transition-colors mb-1">Schedule HVAC inspection</p>
<p className="font-sans text-xs font-light text-[#6B6B6B]">88 Ocean Drive • Due next week</p>
</div>
</label>

<label className="flex items-start space-x-4 group cursor-pointer p-3 -mx-3 rounded-xl hover:bg-[#F5F0E8] transition-colors">
<div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded border border-[#C4A484]/50 group-hover:border-[#8B5F4C] bg-white flex items-center justify-center transition-colors">
<iconify-icon className="text-[#8B5F4C] opacity-0 group-hover:opacity-50" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<div>
<p className="font-sans text-sm font-light text-[#2C2C2C] group-hover:text-[#8B5F4C] transition-colors mb-1">Sign closing documents</p>
<p className="font-sans text-xs font-light text-[#6B6B6B]">Pending acquisition • Due Nov 28</p>
</div>
<span className="ml-auto flex-shrink-0 w-2 h-2 rounded-full bg-[#C4A484] mt-2.5"></span>
</label>
</div>
<button className="w-full mt-6 py-3 border border-[#C4A484]/30 rounded-xl font-sans text-xs font-normal uppercase tracking-widest text-[#6B6B6B] hover:bg-[#F5F0E8] hover:text-[#2C2C2C] transition-all">
                            View All Tasks
                        </button>
</div>

<div className="bg-[#FFFFFF] rounded-3xl border border-[#E8DFD1] shadow-sm p-8">
<h2 className="font-serif text-xl font-light text-[#2C2C2C] tracking-tight mb-8">Recent Activity</h2>
<div className="relative pl-5 space-y-8">

<div className="absolute left-[27px] top-2 bottom-2 w-px bg-[#C4A484]/30"></div>

<div className="relative flex items-start space-x-5">
<div className="absolute left-[-20px] bg-white p-1.5">
<div className="w-9 h-9 rounded-full bg-[#F5F0E8] flex items-center justify-center z-10 relative border border-[#C4A484]/20">
<iconify-icon className="text-[#8B5F4C]" icon="solar:wad-of-money-linear" width="18"></iconify-icon>
</div>
</div>
<div className="ml-12 pt-0.5">
<p className="font-sans text-sm font-light text-[#2C2C2C] mb-1">Rent Payment Received</p>
<p className="font-sans text-xs font-light text-[#6B6B6B] mb-2">$2,400 from 742 Evergreen Terrace</p>
<span className="font-sans text-[10px] uppercase tracking-widest text-[#C4A484]">Today, 9:24 AM</span>
</div>
</div>

<div className="relative flex items-start space-x-5">
<div className="absolute left-[-20px] bg-white p-1.5">
<div className="w-9 h-9 rounded-full bg-[#F5F0E8] flex items-center justify-center z-10 relative border border-[#C4A484]/20">
<iconify-icon className="text-[#2C2C2C]" icon="solar:document-add-linear" width="18"></iconify-icon>
</div>
</div>
<div className="ml-12 pt-0.5">
<p className="font-sans text-sm font-light text-[#2C2C2C] mb-1">New Document Uploaded</p>
<p className="font-sans text-xs font-light text-[#6B6B6B] mb-2">Q3 Tax Assessment</p>
<span className="font-sans text-[10px] uppercase tracking-widest text-[#C4A484]">Yesterday, 4:15 PM</span>
</div>
</div>

<div className="relative flex items-start space-x-5">
<div className="absolute left-[-20px] bg-white p-1.5">
<div className="w-9 h-9 rounded-full bg-[#F5F0E8] flex items-center justify-center z-10 relative border border-[#C4A484]/20">
<iconify-icon className="text-[#C4A484]" icon="solar:tools-linear" width="18"></iconify-icon>
</div>
</div>
<div className="ml-12 pt-0.5">
<p className="font-sans text-sm font-light text-[#2C2C2C] mb-1">Maintenance Requested</p>
<p className="font-sans text-xs font-light text-[#6B6B6B] mb-2">Plumbing issue reported at Unit 4B</p>
<span className="font-sans text-[10px] uppercase tracking-widest text-[#C4A484]">Nov 22, 11:30 AM</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
