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
      

<nav className="sticky top-0 z-50 w-full bg-[#fafafa]/80 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-slate-900 rounded-sm"></div>
<span className="text-slate-900 font-medium tracking-tighter text-lg">MODULOR</span>
</div>
<div className="flex items-center gap-6">
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">FOUNDATION</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">COMPONENTS</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">PATTERNS</a>
</div>
</div>
</nav>
<main className="max-w-6xl mr-auto ml-auto pt-12 pr-6 pl-6">

<header className="mb-20 max-w-2xl">
<div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200 mb-6">
<span className="text-[10px] uppercase tracking-wider font-semibold px-1">System v2.0</span>
</div>
<h1 className="text-4xl sm:text-5xl text-slate-900 font-medium tracking-tight mb-4 leading-[1.1]">
                Digital Architecture for <br/>Modern Living.
            </h1>
<p className="text-lg text-slate-500 font-light leading-relaxed">
                A design language built on precision, neutrality, and clarity. 
                Focusing on the content—the property—while providing a seamless interface for discovery.
            </p>
</header>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

<aside className="hidden lg:block lg:col-span-3">
<div className="sticky top-32 space-y-8">
<div>
<h3 className="text-xs font-semibold text-slate-900 uppercase tracking-widest mb-4">Core</h3>
<ul className="space-y-3">
<li><a className="text-sm text-slate-600 hover:text-slate-900 flex items-center gap-2 group" href="#typography"><span className="w-1 h-1 rounded-full bg-slate-300 group-hover:bg-slate-900 transition-colors"></span>Typography</a></li>
<li><a className="text-sm text-slate-600 hover:text-slate-900 flex items-center gap-2 group" href="#color"><span className="w-1 h-1 rounded-full bg-slate-300 group-hover:bg-slate-900 transition-colors"></span>Color Palette</a></li>
<li><a className="text-sm text-slate-600 hover:text-slate-900 flex items-center gap-2 group" href="#iconography"><span className="w-1 h-1 rounded-full bg-slate-300 group-hover:bg-slate-900 transition-colors"></span>Iconography</a></li>
</ul>
</div>
<div>
<h3 className="text-xs font-semibold text-slate-900 uppercase tracking-widest mb-4">Interface</h3>
<ul className="space-y-3">
<li><a className="text-sm text-slate-600 hover:text-slate-900 flex items-center gap-2 group" href="#inputs"><span className="w-1 h-1 rounded-full bg-slate-300 group-hover:bg-slate-900 transition-colors"></span>Inputs &amp; Forms</a></li>
<li><a className="text-sm text-slate-600 hover:text-slate-900 flex items-center gap-2 group" href="#buttons"><span className="w-1 h-1 rounded-full bg-slate-300 group-hover:bg-slate-900 transition-colors"></span>Buttons</a></li>
<li><a className="text-sm text-slate-600 hover:text-slate-900 flex items-center gap-2 group" href="#cards"><span className="w-1 h-1 rounded-full bg-slate-300 group-hover:bg-slate-900 transition-colors"></span>Property Cards</a></li>
</ul>
</div>
</div>
</aside>

<div className="col-span-1 lg:col-span-9 space-y-24">

<section className="space-y-8 border-b border-slate-100 pb-16" id="typography">
<div className="flex items-baseline justify-between">
<h2 className="text-xl font-medium text-slate-900 tracking-tight">Typography</h2>
<span className="text-xs font-mono text-slate-400">Plus Jakarta Sans</span>
</div>
<div className="grid md:grid-cols-2 gap-12">
<div className="space-y-6">
<div>
<p className="text-xs text-slate-400 mb-2 font-mono">Display XL</p>
<h2 className="text-5xl text-slate-900 tracking-tighter font-medium">Penthouse</h2>
</div>
<div>
<p className="text-xs text-slate-400 mb-2 font-mono">Display L</p>
<h3 className="text-3xl text-slate-900 tracking-tight font-medium">Market Overview</h3>
</div>
<div>
<p className="text-xs text-slate-400 mb-2 font-mono">Display M</p>
<h4 className="text-2xl text-slate-900 tracking-tight font-medium">Property Details</h4>
</div>
<div>
<p className="text-xs text-slate-400 mb-2 font-mono">Display S</p>
<h5 className="text-lg text-slate-900 tracking-tight font-medium">Amenities &amp; Features</h5>
</div>
</div>
<div className="space-y-6">
<div className="">
<p className="text-xs text-slate-400 mb-2 font-mono">Body Regular</p>
<p className="text-base text-slate-600 leading-relaxed font-light">
                                    Situated in the heart of the historic district, this residence merges classical proportions with contemporary detailing. The open-plan layout ensures fluid movement between spaces.
                                </p>
