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
      

<aside className="w-[280px] bg-white border-r border-slate-200 flex flex-col hidden md:flex h-full shrink-0">

<div className="h-20 flex items-center px-8">
<span className="text-2xl font-semibold tracking-tight text-blue-600">SaasCa.</span>
</div>
<div className="flex-1 overflow-y-auto px-4 py-4 scrollbar-hide flex flex-col gap-6">

<div>
<p className="px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Menu</p>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-slate-600 rounded-lg hover:bg-slate-50 transition-colors" href="#">
<iconify-icon className="text-[20px] text-slate-400" icon="solar:widget-linear"></iconify-icon> Dashboard
                    </a>
<a className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-slate-600 rounded-lg hover:bg-slate-50 transition-colors" href="#">
<iconify-icon className="text-[20px] text-slate-400" icon="solar:chart-square-linear"></iconify-icon> Analytics
                    </a>
<a className="flex items-center gap-3 px-4 py-2.5 text-sm font-semibold text-blue-700 bg-blue-50 rounded-lg" href="#">
<div className="bg-blue-600 p-1 rounded-md flex items-center justify-center">
<iconify-icon className="text-[14px] text-white" icon="solar:box-linear"></iconify-icon>
</div>
                        Orders
                    </a>
<a className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-slate-600 rounded-lg hover:bg-slate-50 transition-colors" href="#">
<iconify-icon className="text-[20px] text-slate-400" icon="solar:users-group-rounded-linear"></iconify-icon> Customers
                    </a>
<a className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-slate-600 rounded-lg hover:bg-slate-50 transition-colors" href="#">
<iconify-icon className="text-[20px] text-slate-400" icon="solar:graph-up-linear"></iconify-icon> Sales
                    </a>
<a className="flex items-center justify-between px-4 py-2.5 text-sm font-medium text-slate-600 rounded-lg hover:bg-slate-50 transition-colors" href="#">
<div className="flex items-center gap-3">
<iconify-icon className="text-[20px] text-slate-400" icon="solar:letter-linear"></iconify-icon> Messages
                        </div>
<span className="bg-blue-600 text-white text-xs font-medium px-2 py-0.5 rounded-full">23</span>
</a>
<a className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-slate-600 rounded-lg hover:bg-slate-50 transition-colors" href="#">
<iconify-icon className="text-[20px] text-slate-400" icon="solar:bell-linear"></iconify-icon> Notification
                    </a>
</nav>
</div>

<div>
<p className="px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Account</p>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-slate-600 rounded-lg hover:bg-slate-50 transition-colors" href="#">
<iconify-icon className="text-[20px] text-slate-400" icon="solar:document-text-linear"></iconify-icon> Credit Report
                    </a>
<a className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-slate-600 rounded-lg hover:bg-slate-50 transition-colors" href="#">
<iconify-icon className="text-[20px] text-slate-400" icon="solar:settings-linear"></iconify-icon> Settings
                    </a>
</nav>
</div>
</div>

<div className="p-4 mt-auto">
<div className="bg-white rounded-2xl p-4 text-center relative flex flex-col items-center border border-slate-100 shadow-sm overflow-hidden">

<div className="absolute w-32 h-32 bg-blue-50 rounded-full top-0 left-1/2 -translate-x-1/2 -mt-10 blur-xl"></div>

<div className="w-28 h-28 mb-3 flex items-center justify-center relative z-10">
<svg fill="none" height="100" viewbox="0 0 100 100" width="100" xmlns="http://www.w3.org/2000/svg">

<circle cx="50" cy="50" fill="#E0F2FE" r="45"></circle>

<circle cx="25" cy="35" fill="#93C5FD" r="2.5"></circle>
<circle cx="75" cy="30" fill="#93C5FD" r="1.5"></circle>
<circle cx="65" cy="70" fill="#93C5FD" r="2"></circle>
<circle cx="30" cy="65" fill="#93C5FD" r="1.5"></circle>

<path d="M40 65 C35 70 25 78 25 82 C35 80 40 75 42 70" fill="#60A5FA"></path>
<path d="M60 65 C65 70 75 78 75 82 C65 80 60 75 58 70" fill="#60A5FA"></path>
<path d="M50 70 L45 80 L55 80 Z" fill="#60A5FA"></path>

<path d="M50 15 C62 35 65 55 60 70 L40 70 C35 55 38 35 50 15 Z" fill="#2563EB"></path>

<path d="M50 15 C58 35 60 55 50 70 Z" fill="#1D4ED8"></path>

