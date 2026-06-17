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
      

<aside className="w-72 bg-zinc-950 flex flex-col h-full border-r border-zinc-800 shrink-0 transition-all duration-300">

<div className="h-16 flex items-center px-6 border-b border-zinc-800">
<div className="flex items-center gap-2.5 text-white">
<div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-[#009444]/10 border border-[#009444]/20 text-[#009444]">
<svg aria-hidden="true" className="lucide lucide-store w-4.5 h-4.5" data-lucide="store" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"></path><path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"></path><path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"></path></svg>
</div>
<span className="text-lg font-medium tracking-tight">LocalStalls</span>
</div>
</div>

<nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1 sidebar-scroll">
<div className="px-3 mb-2 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Management</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 rounded-lg hover:text-white hover:bg-zinc-900 transition-colors" href="#">
<svg aria-hidden="true" className="lucide lucide-layout-dashboard w-4.5 h-4.5" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
                Dashboard
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-white bg-zinc-800 rounded-lg transition-colors" href="#">
<svg aria-hidden="true" className="lucide lucide-users w-4.5 h-4.5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                Clients
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 rounded-lg hover:text-white hover:bg-zinc-900 transition-colors" href="#">
<svg aria-hidden="true" className="lucide lucide-calendar-days w-4.5 h-4.5" data-lucide="calendar-days" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg>
                Bookings
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 rounded-lg hover:text-white hover:bg-zinc-900 transition-colors" href="#">
<svg aria-hidden="true" className="lucide lucide-receipt w-4.5 h-4.5" data-lucide="receipt" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 17.5v-11"></path></svg>
                Invoices
            </a>
</nav>

<div className="p-4 border-t border-zinc-800 bg-zinc-950">
<div className="flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-800 transition-colors cursor-pointer group">
<img alt="Profile" className="w-9 h-9 rounded-full border border-zinc-700" src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-white truncate">Olivia Rhye</p>
<p className="text-xs text-zinc-400 truncate">olivia@localstalls.com</p>
</div>
<button className="text-zinc-500 hover:text-white transition-colors">
<svg aria-hidden="true" className="lucide lucide-log-out w-4.5 h-4.5" data-lucide="log-out" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 17 5-5-5-5"></path><path d="M21 12H9"></path><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path></svg>
</button>
</div>
</div>
</aside>

<main className="flex-1 overflow-y-auto bg-zinc-100 relative">
<div className="min-h-full flex flex-col">

<div className="bg-white border-b border-zinc-200 sticky top-0 z-10">

<div className="max-w-[1600px] mr-auto ml-auto pt-6 pr-8 pb-1 pl-8" style={{}}>
<div className="flex flex-col border-0 pb-3 gap-x-5 gap-y-5">

<div className="flex flex-col md:flex-row gap-5 w-full gap-x-5 gap-y-5 items-start">

<div className="relative shrink-0">
<img alt="Client" className="bg-zinc-100 w-16 h-16 object-cover border border-zinc-200 rounded-full shadow-sm" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
<div className="absolute -bottom-0.5 -right-0.5 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></div>
</div>
<div className="flex-1 min-w-0 flex flex-col w-full gap-1 md:h-16 md:justify-center">

<div className="flex flex-col xl:flex-row xl:items-center gap-x-4 gap-y-4 justify-between">
<h1 className="text-xl font-medium text-zinc-900 tracking-tight">Artisan Flame (LocalStalls Demo)</h1>

<div className="flex items-center gap-4">

<div className="flex items-center gap-1">
<a className="p-1.5 text-zinc-400 hover:text-zinc-600 hover:bg-zinc-50 rounded-md transition-all" href="https://demo-site.com" title="Website">
<svg className="lucide lucide-globe" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="12" cy="12" r="10"></circle><line x1="2" x2="22" y1="12" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
</a>
<a className="p-1.5 text-zinc-400 hover:text-zinc-600 hover:bg-zinc-50 rounded-md transition-all" href="#" title="Facebook">
<svg className="lucide lucide-facebook" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="p-1.5 text-zinc-400 hover:text-zinc-600 hover:bg-zinc-50 rounded-md transition-all" href="#" title="Instagram">
<svg className="lucide lucide-instagram" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="p-1.5 text-zinc-400 hover:text-zinc-600 hover:bg-zinc-50 rounded-md transition-all" href="#" title="X">
<svg fill="currentColor" height="12" viewbox="0 0 24 24" width="12"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
</a>
<a className="p-1.5 text-zinc-400 hover:text-zinc-600 hover:bg-zinc-50 rounded-md transition-all" href="#" title="TikTok">
<svg fill="currentColor" height="13" viewbox="0 0 24 24" width="13"><path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"></path></svg>
</a>
</div>

<div className="w-px h-4 bg-zinc-200 hidden sm:block"></div>

<div className="flex items-center gap-1.5 cursor-pointer group" title="Xero ID: 40474b9f-ee2f...">
<span className="text-xs text-zinc-400 font-medium group-hover:text-zinc-600 transition-colors">Xero Linked</span>
<svg className="lucide lucide-link text-[#009444]" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path className="" d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
</div>
</div>
</div>

<div className="flex flex-wrap text-xs text-zinc-500 gap-x-3 gap-y-x-3 items-center">

<span className="flex items-center gap-1.5 text-base font-medium text-zinc-700">Aaron Busary</span>
<span className="text-zinc-300">•</span>

<a className="hover:underline flex items-center gap-1.5 text-base font-medium text-zinc-600" href="mailto:c@innsite.dev">c@innsite.dev</a>
<span className="text-zinc-300">•</span>

<span className="flex items-center gap-1.5 text-base text-zinc-600 font-mono">0420 945 739</span>


<span className="truncate max-w-[280px] flex items-center gap-1.5 ml-auto" title="Test, test, Test, test, Australia">Test, test, Test, test, Australia</span>
<span className="text-zinc-300">•</span>

<div className="flex items-center gap-1.5">
<span className="text-zinc-400 font-medium">ABN</span>
<span className="font-mono text-zinc-600">26 454 3636</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col lg:flex-row lg:items-center bg-zinc-50 border-zinc-100/80 border rounded-lg pt-3 pr-3 pb-3 pl-3 gap-x-4 gap-y-4 justify-between">

<div className="flex items-center gap-6 overflow-x-auto no-scrollbar px-1">
<div className="flex items-center gap-2.5">
<div className="text-[#009444] bg-[#009444]/10 rounded-md pt-1.5 pr-1.5 pb-1.5 pl-1.5">
<svg className="lucide lucide-store w-[14px] h-[14px]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(0, 148, 68)', width: '14px', height: '14px'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"></path><path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"></path><path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"></path></svg>
</div>
<div className="flex items-baseline gap-1.5">
<span className="text-sm font-semibold text-zinc-900 leading-none">35</span>
<span className="text-[10px] font-medium text-zinc-400 uppercase tracking-wide">Bookings</span>
</div>
</div>
<div className="w-px h-6 bg-zinc-200"></div>
<div className="flex items-center gap-2.5">
<div className="p-1.5 bg-[#009444]/10 rounded-md text-[#009444]">
<svg className="lucide lucide-dollar-sign" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
</div>
<div className="flex items-baseline gap-1.5">
<span className="text-sm font-semibold text-zinc-900 leading-none">$13.2k</span>
<span className="text-[10px] font-medium text-zinc-400 uppercase tracking-wide">Spent</span>
</div>
</div>
<div className="w-px h-6 bg-zinc-200"></div>
<div className="flex items-center gap-2.5">
<div className="p-1.5 bg-[#009444]/10 rounded-md text-[#009444]">
<svg className="lucide lucide-credit-card" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect className="" height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
<div className="flex items-baseline gap-1.5">
<span className="text-sm font-semibold text-[#009444] leading-none">$964</span>
<span className="text-[10px] font-medium text-zinc-400 uppercase tracking-wide">Credit Balance</span>
</div>
</div>
</div>

<div className="flex lg:border-t-0 lg:pt-0 lg:ml-auto border-zinc-200 border-t pt-3 gap-x-4 gap-y-4 items-center">

<button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-700 bg-white border border-zinc-200 rounded-md shadow-sm hover:bg-zinc-50 hover:text-zinc-900 transition-all focus:outline-none focus:ring-2 focus:ring-zinc-200 focus:ring-offset-1">
<svg className="lucide lucide-calendar-plus" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="M10 16h4"></path><path d="M12 14v4"></path></svg>
                    Add Booking
                </button>

<button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-700 bg-white border border-zinc-200 rounded-md shadow-sm hover:bg-zinc-50 hover:text-zinc-900 transition-all focus:outline-none focus:ring-2 focus:ring-zinc-200 focus:ring-offset-1">
<svg className="lucide lucide-mail" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path></svg>
                    Send Email
                </button>

<div className="relative group">
<button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-700 bg-white border border-zinc-200 rounded-md shadow-sm hover:bg-zinc-50 hover:text-zinc-900 transition-all focus:outline-none focus:ring-2 focus:ring-zinc-200 focus:ring-offset-1">
                        Actions
                        <svg className="lucide lucide-chevron-down text-zinc-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path className="" d="m6 9 6 6 6-6"></path></svg>
</button>

<div className="absolute right-0 top-full mt-1 w-64 bg-white border border-zinc-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 origin-top-right p-1 transform scale-95 group-hover:scale-100 duration-100">

<div className="px-1 py-1 space-y-0.5">
<label className="flex items-center justify-between w-full px-2 py-1.5 rounded hover:bg-zinc-50 cursor-pointer group">
<span className="text-xs font-medium text-zinc-600 group-hover:text-zinc-900 transition-colors">Auto Accept Bookings</span>
<div className="relative inline-flex items-center shrink-0">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-7 h-4 bg-zinc-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-[#009444]"></div>
</div>
</label>
<label className="flex items-center justify-between w-full px-2 py-1.5 rounded hover:bg-zinc-50 cursor-pointer group">
<span className="text-xs font-medium text-zinc-600 group-hover:text-zinc-900 transition-colors">Email Subscribed</span>
<div className="relative inline-flex items-center shrink-0">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-7 h-4 bg-zinc-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-[#009444]"></div>
</div>
</label>
</div>
<div className="h-px bg-zinc-100 my-1"></div>
<button className="flex items-center w-full px-2 py-1.5 text-xs text-orange-600 rounded hover:bg-orange-50 text-left transition-colors">
<svg className="mr-2 h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="10" x2="10" y1="15" y2="9"></line><line x1="14" x2="14" y1="15" y2="9"></line></svg>
                            Suspend
                        </button>
<button className="flex items-center w-full px-2 py-1.5 text-xs text-red-600 rounded hover:bg-red-50 text-left transition-colors">
<svg className="mr-2 h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                            Delete
                        </button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-[1600px] mr-auto ml-auto pr-8 pl-8">
<div className="flex gap-8 overflow-x-auto no-scrollbar">
<button className="group inline-flex items-center gap-2 py-4 text-sm font-medium text-[#009444] border-b-2 border-[#009444] transition-all whitespace-nowrap">
<svg className="lucide lucide-user w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            Client Info
        </button>
<button className="group inline-flex items-center gap-2 py-4 text-sm font-medium text-zinc-500 border-b-2 border-transparent hover:text-zinc-800 hover:border-zinc-300 transition-all whitespace-nowrap">
<svg className="lucide lucide-home w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
            Bookings
        </button>
<button className="group inline-flex items-center gap-2 py-4 text-sm font-medium text-zinc-500 border-b-2 border-transparent hover:text-zinc-800 hover:border-zinc-300 transition-all whitespace-nowrap">
<svg className="lucide lucide-dollar-sign w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line className="" x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
            Payments
        </button>
<button className="group inline-flex items-center gap-2 py-4 text-sm font-medium text-zinc-500 border-b-2 border-transparent hover:text-zinc-800 hover:border-zinc-300 transition-all whitespace-nowrap">
<svg className="lucide lucide-check-square w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"></path><path d="m9 11 3 3L22 4"></path></svg>
            Stall Applications
        </button>
<button className="group inline-flex items-center gap-2 py-4 text-sm font-medium text-zinc-500 border-b-2 border-transparent hover:text-zinc-800 hover:border-zinc-300 transition-all whitespace-nowrap">
<svg className="lucide lucide-credit-card w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
            Credit Logs
        </button>
</div>
</div>
</div>

<div className="w-full max-w-[1600px] mr-auto ml-auto pt-8 pr-8 pb-8 pl-8 space-y-6">
<div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start">

<div className="xl:col-span-2 space-y-6">

<div className="bg-white border border-zinc-200 rounded-xl shadow-sm overflow-hidden flex flex-col h-full">

<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 border-b border-zinc-100 gap-4 bg-white">
<div className="">
<h3 className="text-base font-semibold text-zinc-900 tracking-tight">Documents</h3>
</div>
<div className="flex gap-3 gap-x-3 gap-y-3">
<button className="flex hover:bg-zinc-200 transition-colors uppercase text-xs font-semibold text-zinc-600 tracking-wide bg-zinc-100 rounded-md pt-2 pr-3.5 pb-2 pl-3.5 gap-x-2 gap-y-2 items-center">
<svg className="lucide lucide-mail" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
        Send Reminder
    </button>
<button className="flex hover:bg-[#009444]/20 transition-colors uppercase text-xs font-semibold text-[#009444] tracking-wide bg-[#009444]/10 rounded-md pt-2 pr-3.5 pb-2 pl-3.5 shadow-sm gap-x-2 gap-y-2 items-center">
<svg className="lucide lucide-plus" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path className="" d="M12 5v14"></path></svg>
        Upload Document
    </button>
</div>
</div>

<div className="flex-1 bg-zinc-50/50 pt-6 pr-6 pb-6 pl-6">
<div className="grid grid-cols-1 gap-3">

<div className="group bg-white rounded-lg border border-zinc-200 shadow-sm hover:shadow-md hover:border-zinc-300 transition-all p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center gap-4">
<div className="flex items-center gap-4 flex-1 min-w-0">
<div className="w-10 h-10 rounded-lg bg-[#009444]/10 border border-[#009444]/20 flex items-center justify-center text-[#009444] shrink-0">
<svg className="lucide lucide-shield-check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="min-w-0 flex-1">
<h4 className="text-sm font-medium text-zinc-900 truncate">Public Liability</h4>
<p className="text-xs text-zinc-500 mt-0.5">Expires 24 Dec 2025</p>
</div>
</div>
<div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-zinc-100 sm:border-none mt-1 sm:mt-0">
<div className="flex items-center gap-3">
<div className="text-xs font-medium text-emerald-600 flex items-center gap-1.5 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                        Valid
                    </div>
</div>
<div className="flex gap-1 border-l border-zinc-100 pl-3 ml-1">
<button className="p-2 text-zinc-400 hover:text-zinc-600 hover:bg-zinc-50 rounded-md transition-colors" title="View">
<svg className="lucide lucide-eye" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
<button className="p-2 text-zinc-400 hover:text-[#009444] hover:bg-green-50 rounded-md transition-colors" title="Edit">
<svg className="lucide lucide-pencil" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg>
</button>
<button className="p-2 text-zinc-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors" title="Delete">
<svg className="lucide lucide-trash-2" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
</button>
</div>
</div>
</div>

<div className="group bg-white rounded-lg border border-zinc-200 shadow-sm hover:shadow-md hover:border-zinc-300 transition-all p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center gap-4">
<div className="flex items-center gap-4 flex-1 min-w-0">
<div className="w-10 h-10 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center text-red-600 shrink-0">
<svg className="lucide lucide-file-warning" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M12 13v4"></path><path d="M12 21h.01"></path></svg>
</div>
<div className="min-w-0 flex-1">
<h4 className="text-sm font-medium text-zinc-900 truncate">Food Safety Cert</h4>
<p className="text-xs text-zinc-500 mt-0.5">Expired 12 Jan 2024</p>
</div>
</div>
<div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-zinc-100 sm:border-none mt-1 sm:mt-0">
<div className="flex items-center gap-3">
<div className="text-xs font-medium text-red-700 flex items-center gap-1.5 bg-red-50 px-2.5 py-1 rounded-md border border-red-100">
<span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                        Expired
                    </div>
</div>
<div className="flex gap-1 border-l border-zinc-100 pl-3 ml-1">
<button className="p-2 text-zinc-400 hover:text-zinc-600 hover:bg-zinc-50 rounded-md transition-colors" title="View">
<svg className="lucide lucide-eye" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
<button className="p-2 text-zinc-400 hover:text-[#009444] hover:bg-green-50 rounded-md transition-colors" title="Edit">
<svg className="lucide lucide-pencil" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg>
</button>
<button className="p-2 text-zinc-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors" title="Delete">
<svg className="lucide lucide-trash-2" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
</button>
</div>
</div>
</div>

</div>
</div>

</div>

<div className="bg-white border border-zinc-200 rounded-xl shadow-sm p-8">
<h3 className="text-lg font-semibold text-zinc-900 tracking-tight">Product Details</h3>
<div className="mt-6 max-w-5xl">
<p className="text-sm text-zinc-600 leading-7">
                        We specialise in selling unique sculptured candles, charming coffee cup candles, aromatic incense, and beautifully crafted ceramic dishes. My products are designed to bring a touch of art and relaxation to your home.
                    </p>
</div>
<div className="mt-10">
<div className="border-2 border-dashed border-zinc-200 rounded-xl p-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="group cursor-pointer">
<div className="aspect-square bg-zinc-100 rounded-lg overflow-hidden border border-zinc-200 shadow-sm relative">
<img className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<p className="mt-2 text-xs text-[#009444] text-center truncate hover:underline">7AA6EC67-FDFE-4EC0-8EA0...</p>
</div>
<div className="group cursor-pointer">
<div className="aspect-square overflow-hidden bg-zinc-100 border-zinc-200 border rounded-lg relative shadow-sm">
<img className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/></div>
<p className="mt-2 text-xs text-[#009444] text-center truncate hover:underline">BF70895B-4763-41E1-A8BD...</p>
</div>
<div className="group cursor-pointer">
<div className="aspect-square bg-zinc-100 rounded-lg overflow-hidden border border-zinc-200 shadow-sm relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1545601445-4d6a0a0565f0?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<p className="mt-2 text-xs text-[#009444] text-center truncate hover:underline">Screenshot 2024-05-31 at 1.59.41 PM</p>
</div>
</div>
</div>
</div>
</div>

</div>

<div className="xl:col-span-1">
<div className="bg-white border border-zinc-200 rounded-xl shadow-sm flex flex-col h-full min-h-[600px]">
<div className="px-6 py-5 border-b border-zinc-100 flex items-center justify-between">
<h3 className="text-base font-semibold text-zinc-900">Notes &amp; Activity</h3>
<button className="text-zinc-400 hover:text-zinc-600 transition-colors">
<svg aria-hidden="true" className="lucide lucide-filter w-4 h-4" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
</button>
</div>
<div className="p-6 space-y-8 flex-1">

<div className="flex gap-3">
<div className="flex-1">
<div className="relative shadow-sm rounded-lg border border-zinc-200 bg-white focus-within:ring-2 focus-within:ring-[#009444]/20 focus-within:border-[#009444] transition-all group">
<textarea className="block w-full border-0 py-3 px-3.5 text-sm resize-none placeholder:text-zinc-400 focus:ring-0 rounded-lg" placeholder="Add a note..." rows="3"></textarea>
<div className="flex bg-zinc-50/50 border-zinc-100 rounded-b-lg border-t pt-2 pr-3 pb-2 pl-3 items-center justify-end">
<button className="px-3 py-1.5 bg-zinc-900 text-white text-xs font-semibold rounded-md hover:bg-zinc-800 transition-colors shadow-sm">Add Note</button>
</div>
</div>
</div>
</div>

<div className="relative space-y-8">
<div className="absolute top-2 bottom-0 left-4 w-px bg-zinc-100"></div>

<div className="relative pl-10">
<img className="absolute left-0 top-0 w-8 h-8 rounded-full border border-zinc-200 object-cover z-10 bg-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<div className="">
<div className="flex items-center gap-2 mb-1.5">
<span className="text-sm font-semibold text-zinc-900">Olivia Rhye</span>
<span className="text-xs text-zinc-400">Today, 2:34 PM</span>
</div>
<p className="text-sm text-zinc-600 leading-relaxed bg-zinc-50 rounded-lg p-3 border border-zinc-100">Requested updated public liability insurance document. The current one expires next week.</p>
</div>
</div>

<div className="relative pl-10">
<div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 z-10">
<svg aria-hidden="true" className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<div className="">
<div className="flex gap-2 mb-1 gap-x-2 gap-y-2 items-center">
<span className="text-sm font-semibold text-zinc-900">System</span>
<span className="text-xs text-zinc-400">Yesterday, 9:12 AM</span>
</div>
<p className="text-sm text-zinc-500">Sent automated email reminder for document expiry.</p>
<a className="inline-flex items-center gap-1 mt-1 text-xs font-medium text-blue-600 hover:text-blue-700 hover:underline transition-colors" href="#">View</a>
</div>
</div>

<div className="relative pl-10">
<div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-green-50 border border-green-100 flex items-center justify-center text-green-600 z-10">
<svg aria-hidden="true" className="lucide lucide-check-circle-2 w-4 h-4" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="">
<div className="flex items-center gap-2 mb-1">
<span className="text-sm font-semibold text-zinc-900">System</span>
<span className="text-xs text-zinc-400">2 days ago</span>
</div>
<p className="text-sm text-zinc-500">Stall application approved by <span className="font-medium text-zinc-900">Admin</span>.</p>
<a className="inline-flex items-center gap-1 mt-1 text-xs font-medium text-blue-600 hover:text-blue-700 hover:underline transition-colors" href="#">View</a>
</div>
</div>

<div className="relative pl-10">
<img className="absolute left-0 top-0 w-8 h-8 rounded-full border border-zinc-200 object-cover z-10 bg-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<div className="">
<div className="flex items-center gap-2 mb-1.5">
<span className="text-sm font-semibold text-zinc-900">Admin</span>
<span className="text-xs text-zinc-400">4 days ago</span>
</div>
<p className="text-sm text-zinc-600 leading-relaxed bg-zinc-50 rounded-lg p-3 border border-zinc-100">Client called to inquire about upcoming market dates. Advised to check the portal.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="h-8"></div>
</div>
</div>
</main>


    </>
  );
}
