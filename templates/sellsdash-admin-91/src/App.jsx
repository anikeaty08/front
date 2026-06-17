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



        // Initialize Lucide icons
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
      

<aside className="w-20 bg-white border-r border-gray-100 flex flex-col items-center py-6 flex-shrink-0 z-20">

<div className="mb-10 text-indigo-600">
<div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
<i className="text-white w-6 h-6" data-lucide="zap" strokeWidth="1.5"></i>
</div>
</div>

<nav className="flex-1 w-full flex flex-col gap-6 items-center">
<a className="p-3 bg-indigo-50 text-indigo-600 rounded-xl transition-all duration-200 group relative" href="#">
<div className="absolute inset-y-0 left-0 w-1 bg-indigo-600 rounded-r-full h-1/2 my-auto -ml-3"></div>
<i className="w-6 h-6" data-lucide="layout-dashboard" strokeWidth="1.5"></i>
</a>
<a className="p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-xl transition-all duration-200" href="#">
<i className="w-6 h-6" data-lucide="layout-grid" strokeWidth="1.5"></i>
</a>
<a className="p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-xl transition-all duration-200" href="#">
<i className="w-6 h-6" data-lucide="shopping-cart" strokeWidth="1.5"></i>
</a>
<a className="p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-xl transition-all duration-200" href="#">
<i className="w-6 h-6" data-lucide="shopping-bag" strokeWidth="1.5"></i>
</a>
<a className="p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-xl transition-all duration-200" href="#">
<i className="w-6 h-6" data-lucide="calendar" strokeWidth="1.5"></i>
</a>
</nav>

<div className="flex flex-col gap-6 items-center mt-auto">
<a className="p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-xl transition-all duration-200" href="#">
<i className="w-6 h-6" data-lucide="settings" strokeWidth="1.5"></i>
</a>
<a className="p-3 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all duration-200" href="#">
<i className="w-6 h-6" data-lucide="log-out" strokeWidth="1.5"></i>
</a>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="h-20 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-10">

<div className="flex items-center gap-3">

<h2 className="text-xl font-semibold tracking-tight text-gray-900 hidden sm:block">Overview</h2>
</div>

<div className="flex-1 max-w-lg mx-auto px-6">
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<i className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" data-lucide="search" strokeWidth="1.5"></i>
</div>
<input className="block w-full pl-10 pr-24 py-2.5 border border-gray-200 rounded-lg leading-5 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all duration-200" placeholder="Search for items, products..." type="text"/>
<div className="absolute inset-y-0 right-1 flex items-center">
<button className="bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-md hover:bg-gray-800 transition-colors">
                            Search
                        </button>
</div>
</div>
</div>

<div className="flex items-center gap-4">
<button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors">
<i className="w-5 h-5" data-lucide="bell" strokeWidth="1.5"></i>
<span className="absolute top-2 right-2.5 block h-2 w-2 rounded-full ring-2 ring-white bg-red-500"></span>
</button>
<div className="h-9 w-9 rounded-full bg-gradient-to-br from-indigo-100 to-indigo-200 border border-indigo-200 overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 lg:p-8">
<div className="max-w-7xl mx-auto space-y-8">

<div>
<h1 className="text-3xl font-semibold text-gray-900 tracking-tight">Dashboard</h1>
<p className="text-gray-500 mt-1 text-base">Here is your daily performance summary.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-blue-600 rounded-2xl p-6 text-white shadow-xl shadow-blue-200 relative overflow-hidden group">
<div className="absolute -right-6 -top-6 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all duration-500"></div>
<div className="flex justify-between items-start mb-4 relative z-10">
<div className="p-2.5 bg-white/20 rounded-lg backdrop-blur-sm">
<i className="w-5 h-5 text-white" data-lucide="eye" strokeWidth="1.5"></i>
</div>
<span className="bg-white/20 text-xs font-medium px-2 py-1 rounded backdrop-blur-sm">+12%</span>
</div>
<div className="relative z-10">
<p className="text-blue-100 text-sm font-medium mb-1">Total Views</p>
<h3 className="text-3xl font-semibold tracking-tight">8,402</h3>
<p className="text-blue-200 text-xs mt-4">Views from 3rd May 2022</p>
</div>
</div>

