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
      

<div className="bg-slate-900 text-slate-300">
<div className="max-w-[1500px] mx-auto px-4 h-9 flex items-center justify-between text-xs font-medium">
<div className="flex items-center gap-4">
<span className="text-white">US &amp; Canada Shipping</span>
<span className="hidden sm:inline">Bulk Quotes Available</span>
</div>
<div className="flex items-center gap-4">
<a className="hover:text-white transition-colors" href="#">Track Order</a>
<a className="hover:text-white transition-colors" href="#">Support</a>
<a className="hover:text-white transition-colors" href="#">Business Account</a>
</div>
</div>
</div>

<header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
<div className="max-w-[1500px] mx-auto px-4 py-3 flex items-center gap-4 lg:gap-8">

<a className="flex items-center gap-2 shrink-0" href="#">
<div className="w-8 h-8 bg-slate-900 rounded flex items-center justify-center text-white">
<svg className="lucide lucide-scan-barcode w-5 h-5" data-lucide="scan-barcode" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><path d="M8 7v10"></path><path d="M12 7v10"></path><path d="M17 7v10"></path></svg>
</div>
<span className="hidden sm:block text-lg font-bold text-slate-900 tracking-tight">Gemini</span>
</a>

<button className="hidden lg:flex gap-2 hover:bg-slate-100 transition-colors text-sm font-semibold text-slate-700 rounded-lg pt-2 pr-3 pb-2 pl-3 gap-x-2 gap-y-2 items-center">
<svg className="lucide lucide-menu w-4 h-4" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
                Departments
            </button>

<div className="flex-1 max-w-3xl">
<div className="flex w-full">
<div className="relative w-full">
<input className="w-full pl-4 pr-12 py-2.5 bg-white border border-slate-300 rounded-l-lg rounded-r-none text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent focus:z-10 placeholder:text-slate-500" placeholder="Search by SKU, product name, or category..." type="text"/>
<button className="absolute right-0 top-0 h-full px-3 bg-slate-100 hover:bg-slate-200 border-l border-slate-300 rounded-r-none text-slate-600 transition-colors">
<svg className="lucide lucide-scan w-4 h-4" data-lucide="scan" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path></svg>
</button>
</div>
<button className="bg-slate-900 hover:bg-slate-800 text-white px-5 rounded-r-lg font-medium text-sm transition-colors">
<svg className="lucide lucide-search w-4 h-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
</div>
</div>

<div className="flex items-center gap-6 shrink-0">
<div className="hidden md:flex flex-col text-right leading-tight">
<span className="text-[10px] text-slate-500 font-medium">Hello, Sign in</span>
<span className="text-sm font-bold text-slate-900">Account &amp; Lists</span>
</div>
<a className="flex items-end gap-1 relative" href="#">
<svg className="lucide lucide-shopping-cart w-6 h-6 text-slate-900" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
<span className="font-bold text-sm mb-0.5">Cart</span>
<span className="absolute -top-1.5 -right-1 bg-blue-600 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">0</span>
</a>
</div>
</div>

<div className="bg-slate-50 border-t border-slate-200 overflow-x-auto no-scrollbar">
<div className="max-w-[1500px] mr-auto ml-auto pr-4 pl-4">
<div className="flex gap-6 whitespace-nowrap text-xs font-medium text-slate-600 pt-2 pb-2 gap-x-6 gap-y-6 items-center">
<a className="flex items-center gap-1.5 text-slate-900" href="#">
<svg className="lucide lucide-menu w-3.5 h-3.5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg> All
                    </a>
<a className="hover:text-slate-900 hover:underline" href="#">Today's Deals</a>
<a className="hover:text-slate-900 hover:underline" href="#">POS Systems</a>
<a className="hover:text-slate-900 hover:underline" href="#">Scanners</a>
<a className="hover:text-slate-900 hover:underline" href="#">Printers</a>
<a className="hover:text-slate-900 hover:underline" href="#">Cash Drawers</a>
<a className="hover:text-slate-900 hover:underline" href="#">Security Cameras</a>
<a className="hover:text-slate-900 hover:underline" href="#">Supplies</a>
<a className="hover:text-slate-900 hover:underline text-blue-700" href="#">Reorder</a>
</div>
</div>
</div>
</header>

<main className="min-h-screen bg-slate-100 pb-12">

<div className="absolute w-full h-64 bg-gradient-to-b from-slate-200 to-slate-100 -z-10"></div>
<div className="max-w-[1500px] mr-auto ml-auto pt-6 pr-4 pl-4">

