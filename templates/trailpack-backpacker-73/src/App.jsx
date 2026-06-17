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
      
<div className="fixed top-0 w-full -z-10 h-screen bg-cover bg-center blur-3xl" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&amp'}}></div>
<main className="min-h-screen flex w-full py-8 items-center justify-center">
<div className="flex flex-col lg:flex-row items-center justify-center gap-8 px-4">

<section className="w-[393px] h-[852px] bg-white rounded-[46px] border border-slate-200 overflow-hidden shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.02),_0_6.7px_5.3px_rgba(0,_0,_0,_0.028),_0_12.5px_10px_rgba(0,_0,_0,_0.035),_0_22.3px_17.9px_rgba(0,_0,_0,_0.042),_0_41.8px_33.4px_rgba(0,_0,_0,_0.05),_0_100px_80px_rgba(0,_0,_0,_0.07)]" style={{scrollBehavior: 'smooth'}}>
<div className="h-full flex flex-col overflow-y-auto pb-20">

<div className="px-6 pt-6 pb-3 flex items-center justify-between text-slate-800">
<span className="text-sm font-medium" id="time1">23:04</span>
<div className="flex items-center gap-2">
<svg className="w-4 h-4" data-lucide="signal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg className="w-4 h-4" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<svg className="w-5 h-5" data-lucide="battery-charging" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 7-3 5h4l-3 5"></path><path d="M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935"></path><path d="M22 14v-4"></path><path d="M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936"></path></svg>
</div>
</div>

<div className="px-6 pb-5 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 text-white flex items-center justify-center shadow-sm">
<span className="text-[15px] font-semibold tracking-tighter">TP</span>
</div>
<div>
<h1 className="text-[24px] leading-6 font-semibold tracking-tight text-slate-900">Trailpack</h1>
<p className="text-[12px] text-slate-500">Backpack the world</p>
</div>
</div>
<button className="h-11 w-11 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition-colors relative" id="notificationBtn">
<svg className="w-5 h-5" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full" id="notificationDot"></span>
</button>
</div>

<div className="px-6 mb-5">
<div className="relative ring-1 ring-slate-200 rounded-2xl">
<svg className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="w-full pl-12 pr-12 py-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100 text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-slate-300 focus:outline-none text-[14px] transition-all" id="searchInput" placeholder="Search hostels, buses, treks..."/>
<button className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors" id="filterBtn">
<svg className="w-4 h-4" data-lucide="sliders-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 5H3"></path><path d="M12 19H3"></path><path d="M14 3v4"></path><path d="M16 17v4"></path><path d="M21 12h-9"></path><path d="M21 19h-5"></path><path d="M21 5h-7"></path><path d="M8 10v4"></path><path d="M8 12H3"></path></svg>
</button>
</div>
</div>

<div className="px-6 mb-6">
<button className="w-full flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 ring-1 ring-slate-200 hover:ring-slate-300 transition-all" id="joinTravelersBtn">
<div className="flex -space-x-3">
<img alt="" className="w-9 h-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<img alt="" className="w-9 h-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<img alt="" className="w-9 h-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div className="w-9 h-9 rounded-full ring-2 ring-white bg-slate-700 flex items-center justify-center text-white text-[11px] font-semibold">+99</div>
</div>
<div className="flex-1 text-left">
<p className="text-[13px] font-semibold text-slate-900">Join 1.8M backpackers</p>
<p className="text-[11px] text-slate-600">Finding stays under $20</p>
</div>
<svg className="w-4 h-4 text-slate-400" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>

<div className="px-6 mb-6">
<div className="flex items-center justify-between mb-4">
<h3 className="text-[18px] font-semibold tracking-tight text-slate-900">Browse by type</h3>
<button className="text-[13px] text-slate-600 hover:text-slate-900 font-medium flex items-center gap-1 transition-colors">
                View all
                <svg className="w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
