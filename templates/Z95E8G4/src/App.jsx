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



    window.addEventListener("DOMContentLoaded", () => {
      document.querySelectorAll('.animate-slide-fade').forEach(el => {
        el.style.opacity = 1;
      });
    });
  
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
      
<div className="relative flex items-center justify-center">

<div className="absolute pointer-events-none z-40" style={{width: '430px', height: '900px'}}>
<div className="w-full h-full rounded-[2.7rem] border-[8px] border-gray-200/90 shadow-2xl ring-4 ring-blue-400/30"></div>
</div>

<div className="relative" style={{width: '402px', height: '874px', zIndex: '50'}}>
<div className="w-full h-full bg-black rounded-[2.5rem] shadow-xl border-8 border-gray-900 flex flex-col overflow-hidden relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-gray-900 rounded-b-3xl z-30"></div>

<div className="absolute top-0 left-0 w-full h-8 flex items-center justify-between px-4 pt-2 z-40 text-[13px] text-white font-semibold select-none" style={{fontVariantNumeric: 'tabular-nums'}}>
<span className="tracking-wide">9:41</span>
<div className="flex items-center space-x-2">
<svg className="w-5 h-5" fill="none" viewbox="0 0 20 20">
<g>
<rect fill="#fff" height="5" opacity="0.4" rx="1" width="2" x="2" y="13"></rect>
<rect fill="#fff" height="8" opacity="0.6" rx="1" width="2" x="5" y="10"></rect>
<rect fill="#fff" height="11" opacity="0.7" rx="1" width="2" x="8" y="7"></rect>
<rect fill="#fff" height="14" rx="1" width="2" x="11" y="4"></rect>
<rect fill="#fff" height="17" rx="1" width="2" x="14" y="1"></rect>
</g>
</svg>
<svg className="w-5 h-5" fill="none" viewbox="0 0 20 20">
<path d="M3.5 8.5C7.5 5.5 12.5 5.5 16.5 8.5" stroke="#fff" strokeLinecap="round" strokeWidth="1.3"></path>
<path d="M6 11C9 9 11 9 14 11" stroke="#fff" strokeLinecap="round" strokeWidth="1.3"></path>
<path d="M8.5 13.5C9.5 12.5 10.5 12.5 11.5 13.5" stroke="#fff" strokeLinecap="round" strokeWidth="1.3"></path>
<circle cx="10" cy="16" fill="#fff" r="1"></circle>
</svg>
<svg className="w-7 h-5" fill="none" viewbox="0 0 28 13">
<rect fill="#222" height="9" rx="3" stroke="#fff" strokeWidth="1.4" width="24" x="1" y="2"></rect>
<rect fill="#fff" height="5" rx="2" width="20" x="3" y="4"></rect>
<rect fill="#fff" height="3" rx="1" width="2" x="25.5" y="5"></rect>
</svg>
</div>
</div>

<div className="absolute top-2 left-1/2 -translate-x-1/2 flex items-center space-x-2 z-30 pointer-events-none">
<span className="block w-14 h-1 bg-gray-600 rounded-full"></span>
<span className="block w-2 h-2 bg-gray-600 rounded-full"></span>
</div>

<div className="absolute top-7 left-0 w-full z-40 flex items-center justify-between px-4 h-12 bg-[#181926]/80 backdrop-blur-sm">
<button aria-label="Back" className="flex items-center text-[#6ea8ff] font-semibold text-lg focus:outline-none">
<svg className="h-6 w-6 mr-1" fill="none" stroke="currentColor" strokeWidth="2.4" viewbox="0 0 24 24">
<path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
<span className="text-white font-semibold text-lg tracking-tight">Home</span>
<div className="flex items-center">
<img alt="Profile" className="w-8 h-8 rounded-full border-2 border-[#6ea8ff] shadow-sm object-cover" src="https://randomuser.me/api/portraits/men/32.jpg"/>
</div>
</div>

<div className="flex-1 w-full overflow-y-auto pt-20 pb-24 px-4 bg-[#181926] relative z-10">
<section className="flex flex-col items-center w-full">

<div className="mb-7 text-center w-full">
<h2 className="text-2xl font-extrabold text-[#e6e7ee] text-left mb-2">Welcome, Alex!</h2>
<p className="text-base text-gray-400 text-left">Track your bills &amp; subscriptions in one place. Stay organized and never miss a payment again.</p>
</div>

