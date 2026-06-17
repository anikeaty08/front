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
      

<aside className="w-72 bg-[#0b1d3b] flex flex-col border-r border-white/5 shrink-0 h-full text-white">

<div className="p-6 pb-8">
<h1 className="text-xl font-semibold tracking-tight">
<span className="text-red-500">eBa</span>Dollar
            </h1>
</div>

<nav className="flex-1 px-3 space-y-1 overflow-y-auto">
<a className="flex items-center gap-3 px-3 py-3 text-gray-300 hover:bg-white/5 hover:text-white rounded-md transition-colors" href="#">
<svg className="lucide lucide-home w-5 h-5" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="font-medium">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-3 text-gray-300 hover:bg-white/5 hover:text-white rounded-md transition-colors" href="#">
<svg className="lucide lucide-store w-5 h-5" data-lucide="store" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"></path><path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"></path><path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"></path></svg>
<span className="font-medium">Marketplace</span>
</a>
<a className="flex items-center gap-3 px-3 py-3 bg-red-600 rounded-md text-white transition-colors" href="#">
<svg className="lucide lucide-list w-5 h-5" data-lucide="list" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 5h.01"></path><path d="M3 12h.01"></path><path d="M3 19h.01"></path><path d="M8 5h13"></path><path d="M8 12h13"></path><path d="M8 19h13"></path></svg>
<span className="font-medium">My Listings</span>
</a>
<a className="flex items-center gap-3 px-3 py-3 text-gray-300 hover:bg-white/5 hover:text-white rounded-md transition-colors" href="#">
<svg className="lucide lucide-arrow-left-right w-5 h-5" data-lucide="arrow-left-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 3 4 7l4 4"></path><path d="M4 7h16"></path><path d="m16 21 4-4-4-4"></path><path d="M20 17H4"></path></svg>
<span className="font-medium">My Transactions</span>
</a>
<a className="flex items-center gap-3 px-3 py-3 text-gray-300 hover:bg-white/5 hover:text-white rounded-md transition-colors" href="#">
<svg className="lucide lucide-gift w-5 h-5" data-lucide="gift" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" width="18" x="3" y="8"></rect><path d="M12 8v13"></path><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path></svg>
<span className="font-medium">My Rewards</span>
</a>
<a className="flex items-center gap-3 px-3 py-3 text-gray-300 hover:bg-white/5 hover:text-white rounded-md transition-colors" href="#">
<svg className="lucide lucide-user w-5 h-5" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span className="font-medium">My Account</span>
</a>
</nav>

<div className="p-4 border-t border-white/10 bg-[#091830]">
<div className="mb-4">
<p className="text-gray-400 text-sm mb-2">Currency Converter</p>
<div className="flex rounded-md shadow-sm mb-2">
<input className="block w-full rounded-l-md border-0 py-1.5 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 text-sm sm:leading-6 bg-white" type="text" value="50"/>
<span className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-3 text-gray-500 text-sm bg-gray-50">eBa$</span>
</div>
<div className="relative mb-2">
<select className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-red-600 sm:text-sm sm:leading-6 bg-white appearance-none">
<option>USD</option>
<option>EUR</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
<svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div className="flex justify-between items-center text-sm text-gray-300 mt-2">
<span>eBa$50 = 72.50 USD</span>
<svg className="lucide lucide-refresh-cw w-3 h-3 text-red-500" data-lucide="refresh-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
</div>
</div>
<div className="border-t border-white/10 pt-4 mb-2">
<a className="flex items-center gap-2 text-gray-300 hover:text-white mb-4" href="#">
<svg className="lucide lucide-inbox w-4 h-4" data-lucide="inbox" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
<span className="text-sm">Inbox 3</span>
</a>
<div className="flex items-center gap-3">
<img alt="User" className="h-9 w-9 rounded-full ring-2 ring-white/20" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-white truncate">Alex Johnson</p>
</div>
<svg className="lucide lucide-chevron-up w-4 h-4 text-gray-400" data-lucide="chevron-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 15-6-6-6 6"></path></svg>
</div>
</div>
</div>
</aside>

<main className="flex-1 overflow-y-auto bg-[#0f2952] relative">
<div className="max-w-[1600px] mx-auto px-8 py-8 pb-20">

<div className="flex justify-between items-center mb-8">
<h1 className="text-3xl font-bold text-white tracking-tight">My Listings</h1>
<button className="hover:bg-red-700 flex transition-colors font-medium text-white bg-red-600 rounded-md pt-2 pr-5 pb-2 pl-5 shadow-sm gap-x-2 gap-y-2 items-center">
<svg className="lucide lucide-plus w-5 h-5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg> Add New Listing
                </button>
