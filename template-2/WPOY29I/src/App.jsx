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
    setTimeout(()=>{
      document.querySelectorAll('.fadein').forEach(el=>el.style.opacity=1);
    }, 50);
  
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
      <div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" style={{backgroundImage: `url("https://images.unsplash.com/photo-1554034483-04fda0d3507b?w=3840&q=80")`}}></div>
<div className="flex flex-col xl:flex-row gap-8 items-center">

<div className="relative w-[320px] h-[692px] bg-white/80 rounded-[40px] phone-shadow overflow-hidden border border-white ios-glass fadein fadein-1" style={{opacity: `1`}}>

<div className="flex items-center justify-between px-7 pt-4 pb-1.5 select-none">
<div className="text-gray-800 text-[16px] font-semibold tracking-tight font-sans" style={{}}>9:41</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-signal w-4 h-4 text-gray-600" data-lucide="signal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg className="lucide lucide-wifi w-4 h-4 text-gray-600" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<div className="flex items-center gap-0.5">
<div className="w-5 h-2 rounded-sm bg-gray-200 relative overflow-hidden">
<div className="absolute left-0 top-0 h-full bg-green-400 rounded-sm" style={{width: `80%`}}></div>
</div>
</div>
</div>
</div>

<div className="flex items-center justify-between px-6 pt-2 pb-2.5 ios-divider">
<div className="flex items-center gap-2.5">
<img alt="avatar" className="w-9 h-9 rounded-full ring-2 ring-blue-200/60 object-cover" src="/assets/c0f3907b-87b7-4671-99d8-ab70af2fa691_320w.jpg" style={{}} />
<div className="">
<p className="font-semibold text-gray-900 text-[15px] leading-none font-sans text-sm" style={{}}>Sarah Chen</p>
<p className="text-gray-400 text-[13px] leading-none font-sans" style={{}}>Product Manager</p>
</div>
</div>
<div className="flex gap-1.5">
<button className="relative h-9 w-9 flex items-center justify-center rounded-2xl ios-glass hover:bg-gray-100 transition border border-white/60">
<svg className="lucide lucide-bell w-5 h-5 text-blue-500" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="absolute -top-1.5 -right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full ring-2 ring-white"></span>
</button>
<button className="h-9 w-9 flex items-center justify-center rounded-2xl ios-glass hover:bg-gray-100 transition border border-white/60">
<svg className="lucide lucide-settings w-5 h-5 text-gray-500" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>
</div>

<div className="flex-1 px-5 pb-24 pt-3 overflow-y-auto space-y-5">

<div className="ios-glass fadein fadein-2 rounded-3xl pt-5 pr-5 pb-4 pl-5" style={{opacity: `1`}}>
<div className="flex items-center justify-between mb-2">
<div className="">
<h3 className="text-gray-900 font-semibold text-[18px] tracking-tight font-sans">Revenue</h3>
<p className="text-gray-400 text-xs font-sans" style={{}}>This month</p>
</div>
<button className="h-8 w-8 flex items-center justify-center rounded-xl ios-glass hover:bg-gray-100 transition border border-white/60">
<svg className="lucide lucide-more-horizontal w-4 h-4 text-gray-500" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
<div className="flex items-center gap-4 mt-2 mb-4">

<div className="relative">
<svg className="-rotate-90" height="76" viewBox="0 0 42 42" width="76">
<circle cx="21" cy="21" fill="none" r="16" stroke="#e4e4e7" strokeWidth="3"></circle>
<circle cx="21" cy="21" fill="none" r="16" stroke="url(#gradient1)" strokeDasharray="68 32" strokeLinecap="round" strokeWidth="3.2"></circle>
<defs>
</defs>
</svg>
<div className="absolute inset-0 flex items-center justify-center" style={{width: `92px`, height: `92px`, left: `-8px`, top: `-8px`}}>
<div className="text-center">
<p className="text-[18px] leading-none font-semibold text-blue-600" style={{}}>68%</p>
<p className="text-[10px] text-gray-400 font-sans">Growth</p>
</div>
</div>
</div>
<div className="flex-1 space-y-2">
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-blue-400 rounded-full"></span>
<span className="text-gray-800 text-sm font-medium font-sans" style={{}}>$47.2K</span>
<span className="text-gray-400 text-xs font-sans" style={{}}>Shopify</span>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-green-400 rounded-full"></span>
<span className="text-gray-800 text-sm font-medium font-sans" style={{}}>$15.8K</span>
<span className="text-gray-400 text-xs font-sans" style={{}}>Stripe</span>
</div>
</div>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-gray-400 font-sans" style={{}}>Last week</span>
<span className="text-green-500 font-medium font-sans" style={{}}>+12.5%</span>
<span className="text-gray-400 font-sans" style={{}}>Conversion</span>
<span className="text-blue-600 font-medium font-sans" style={{}}>3.2%</span>
</div>
</div>

