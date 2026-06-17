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



    function updateClock() {
      const now = new Date();
      document.getElementById('clock').textContent = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
    }
    setInterval(updateClock, 1000);
    updateClock();
  
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
      
<div className="relative w-[390px] max-w-full h-[844px] bg-gradient-to-b from-[#181830] to-[#0a0a17] shadow-xl rounded-[40px] overflow-hidden border-4 border-[#171731] flex flex-col mx-auto">

<div className="absolute left-1/2 -top-1.5 -translate-x-1/2 z-10 flex items-center justify-center" style={{height: '44px'}}>
<div className="w-24 h-4 bg-black/80 rounded-b-3xl mt-2"></div>
</div>
<div className="flex-1 flex flex-col">

<div className="flex justify-between items-center p-2 text-xs mt-2">
<span id="clock">9:41</span>
<div className="flex space-x-1">
<i className="fas fa-signal"></i>
<i className="fas fa-wifi"></i>
<i className="fas fa-battery-three-quarters"></i>
</div>
</div>

<header className="px-6 py-4">
<div className="flex justify-between items-center">
<h1 className="text-2xl font-bold">Statistics</h1>
<button className="h-8 w-8 flex items-center justify-center rounded-full bg-[#1e1e3a]">
<i className="fas fa-calendar-alt text-sm"></i>
</button>
</div>
</header>

<div className="px-6 mb-4">
<div className="flex bg-[#1e1e3a] rounded-xl p-1.5">
<button className="flex-1 py-2 rounded-lg text-gray-400 font-medium text-sm">Week</button>
<button className="flex-1 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium text-sm">Month</button>
<button className="flex-1 py-2 rounded-lg text-gray-400 font-medium text-sm">Year</button>
<button className="flex-1 py-2 rounded-lg text-gray-400 font-medium text-sm">All</button>
</div>
</div>

<main className="px-6 pb-20 flex-1 overflow-y-auto hide-scrollbar">

<div className="bg-[#1e1e3a] rounded-2xl p-5 shadow-lg mb-6">
<div className="flex justify-between items-center mb-5">
<h3 className="font-bold">Monthly Overview</h3>
<span className="text-xs text-purple-400">May 2023</span>
</div>

<div className="h-[180px] relative mb-4">

<div className="absolute bottom-0 left-0 right-0 flex justify-between items-end h-[140px]">

<div className="flex flex-col items-center">
<div className="w-6 bg-gradient-to-t from-purple-500 to-pink-500 rounded-t-md" style={{height: '40px'}}></div>
<span className="text-xs mt-2 text-gray-400">Mon</span>
</div>
<div className="flex flex-col items-center">
<div className="w-6 bg-gradient-to-t from-purple-500 to-pink-500 rounded-t-md" style={{height: '70px'}}></div>
<span className="text-xs mt-2 text-gray-400">Tue</span>
</div>
<div className="flex flex-col items-center">
<div className="w-6 bg-gradient-to-t from-purple-500 to-pink-500 rounded-t-md" style={{height: '90px'}}></div>
<span className="text-xs mt-2 text-gray-400">Wed</span>
</div>
<div className="flex flex-col items-center">
<div className="w-6 bg-gradient-to-t from-purple-500 to-pink-500 rounded-t-md" style={{height: '50px'}}></div>
<span className="text-xs mt-2 text-gray-400">Thu</span>
</div>
<div className="flex flex-col items-center">
<div className="w-6 bg-gradient-to-t from-purple-500 to-pink-500 rounded-t-md" style={{height: '110px'}}></div>
<span className="text-xs mt-2 text-gray-400">Fri</span>
</div>
<div className="flex flex-col items-center">
<div className="w-6 bg-gradient-to-t from-purple-500 to-pink-500 rounded-t-md" style={{height: '80px'}}></div>
<span className="text-xs mt-2 text-gray-400">Sat</span>
</div>
<div className="flex flex-col items-center">
<div className="w-6 bg-gradient-to-t from-purple-500 to-pink-500 rounded-t-md opacity-60" style={{height: '30px'}}></div>
<span className="text-xs mt-2 text-gray-400">Sun</span>
</div>
</div>

<div className="absolute left-0 right-0 top-0 h-[140px] flex flex-col justify-between">
<div className="border-b border-gray-700/50 w-full h-0"></div>
<div className="border-b border-gray-700/50 w-full h-0"></div>
<div className="border-b border-gray-700/50 w-full h-0"></div>
<div className="border-b border-gray-700/50 w-full h-0"></div>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="bg-[#151530] rounded-xl p-3">
<div className="text-xs text-gray-400 mb-1">Income</div>
<div className="font-bold">$3,540</div>
<div className="flex items-center text-green-400 text-xs mt-1">
<i className="fas fa-arrow-up mr-1"></i>
<span>+12.6%</span>
</div>
</div>
<div className="bg-[#151530] rounded-xl p-3">
<div className="text-xs text-gray-400 mb-1">Expenses</div>
<div className="font-bold">$2,238</div>
<div className="flex items-center text-red-400 text-xs mt-1">
<i className="fas fa-arrow-up mr-1"></i>
<span>+3.1%</span>
</div>
</div>
</div>
</div>

<div className="bg-[#1e1e3a] rounded-2xl p-5 shadow-lg mb-6">
<div className="flex justify-between items-center mb-5">
<h3 className="font-bold">Spending Breakdown</h3>
<button className="text-xs text-purple-400">See All</button>
</div>

