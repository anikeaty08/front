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
      

<aside className="w-[260px] bg-white border-r border-gray-200 flex flex-col flex-shrink-0 h-full">

<div className="p-6 pb-4 flex justify-between items-center">
<div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white shadow-sm">
<i className="w-5 h-5 fill-current text-black" data-lucide="zap"></i>
</div>
<button className="text-gray-400 hover:text-gray-600">
<i className="w-5 h-5" data-lucide="panel-left-close"></i>
</button>
</div>
<div className="flex-1 overflow-y-auto px-4 py-2 space-y-8">

<div>
<h3 className="px-3 text-xs font-normal text-gray-400 mb-2">Favorites</h3>
<nav className="space-y-0.5">
<a className="flex items-center gap-3 px-3 py-2 text-[13px] font-medium text-gray-600 rounded-lg hover:bg-gray-50 group" href="#">
<i className="w-4 h-4 text-gray-400 group-hover:text-gray-600" data-lucide="file-text"></i>
                        Technical Docs
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-[13px] font-medium text-gray-600 rounded-lg hover:bg-gray-50 group" href="#">
<i className="w-4 h-4 text-gray-400 group-hover:text-gray-600" data-lucide="layout-template"></i>
                        Campaign Guidelines
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-[13px] font-medium text-gray-600 rounded-lg hover:bg-gray-50 group" href="#">
<i className="w-4 h-4 text-gray-400 group-hover:text-gray-600" data-lucide="shield-alert"></i>
                        Important Rules
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-[13px] font-medium text-gray-600 rounded-lg hover:bg-gray-50 group" href="#">
<i className="w-4 h-4 text-gray-400 group-hover:text-gray-600" data-lucide="monitor"></i>
                        Onboarding
                    </a>
</nav>
</div>

<div>
<h3 className="px-3 text-xs font-normal text-gray-400 mb-2">Main Menu</h3>
<nav className="space-y-0.5">
<a className="flex items-center gap-3 px-3 py-2 text-[13px] font-medium text-gray-600 rounded-lg hover:bg-gray-50 group" href="#">
<i className="w-4 h-4 text-gray-400 group-hover:text-gray-600" data-lucide="home"></i>
                        Dashboard
                    </a>

<a className="flex items-center gap-3 px-3 py-2 text-[13px] font-medium text-gray-900 bg-gray-100 rounded-lg" href="#">
<i className="w-4 h-4 text-gray-900" data-lucide="globe"></i>
                        Campaigns
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-[13px] font-medium text-gray-600 rounded-lg hover:bg-gray-50 group" href="#">
<i className="w-4 h-4 text-gray-400 group-hover:text-gray-600" data-lucide="message-square"></i>
                        Chat
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-[13px] font-medium text-gray-600 rounded-lg hover:bg-gray-50 group" href="#">
<i className="w-4 h-4 text-gray-400 group-hover:text-gray-600" data-lucide="life-buoy"></i>
                        Support Center
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-[13px] font-medium text-gray-600 rounded-lg hover:bg-gray-50 group" href="#">
<i className="w-4 h-4 text-gray-400 group-hover:text-gray-600" data-lucide="dollar-sign"></i>
                        Leads
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-[13px] font-medium text-gray-600 rounded-lg hover:bg-gray-50 group" href="#">
<i className="w-4 h-4 text-gray-400 group-hover:text-gray-600" data-lucide="folder"></i>
                        Archive
                    </a>
</nav>
</div>
</div>

<div className="p-4 space-y-4">

<div className="bg-gradient-to-br from-green-300 via-green-200 to-yellow-200 rounded-xl p-4 relative overflow-hidden">
<div className="flex items-center gap-3 mb-1">
<div className="w-8 h-8 rounded-full bg-black/80 flex items-center justify-center text-white">

<svg className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5c4.142 0 7.5 3.358 7.5 7.5 0 .684-.093 1.343-.265 1.965l-5.27-9.135A7.476 7.476 0 0 1 12 4.5zm-5.735 2.235 5.27 9.135A7.458 7.458 0 0 1 4.5 12c0-4.142 3.358-7.5 7.5-7.5.684 0 1.343.093 1.965.265l-9.135 5.27a7.46 7.46 0 0 1-.33-3.3zM12 19.5c-4.142 0-7.5-3.358-7.5-7.5 0-.684.093-1.343.265-1.965l5.27 9.135A7.476 7.476 0 0 1 12 19.5z"></path>
</svg>
</div>
<div>
<p className="text-[13px] font-semibold text-gray-900 leading-tight">Get the extension</p>
<a className="text-[11px] font-medium text-gray-700 underline decoration-gray-500/50" href="#">Install Now</a>
</div>
</div>
</div>