<circle cx="50" cy="45" fill="#EFF6FF" r="8"></circle>
<circle cx="50" cy="45" fill="#93C5FD" r="4"></circle>

<path d="M42 80 L50 98 L58 80 Z" fill="#F59E0B"></path>
<path d="M46 80 L50 90 L54 80 Z" fill="#FEF08A"></path>
</svg>
</div>
<h4 className="text-sm font-semibold text-slate-900 z-10 relative">Go Premium</h4>
<p className="text-xs text-slate-500 mt-1 mb-4 z-10 relative">Unlock full analytics</p>
<button className="w-full bg-blue-600 text-white text-sm font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors hover:bg-blue-700 relative z-10">
<iconify-icon className="text-[16px]" icon="solar:crown-linear"></iconify-icon> Upgrade to Pro
                </button>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden">

<header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
<div className="w-[400px]">
<div className="relative flex items-center w-full h-10 rounded-lg border border-slate-200 bg-white overflow-hidden transition-colors focus-within:border-blue-400 focus-within:ring-1 focus-within:ring-blue-400">
<div className="grid place-items-center h-full w-12 text-slate-400">
<iconify-icon className="text-[16px]" icon="solar:magnifer-linear"></iconify-icon>
</div>
<input className="peer h-full w-full outline-none text-sm text-slate-700 pr-2 bg-transparent placeholder-slate-400" id="search" placeholder="Search Anything" type="text"/>
</div>
</div>
<div className="flex items-center gap-3 cursor-pointer">
<img alt="User" className="w-10 h-10 rounded-full border border-slate-200 object-cover" src="https://i.pravatar.cc/150?img=11"/>
<div className="text-right flex flex-col justify-center">
<p className="text-sm font-semibold text-slate-900 leading-tight">S. Datta</p>
<p className="text-xs text-slate-500 mt-0.5">uixsantusdattabd@gmail.com</p>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-8 space-y-6">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h1 className="text-3xl font-semibold tracking-tight text-slate-900">Orders</h1>
<p className="text-sm text-slate-500 mt-1">Your buying and selling transactions</p>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 bg-white border border-slate-200 text-slate-600 text-sm font-medium px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors">
<iconify-icon className="text-[16px] text-slate-400" icon="solar:calendar-linear"></iconify-icon>
                        Jan 23 - Jan 27
                        <iconify-icon className="text-[16px] text-slate-400 ml-1" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<button className="flex items-center gap-2 bg-white border border-slate-200 text-slate-600 text-sm font-medium px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors">
                        Google Analytic
                        <iconify-icon className="text-[16px] text-slate-400 ml-1" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

<div className="xl:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between h-40 group hover:border-blue-100 transition-colors">
<div className="flex justify-between items-start">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
<iconify-icon className="text-[20px] text-blue-600" icon="solar:box-linear"></iconify-icon>
</div>
<div className="flex items-center gap-2">
<button className="bg-blue-600 text-white text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1 hover:bg-blue-700 transition-colors">
                                    Report <iconify-icon className="text-[12px]" icon="solar:arrow-right-down-linear"></iconify-icon>
</button>
<button className="text-slate-400 hover:text-slate-600"><iconify-icon className="text-[20px]" icon="solar:menu-dots-linear"></iconify-icon></button>
</div>
</div>
<div>
<p className="text-sm text-slate-500 mb-1">Total Orders</p>
<div className="flex items-baseline gap-2">
<h3 className="text-3xl font-semibold tracking-tight text-slate-900">8,98,879</h3>
<span className="text-sm font-medium text-emerald-600 flex items-center"><iconify-icon className="text-[14px] mr-0.5" icon="solar:chart-line-up-linear"></iconify-icon> 5.4%</span>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between h-40 group hover:border-blue-100 transition-colors">
<div className="flex justify-between items-start">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
<iconify-icon className="text-[20px] text-blue-600" icon="solar:lock-linear"></iconify-icon>
</div>
<div className="flex items-center gap-2">
<button className="bg-blue-600 text-white text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1 hover:bg-blue-700 transition-colors">
                                    Report <iconify-icon className="text-[12px]" icon="solar:arrow-right-down-linear"></iconify-icon>