<h1 className="text-xl font-bold text-slate-900 mb-4 px-1">Shop Business Hardware</h1>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-5">

<div className="bg-white p-5 flex flex-col h-[400px] border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
<h2 className="text-lg font-bold text-slate-900 mb-4 leading-tight">Complete POS Systems &amp; Bundles</h2>
<div className="flex-1 grid grid-cols-2 gap-3 mb-2">

<div className="relative bg-slate-50 p-2 flex items-center justify-center overflow-hidden">
<img alt="iPad Stand" className="mix-blend-multiply object-contain h-full w-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<span className="absolute bottom-1 left-1 text-[10px] text-slate-500 leading-none">Stands</span>
</div>

<div className="relative bg-slate-50 p-2 flex items-center justify-center overflow-hidden">
<img alt="Printer" className="mix-blend-multiply object-contain h-full w-full scale-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<span className="absolute bottom-1 left-1 text-[10px] text-slate-500 leading-none">Terminals</span>
</div>

<div className="relative bg-slate-50 p-2 flex items-center justify-center overflow-hidden">
<div className="w-full h-full bg-slate-100 flex items-center justify-center">
<svg className="lucide lucide-credit-card w-8 h-8 text-slate-300" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
<span className="absolute bottom-1 left-1 text-[10px] text-slate-500 leading-none">Readers</span>
</div>

<div className="relative bg-slate-50 p-2 flex items-center justify-center overflow-hidden">
<div className="w-full h-full bg-slate-100 flex items-center justify-center">
<svg className="lucide lucide-banknote w-8 h-8 text-slate-300" data-lucide="banknote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" width="20" x="2" y="6"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>
</div>
<span className="absolute bottom-1 left-1 text-[10px] text-slate-500 leading-none">Drawers</span>
</div>
</div>
<a className="text-sm font-medium text-blue-700 hover:text-blue-800 hover:underline mt-auto" href="#">See all POS hardware</a>
</div>

<div className="bg-white p-5 flex flex-col h-[400px] border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
<h2 className="text-lg font-bold text-slate-900 mb-1 leading-tight">Barcode Scanners</h2>
<p className="text-xs text-slate-500 mb-4">Zebra, Honeywell &amp; Datalogic</p>
<div className="flex-1 bg-slate-50 mb-3 flex items-center justify-center p-6">
<img alt="Zebra Scanner" className="mix-blend-multiply object-contain max-h-56 w-auto group-hover:scale-105 transition-transform duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<a className="text-sm font-medium text-blue-700 hover:text-blue-800 hover:underline mt-auto" href="#">Shop handheld scanners</a>
</div>

<div className="bg-white p-5 flex flex-col h-[400px] border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
<h2 className="text-lg font-bold text-slate-900 mb-1 leading-tight">Receipt Printers</h2>
<p className="text-xs text-slate-500 mb-4">Thermal &amp; Impact Solutions</p>
<div className="flex-1 bg-slate-50 mb-3 flex items-center justify-center p-6">
<img alt="Epson Printer" className="mix-blend-multiply object-contain max-h-52 w-auto group-hover:scale-105 transition-transform duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<a className="text-sm font-medium text-blue-700 hover:text-blue-800 hover:underline mt-auto" href="#">Shop printers &amp; supplies</a>
</div>

<div className="grid grid-rows-2 gap-5 h-[400px]">

<div className="bg-white p-5 flex flex-col justify-center items-start border border-slate-200/60 shadow-sm">
<h2 className="text-lg font-bold text-slate-900 mb-3">Buy for your business</h2>
<div className="w-full space-y-2 mb-4">
<div className="flex items-center gap-2 text-xs text-slate-600">
<svg className="lucide lucide-check w-3.5 h-3.5 text-green-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Tax-exempt purchasing</span>
</div>
<div className="flex items-center gap-2 text-xs text-slate-600">
<svg className="lucide lucide-check w-3.5 h-3.5 text-green-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Quantity discounts</span>
</div>
<div className="flex items-center gap-2 text-xs text-slate-600">
<svg className="lucide lucide-check w-3.5 h-3.5 text-green-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Fast reordering</span>
</div>
</div>
<button className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-medium py-2 rounded text-sm shadow-sm transition-colors">
                            Sign In to Shop
                        </button>
</div>

