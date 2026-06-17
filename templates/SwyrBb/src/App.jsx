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



    // Simple particle effect
    const container = document.getElementById('particles');
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      const size = Math.random() * 2 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.opacity = `${Math.random() * 0.5 + 0.1}`;
      container.appendChild(particle);
    }
  
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
      
<div className="fixed inset-0 pointer-events-none" id="particles"></div>
<div className="flex flex-col min-h-screen">

<aside className="fixed inset-y-0 left-0 w-16 md:w-64 bg-indigo-950/40 border-r border-indigo-800/40 backdrop-blur-sm z-20 transition-all duration-300">
<div className="flex flex-col h-full p-4">
<div className="flex items-center mb-8">
<div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center">
<span className="text-white font-bold">N</span>
</div>
<span className="ml-2 text-white font-bold text-xl hidden md:block">Nebula</span>
</div>
<nav className="flex-1 space-y-2">
<a className="flex items-center py-2 px-3 text-white bg-indigo-800/50 rounded-lg" href="#">
<svg className="w-5 h-5 md:mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="hidden md:block">Dashboard</span>
</a>
<a className="flex items-center py-2 px-3 text-gray-300 hover:bg-indigo-800/30 rounded-lg" href="#">
<svg className="w-5 h-5 md:mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="hidden md:block">Accounts</span>
</a>
<a className="flex items-center py-2 px-3 text-gray-300 hover:bg-indigo-800/30 rounded-lg" href="#">
<svg className="w-5 h-5 md:mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="hidden md:block">Transactions</span>
</a>
<a className="flex items-center py-2 px-3 text-gray-300 hover:bg-indigo-800/30 rounded-lg" href="#">
<svg className="w-5 h-5 md:mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="hidden md:block">Analytics</span>
</a>
<a className="flex items-center py-2 px-3 text-gray-300 hover:bg-indigo-800/30 rounded-lg" href="#">
<svg className="w-5 h-5 md:mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="hidden md:block">Settings</span>
</a>
</nav>
<div className="mt-auto pt-4 hidden md:block">
<div className="p-4 bg-indigo-900/30 rounded-lg">
<p className="text-sm text-gray-300 mb-3">Premium Plan</p>
<div className="w-full bg-indigo-950/50 rounded-full h-2">
<div className="bg-gradient-to-r from-purple-500 to-indigo-600 h-2 rounded-full w-3/4"></div>
</div>
<p className="text-xs text-gray-400 mt-2">75% completed</p>
</div>
</div>
</div>
</aside>

<main className="ml-16 md:ml-64 flex-1">

<header className="h-16 bg-indigo-950/40 border-b border-indigo-800/40 backdrop-blur-sm flex items-center justify-between px-6">
<h1 className="text-xl font-bold text-white">Dashboard</h1>
<div className="flex items-center space-x-4">
<button className="p-2 rounded-lg bg-indigo-900/50 text-gray-300">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white">A</div>
</div>
</header>

<div className="p-6">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-indigo-900/30 rounded-xl p-6 border border-indigo-800/40 card-glow transition-all duration-300">
<div className="flex justify-between items-center mb-6">
<h2 className="text-xl font-bold text-white">Account Balance</h2>
<div className="text-sm text-gray-400">Last updated: Today, 10:30 AM</div>
</div>
<div className="flex items-baseline mb-8">
<span className="text-4xl font-bold text-white">$24,156.00</span>
<span className="ml-2 text-green-400 text-sm">+2.3%</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="bg-indigo-800/30 p-4 rounded-lg">
<div className="text-gray-400 text-sm">Income</div>
<div className="text-green-400 text-xl font-bold">$9,482.00</div>
</div>
<div className="bg-indigo-800/30 p-4 rounded-lg">
<div className="text-gray-400 text-sm">Expenses</div>
<div className="text-red-400 text-xl font-bold">$5,361.00</div>
</div>
<div className="bg-indigo-800/30 p-4 rounded-lg">
<div className="text-gray-400 text-sm">Savings</div>
<div className="text-blue-400 text-xl font-bold">$4,125.00</div>
</div>
</div>
</div>

<div className="bg-indigo-900/30 rounded-xl p-6 border border-indigo-800/40 card-glow transition-all duration-300">
<h2 className="text-xl font-bold text-white mb-6">Quick Actions</h2>
<div className="space-y-4">
<button className="w-full flex items-center justify-between p-3 bg-indigo-800/30 rounded-lg hover:bg-indigo-800/50 transition">
<span className="flex items-center text-white">
<svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  Add Money
                </span>
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="w-full flex items-center justify-between p-3 bg-indigo-800/30 rounded-lg hover:bg-indigo-800/50 transition">
<span className="flex items-center text-white">
<svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  Transfer
                </span>
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="w-full flex items-center justify-between p-3 bg-indigo-800/30 rounded-lg hover:bg-indigo-800/50 transition">
<span className="flex items-center text-white">
<svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  Pay Bills
                </span>
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>

