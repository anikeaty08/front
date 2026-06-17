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
      

<nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-zinc-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between h-16 items-center">
<div className="flex items-center gap-8">
<a className="text-xl font-semibold tracking-tighter uppercase text-zinc-900 flex items-center gap-2" href="#">
<div className="w-6 h-6 bg-zinc-900 text-white flex items-center justify-center rounded-md text-xs">A</div>
                        ACCELERATORSINDEX
                    </a>
<div className="hidden md:flex space-x-6 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#">Accelerators</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Programs</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Marketplace</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Contact</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors bg-white px-3 py-1.5 rounded-lg border border-zinc-200 hover:border-zinc-300 shadow-sm">
<iconify-icon className="text-lg" icon="solar:global-linear"></iconify-icon>
<span>EN</span>
<iconify-icon className="text-xs text-zinc-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-28 pb-20 text-center overflow-hidden">

<div className="absolute inset-0 -z-10 pointer-events-none">
<img alt="Abstract Background" className="w-full h-full object-cover opacity-60 blur-[100px] scale-150" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-white/60"></div>
<div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-zinc-50 to-transparent"></div>
</div>
<div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-zinc-900 max-w-4xl mx-auto leading-tight">
                Discover Startup Accelerators Worldwide
            </h1>
<p className="mt-6 text-lg text-zinc-500 max-w-2xl mx-auto">
                Compare programs, explore opportunities, and find the exact right accelerator to scale your startup.
            </p>

<div className="mt-10 max-w-3xl mx-auto">
<div className="flex flex-col sm:flex-row items-center bg-white border border-zinc-200 rounded-2xl shadow-sm p-1.5 focus-within:ring-2 focus-within:ring-zinc-200 focus-within:border-zinc-300 transition-all">
<div className="flex-1 flex items-center px-4 w-full">
<iconify-icon className="text-zinc-400 text-xl" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full bg-transparent border-none focus:ring-0 text-base py-3 px-3 outline-none placeholder:text-zinc-400" placeholder="Search by name, industry, or location..." type="text"/>
</div>
<div className="hidden sm:block w-px h-8 bg-zinc-200 mx-2"></div>
<div className="hidden sm:flex items-center px-2">
<select className="bg-transparent border-none text-sm font-medium text-zinc-600 focus:ring-0 outline-none cursor-pointer pr-4">
<option>All Stages</option>
<option>Pre-seed</option>
<option>Seed</option>
<option>Series A</option>
</select>
</div>
<button className="w-full sm:w-auto mt-2 sm:mt-0 bg-zinc-900 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2">
                        Explore
                        <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="mt-4 flex flex-wrap justify-center gap-4 text-sm text-zinc-500 font-medium">
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Location</span>
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:buildings-2-linear"></iconify-icon> Industry</span>
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:wad-of-money-linear"></iconify-icon> Funding Stage</span>
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:laptop-linear"></iconify-icon> Remote / On-site</span>
</div>
</div>

<div className="mt-20 relative max-w-5xl mx-auto">
<div className="absolute -inset-1 bg-gradient-to-b from-zinc-200/50 to-transparent rounded-[2.5rem] blur-xl opacity-50"></div>
</div>
</div>
</section>