</button>
<button className="text-slate-400 hover:text-slate-600"><iconify-icon className="text-[20px]" icon="solar:menu-dots-linear"></iconify-icon></button>
</div>
</div>
<div>
<p className="text-sm text-slate-500 mb-1">Pending Orders</p>
<div className="flex items-baseline gap-2">
<h3 className="text-3xl font-semibold tracking-tight text-slate-900">1,13,976</h3>
<span className="text-sm font-medium text-emerald-600 flex items-center"><iconify-icon className="text-[14px] mr-0.5" icon="solar:chart-line-up-linear"></iconify-icon> 3%</span>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between h-40 group hover:border-blue-100 transition-colors">
<div className="flex justify-between items-start">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
<iconify-icon className="text-[20px] text-blue-600" icon="solar:cart-linear"></iconify-icon>
</div>
<div className="flex items-center gap-2">
<button className="bg-blue-600 text-white text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1 hover:bg-blue-700 transition-colors">
                                    Report <iconify-icon className="text-[12px]" icon="solar:arrow-right-down-linear"></iconify-icon>
</button>
<button className="text-slate-400 hover:text-slate-600"><iconify-icon className="text-[20px]" icon="solar:menu-dots-linear"></iconify-icon></button>
</div>
</div>
<div>
<p className="text-sm text-slate-500 mb-1">Dispatched</p>
<div className="flex items-baseline gap-2">
<h3 className="text-3xl font-semibold tracking-tight text-slate-900">3,45,998</h3>
<span className="text-sm font-medium text-emerald-600 flex items-center"><iconify-icon className="text-[14px] mr-0.5" icon="solar:chart-line-up-linear"></iconify-icon> 7.8%</span>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between h-40 group hover:border-blue-100 transition-colors">
<div className="flex justify-between items-start">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
<iconify-icon className="text-[20px] text-blue-600" icon="solar:dollar-linear"></iconify-icon>
</div>
<div className="flex items-center gap-2">
<button className="bg-blue-600 text-white text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1 hover:bg-blue-700 transition-colors">
                                    Report <iconify-icon className="text-[12px]" icon="solar:arrow-right-down-linear"></iconify-icon>
</button>
<button className="text-slate-400 hover:text-slate-600"><iconify-icon className="text-[20px]" icon="solar:menu-dots-linear"></iconify-icon></button>
</div>
</div>
<div>
<p className="text-sm text-slate-500 mb-1">Revenue</p>
<div className="flex items-baseline gap-2">
<h3 className="text-3xl font-semibold tracking-tight text-slate-900">$45,3,113</h3>
<span className="text-sm font-medium text-emerald-600 flex items-center"><iconify-icon className="text-[14px] mr-0.5" icon="solar:chart-line-up-linear"></iconify-icon> 2.7%</span>
</div>
</div>
</div>
</div>

<div className="xl:col-span-5 bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col">
<div className="mb-6">
<h2 className="text-base font-semibold text-slate-900">Product Inventory</h2>
<p className="text-sm text-slate-500 mt-1">Overall sales target and inventory report</p>
</div>
<div className="flex-1 relative w-full min-h-[220px]">

<div className="absolute inset-0 flex flex-col justify-between text-xs text-slate-400 pb-6 pr-4">
<div className="flex items-center justify-between border-b border-slate-100 pb-2 border-dashed w-full relative"><span className="absolute -left-2 bg-white pr-2">$50k</span><div className="w-full"></div></div>
<div className="flex items-center justify-between border-b border-slate-100 pb-2 border-dashed w-full relative"><span className="absolute -left-2 bg-white pr-2">$40k</span><div className="w-full"></div></div>
<div className="flex items-center justify-between border-b border-slate-100 pb-2 border-dashed w-full relative"><span className="absolute -left-2 bg-white pr-2">$30k</span><div className="w-full"></div></div>
<div className="flex items-center justify-between border-b border-slate-100 pb-2 border-dashed w-full relative"><span className="absolute -left-2 bg-white pr-2">$20k</span><div className="w-full"></div></div>
</div>

<svg className="absolute inset-0 w-full h-full pb-8 pl-10" preserveaspectratio="none" viewbox="0 0 100 100">
<defs>
<lineargradient id="gradientArea" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#2563eb" stop-opacity="0.15"></stop>
<stop offset="100%" stop-color="#2563eb" stop-opacity="0"></stop>
</lineargradient>
</defs>

<path d="M 0 70 C 10 70, 10 50, 20 50 C 30 50, 30 60, 40 60 C 50 60, 50 30, 60 30 C 70 30, 70 45, 80 45 C 90 45, 90 15, 100 15 L 100 100 L 0 100 Z" fill="url(#gradientArea)"></path>

<path d="M 0 70 C 10 70, 10 50, 20 50 C 30 50, 30 60, 40 60 C 50 60, 50 30, 60 30 C 70 30, 70 45, 80 45 C 90 45, 90 15, 100 15" fill="none" stroke="#2563eb" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" vector-effect="non-scaling-stroke"></path>

