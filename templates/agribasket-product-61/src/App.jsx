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
      
<div className="flex min-h-screen w-full">

<aside className="hidden lg:flex w-64 flex-col bg-[#FBFBFB] fixed h-full z-10 pl-4 pr-2 py-4">
<div className="px-3 pb-6 pt-2">
<div className="flex items-center gap-2 mb-1">
<span className="text-[10px] font-medium text-zinc-400 uppercase tracking-widest">Seller</span>
</div>
<h1 className="text-xl font-semibold tracking-tight text-zinc-900">Agribasket</h1>
<p className="text-xs text-zinc-400 mt-1">admin@agribasket.co</p>
</div>
<nav className="flex-1 space-y-0.5 overflow-y-auto no-scrollbar">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-500 rounded-md hover:bg-zinc-100 hover:text-zinc-900 transition-colors group" href="#">
<i className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600" data-lucide="layout-dashboard"></i>
                    Dashboard
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-500 rounded-md hover:bg-zinc-100 hover:text-zinc-900 transition-colors group" href="#">
<i className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600" data-lucide="user"></i>
                    My Profile
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-500 rounded-md hover:bg-zinc-100 hover:text-zinc-900 transition-colors group" href="#">
<i className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600" data-lucide="map-pin"></i>
                    Addresses
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-500 rounded-md hover:bg-zinc-100 hover:text-zinc-900 transition-colors group" href="#">
<i className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600" data-lucide="lock"></i>
                    Security
                </a>

<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-900 bg-white rounded-md transition-colors" href="#">
<i className="w-4 h-4 text-lime-600" data-lucide="store"></i>
                    My Products
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-500 rounded-md hover:bg-zinc-100 hover:text-zinc-900 transition-colors group" href="#">
<i className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600" data-lucide="gavel"></i>
                    My Auctions
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-500 rounded-md hover:bg-zinc-100 hover:text-zinc-900 transition-colors group" href="#">
<i className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600" data-lucide="truck"></i>
                    My Orders
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-500 rounded-md hover:bg-zinc-100 hover:text-zinc-900 transition-colors group" href="#">
<i className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600" data-lucide="settings"></i>
                    Settings
                </a>
</nav>
<div className="mt-auto px-3">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 rounded-md hover:bg-zinc-100 hover:text-red-600 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="log-out"></i>
                    Logout
                </a>
</div>
</aside>

<main className="flex-1 lg:ml-64 min-h-screen bg-white rounded-l-[2rem] p-6 lg:p-10 shadow-sm border-l border-zinc-100">

<div className="flex items-center gap-2 text-xs font-medium text-zinc-400 mb-8">
<a className="hover:text-zinc-900 transition-colors" href="#">Products</a>
<span className="text-zinc-300">/</span>
<span className="text-zinc-900">PR-731B44</span>
</div>
<div className="max-w-6xl mx-auto pb-20">

<div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-12">
<div className="space-y-2">
<div className="flex items-center gap-3">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Owais Mango</h2>
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-[10px] font-semibold bg-lime-50 text-lime-700 tracking-wide uppercase">
                                Active
                            </span>
</div>
<p className="text-sm text-zinc-500 max-w-xl">
                            Premium Egyptian mango variety known for rich sweetness.
                        </p>
</div>
<div className="flex flex-wrap items-center gap-2">

<button className="inline-flex items-center justify-center w-8 h-8 text-zinc-400 bg-transparent rounded-full hover:bg-zinc-50 hover:text-red-600 transition-all" title="Delete">
<i className="w-4 h-4" data-lucide="trash-2"></i>
</button>
<button className="inline-flex items-center justify-center w-8 h-8 text-zinc-400 bg-transparent rounded-full hover:bg-zinc-50 hover:text-zinc-900 transition-all" title="Edit">
<i className="w-4 h-4" data-lucide="pencil"></i>
</button>
<div className="h-4 w-px bg-zinc-100 mx-2"></div>
<button className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-zinc-600 bg-zinc-50 rounded-full hover:bg-zinc-100 transition-all">
                            Deactivate
                        </button>