<div className="bg-white p-4 flex gap-4 items-center border border-slate-200/60 shadow-sm cursor-pointer group">
<div className="w-24 h-24 shrink-0 bg-slate-50 flex items-center justify-center p-2">
<img alt="Deal" className="mix-blend-multiply object-contain h-full w-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="flex flex-col">
<span className="inline-block bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded w-fit mb-1">DEAL OF THE DAY</span>
<span className="text-sm font-medium text-slate-900 line-clamp-2 leading-tight mb-1 group-hover:text-blue-700">Square Stand 2nd Gen for iPad (Lightning)</span>
<div className="flex items-baseline gap-1.5">
<span className="text-base font-bold text-slate-900">$119.00</span>
<span className="text-xs text-slate-400 line-through">$149.00</span>
</div>
</div>
</div>
</div>

<div className="md:col-span-2 lg:col-span-4 bg-white border-slate-200/60 border mt-1 pt-5 pr-5 pb-5 pl-5 shadow-sm">
<div className="flex items-center justify-between mb-4">
<h2 className="text-xl font-bold text-slate-900">Security &amp; Surveillance Systems</h2>
<a className="text-sm font-medium text-blue-700 hover:underline" href="#">See more</a>
</div>
<div className="flex overflow-x-auto pb-2 gap-4 no-scrollbar">

<div className="flex-shrink-0 w-44 cursor-pointer group">
<div className="bg-slate-50 aspect-square mb-2 p-4 flex items-center justify-center rounded-sm">
<div className="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center">
<svg className="lucide lucide-cctv w-10 h-10 text-slate-400" data-lucide="cctv" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97"></path><path d="M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z"></path><path d="M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15"></path><path d="M2 21v-4"></path><path d="M7 9h.01"></path></svg>
</div>
</div>
<p className="text-sm text-slate-900 font-medium group-hover:text-blue-700 truncate">Dome Cameras</p>
</div>

<div className="flex-shrink-0 w-44 cursor-pointer group">
<div className="bg-slate-50 aspect-square mb-2 p-4 flex items-center justify-center rounded-sm">
<div className="w-24 h-12 bg-slate-200 rounded flex items-center justify-center">
<svg className="lucide lucide-hard-drive w-8 h-8 text-slate-400" data-lucide="hard-drive" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="22" x2="2" y1="12" y2="12"></line><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" x2="6.01" y1="16" y2="16"></line><line x1="10" x2="10.01" y1="16" y2="16"></line></svg>
</div>
</div>
<p className="text-sm text-slate-900 font-medium group-hover:text-blue-700 truncate">Network Recorders (NVR)</p>
</div>

<div className="flex-shrink-0 w-44 cursor-pointer group">
<div className="bg-slate-50 aspect-square mb-2 p-4 flex items-center justify-center rounded-sm">
<div className="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center">
<svg className="lucide lucide-video w-10 h-10 text-slate-400" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
</div>
</div>
<p className="text-sm text-slate-900 font-medium group-hover:text-blue-700 truncate">PTZ Cameras</p>
</div>

<div className="flex-shrink-0 w-44 cursor-pointer group">
<div className="bg-slate-50 aspect-square mb-2 p-4 flex items-center justify-center rounded-sm">
<div className="w-20 h-20 bg-slate-200 rounded flex items-center justify-center">
<svg className="lucide lucide-cable w-10 h-10 text-slate-400" data-lucide="cable" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 19a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1z"></path><path d="M17 21v-2"></path><path d="M19 14V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V10"></path><path d="M21 21v-2"></path><path d="M3 5V3"></path><path d="M4 10a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2z"></path><path d="M7 5V3"></path></svg>
</div>
</div>
<p className="text-sm text-slate-900 font-medium group-hover:text-blue-700 truncate">Cables &amp; Mounts</p>
</div>

<div className="flex-shrink-0 w-44 cursor-pointer group">
<div className="bg-slate-50 aspect-square mb-2 p-4 flex items-center justify-center rounded-sm">
<div className="w-20 h-20 bg-slate-200 rounded flex items-center justify-center">
<svg className="lucide lucide-monitor w-10 h-10 text-slate-400" data-lucide="monitor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
</div>
</div>
<p className="text-sm text-slate-900 font-medium group-hover:text-blue-700 truncate">Security Monitors</p>
</div>
</div>
</div>
</div>
</div><div className="max-w-[1500px] mr-auto ml-auto pt-6 pr-4 pb-8 pl-4">

<div className="flex items-center justify-between mb-4 px-1">
<h2 className="text-xl font-semibold text-slate-900 tracking-tight">Recommended for your business</h2>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 hover:underline" href="#">View purchase history</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