<circle cx="0" cy="70" fill="white" r="3" stroke="#2563eb" strokeWidth="2" vector-effect="non-scaling-stroke"></circle>
<circle cx="20" cy="50" fill="white" r="3" stroke="#2563eb" strokeWidth="2" vector-effect="non-scaling-stroke"></circle>
<circle cx="40" cy="60" fill="white" r="3" stroke="#2563eb" strokeWidth="2" vector-effect="non-scaling-stroke"></circle>

<circle cx="60" cy="30" fill="white" r="4" stroke="#2563eb" strokeWidth="2.5" vector-effect="non-scaling-stroke"></circle>
<circle cx="80" cy="45" fill="white" r="3" stroke="#2563eb" strokeWidth="2" vector-effect="non-scaling-stroke"></circle>
<circle cx="100" cy="15" fill="white" r="3" stroke="#2563eb" strokeWidth="2" vector-effect="non-scaling-stroke"></circle>
</svg>

<div className="absolute left-[52%] top-[12%] -translate-x-1/2 bg-white border border-slate-100 shadow-sm rounded-lg px-3 py-1.5 flex flex-col items-center">
<div className="flex items-center gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
<span className="text-[10px] text-slate-500 font-medium uppercase tracking-wide">Engagement</span>
</div>
<span className="text-sm font-semibold text-slate-900">+37%</span>
</div>

<div className="absolute bottom-0 left-0 w-full pl-10 flex justify-between text-xs text-slate-500 font-medium">
<span>21</span>
<span>25</span>
<span>32</span>
<span>44</span>
<span>50</span>
<span>63</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-8">

<div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
<div className="flex items-center justify-between mb-6">
<h2 className="text-base font-semibold text-slate-900">Countries</h2>
<button className="text-slate-400 hover:text-slate-600"><iconify-icon className="text-[16px]" icon="solar:maximize-square-linear"></iconify-icon></button>
</div>
<div className="space-y-6">

