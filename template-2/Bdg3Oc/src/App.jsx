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

<div className="absolute left-1/2 -top-1.5 -translate-x-1/2 z-10 flex items-center justify-center" style={{height: `44px`}}>
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
<h1 className="text-2xl font-bold">Finance</h1>
<button className="h-8 w-8 flex items-center justify-center rounded-full bg-[#1e1e3a]">
<i className="fas fa-bell text-sm"></i>
</button>
</div>
</header>

<main className="px-4 pb-20 flex-1 overflow-y-auto hide-scrollbar">

<div className="bg-[#1e1e3a] rounded-2xl p-5 shadow-lg mb-6">
<div className="flex justify-between items-center mb-4">
<h3 className="font-bold">Total Balance</h3>
<button className="text-xs text-purple-400">View Details</button>
</div>
<div className="text-3xl font-bold mb-2">$19,074.45</div>
<div className="flex items-center text-green-400 text-sm mb-4">
<i className="fas fa-arrow-up mr-1"></i>
<span>+2.4% from last month</span>
</div>
<div className="flex justify-between gap-3">
<div className="flex-1 bg-[#151530] rounded-xl p-3 flex flex-col items-center">
<div className="text-xs text-gray-400 mb-1">Income</div>
<div className="font-bold">$3,240</div>
</div>
<div className="flex-1 bg-[#151530] rounded-xl p-3 flex flex-col items-center">
<div className="text-xs text-gray-400 mb-1">Expenses</div>
<div className="font-bold">$1,798</div>
</div>
</div>
</div>

<div className="mb-6">
<div className="flex justify-between items-center mb-4">
<h3 className="font-bold">Monthly Budget</h3>
<button className="text-xs text-purple-400">Manage</button>
</div>

<div className="bg-[#1e1e3a] rounded-2xl p-4 shadow-lg mb-3">
<div className="flex justify-between items-center mb-2">
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
<i className="fas fa-home text-blue-400"></i>
</div>
<div>
<p className="font-medium">Housing</p>
<p className="text-xs text-gray-400">$1,200 / $1,500</p>
</div>
</div>
<p className="font-bold">80%</p>
</div>
<div className="w-full h-2 bg-[#151530] rounded-full overflow-hidden">
<div className="h-full bg-blue-400 rounded-full" style={{width: `80%`}}></div>
</div>
</div>

<div className="bg-[#1e1e3a] rounded-2xl p-4 shadow-lg mb-3">
<div className="flex justify-between items-center mb-2">
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
<i className="fas fa-utensils text-green-400"></i>
</div>
<div>
<p className="font-medium">Food</p>
<p className="text-xs text-gray-400">$350 / $500</p>
</div>
</div>
<p className="font-bold">70%</p>
</div>
<div className="w-full h-2 bg-[#151530] rounded-full overflow-hidden">
<div className="h-full bg-green-400 rounded-full" style={{width: `70%`}}></div>
</div>
</div>

<div className="bg-[#1e1e3a] rounded-2xl p-4 shadow-lg">
<div className="flex justify-between items-center mb-2">
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
<i className="fas fa-car text-purple-400"></i>
</div>
<div>
<p className="font-medium">Transportation</p>
<p className="text-xs text-gray-400">$248 / $300</p>
</div>
</div>
<p className="font-bold">83%</p>
</div>
<div className="w-full h-2 bg-[#151530] rounded-full overflow-hidden">
<div className="h-full bg-purple-400 rounded-full" style={{width: `83%`}}></div>
</div>
</div>
</div>

<div>
<div className="flex justify-between items-center mb-4">
<h3 className="font-bold">Upcoming Bills</h3>
<button className="text-xs text-purple-400">View All</button>
</div>

<div className="bg-[#1e1e3a] rounded-2xl p-4 shadow-lg flex items-center justify-between mb-3">
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center mr-3">
<i className="fas fa-bolt text-red-400"></i>
</div>
<div>
<p className="font-medium">Electricity</p>
<p className="text-xs text-gray-400">Due in 3 days</p>
</div>
</div>
<div className="text-right">
<p className="font-bold">$84.20</p>
<button className="text-xs text-purple-400">Pay Now</button>
</div>
</div>

<div className="bg-[#1e1e3a] rounded-2xl p-4 shadow-lg flex items-center justify-between mb-3">
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
<i className="fas fa-wifi text-blue-400"></i>
</div>
<div>
<p className="font-medium">Internet</p>
<p className="text-xs text-gray-400">Due in 7 days</p>
</div>
</div>
<div className="text-right">
<p className="font-bold">$59.99</p>
<button className="text-xs text-purple-400">Pay Now</button>
</div>
</div>

<div className="bg-[#1e1e3a] rounded-2xl p-4 shadow-lg flex items-center justify-between">
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center mr-3">
<i className="fas fa-mobile-alt text-yellow-400"></i>
</div>
<div>
<p className="font-medium">Phone</p>
<p className="text-xs text-gray-400">Due in 12 days</p>
</div>
</div>
<div className="text-right">
<p className="font-bold">$45.00</p>
<button className="text-xs text-purple-400">Pay Now</button>
</div>
</div>
</div>
</main>
</div>

<nav className="absolute bottom-0 left-0 right-0 bg-[#151530]/90 rounded-t-3xl py-4 px-6 backdrop-blur-sm" style={{zIndex: `20`}}>
<div className="flex justify-between items-center">
<div className="nav-item flex flex-col items-center active cursor-pointer">
<i className="fas fa-dollar-sign text-purple-500"></i>
<span className="text-xs text-purple-500 mt-1">Finance</span>
<div className="w-1 h-1 bg-purple-500 rounded-full mt-1"></div>
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
<div className="nav-item flex flex-col items-center cursor-pointer">
<i className="fas fa-chart-pie text-gray-400"></i>
<span className="text-xs text-gray-400 mt-1">Stats</span>
</div>
<div className="nav-item flex flex-col items-center cursor-pointer">
<i className="fas fa-ellipsis-h text-gray-400"></i>
<span className="text-xs text-gray-400 mt-1">More</span>
</div>
</div>
</nav>
</div>



    </>
  );
}