<div className="bg-white border border-slate-200/60 p-4 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer group rounded-sm">
<div className="aspect-[4/3] bg-slate-50 w-full flex items-center justify-center overflow-hidden rounded-[1px] relative">
<img alt="Monitor" className="mix-blend-multiply object-contain h-full w-full p-4 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=800&amp;q=80"/>
</div>
<div className="mt-1">
<h3 className="text-sm font-medium text-slate-900 leading-snug line-clamp-2 group-hover:text-blue-700">Dell UltraSharp U2723QE 27" 4K USB-C Hub Monitor</h3>
<div className="flex items-baseline gap-1 mt-1.5">
<span className="text-xs text-slate-500 relative -top-1">$</span>
<span className="text-xl font-semibold text-slate-900">539</span>
<span className="text-xs text-slate-500 relative -top-1">99</span>
</div>
<div className="text-[11px] text-slate-500 mt-1 font-medium">In stock. Ships today.</div>
</div>
</div>

<div className="bg-white border border-slate-200/60 p-4 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer group rounded-sm">
<div className="aspect-[4/3] bg-slate-50 w-full flex items-center justify-center overflow-hidden rounded-[1px] relative">
<img alt="Server" className="mix-blend-multiply object-cover h-full w-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=800&amp;q=80"/>
</div>
<div className="mt-1">
<h3 className="text-sm font-medium text-slate-900 leading-snug line-clamp-2 group-hover:text-blue-700">HPE ProLiant DL380 Gen10 Plus Network Server</h3>
<div className="flex items-baseline gap-1 mt-1.5">
<span className="text-xs text-slate-500 relative -top-1">$</span>
<span className="text-xl font-semibold text-slate-900">2,149</span>
<span className="text-xs text-slate-500 relative -top-1">00</span>
</div>
<div className="text-[11px] text-slate-500 mt-1 font-medium">Free freight delivery</div>
</div>
</div>

<div className="bg-white border border-slate-200/60 p-4 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer group rounded-sm">
<div className="aspect-[4/3] bg-slate-50 w-full flex items-center justify-center overflow-hidden rounded-[1px] relative">
<img alt="Chair" className="mix-blend-multiply object-cover h-full w-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=800&amp;q=80"/>
</div>
<div className="mt-1">
<h3 className="text-sm font-medium text-slate-900 leading-snug line-clamp-2 group-hover:text-blue-700">Herman Miller Aeron Ergonomic Chair - Graphite</h3>
<div className="flex items-baseline gap-1 mt-1.5">
<span className="text-xs text-slate-500 relative -top-1">$</span>
<span className="text-xl font-semibold text-slate-900">1,255</span>
<span className="text-xs text-slate-500 relative -top-1">00</span>
</div>
<div className="text-[11px] text-slate-500 mt-1 font-medium">Only 3 left in stock</div>
</div>
</div>

<div className="bg-slate-50 border border-slate-200 p-5 flex flex-col h-full rounded-sm shadow-sm relative overflow-hidden group">

<div className="absolute top-0 left-0 w-full h-[3px] bg-slate-900"></div>
<div className="flex flex-col h-full">

<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-slate-200/50 flex items-center justify-center shrink-0">
<svg className="lucide lucide-briefcase text-slate-700" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="20" x="2" y="7"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
</div>
<h2 className="text-sm font-semibold text-slate-900">Buy for your business</h2>
</div>

<div className="space-y-2.5 mb-6 flex-1">
<div className="flex items-start gap-2.5">
<svg className="lucide lucide-check text-slate-900 mt-0.5 shrink-0" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-xs text-slate-600 font-medium leading-tight">Tax-exempt purchasing</span>
</div>
<div className="flex items-start gap-2.5">
<svg className="lucide lucide-check text-slate-900 mt-0.5 shrink-0" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-xs text-slate-600 font-medium leading-tight">Quantity / volume discounts</span>
</div>
<div className="flex items-start gap-2.5">
<svg className="lucide lucide-check text-slate-900 mt-0.5 shrink-0" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-xs text-slate-600 font-medium leading-tight">Fast reordering tools</span>
</div>
<div className="flex items-start gap-2.5">
<svg className="lucide lucide-check text-slate-900 mt-0.5 shrink-0" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-xs text-slate-600 font-medium leading-tight">Dedicated business support</span>
</div>
</div>

<button className="w-full bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold py-2.5 px-4 rounded shadow-sm transition-all focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 mb-3">
                    Sign in to shop
                </button>

<div className="space-y-2 text-center">
<a className="block text-xs font-medium text-blue-700 hover:text-blue-800 hover:underline" href="#">Create a business account</a>
<a className="block text-xs text-slate-500 hover:text-slate-700 hover:underline" href="#">Request bulk pricing</a>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