<div className="grid grid-cols-4 gap-3">
<button className="category-btn flex flex-col items-center justify-center gap-2.5 p-4 rounded-2xl bg-slate-900 text-white shadow-lg transition-all" data-category="hostels">
<svg className="w-6 h-6" data-lucide="bed-single" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 10V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v5"></path><path d="M2 20V10"></path><path d="M2 18h20"></path><path d="M14 12h8"></path></svg>
<span className="text-[12px] font-medium">Hostels</span>
</button>
<button className="category-btn flex flex-col items-center justify-center gap-2.5 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 ring-1 ring-slate-200 text-slate-700 transition-all" data-category="buses">
<svg className="w-6 h-6" data-lucide="bus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="13" rx="2" width="18" x="3" y="3"></rect><path d="M8 16v2"></path><path d="M16 16v2"></path><circle cx="8.5" cy="18.5" r="1.5"></circle><circle cx="15.5" cy="18.5" r="1.5"></circle></svg>
<span className="text-[12px] font-medium">Buses</span>
</button>
<button className="category-btn flex flex-col items-center justify-center gap-2.5 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 ring-1 ring-slate-200 text-slate-700 transition-all" data-category="work">
<svg className="w-6 h-6" data-lucide="handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 12.5 9 14.5a3 3 0 0 1-4.24 0l-.26-.26a3 3 0 0 1 0-4.24l3.03-3.03a2 2 0 0 1 2.83 0l.64.64"></path><path d="M13 11.5 15 9.5a3 3 0 0 1 4.24 0l.26.26a3 3 0 0 1 0 4.24l-3.03 3.03a2 2 0 0 1-2.83 0l-.64-.64"></path><path d="M16 13 8 5"></path></svg>
<span className="text-[12px] font-medium">Work exchange</span>
</button>
<button className="category-btn flex flex-col items-center justify-center gap-2.5 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 ring-1 ring-slate-200 text-slate-700 transition-all" data-category="treks">
<svg className="w-6 h-6" data-lucide="route" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h6"></path><path d="M14 6h6"></path><circle cx="10" cy="6" r="2"></circle><circle cx="14" cy="18" r="2"></circle><path d="M8 6v10a4 4 0 0 0 4 4h2"></path></svg>
<span className="text-[12px] font-medium">Treks</span>
</button>
</div>
</div>

<div className="px-6 mb-6">
<div className="flex items-center justify-between mb-4">
<h3 className="text-[18px] font-semibold tracking-tight text-slate-900">Featured this week</h3>
<button className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 ring-1 ring-slate-200 transition-colors" id="bookmarkBtn1">
<svg className="w-4 h-4 text-slate-600" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</button>
</div>
<div className="relative overflow-hidden rounded-3xl">
<img alt="Nomad Nest Hostel" className="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute top-4 left-4 flex items-center gap-2">
<span className="px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-[11px] font-semibold text-slate-900 flex items-center gap-1">
<svg className="w-3 h-3 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 2 2.3 4.7 5.2.8-3.8 3.7.9 5.2L12 14.8 7.4 16.6l.9-5.2-3.8-3.7 5.2-.8z"></path></svg>
                  4.8
                </span>
<span className="px-3 py-1.5 rounded-full bg-emerald-500/95 backdrop-blur-sm text-[11px] font-semibold text-white">
                  Top Rated
                </span>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 text-white">
<div className="flex items-start justify-between mb-2">
<div>
<h4 className="text-[20px] font-semibold tracking-tight">Nomad Nest Hostel</h4>
<p className="text-[13px] text-white/90 flex items-center gap-1 mt-1">
<svg className="w-3.5 h-3.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      Hanoi, Vietnam
                    </p>
</div>
<div className="text-right">
<p className="text-[12px] text-white/80">from</p>
<p className="text-[19px] font-semibold tracking-tight">$12<span className="text-[12px] font-medium">/night</span></p>
</div>
</div>
<div className="flex items-center gap-2 mt-4">
<button className="flex-1 px-4 py-2.5 rounded-xl bg-white hover:bg-white/90 text-slate-900 text-[13px] font-medium transition-all flex items-center justify-center gap-2" id="bookNowBtn">
<svg className="w-4 h-4" data-lucide="calendar-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
                    Book bunk
                  </button>
<button className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 ring-1 ring-white/30 text-white text-[13px] font-medium backdrop-blur transition-all flex items-center gap-2" id="detailsBtn">
<svg className="w-4 h-4" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                    Details
                  </button>
</div>
</div>
</div>
</div>