<section className="border-y border-zinc-200 bg-white sticky top-16 z-40">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center gap-6 overflow-x-auto py-4 hide-scrollbar">
<div className="flex items-center gap-3 shrink-0 border-r border-zinc-200 pr-6">
<span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Region</span>
<button className="px-3 py-1.5 rounded-full border border-zinc-200 text-sm font-medium text-zinc-600 hover:bg-zinc-50 transition-colors whitespace-nowrap">North America</button>
<button className="px-3 py-1.5 rounded-full border border-zinc-200 text-sm font-medium text-zinc-600 hover:bg-zinc-50 transition-colors whitespace-nowrap">Europe</button>
<button className="px-3 py-1.5 rounded-full border border-zinc-200 text-sm font-medium text-zinc-600 hover:bg-zinc-50 transition-colors whitespace-nowrap">MENA</button>
<button className="px-3 py-1.5 rounded-full border border-zinc-200 text-sm font-medium text-zinc-600 hover:bg-zinc-50 transition-colors whitespace-nowrap">Asia</button>
</div>
<div className="flex items-center gap-3 shrink-0 border-r border-zinc-200 pr-6">
<span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Stage</span>
<button className="px-3 py-1.5 rounded-full border border-zinc-200 text-sm font-medium text-zinc-600 hover:bg-zinc-50 transition-colors whitespace-nowrap">Pre-seed</button>
<button className="px-3 py-1.5 rounded-full border border-zinc-200 text-sm font-medium text-zinc-600 hover:bg-zinc-50 transition-colors whitespace-nowrap">Seed</button>
</div>
<div className="flex items-center gap-3 shrink-0">
<span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Industry</span>
<button className="px-3 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-sm font-medium text-zinc-900 transition-colors whitespace-nowrap">AI</button>
<button className="px-3 py-1.5 rounded-full border border-zinc-200 text-sm font-medium text-zinc-600 hover:bg-zinc-50 transition-colors whitespace-nowrap">Fintech</button>
<button className="px-3 py-1.5 rounded-full border border-zinc-200 text-sm font-medium text-zinc-600 hover:bg-zinc-50 transition-colors whitespace-nowrap">Health</button>
<button className="px-3 py-1.5 rounded-full border border-zinc-200 text-sm font-medium text-zinc-600 hover:bg-zinc-50 transition-colors whitespace-nowrap">Climate</button>
</div>
</div>
</div>
</section>

<section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
<div className="flex items-end justify-between mb-10">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Featured Accelerators</h2>
<p className="text-sm text-zinc-500 mt-1">Top-tier programs actively funding startups.</p>
</div>
<a className="hidden sm:flex items-center gap-1 text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors" href="#">
                View all <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white border border-zinc-200 rounded-2xl p-6 flex flex-col hover:border-zinc-300 hover:shadow-sm transition-all">
<div className="w-12 h-12 bg-orange-500 text-white flex items-center justify-center rounded-xl text-xl font-semibold tracking-tighter mb-4">YC</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900">Y Combinator</h3>
<div className="flex items-center gap-2 text-sm text-zinc-500 mt-2 mb-4">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> San Francisco, CA (Remote options)
                </div>
<p className="text-sm text-zinc-600 flex-grow mb-6 line-clamp-2">The most well-known startup accelerator in the world, providing seed funding for startups.</p>
<a className="w-full inline-flex justify-center items-center gap-2 bg-zinc-50 border border-zinc-200 text-zinc-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-zinc-100 transition-colors" href="#">
                    View Programs
                </a>
</div>

<div className="bg-white border border-zinc-200 rounded-2xl p-6 flex flex-col hover:border-zinc-300 hover:shadow-sm transition-all">
<div className="w-12 h-12 bg-emerald-600 text-white flex items-center justify-center rounded-xl text-xl font-semibold tracking-tighter mb-4">TS</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900">Techstars</h3>
<div className="flex items-center gap-2 text-sm text-zinc-500 mt-2 mb-4">
<iconify-icon icon="solar:globe-linear"></iconify-icon> Global (Multiple locations)
                </div>
<p className="text-sm text-zinc-600 flex-grow mb-6 line-clamp-2">Global network that helps entrepreneurs succeed through funding and mentorship.</p>
<a className="w-full inline-flex justify-center items-center gap-2 bg-zinc-50 border border-zinc-200 text-zinc-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-zinc-100 transition-colors" href="#">
                    View Programs
                </a>
</div>

<div className="bg-white border border-zinc-200 rounded-2xl p-6 flex flex-col hover:border-zinc-300 hover:shadow-sm transition-all">
<div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-xl text-xl font-semibold tracking-tighter mb-4">PNP</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900">Plug and Play</h3>
<div className="flex items-center gap-2 text-sm text-zinc-500 mt-2 mb-4">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Silicon Valley, CA
                </div>
