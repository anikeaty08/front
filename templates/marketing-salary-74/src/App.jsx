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
      

<aside className="w-64 border-r border-slate-100 hidden md:flex flex-col justify-between h-screen sticky top-0 bg-white z-10">
<div className="p-6">

<div className="flex items-center gap-2 mb-10">
<div className="w-6 h-6 bg-slate-900 rounded-md flex items-center justify-center text-white">
<span className="font-semibold text-xs tracking-tighter">M</span>
</div>
<span className="font-medium tracking-tight text-slate-900">MarketScale</span>
</div>

<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors" href="#">
<iconify-icon height="16" icon="lucide:layout-dashboard" strokeWidth="1.5" width="16"></iconify-icon>
                    Overview
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-slate-900 bg-slate-50 rounded-md font-medium" href="#">
<iconify-icon height="16" icon="lucide:banknote" strokeWidth="1.5" width="16"></iconify-icon>
                    Salaries
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors" href="#">
<iconify-icon height="16" icon="lucide:building-2" strokeWidth="1.5" width="16"></iconify-icon>
                    Companies
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors" href="#">
<iconify-icon height="16" icon="lucide:trending-up" strokeWidth="1.5" width="16"></iconify-icon>
                    Trends
                </a>
</nav>
</div>
<div className="p-6 border-t border-slate-50">
<a className="flex items-center gap-3 px-3 py-2 text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">
<iconify-icon height="16" icon="lucide:settings" strokeWidth="1.5" width="16"></iconify-icon>
                Settings
            </a>
<div className="mt-4 flex items-center gap-3 px-3">
<div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-xs font-medium text-slate-600">JD</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-900">John Doe</span>
<span className="text-xs text-slate-400">Pro Plan</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 overflow-y-auto">
<div className="max-w-5xl mx-auto px-6 py-12 md:px-12 md:py-16">

<div className="flex items-center gap-2 text-xs text-slate-400 mb-6">
<span>Intelligence</span>
<iconify-icon height="12" icon="lucide:chevron-right" width="12"></iconify-icon>
<span className="text-slate-900 font-medium">Salary Search</span>
</div>

<div className="mb-12">
<h1 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-3">
                    Find your true market value
                </h1>
<p className="text-slate-500 text-lg font-normal max-w-2xl leading-relaxed">
                    Access verified compensation data for over 12,000 marketing roles. Filter by specific role, seniority, and cost of living.
                </p>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-sm p-1 mb-16 ring-1 ring-slate-100">
<div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-slate-100">

<div className="flex-1 p-5 group cursor-pointer hover:bg-slate-50/50 transition-colors rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
<label className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Role</label>
<div className="flex items-center justify-between">
<span className="text-slate-900 text-sm font-medium">Select a role</span>
<iconify-icon className="text-slate-300 group-hover:text-slate-500 transition-colors" icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
<div className="mt-1 text-xs text-slate-400">e.g. Product Marketing</div>
</div>

<div className="flex-1 p-5 group cursor-pointer hover:bg-slate-50/50 transition-colors relative">
<label className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Level</label>
<div className="flex gap-1">

<div className="px-2 py-1 rounded bg-slate-900 text-white text-xs font-medium shadow-sm">IC</div>
<div className="px-2 py-1 rounded hover:bg-slate-200 text-slate-500 hover:text-slate-700 text-xs font-medium transition-colors">Manager</div>
<div className="px-2 py-1 rounded hover:bg-slate-200 text-slate-500 hover:text-slate-700 text-xs font-medium transition-colors">Director</div>
<div className="px-2 py-1 rounded hover:bg-slate-200 text-slate-500 hover:text-slate-700 text-xs font-medium transition-colors">VP+</div>
</div>
<div className="mt-2 text-xs text-slate-400">Individual Contributor</div>
</div>

<div className="flex-1 p-5 group cursor-pointer hover:bg-slate-50/50 transition-colors md:rounded-r-xl">
<label className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Location</label>
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="lucide:map-pin" width="14"></iconify-icon>
<input className="bg-transparent border-none p-0 text-sm font-medium text-slate-900 placeholder-slate-300 focus:ring-0 w-full cursor-pointer" placeholder="City or Remote" type="text"/>
</div>
<div className="mt-1 text-xs text-slate-400">Global data available</div>
</div>
</div>

<div className="bg-slate-50 p-3 rounded-b-xl border-t border-slate-100 flex justify-between items-center">
<span className="text-xs text-slate-400 font-medium px-2 hidden sm:block">12,402 salaries found</span>
<button className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium py-2.5 px-6 rounded-lg shadow-sm hover:shadow transition-all flex items-center justify-center gap-2">
                        See Salary Data
                        <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="relative flex items-center justify-center mb-12">