<button className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-zinc-600 bg-zinc-50 rounded-full hover:bg-zinc-100 transition-all">
                            Restock
                        </button>
<button className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold text-white bg-lime-600 rounded-full hover:bg-lime-700 transition-all">
                            Create Auction
                        </button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">

<div className="lg:col-span-5 space-y-8">
<div className="relative overflow-hidden rounded-2xl bg-zinc-50 aspect-square ring-1 ring-zinc-100">
<img alt="Owais Mango" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-95" src="https://images.unsplash.com/photo-1591073113125-e46713c829ed?q=80&amp;w=2787&amp;auto=format&amp;fit=crop"/>
</div>

<div className="grid grid-cols-2 gap-x-8 gap-y-8">
<div className="flex flex-col gap-1">
<span className="text-[11px] font-medium text-zinc-400 uppercase tracking-wider">Weight</span>
<span className="text-lg font-medium text-zinc-900 tracking-tight">1,000 kg</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-[11px] font-medium text-zinc-400 uppercase tracking-wider">Price</span>
<span className="text-lg font-medium text-zinc-900 tracking-tight">$1,000.00</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-[11px] font-medium text-zinc-400 uppercase tracking-wider">Stock</span>
<span className="text-lg font-medium text-zinc-900 tracking-tight">7 Units</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-[11px] font-medium text-zinc-400 uppercase tracking-wider">Quality</span>
<div className="flex items-center gap-1 text-lg font-medium text-zinc-900 tracking-tight">
                                    5.0 <i className="w-3.5 h-3.5 fill-current text-zinc-900" data-lucide="star"></i>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7 space-y-10">

<div className="space-y-3">
<h3 className="text-sm font-medium text-zinc-900">About Product</h3>
<p className="text-sm leading-7 text-zinc-500">
                                Owais mango is a premium Egyptian mango variety known for its rich sweetness, soft fiber-free flesh, and strong aromatic flavor. It has a smooth peel, vibrant yellow color when ripe, and is highly popular for fresh consumption and juices.
                            </p>
</div>

<div className="space-y-6">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium text-zinc-900">Specifications</h3>
<button className="text-xs font-medium text-zinc-400 hover:text-zinc-900 transition-colors">View Changes</button>
</div>
<div className="grid grid-cols-2 gap-y-6 gap-x-12">
<div className="group">
<span className="block text-xs text-zinc-400 mb-1 group-hover:text-zinc-600 transition-colors">Origin</span>
<div className="flex items-center gap-2 text-sm text-zinc-900 font-medium">
<span className="grayscale opacity-60">🇪🇬</span> Egypt
                                    </div>
</div>
<div className="group">
<span className="block text-xs text-zinc-400 mb-1 group-hover:text-zinc-600 transition-colors">Currency</span>
<span className="text-sm text-zinc-900 font-medium">USD</span>
</div>
<div className="group">
<span className="block text-xs text-zinc-400 mb-1 group-hover:text-zinc-600 transition-colors">Grade</span>
<span className="text-sm text-zinc-900 font-medium">Class A</span>
</div>
<div className="group">
<span className="block text-xs text-zinc-400 mb-1 group-hover:text-zinc-600 transition-colors">Category</span>
<div className="flex items-center gap-1.5 text-sm text-zinc-900 font-medium">
                                        Fruits <span className="text-zinc-300">/</span> Mango
                                    </div>
</div>
</div>
</div>

<div className="space-y-3">
<span className="text-xs text-zinc-400">Keywords</span>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-zinc-50 text-zinc-600 hover:bg-zinc-100 transition-colors cursor-default">
                                    #owais
                                </span>
<span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-zinc-50 text-zinc-600 hover:bg-zinc-100 transition-colors cursor-default">
                                    #egyptian_mango
                                </span>
<span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-zinc-50 text-zinc-600 hover:bg-zinc-100 transition-colors cursor-default">
                                    #fresh
                                </span>
</div>
</div>

