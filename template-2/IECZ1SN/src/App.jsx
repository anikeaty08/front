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
      
<div className="relative w-[402px] h-[874px] bg-black rounded-[2.5rem] shadow-2xl border-8 border-gray-200 flex flex-col items-center overflow-hidden">

<div className="absolute top-0 left-0 w-full z-50">

<div className="relative h-8">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-gray-200 rounded-b-3xl z-30"></div>

<div className="absolute top-2 left-1/2 -translate-x-1/2 flex items-center space-x-2 z-40">
<span className="block w-14 h-1 bg-gray-400 rounded-full"></span>
<span className="block w-2 h-2 bg-gray-400 rounded-full"></span>
</div>

<div className="relative flex items-center justify-between px-5 h-8 z-50 text-xs text-white font-semibold tracking-wide pointer-events-none bg-gradient-to-r from-[#23243a] to-[#181926]">
<span>9:41</span>
<div className="flex items-center space-x-1">
<svg className="lucide lucide-wifi w-4 h-4" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
<svg className="lucide lucide-battery-full w-6 h-4" data-lucide="battery-full" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
</div>
</div>
</div>
</div>

<div className="h-8 w-full"></div>

<div className="w-full bg-gradient-to-r from-[#23243a] to-[#181926]">
<div className="flex items-center px-6 h-14 border-b border-[#334155]/40 z-40">
<svg className="lucide lucide-menu w-6 h-6 text-gray-300 mr-4" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
<div className="ml-auto flex items-center gap-3">
<svg className="lucide lucide-search w-6 h-6 text-gray-400 hover:text-white cursor-pointer" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
<svg className="lucide lucide-bell w-6 h-6 text-gray-400 hover:text-white cursor-pointer" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
<img alt="user" className="w-8 h-8 rounded-full border-2 border-[#334155]/40 object-cover ml-2" src="https://randomuser.me/api/portraits/men/32.jpg" />
</div>
</div>
</div>

<div className="relative flex-1 w-full flex flex-col overflow-hidden">

<div className="flex-1 w-full overflow-y-auto pt-4 pb-28 px-4 bg-gradient-to-br from-[#181926] via-[#23243a] to-[#22223e] relative">

<div className="mb-5 w-full animate-slide-fade delay-1">
<h2 className="text-base font-semibold text-[#e6e7ee] text-left mb-1">Welcome, Alex</h2>
<p className="text-sm text-gray-400 max-w-xs text-left">Track all your bills & subscriptions in one sleek dashboard. Stay organized and never miss a payment again.</p>
</div>

<div className="overflow-x-auto scrollbar-none">
<div className="flex space-x-2 pl-4 pb-4 pt-2 min-w-max w-fit animate-slide-fade delay-1">
<button className="bg-[#23243a] ring-2 ring-[#60a5fa]/30 whitespace-nowrap font-semibold text-[#60a5fa] rounded-full pt-2 pr-4 pb-2 pl-4 shadow-md">Dashboard</button>
<button className="px-4 py-2 rounded-full bg-[#23243a] text-gray-300 font-medium hover:text-[#34d399] whitespace-nowrap">Bills</button>
<button className="px-4 py-2 rounded-full bg-[#23243a] text-gray-300 font-medium hover:text-[#fbbf24] whitespace-nowrap">Subscriptions</button>
<button className="px-4 py-2 rounded-full bg-[#23243a] text-gray-300 font-medium hover:text-[#f472b6] whitespace-nowrap">Analytics</button>
</div>
</div>

<div className="flex flex-col space-y-8 w-full">

<div className="relative w-full min-h-[16rem] rounded-2xl shadow-xl bg-gradient-to-br from-[#2563eb] via-[#23243a] to-[#1e293b] hover:shadow-2xl transition-all duration-300 flex flex-col animate-slide-fade delay-1">
<div className="flex-1 pt-6 pb-3 px-6 flex flex-col items-center text-center">
<svg className="lucide lucide-calendar-days w-12 h-12 mb-3 text-[#60a5fa] drop-shadow-lg" data-lucide="calendar-days" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
<h3 className="text-white font-bold text-lg mb-1">Upcoming Bills</h3>
<p className="text-gray-200 text-sm mb-3">You have <span className="font-bold text-white">3 bills</span> due this week. Don’t forget to pay on time!</p>
<div className="w-full mt-auto text-left space-y-2">
<div className="flex justify-between items-center">
<span className="text-gray-100 font-medium text-sm flex items-center">
<span className="w-2 h-2 bg-[#60a5fa] rounded-full mr-2"></span>Netflix
                  </span>
<span className="text-gray-400 text-xs">Due: Jun 7</span>
<span className="text-[#60a5fa] font-semibold">$15.99</span>
</div>
<div className="flex justify-between items-center">
<span className="text-gray-100 font-medium text-sm flex items-center">
<span className="w-2 h-2 bg-[#34d399] rounded-full mr-2"></span>Spotify
                  </span>
<span className="text-gray-400 text-xs">Due: Jun 8</span>
<span className="text-[#34d399] font-semibold">$9.99</span>
</div>
<div className="flex justify-between items-center">
<span className="text-gray-100 font-medium text-sm flex items-center">
<span className="w-2 h-2 bg-[#fbbf24] rounded-full mr-2"></span>Electricity
                  </span>