<div className="px-6 mb-6">
<h4 className="text-[16px] font-semibold tracking-tight text-slate-900 mb-4">Why book with Trailpack</h4>
<div className="grid grid-cols-3 gap-3">
<button className="trust-card p-4 rounded-2xl bg-slate-50 ring-1 ring-slate-200 hover:ring-slate-300 transition-all">
<div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center mb-3">
<svg className="w-5 h-5 text-emerald-600" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-[12px] font-semibold text-slate-900">Verified</p>
<p className="text-[11px] text-slate-600 mt-1">Community reviews</p>
</button>
<button className="trust-card p-4 rounded-2xl bg-slate-50 ring-1 ring-slate-200 hover:ring-slate-300 transition-all">
<div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center mb-3">
<svg className="w-5 h-5 text-blue-600" data-lucide="headphones" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg>
</div>
<p className="text-[12px] font-semibold text-slate-900">24/7 Support</p>
<p className="text-[11px] text-slate-600 mt-1">On-trip help</p>
</button>
<button className="trust-card p-4 rounded-2xl bg-slate-50 ring-1 ring-slate-200 hover:ring-slate-300 transition-all">
<div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center mb-3">
<svg className="w-5 h-5 text-purple-600" data-lucide="ticket-percent" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13a2 2 0 1 1 0-2V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4a2 2 0 1 1 0 2v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2z"></path><path d="m9 15 6-6"></path><path d="M8 9h.01"></path><path d="M16 15h.01"></path></svg>
</div>
<p className="text-[12px] font-semibold text-slate-900">No hidden fees</p>
<p className="text-[11px] text-slate-600 mt-1">Clear pricing</p>
</button>
</div>
</div>
<div className="h-8"></div>
</div>

<div className="bg-white/95 border-slate-200 border-t pt-3 pr-6 pb-3 pl-6 absolute right-0 bottom-0 left-0 backdrop-blur-xl" style={{boxShadow: '0 -1px 0 0 rgba(0, 0, 0, 0.05), 0 -4px 12px -2px rgba(0,0,0,0.08)'}}>
<div className="flex items-center justify-around">
<button className="tab-left flex flex-col items-center gap-1 py-2 px-4" data-tab="home">
<svg className="w-6 h-6 text-slate-900" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="text-[10px] font-medium text-slate-900">Home</span>
</button>
<button className="tab-left flex flex-col items-center gap-1 py-2 px-4" data-tab="discover">
<svg className="w-6 h-6 text-slate-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<span className="text-[10px] font-medium text-slate-400">Discover</span>
</button>
<button className="tab-left flex flex-col items-center gap-1 py-2 px-4" data-tab="bookings">
<svg className="w-6 h-6 text-slate-400" data-lucide="calendar-days" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg>
<span className="text-[10px] font-medium text-slate-400">Bookings</span>
</button>
<button className="tab-left flex flex-col items-center gap-1 py-2 px-4" data-tab="account">
<svg className="w-6 h-6 text-slate-400" data-lucide="user-round" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 0 0-16 0"></path></svg>
<span className="text-[10px] font-medium text-slate-400">Account</span>
</button>
</div>
</div>
</section>

<section className="w-[393px] h-[852px] bg-white rounded-[46px] border border-slate-200 overflow-hidden shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.02),_0_6.7px_5.3px_rgba(0,_0,_0,_0.028),_0_12.5px_10px_rgba(0,_0,_0,_0.035),_0_22.3px_17.9px_rgba(0,_0,_0,_0.042),_0_41.8px_33.4px_rgba(0,_0,_0,_0.05),_0_100px_80px_rgba(0,_0,_0,_0.07)]" style={{scrollBehavior: 'smooth'}}>
<div className="h-full flex flex-col pb-20">

<div className="px-6 pt-6 pb-3 flex items-center justify-between text-slate-800">
<span className="text-sm font-medium" id="time2">23:04</span>
<div className="flex items-center gap-2">
<svg className="w-4 h-4" data-lucide="signal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg className="w-4 h-4" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<svg className="w-5 h-5" data-lucide="battery-charging" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 7-3 5h4l-3 5"></path><path d="M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935"></path><path d="M22 14v-4"></path><path d="M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936"></path></svg>
</div>
</div>