<div className="flex items-center gap-8 pt-6 border-t border-zinc-50">
<div className="flex flex-col gap-0.5">
<span className="text-[10px] uppercase tracking-wider text-zinc-400">Created</span>
<span className="text-xs font-medium text-zinc-700">Dec 02, 2025</span>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-[10px] uppercase tracking-wider text-zinc-400">Updated</span>
<span className="text-xs font-medium text-zinc-700">Dec 02, 2025</span>
</div>
</div>
</div>
</div>

<div className="h-px bg-zinc-100 w-full mb-12"></div>

<div className="space-y-8 mb-16">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight text-zinc-900">Analytics</h3>
<div className="flex items-center gap-2">
<select className="text-xs font-medium text-zinc-600 bg-white border border-zinc-200 rounded-lg px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-lime-100">
<option>Last 30 Days</option>
<option>Last 7 Days</option>
</select>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="bg-white border border-zinc-200/60 p-5 rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.02)] flex items-center justify-between hover:border-zinc-300 transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center">
<i className="w-3.5 h-3.5 text-zinc-500" data-lucide="eye"></i>
</div>
<span className="text-sm font-medium text-zinc-500">Total Views</span>
</div>
<span className="text-2xl font-semibold tracking-tight text-zinc-900">69</span>
</div>
<div className="bg-white border border-zinc-200/60 p-5 rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.02)] flex items-center justify-between hover:border-zinc-300 transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center">
<i className="w-3.5 h-3.5 text-zinc-500" data-lucide="eye"></i>
</div>
<span className="text-sm font-medium text-zinc-500">Last 30 Days Views</span>
</div>
<span className="text-2xl font-semibold tracking-tight text-zinc-900">69</span>
</div>
</div>

<div className="w-full bg-white border border-zinc-200/60 rounded-xl p-6 shadow-[0_2px_4px_rgba(0,0,0,0.02)]">

<div className="relative h-64 w-full">

<div className="absolute inset-0 flex flex-col justify-between text-[10px] text-zinc-300 pointer-events-none">
<div className="border-b border-dashed border-zinc-100 w-full h-0"></div>
<div className="border-b border-dashed border-zinc-100 w-full h-0"></div>
<div className="border-b border-dashed border-zinc-100 w-full h-0"></div>
<div className="border-b border-dashed border-zinc-100 w-full h-0"></div>
<div className="border-b border-dashed border-zinc-100 w-full h-0"></div>
</div>


<div className="absolute inset-0 flex items-end justify-between px-2 pt-4 pb-0">

<div className="relative w-full h-full flex items-end justify-between gap-1">
<div className="group relative flex flex-col items-center gap-2" style={{height: '5%'}}>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-900"></div>
</div>
<div className="group relative flex flex-col items-center gap-2" style={{height: '5%'}}>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-900"></div>
</div>
<div className="group relative flex flex-col items-center gap-2" style={{height: '25%'}}>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-900"></div>
</div>
<div className="group relative flex flex-col items-center gap-2" style={{height: '18%'}}>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-900"></div>
</div>
<div className="group relative flex flex-col items-center gap-2" style={{height: '32%'}}>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-900"></div>
</div>
<div className="group relative flex flex-col items-center gap-2" style={{height: '25%'}}>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-900"></div>
</div>
<div className="group relative flex flex-col items-center gap-2" style={{height: '8%'}}>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-900"></div>
</div>
<div className="group relative flex flex-col items-center gap-2" style={{height: '55%'}}>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-900"></div>
</div>
<div className="group relative flex flex-col items-center gap-2" style={{height: '85%'}}>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-900"></div>
</div>
<div className="group relative flex flex-col items-center gap-2" style={{height: '8%'}}>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-900"></div>
</div>
<div className="group relative flex flex-col items-center gap-2" style={{height: '15%'}}>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-900"></div>
</div>
<div className="group relative flex flex-col items-center gap-2" style={{height: '40%'}}>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-900"></div>
</div>
<div className="group relative flex flex-col items-center gap-2" style={{height: '75%'}}>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-900"></div>
</div>
<div className="group relative flex flex-col items-center gap-2" style={{height: '5%'}}>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-900"></div>
</div>
<div className="group relative flex flex-col items-center gap-2" style={{height: '42%'}}>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-900"></div>
</div>
<div className="group relative flex flex-col items-center gap-2" style={{height: '5%'}}>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-900"></div>
</div>
</div>
</div>
</div>