<hr className="w-full border-slate-100"/>
<span className="absolute bg-white px-4 text-xs font-medium text-slate-400 uppercase tracking-wider">Or browse everything</span>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

<section>
<div className="flex items-center justify-between mb-5">
<h3 className="text-sm font-semibold text-slate-900">All Roles</h3>
<a className="text-xs text-slate-400 hover:text-slate-900 transition-colors" href="#">View all</a>
</div>
<ul className="space-y-1">
<li>
<a className="group flex justify-between items-center py-2 px-3 -mx-3 rounded-lg hover:bg-slate-50 transition-colors" href="#">
<span className="text-sm text-slate-600 group-hover:text-slate-900 font-medium">Growth Marketing</span>
<span className="text-xs text-slate-400 bg-slate-50 group-hover:bg-white px-1.5 py-0.5 rounded border border-transparent group-hover:border-slate-100">4.2k</span>
</a>
</li>
<li>
<a className="group flex justify-between items-center py-2 px-3 -mx-3 rounded-lg hover:bg-slate-50 transition-colors" href="#">
<span className="text-sm text-slate-600 group-hover:text-slate-900 font-medium">Product Marketing</span>
<span className="text-xs text-slate-400 bg-slate-50 group-hover:bg-white px-1.5 py-0.5 rounded border border-transparent group-hover:border-slate-100">3.8k</span>
</a>
</li>
<li>
<a className="group flex justify-between items-center py-2 px-3 -mx-3 rounded-lg hover:bg-slate-50 transition-colors" href="#">
<span className="text-sm text-slate-600 group-hover:text-slate-900 font-medium">Content Strategy</span>
<span className="text-xs text-slate-400 bg-slate-50 group-hover:bg-white px-1.5 py-0.5 rounded border border-transparent group-hover:border-slate-100">2.1k</span>
</a>
</li>
<li>
<a className="group flex justify-between items-center py-2 px-3 -mx-3 rounded-lg hover:bg-slate-50 transition-colors" href="#">
<span className="text-sm text-slate-600 group-hover:text-slate-900 font-medium">Brand Management</span>
<span className="text-xs text-slate-400 bg-slate-50 group-hover:bg-white px-1.5 py-0.5 rounded border border-transparent group-hover:border-slate-100">1.9k</span>
</a>
</li>
<li>
<a className="group flex justify-between items-center py-2 px-3 -mx-3 rounded-lg hover:bg-slate-50 transition-colors" href="#">
<span className="text-sm text-slate-600 group-hover:text-slate-900 font-medium">Paid Media / PPC</span>
<span className="text-xs text-slate-400 bg-slate-50 group-hover:bg-white px-1.5 py-0.5 rounded border border-transparent group-hover:border-slate-100">1.5k</span>
</a>
</li>
</ul>
</section>

<section>
<div className="flex items-center justify-between mb-5">
<h3 className="text-sm font-semibold text-slate-900">Locations</h3>
<a className="text-xs text-slate-400 hover:text-slate-900 transition-colors" href="#">View all</a>
</div>
<ul className="space-y-1">
<li>
<a className="group flex justify-between items-center py-2 px-3 -mx-3 rounded-lg hover:bg-slate-50 transition-colors" href="#">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
<span className="text-sm text-slate-600 group-hover:text-slate-900 font-medium">Remote (US)</span>
</div>
<span className="text-xs text-slate-400 bg-slate-50 group-hover:bg-white px-1.5 py-0.5 rounded border border-transparent group-hover:border-slate-100">High Demand</span>
</a>
</li>
<li>
<a className="group flex justify-between items-center py-2 px-3 -mx-3 rounded-lg hover:bg-slate-50 transition-colors" href="#">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
<span className="text-sm text-slate-600 group-hover:text-slate-900 font-medium">New York, NY</span>
</div>
<span className="text-xs text-slate-400">2.4k</span>
</a>
</li>
<li>
<a className="group flex justify-between items-center py-2 px-3 -mx-3 rounded-lg hover:bg-slate-50 transition-colors" href="#">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
<span className="text-sm text-slate-600 group-hover:text-slate-900 font-medium">San Francisco, CA</span>
</div>
<span className="text-xs text-slate-400">1.8k</span>
</a>
</li>
<li>
<a className="group flex justify-between items-center py-2 px-3 -mx-3 rounded-lg hover:bg-slate-50 transition-colors" href="#">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
<span className="text-sm text-slate-600 group-hover:text-slate-900 font-medium">London, UK</span>
</div>
<span className="text-xs text-slate-400">950</span>
</a>
</li>
<li>
<a className="group flex justify-between items-center py-2 px-3 -mx-3 rounded-lg hover:bg-slate-50 transition-colors" href="#">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
<span className="text-sm text-slate-600 group-hover:text-slate-900 font-medium">Austin, TX</span>
</div>
<span className="text-xs text-slate-400">620</span>
</a>
</li>
</ul>
</section>

