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
      
<div className="relative w-[390px] max-w-full h-[844px] bg-gradient-to-b from-[#ffffff] to-[#f0f2f5] shadow-xl rounded-[40px] overflow-hidden border-4 border-[#e1e4e8] flex flex-col mx-auto">

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
<h1 className="text-2xl font-bold">Wallet</h1>
<button className="h-8 w-8 flex items-center justify-center rounded-full bg-[#eaecf0]">
<i className="fas fa-cog text-sm"></i>
</button>
</div>
</header>

<main className="px-4 pb-20 flex-1 overflow-y-auto hide-scrollbar">

<div>
<h3 className="font-semibold mb-3">My Cards</h3>
<div className="space-y-4 mb-6">

<div className="bg-gradient-to-r from-indigo-600 to-blue-400 rounded-2xl p-5 shadow-lg text-white">
<div className="flex justify-between items-center">
<span className="text-xs uppercase tracking-widest">Personal</span>
<i className="fab fa-cc-visa text-2xl"></i>
</div>
<div className="mt-7 mb-3 text-xl font-semibold tracking-wider">**** 1234</div>
<div className="flex justify-between items-end">
<div>
<div className="text-xs opacity-70">Card Holder</div>
<div className="font-bold">Your Name</div>
</div>
<div className="text-right">
<div className="text-xs opacity-70">Balance</div>
<div className="font-bold text-lg">$6,854.34</div>
</div>
</div>
</div>

<div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-5 shadow-lg text-white">
<div className="flex justify-between items-center">
<span className="text-xs uppercase tracking-widest">Business</span>
<i className="fab fa-cc-mastercard text-2xl"></i>
</div>
<div className="mt-7 mb-3 text-xl font-semibold tracking-wider">**** 5678</div>
<div className="flex justify-between items-end">
<div>
<div className="text-xs opacity-70">Card Holder</div>
<div className="font-bold">Your Name</div>
</div>
<div className="text-right">
<div className="text-xs opacity-70">Balance</div>
<div className="font-bold text-lg">$12,220.11</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex justify-between gap-3 mb-6">
<button className="flex-1 bg-[#eaecf0] rounded-xl py-3 flex flex-col items-center text-sm shadow">
<i className="fas fa-arrow-down text-blue-500 mb-1"></i> Receive
          </button>
<button className="flex-1 bg-[#eaecf0] rounded-xl py-3 flex flex-col items-center text-sm shadow">
<i className="fas fa-arrow-up text-purple-500 mb-1"></i> Send
          </button>
<button className="flex-1 bg-[#eaecf0] rounded-xl py-3 flex flex-col items-center text-sm shadow">
<i className="fas fa-exchange-alt text-green-500 mb-1"></i> Exchange
          </button>
</div>

<div>
<div className="flex justify-between items-center mb-4">
<h3 className="font-bold">Recent Activity</h3>
<button className="text-xs text-purple-600">View All</button>
</div>
<div className="space-y-3">

<div className="bg-[#eaecf0] rounded-2xl p-4 shadow-lg flex items-center justify-between">
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
<i className="fas fa-arrow-down text-blue-500"></i>
</div>
<div>
<p className="font-medium">Received</p>
<p className="text-xs text-gray-500">From Alex • 17:50</p>
</div>
</div>
<p className="font-bold text-green-600">+$200.00</p>
</div>

<div className="bg-[#eaecf0] rounded-2xl p-4 shadow-lg flex items-center justify-between">
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
<i className="fas fa-arrow-up text-purple-500"></i>
</div>
<div>
<p className="font-medium">Sent</p>
<p className="text-xs text-gray-500">To Taylor • 15:32</p>
</div>
</div>
<p className="font-bold text-red-500">-$78.50</p>
</div>

<div className="bg-[#eaecf0] rounded-2xl p-4 shadow-lg flex items-center justify-between">
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
<i className="fas fa-exchange-alt text-green-500"></i>
</div>
<div>
<p className="font-medium">Exchange</p>
<p className="text-xs text-gray-500">USD to EUR • 13:12</p>
</div>
</div>
<p className="font-bold text-amber-600">-$150.00</p>
</div>
</div>
</div>
</main>
</div>

<nav className="absolute bottom-0 left-0 right-0 bg-[#ffffff]/90 rounded-t-3xl py-4 px-6 backdrop-blur-sm border-t border-gray-200" style={{zIndex: '20'}}>
<div className="flex justify-between items-center">
<div className="nav-item flex flex-col items-center cursor-pointer">
<i className="fas fa-dollar-sign text-gray-400"></i>
<span className="text-xs text-gray-400 mt-1">Finance</span>
</div>
<div className="nav-item flex flex-col items-center active cursor-pointer">
<i className="fas fa-wallet text-purple-600"></i>
<span className="text-xs text-purple-600 mt-1">Wallet</span>
<div className="w-1 h-1 bg-purple-600 rounded-full mt-1"></div>
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

<style>
    .hide-scrollbar::-webkit-scrollbar { display:none;}
    .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none;}
  </style>

    </>
  );
}