<div className="ios-glass rounded-3xl px-5 pt-5 pb-4 fadein fadein-3" style={{opacity: `1`}}>
<div className="flex items-center justify-between mb-2">
<div>
<h3 className="text-gray-900 font-semibold text-[18px] tracking-tight font-sans">Performance</h3>
<p className="text-gray-400 text-xs font-sans" style={{}}>Weekly overview</p>
</div>
<button className="h-8 w-8 flex items-center justify-center rounded-xl ios-glass hover:bg-gray-100 transition border border-white/60">
<svg className="lucide lucide-trending-up w-4 h-4 text-green-500" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</button>
</div>
<div className="space-y-3 mt-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2.5">
<span className="h-9 w-9 bg-blue-100 rounded-xl flex items-center justify-center">
<svg className="lucide lucide-users w-5 h-5 text-blue-500" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</span>
<div className="">
<p className="text-gray-900 font-medium text-sm font-sans" style={{}}>Active Users</p>
<p className="text-gray-400 text-xs font-sans" style={{}}>2,847 today</p>
</div>
</div>
<div className="text-right">
<p className="text-green-500 text-xs font-semibold font-sans" style={{}}>+8.2%</p>
<div className="w-14 h-1 bg-green-100 rounded-full mt-1 overflow-hidden">
<div className="bg-green-400 h-full w-4/5 rounded-full"></div>
</div>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2.5">
<span className="h-9 w-9 bg-purple-100 rounded-xl flex items-center justify-center">
<svg className="lucide lucide-shopping-cart w-5 h-5 text-purple-500" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
</span>
<div className="">
<p className="text-gray-900 font-medium text-sm font-sans" style={{}}>Order Rate</p>
<p className="text-gray-400 text-xs font-sans" style={{}}>89.3% success</p>
</div>
</div>
<div className="text-right">
<p className="text-green-500 text-xs font-semibold font-sans" style={{}}>+2.1%</p>
<div className="w-14 h-1 bg-purple-100 rounded-full mt-1 overflow-hidden">
<div className="bg-purple-400 h-full w-5/6 rounded-full"></div>
</div>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2.5">
<span className="h-9 w-9 bg-yellow-100 rounded-xl flex items-center justify-center">
<svg className="lucide lucide-clock w-5 h-5 text-yellow-500" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</span>
<div className="">
<p className="text-gray-900 font-medium text-sm font-sans" style={{}}>Avg. Session</p>
<p className="text-gray-400 text-xs font-sans" style={{}}>4m 32s</p>
</div>
</div>
<div className="text-right">
<p className="text-red-400 text-xs font-semibold font-sans" style={{}}>-1.5%</p>
<div className="w-14 h-1 bg-red-100 rounded-full mt-1 overflow-hidden">
<div className="bg-red-400 h-full w-2/3 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 ios-nav pt-2 pb-2">
<div className="flex justify-around items-center px-6">
<button className="flex flex-col items-center group">
<div className="h-10 w-10 flex items-center justify-center rounded-xl bg-blue-500/90 group-hover:bg-blue-400/90 transition-all duration-150 shadow-sm">
<svg className="lucide lucide-bar-chart-3 w-5 h-5 text-white" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<span className="text-[11px] text-blue-600 font-medium mt-1 font-sans">Analytics</span>
</button>
<button className="flex flex-col items-center group">
<div className="h-10 w-10 flex group-hover:bg-gray-300 transition-all duration-150 rounded-xl items-center justify-center">
<svg className="lucide lucide-users w-5 h-5 text-gray-600" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<span className="text-[11px] text-gray-500 mt-1 font-sans" style={{}}>Customers</span>
</button>
<button className="flex flex-col items-center group">
<div className="h-10 w-10 flex group-hover:bg-gray-300 transition-all duration-150 rounded-xl items-center justify-center">
<svg className="lucide lucide-package w-5 h-5 text-gray-600" data-lucide="package" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg>
</div>
<span className="text-[11px] text-gray-500 mt-1 font-sans" style={{}}>Products</span>
</button>
<button className="flex flex-col items-center group">
<div className="h-10 w-10 flex group-hover:bg-gray-300 transition-all duration-150 rounded-xl items-center justify-center">
<svg className="lucide lucide-credit-card w-5 h-5 text-gray-600" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
<span className="text-[11px] text-gray-500 mt-1 font-sans" style={{}}>Payments</span>
</button>
</div>
<div className="flex justify-center mt-1">
<div className="w-24 h-1.5 rounded-full bg-gray-300/50"></div>
</div>
</div>
</div>