<p className="text-sm text-zinc-600 flex-grow mb-6 line-clamp-2">Innovation platform connecting startups, corporations, and investors worldwide.</p>
<a className="w-full inline-flex justify-center items-center gap-2 bg-zinc-50 border border-zinc-200 text-zinc-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-zinc-100 transition-colors" href="#">
                    View Programs
                </a>
</div>

<div className="bg-white border border-zinc-200 rounded-2xl p-6 flex flex-col hover:border-zinc-300 hover:shadow-sm transition-all">
<div className="w-12 h-12 bg-zinc-900 text-white flex items-center justify-center rounded-xl text-xl font-semibold tracking-tighter mb-4">A</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900">Antler</h3>
<div className="flex items-center gap-2 text-sm text-zinc-500 mt-2 mb-4">
<iconify-icon icon="solar:globe-linear"></iconify-icon> Global (Day zero investor)
                </div>
<p className="text-sm text-zinc-600 flex-grow mb-6 line-clamp-2">Global early-stage VC enabling exceptional people to build defining companies.</p>
<a className="w-full inline-flex justify-center items-center gap-2 bg-zinc-50 border border-zinc-200 text-zinc-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-zinc-100 transition-colors" href="#">
                    View Programs
                </a>
</div>

<div className="bg-white border border-zinc-200 rounded-2xl p-6 flex flex-col hover:border-zinc-300 hover:shadow-sm transition-all">
<div className="w-12 h-12 bg-indigo-600 text-white flex items-center justify-center rounded-xl text-xl font-semibold tracking-tighter mb-4">F6L</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900">Flat6Labs</h3>
<div className="flex items-center gap-2 text-sm text-zinc-500 mt-2 mb-4">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> MENA Region
                </div>
<p className="text-sm text-zinc-600 flex-grow mb-6 line-clamp-2">Leading early stage VC firm and seed accelerator operating across the MENA region.</p>
<a className="w-full inline-flex justify-center items-center gap-2 bg-zinc-50 border border-zinc-200 text-zinc-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-zinc-100 transition-colors" href="#">
                    View Programs
                </a>
</div>

<div className="bg-white border border-zinc-200 rounded-2xl p-6 flex flex-col hover:border-zinc-300 hover:shadow-sm transition-all">
<div className="w-12 h-12 bg-red-600 text-white flex items-center justify-center rounded-xl text-xl font-semibold tracking-tighter mb-4">SOSV</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900">SOSV</h3>
<div className="flex items-center gap-2 text-sm text-zinc-500 mt-2 mb-4">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Princeton, NJ
                </div>
<p className="text-sm text-zinc-600 flex-grow mb-6 line-clamp-2">Multi-stage venture fund operating early stage startup development programs.</p>
<a className="w-full inline-flex justify-center items-center gap-2 bg-zinc-50 border border-zinc-200 text-zinc-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-zinc-100 transition-colors" href="#">
                    View Programs
                </a>
</div>
</div>
</section>

<section className="py-16 bg-white border-y border-zinc-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center gap-3 mb-8">
<iconify-icon className="text-2xl text-orange-500" icon="solar:fire-linear"></iconify-icon>
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Programs Open Now</h2>
</div>
<div className="flex flex-col gap-4">

<div className="flex flex-col md:flex-row md:items-center justify-between p-5 rounded-2xl border border-zinc-200 hover:border-zinc-300 transition-all bg-zinc-50/50 group">
<div className="flex-1 mb-4 md:mb-0">
<div className="flex items-center gap-2 mb-1">
<span className="text-xs font-semibold px-2 py-0.5 bg-orange-100 text-orange-700 rounded-full">Closes in 5 days</span>
<span className="text-sm text-zinc-500 font-medium">Y Combinator</span>
</div>
<h4 className="text-lg font-semibold tracking-tight text-zinc-900 group-hover:text-blue-600 transition-colors">Summer 2024 Batch</h4>
</div>
<div className="flex flex-col sm:flex-row sm:items-center gap-4 md:gap-8 flex-1">
<div className="flex items-center gap-2 text-sm text-zinc-600">
<iconify-icon className="text-zinc-400" icon="solar:wad-of-money-linear"></iconify-icon> Pre-seed / Seed
                        </div>
