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
      
<nav className="bg-white shadow-md p-4 flex items-center justify-between">
<div className="flex items-center">
<div className="bg-blue-600 rounded-full h-10 w-10 flex items-center justify-center mr-2">
<span className="text-white text-xl font-bold">BA</span>
</div>
<span className="font-semibold text-xl text-gray-800">Your Bank</span>
</div>
<div>
<span className="text-gray-700 mr-4">Hello, Jane!</span>
<a className="text-blue-600 hover:underline mr-4" href="/profile">Settings</a>
<a className="text-red-500 hover:underline" href="/logout">Logout</a>
</div>
</nav>
<main className="max-w-6xl mx-auto pt-8 px-4">
<h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
<div className="bg-white rounded-xl shadow-md p-6 flex flex-col">
<div className="text-gray-500 mb-2">Checking Account</div>
<div className="text-3xl font-bold text-gray-900 mb-1">$5,200.75</div>
<div className="text-sm text-gray-400">**** 1234</div>
</div>
<div className="bg-white rounded-xl shadow-md p-6 flex flex-col">
<div className="text-gray-500 mb-2">Savings Account</div>
<div className="text-3xl font-bold text-gray-900 mb-1">$15,800.00</div>
<div className="text-sm text-gray-400">**** 5678</div>
</div>
<div className="bg-white rounded-xl shadow-md p-6 flex flex-col">
<div className="text-gray-500 mb-2">Credit Card</div>
<div className="text-3xl font-bold text-gray-900 mb-1">$1,150.50</div>
<div className="text-xs text-red-500 mb-1">Balance Due</div>
<div className="text-sm text-gray-400">**** 9012</div>
</div>
</div>

<div className="bg-white rounded-xl shadow-md p-6 mb-8">
<div className="flex justify-between items-center mb-4">
<h2 className="text-lg font-semibold text-gray-800">Recent Transactions</h2>
<a className="text-blue-600 hover:underline text-sm" href="/transactions">View all</a>
</div>
<div className="overflow-x-auto">
<table className="min-w-full">
<thead>
<tr>
<th className="text-left text-gray-500 text-sm font-medium pb-2">Date</th>
<th className="text-left text-gray-500 text-sm font-medium pb-2">Description</th>
<th className="text-right text-gray-500 text-sm font-medium pb-2">Amount</th>
</tr>
</thead>
<tbody>
<tr className="border-b">
<td className="py-2 text-gray-700">06/11/2024</td>
<td className="py-2 text-gray-700">Grocery Store</td>
<td className="py-2 text-right text-red-500">- $84.99</td>
</tr>
<tr className="border-b">
<td className="py-2 text-gray-700">06/10/2024</td>
<td className="py-2 text-gray-700">Paycheck Deposit</td>
<td className="py-2 text-right text-green-500">+ $1,500.00</td>
</tr>
<tr className="border-b">
<td className="py-2 text-gray-700">06/09/2024</td>
<td className="py-2 text-gray-700">Coffee Shop</td>
<td className="py-2 text-right text-red-500">- $5.75</td>
</tr>
<tr>
<td className="py-2 text-gray-700">06/08/2024</td>
<td className="py-2 text-gray-700">Electricity Bill</td>
<td className="py-2 text-right text-red-500">- $120.00</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
<div className="bg-blue-50 rounded-xl p-5 flex flex-col items-center">
<div className="text-blue-600 text-2xl font-bold mb-1">3</div>
<div className="text-gray-700 text-sm">Accounts</div>
</div>
<div className="bg-green-50 rounded-xl p-5 flex flex-col items-center">
<div className="text-green-600 text-2xl font-bold mb-1">8</div>
<div className="text-gray-700 text-sm">Transactions this week</div>
</div>
<div className="bg-yellow-50 rounded-xl p-5 flex flex-col items-center">
<div className="text-yellow-600 text-2xl font-bold mb-1">2</div>
<div className="text-gray-700 text-sm">Upcoming Bills</div>
</div>
</div>
</main>
<footer className="text-center text-xs text-gray-400 my-4">
    © 2024 Your Bank. All rights reserved.
  </footer>

    </>
  );
}