<div className="flex justify-between mt-4 px-2 text-[10px] text-zinc-400 font-medium">
<span>2025-11-20</span>
<span>2025-11-26</span>
<span>2025-12-02</span>
<span>2025-12-08</span>
<span>2025-12-14</span>
<span>2025-12-19</span>
</div>
</div>
</div>

<div className="space-y-8">
<h3 className="text-lg font-semibold tracking-tight text-zinc-900">Reviews</h3>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 space-y-4">

<div className="bg-white border border-zinc-200/60 p-6 rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-lime-100 flex items-center justify-center text-lime-700 text-xs font-semibold">
<i className="w-4 h-4" data-lucide="user"></i>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900">abdelrahman ali salem</h4>
<div className="flex items-center gap-1 mt-0.5">
<i className="w-3 h-3 fill-amber-400 text-amber-400" data-lucide="star"></i>
<i className="w-3 h-3 fill-amber-400 text-amber-400" data-lucide="star"></i>
<i className="w-3 h-3 fill-amber-400 text-amber-400" data-lucide="star"></i>
<i className="w-3 h-3 fill-amber-400 text-amber-400" data-lucide="star"></i>
<i className="w-3 h-3 fill-amber-400 text-amber-400" data-lucide="star"></i>
</div>
</div>
</div>
<span className="text-xs text-zinc-400 font-medium">12/3/2025</span>
</div>
<p className="text-sm text-zinc-600 leading-relaxed">
                                    gamed gedan
                                </p>
</div>
</div>

<div className="bg-white border border-zinc-200/60 p-8 rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.02)] h-fit">
<div className="flex flex-col items-center text-center mb-8">
<span className="text-3xl font-semibold text-zinc-900 tracking-tight">5</span>
<div className="flex items-center gap-1 my-2">
<i className="w-5 h-5 fill-amber-400 text-amber-400" data-lucide="star"></i>
<i className="w-5 h-5 fill-amber-400 text-amber-400" data-lucide="star"></i>
<i className="w-5 h-5 fill-amber-400 text-amber-400" data-lucide="star"></i>
<i className="w-5 h-5 fill-amber-400 text-amber-400" data-lucide="star"></i>
<i className="w-5 h-5 fill-amber-400 text-amber-400" data-lucide="star"></i>
</div>
<span className="text-xs font-medium text-zinc-400">1 Review</span>
</div>
<div className="space-y-3">

<div className="flex items-center gap-3 text-xs font-medium">
<span className="w-3 text-zinc-400">5</span>
<div className="flex-1 h-2 bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full bg-lime-500 rounded-full w-full"></div>
</div>
<span className="w-8 text-right text-zinc-400">100%</span>
</div>

<div className="flex items-center gap-3 text-xs font-medium">
<span className="w-3 text-zinc-400">4</span>
<div className="flex-1 h-2 bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full bg-lime-500 rounded-full w-0"></div>
</div>
<span className="w-8 text-right text-zinc-400">0%</span>
</div>

<div className="flex items-center gap-3 text-xs font-medium">
<span className="w-3 text-zinc-400">3</span>
<div className="flex-1 h-2 bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full bg-lime-500 rounded-full w-0"></div>
</div>
<span className="w-8 text-right text-zinc-400">0%</span>
</div>

<div className="flex items-center gap-3 text-xs font-medium">
<span className="w-3 text-zinc-400">2</span>
<div className="flex-1 h-2 bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full bg-lime-500 rounded-full w-0"></div>
</div>
<span className="w-8 text-right text-zinc-400">0%</span>
</div>

<div className="flex items-center gap-3 text-xs font-medium">
<span className="w-3 text-zinc-400">1</span>
<div className="flex-1 h-2 bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full bg-lime-500 rounded-full w-0"></div>
</div>
<span className="w-8 text-right text-zinc-400">0%</span>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
