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
      
<div className="w-[380px] h-[800px] bg-gradient-to-b from-[#22224b] to-[#111127] rounded-[44px] shadow-2xl border-[8px] border-[#22224b] overflow-hidden relative">

<div className="h-[32px] flex justify-between items-center px-5">
<span className="text-white/80 font-semibold text-xs mt-2">9:41</span>
<div className="flex gap-1 items-center mt-2">
<i className="fas fa-signal text-white/70"></i>
<i className="fas fa-wifi text-white/70"></i>
<i className="fas fa-battery-three-quarters text-white/70"></i>
</div>
</div>

<div className="px-7 pt-3 flex justify-between items-center">
<h1 className="text-white text-xl font-bold">Finance</h1>
<button className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10">
<i className="fas fa-bell text-white/80 text-base"></i>
</button>
</div>

<div className="px-7 pt-4">
<div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl shadow-xl p-5">
<div className="flex justify-between items-center">
<div>
<p className="text-white/60 text-xs font-medium">Total Balance</p>
<div className="text-3xl font-extrabold mt-1">$19,978.89</div>
</div>
<button className="bg-white/20 text-xs text-white px-3 py-1 rounded-full font-semibold border border-white/10">View Details</button>
</div>

<div className="h-16 mt-2 flex items-end gap-1">
<div className="w-2 bg-white/30 rounded-t-full" style={{height: '28px'}}></div>
<div className="w-2 bg-white/50 rounded-t-full" style={{height: '39px'}}></div>
<div className="w-2 bg-white/30 rounded-t-full" style={{height: '33px'}}></div>
<div className="w-2 bg-white/80 rounded-t-full" style={{height: '59px'}}></div>
<div className="w-2 bg-white/50 rounded-t-full" style={{height: '42px'}}></div>
<div className="w-2 bg-white rounded-t-full" style={{height: '65px'}}></div>
</div>
</div>
</div>

<div className="px-7 pt-5 flex gap-4">
<div className="flex-1 bg-[#232355] rounded-2xl p-4 flex flex-col shadow">
<div className="flex items-center mb-1">
<span className="w-8 h-8 rounded-full bg-green-500/20 mr-2 flex items-center justify-center"><i className="fas fa-arrow-down text-green-400 text-sm"></i></span>
<span className="text-gray-400 text-xs">Income</span>
</div>
<span className="text-white font-bold text-xl">$3,450.80</span>
<div className="text-xs flex items-center mt-1 text-green-400"><i className="fas fa-arrow-up mr-1"></i>+12.5%</div>
</div>
<div className="flex-1 bg-[#232355] rounded-2xl p-4 flex flex-col shadow">
<div className="flex items-center mb-1">
<span className="w-8 h-8 rounded-full bg-red-500/20 mr-2 flex items-center justify-center"><i className="fas fa-arrow-up text-red-400 text-sm"></i></span>
<span className="text-gray-400 text-xs">Expenses</span>
</div>
<span className="text-white font-bold text-xl">$2,165.32</span>
<div className="text-xs flex items-center mt-1 text-red-400"><i className="fas fa-arrow-down mr-1"></i>-8.3%</div>
</div>
</div>

<div className="px-7 pt-6">
<div className="flex justify-between items-center mb-3">
<span className="text-white font-bold">Financial Goals</span>
<button className="text-xs text-purple-300">Add New</button>
</div>
<div className="space-y-3">
<div className="bg-[#232355] rounded-xl p-4 flex flex-col mb-1">
<div className="flex justify-between items-center mb-2">
<div className="flex items-center">
<span className="w-9 h-9 bg-blue-400/20 rounded-full flex justify-center items-center mr-3">
<i className="fas fa-home text-blue-300"></i>
</span>
<div>
<div className="text-white font-medium text-sm">New House</div>
<div className="text-xs text-gray-400">$200,000 goal</div>
</div>
</div>
<span className="text-white text-xs font-bold">$45,500</span>
</div>
<div className="w-full h-2 bg-white/10 rounded-full">
<div className="h-2 bg-blue-400 rounded-full" style={{width: '23%'}}></div>
</div>
<span className="text-xs text-gray-400 pt-1">22.75% completed</span>
</div>
<div className="bg-[#232355] rounded-xl p-4 flex flex-col">
<div className="flex justify-between items-center mb-2">
<div className="flex items-center">
<span className="w-9 h-9 bg-purple-400/20 rounded-full flex justify-center items-center mr-3">
<i className="fas fa-plane text-purple-300"></i>
</span>
<div>
<div className="text-white font-medium text-sm">Vacation</div>
<div className="text-xs text-gray-400">$5,000 goal</div>
</div>
</div>
<span className="text-white text-xs font-bold">$3,750</span>
</div>
<div className="w-full h-2 bg-white/10 rounded-full">
<div className="h-2 bg-purple-400 rounded-full" style={{width: '75%'}}></div>
</div>
<span className="text-xs text-gray-400 pt-1">75% completed</span>
</div>
</div>
</div>