</div>

<div className="flex gap-1 mb-6">
<button className="bg-red-600 text-white px-6 py-2.5 rounded-l-md font-medium text-sm">All Listings</button>
<button className="bg-[#1e3a5f] text-gray-300 hover:text-white px-6 py-2.5 rounded-r-md font-medium text-sm border border-white/10 border-l-0">Sold &amp; Action Needed</button>
</div>

<div className="flex gap-4 mb-6">
<div className="relative flex-1">
<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
<svg className="lucide lucide-search w-5 h-5 text-gray-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<input className="block w-full rounded-md border-0 py-2.5 pl-10 text-gray-900 ring-0 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Search by item name, category, or tag" type="text"/>
</div>
<button className="bg-white text-slate-700 px-4 py-2.5 rounded-md font-medium text-sm flex items-center gap-2 shadow-sm">
<svg className="lucide lucide-filter w-4 h-4" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg> Filters
                </button>
<button className="bg-white text-slate-700 px-4 py-2.5 rounded-md font-medium text-sm flex items-center gap-2 shadow-sm">
<svg className="lucide lucide-arrow-up-down w-4 h-4" data-lucide="arrow-up-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 16-4 4-4-4"></path><path d="M17 20V4"></path><path d="m3 8 4-4 4 4"></path><path d="M7 4v16"></path></svg> Sort
                </button>
</div>

<div className="grid grid-cols-5 gap-4 mb-8">
<div>
<label className="block text-sm font-medium text-gray-300 mb-1.5">Status</label>
<div className="relative">
<select className="block w-full rounded-md border-0 py-2 pl-3 pr-10 text-gray-900 ring-0 focus:ring-0 sm:text-sm bg-white appearance-none">
<option>All Statuses</option>
<option>Active</option>
<option>Sold</option>
<option>Expired</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
<svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-300 mb-1.5">Type</label>
<div className="relative">
<select className="block w-full rounded-md border-0 py-2 pl-3 pr-10 text-gray-900 ring-0 focus:ring-0 sm:text-sm bg-white appearance-none">
<option>All</option>
<option>Item</option>
<option>Service</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
<svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-300 mb-1.5">Category</label>
<div className="relative">
<select className="block w-full rounded-md border-0 py-2 pl-3 pr-10 text-gray-900 ring-0 focus:ring-0 sm:text-sm bg-white appearance-none">
<option>All Categories</option>
<option>Electronics</option>
<option>Home</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
<svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</div>
<div className="">
<label className="block text-sm font-medium text-gray-300 mb-1.5">Date Added</label>
<div className="relative">
<select className="block w-full rounded-md border-0 py-2 pl-3 pr-10 text-gray-900 ring-0 focus:ring-0 sm:text-sm bg-white appearance-none">
<option>Any Time</option>
<option>Last 30 Days</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
<svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-300 mb-1.5">Price Range (eBa$)</label>
<div className="flex gap-2">
<input className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-0 focus:ring-0 sm:text-sm bg-white" placeholder="Min" type="text"/>
<input className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-0 focus:ring-0 sm:text-sm bg-white" placeholder="Max" type="text"/>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">

<div className="bg-white rounded-lg overflow-hidden flex flex-col shadow-sm group">
<div className="relative h-48 bg-gray-100">
<img alt="Headphones" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-3 left-3 flex gap-2">
<span className="bg-blue-600/90 text-white text-[10px] font-semibold px-2 py-1 rounded shadow-sm flex items-center gap-1"><svg className="lucide lucide-message-circle w-3 h-3" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg> 2 Offers</span>
<span className="bg-white/90 text-gray-700 text-[10px] font-semibold px-2 py-1 rounded shadow-sm">Item</span>
</div>
<div className="absolute top-3 right-3">
<span className="bg-green-600 text-white text-[10px] font-semibold px-2 py-1 rounded shadow-sm">Active</span>
</div>
</div>
<div className="p-5 flex-1 flex flex-col">
<h3 className="text-lg font-semibold text-slate-900 mb-1 group-hover:text-red-600 transition-colors">Wireless Headphones</h3>
<p className="text-red-600 font-bold text-lg mb-2">eBa$ 129.99</p>
<p className="text-sm text-gray-500 mb-4 line-clamp-2">Noise-cancelling wireless headphones with 30h battery life and premium sound quality.</p>
<div className="flex flex-wrap gap-2 mb-4">
<span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">Electronics</span>
<span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded">Quantity: 3 available | 1 sold</span>
</div>
<div className="flex items-center gap-4 text-xs text-gray-400 mb-5 mt-auto">
<span className="flex items-center gap-1"><svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg> 15 views</span>
<span className="flex items-center gap-1"><svg className="lucide lucide-message-square w-3.5 h-3.5" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg> 3 inquiries</span>
<span className="ml-auto">Added Apr 10, '25</span>
</div>
<div className="grid grid-cols-3 gap-2 mb-3">
<button className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium py-1.5 rounded flex items-center justify-center gap-1 transition-colors">
<svg className="lucide lucide-edit-2 w-3 h-3" data-lucide="edit-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path></svg> Edit
                            </button>
