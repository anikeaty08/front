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
      document.getElementById('clock').textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
    setInterval(updateClock, 1000); updateClock();
  
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
      
<div className="relative w-[375px] h-[812px] rounded-[54px] bg-white overflow-hidden shadow-2xl border-8 border-gray-100">

<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[126px] h-[34px] bg-black rounded-b-[18px] z-20"></div>

<div className="pt-9 px-6 pb-1 flex justify-between items-center text-xs">
<span className="font-medium text-gray-500" id="clock">9:41</span>
<div className="flex space-x-1 text-gray-600">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><rect height="6" rx="2" strokeWidth="1.5" width="16" x="4" y="9"></rect></svg>
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><circle cx="12" cy="12" r="2" strokeWidth="1.5"></circle></svg>
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><rect height="10" rx="2" strokeWidth="1.5" width="18" x="3" y="7"></rect></svg>
</div>
</div>

<header className="px-6 py-2 flex justify-between items-center">
<h1 className="text-2xl font-bold text-gray-900">Finance</h1>
<div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
<svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M21 15v3a2 2 0 01-2 2H5a2 2 0 01-2-2v-3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M7 10v4m5-4v4m5-4v4M7 6h10a2 2 0 012 2v2H5V8a2 2 0 012-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
</header>

<main className="px-6 pb-24">
<div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-6 mb-7 shadow-lg mt-2">
<div className="flex justify-between items-center mb-3">
<div>
<div className="text-xs text-white/80">Your Balance</div>
<div className="text-2xl font-bold text-white">$12,340.00</div>
</div>
<button className="bg-white/30 hover:bg-white/40 px-4 py-1.5 text-xs text-white rounded-full transition" onclick="alert('Balance Details')">Details</button>
</div>
<div className="flex items-center space-x-8 mt-3">
<div>
<div className="text-xs text-white/70">Income</div>
<div className="font-bold text-white">$6,250</div>
</div>
<div>
<div className="text-xs text-white/70">Expenses</div>
<div className="font-bold text-white">$4,210</div>
</div>
</div>
</div>

<div className="mb-8">
<div className="flex justify-between items-center mb-3">
<h3 className="font-bold text-gray-900 text-base">Your Cards</h3>
<button className="text-xs text-purple-600 font-medium" onclick="alert('Show all cards')">See All</button>
</div>
<div className="space-y-4">
<div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl p-5 flex items-center text-white shadow cursor-pointer" onclick="alert('Card details')">
<div className="flex-1">
<div className="font-bold text-lg mb-1">**** 8273</div>
<div className="text-xs text-blue-100 flex items-center space-x-2">
<span>Visa</span>
<span className="inline-block w-1.5 h-1.5 rounded-full bg-white"></span>
<span>Exp 09/26</span>
</div>
</div>
<div className="text-right">
<div className="font-bold text-white">$5,700</div>
<div className="text-xs text-blue-100">Main</div>
</div>
</div>
<div className="bg-white rounded-xl p-5 flex items-center shadow border border-gray-100 cursor-pointer" onclick="alert('Card details')">
<div className="flex-1">
<div className="font-bold text-lg text-gray-800 mb-1">**** 1309</div>
<div className="text-xs text-gray-500 flex items-center space-x-2">
<span>Mastercard</span>
<span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-300"></span>
<span>Exp 01/25</span>
</div>
</div>
<div className="text-right">
<div className="font-bold text-gray-800">$1,900</div>
<div className="text-xs text-gray-500">Travel</div>
</div>
</div>
</div>
</div>