<span className="text-gray-400 text-xs">Due: Jun 10</span>
<span className="text-[#fbbf24] font-semibold">$60.00</span>
</div>
</div>
<a className="mt-5 block w-full bg-[#334155]/70 text-white rounded-lg px-5 py-2 text-sm font-semibold tracking-wide hover:bg-[#60a5fa] hover:text-[#22223e] transition-colors ring-1 ring-[#60a5fa]/30" href="#">View All Bills</a>
</div>
</div>

<div className="relative w-full min-h-[16rem] rounded-2xl shadow-xl bg-gradient-to-br from-[#14b8a6] via-[#23243a] to-[#1e293b] hover:shadow-2xl transition-all duration-300 flex flex-col animate-slide-fade delay-2">
<div className="flex-1 pt-6 pb-3 px-6 flex flex-col items-center text-center">
<svg className="lucide lucide-credit-card w-12 h-12 mb-3 text-[#34d399] drop-shadow-lg" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
<h3 className="text-white font-bold text-lg mb-1">Active Subscriptions</h3>
<p className="text-gray-200 text-sm mb-3">You are tracking <span className="font-bold text-white">7 subscriptions</span>. Keep tabs on auto-renewals.</p>
<div className="w-full mt-auto">
<div className="flex flex-wrap gap-2 justify-center">
<span className="bg-[#23243a] text-[#60a5fa] px-3 py-1 rounded-full text-xs font-semibold">Netflix</span>
<span className="bg-[#164e35] text-[#34d399] px-3 py-1 rounded-full text-xs font-semibold">Spotify</span>
<span className="bg-[#f59e42]/10 text-[#fbbf24] px-3 py-1 rounded-full text-xs font-semibold">Amazon Prime</span>
<span className="bg-[#312e81] text-[#a78bfa] px-3 py-1 rounded-full text-xs font-semibold">Disney+</span>
</div>
</div>
<a className="mt-5 block w-full bg-[#334155]/70 text-white rounded-lg px-5 py-2 text-sm font-semibold tracking-wide hover:bg-[#34d399] hover:text-[#181926] transition-colors ring-1 ring-[#34d399]/30" href="#">Manage Subscriptions</a>
</div>
</div>

<div className="relative w-full min-h-[16rem] rounded-2xl shadow-xl bg-gradient-to-br from-[#f43f5e] via-[#23243a] to-[#1e293b] hover:shadow-2xl transition-all duration-300 flex flex-col animate-slide-fade delay-3">
<div className="flex-1 pt-6 pb-3 px-6 flex flex-col items-center text-center">
<svg className="lucide lucide-bar-chart-3 w-12 h-12 mb-3 text-[#f472b6] drop-shadow-lg" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
<h3 className="text-white font-bold text-lg mb-1">Spending Analytics</h3>
<p className="text-gray-200 text-sm mb-3">This month: <span className="text-[#f472b6] font-bold">$145.98</span> spent on subscriptions & bills.</p>
<div className="w-full mt-auto">
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="text-gray-300 text-xs">Subscriptions</span>
<span className="font-semibold text-[#60a5fa]">$55.97</span>
</div>
<div className="flex items-center justify-between">
<span className="text-gray-300 text-xs">Bills</span>
<span className="font-semibold text-[#fbbf24]">$90.01</span>
</div>
</div>
<div className="relative w-full h-2 bg-[#334155]/70 rounded-full mt-4 overflow-hidden">
<div className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-[#60a5fa] via-[#f472b6] to-[#fbbf24]" style={{width: `70%`}}></div>
</div>
</div>
<a className="mt-5 block w-full bg-[#334155]/70 text-white rounded-lg px-5 py-2 text-sm font-semibold tracking-wide hover:bg-[#f472b6] hover:text-[#22223e] transition-colors ring-1 ring-[#f472b6]/30" href="#">View Analytics</a>
</div>
</div>
</div>
</div>

<div className="absolute left-0 bottom-0 w-full flex flex-col items-center pb-4">

<nav className="w-[92%] max-w-[370px] h-16 bg-[#181926] shadow-2xl flex justify-around items-center border-[#334155]/40 border rounded-2xl">

<button className="flex flex-col items-center space-y-1 focus:outline-none">
<span className="relative">
<svg className="lucide lucide-home w-6 h-6 text-[#60a5fa]" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
<span className="absolute -top-2 -right-2 w-2.5 h-2.5 bg-[#60a5fa] rounded-full ring-2 ring-[#181926]"></span>
</span>
<span className="text-xs font-semibold text-[#60a5fa]">Home</span>
</button>

<button className="flex flex-col items-center space-y-1 focus:outline-none">
<svg className="lucide lucide-file-text w-6 h-6 text-gray-400 group-hover:text-[#fbbf24]" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
<span className="text-xs text-gray-400 font-medium">Bills</span>
</button>

<button className="flex flex-col items-center space-y-1 focus:outline-none">
<svg className="lucide lucide-repeat w-6 h-6 text-gray-400 group-hover:text-[#34d399]" data-lucide="repeat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
<span className="text-xs text-gray-400 font-medium">Subs</span>
</button>

<button className="flex flex-col items-center space-y-1 focus:outline-none">
<svg className="lucide lucide-settings w-6 h-6 text-gray-400 group-hover:text-[#f472b6]" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
<span className="text-xs text-gray-400 font-medium">Settings</span>
</button>
</nav>

<div className="mt-2 flex justify-center">
<div className="w-20 h-2 rounded-full bg-gray-400/40"></div>
</div>
</div>
</div>
</div>


    </>
  );
}