<div className="flex items-center gap-3 pt-2 border-t border-gray-100">
<img alt="User" className="w-9 h-9 rounded-full object-cover" src="https://i.pravatar.cc/150?u=amanda"/>
<div className="flex-1 min-w-0">
<p className="text-[13px] font-semibold text-gray-900 truncate">Amanda Davids</p>
<p className="text-[11px] text-gray-500 truncate">Administrator</p>
</div>
<button className="text-gray-400 hover:text-gray-600">
<i className="w-4 h-4" data-lucide="moon"></i>
</button>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-[#F8F9FB]">

<header className="h-[72px] flex items-center justify-between px-8 bg-transparent flex-shrink-0">
<div className="text-sm text-gray-400">
                Campaigns <span className="mx-2 text-gray-300">/</span> <span className="text-gray-800 font-medium">Analytics</span>
</div>
<div className="flex items-center gap-6">
<div className="relative group">
<i className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="search"></i>
<input className="w-64 h-10 pl-10 pr-12 bg-gray-100 border-none rounded-lg text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-gray-200 focus:bg-white transition-all outline-none" placeholder="Search" type="text"/>
<div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-gray-400">
<span className="text-[10px] font-mono">⌘</span>
<span className="text-[10px] font-mono">/</span>
</div>
</div>
<button className="relative text-gray-500 hover:text-gray-700">
<i className="w-5 h-5" data-lucide="bell"></i>
<span className="absolute top-0 right-0 w-2 h-2 bg-orange-500 border-2 border-[#F8F9FB] rounded-full translate-x-[2px] -translate-y-[2px]"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto px-8 pb-8">

<div className="mt-4 mb-8 flex items-end justify-between">
<div>
<h1 className="text-[32px] font-bold text-gray-900 tracking-tight leading-tight">Your total revenue</h1>
<p className="text-[32px] font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 leading-tight mt-1">$90,239.00</p>
</div>
<div className="flex items-center gap-3 mb-2">
<button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-[10px] text-[13px] font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
<i className="w-4 h-4 text-gray-500" data-lucide="calendar"></i>
                        Select Dates
                    </button>
<button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-[10px] text-[13px] font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
<i className="w-4 h-4 text-gray-500" data-lucide="filter"></i>
                        Filters
                    </button>
</div>
</div>

<div className="grid grid-cols-3 gap-6 mb-10">

<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
<p className="text-[13px] font-medium text-gray-900 mb-4">New subscriptions</p>
<div className="flex items-end justify-between">
<div>
<div className="flex items-center gap-3 mb-1">
<span className="text-2xl font-bold text-gray-900">22</span>
<span className="flex items-center text-[11px] font-medium text-green-600 bg-green-50 px-1.5 py-0.5 rounded">
<i className="w-3 h-3 mr-0.5" data-lucide="arrow-up"></i> 15%
                                </span>
</div>
<p className="text-[11px] text-gray-400">compared to last week</p>
</div>
<div className="w-24 h-12">
<svg className="w-full h-full overflow-visible" viewbox="0 0 100 50">
<defs>
<lineargradient id="grad1" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#8b5cf6', stopOpacity: '0.2'}}></stop>
<stop offset="100%" style={{stopColor: '#8b5cf6', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
<path d="M0 40 Q 20 40, 40 30 T 100 5" fill="none" stroke="#A855F7" strokeLinecap="round" strokeWidth="2.5"></path>
<path d="M0 40 Q 20 40, 40 30 T 100 5 V 50 H 0 Z" fill="url(#grad1)" stroke="none"></path>
</svg>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
<p className="text-[13px] font-medium text-gray-900 mb-4">New orders</p>
<div className="flex items-end justify-between">
<div>
<div className="flex items-center gap-3 mb-1">
<span className="text-2xl font-bold text-gray-900">320</span>
<span className="flex items-center text-[11px] font-medium text-orange-600 bg-orange-50 px-1.5 py-0.5 rounded">
<i className="w-3 h-3 mr-0.5" data-lucide="arrow-down"></i> 4%
                                </span>
</div>
<p className="text-[11px] text-gray-400">compared to last week</p>
</div>
<div className="w-24 h-12">
<svg className="w-full h-full overflow-visible" viewbox="0 0 100 50">
<defs>
<lineargradient id="grad2" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#F97316', stopOpacity: '0.2'}}></stop>
<stop offset="100%" style={{stopColor: '#F97316', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
<path d="M0 45 L 30 35 L 50 40 L 80 10 L 100 15" fill="none" stroke="#F97316" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
<path d="M0 45 L 30 35 L 50 40 L 80 10 L 100 15 V 50 H 0 Z" fill="url(#grad2)" stroke="none"></path>
</svg>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
<p className="text-[13px] font-medium text-gray-900 mb-4">Avg. order revenue</p>
<div className="flex items-end justify-between">
<div>
<div className="flex items-center gap-3 mb-1">
<span className="text-2xl font-bold text-gray-900">$1,080</span>
<span className="flex items-center text-[11px] font-medium text-green-600 bg-green-50 px-1.5 py-0.5 rounded">
<i className="w-3 h-3 mr-0.5" data-lucide="arrow-up"></i> 8%
                                </span>
</div>
<p className="text-[11px] text-gray-400">compared to last week</p>
</div>
<div className="w-24 h-12">
<svg className="w-full h-full overflow-visible" viewbox="0 0 100 50">
<defs>
<lineargradient id="grad3" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#8b5cf6', stopOpacity: '0.2'}}></stop>
<stop offset="100%" style={{stopColor: '#8b5cf6', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
<path d="M0 45 Q 30 45, 60 25 T 100 10" fill="none" stroke="#A855F7" strokeLinecap="round" strokeWidth="2.5"></path>
<path d="M0 45 Q 30 45, 60 25 T 100 10 V 50 H 0 Z" fill="url(#grad3)" stroke="none"></path>
</svg>
</div>
</div>
</div>
</div>

<div className="flex items-center justify-between mb-5">
<h2 className="text-xl font-semibold text-gray-900 tracking-tight">Recent campaigns</h2>
<a className="text-[13px] font-medium text-gray-900 underline decoration-gray-300 underline-offset-2" href="#">View All</a>
</div>

<div className="grid grid-cols-3 gap-6">

<div className="flex flex-col gap-4">
<div className="flex items-center gap-2 mb-1">
<span className="text-[13px] font-medium text-gray-500">Draft</span>
<span className="bg-gray-200 text-gray-600 text-[10px] font-bold px-1.5 py-0.5 rounded">2</span>
</div>

<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow cursor-pointer">
<div className="flex justify-between items-start mb-3">
<div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
<svg className="w-5 h-5 text-[#1877F2]" fill="currentColor" viewbox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
</div>
<div className="flex -space-x-2">
<img alt="" className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/150?u=1"/>
<img alt="" className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/150?u=2"/>
<img alt="" className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/150?u=3"/>
</div>
</div>
<h3 className="text-[14px] font-semibold text-gray-900 leading-snug mb-2">10 Simple steps to revolutionise workflows with our product</h3>
<p className="text-[12px] text-gray-400 mb-4">Start: <span className="text-gray-300">Not Started</span></p>
<div className="border-t border-gray-100 pt-3">
<p className="text-[11px] text-gray-400">Last updated: Apr 10, 2023</p>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow cursor-pointer">
<div className="flex justify-between items-start mb-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-[1px]">
<div className="bg-white w-full h-full rounded-full flex items-center justify-center">
<svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</div>
</div>
<div className="flex -space-x-2">
<img alt="" className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/150?u=4"/>
<img alt="" className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/150?u=5"/>
</div>
</div>
<h3 className="text-[14px] font-semibold text-gray-900 leading-snug mb-2">Beyond Boundaries: Explore our new product</h3>
<p className="text-[12px] text-gray-400 mb-4">Start: <span className="text-gray-300">Not Started</span></p>
<div className="border-t border-gray-100 pt-3">
<p className="text-[11px] text-gray-400">Last updated: May 8, 2023</p>
</div>
</div>
<button className="flex items-center gap-2 text-[13px] font-medium text-gray-500 hover:text-gray-800 px-2">
<i className="w-4 h-4" data-lucide="plus"></i> Add campaign
                    </button>
</div>

<div className="flex flex-col gap-4">
<div className="flex items-center gap-2 mb-1">
<span className="text-[13px] font-medium text-gray-500">In Progress</span>
<span className="bg-gray-200 text-gray-600 text-[10px] font-bold px-1.5 py-0.5 rounded">2</span>
</div>

<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow cursor-pointer">
<div className="flex justify-between items-start mb-3">
<div className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center">
<svg className="w-5 h-5" viewbox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path></svg>
</div>
<div className="flex -space-x-2">
<img alt="" className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/150?u=6"/>
</div>
</div>
<h3 className="text-[14px] font-semibold text-gray-900 leading-snug mb-2">Boost your performance: start using our amazing product</h3>
<div className="flex justify-between text-[12px] text-gray-400 mb-3">
<span>Start: Jun 1, 2023</span>
<span className="text-gray-900">Ends: Aug 1, 2023</span>
</div>

<div className="w-full bg-gray-100 rounded-full h-1.5 mb-4">
<div className="bg-green-500 h-1.5 rounded-full" style={{width: '65%'}}></div>
</div>
<div className="border-t border-gray-100 pt-3">
<p className="text-[11px] text-gray-400">Last updated: July 10, 2023</p>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow cursor-pointer">
<div className="flex justify-between items-start mb-3">
<div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
<svg className="w-5 h-5 text-[#1877F2]" fill="currentColor" viewbox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
</div>
<div className="flex -space-x-2">
<img alt="" className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/150?u=7"/>
<img alt="" className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/150?u=8"/>
</div>
</div>
<h3 className="text-[14px] font-semibold text-gray-900 leading-snug mb-2">Skyrocket your productivity: our product is revealed</h3>
<div className="flex justify-between text-[12px] text-gray-400 mb-3">
<span>Start: Jul 1, 2023</span>
<span className="text-gray-900">Ends: Sep 30, 2023</span>
</div>

<div className="w-full bg-gray-100 rounded-full h-1.5 mb-4">
<div className="bg-blue-500 h-1.5 rounded-full" style={{width: '35%'}}></div>
</div>
<div className="border-t border-gray-100 pt-3">
<p className="text-[11px] text-gray-400">Last updated: June 23, 2023</p>
</div>
</div>
<button className="flex items-center gap-2 text-[13px] font-medium text-gray-500 hover:text-gray-800 px-2">
<i className="w-4 h-4" data-lucide="plus"></i> Add campaign
                    </button>
</div>

<div className="flex flex-col gap-4">
<div className="flex items-center gap-2 mb-1">
<span className="text-[13px] font-medium text-gray-500">Archived</span>
<span className="bg-gray-200 text-gray-600 text-[10px] font-bold px-1.5 py-0.5 rounded">1</span>
</div>

<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow cursor-pointer">
<div className="flex justify-between items-start mb-3">
<div className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center">
<svg className="w-5 h-5" viewbox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path></svg>
</div>
<div className="flex -space-x-2">
<img alt="" className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/150?u=9"/>
<img alt="" className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/150?u=10"/>
<img alt="" className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/150?u=11"/>
<div className="w-6 h-6 rounded-full bg-gray-900 border-2 border-white text-white text-[9px] flex items-center justify-center font-bold">4</div>
</div>
</div>
<h3 className="text-[14px] font-semibold text-gray-900 leading-snug mb-2">The power of our product: A new era in SaaS</h3>
<p className="text-[12px] text-gray-900 mb-4">Ended: Jun 11, 2023</p>

<div className="w-full h-1 bg-gray-100 rounded-full mb-4"></div>
<div className="border-t border-gray-100 pt-3">
<p className="text-[11px] text-gray-400">Last updated: Apr 10, 2023</p>
</div>
</div>
<button className="flex items-center gap-2 text-[13px] font-medium text-gray-500 hover:text-gray-800 px-2">
<i className="w-4 h-4" data-lucide="plus"></i> Add campaign
                    </button>
</div>
</div>
</div>
</main>

<aside className="w-[280px] bg-white border-l border-gray-200 flex flex-col flex-shrink-0 h-full overflow-y-auto">
<div className="p-6">

<h3 className="text-xs font-normal text-gray-400 mb-4">Recent Documents</h3>
<div className="space-y-4 mb-8">

<div className="flex gap-3 group cursor-pointer">
<div className="w-8 h-8 rounded bg-gray-100 flex-shrink-0 flex items-center justify-center">
<span className="text-[8px] text-gray-400 font-mono">Some<br/>text</span>
</div>
<div className="flex-1 min-w-0">
<p className="text-[13px] font-medium text-gray-900 truncate group-hover:text-purple-600 transition-colors">Summer Campaign</p>
<p className="text-[11px] text-gray-400">Updated 2 minutes ago</p>
</div>
</div>

<div className="flex gap-3 group cursor-pointer">
<img alt="" className="w-8 h-8 rounded object-cover flex-shrink-0" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div className="flex-1 min-w-0">
<p className="text-[13px] font-medium text-gray-900 truncate group-hover:text-purple-600 transition-colors">Inspiration Notes</p>
<p className="text-[11px] text-gray-400">Updated 3 hours ago</p>
</div>
</div>

<div className="flex gap-3 group cursor-pointer">
<img alt="" className="w-8 h-8 rounded object-cover flex-shrink-0" src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div className="flex-1 min-w-0">
<p className="text-[13px] font-medium text-gray-900 truncate group-hover:text-purple-600 transition-colors">Campaign Moodboard</p>
<p className="text-[11px] text-gray-400">Updated 5 hours ago</p>
</div>
</div>

<div className="flex gap-3 group cursor-pointer">
<img alt="" className="w-8 h-8 rounded object-cover flex-shrink-0" src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div className="flex-1 min-w-0">
<p className="text-[13px] font-medium text-gray-900 truncate group-hover:text-purple-600 transition-colors">Circular Inspiration</p>
<p className="text-[11px] text-gray-400">Updated 8 hours ago</p>
</div>
</div>

<div className="flex gap-3 group cursor-pointer">
<img alt="" className="w-8 h-8 rounded object-cover flex-shrink-0" src="https://images.unsplash.com/photo-1549480017-d76466a4b7e8?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div className="flex-1 min-w-0">
<p className="text-[13px] font-medium text-gray-900 truncate group-hover:text-purple-600 transition-colors">Luxury Campaign Steps</p>
<p className="text-[11px] text-gray-400">Updated 8 hours ago</p>
</div>
</div>

<div className="flex gap-3 group cursor-pointer">
<div className="w-8 h-8 rounded border border-gray-200 bg-white flex-shrink-0"></div>
<div className="flex-1 min-w-0">
<p className="text-[13px] font-medium text-gray-900 truncate group-hover:text-purple-600 transition-colors">Untitled</p>
<p className="text-[11px] text-gray-400">Updated 2 days ago</p>
</div>
</div>

<div className="flex gap-3 group cursor-pointer">
<div className="w-8 h-8 rounded border border-gray-200 bg-white flex-shrink-0"></div>
<div className="flex-1 min-w-0">
<p className="text-[13px] font-medium text-gray-900 truncate group-hover:text-purple-600 transition-colors">Test Note</p>
<p className="text-[11px] text-gray-400">Updated 2 days ago</p>
</div>
</div>

<div className="flex gap-3 group cursor-pointer">
<img alt="" className="w-8 h-8 rounded object-cover flex-shrink-0" src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div className="flex-1 min-w-0">
<p className="text-[13px] font-medium text-gray-900 truncate group-hover:text-purple-600 transition-colors">Concepts</p>
<p className="text-[11px] text-gray-400">Updated 2 days ago</p>
</div>
</div>
</div>

<h3 className="text-xs font-normal text-gray-400 mb-4">Team Mates</h3>
<div className="space-y-4">
<div className="flex items-center gap-3">
<div className="relative">
<img className="w-9 h-9 rounded-full object-cover" src="https://i.pravatar.cc/150?u=ethan"/>
<div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></div>
</div>
<div>
<p className="text-[13px] font-medium text-gray-900">Ethan Anderson</p>
<p className="text-[11px] text-gray-500">Product Manager</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="relative">
<div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-xs font-bold">S</div>
<div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></div>
</div>
<div>
<p className="text-[13px] font-medium text-gray-900">Simone Daniels</p>
<p className="text-[11px] text-gray-500">Marketing Manager</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="relative">
<img className="w-9 h-9 rounded-full object-cover" src="https://i.pravatar.cc/150?u=noah"/>
<div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-gray-300 border-2 border-white rounded-full"></div>
</div>
<div>
<p className="text-[13px] font-medium text-gray-900">Noah Martinez</p>
<p className="text-[11px] text-gray-500">CRM Manager</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="relative">
<img className="w-9 h-9 rounded-full object-cover" src="https://i.pravatar.cc/150?u=olivia"/>
<div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-orange-400 border-2 border-white rounded-full"></div>
</div>
<div>
<p className="text-[13px] font-medium text-gray-900">Olivia Mitchell</p>
<p className="text-[11px] text-gray-500">Designer</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="relative">
<img className="w-9 h-9 rounded-full object-cover" src="https://i.pravatar.cc/150?u=liam"/>
<div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-gray-300 border-2 border-white rounded-full"></div>
</div>
<div>
<p className="text-[13px] font-medium text-gray-900">Liam Johnson</p>
<p className="text-[11px] text-gray-500">Designer</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="relative">
<img className="w-9 h-9 rounded-full object-cover" src="https://i.pravatar.cc/150?u=ava"/>
<div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></div>
</div>
<div>
<p className="text-[13px] font-medium text-gray-900">Ava Williams</p>
<p className="text-[11px] text-gray-500">Designer</p>
</div>
</div>
</div>
</div>
</aside>


    </>
  );
}