<div className="relative w-[320px] h-[692px] bg-white/80 rounded-[40px] phone-shadow overflow-hidden border border-white ios-glass fadein fadein-2" style={{opacity: `1`}}>

<div className="flex items-center justify-between px-7 pt-4 pb-1.5 select-none">
<div className="text-gray-800 text-[16px] font-semibold tracking-tight font-sans" style={{}}>9:41</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-signal w-4 h-4 text-gray-600" data-lucide="signal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg className="lucide lucide-wifi w-4 h-4 text-gray-600" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<div className="flex items-center gap-0.5">
<div className="w-5 h-2 rounded-sm bg-gray-200 relative overflow-hidden">
<div className="absolute left-0 top-0 h-full bg-green-400 rounded-sm" style={{width: `90%`}}></div>
</div>
</div>
</div>
</div>

<div className="flex items-center justify-between px-6 pt-2 pb-2.5 ios-divider">
<div className="flex items-center gap-2.5">
<img alt="avatar" className="w-9 h-9 rounded-full ring-2 ring-blue-200/60 object-cover" src="/assets/c0f3907b-87b7-4671-99d8-ab70af2fa691_320w.jpg" style={{}} />
<div className="">
<p className="font-semibold text-gray-900 text-[15px] leading-none font-sans text-sm" style={{}}>Marcus Rivera</p>
<p className="text-gray-400 text-[13px] leading-none font-sans" style={{}}>Design Lead</p>
</div>
</div>
<div className="flex gap-1.5">
<button className="h-9 w-9 flex items-center justify-center rounded-2xl ios-glass hover:bg-gray-100 transition border border-white/60">
<svg className="lucide lucide-calendar w-5 h-5 text-blue-500" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</button>
<button className="h-9 w-9 flex items-center justify-center rounded-2xl bg-blue-500 hover:bg-blue-400 transition text-white border border-blue-400/70">
<svg className="lucide lucide-plus w-5 h-5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>

<div className="flex-1 px-5 pb-24 pt-3 overflow-y-auto space-y-5">

