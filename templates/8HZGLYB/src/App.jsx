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
      

<div className="grid-bg">
<svg fill="none" height="100%" style={{width: '100vw', height: '100vh', position: 'fixed', top: '0', left: '0', zIndex: '0', display: 'block'}} viewbox="0 0 1920 1080" width="100%" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="4" id="tinyGrid" patternunits="userSpaceOnUse" width="4">
<path d="M 4 0 L 0 0 0 4" fill="none" stroke="#2a2a32" stroke-opacity="0.15" strokeWidth="0.5"></path>
</pattern>
<pattern height="32" id="mainGrid" patternunits="userSpaceOnUse" width="32">
<rect fill="url(#tinyGrid)" height="32" width="32"></rect>
<path d="M 32 0 L 0 0 0 32" fill="none" stroke="#3a3a42" stroke-opacity="0.17" strokeWidth="1"></path>
</pattern>
</defs>
<rect fill="url(#mainGrid)" height="100%" width="100%"></rect>
</svg>
</div>
<div className="overflow-hidden py-24 sm:py-32 bg-transparent relative z-10">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 mx-auto">

<div className="lg:pt-4 lg:pr-8 flex items-center scale-90 animate-slide-fade-left animation-delay-0">
<div className="lg:max-w-lg">
<p className="sm:text-5xl text-4xl font-semibold text-pretty tracking-tight mt-2 scale-100 text-green-400">Subscription and Spending Tracker</p>
<p className="text-lg/8 mt-6">Stay on top of your recurring expenses and daily spending. Get real insights, spot trends, and save money with ease—all in one dashboard.</p>
<dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-300 lg:max-w-none">
<div className="relative pl-12 animate-slide-fade-up animation-delay-1 flex items-start">
<div className="absolute left-0 top-0 flex items-center h-8 w-8">
<span className="flex items-center justify-center h-8 w-8 rounded-full bg-green-500 text-white font-bold text-lg shadow">
                    1
                  </span>
</div>
<div>
<dt className="inline font-semibold text-white">Never miss a payment.</dt>
<dd className="inline"> Get timely reminders before your subscriptions renew so you’re never caught off guard.</dd>
</div>
</div>
<div className="relative pl-12 animate-slide-fade-up animation-delay-2 flex items-start">
<div className="absolute left-0 top-0 flex items-center h-8 w-8">
<span className="flex items-center justify-center h-8 w-8 rounded-full bg-green-500 text-white font-bold text-lg shadow">
                    2
                  </span>
</div>
<div>
<dt className="inline font-semibold text-white">Visualize your spending.</dt>
<dd className="inline"> Interactive charts and timelines help you understand where your money goes each month.</dd>
</div>
</div>
<div className="relative pl-12 animate-slide-fade-up animation-delay-3 flex items-start">
<div className="absolute left-0 top-0 flex items-center h-8 w-8">
<span className="flex items-center justify-center h-8 w-8 rounded-full bg-green-500 text-white font-bold text-lg shadow">
                    3
                  </span>
</div>
<div>
<dt className="inline font-semibold text-white">Cancel unused subscriptions.</dt>
<dd className="inline"> Identify recurring charges you no longer use and cancel with a click.</dd>
</div>
</div>
</dl>
</div>
</div>

<div className="w-full animate-slide-fade-right animation-delay-1">
<div className="overflow-hidden bg-[#18181b] border-[#23232c] border rounded-lg shadow-xl scale-105">
<div className="bg-[#18181b] px-4 py-2 flex items-center border-b border-[#23232c]">
<div className="flex mr-4">
<div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
</div>
<div className="flex-1 bg-[#23232c] rounded-md flex items-center px-3 py-1 text-sm text-gray-400">
<svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="">https://app.spendingtracker.com/dashboard</span>
</div>
</div>
<div className="flex h-[540px]">
<div className="w-44 sm:w-56 bg-[#18181b] border-r border-[#23232c] flex flex-col animate-slide-fade-left animation-delay-2">
<div className="p-4 border-b border-[#23232c]">
<h1 className="text-lg font-medium text-white">Tracker Menu</h1>
</div>
<nav className="flex-1 space-y-2 px-2 py-2">
<a className="block text-sm font-medium text-gray-200 bg-[#23232c] rounded-md px-3 py-2" href="#">Dashboard</a>
<a className="block hover:bg-[#23232c] hover:text-white text-sm text-gray-400 rounded-md px-3 py-2" href="#">Subscriptions</a>
<a className="block hover:bg-[#23232c] hover:text-white text-sm text-gray-400 rounded-md px-3 py-2" href="#">Spending</a>
<a className="block hover:bg-[#23232c] hover:text-white text-sm text-gray-400 rounded-md px-3 py-2" href="#">Reports</a>
<a className="block hover:bg-[#23232c] hover:text-white text-sm text-gray-400 rounded-md px-3 py-2" href="#">Settings</a>
</nav>
</div>