<div className="flex mb-5">
<div className="w-24 h-24 relative mr-5">

<svg className="w-full h-full" viewbox="0 0 36 36">
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#444" strokeWidth="3"></path>
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 13.7898 7.9577" fill="none" stroke="#9333ea" stroke-dasharray="25, 100" strokeWidth="3"></path>
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 13.7898 7.9577 a 15.9155 15.9155 0 0 1 -2.7779 15.7894" fill="none" stroke="#ec4899" stroke-dasharray="35, 100" stroke-dashoffset="25" strokeWidth="3"></path>
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 13.7898 7.9577 a 15.9155 15.9155 0 0 1 -2.7779 15.7894 a 15.9155 15.9155 0 0 1 -15.7894 2.7779" fill="none" stroke="#3b82f6" stroke-dasharray="25, 100" stroke-dashoffset="60" strokeWidth="3"></path>
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 13.7898 7.9577 a 15.9155 15.9155 0 0 1 -2.7779 15.7894 a 15.9155 15.9155 0 0 1 -15.7894 2.7779 a 15.9155 15.9155 0 0 1 -7.9577 -13.7898" fill="none" stroke="#10b981" stroke-dasharray="15, 100" stroke-dashoffset="85" strokeWidth="3"></path>
</svg>
<div className="absolute inset-0 flex items-center justify-center flex-col">
<span className="text-xs text-gray-400">Total</span>
<span className="font-bold">$2,238</span>
</div>
</div>
<div className="flex-1">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center">
<div className="w-3 h-3 rounded-sm bg-purple-500 mr-2"></div>
<span className="text-sm">Shopping</span>
</div>
<div className="text-sm font-medium">$783</div>
</div>
<div className="flex items-center justify-between mb-2">
<div className="flex items-center">
<div className="w-3 h-3 rounded-sm bg-pink-500 mr-2"></div>
<span className="text-sm">Food</span>
</div>
<div className="text-sm font-medium">$695</div>
</div>
<div className="flex items-center justify-between mb-2">
<div className="flex items-center">
<div className="w-3 h-3 rounded-sm bg-blue-500 mr-2"></div>
<span className="text-sm">Transport</span>
</div>
<div className="text-sm font-medium">$492</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center">
<div className="w-3 h-3 rounded-sm bg-green-500 mr-2"></div>
<span className="text-sm">Others</span>
</div>
<div className="text-sm font-medium">$268</div>
</div>
</div>
</div>
</div>

<div className="mb-6">
<div className="flex justify-between items-center mb-4">
<h3 className="font-bold">Top Spending</h3>
<button className="text-xs text-purple-400">View All</button>
</div>

<div className="bg-[#1e1e3a] rounded-2xl p-4 shadow-lg mb-3">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
<i className="fas fa-shopping-bag text-purple-400"></i>
</div>
<div>
<p className="font-medium">Shopping</p>
<p className="text-xs text-gray-400">15 transactions</p>
</div>
</div>
<div className="text-right">
<p className="font-bold">$783</p>
<p className="text-xs text-gray-400">35%</p>
</div>
</div>
</div>

<div className="bg-[#1e1e3a] rounded-2xl p-4 shadow-lg mb-3">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center mr-3">
<i className="fas fa-utensils text-pink-400"></i>
</div>
<div>
<p className="font-medium">Food</p>
<p className="text-xs text-gray-400">28 transactions</p>
</div>
</div>
<div className="text-right">
<p className="font-bold">$695</p>
<p className="text-xs text-gray-400">31%</p>
</div>
</div>
</div>

<div className="bg-[#1e1e3a] rounded-2xl p-4 shadow-lg">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
<i className="fas fa-car text-blue-400"></i>
</div>
<div>
<p className="font-medium">Transport</p>
<p className="text-xs text-gray-400">12 transactions</p>
</div>
</div>
<div className="text-right">
<p className="font-bold">$492</p>
<p className="text-xs text-gray-400">22%</p>
</div>
</div>
</div>
</div>
</main>
</div>

<nav className="absolute bottom-0 left-0 right-0 bg-[#151530]/90 rounded-t-3xl py-4 px-6 backdrop-blur-sm" style={{zIndex: '20'}}>
<div className="flex justify-between items-center">
<div className="nav-item flex flex-col items-center cursor-pointer">
<i className="fas fa-dollar-sign text-gray-400"></i>
<span className="text-xs text-gray-400 mt-1">Finance</span>
</div>
<div className="nav-item flex flex-col items-center cursor-pointer">
<i className="fas fa-wallet text-gray-400"></i>
<span className="text-xs text-gray-400 mt-1">Wallet</span>
</div>
<div className="relative -mt-8">
<button className="w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center shadow-lg shadow-pink-500/20">
<i className="fas fa-plus text-white text-xl"></i>
</button>
</div>
<div className="nav-item flex flex-col items-center active cursor-pointer">
<i className="fas fa-chart-pie text-purple-500"></i>
<span className="text-xs text-purple-500 mt-1">Stats</span>
<div className="w-1 h-1 bg-purple-500 rounded-full mt-1"></div>
</div>
<div className="nav-item flex flex-col items-center cursor-pointer">
<i className="fas fa-ellipsis-h text-gray-400"></i>
<span className="text-xs text-gray-400 mt-1">More</span>
</div>
</div>
</nav>
</div>

<style>
    .hide-scrollbar::-webkit-scrollbar { display:none;}
    .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none;}
  </style>

    </>
  );
}