<div className="flex items-center gap-2 text-sm text-zinc-600">
<iconify-icon className="text-zinc-400" icon="solar:map-point-linear"></iconify-icon> Remote / SF
                        </div>
</div>
<div className="mt-4 md:mt-0 md:ml-6 flex-shrink-0">
<a className="inline-flex justify-center items-center bg-zinc-900 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors w-full md:w-auto" href="#">
                            Apply Now
                        </a>
</div>
</div>

<div className="flex flex-col md:flex-row md:items-center justify-between p-5 rounded-2xl border border-zinc-200 hover:border-zinc-300 transition-all bg-zinc-50/50 group">
<div className="flex-1 mb-4 md:mb-0">
<div className="flex items-center gap-2 mb-1">
<span className="text-xs font-semibold px-2 py-0.5 bg-zinc-200 text-zinc-700 rounded-full">Closes Nov 15</span>
<span className="text-sm text-zinc-500 font-medium">Techstars</span>
</div>
<h4 className="text-lg font-semibold tracking-tight text-zinc-900 group-hover:text-blue-600 transition-colors">Web3 Accelerator (Spring 2024)</h4>
</div>
<div className="flex flex-col sm:flex-row sm:items-center gap-4 md:gap-8 flex-1">
<div className="flex items-center gap-2 text-sm text-zinc-600">
<iconify-icon className="text-zinc-400" icon="solar:wad-of-money-linear"></iconify-icon> Early Stage
                        </div>
<div className="flex items-center gap-2 text-sm text-zinc-600">
<iconify-icon className="text-zinc-400" icon="solar:laptop-linear"></iconify-icon> Remote
                        </div>
</div>
<div className="mt-4 md:mt-0 md:ml-6 flex-shrink-0">
<a className="inline-flex justify-center items-center bg-zinc-900 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors w-full md:w-auto" href="#">
                            Apply Now
                        </a>
</div>
</div>

<div className="flex flex-col md:flex-row md:items-center justify-between p-5 rounded-2xl border border-zinc-200 hover:border-zinc-300 transition-all bg-zinc-50/50 group">
<div className="flex-1 mb-4 md:mb-0">
<div className="flex items-center gap-2 mb-1">
<span className="text-xs font-semibold px-2 py-0.5 bg-zinc-200 text-zinc-700 rounded-full">Closes Dec 01</span>
<span className="text-sm text-zinc-500 font-medium">Flat6Labs</span>
</div>
<h4 className="text-lg font-semibold tracking-tight text-zinc-900 group-hover:text-blue-600 transition-colors">Riyadh Seed Program Cohort 3</h4>
</div>
<div className="flex flex-col sm:flex-row sm:items-center gap-4 md:gap-8 flex-1">
<div className="flex items-center gap-2 text-sm text-zinc-600">
<iconify-icon className="text-zinc-400" icon="solar:wad-of-money-linear"></iconify-icon> Seed
                        </div>
<div className="flex items-center gap-2 text-sm text-zinc-600">
<iconify-icon className="text-zinc-400" icon="solar:map-point-linear"></iconify-icon> Riyadh, KSA
                        </div>
</div>
<div className="mt-4 md:mt-0 md:ml-6 flex-shrink-0">
<a className="inline-flex justify-center items-center bg-zinc-900 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors w-full md:w-auto" href="#">
                            Apply Now
                        </a>
</div>
</div>
</div>
<div className="mt-8 text-center">
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-900" href="#">Browse all 42 open programs</a>
</div>
</div>
</section>