<div className="relative w-full h-[480px]">
<img alt="Backpacker vista" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-6 text-white">
<div>
<div className="flex items-center gap-2 mb-2">
<span className="text-[11px] font-medium text-white bg-white/10 ring-white/20 ring-1 rounded-full pt-1 pr-2.5 pb-1 pl-2.5 backdrop-blur-sm">Budget Friendly</span>
<span className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-sm ring-1 ring-white/20 text-[11px] font-medium text-white flex items-center gap-1">
<svg className="w-3 h-3" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
                    Trending
                  </span>
</div>
<h1 className="mt-3 text-[36px] leading-[1.08] font-semibold tracking-tight">Backpack the world for less</h1>
<p className="mt-3 text-[15px] leading-relaxed text-white/90">Find trusted hostels, cheap buses and epic treks. Plan offline and book in seconds.</p>
</div>
<div className="mt-6 space-y-3">
<div className="flex items-center gap-3">
<button className="flex-1 px-5 py-3.5 rounded-xl bg-white hover:bg-white/95 text-slate-900 text-[14px] font-medium transition-all flex items-center justify-center gap-2 shadow-lg" id="exploreBtn">
<svg className="w-4 h-4" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                    Find hostels
                  </button>
<button className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 ring-1 ring-white/30 text-white text-[14px] font-medium backdrop-blur transition-all flex items-center gap-2" id="watchBtn">
<svg className="w-4 h-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                    Watch
                  </button>
</div>
</div>
</div>
</div>

<div className="px-6 py-6">
<button className="w-full flex items-center justify-between p-4 rounded-2xl bg-slate-50 ring-1 ring-slate-200 hover:ring-slate-300 transition-all" id="reviewsBtn">
<div className="flex items-center gap-3">
<div className="flex -space-x-2">
<img alt="" className="w-8 h-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<img alt="" className="w-8 h-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<img alt="" className="w-8 h-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-left">
<p className="text-[13px] font-semibold text-slate-900">Trusted by backpackers</p>
<div className="flex items-center gap-1 mt-0.5">
<div className="flex">
<svg className="w-3 h-3 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 2 2.3 4.7 5.2.8-3.8 3.7.9 5.2L12 14.8 7.4 16.6l.9-5.2-3.8-3.7 5.2-.8z"></path></svg>
<svg className="w-3 h-3 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 2 2.3 4.7 5.2.8-3.8 3.7.9 5.2L12 14.8 7.4 16.6l.9-5.2-3.8-3.7 5.2-.8z"></path></svg>
<svg className="w-3 h-3 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 2 2.3 4.7 5.2.8-3.8 3.7.9 5.2L12 14.8 7.4 16.6l.9-5.2-3.8-3.7 5.2-.8z"></path></svg>
<svg className="w-3 h-3 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 2 2.3 4.7 5.2.8-3.8 3.7.9 5.2L12 14.8 7.4 16.6l.9-5.2-3.8-3.7 5.2-.8z"></path></svg>
<svg className="w-3 h-3 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 2 2.3 4.7 5.2.8-3.8 3.7.9 5.2L12 14.8 7.4 16.6l.9-5.2-3.8-3.7 5.2-.8z"></path></svg>
</div>
<span className="text-[11px] text-slate-600 ml-1">4.9 (9.2k reviews)</span>
</div>
</div>
</div>
<svg className="w-5 h-5 text-slate-400" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>

<div className="px-6">
<h3 className="text-[15px] font-semibold tracking-tight text-slate-900 mb-4">Plan your trip</h3>
<div className="grid grid-cols-3 gap-3">
<button className="plan-btn p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 ring-1 ring-slate-200 hover:ring-slate-300 text-slate-700 transition-all" id="datesBtn">
<svg className="w-5 h-5 mb-2" data-lucide="calendar-range" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M16 2v4"></path><path d="M3 10h18"></path><path d="M8 2v4"></path><path d="M17 14h-6"></path><path d="M13 18H7"></path></svg>
<p className="text-[12px] font-medium">Select dates</p>
</button>
<button className="plan-btn p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 ring-1 ring-slate-200 hover:ring-slate-300 text-slate-700 transition-all" id="locationBtn">
<svg className="w-5 h-5 mb-2" data-lucide="map-pinned" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"></path><circle cx="12" cy="8" r="2"></circle><path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"></path></svg>
<p className="text-[12px] font-medium">City</p>
</button>
<button className="plan-btn p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 ring-1 ring-slate-200 hover:ring-slate-300 text-slate-700 transition-all" id="guestsBtn">
<svg className="w-5 h-5 mb-2" data-lucide="users-round" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 21a8 8 0 0 0-16 0"></path><circle cx="10" cy="8" r="5"></circle><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path></svg>
<p className="text-[12px] font-medium">Backpackers</p>
</button>
</div>
</div>