<div className="flex-1 bg-[#141417] p-6 flex flex-col animate-slide-fade-right animation-delay-3">
<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-6">
<div>
<h2 className="text-xl font-semibold text-white mb-1">Overview</h2>
<p className="text-gray-400 text-sm">Your current month's financial snapshot</p>
</div>
<div className="flex space-x-4">
<div className="rounded-lg bg-[#18181b] p-4 border border-[#23232c] min-w-[140px] animate-slide-fade-up animation-delay-4">
<div className="text-gray-400 text-xs">This Month's Spend</div>
<div className="text-2xl font-bold text-green-400 mt-1">$322.50</div>
</div>
<div className="rounded-lg bg-[#18181b] p-4 border border-[#23232c] min-w-[140px] animate-slide-fade-up animation-delay-5">
<div className="text-gray-400 text-xs">Active Subscriptions</div>
<div className="text-2xl font-bold text-blue-400 mt-1">7</div>
</div>
<div className="rounded-lg bg-[#18181b] p-4 border border-[#23232c] min-w-[140px] animate-slide-fade-up animation-delay-4">
<div className="text-gray-400 text-xs">Upcoming Payments</div>
<div className="text-2xl font-bold text-yellow-300 mt-1">$31.48</div>
</div>
</div>
</div>

<div className="bg-[#18181b] rounded-lg border border-[#23232c] p-6 mb-8 animate-slide-fade-up animation-delay-5">
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-semibold text-white">Monthly Spending Trend</h3>
<span className="text-sm text-gray-400">Last 6 months</span>
</div>
<div className="w-full h-40 flex items-center justify-center">
<svg className="w-full h-36" viewbox="0 0 400 110">
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#4ade80" stop-opacity="0.7"></stop>
<stop offset="100%" stop-color="#22d3ee" stop-opacity="0.2"></stop>
</lineargradient>
</defs>
<path d="M0,90 L50,60 L100,80 L150,50 L200,70 L250,45 L300,60 L350,40 L400,70 L400,110 L0,110 Z" fill="url(#chartGradient)"></path>
<polyline fill="none" points="0,90 50,60 100,80 150,50 200,70 250,45 300,60 350,40 400,70" stroke="#4ade80" strokeWidth="3"></polyline>
<circle cx="50" cy="60" fill="#4ade80" r="4"></circle>
<circle cx="100" cy="80" fill="#4ade80" r="4"></circle>
<circle cx="150" cy="50" fill="#4ade80" r="4"></circle>
<circle cx="200" cy="70" fill="#4ade80" r="4"></circle>
<circle cx="250" cy="45" fill="#4ade80" r="4"></circle>
<circle cx="300" cy="60" fill="#4ade80" r="4"></circle>
<circle cx="350" cy="40" fill="#4ade80" r="4"></circle>
<circle cx="400" cy="70" fill="#4ade80" r="4"></circle>
<text fill="#6b7280" fontSize="12" x="0" y="105">Dec</text>
<text fill="#6b7280" fontSize="12" x="60" y="105">Jan</text>
<text fill="#6b7280" fontSize="12" x="110" y="105">Feb</text>
<text fill="#6b7280" fontSize="12" x="160" y="105">Mar</text>
<text fill="#6b7280" fontSize="12" x="210" y="105">Apr</text>
<text fill="#6b7280" fontSize="12" x="260" y="105">May</text>
<text fill="#6b7280" fontSize="12" x="320" y="105">Jun</text>
</svg>
</div>
<div className="flex justify-between mt-2 text-xs text-gray-400">
<span>Lowest: $215</span>
<span>Highest: $390</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
<div className="animate-slide-fade-up animation-delay-4">
<h3 className="text-lg font-semibold text-white mb-2">Upcoming Payments</h3>
<ul className="divide-y divide-[#23232c] mb-4">
<li className="flex items-center justify-between py-3">
<span className="text-gray-200 font-medium">Spotify</span>
<span className="text-gray-400 text-sm">May 28</span>
<span className="text-green-400 font-semibold">$9.99</span>
</li>
<li className="flex items-center justify-between py-3">
<span className="text-gray-200 font-medium">Notion</span>
<span className="text-gray-400 text-sm">May 30</span>
<span className="text-green-400 font-semibold">$4.00</span>
</li>
<li className="flex items-center justify-between py-3">
<span className="text-gray-200 font-medium">Netflix</span>
<span className="text-gray-400 text-sm">June 2</span>
<span className="text-green-400 font-semibold">$16.49</span>
</li>
</ul>
</div>
<div className="animate-slide-fade-up animation-delay-5">
<h3 className="text-lg font-semibold text-white mb-2">Recent Transactions</h3>
<div className="overflow-x-auto">
<table className="min-w-full text-sm text-left text-gray-300">
<thead>
<tr>
<th className="py-2 px-2 font-semibold">Date</th>
<th className="py-2 px-2 font-semibold">Description</th>
<th className="py-2 px-2 font-semibold">Amount</th>
<th className="py-2 px-2 font-semibold">Type</th>
</tr>
</thead>
<tbody>
<tr>
<td className="py-2 px-2">May 24</td>
<td className="py-2 px-2">Uber Eats</td>
<td className="py-2 px-2 text-red-400">-$18.20</td>
<td className="py-2 px-2">Food</td>
</tr>
<tr>
<td className="py-2 px-2">May 23</td>
<td className="py-2 px-2">Apple Music</td>
<td className="py-2 px-2 text-green-400">-$10.99</td>
<td className="py-2 px-2">Subscription</td>
</tr>
<tr>
<td className="py-2 px-2">May 21</td>
<td className="py-2 px-2">Starbucks</td>
<td className="py-2 px-2 text-red-400">-$4.50</td>
<td className="py-2 px-2">Coffee</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<button className="self-end hover:bg-green-600 transition text-sm font-semibold text-white bg-green-500 rounded-md mt-6 px-5 py-2 animate-slide-fade-up animation-delay-5">Add Transaction</button>
</div>
</div>
</div>
</div>

</div>
</div>
</div>

    </>
  );
}