<div className="ios-glass rounded-3xl px-5 pt-5 pb-4 fadein fadein-3" style={{opacity: `1`}}>
<div className="flex items-center justify-between mb-2">
<div className="">
<h3 className="text-gray-900 font-semibold text-[18px] tracking-tight font-sans">This Week</h3>
<p className="text-gray-400 text-xs font-sans" style={{}}>Mar 13–19, 2024</p>
</div>
<button className="text-blue-500 text-xs font-medium font-sans" style={{}}>View all</button>
</div>
<div className="grid grid-cols-7 gap-1 mt-2 mb-4">
<div className="text-center">
<p className="text-gray-400 text-xs mb-1 font-sans" style={{}}>S</p>
<div className="w-8 h-8 flex items-center justify-center rounded-2xl text-gray-400 text-sm font-sans" style={{}}>13</div>
</div>
<div className="text-center">
<p className="text-gray-400 text-xs mb-1 font-sans" style={{}}>M</p>
<div className="w-8 h-8 flex items-center justify-center rounded-2xl text-gray-400 text-sm font-sans" style={{}}>14</div>
</div>
<div className="text-center">
<p className="text-gray-400 text-xs mb-1 font-sans" style={{}}>T</p>
<div className="w-8 h-8 flex items-center justify-center rounded-2xl bg-blue-500 text-white text-sm font-semibold shadow font-sans" style={{}}>15</div>
</div>
<div className="text-center">
<p className="text-gray-400 text-xs mb-1 font-sans" style={{}}>W</p>
<div className="w-8 h-8 flex items-center justify-center rounded-2xl text-gray-400 text-sm font-sans" style={{}}>16</div>
</div>
<div className="text-center">
<p className="text-gray-400 text-xs mb-1 font-sans" style={{}}>T</p>
<div className="w-8 h-8 flex items-center justify-center rounded-2xl text-gray-400 text-sm font-sans" style={{}}>17</div>
</div>
<div className="text-center">
<p className="text-gray-400 text-xs mb-1 font-sans" style={{}}>F</p>
<div className="w-8 h-8 flex items-center justify-center rounded-2xl text-gray-400 text-sm font-sans" style={{}}>18</div>
</div>
<div className="text-center">
<p className="text-gray-400 text-xs mb-1 font-sans" style={{}}>S</p>
<div className="w-8 h-8 flex items-center justify-center rounded-2xl text-gray-400 text-sm font-sans" style={{}}>19</div>
</div>
</div>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between">
<h3 className="text-gray-900 font-semibold text-[18px] tracking-tight font-sans">Active Projects</h3>
<button className="text-blue-500 text-xs font-medium font-sans" style={{}}>See all (12)</button>
</div>

<div className="ios-glass rounded-3xl px-5 pt-4 pb-3 fadein fadein-4" style={{opacity: `1`}}>
<div className="flex items-center gap-3 mb-2">
<div className="h-10 w-10 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-xl flex items-center justify-center">
<svg className="lucide lucide-figma w-5 h-5 text-white" data-lucide="figma" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>
</div>
<div className="flex-1">
<h4 className="text-gray-900 font-semibold text-[15px] font-sans text-sm" style={{}}>Figma Redesign</h4>
<p className="text-gray-400 text-xs font-sans" style={{}}>Mobile UI/UX</p>
</div>
<div className="text-right text-xs">
<p className="text-gray-400 font-sans" style={{}}>Due in 3d</p>
<span className="inline-flex items-center gap-0.5 text-yellow-500 font-sans" style={{}}>
<svg className="lucide lucide-clock w-3 h-3" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg> High
                </span>
</div>
</div>
<p className="text-gray-500 text-xs mb-3 font-sans" style={{}}>Redesigning mobile app UI for better UX and modern look.</p>
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-gray-400 font-sans" style={{}}>Progress</span>
<div className="w-24 h-1.5 bg-blue-100 rounded-full overflow-hidden">
<div className="bg-gradient-to-r from-blue-400 to-indigo-400 h-full w-2/3"></div>
</div>
<span className="text-xs text-blue-600 font-semibold font-sans" style={{}}>68%</span>
</div>
<div className="flex items-center justify-between">
<div className="flex -space-x-2">
<img alt="" className="w-7 h-7 rounded-full border-2 border-white object-cover" src="/assets/04b430ce-45fe-4c6d-b375-4a4d349051a7_320w.jpg" style={{}} />
<img alt="" className="w-7 h-7 rounded-full border-2 border-white object-cover" src="/assets/41090330-fe39-452d-9deb-7474038a7941_320w.jpg" style={{}} />
<img alt="" className="w-7 h-7 rounded-full border-2 border-white object-cover" src="/assets/66a5e5ed-3351-4e00-9e1f-296cd649a7aa_320w.jpg" />
<div className="w-7 h-7 bg-blue-100 rounded-full border-2 border-white flex items-center justify-center text-gray-500 text-[11px] font-semibold font-sans">+2</div>
</div>
<div className="flex items-center gap-3 text-gray-400 text-xs font-sans" style={{}}>
<svg className="lucide lucide-message-circle w-4 h-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>28
                <svg className="lucide lucide-paperclip w-4 h-4" data-lucide="paperclip" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path></svg>7
              </div>
</div>
</div>