<div className="px-6 mt-6">
<div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 ring-1 ring-slate-200">
<div className="text-center">
<p className="text-[20px] font-semibold tracking-tight text-slate-900" id="guestsCount">1.8M+</p>
<p className="text-[11px] text-slate-600 mt-0.5">Nights booked</p>
</div>
<div className="text-center border-x border-slate-200">
<p className="text-[20px] font-semibold tracking-tight text-slate-900">120+</p>
<p className="text-[11px] text-slate-600 mt-0.5">Countries</p>
</div>
<div className="text-center">
<p className="text-[20px] font-semibold tracking-tight text-slate-900">35k+</p>
<p className="text-[11px] text-slate-600 mt-0.5">Hostels</p>
</div>
</div>
</div>
<div className="mt-auto py-6"></div>
</div>

<div className="bg-white/95 border-slate-200 border-t pt-3 pr-6 pb-3 pl-6 absolute right-0 bottom-0 left-0 backdrop-blur-xl" style={{boxShadow: '0 -1px 0 0 rgba(0, 0, 0, 0.05), 0 -4px 12px -2px rgba(0,0,0,0.08)'}}>
<div className="flex items-center justify-around">
<button className="tab-mid flex flex-col items-center gap-1 py-2 px-4" data-tab="home">
<svg className="w-6 h-6 text-slate-900" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="text-[10px] font-medium text-slate-900">Home</span>
</button>
<button className="tab-mid flex flex-col items-center gap-1 py-2 px-4" data-tab="discover">
<svg className="w-6 h-6 text-slate-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<span className="text-[10px] font-medium text-slate-400">Discover</span>
</button>
<button className="tab-mid flex flex-col items-center gap-1 py-2 px-4" data-tab="bookings">
<svg className="w-6 h-6 text-slate-400" data-lucide="calendar-days" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg>
<span className="text-[10px] font-medium text-slate-400">Bookings</span>
</button>
<button className="tab-mid flex flex-col items-center gap-1 py-2 px-4" data-tab="account">
<svg className="w-6 h-6 text-slate-400" data-lucide="user-round" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 0 0-16 0"></path></svg>
<span className="text-[10px] font-medium text-slate-400">Account</span>
</button>
</div>
</div>
</section>

<section className="w-[393px] h-[852px] bg-white rounded-[46px] border border-slate-200 overflow-hidden shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.02),_0_6.7px_5.3px_rgba(0,_0,_0,_0.028),_0_12.5px_10px_rgba(0,_0,_0,_0.035),_0_22.3px_17.9px_rgba(0,_0,_0,_0.042),_0_41.8px_33.4px_rgba(0,_0,_0,_0.05),_0_100px_80px_rgba(0,_0,_0,_0.07)]" style={{scrollBehavior: 'smooth'}}>
<div className="h-full flex flex-col overflow-y-auto pb-20">

<div className="px-6 pt-6 pb-3 flex items-center justify-between text-slate-800">
<span className="text-sm font-medium" id="time3">23:04</span>
<div className="flex items-center gap-2">
<svg className="w-4 h-4" data-lucide="signal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg className="w-4 h-4" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<svg className="w-5 h-5" data-lucide="battery-charging" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 7-3 5h4l-3 5"></path><path d="M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935"></path><path d="M22 14v-4"></path><path d="M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936"></path></svg>
</div>
</div>

<div className="px-6 pb-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<button className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors" id="backBtn">
<svg className="w-5 h-5" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<h2 className="text-[22px] font-semibold tracking-tight text-slate-900">Booking details</h2>
</div>
<button className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors" id="shareBtn">
<svg className="w-5 h-5" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
</button>
</div>