<div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
<div className="flex justify-between items-start mb-4">
<div className="p-2.5 bg-green-50 rounded-lg">
<i className="w-5 h-5 text-green-600" data-lucide="shopping-bag" strokeWidth="1.5"></i>
</div>
</div>
<div>
<p className="text-gray-500 text-sm font-medium mb-1">Total Products</p>
<h3 className="text-3xl font-semibold text-gray-900 tracking-tight">5,230</h3>
<button className="text-indigo-600 hover:text-indigo-700 text-xs font-medium mt-4 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="plus" strokeWidth="2"></i> Add New Product
                            </button>
</div>
</div>

<div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
<div className="flex justify-between items-start mb-4">
<div className="p-2.5 bg-rose-50 rounded-lg">
<i className="w-5 h-5 text-rose-600" data-lucide="users" strokeWidth="1.5"></i>
</div>
</div>
<div>
<p className="text-gray-500 text-sm font-medium mb-1">Total Users</p>
<h3 className="text-3xl font-semibold text-gray-900 tracking-tight">4,425</h3>
<button className="text-indigo-600 hover:text-indigo-700 text-xs font-medium mt-4 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="plus" strokeWidth="2"></i> Add New User
                            </button>
</div>
</div>

<div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
<div className="flex justify-between items-start mb-4">
<div className="p-2.5 bg-teal-50 rounded-lg">
<i className="w-5 h-5 text-teal-600" data-lucide="shopping-cart" strokeWidth="1.5"></i>
</div>
</div>
<div>
<p className="text-gray-500 text-sm font-medium mb-1">Total Sells</p>
<h3 className="text-3xl font-semibold text-gray-900 tracking-tight">1,024</h3>
<p className="text-gray-400 text-xs mt-4">Sells from 3rd May 2022</p>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-auto">

<div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-semibold text-gray-900">Top Products</h3>
<button className="text-gray-400 hover:text-gray-600">
<i className="w-5 h-5" data-lucide="more-horizontal" strokeWidth="1.5"></i>
</button>
</div>
<div className="overflow-x-auto">
<table className="w-full">
<thead>
<tr className="text-left border-b border-gray-100">
<th className="pb-4 pl-4 text-xs font-medium text-gray-400 uppercase tracking-wider w-16">No</th>
<th className="pb-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Product</th>
<th className="pb-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
<th className="pb-4 text-xs font-medium text-gray-400 uppercase tracking-wider text-right">Sold</th>
<th className="pb-4 pr-4 text-xs font-medium text-gray-400 uppercase tracking-wider text-right">View</th>
</tr>
</thead>
<tbody className="text-sm">

<tr className="group relative rounded-xl">
<td className="py-3 pl-4">
<span className="text-gray-500 font-medium">1</span>

<div className="absolute inset-y-1 left-0 right-0 border-2 border-indigo-500/10 bg-indigo-50/20 rounded-lg pointer-events-none -z-10"></div>
</td>
<td className="py-3">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-lg bg-gray-100 overflow-hidden border border-gray-200">
<img alt="Phone" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<span className="font-medium text-gray-900">Mobile Phones</span>
</div>
</td>
<td className="py-3">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-100">
                                                Active
                                            </span>
</td>
<td className="py-3 text-right text-gray-600 font-medium">05</td>
<td className="py-3 pr-4 text-right text-gray-600 font-medium">320</td>
</tr>

<tr className="group hover:bg-gray-50/50 transition-colors">
<td className="py-4 pl-4 text-gray-500 font-medium">2</td>
<td className="py-4">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-lg bg-gray-100 overflow-hidden border border-gray-200">
<img alt="Laptop" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<span className="font-medium text-gray-700">Apple Laptops</span>
</div>
</td>
<td className="py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-100">
                                                Active
                                            </span>
</td>
<td className="py-4 text-right text-gray-500 font-medium">06</td>
<td className="py-4 pr-4 text-right text-gray-500 font-medium">150</td>
</tr>

<tr className="group hover:bg-gray-50/50 transition-colors">
<td className="py-4 pl-4 text-gray-500 font-medium">3</td>
<td className="py-4">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-lg bg-gray-100 overflow-hidden border border-gray-200">
<img alt="Laptop" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1544731612-de7f96afe55f?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<span className="font-medium text-gray-700">Windows Laptops</span>
</div>
</td>
<td className="py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-100">
                                                Active
                                            </span>
</td>
<td className="py-4 text-right text-gray-500 font-medium">04</td>
<td className="py-4 pr-4 text-right text-gray-500 font-medium">250</td>
</tr>