<section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900">How It Works</h2>
<p className="text-zinc-500 mt-2">Find your next funding partner in three simple steps.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-px bg-zinc-200 z-0"></div>
<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-20 h-20 bg-white border border-zinc-200 rounded-full flex items-center justify-center mb-6 shadow-sm">
<iconify-icon className="text-3xl text-zinc-900" icon="solar:magnifer-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-zinc-900 tracking-tight">1. Search Accelerators</h3>
<p className="text-sm text-zinc-500 mt-2 max-w-xs">Filter by region, industry, and funding stage to find exact matches worldwide.</p>
</div>
<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-20 h-20 bg-white border border-zinc-200 rounded-full flex items-center justify-center mb-6 shadow-sm">
<iconify-icon className="text-3xl text-zinc-900" icon="solar:scale-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-zinc-900 tracking-tight">2. Compare Benefits</h3>
<p className="text-sm text-zinc-500 mt-2 max-w-xs">Evaluate equity requirements, funding amounts, and mentorship value side-by-side.</p>
</div>
<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-20 h-20 bg-white border border-zinc-200 rounded-full flex items-center justify-center mb-6 shadow-sm">
<iconify-icon className="text-3xl text-zinc-900" icon="solar:rocket-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-zinc-900 tracking-tight">3. Apply Directly</h3>
<p className="text-sm text-zinc-500 mt-2 max-w-xs">Never miss a deadline. Get direct links to active application portals.</p>
</div>
</div>
</section>

<section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-zinc-100/50 rounded-3xl mb-24">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-8">Browse Collections</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<a className="bg-white border border-zinc-200 rounded-2xl p-6 hover:shadow-md hover:border-zinc-300 transition-all flex flex-col group" href="#">
<iconify-icon className="text-3xl text-zinc-400 mb-4 group-hover:text-zinc-900 transition-colors" icon="solar:globe-linear"></iconify-icon>
<h3 className="text-base font-semibold tracking-tight text-zinc-900 mb-1">By Region</h3>
<p className="text-xs text-zinc-500 mt-auto">Explore hubs worldwide</p>
</a>

<a className="bg-white border border-zinc-200 rounded-2xl p-6 hover:shadow-md hover:border-zinc-300 transition-all flex flex-col group lg:col-span-2" href="#">
<iconify-icon className="text-3xl text-zinc-400 mb-4 group-hover:text-blue-600 transition-colors" icon="solar:shield-check-linear"></iconify-icon>
<h3 className="text-base font-semibold tracking-tight text-zinc-900 mb-1">Equity-Free Programs</h3>
<p className="text-xs text-zinc-500 mt-auto">Get funding without giving up ownership</p>
</a>

<a className="bg-white border border-zinc-200 rounded-2xl p-6 hover:shadow-md hover:border-zinc-300 transition-all flex flex-col group" href="#">
<iconify-icon className="text-3xl text-zinc-400 mb-4 group-hover:text-zinc-900 transition-colors" icon="solar:buildings-2-linear"></iconify-icon>
<h3 className="text-base font-semibold tracking-tight text-zinc-900 mb-1">Corporate</h3>
<p className="text-xs text-zinc-500 mt-auto">Industry-backed initiatives</p>
</a>

<a className="bg-white border border-zinc-200 rounded-2xl p-6 hover:shadow-md hover:border-zinc-300 transition-all flex flex-col group lg:col-span-2" href="#">
<iconify-icon className="text-3xl text-zinc-400 mb-4 group-hover:text-emerald-600 transition-colors" icon="solar:sprout-linear"></iconify-icon>
<h3 className="text-base font-semibold tracking-tight text-zinc-900 mb-1">Early-Stage Focus</h3>
<p className="text-xs text-zinc-500 mt-auto">Perfect for ideation and pre-seed phases</p>
</a>

<a className="bg-white border border-zinc-200 rounded-2xl p-6 hover:shadow-md hover:border-zinc-300 transition-all flex flex-col group lg:col-span-2" href="#">
<iconify-icon className="text-3xl text-zinc-400 mb-4 group-hover:text-zinc-900 transition-colors" icon="solar:wad-of-money-linear"></iconify-icon>
<h3 className="text-base font-semibold tracking-tight text-zinc-900 mb-1">Highest Funding</h3>
<p className="text-xs text-zinc-500 mt-auto">Accelerators offering $100k+ upfront</p>
</a>
</div>
</section>