<div className="px-6 mb-5">
<div className="rounded-3xl ring-1 ring-slate-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition-all">
<div className="relative">
<img alt="Nomad Nest Hostel - Dorm" className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<button className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-all" id="heartBtn">
<svg className="w-5 h-5 text-slate-700" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
<div className="absolute top-3 left-3">
<span className="px-3 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-sm text-white text-[11px] font-semibold">Budget pick</span>
</div>
</div>
<div className="p-5">
<div className="flex items-start justify-between mb-3">
<div>
<h3 className="text-[17px] font-semibold tracking-tight text-slate-900">Nomad Nest • 8‑Bed Mixed Dorm</h3>
<p className="text-[13px] text-slate-600 flex items-center gap-1 mt-1">
<svg className="w-3.5 h-3.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      Hanoi, Vietnam
                    </p>
</div>
<div className="text-right">
<div className="flex items-center gap-1 mb-1">
<svg className="w-4 h-4 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 2 2.3 4.7 5.2.8-3.8 3.7.9 5.2L12 14.8 7.4 16.6l.9-5.2-3.8-3.7 5.2-.8z"></path></svg>
<span className="text-[14px] font-semibold text-slate-900">4.8</span>
</div>
<p className="text-[11px] text-slate-500">1,042 reviews</p>
</div>
</div>
<div className="flex items-center gap-2 mb-4">
<span className="px-3 py-1.5 rounded-xl bg-slate-50 ring-1 ring-slate-200 text-[11px] font-medium text-slate-700 flex items-center gap-1">
<svg className="w-3.5 h-3.5 text-slate-700" data-lucide="locker" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="1" width="7" x="3" y="3"></rect><rect height="18" rx="1" width="7" x="14" y="3"></rect><path d="M6.5 7h0"></path><path d="M17.5 7h0"></path></svg>
                    Lockers
                  </span>
<span className="px-3 py-1.5 rounded-xl bg-slate-50 ring-1 ring-slate-200 text-[11px] font-medium text-slate-700 flex items-center gap-1">
<svg className="w-3.5 h-3.5 text-slate-700" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
                    Wi‑Fi
                  </span>
<span className="px-3 py-1.5 rounded-xl bg-slate-50 ring-1 ring-slate-200 text-[11px] font-medium text-slate-700 flex items-center gap-1">
<svg className="w-3.5 h-3.5 text-slate-700" data-lucide="coffee" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 3h8a3 3 0 0 1 0 6h-1"></path><path d="M4 11h12a0 0 0 0 1 0 0v1a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-1a0 0 0 0 1 0 0"></path><path d="M2 20h14"></path></svg>
                    Breakfast
                  </span>
</div>
<div className="grid grid-cols-4 gap-2">
<button className="amenity-btn flex flex-col items-center gap-1 p-2 rounded-xl bg-slate-50 ring-1 ring-slate-200 hover:ring-slate-300 transition-all">
<svg className="w-4 h-4 text-slate-700" data-lucide="plug" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22v-5"></path><path d="M9 7V2"></path><path d="M15 7V2"></path><path d="M5 8h14"></path><path d="M7 8v6a5 5 0 0 0 10 0V8"></path></svg>
<span className="text-[10px] text-slate-600">Power</span>
</button>
<button className="amenity-btn flex flex-col items-center gap-1 p-2 rounded-xl bg-slate-50 ring-1 ring-slate-200 hover:ring-slate-300 transition-all">
<svg className="w-4 h-4 text-slate-700" data-lucide="bath" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 4 8 6"></path><path d="M17 19v2"></path><path d="M2 12h20"></path><path d="M7 19v2"></path><path d="M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"></path></svg>
<span className="text-[10px] text-slate-600">Hot shower</span>
</button>
<button className="amenity-btn flex flex-col items-center gap-1 p-2 rounded-xl bg-slate-50 ring-1 ring-slate-200 hover:ring-slate-300 transition-all">
<svg className="w-4 h-4 text-slate-700" data-lucide="music" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
<span className="text-[10px] text-slate-600">Events</span>
</button>
<button className="amenity-btn flex flex-col items-center gap-1 p-2 rounded-xl bg-slate-50 ring-1 ring-slate-200 hover:ring-slate-300 transition-all">
<svg className="w-4 h-4 text-slate-700" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6l6-2 6 2 6-2v15l-6 2-6-2-6 2z"></path><path d="M9 4v15"></path><path d="M15 6v15"></path></svg>
</button></div></div></div></div></div></section></div></main>
    </>
  );
}