<button className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium py-1.5 rounded flex items-center justify-center gap-1 transition-colors">
<svg className="lucide lucide-trash-2 w-3 h-3" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg> Delete
                            </button>
<button className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium py-1.5 rounded flex items-center justify-center gap-1 transition-colors">
<svg className="lucide lucide-eye w-3 h-3" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg> View
                            </button>
</div>
<button className="w-full bg-red-600 hover:bg-red-700 text-white text-sm font-medium py-2 rounded flex items-center justify-center gap-2 transition-colors shadow-sm">
<svg className="lucide lucide-megaphone w-4 h-4" data-lucide="megaphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path><path d="M8 6v8"></path></svg> Promote
                        </button>
</div>
</div>

<div className="bg-white rounded-lg overflow-hidden flex flex-col shadow-sm group">
<div className="relative h-48 bg-gray-100">
<img alt="Bike" className="w-full h-full object-cover grayscale-[20%]" src="https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-3 left-3 flex gap-2">
<span className="bg-white/90 text-gray-700 text-[10px] font-semibold px-2 py-1 rounded shadow-sm">Item</span>
</div>
<div className="absolute top-3 right-3">
<span className="bg-red-500 text-white text-[10px] font-semibold px-2 py-1 rounded shadow-sm">Expired 2 days ago</span>
</div>
</div>
<div className="p-5 flex-1 flex flex-col">
<h3 className="text-lg font-semibold text-slate-900 mb-1 group-hover:text-red-600 transition-colors">Mountain Bike</h3>
<p className="text-red-600 font-bold text-lg mb-2">eBa$ 420.00</p>
<p className="text-sm text-gray-500 mb-4 line-clamp-2">21-speed mountain bike, great condition, recently serviced. Perfect for trails.</p>
<div className="flex flex-wrap gap-2 mb-4">
<span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">Sports</span>
<span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">Quantity: 1 available | 0 sold</span>
</div>
<div className="flex items-center gap-4 text-xs text-gray-400 mb-5 mt-auto">
<span className="flex items-center gap-1"><svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg> 12 views</span>
<span className="flex items-center gap-1"><svg className="lucide lucide-message-square w-3.5 h-3.5" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg> 2 inquiries</span>
<span className="ml-auto">Added Feb 20, '25</span>
</div>
<div className="grid grid-cols-3 gap-2 mb-3">
<button className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium py-1.5 rounded flex items-center justify-center gap-1 transition-colors">
<svg className="lucide lucide-edit-2 w-3 h-3" data-lucide="edit-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path></svg> Edit
                            </button>
<button className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium py-1.5 rounded flex items-center justify-center gap-1 transition-colors">
<svg className="lucide lucide-trash-2 w-3 h-3" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg> Delete
                            </button>
<button className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium py-1.5 rounded flex items-center justify-center gap-1 transition-colors">
<svg className="lucide lucide-eye w-3 h-3" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg> View
                            </button>
</div>
<button className="w-full bg-slate-400 hover:bg-slate-500 text-white text-sm font-medium py-2 rounded flex items-center justify-center gap-2 transition-colors shadow-sm">
<svg className="lucide lucide-refresh-cw w-4 h-4" data-lucide="refresh-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg> Reactivate
                        </button>
</div>
</div>