<section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-200">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-6">Why founders use ACCELERATORSINDEX</h2>
<div className="space-y-4">
<div className="flex items-start gap-3">
<iconify-icon className="text-xl text-zinc-900 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<div>
<h4 className="text-sm font-semibold text-zinc-900">Constantly Updated Database</h4>
<p className="text-sm text-zinc-500 mt-1">We actively monitor and verify accelerator data so you don't waste time on stale info.</p>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-xl text-zinc-900 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<div>
<h4 className="text-sm font-semibold text-zinc-900">Program Deadlines Tracked</h4>
<p className="text-sm text-zinc-500 mt-1">See exactly when batches open and close. Filter by what's active right now.</p>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-xl text-zinc-900 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<div>
<h4 className="text-sm font-semibold text-zinc-900">Standardized Comparisons</h4>
<p className="text-sm text-zinc-500 mt-1">We break down complex offers into simple terms: funding amount vs. equity taken.</p>
</div>
</div>
</div>
</div>

<div>
<h2 className="text-xl font-semibold tracking-tight text-zinc-900 mb-6">Activity Feed</h2>
<div className="bg-white border border-zinc-200 rounded-2xl p-6">
<div className="space-y-5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-zinc-600" icon="solar:add-circle-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-zinc-900">Added: AI Grant</p>
<p className="text-xs text-zinc-500">New equity-free program in San Francisco</p>
</div>
<span className="text-xs text-zinc-400 ml-auto">2h ago</span>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-zinc-600" icon="solar:calendar-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-zinc-900">Updated: Techstars London</p>
<p className="text-xs text-zinc-500">Spring 2024 application deadline extended</p>
</div>
<span className="text-xs text-zinc-400 ml-auto">5h ago</span>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-zinc-600" icon="solar:add-circle-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-zinc-900">Added: Outlier Ventures</p>
<p className="text-xs text-zinc-500">Web3 Base Camp directory profile live</p>
</div>
<span className="text-xs text-zinc-400 ml-auto">1d ago</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-20">
<div className="bg-zinc-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white/5 blur-3xl"></div>
<div className="relative z-10">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-3">Never Miss an Accelerator Deadline</h2>
<p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto mb-8">Join 10,000+ founders getting weekly updates on new programs, approaching deadlines, and funding opportunities.</p>
<form className="max-w-xl mx-auto flex flex-col sm:flex-row gap-3">
<input className="flex-1 bg-zinc-800/50 border border-zinc-700 text-white placeholder-zinc-500 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent text-sm" placeholder="founder@startup.com" required="" type="email"/>
<select className="bg-zinc-800/50 border border-zinc-700 text-zinc-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent text-sm hidden sm:block">
<option disabled="" selected="" value="">Stage</option>
<option>Idea</option>
<option>MVP</option>
<option>Revenue</option>
</select>
<button className="bg-white text-zinc-900 px-6 py-3 rounded-xl text-sm font-medium hover:bg-zinc-100 transition-colors whitespace-nowrap" type="submit">
                        Subscribe
                    </button>
</form>
<p className="text-xs text-zinc-500 mt-4">No spam. Unsubscribe at any time.</p>
</div>
</div>
</section>

<footer className="bg-white border-t border-zinc-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-1">
<a className="text-xl font-semibold tracking-tighter uppercase text-zinc-900 flex items-center gap-2 mb-4" href="#">
<div className="w-6 h-6 bg-zinc-900 text-white flex items-center justify-center rounded-md text-xs">A</div>
                        ACCELERATORSINDEX
                    </a>
<p className="text-sm text-zinc-500 pr-4">The most comprehensive database of startup accelerators and incubators worldwide.</p>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900 mb-4">Regions</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">North America</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Europe</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Asia</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">MENA</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Latin America</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900 mb-4">Industries</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Artificial Intelligence</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Fintech</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Healthtech</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Climate &amp; Energy</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Web3 &amp; Crypto</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900 mb-4">Platform</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Browse Programs</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Submit Accelerator</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Blog &amp; Resources</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Pricing (For Programs)</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900 mb-4">Company</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">About</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-500">© 2024 Acceleratorsindex. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:twitter-linear"></iconify-icon>
</a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:link-round-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