<div className="flex flex-col space-y-8 w-full">

<div className="relative w-full min-h-[16rem] rounded-xl shadow-xl bg-gradient-to-br from-blue-700/70 via-[#23243a] to-[#181926] opacity-95 hover:opacity-100 transition-opacity duration-200 flex flex-col animate-slide-fade delay-0 border border-blue-400/40">
<div className="flex-1 pt-6 pb-3 px-6 flex flex-col items-center text-center">
<svg className="w-12 h-12 mb-3 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<rect height="18" rx="4" stroke="currentColor" strokeWidth="2" width="18" x="3" y="4"></rect>
<path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="2"></path>
</svg>
<h3 className="text-white font-semibold text-lg mb-1">Upcoming Bills</h3>
<p className="text-gray-300 text-sm mb-3">You have <span className="font-bold text-white">3 bills</span> due this week. Don't forget to pay on time!</p>
<div className="w-full mt-auto text-left space-y-2">
<div className="flex justify-between items-center">
<span className="text-gray-200 font-medium text-sm flex items-center">
<span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>Netflix
                      </span>
<span className="text-gray-400 text-xs">Due: Jun 7</span>
<span className="text-blue-400 font-semibold">$15.99</span>
</div>
<div className="flex justify-between items-center">
<span className="text-gray-200 font-medium text-sm flex items-center">
<span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>Spotify
                      </span>
<span className="text-gray-400 text-xs">Due: Jun 8</span>
<span className="text-blue-400 font-semibold">$9.99</span>
</div>
<div className="flex justify-between items-center">
<span className="text-gray-200 font-medium-sm flex items-center">
<span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>Electricity
                      </span>
<span className="text-gray-400 text-xs">Due: Jun 10</span>
<span className="text-blue-400 font-semibold">$60.00</span>
</div>
</div>
<a className="mt-4 block w-full bg-[#23243a] text-white rounded px-5 py-2 text-xs font-semibold hover:bg-blue-400 hover:text-[#181926] transition-colors" href="#">View All Bills</a>
</div>
</div>

<div className="relative w-full min-h-[16rem] rounded-xl shadow-xl bg-gradient-to-br from-green-600/70 via-[#23243a] to-[#181926] opacity-95 hover:opacity-100 transition-opacity duration-200 flex flex-col animate-slide-fade delay-1 border border-green-400/40">
<div className="flex-1 pt-6 pb-3 px-6 flex flex-col items-center text-center">
<svg className="w-12 h-12 mb-3 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<rect height="14" rx="2" stroke="currentColor" strokeWidth="2" width="20" x="2" y="5"></rect>
<path d="M2 10h20" stroke="currentColor" strokeWidth="2"></path>
</svg>
<h3 className="text-white font-semibold text-lg mb-1">Active Subscriptions</h3>
<p className="text-gray-300 text-sm mb-3">You are tracking <span className="font-bold text-white">7 subscriptions</span>. Keep tabs on auto-renewals.</p>
<div className="w-full mt-auto">
<div className="flex flex-wrap gap-2 justify-center">
<span className="bg-[#1c3c2a] text-green-400 px-3 py-1 rounded-full text-xs font-semibold">Netflix</span>
<span className="bg-[#1c3c2a] text-green-400 px-3 py-1 rounded-full text-xs font-semibold">Spotify</span>
<span className="bg-[#1c3c2a] text-green-400 px-3 py-1 rounded-full text-xs font-semibold">Amazon Prime</span>
<span className="bg-[#1c3c2a] text-green-400 px-3 py-1 rounded-full text-xs font-semibold">Disney+</span>
</div>
</div>
<a className="mt-4 block w-full bg-[#23243a] text-white rounded px-5 py-2 text-xs font-semibold hover:bg-green-400 hover:text-[#181926] transition-colors" href="#">Manage Subscriptions</a>
</div>
</div>