<section>
<div className="flex items-center justify-between mb-5">
<h3 className="text-sm font-semibold text-slate-900">Top Companies</h3>
<a className="text-xs text-slate-400 hover:text-slate-900 transition-colors" href="#">View all</a>
</div>
<div className="grid grid-cols-1 gap-2">
<a className="group flex items-center justify-between p-3 rounded-lg border border-slate-100 hover:border-slate-200 hover:shadow-sm bg-white transition-all" href="#">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-slate-900 flex items-center justify-center text-white text-[10px] font-bold">A</div>
<div>
<div className="text-sm font-medium text-slate-900">Acme Inc</div>
<div className="text-xs text-slate-400">Tech · Series C</div>
</div>
</div>
<iconify-icon className="text-slate-300 group-hover:text-slate-500 opacity-0 group-hover:opacity-100 transition-all" icon="lucide:arrow-up-right" width="16"></iconify-icon>
</a>
<a className="group flex items-center justify-between p-3 rounded-lg border border-slate-100 hover:border-slate-200 hover:shadow-sm bg-white transition-all" href="#">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center text-white text-[10px] font-bold">S</div>
<div>
<div className="text-sm font-medium text-slate-900">Starlight</div>
<div className="text-xs text-slate-400">SaaS · Public</div>
</div>
</div>
<iconify-icon className="text-slate-300 group-hover:text-slate-500 opacity-0 group-hover:opacity-100 transition-all" icon="lucide:arrow-up-right" width="16"></iconify-icon>
</a>
<a className="group flex items-center justify-between p-3 rounded-lg border border-slate-100 hover:border-slate-200 hover:shadow-sm bg-white transition-all" href="#">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-orange-500 flex items-center justify-center text-white text-[10px] font-bold">F</div>
<div>
<div className="text-sm font-medium text-slate-900">Foundry</div>
<div className="text-xs text-slate-400">Agency · Global</div>
</div>
</div>
<iconify-icon className="text-slate-300 group-hover:text-slate-500 opacity-0 group-hover:opacity-100 transition-all" icon="lucide:arrow-up-right" width="16"></iconify-icon>
</a>
</div>
</section>
</div>

<section className="mb-12">
<div className="mb-5">
<h3 className="text-sm font-semibold text-slate-900">Popular Combinations</h3>
<p className="text-xs text-slate-500 mt-1">One-click paths to highly requested data</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">

<a className="group block p-4 rounded-lg border border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm transition-all" href="#">
<div className="flex items-start justify-between mb-3">
<iconify-icon className="text-slate-400 group-hover:text-slate-600 transition-colors" icon="lucide:briefcase" width="20"></iconify-icon>
<span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">+12% YoY</span>
</div>
<h4 className="text-sm font-medium text-slate-900 mb-1">Paid Media Manager</h4>
<p className="text-xs text-slate-500">in New York City</p>
</a>

<a className="group block p-4 rounded-lg border border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm transition-all" href="#">
<div className="flex items-start justify-between mb-3">
<iconify-icon className="text-slate-400 group-hover:text-slate-600 transition-colors" icon="lucide:laptop" width="20"></iconify-icon>
<span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">Trending</span>
</div>
<h4 className="text-sm font-medium text-slate-900 mb-1">Remote Growth Director</h4>
<p className="text-xs text-slate-500">United States</p>
</a>

<a className="group block p-4 rounded-lg border border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm transition-all" href="#">
<div className="flex items-start justify-between mb-3">
<iconify-icon className="text-slate-400 group-hover:text-slate-600 transition-colors" icon="lucide:pen-tool" width="20"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-slate-900 mb-1">Brand Marketing</h4>
<p className="text-xs text-slate-500">in San Francisco</p>
</a>

<a className="group block p-4 rounded-lg border border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm transition-all" href="#">
<div className="flex items-start justify-between mb-3">
<iconify-icon className="text-slate-400 group-hover:text-slate-600 transition-colors" icon="lucide:bar-chart-3" width="20"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-slate-900 mb-1">Product Marketing VP</h4>
<p className="text-xs text-slate-500">Global Average</p>
</a>
</div>
</section>

<div className="mt-20 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
<p>© 2023 MarketScale Inc.</p>
<div className="flex gap-4 mt-2 md:mt-0">
<a className="hover:text-slate-600" href="#">Privacy</a>
<a className="hover:text-slate-600" href="#">Terms</a>
<a className="hover:text-slate-600" href="#">Methodology</a>
</div>
</div>
</div>
</main>

    </>
  );
}