</div>
<div className="">
<p className="text-xs text-slate-400 mb-2 font-mono">Body Small</p>
<p className="text-sm text-slate-500 leading-relaxed font-normal">
                                    Includes 24/7 concierge service, private elevator access, and a climate-controlled wine cellar. Viewings by appointment only.
                                </p>
</div>
<div>
<p className="text-xs text-slate-400 mb-2 font-mono">Caption / Label</p>
<p className="text-xs text-slate-500 uppercase tracking-widest font-medium">Specification</p>
</div>
</div>
</div>
</section>

<section className="space-y-8 border-b border-slate-100 pb-16" id="color">
<h2 className="text-xl font-medium text-slate-900 tracking-tight">Color Palette</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<div className="space-y-3 group cursor-pointer">
<div className="h-24 w-full bg-slate-900 rounded-lg shadow-sm group-hover:shadow-md transition-shadow"></div>
<div className="flex justify-between items-center">
<span className="text-sm font-medium text-slate-900">Charcoal</span>
<span className="text-xs text-slate-400 font-mono">900</span>
</div>
</div>

<div className="space-y-3 group cursor-pointer">
<div className="h-24 w-full bg-slate-500 rounded-lg shadow-sm group-hover:shadow-md transition-shadow"></div>
<div className="flex justify-between items-center">
<span className="text-sm font-medium text-slate-900">Stone</span>
<span className="text-xs text-slate-400 font-mono">500</span>
</div>
</div>

<div className="space-y-3 group cursor-pointer">
<div className="h-24 w-full bg-slate-100 rounded-lg border border-slate-200 group-hover:border-slate-300 transition-colors"></div>
<div className="flex justify-between items-center">
<span className="text-sm font-medium text-slate-900">Vapor</span>
<span className="text-xs text-slate-400 font-mono">100</span>
</div>
</div>

<div className="space-y-3 group cursor-pointer">
<div className="h-24 w-full bg-[#3e4836] rounded-lg shadow-sm group-hover:shadow-md transition-shadow"></div>
<div className="flex justify-between items-center">
<span className="text-sm font-medium text-slate-900">Moss</span>
<span className="text-xs text-slate-400 font-mono">Hex</span>
</div>
</div>
</div>
</section>

<section className="space-y-8 border-b border-slate-100 pb-16" id="inputs">
<h2 className="text-xl font-medium text-slate-900 tracking-tight">Interactive Controls</h2>
<div className="grid md:grid-cols-2 gap-x-12 gap-y-10">

<div className="space-y-4">
<label className="block text-sm font-medium text-slate-700">Property Search</label>
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-slate-400 text-lg" icon="solar:magnifer-linear"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-3 py-2.5 bg-white border border-slate-200 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500/20 transition-all duration-200" placeholder="City, Zip, or Address" type="text"/>
</div>
</div>

<div className="space-y-4">
<label className="block text-sm font-medium text-slate-700">Property Type</label>
<button className="w-full flex items-center justify-between px-3 py-2.5 bg-white border border-slate-200 rounded-md shadow-sm text-sm text-slate-700 hover:border-slate-300 transition-colors focus:ring-1 focus:ring-slate-500/20">
<span>Residential</span>
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>

<div className="space-y-4">
<label className="block text-sm font-medium text-slate-700 mb-2">Filters</label>
<div className="flex flex-col gap-3">

