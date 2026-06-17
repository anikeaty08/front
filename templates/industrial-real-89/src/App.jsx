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
      

<div className="fixed inset-0 glow-bg pointer-events-none z-0"></div>
<div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
<div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

<nav className="fixed w-full z-50 bg-zinc-950/60 backdrop-blur-xl border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group relative z-10" href="#">
<div className="h-8 w-8 bg-white/10 border border-white/10 backdrop-blur text-white flex items-center justify-center font-medium tracking-tighter text-sm rounded">IO</div>
<span className="font-semibold tracking-tight text-lg text-white group-hover:text-zinc-300 transition-colors">PARTNERS</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" href="#services">Services</a>
<a className="hover:text-white transition-colors hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" href="#sectors">Sectors</a>
<a className="hover:text-white transition-colors hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" href="#research">Market Intelligence</a>
<a className="hover:text-white transition-colors hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" href="#properties">Properties</a>
</div>
<div className="flex items-center gap-4 relative z-10">
<button className="hidden md:flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors">
<i className="w-4 h-4" data-lucide="globe"></i>
<span>EN</span>
</button>
<a className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-md text-white text-xs font-medium rounded transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]" href="#contact">
                    Contact Us
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden z-10">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
<div className="relative z-10 max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur text-xs font-medium text-zinc-300 mb-8 shadow-lg">
<span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(220,38,38,0.8)]"></span>
                    Leading Industrial Real Estate in CEE
                </div>
<h1 className="text-5xl lg:text-7xl font-medium tracking-tighter text-white mb-6 leading-[1.1] drop-shadow-sm">
                    Strategic spaces for <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-600">modern industry.</span>
</h1>
<p className="text-lg text-zinc-400 mb-8 max-w-lg leading-relaxed">
                    We provide data-driven brokerage, consultancy, and project management for the logistics and industrial sectors across Central &amp; Eastern Europe.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="inline-flex items-center justify-center px-6 py-3 bg-red-600/80 hover:bg-red-600 backdrop-blur text-white text-sm font-medium rounded transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] border border-red-500/50">
                        Find Properties
                        <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</button>
<button className="inline-flex items-center justify-center px-6 py-3 bg-white/5 border border-white/10 text-zinc-200 text-sm font-medium rounded hover:bg-white/10 transition-colors backdrop-blur-md">
                        Explore Services
                    </button>
</div>
</div>
<div className="relative lg:h-[600px] w-full rounded-2xl overflow-hidden bg-zinc-900/50 border border-white/5 group shadow-2xl">
<img alt="Industrial Warehouse" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60" src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>