<div className="bg-white rounded-lg overflow-hidden flex flex-col shadow-sm group">
<div className="relative h-48 bg-gray-100">
<img alt="Design" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1626785774573-4b799314346d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-3 left-3 flex gap-2">
<span className="bg-blue-100 text-blue-700 text-[10px] font-semibold px-2 py-1 rounded shadow-sm">Service</span>
</div>
<div className="absolute top-3 right-3">
<span className="bg-amber-400 text-white text-[10px] font-semibold px-2 py-1 rounded shadow-sm flex items-center gap-1"><svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> Sponsored</span>
</div>
</div>
<div className="p-5 flex-1 flex flex-col">
<h3 className="text-lg font-semibold text-slate-900 mb-1 group-hover:text-red-600 transition-colors">Graphic Design Services</h3>
<p className="text-red-600 font-bold text-lg mb-2">eBa$ 75.00/hr</p>
<p className="text-sm text-gray-500 mb-4 line-clamp-2">Professional graphic design services for logos, branding, marketing materials and more.</p>
<div className="flex flex-wrap gap-2 mb-4">
<span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">Services</span>
</div>
<div className="flex items-center gap-4 text-xs text-gray-400 mb-5 mt-auto">
<span className="flex items-center gap-1"><svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg> 35 views</span>
<span className="flex items-center gap-1"><svg className="lucide lucide-message-square w-3.5 h-3.5" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg> 8 inquiries</span>
<span className="ml-auto">Added Apr 5, '25</span>
</div>
<div className="grid grid-cols-3 gap-2 mt-auto">
<button className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium py-1.5 rounded flex items-center justify-center gap-1 transition-colors">
<svg className="lucide lucide-edit-2 w-3 h-3" data-lucide="edit-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path></svg> Edit
                            </button>
<button className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium py-1.5 rounded flex items-center justify-center gap-1 transition-colors">
<svg className="lucide lucide-trash-2 w-3 h-3" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg> Delete
                            </button>
<button className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium py-1.5 rounded flex items-center justify-center gap-1 transition-colors">
<svg className="lucide lucide-eye w-3 h-3" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg> View
                            </button>
</div>
</div>
</div>

<div className="bg-white rounded-lg overflow-hidden flex flex-col shadow-sm group">
<div className="relative h-48 bg-gray-100 opacity-90">
<img alt="Desk" className="w-full h-full object-cover grayscale-[10%]" src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-3 left-3 flex gap-2">
<span className="bg-white/90 text-gray-700 text-[10px] font-semibold px-2 py-1 rounded shadow-sm">Item</span>
</div>
<div className="absolute top-3 right-3">
<span className="bg-slate-700 text-white text-[10px] font-semibold px-2 py-1 rounded shadow-sm">Draft</span>
</div>
</div>
<div className="p-5 flex-1 flex flex-col">
<h3 className="text-lg font-semibold text-slate-900 mb-1 group-hover:text-red-600 transition-colors">Antique Wooden Desk</h3>
<p className="text-red-600 font-bold text-lg mb-2">eBa$ 350.00</p>
<p className="text-sm text-gray-500 mb-4 line-clamp-2">Early 1900s oak writing desk with original hardware. Needs some restoration work.</p>
<div className="flex flex-wrap gap-2 mb-4">
<span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">Furniture</span>
<span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">Quantity: 1 available | 0 sold</span>
</div>
<div className="flex items-center gap-4 text-xs text-gray-400 mb-5 mt-auto">
<span>Not published yet</span>
<span className="ml-auto">Saved Apr 15, '25</span>
</div>
<div className="grid grid-cols-2 gap-2 mb-3">
<button className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium py-1.5 rounded flex items-center justify-center gap-1 transition-colors">
<svg className="lucide lucide-edit-2 w-3 h-3" data-lucide="edit-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path></svg> Edit
                            </button>
<button className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium py-1.5 rounded flex items-center justify-center gap-1 transition-colors">
<svg className="lucide lucide-trash-2 w-3 h-3" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg> Delete
                            </button>
</div>
<button className="w-full bg-red-600 hover:bg-red-700 text-white text-sm font-medium py-2 rounded flex items-center justify-center gap-2 transition-colors shadow-sm">
<svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg> Publish
                        </button>
</div>
</div>