<div>
<div className="flex justify-between items-center mb-2">
<span className="text-sm font-medium text-slate-700">United States</span>
<span className="text-sm font-medium text-slate-400">1,40,987</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2.5">
<div className="bg-blue-600 h-2.5 rounded-full" style={{width: '30%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between items-center mb-2">
<span className="text-sm font-medium text-slate-700">Canada</span>
<span className="text-sm font-medium text-slate-400">3,47,153</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2.5">
<div className="bg-blue-600 h-2.5 rounded-full" style={{width: '50%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between items-center mb-2">
<span className="text-sm font-medium text-slate-700">Mexico</span>
<span className="text-sm font-medium text-slate-400">5,98,500</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2.5">
<div className="bg-blue-600 h-2.5 rounded-full" style={{width: '75%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between items-center mb-2">
<span className="text-sm font-medium text-slate-700">Brazil</span>
<span className="text-sm font-medium text-slate-400">2,98,485</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2.5">
<div className="bg-blue-600 h-2.5 rounded-full" style={{width: '40%'}}></div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col">
<div className="flex items-center justify-between mb-6">
<h2 className="text-base font-semibold text-slate-900">Best Selling Products</h2>
<button className="flex items-center gap-2 border border-slate-200 text-slate-600 px-3 py-1.5 rounded-lg text-sm hover:bg-slate-50 transition-colors">
<iconify-icon className="text-[14px]" icon="solar:filter-linear"></iconify-icon> Filter
                        </button>
</div>
<div className="flex-1 space-y-6">

<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center p-2">
<img alt="Phone" className="object-contain" src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=100&amp;h=100&amp;fit=crop"/>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">IPhone 14 Pro Max</h4>
<p className="text-sm text-slate-500 mt-0.5">$2400 X 3</p>
</div>
</div>
<div className="text-right flex flex-col items-end gap-1.5">
<span className="text-xs text-slate-400">12 Dec 2022</span>
<div className="flex items-center gap-3">
<span className="flex items-center gap-1.5 text-xs font-medium text-slate-700">
<span className="w-2 h-2 rounded-full bg-blue-600"></span> In Stock
                                    </span>
<span className="bg-slate-100 text-slate-600 text-[11px] font-medium px-2 py-0.5 rounded-md">Pending</span>
</div>
</div>
</div>

<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center p-2">
<img alt="Headphone" className="object-contain" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&amp;h=100&amp;fit=crop"/>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Leotech Bluetooth Heaphone</h4>
<p className="text-sm text-slate-500 mt-0.5">$2400 X 3</p>
</div>
</div>
<div className="text-right flex flex-col items-end gap-1.5">
<span className="text-xs text-slate-400">8 Dec 2022</span>
<div className="flex items-center gap-3">
<span className="flex items-center gap-1.5 text-xs font-medium text-slate-700">
<span className="w-2 h-2 rounded-full bg-blue-600"></span> In Stock
                                    </span>
<span className="bg-slate-100 text-slate-600 text-[11px] font-medium px-2 py-0.5 rounded-md">Pending</span>
</div>
</div>
</div>

<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center p-2">
<img alt="Earbuds" className="object-contain" src="https://images.unsplash.com/photo-1606220838315-056192d5e927?w=100&amp;h=100&amp;fit=crop"/>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">IPhone 14 Pro Max</h4>
<p className="text-sm text-slate-500 mt-0.5">$2400 X 3</p>
</div>
</div>
<div className="text-right flex flex-col items-end gap-1.5">
<span className="text-xs text-slate-400">6 Dec 2022</span>
<div className="flex items-center gap-3">
<span className="flex items-center gap-1.5 text-xs font-medium text-slate-700">
<span className="w-2 h-2 rounded-full bg-blue-600"></span> In Stock
                                    </span>
<span className="bg-slate-100 text-slate-600 text-[11px] font-medium px-2 py-0.5 rounded-md">Pending</span>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col">
<button className="w-full bg-blue-600 text-white text-sm font-medium py-3 rounded-xl flex items-center justify-center gap-2 mb-6 hover:bg-blue-700 transition-colors">
<iconify-icon className="text-[16px]" icon="solar:add-circle-linear"></iconify-icon> Add Auto Listing
                    </button>
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-semibold text-slate-900">Dec 2, 2022</h3>
<div className="flex gap-1">
<button className="p-1 hover:bg-slate-50 rounded"><iconify-icon className="text-[16px] text-slate-600" icon="solar:alt-arrow-left-linear"></iconify-icon></button>
<button className="p-1 hover:bg-slate-50 rounded"><iconify-icon className="text-[16px] text-slate-600" icon="solar:alt-arrow-right-linear"></iconify-icon></button>
</div>
</div>
<div className="grid grid-cols-7 gap-y-3 gap-x-1 text-center text-xs">
<div className="font-medium text-slate-400">S</div>
<div className="font-medium text-slate-400">S</div>
<div className="font-medium text-slate-400">M</div>
<div className="font-medium text-slate-400">T</div>
<div className="font-medium text-slate-400">W</div>
<div className="font-medium text-slate-400">T</div>
<div className="font-medium text-slate-400">F</div>

<div className="text-slate-400 py-1">29</div>
<div className="text-slate-400 py-1">30</div>
<div className="text-slate-700 font-medium py-1">1</div>
<div className="text-slate-700 font-medium py-1">2</div>
<div className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center mx-auto font-medium shadow-sm">3</div>
<div className="text-slate-700 font-medium py-1">4</div>
<div className="text-slate-700 font-medium py-1">5</div>
<div className="text-slate-700 font-medium py-1">6</div>
<div className="text-slate-700 font-medium py-1">7</div>
<div className="text-slate-700 font-medium py-1">8</div>
<div className="text-slate-700 font-medium py-1">9</div>
<div className="text-slate-700 font-medium py-1">10</div>
<div className="text-slate-700 font-medium py-1">11</div>
<div className="text-slate-700 font-medium py-1">12</div>
<div className="text-slate-700 font-medium py-1">13</div>
<div className="text-slate-700 font-medium py-1">14</div>
<div className="text-slate-700 font-medium py-1">15</div>
<div className="text-slate-700 font-medium py-1">16</div>
<div className="text-slate-700 font-medium py-1">17</div>
<div className="text-slate-700 font-medium py-1">18</div>
<div className="text-slate-700 font-medium py-1">19</div>
<div className="text-slate-700 font-medium py-1">20</div>
<div className="text-slate-700 font-medium py-1">21</div>
<div className="text-slate-700 font-medium py-1">22</div>
<div className="text-slate-700 font-medium py-1">23</div>
<div className="text-slate-700 font-medium py-1">24</div>
<div className="text-slate-700 font-medium py-1">25</div>
<div className="text-slate-700 font-medium py-1">26</div>
<div className="text-slate-700 font-medium py-1">27</div>
<div className="text-slate-700 font-medium py-1">28</div>
<div className="text-slate-700 font-medium py-1">29</div>
<div className="text-slate-700 font-medium py-1">30</div>
<div className="text-slate-700 font-medium py-1">31</div>
<div className="text-slate-400 py-1">1</div>
<div className="text-slate-400 py-1">2</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