<div className="absolute bottom-6 left-6 right-6 bg-zinc-900/40 backdrop-blur-xl p-6 rounded border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Market Snapshot</span>
<i className="w-4 h-4 text-red-500" data-lucide="trending-up"></i>
</div>
<div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-4">
<div>
<p className="text-2xl font-medium tracking-tight text-white drop-shadow">2.4M</p>
<p className="text-xs text-zinc-400">Sq m Leased</p>
</div>
<div>
<p className="text-2xl font-medium tracking-tight text-white drop-shadow">€850M</p>
<p className="text-xs text-zinc-400">Volume</p>
</div>
<div>
<p className="text-2xl font-medium tracking-tight text-white drop-shadow">12</p>
<p className="text-xs text-zinc-400">Countries</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-white/[0.02] py-12 backdrop-blur-sm relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-end gap-6 bg-zinc-900/40 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg">
<div className="w-full md:w-1/4">
<label className="block text-xs font-semibold text-zinc-500 mb-2 uppercase tracking-wide">Location</label>
<div className="relative">
<select className="w-full h-10 pl-3 pr-8 bg-white/5 border border-white/10 rounded text-sm text-zinc-300 focus:outline-none focus:border-red-500/50 appearance-none cursor-pointer hover:bg-white/10 transition-colors">
<option className="bg-zinc-900 text-zinc-300">All Countries</option>
<option className="bg-zinc-900 text-zinc-300">Romania</option>
<option className="bg-zinc-900 text-zinc-300">Czech Republic</option>
<option className="bg-zinc-900 text-zinc-300">Slovakia</option>
<option className="bg-zinc-900 text-zinc-300">Hungary</option>
</select>
<i className="absolute right-3 top-3 w-4 h-4 text-zinc-500 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
<div className="w-full md:w-1/4">
<label className="block text-xs font-semibold text-zinc-500 mb-2 uppercase tracking-wide">Asset Type</label>
<div className="relative">
<select className="w-full h-10 pl-3 pr-8 bg-white/5 border border-white/10 rounded text-sm text-zinc-300 focus:outline-none focus:border-red-500/50 appearance-none cursor-pointer hover:bg-white/10 transition-colors">
<option className="bg-zinc-900 text-zinc-300">Logistics / Warehouse</option>
<option className="bg-zinc-900 text-zinc-300">Light Industrial</option>
<option className="bg-zinc-900 text-zinc-300">Land / Development</option>
<option className="bg-zinc-900 text-zinc-300">Office</option>
</select>
<i className="absolute right-3 top-3 w-4 h-4 text-zinc-500 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
<div className="w-full md:w-1/4 px-2">
<div className="flex justify-between mb-2">
<label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wide">Min Space (sq m)</label>
<span className="text-xs font-medium text-white">5,000+</span>
</div>
<input className="w-full" max="50000" min="1000" step="1000" type="range" value="5000"/>
</div>
<div className="w-full md:w-1/4">
<button className="w-full h-10 bg-white text-zinc-950 hover:bg-zinc-200 text-sm font-medium rounded transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="search"></i>
                        Search Assets
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-xl">
<h2 className="text-3xl font-medium tracking-tighter text-white mb-4">Integrated Real Estate Solutions</h2>
<p className="text-zinc-400 text-sm leading-relaxed">From land acquisition to facility management, we offer end-to-end expertise for industrial occupiers and investors.</p>
</div>
<a className="text-sm font-medium text-red-500 hover:text-red-400 flex items-center gap-1 transition-colors" href="#">
                    View all capabilities <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-zinc-300 group-hover:text-red-500 group-hover:border-red-500/20 transition-all shadow-sm">
<i className="w-5 h-5" data-lucide="factory"></i>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">Industrial Agency</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6">Tenant representation and landlord leasing services for logistics parks and manufacturing facilities.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors">
<i className="w-3 h-3 text-red-500" data-lucide="check"></i> Lease Renegotiations
                        </li>
<li className="flex items-center gap-2 text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors">
<i className="w-3 h-3 text-red-500" data-lucide="check"></i> BTS Advisory
                        </li>
</ul>
</div>

<div className="group p-8 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-zinc-300 group-hover:text-red-500 group-hover:border-red-500/20 transition-all shadow-sm">
<i className="w-5 h-5" data-lucide="bar-chart-3"></i>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">Capital Markets</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6">Investment advisory for acquisition and disposal of income-generating industrial assets.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors">
<i className="w-3 h-3 text-red-500" data-lucide="check"></i> Valuation Services
                        </li>
<li className="flex items-center gap-2 text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors">
<i className="w-3 h-3 text-red-500" data-lucide="check"></i> Investment Strategy
                        </li>
</ul>
</div>

<div className="group p-8 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-zinc-300 group-hover:text-red-500 group-hover:border-red-500/20 transition-all shadow-sm">
<i className="w-5 h-5" data-lucide="hard-hat"></i>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">Project Management</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6">Technical due diligence, fit-out coordination, and construction monitoring services.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors">
<i className="w-3 h-3 text-red-500" data-lucide="check"></i> Cost Management
                        </li>
<li className="flex items-center gap-2 text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors">
<i className="w-3 h-3 text-red-500" data-lucide="check"></i> Technical Advisory
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative z-10 overflow-hidden" id="properties">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tighter text-white mb-12">Featured Opportunities</h2>
<div className="flex gap-6 overflow-x-auto pb-8 -mx-6 px-6 snap-x">

<div className="min-w-[300px] md:min-w-[400px] snap-center">
<div className="group relative aspect-[4/3] overflow-hidden rounded-lg mb-4 cursor-pointer border border-white/10">
<img alt="Logistics Park" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1035&amp;q=80"/>
<div className="absolute top-4 left-4 bg-zinc-900/80 backdrop-blur-md px-3 py-1 rounded text-xs font-semibold text-white uppercase tracking-wide border border-white/10">For Lease</div>
</div>
<div className="flex justify-between items-start bg-white/5 p-4 rounded-lg border border-white/5 backdrop-blur-sm">
<div>
<h4 className="text-base font-medium text-white">Bucharest West Logistics</h4>
<p className="text-sm text-zinc-400 mt-1 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="map-pin"></i> Bucharest, RO
                            </p>