<div className="bg-white rounded-lg overflow-hidden flex flex-col shadow-sm group">
<div className="relative h-48 bg-gray-100">
<img alt="Design" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1626785774573-4b799314346d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-3 left-3 flex gap-2">
<span className="bg-blue-100 text-blue-700 text-[10px] font-semibold px-2 py-1 rounded shadow-sm">Service</span>
</div>
<div className="absolute top-3 right-3">
<span className="bg-amber-400 text-white text-[10px] font-semibold px-2 py-1 rounded shadow-sm flex items-center gap-1"><svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> Sponsored</span>
</div>
</div>
<div className="p-5 flex-1 flex flex-col">
<h3 className="text-lg font-semibold text-slate-900 mb-1 group-hover:text-red-600 transition-colors">Graphic Design Services</h3>
<p className="text-red-600 font-bold text-lg mb-2">eBa$ 75.00/hr</p>
<p className="text-sm text-gray-500 mb-4 line-clamp-2">Professional graphic design services for logos, branding, etc.</p>
<div className="flex flex-wrap gap-2 mb-4">
<span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">Services</span>
<span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">Quantity: 1 available | 0 sold</span>
</div>
<div className="flex items-center gap-4 text-xs text-gray-400 mb-5 mt-auto">
<span className="flex items-center gap-1"><svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg> 35 views</span>
<span className="flex items-center gap-1"><svg className="lucide lucide-message-square w-3.5 h-3.5" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg> 8 inquiries</span>
<span className="ml-auto">Added Apr 5, '25</span>
</div>
<div className="grid grid-cols-3 gap-2 mt-auto">
<button className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium py-1.5 rounded flex items-center justify-center gap-1 transition-colors">
<svg className="lucide lucide-edit-2 w-3 h-3" data-lucide="edit-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path></svg> Edit
                            </button>
<button className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium py-1.5 rounded flex items-center justify-center gap-1 transition-colors">
<svg className="lucide lucide-trash-2 w-3 h-3" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg> Delete
                            </button>
<button className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium py-1.5 rounded flex items-center justify-center gap-1 transition-colors">
<svg className="lucide lucide-eye w-3 h-3" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg> View
                            </button>
</div>
</div>
</div>

<div className="bg-white rounded-lg overflow-hidden flex flex-col shadow-sm group">
<div className="relative h-48 bg-gray-100 opacity-90">
<img alt="Desk" className="w-full h-full object-cover grayscale-[10%]" src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-3 left-3 flex gap-2">
<span className="bg-white/90 text-gray-700 text-[10px] font-semibold px-2 py-1 rounded shadow-sm">Item</span>
</div>
<div className="absolute top-3 right-3">
<span className="bg-slate-700 text-white text-[10px] font-semibold px-2 py-1 rounded shadow-sm">Draft</span>
</div>
</div>
<div className="p-5 flex-1 flex flex-col">
<h3 className="text-lg font-semibold text-slate-900 mb-1 group-hover:text-red-600 transition-colors">Antique Wooden Desk</h3>
<p className="text-red-600 font-bold text-lg mb-2">eBa$ 350.00</p>
<p className="text-sm text-gray-500 mb-4 line-clamp-2">Early 1900s oak writing desk with original hardware.</p>
<div className="flex flex-wrap gap-2 mb-4">
<span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">Furniture</span>
<span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">Quantity: 1 available | 0 sold</span>
</div>
<div className="flex items-center gap-4 text-xs text-gray-400 mb-5 mt-auto">
<span>Not published yet</span>
<span className="ml-auto">Saved Apr 15, '25</span>
</div>
<div className="grid grid-cols-2 gap-2 mb-3">
<button className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium py-1.5 rounded flex items-center justify-center gap-1 transition-colors">
<svg className="lucide lucide-edit-2 w-3 h-3" data-lucide="edit-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path></svg> Edit
                            </button>
<button className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium py-1.5 rounded flex items-center justify-center gap-1 transition-colors">
<svg className="lucide lucide-trash-2 w-3 h-3" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg> Delete
                            </button>
</div>
<button className="w-full bg-red-600 hover:bg-red-700 text-white text-sm font-medium py-2 rounded flex items-center justify-center gap-2 transition-colors shadow-sm">
<svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg> Publish
                        </button>
</div>
</div>
</div>

<div className="flex justify-between items-center text-sm">
<p className="text-gray-400">Showing <span className="text-white font-medium">6</span> of <span className="text-white font-medium">24</span> listings</p>
<div className="flex items-center gap-2">
<button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white rounded hover:bg-white/5 transition-colors">
<svg className="lucide lucide-chevron-left w-4 h-4" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="w-8 h-8 flex items-center justify-center bg-red-600 text-white rounded font-medium">1</button>
<button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 rounded font-medium transition-colors">2</button>
<button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 rounded font-medium transition-colors">3</button>
<button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 rounded font-medium transition-colors">4</button>
<button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 rounded font-medium transition-colors">5</button>
<button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white rounded hover:bg-white/5 transition-colors">
<svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>
</div>
</main>


    </>
  );
}