<tr className="group hover:bg-gray-50/50 transition-colors">
<td className="py-4 pl-4 text-gray-500 font-medium">4</td>
<td className="py-4">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-lg bg-gray-100 overflow-hidden border border-gray-200">
<img alt="Headphones" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<span className="font-medium text-gray-700">Head Phones</span>
</div>
</td>
<td className="py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-100">
                                                Active
                                            </span>
</td>
<td className="py-4 text-right text-gray-500 font-medium">09</td>
<td className="py-4 pr-4 text-right text-gray-500 font-medium">160</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col">
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-semibold text-gray-900">Views &amp; Sells</h3>
<button className="text-gray-400 hover:text-gray-600">
<i className="w-5 h-5" data-lucide="more-horizontal" strokeWidth="1.5"></i>
</button>
</div>

<div className="flex gap-4 mb-6">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-teal-500"></span>
<span className="text-sm text-gray-500 font-medium">Total Sells</span>
</div>
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-blue-500"></span>
<span className="text-sm text-gray-500 font-medium">Total Views</span>
</div>
</div>

<div className="flex-1 w-full relative h-64">

<div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-xs text-gray-400 font-medium">
<span>7k</span>
<span>6k</span>
<span>5k</span>
<span>4k</span>
<span>3k</span>
<span>2k</span>
<span>1k</span>
<span>0</span>
</div>

<div className="absolute left-8 right-0 top-2 bottom-6">

<div className="w-full h-full flex flex-col justify-between">
<div className="w-full border-t border-dashed border-gray-100"></div>
<div className="w-full border-t border-dashed border-gray-100"></div>
<div className="w-full border-t border-dashed border-gray-100"></div>
<div className="w-full border-t border-dashed border-gray-100"></div>
<div className="w-full border-t border-dashed border-gray-100"></div>
<div className="w-full border-t border-dashed border-gray-100"></div>
<div className="w-full border-t border-dashed border-gray-100"></div>
<div className="w-full border-t border-gray-200"></div>
</div>

<svg className="absolute inset-0 w-full h-full overflow-visible" preserveaspectratio="none">
<path d="M0,160 L50,130 L100,180 L150,210 L200,80 L250,50" fill="none" stroke="#3b82f6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" vector-effect="non-scaling-stroke"></path>

<circle className="fill-white stroke-blue-500" cx="0%" cy="66%" r="3" strokeWidth="2"></circle>
<circle className="fill-white stroke-blue-500" cx="20%" cy="54%" r="3" strokeWidth="2"></circle>
<circle className="fill-white stroke-blue-500" cx="40%" cy="75%" r="3" strokeWidth="2"></circle>
<circle className="fill-white stroke-blue-500" cx="60%" cy="87%" r="3" strokeWidth="2"></circle>
<circle className="fill-white stroke-blue-500" cx="80%" cy="33%" r="3" strokeWidth="2"></circle>
<circle className="fill-white stroke-blue-500" cx="100%" cy="20%" r="3" strokeWidth="2"></circle>
</svg>

<svg className="absolute inset-0 w-full h-full overflow-visible" preserveaspectratio="none">
<path d="M0,230 L50,180 L100,205 L150,230 L200,160 L250,180" fill="none" stroke="#14b8a6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" vector-effect="non-scaling-stroke"></path>

<circle className="fill-white stroke-teal-500" cx="0%" cy="95%" r="3" strokeWidth="2"></circle>
<circle className="fill-white stroke-teal-500" cx="20%" cy="75%" r="3" strokeWidth="2"></circle>
<circle className="fill-white stroke-teal-500" cx="40%" cy="85%" r="3" strokeWidth="2"></circle>
<circle className="fill-white stroke-teal-500" cx="60%" cy="95%" r="3" strokeWidth="2"></circle>
<circle className="fill-white stroke-teal-500" cx="80%" cy="66%" r="3" strokeWidth="2"></circle>
<circle className="fill-white stroke-teal-500" cx="100%" cy="75%" r="3" strokeWidth="2"></circle>
</svg>
</div>

<div className="absolute left-8 right-0 bottom-0 flex justify-between text-xs text-gray-500 font-medium pt-2">
<span>M</span>
<span>T</span>
<span>W</span>
<span>T</span>
<span>F</span>
<span>S</span>
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