<div className="bg-indigo-900/30 rounded-xl p-6 border border-indigo-800/40 card-glow transition-all duration-300">
<h2 className="text-xl font-bold text-white mb-6">Upcoming Payments</h2>
<div className="space-y-4">
<div className="flex justify-between items-center p-3 bg-indigo-800/30 rounded-lg">
<div>
<div className="text-white">Netflix</div>
<div className="text-gray-400 text-sm">May 23, 2023</div>
</div>
<div className="text-red-400">-$12.99</div>
</div>
<div className="flex justify-between items-center p-3 bg-indigo-800/30 rounded-lg">
<div>
<div className="text-white">Electric Bill</div>
<div className="text-gray-400 text-sm">May 25, 2023</div>
</div>
<div className="text-red-400">-$85.00</div>
</div>
<div className="flex justify-between items-center p-3 bg-indigo-800/30 rounded-lg">
<div>
<div className="text-white">Gym Membership</div>
<div className="text-gray-400 text-sm">May 28, 2023</div>
</div>
<div className="text-red-400">-$45.00</div>
</div>
</div>
</div>

<div className="lg:col-span-2 bg-indigo-900/30 rounded-xl p-6 border border-indigo-800/40 card-glow transition-all duration-300">
<div className="flex justify-between items-center mb-6">
<h2 className="text-xl font-bold text-white">Recent Transactions</h2>
<button className="text-purple-400 text-sm">View All</button>
</div>
<div className="overflow-x-auto">
<table className="w-full">
<thead>
<tr className="text-left text-gray-400 text-sm">
<th className="pb-3">Date</th>
<th className="pb-3">Description</th>
<th className="pb-3">Category</th>
<th className="pb-3 text-right">Amount</th>
</tr>
</thead>
<tbody className="text-white">
<tr className="border-b border-indigo-800/30">
<td className="py-3">May 20</td>
<td>Coffee Shop</td>
<td>
<span className="px-2 py-1 text-xs bg-purple-800/50 text-purple-300 rounded-full">Food</span>
</td>
<td className="text-right text-red-400">-$4.50</td>
</tr>
<tr className="border-b border-indigo-800/30">
<td className="py-3">May 19</td>
<td>Salary Deposit</td>
<td>
<span className="px-2 py-1 text-xs bg-green-800/50 text-green-300 rounded-full">Income</span>
</td>
<td className="text-right text-green-400">+$2,750.00</td>
</tr>
<tr className="border-b border-indigo-800/30">
<td className="py-3">May 18</td>
<td>Grocery Store</td>
<td>
<span className="px-2 py-1 text-xs bg-yellow-800/50 text-yellow-300 rounded-full">Shopping</span>
</td>
<td className="text-right text-red-400">-$65.38</td>
</tr>
<tr className="border-b border-indigo-800/30">
<td className="py-3">May 17</td>
<td>Electric Bill</td>
<td>
<span className="px-2 py-1 text-xs bg-blue-800/50 text-blue-300 rounded-full">Utilities</span>
</td>
<td className="text-right text-red-400">-$85.00</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="bg-indigo-900/30 rounded-xl p-6 border border-indigo-800/40 card-glow transition-all duration-300">
<h2 className="text-xl font-bold text-white mb-6">Savings Goals</h2>
<div className="space-y-6">
<div>
<div className="flex justify-between mb-2">
<span className="text-white">Vacation</span>
<span className="text-gray-400">$2,400 / $5,000</span>
</div>
<div className="w-full bg-indigo-950/50 rounded-full h-2">
<div className="bg-gradient-to-r from-purple-500 to-indigo-600 h-2 rounded-full w-2/5"></div>
</div>
</div>
<div>
<div className="flex justify-between mb-2">
<span className="text-white">New Car</span>
<span className="text-gray-400">$12,000 / $25,000</span>
</div>
<div className="w-full bg-indigo-950/50 rounded-full h-2">
<div className="bg-gradient-to-r from-purple-500 to-indigo-600 h-2 rounded-full w-1/2"></div>
</div>
</div>
<div>
<div className="flex justify-between mb-2">
<span className="text-white">Emergency Fund</span>
<span className="text-gray-400">$8,500 / $10,000</span>
</div>
<div className="w-full bg-indigo-950/50 rounded-full h-2">
<div className="bg-gradient-to-r from-purple-500 to-indigo-600 h-2 rounded-full w-4/5"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