<div className="ios-glass rounded-3xl px-5 pt-4 pb-3 fadein fadein-5" style={{opacity: `1`}}>
<div className="flex items-center gap-3 mb-2">
<div className="h-10 w-10 bg-gradient-to-br from-green-400 to-teal-400 rounded-xl flex items-center justify-center">
<svg className="lucide lucide-globe w-5 h-5 text-white" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<div className="flex-1">
<h4 className="text-gray-900 font-semibold text-[15px] font-sans text-sm" style={{}}>Landing Website</h4>
<p className="text-gray-400 text-xs font-sans" style={{}}>TechFlow</p>
</div>
<div className="text-right text-xs">
<p className="text-gray-400 font-sans" style={{}}>Due next wk</p>
<span className="inline-flex items-center gap-0.5 text-green-500 font-sans" style={{}}>
<svg className="lucide lucide-trending-up w-3 h-3" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg> On track
                </span>
</div>
</div>
<div className="space-y-2 text-xs">
<div className="flex items-center gap-2">
<span className="w-3 h-3 bg-green-400 rounded-full flex items-center justify-center">
<svg className="lucide lucide-check w-2.5 h-2.5 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-gray-500 font-sans" style={{}}>Hero design done</span>
</div>
<div className="flex items-center gap-2">
<span className="w-3 h-3 bg-green-400 rounded-full flex items-center justify-center">
<svg className="lucide lucide-check w-2.5 h-2.5 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-gray-500 font-sans" style={{}}>Brand guidelines</span>
</div>
<div className="flex items-center gap-2">
<span className="w-3 h-3 bg-gray-200 rounded-full"></span>
<span className="text-gray-400 font-sans" style={{}}>Mobile test</span>
</div>
</div>
<div className="flex items-center justify-between mt-3">
<div className="flex -space-x-2">
<img alt="" className="w-7 h-7 rounded-full border-2 border-white object-cover" src="/assets/2a59325f-6c7c-497d-be59-b73f7bbb9e60_320w.jpg" />
<img alt="" className="w-7 h-7 rounded-full border-2 border-white object-cover" src="/assets/1ef2b9e6-728c-4b89-845c-b9052fb25ec8_320w.jpg" />
</div>
<div className="flex items-center gap-3 text-gray-400 text-xs font-sans" style={{}}>
<svg className="lucide lucide-message-circle w-4 h-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>15
                <svg className="lucide lucide-paperclip w-4 h-4" data-lucide="paperclip" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path></svg>3
              </div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 ios-nav py-2">
<div className="flex justify-around items-center px-6">
<button className="flex flex-col items-center group">
<div className="h-10 w-10 flex group-hover:bg-gray-300 transition-all duration-150 rounded-xl items-center justify-center">
<svg className="lucide lucide-home w-5 h-5 text-gray-600" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
</div>
<span className="text-[11px] text-gray-500 mt-1 font-sans" style={{}}>Home</span>
</button>
<button className="flex flex-col items-center group">
<div className="h-10 w-10 flex items-center justify-center rounded-xl bg-blue-500/90 group-hover:bg-blue-400/90 transition-all duration-150 shadow-sm">
<svg className="lucide lucide-folder w-5 h-5 text-white" data-lucide="folder" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg>
</div>
<span className="text-[11px] text-blue-600 font-medium mt-1 font-sans">Projects</span>
</button>
<button className="flex flex-col items-center group">
<div className="h-10 w-10 flex group-hover:bg-gray-300 transition-all duration-150 rounded-xl items-center justify-center">
<svg className="lucide lucide-users w-5 h-5 text-gray-600" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<span className="text-[11px] text-gray-500 mt-1 font-sans" style={{}}>Team</span>
</button>
<button className="flex flex-col items-center group">
<div className="h-10 w-10 flex group-hover:bg-gray-300 transition-all duration-150 rounded-xl items-center justify-center">
<svg className="lucide lucide-calendar w-5 h-5 text-gray-600" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</div>
<span className="text-[11px] text-gray-500 mt-1 font-sans" style={{}}>Calendar</span>
</button>
</div>
<div className="flex justify-center mt-1">
<div className="w-24 h-1.5 rounded-full bg-gray-300/50"></div>
</div>
</div>
</div>
</div>




    </>
  );
}