<label className="inline-flex items-center group cursor-pointer">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 rounded border border-slate-300 bg-white peer-checked:bg-slate-900 peer-checked:border-slate-900 transition-all flex items-center justify-center">
<iconify-icon className="text-white text-xs opacity-0 peer-checked:opacity-100" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="ml-3 text-sm text-slate-600 group-hover:text-slate-900 transition-colors select-none">Show map view</span>
</label>
<label className="inline-flex items-center group cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 rounded border border-slate-300 bg-white peer-checked:bg-slate-900 peer-checked:border-slate-900 transition-all flex items-center justify-center">
<iconify-icon className="text-white text-xs opacity-0 peer-checked:opacity-100" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="ml-3 text-sm text-slate-600 group-hover:text-slate-900 transition-colors select-none">New construction only</span>
</label>
</div>
</div>

<div className="space-y-4">
<label className="block text-sm font-medium text-slate-700 mb-2">Notifications</label>
<div className="flex items-center justify-between py-2 border border-slate-100 rounded-lg px-3 bg-white">
<span className="text-sm text-slate-600">Email alerts</span>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all after:shadow-sm peer-checked:bg-slate-900"></div>
</label>
</div>
</div>
</div>

<div className="pt-6">
<div className="flex justify-between items-center mb-4">
<label className="text-sm font-medium text-slate-700">Price Range</label>
<span className="text-sm font-mono text-slate-500">$250k - $1.2M</span>
</div>
<div className="relative w-full h-6 flex items-center">
<div className="absolute w-full h-1 bg-slate-200 rounded-full"></div>
<div className="absolute h-1 bg-slate-900 rounded-full left-1/4 right-1/4"></div>
<input className="absolute w-full h-full opacity-0 z-20 cursor-pointer" max="100" min="0" type="range" value="25"/>

<div className="absolute left-1/4 w-4 h-4 bg-white border border-slate-200 shadow-sm rounded-full -ml-2 z-10 cursor-grab"></div>
<div className="absolute right-1/4 w-4 h-4 bg-white border border-slate-200 shadow-sm rounded-full -mr-2 z-10 cursor-grab"></div>
</div>
</div>
</section>

<section className="space-y-8 border-b border-slate-100 pb-16" id="buttons">
<h2 className="text-xl font-medium text-slate-900 tracking-tight">Actions</h2>
<div className="flex flex-wrap gap-6 items-center">

<button className="group relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white transition-all duration-200 bg-slate-900 rounded-md hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900">
<span>Schedule Viewing</span>
<iconify-icon className="ml-2 transition-transform duration-200 group-hover:translate-x-0.5" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>

<button className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-slate-700 transition-all duration-200 bg-white border border-slate-200 rounded-md hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-200">
                            Contact Agent
                        </button>

<button className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-slate-500 transition-colors duration-200 rounded-md hover:text-slate-900">
<iconify-icon className="mr-2 text-lg" icon="solar:heart-linear"></iconify-icon>
                            Save Property
                        </button>
</div>
</section>

<section className="space-y-8" id="cards">
<h2 className="text-xl font-medium text-slate-900 tracking-tight">Property Listing</h2>
<div className="grid md:grid-cols-2 gap-8">

<div className="group bg-white rounded-xl border border-slate-100 overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
<div className="relative aspect-[4/3] bg-slate-200 overflow-hidden">

<div className="absolute inset-0 bg-slate-100 flex items-center justify-center text-slate-300">
<iconify-icon className="text-4xl opacity-50" icon="solar:gallery-wide-linear"></iconify-icon>
</div>
<div className="absolute top-3 left-3 px-2 py-1 bg-white/90 backdrop-blur-sm rounded text-[10px] font-semibold uppercase tracking-wider text-slate-900">
                                    New Listing
                                </div>