<div className="relative w-full min-h-[16rem] rounded-xl shadow-xl bg-gradient-to-br from-yellow-400/70 via-[#23243a] to-[#181926] opacity-95 hover:opacity-100 transition-opacity duration-200 flex flex-col animate-slide-fade delay-2 border border-yellow-300/40">
<div className="flex-1 pt-6 pb-3 px-6 flex flex-col items-center text-center">
<svg className="w-12 h-12 mb-3 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<rect height="8" rx="2" stroke="currentColor" strokeWidth="2" width="4" x="3" y="12"></rect>
<rect height="12" rx="2" stroke="currentColor" strokeWidth="2" width="4" x="10" y="8"></rect>
<rect height="16" rx="2" stroke="currentColor" strokeWidth="2" width="4" x="17" y="4"></rect>
</svg>
<h3 className="text-white font-semibold text-lg mb-1">Analytics</h3>
<p className="text-gray-300 text-sm mb-3">This month: <span className="text-yellow-400 font-bold">$145.98</span> spent on subscriptions &amp; bills.</p>
<div className="w-full mt-auto">
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="text-gray-300 text-xs">Subscriptions</span>
<span className="font-semibold text-yellow-400">$55.97</span>
</div>
<div className="flex items-center justify-between">
<span className="text-gray-300 text-xs">Bills</span>
<span className="font-semibold text-yellow-400">$90.01</span>
</div>
</div>
<div className="relative w-full h-2 bg-[#36384c] rounded-full mt-4 overflow-hidden">
<div className="absolute left-0 top-0 h-full rounded-full bg-yellow-400" style={{width: '70%'}}></div>
</div>
</div>
<a className="mt-4 block w-full bg-[#23243a] text-white rounded px-5 py-2 text-xs font-semibold hover:bg-yellow-400 hover:text-[#181926] transition-colors" href="#">View Analytics</a>
</div>
</div>
</div>
</section>
</div>

<nav className="absolute bottom-0 left-0 w-full h-20 bg-[#181926] flex justify-around items-center border-t border-gray-800 z-40">

<button className="flex flex-col items-center focus:outline-none group">
<svg className="mb-1 transition-colors group-hover:text-blue-400 text-blue-400" fill="none" height="16" stroke="currentColor" strokeWidth="2.2" viewbox="0 0 24 24" width="16">
<path d="M3 12l9-9 9 9M4 10v10a2 2 0 002 2h2m8 0h2a2 2 0 002-2V10" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="text-xs text-blue-400 font-semibold group-hover:text-blue-300">Home</span>
</button>
<button className="flex flex-col items-center focus:outline-none group">
<svg className="mb-1 transition-colors text-green-400 group-hover:text-green-300" fill="none" height="16" stroke="currentColor" strokeWidth="2.2" viewbox="0 0 24 24" width="16">
<rect height="14" rx="2" stroke="currentColor" strokeWidth="2" width="20" x="2" y="5"></rect>
<path d="M2 10h20" stroke="currentColor" strokeWidth="2"></path>
</svg>
<span className="text-xs text-green-400 font-semibold group-hover:text-green-300">Subs</span>
</button>
<button className="flex flex-col items-center focus:outline-none group">
<svg className="mb-1 transition-colors text-yellow-400 group-hover:text-yellow-300" fill="none" height="16" stroke="currentColor" strokeWidth="2.2" viewbox="0 0 24 24" width="16">
<rect height="8" rx="2" stroke="currentColor" strokeWidth="2" width="4" x="3" y="12"></rect>
<rect height="12" rx="2" stroke="currentColor" strokeWidth="2" width="4" x="10" y="8"></rect>
<rect height="16" rx="2" stroke="currentColor" strokeWidth="2" width="4" x="17" y="4"></rect>
</svg>
<span className="text-xs text-yellow-400 font-semibold group-hover:text-yellow-300">Analytics</span>
</button>
<button className="flex flex-col items-center focus:outline-none group">
<svg className="mb-1 transition-colors text-gray-200 group-hover:text-blue-300" fill="none" height="16" stroke="currentColor" strokeWidth="2.2" viewbox="0 0 24 24" width="16">
<circle cx="12" cy="8" r="4"></circle>
<path d="M6 20c0-2.2 3.6-3.5 6-3.5s6 1.3 6 3.5"></path>
</svg>
<span className="text-xs text-gray-200 font-semibold group-hover:text-blue-300">Profile</span>
</button>
</nav>

<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-gray-600 rounded-full z-50"></div>
</div>
</div>
</div>


    </>
  );
}