</div>
<div className="text-right">
<p className="text-sm font-medium text-white">12,500 m²</p>
<p className="text-xs text-zinc-500">Available</p>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] snap-center">
<div className="group relative aspect-[4/3] overflow-hidden rounded-lg mb-4 cursor-pointer border border-white/10">
<img alt="Warehouse" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2069&amp;q=80"/>
<div className="absolute top-4 left-4 bg-red-600/90 backdrop-blur-md px-3 py-1 rounded text-xs font-semibold text-white uppercase tracking-wide shadow-lg">For Sale</div>
</div>
<div className="flex justify-between items-start bg-white/5 p-4 rounded-lg border border-white/5 backdrop-blur-sm">
<div>
<h4 className="text-base font-medium text-white">CTPark Prague North</h4>
<p className="text-sm text-zinc-400 mt-1 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="map-pin"></i> Prague, CZ
                            </p>
</div>
<div className="text-right">
<p className="text-sm font-medium text-white">45,000 m²</p>
<p className="text-xs text-zinc-500">Total Area</p>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] snap-center">
<div className="group relative aspect-[4/3] overflow-hidden rounded-lg mb-4 cursor-pointer border border-white/10">
<img alt="Industrial Land" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 left-4 bg-zinc-900/80 backdrop-blur-md px-3 py-1 rounded text-xs font-semibold text-white uppercase tracking-wide border border-white/10">Development</div>
</div>
<div className="flex justify-between items-start bg-white/5 p-4 rounded-lg border border-white/5 backdrop-blur-sm">
<div>
<h4 className="text-base font-medium text-white">Budapest South Industrial</h4>
<p className="text-sm text-zinc-400 mt-1 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="map-pin"></i> Budapest, HU
                            </p>
</div>
<div className="text-right">
<p className="text-sm font-medium text-white">8.5 Ha</p>
<p className="text-xs text-zinc-500">Plot Size</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 bg-black/20 backdrop-blur-3xl border-t border-white/5" id="research">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center gap-2 mb-8">
<span className="w-8 h-[1px] bg-red-600 shadow-[0_0_10px_#dc2626]"></span>
<span className="text-xs font-medium tracking-widest uppercase text-zinc-400">Market Intelligence</span>
</div>
<div className="grid lg:grid-cols-2 gap-16">
<div>
<h2 className="text-4xl font-medium tracking-tighter mb-6 text-white">Data that drives decisions.</h2>
<p className="text-zinc-400 mb-10 max-w-md leading-relaxed">
                        Our quarterly reports provide in-depth analysis of vacancy rates, prime yields, and rental trends across the CEE industrial landscape.
                    </p>
<a className="inline-flex items-center text-sm font-medium hover:text-red-500 transition-colors" href="#">
                        View Research Library <i className="ml-2 w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="space-y-6">

<div className="group flex gap-6 p-4 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all cursor-pointer backdrop-blur-sm">
<div className="shrink-0 pt-1">
<div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center text-zinc-500 group-hover:text-red-500 transition-colors shadow-inner">
<i className="w-5 h-5" data-lucide="file-text"></i>
</div>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<span className="text-xs font-medium text-red-500 drop-shadow-[0_0_8px_rgba(220,38,38,0.5)]">New</span>
<span className="text-xs text-zinc-500">Q3 2023</span>
</div>
<h3 className="text-lg font-medium mb-2 text-white">CEE Industrial Market Outlook</h3>
<p className="text-sm text-zinc-400 line-clamp-2">Comprehensive overview of logistics stock growth and tenant demand in Romania, Czech Republic, and Slovakia.</p>
</div>
</div>