<button className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full text-slate-500 hover:text-red-500 transition-colors">
<iconify-icon className="text-base" icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-1">
<h3 className="text-lg font-medium text-slate-900 tracking-tight group-hover:text-slate-700 transition-colors">The Highland Loft</h3>
<p className="text-lg font-medium text-slate-900 tracking-tight">$1,250,000</p>
</div>
<p className="text-sm text-slate-500 font-normal mb-4">4291 Highland Ave, Los Angeles</p>
<div className="flex items-center gap-4 py-4 border-t border-slate-50">
<div className="flex items-center gap-1.5 text-slate-600" title="Bedrooms">
<iconify-icon className="text-lg" icon="solar:bed-linear"></iconify-icon>
<span className="text-xs font-medium">3 Beds</span>
</div>
<div className="flex items-center gap-1.5 text-slate-600" title="Bathrooms">
<iconify-icon className="text-lg" icon="solar:bath-linear"></iconify-icon>
<span className="text-xs font-medium">2 Baths</span>
</div>
<div className="flex items-center gap-1.5 text-slate-600" title="Square Footage">
<iconify-icon className="text-lg" icon="solar:ruler-angular-linear"></iconify-icon>
<span className="text-xs font-medium">1,850 sqft</span>
</div>
</div>
<button className="w-full mt-2 py-2.5 text-sm font-medium text-slate-600 bg-slate-50 rounded border border-transparent hover:bg-slate-100 hover:text-slate-900 transition-colors">
                                    View Details
                                </button>
</div>
</div>

<div className="flex flex-col h-full justify-center space-y-4 p-6 border border-dashed border-slate-200 rounded-xl bg-slate-50/50">
<div className="text-center space-y-2">
<div className="w-12 h-12 bg-white rounded-full border border-slate-200 flex items-center justify-center mx-auto shadow-sm">
<iconify-icon className="text-2xl text-slate-400" icon="solar:add-circle-linear"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-slate-900">Create New Listing</h3>
<p className="text-xs text-slate-500 max-w-[200px] mx-auto">Add a new property to the system inventory.</p>
</div>
</div>
</div>
</section>

<section className="space-y-6" id="iconography">
<h2 className="text-xl font-medium text-slate-900 tracking-tight">Iconography Set</h2>
<div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-12 gap-4">
<div className="aspect-square flex items-center justify-center bg-white border border-slate-100 rounded hover:border-slate-300 transition-colors text-slate-600">
<iconify-icon className="text-xl" icon="solar:home-smile-linear"></iconify-icon>
</div>
<div className="aspect-square flex items-center justify-center bg-white border border-slate-100 rounded hover:border-slate-300 transition-colors text-slate-600">
<iconify-icon className="text-xl" icon="solar:city-linear"></iconify-icon>
</div>
<div className="aspect-square flex items-center justify-center bg-white border border-slate-100 rounded hover:border-slate-300 transition-colors text-slate-600">
<iconify-icon className="text-xl" icon="solar:key-linear"></iconify-icon>
</div>
<div className="aspect-square flex items-center justify-center bg-white border border-slate-100 rounded hover:border-slate-300 transition-colors text-slate-600">
<iconify-icon className="text-xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<div className="aspect-square flex items-center justify-center bg-white border border-slate-100 rounded hover:border-slate-300 transition-colors text-slate-600">
<iconify-icon className="text-xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div className="aspect-square flex items-center justify-center bg-white border border-slate-100 rounded hover:border-slate-300 transition-colors text-slate-600">
<iconify-icon className="text-xl" icon="solar:tag-price-linear"></iconify-icon>
</div>
<div className="aspect-square flex items-center justify-center bg-white border border-slate-100 rounded hover:border-slate-300 transition-colors text-slate-600">
<iconify-icon className="text-xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<div className="aspect-square flex items-center justify-center bg-white border border-slate-100 rounded hover:border-slate-300 transition-colors text-slate-600">
<iconify-icon className="text-xl" icon="solar:calendar-linear"></iconify-icon>
</div>
</div>
</section>
</div>
</div>
</main>
<footer className="max-w-6xl mx-auto px-6 py-12 border-t border-slate-200 mt-24">
<div className="flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400 font-medium">© 2023 Modulor Real Estate. System Design.</p>
<div className="flex gap-6">
<a className="text-xs text-slate-400 hover:text-slate-900 transition-colors" href="#">Documentation</a>
<a className="text-xs text-slate-400 hover:text-slate-900 transition-colors" href="#">Support</a>
<a className="text-xs text-slate-400 hover:text-slate-900 transition-colors" href="#">Version 1.2</a>
</div>
</div>
</footer>

    </>
  );
}
