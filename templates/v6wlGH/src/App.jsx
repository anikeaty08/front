import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



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
  }, []);

  return (
    <>
      
<div className="fixed inset-0 pointer-events-none" id="particles"></div>
<div className="flex min-h-screen">

<aside className="fixed inset-y-0 left-0 w-16 md:w-64 bg-indigo-950/40 border-r border-indigo-800/40 backdrop-blur-sm z-20 transition-all duration-300">
<div className="flex flex-col h-full p-4">
<div className="flex items-center mb-8">
<div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center">
<span className="text-white font-bold">N</span>
</div>
<span className="ml-2 text-white font-bold text-xl hidden md:block">Nebula</span>
</div>
<nav className="flex-1 space-y-2">
<a className="flex items-center py-2 px-3 text-gray-300 hover:bg-indigo-800/30 rounded-lg" href="#">
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
<a className="flex items-center py-2 px-3 text-white bg-indigo-800/50 rounded-lg" href="#">
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
</div>
</aside>

<main className="ml-16 md:ml-64 flex-1">

<header className="h-16 bg-indigo-950/40 border-b border-indigo-800/40 backdrop-blur-sm flex items-center justify-between px-6">
<h1 className="text-xl font-bold text-white">Transactions</h1>
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

<div className="bg-indigo-900/30 rounded-xl p-5 border border-indigo-800/40 mb-6">
<div className="flex flex-col md:flex-row gap-4">
<div className="flex-1">
<div className="relative">
<input className="w-full bg-indigo-900/50 border border-indigo-700 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Search transactions..." type="text"/>
<svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<div className="flex gap-3">
<select className="bg-indigo-900/50 border border-indigo-700 rounded-lg px-3 py-2 text-white">
<option>All Categories</option>
<option>Food &amp; Drink</option>
<option>Shopping</option>
<option>Transportation</option>
<option>Utilities</option>
<option>Income</option>
</select>
<select className="bg-indigo-900/50 border border-indigo-700 rounded-lg px-3 py-2 text-white">
<option>Last 30 Days</option>
<option>Last 90 Days</option>
<option>This Year</option>
<option>Last Year</option>
<option>Custom Range</option>
</select>
<button className="bg-indigo-900/50 border border-indigo-700 rounded-lg px-3 py-2 text-white">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
<div className="bg-indigo-900/30 rounded-xl p-5 border border-indigo-800/40 glow">
<h3 className="text-gray-400 text-sm mb-2">Total Income</h3>
<div className="flex items-center">
<span className="text-2xl font-bold text-green-400">$3,245.80</span>
<span className="ml-2 text-green-400 text-xs">+12.5%</span>
</div>
</div>
<div className="bg-indigo-900/30 rounded-xl p-5 border border-indigo-800/40 glow">
<h3 className="text-gray-400 text-sm mb-2">Total Expenses</h3>
<div className="flex items-center">
<span className="text-2xl font-bold text-red-400">$1,876.24</span>
<span className="ml-2 text-red-400 text-xs">+8.3%</span>
</div>
</div>
<div className="bg-indigo-900/30 rounded-xl p-5 border border-indigo-800/40 glow">
<h3 className="text-gray-400 text-sm mb-2">Net Flow</h3>
<div className="flex items-center">
<span className="text-2xl font-bold text-blue-400">$1,369.56</span>
<span className="ml-2 text-blue-400 text-xs">+18.2%</span>
</div>
</div>
</div>

<div className="bg-indigo-900/30 rounded-xl p-6 border border-indigo-800/40 mb-6">
<h2 className="text-xl font-bold text-white mb-6">Recent Transactions</h2>
<div className="overflow-x-auto">
<table className="w-full">
<thead>
<tr className="text-left text-gray-400 text-sm border-b border-indigo-800/40">
<th className="pb-3">
<div className="flex items-center">
                      Date
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</th>
<th className="pb-3">Description</th>
<th className="pb-3">Category</th>
<th className="pb-3">Status</th>
<th className="pb-3 text-right">
<div className="flex items-center justify-end">
                      Amount
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</th>
</tr>
</thead>
<tbody className="text-white">
<tr className="border-b border-indigo-800/30 hover:bg-indigo-800/20">
<td className="py-4">May 21, 2023</td>
<td>Uber Ride</td>
<td>
<span className="px-2 py-1 text-xs bg-yellow-800/50 text-yellow-300 rounded-full">Transport</span>
</td>
<td>
<span className="px-2 py-1 text-xs bg-green-800/50 text-green-300 rounded-full">Completed</span>
</td>
<td className="text-right text-red-400">-$24.50</td>
</tr>
<tr className="border-b border-indigo-800/30 hover:bg-indigo-800/20">
<td className="py-4">May 20, 2023</td>
<td>Coffee Shop</td>
<td>
<span className="px-2 py-1 text-xs bg-purple-800/50 text-purple-300 rounded-full">Food</span>
</td>
<td>
<span className="px-2 py-1 text-xs bg-green-800/50 text-green-300 rounded-full">Completed</span>
</td>
<td className="text-right text-red-400">-$4.50</td>
</tr>
<tr className="border-b border-indigo-800/30 hover:bg-indigo-800/20">
<td className="py-4">May 19, 2023</td>
<td>Salary Deposit</td>
<td>
<span className="px-2 py-1 text-xs bg-green-800/50 text-green-300 rounded-full">Income</span>
</td>
<td>
<span className="px-2 py-1 text-xs bg-green-800/50 text-green-300 rounded-full">Completed</span>
</td>
<td className="text-right text-green-400">+$2,750.00</td>
</tr>
<tr className="border-b border-indigo-800/30 hover:bg-indigo-800/20">
<td className="py-4">May 18, 2023</td>
<td>Grocery Store</td>
<td>
<span className="px-2 py-1 text-xs bg-yellow-800/50 text-yellow-300 rounded-full">Shopping</span>
</td>
<td>
<span className="px-2 py-1 text-xs bg-green-800/50 text-green-300 rounded-full">Completed</span>
</td>
<td className="text-right text-red-400">-$65.38</td>
</tr>
<tr className="border-b border-indigo-800/30 hover:bg-indigo-800/20">
<td className="py-4">May 17, 2023</td>
<td>Electric Bill</td>
<td>
<span className="px-2 py-1 text-xs bg-blue-800/50 text-blue-300 rounded-full">Utilities</span>
</td>
<td>
<span className="px-2 py-1 text-xs bg-green-800/50 text-green-300 rounded-full">Completed</span>
</td>
<td className="text-right text-red-400">-$85.00</td>
</tr>
<tr className="border-b border-indigo-800/30 hover:bg-indigo-800/20">
<td className="py-4">May 16, 2023</td>
<td>Online Store</td>
<td>
<span className="px-2 py-1 text-xs bg-yellow-800/50 text-yellow-300 rounded-full">Shopping</span>
</td>
<td>
<span className="px-2 py-1 text-xs bg-yellow-800/50 text-yellow-300 rounded-full">Pending</span>
</td>
<td className="text-right text-red-400">-$34.99</td>
</tr>
<tr className="border-b border-indigo-800/30 hover:bg-indigo-800/20">
<td className="py-4">May 15, 2023</td>
<td>Restaurant</td>
<td>
<span className="px-2 py-1 text-xs bg-purple-800/50 text-purple-300 rounded-full">Food</span>
</td>
<td>
<span className="px-2 py-1 text-xs bg-green-800/50 text-green-300 rounded-full">Completed</span>
</td>
<td className="text-right text-red-400">-$78.25</td>
</tr>
</tbody>
</table>
</div>
<div className="mt-6 flex justify-between items-center">
<div className="text-sm text-gray-400">Showing 1-7 of 124 transactions</div>
<div className="flex space-x-1">
<button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-indigo-800/50 text-gray-400">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded-lg bg-indigo-700 text-white">1</button>
<button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-indigo-800/50 text-gray-400">2</button>
<button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-indigo-800/50 text-gray-400">3</button>
<button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-indigo-800/50 text-gray-400">...</button>
<button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-indigo-800/50 text-gray-400">12</button>
<button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-indigo-800/50 text-gray-400">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-indigo-900/30 rounded-xl p-6 border border-indigo-800/40 glow">
<h2 className="text-xl font-bold text-white mb-4">Spending by Category</h2>
<div className="flex items-center space-x-4">
<div className="w-32 h-32 relative">
<svg className="w-32 h-32" viewbox="0 0 36 36">
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#444" strokeWidth="1"></path>
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#a78bfa" stroke-dasharray="30, 100" strokeWidth="3"></path>
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#60a5fa" stroke-dasharray="25, 100" stroke-dashoffset="30" strokeWidth="3"></path>
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#fbbf24" stroke-dasharray="20, 100" stroke-dashoffset="55" strokeWidth="3"></path>
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#34d399" stroke-dasharray="15, 100" stroke-dashoffset="75" strokeWidth="3"></path>
</svg>
</div>
<div className="space-y-2">
<div className="flex items-center">
<span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
<span className="text-white">Food &amp; Drink (30%)</span>
</div>
<div className="flex items-center">
<span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
<span className="text-white">Shopping (25%)</span>
</div>
<div className="flex items-center">
<span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
<span className="text-white">Transport (20%)</span>
</div>
<div className="flex items-center">
<span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
<span className="text-white">Utilities (15%)</span>
</div>
<div className="flex items-center">
<span className="w-3 h-3 bg-gray-500 rounded-full mr-2"></span>
<span className="text-white">Other (10%)</span>
</div>
</div>
</div>
</div>
<div className="bg-indigo-900/30 rounded-xl p-6 border border-indigo-800/40 glow">
<h2 className="text-xl font-bold text-white mb-4">Monthly Spending Trend</h2>
<div className="h-40 flex items-end space-x-2">
<div className="flex-1 h-1/4 bg-indigo-600/50 rounded-t-md"></div>
<div className="flex-1 h-1/2 bg-indigo-600/50 rounded-t-md"></div>
<div className="flex-1 h-3/4 bg-indigo-600/50 rounded-t-md"></div>
<div className="flex-1 h-1/3 bg-indigo-600/50 rounded-t-md"></div>
<div className="flex-1 h-2/3 bg-indigo-600/50 rounded-t-md"></div>
<div className="flex-1 h-full bg-purple-600/70 rounded-t-md"></div>
</div>
<div className="flex justify-between mt-2 text-xs text-gray-400">
<span>Jan</span>
<span>Feb</span>
<span>Mar</span>
<span>Apr</span>
<span>May</span>
<span>Jun</span>
</div>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