<div className="px-7 pt-6 pb-28">
<div className="flex justify-between items-center mb-3">
<span className="text-white font-bold">Recent Transactions</span>
<button className="text-xs text-purple-300">View All</button>
</div>
<div className="space-y-2">
<div className="bg-[#232355] rounded-xl p-3 flex items-center justify-between">
<div className="flex items-center">
<span className="w-8 h-8 bg-blue-300/20 rounded-full flex items-center justify-center mr-3">
<i className="fas fa-shopping-bag text-blue-400"></i>
</span>
<div>
<div className="text-white text-sm font-medium">Grocery Store</div>
<div className="text-xs text-gray-400">Today, 14:32</div>
</div>
</div>
<span className="text-red-400 font-bold">-$84.23</span>
</div>
<div className="bg-[#232355] rounded-xl p-3 flex items-center justify-between">
<div className="flex items-center">
<span className="w-8 h-8 bg-green-300/20 rounded-full flex items-center justify-center mr-3">
<i className="fas fa-building text-green-400"></i>
</span>
<div>
<div className="text-white text-sm font-medium">Salary Deposit</div>
<div className="text-xs text-gray-400">Today, 09:15</div>
</div>
</div>
<span className="text-green-400 font-bold">+$2,450.00</span>
</div>
<div className="bg-[#232355] rounded-xl p-3 flex items-center justify-between">
<div className="flex items-center">
<span className="w-8 h-8 bg-purple-300/20 rounded-full flex items-center justify-center mr-3">
<i className="fas fa-bolt text-purple-300"></i>
</span>
<div>
<div className="text-white text-sm font-medium">Electric Bill</div>
<div className="text-xs text-gray-400">Yesterday, 18:45</div>
</div>
</div>
<span className="text-red-400 font-bold">-$145.80</span>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full px-5 pb-5">
<div className="flex bg-[#232355]/90 backdrop-blur-md rounded-2xl px-4 py-3 justify-between items-end shadow-xl">
<div className="flex flex-col items-center w-12">
<i className="fas fa-dollar-sign text-xl text-purple-400"></i>
<span className="text-xxs mt-1 text-purple-400">Finance</span>
<div className="w-1 h-1 rounded-full bg-purple-400 mt-1"></div>
</div>
<div className="flex flex-col items-center w-12">
<i className="fas fa-wallet text-xl text-gray-400"></i>
<span className="text-xxs mt-1 text-gray-400">Wallet</span>
</div>
<div className="relative -mt-8">
<button className="w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center shadow-lg shadow-pink-500/20 border-4 border-[#22224b]">
<i className="fas fa-plus text-white text-2xl"></i>
</button>
</div>
<div className="flex flex-col items-center w-12">
<i className="fas fa-chart-pie text-xl text-gray-400"></i>
<span className="text-xxs mt-1 text-gray-400">Stats</span>
</div>
<div className="flex flex-col items-center w-12">
<i className="fas fa-ellipsis-h text-xl text-gray-400"></i>
<span className="text-xxs mt-1 text-gray-400">More</span>
</div>
</div>
</div>

<div className="absolute bottom-2 left-[50%] -translate-x-1/2 w-28 h-1.5 bg-white/20 rounded-full"></div>
</div>

    </>
  );
}