<div className="group flex gap-6 p-4 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all cursor-pointer backdrop-blur-sm">
<div className="shrink-0 pt-1">
<div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center text-zinc-500 group-hover:text-red-500 transition-colors shadow-inner">
<i className="w-5 h-5" data-lucide="file-text"></i>
</div>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<span className="text-xs text-zinc-500">H1 2023</span>
</div>
<h3 className="text-lg font-medium mb-2 text-white">Manufacturing Sector Trends</h3>
<p className="text-sm text-zinc-400 line-clamp-2">Analysis of near-shoring impacts and automotive supply chain shifts in Eastern Europe.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 border-t border-white/5" id="contact">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-medium tracking-tighter text-white mb-4">Discuss your requirements</h2>
<p className="text-zinc-500">Connect with our local experts in your region.</p>
</div>
<form className="bg-zinc-900/40 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
<div className="grid md:grid-cols-2 gap-6 mb-6">
<div>
<label className="block text-xs font-semibold text-zinc-500 mb-2">Full Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded p-3 text-sm text-white focus:outline-none focus:border-red-500/50 focus:bg-white/10 transition-all placeholder-zinc-600" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-zinc-500 mb-2">Company Email</label>
<input className="w-full bg-white/5 border border-white/10 rounded p-3 text-sm text-white focus:outline-none focus:border-red-500/50 focus:bg-white/10 transition-all placeholder-zinc-600" type="email"/>
</div>
</div>
<div className="mb-6">
<label className="block text-xs font-semibold text-zinc-500 mb-3">I am interested in:</label>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<label className="cursor-pointer group">
<input className="hidden custom-checkbox" type="checkbox"/>
<div className="h-10 rounded border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center gap-2 text-xs font-medium text-zinc-400 group-hover:border-white/20 transition-all select-none">
<svg className="w-3 h-3 text-white hidden" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
<span className="group-checked:text-white">Leasing</span>
</div>
</label>

<label className="cursor-pointer group">
<input className="hidden custom-checkbox" type="checkbox"/>
<div className="h-10 rounded border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center gap-2 text-xs font-medium text-zinc-400 group-hover:border-white/20 transition-all select-none">
<svg className="w-3 h-3 text-white hidden" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
<span className="group-checked:text-white">Investment</span>
</div>
</label>

<label className="cursor-pointer group">
<input className="hidden custom-checkbox" type="checkbox"/>
<div className="h-10 rounded border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center gap-2 text-xs font-medium text-zinc-400 group-hover:border-white/20 transition-all select-none">
<svg className="w-3 h-3 text-white hidden" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
<span className="group-checked:text-white">Valuation</span>
</div>
</label>

<label className="cursor-pointer group">
<input className="hidden custom-checkbox" type="checkbox"/>
<div className="h-10 rounded border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center gap-2 text-xs font-medium text-zinc-400 group-hover:border-white/20 transition-all select-none">
<svg className="w-3 h-3 text-white hidden" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
<span className="group-checked:text-white">Other</span>
</div>
</label>
</div>
</div>
<div className="mb-8">
<label className="block text-xs font-semibold text-zinc-500 mb-2">Message</label>
<textarea className="w-full bg-white/5 border border-white/10 rounded p-3 text-sm text-white focus:outline-none focus:border-red-500/50 focus:bg-white/10 transition-all" rows="4"></textarea>
</div>
<button className="w-full py-4 bg-white text-zinc-950 font-medium text-sm rounded hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]">
                    Send Inquiry
                    <i className="w-4 h-4 group-hover:translate-x-1 transition-transform text-zinc-950" data-lucide="send"></i>
</button>
</form>
</div>
</section>

<footer className="relative bg-black/40 pt-20 pb-10 border-t border-white/5 backdrop-blur-md z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
<div className="col-span-2 lg:col-span-2 pr-8">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="h-8 w-8 bg-white/10 border border-white/10 text-white flex items-center justify-center font-medium tracking-tighter text-sm rounded">IO</div>
<span className="font-semibold tracking-tight text-lg text-white">PARTNERS</span>
</a>
<p className="text-sm text-zinc-500 leading-relaxed mb-6 max-w-xs">
                        The preferred real estate partner for industrial clients in Central and Eastern Europe. JLL Preferred Partner.
                    </p>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
</div>
</div>
<div>
<h4 className="font-semibold text-sm text-white mb-4">Sectors</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-red-500 transition-colors" href="#">Automotive</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#">E-Commerce</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#">Logistics</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#">Manufacturing</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-sm text-white mb-4">Services</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-red-500 transition-colors" href="#">Agency Leasing</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#">Capital Markets</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#">Project Management</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#">Workplace Strategy</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-sm text-white mb-4">Company</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-red-500 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#">News</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-500">© 2023 IO Partners. All rights reserved.</p>
<div className="flex gap-6 text-xs text-zinc-500">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Service</a>
<a className="hover:text-white" href="#">Cookie Settings</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