<div>
<div className="flex justify-between items-center mb-3">
<h3 className="font-bold text-gray-900 text-base">Recent Transactions</h3>
<button className="text-xs text-purple-600 font-medium" onclick="alert('Show all transactions')">See All</button>
</div>
<div className="space-y-3">
<div className="flex items-center bg-white rounded-xl shadow px-4 py-3 cursor-pointer transition hover:bg-purple-50" onclick="alert('Groceries')">
<div className="w-11 h-11 rounded-full bg-blue-500/10 flex items-center justify-center mr-3">
<svg className="h-5 w-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M3 6h18M3 6v12c0 1.104.896 2 2 2h14c1.104 0 2-.896 2-2V6"></path><rect height="6" rx="2" width="8" x="8" y="10"></rect></svg>
</div>
<div className="flex-1">
<div className="font-semibold text-gray-800">Groceries Store</div>
<div className="text-xs text-gray-500">Today • 9:42AM</div>
</div>
<div className="text-right">
<div className="text-base font-bold text-gray-800">- $94.00</div>
</div>
</div>
<div className="flex items-center bg-white rounded-xl shadow px-4 py-3 cursor-pointer transition hover:bg-purple-50" onclick="alert('Netflix')">
<div className="w-11 h-11 rounded-full bg-pink-500/10 flex items-center justify-center mr-3">
<svg className="h-5 w-5 text-pink-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><circle cx="12" cy="8" r="4"></circle><path d="M2 20c0-3.5 4.2-6 10-6s10 2.5 10 6"></path></svg>
</div>
<div className="flex-1">
<div className="font-semibold text-gray-800">Netflix</div>
<div className="text-xs text-gray-500">Yesterday • 8:10PM</div>
</div>
<div className="text-right">
<div className="text-base font-bold text-gray-800">- $15.99</div>
</div>
</div>
<div className="flex items-center bg-white rounded-xl shadow px-4 py-3 cursor-pointer transition hover:bg-purple-50" onclick="alert('Salary')">
<div className="w-11 h-11 rounded-full bg-green-500/10 flex items-center justify-center mr-3">
<svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><rect height="7" rx="2" width="18" x="3" y="11"></rect><circle cx="7.5" cy="18.5" r="1.5"></circle><circle cx="16.5" cy="18.5" r="1.5"></circle></svg>
</div>
<div className="flex-1">
<div className="font-semibold text-gray-800">Salary</div>
<div className="text-xs text-gray-500">May 30 • 10:00AM</div>
</div>
<div className="text-right">
<div className="text-base font-bold text-green-600">+ $2,000.00</div>
</div>
</div>
</div>
</div>
</main>

<div className="absolute bottom-0 left-0 right-0 h-20 bg-white border-t border-gray-100 flex items-center justify-around px-6 z-10">
<div className="flex flex-col items-center cursor-pointer">
<svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M3 10.5V6.75A2.25 2.25 0 015.25 4.5h13.5A2.25 2.25 0 0121 6.75v3.75m-18 0v6.75A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 17.25V10.5m-18 0h18" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span className="text-xs font-bold text-purple-600 mt-1">Finance</span>
<div className="w-1 h-1 bg-purple-600 rounded-full mt-1"></div>
</div>
<div className="flex flex-col items-center cursor-pointer" onclick="alert('Go to Wallet')">
<svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><rect height="14" rx="4" width="20" x="2" y="5"></rect><path d="M6 5v-2a2 2 0 012-2h8a2 2 0 012 2v2" strokeLinecap="round"></path></svg>
<span className="text-xs font-medium text-gray-400 mt-1">Wallet</span>
</div>
<div className="flex flex-col items-center z-10">
<div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center -mt-8 shadow cursor-pointer" onclick="alert('Add new entry');">
<svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 6v12m6-6H6" strokeLinecap="round"></path></svg>
</div>
</div>
<div className="flex flex-col items-center cursor-pointer" onclick="alert('Go to Stats')">
<svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M3 13.5h2.25V21M9.75 17.25V21M16.5 12V21M21 7.5v13.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span className="text-xs font-medium text-gray-400 mt-1">Stats</span>
</div>
<div className="flex flex-col items-center cursor-pointer" onclick="alert('Go to More')">
<svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><circle cx="6" cy="12" r="1.5"></circle><circle cx="12" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
<span className="text-xs font-medium text-gray-400 mt-1">More</span>
</div>
</div>
</div>


    </>
  );
}
