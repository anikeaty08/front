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
<a className="flex items-center py-2 px-3 text-gray-300 hover:bg-indigo-800/30 rounded-lg" href="#">
<svg className="w-5 h-5 md:mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="hidden md:block">Transactions</span>
</a>
<a className="flex items-center py-2 px-3 text-white bg-indigo-800/50 rounded-lg" href="#">
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
<h1 className="text-xl font-bold text-white">Financial Analytics</h1>
<div className="flex items-center space-x-4">
<select className="bg-indigo-900/50 border border-indigo-700 rounded-lg px-3 py-1.5 text-sm text-white">
<option>Last 30 Days</option>
<option>Last 90 Days</option>
<option>This Year</option>
<option>Last Year</option>
</select>
<div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white">A</div>
</div>
</header>
<div className="p-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
<div className="bg-indigo-900/30 rounded-xl p-5 border border-indigo-800/40 card-glow">
<h3 className="text-gray-400 text-sm">Total Balance</h3>
<div className="flex items-baseline mt-2">
<span className="text-2xl font-bold text-white">$24,156.00</span>
<span className="ml-2 text-green-400 text-xs">+2.3%</span>
</div>
<div className="mt-4 h-1 bg-indigo-800/50 rounded-full overflow-hidden">
<div className="h-full w-3/4 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full"></div>
</div>
</div>
<div className="bg-indigo-900/30 rounded-xl p-5 border border-indigo-800/40 card-glow">
<h3 className="text-gray-400 text-sm">Monthly Income</h3>
<div className="flex items-baseline mt-2">
<span className="text-2xl font-bold text-green-400">$3,245.80</span>
<span className="ml-2 text-green-400 text-xs">+12.5%</span>
</div>
<div className="mt-4 h-1 bg-indigo-800/50 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"></div>
</div>
</div>
<div className="bg-indigo-900/30 rounded-xl p-5 border border-indigo-800/40 card-glow">
<h3 className="text-gray-400 text-sm">Monthly Expenses</h3>
<div className="flex items-baseline mt-2">
<span className="text-2xl font-bold text-red-400">$1,876.24</span>
<span className="ml-2 text-red-400 text-xs">+8.3%</span>
</div>
<div className="mt-4 h-1 bg-indigo-800/50 rounded-full overflow-hidden">
<div className="h-full w-1/2 bg-gradient-to-r from-red-500 to-orange-600 rounded-full"></div>
</div>
</div>
<div className="bg-indigo-900/30 rounded-xl p-5 border border-indigo-800/40 card-glow">
<h3 className="text-gray-400 text-sm">Savings Rate</h3>
<div className="flex items-baseline mt-2">
<span className="text-2xl font-bold text-blue-400">42.2%</span>
<span className="ml-2 text-green-400 text-xs">+4.7%</span>
</div>
<div className="mt-4 h-1 bg-indigo-800/50 rounded-full overflow-hidden">
<div className="h-full w-5/12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full"></div>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
<div className="lg:col-span-2 bg-indigo-900/30 rounded-xl p-6 border border-indigo-800/40 card-glow">
<div className="flex justify-between items-center mb-6">
<h2 className="text-xl font-bold text-white">Income vs Expenses</h2>
<div className="flex space-x-2">
<span className="flex items-center text-sm text-gray-400">
<span className="w-3 h-3 bg-purple-500 rounded-full mr-1"></span>
                  Income
                </span>
<span className="flex items-center text-sm text-gray-400">
<span className="w-3 h-3 bg-indigo-500 rounded-full mr-1"></span>
                  Expenses
                </span>
</div>
</div>
<div className="h-64 flex items-end space-x-2">
<div className="flex-1 flex flex-col items-center space-y-2">
<div className="w-full h-28 bg-purple-600/70 rounded-t-md"></div>
<div className="w-full h-16 bg-indigo-600/70 rounded-t-md"></div>
<span className="text-xs text-gray-400">Jan</span>
</div>
<div className="flex-1 flex flex-col items-center space-y-2">
<div className="w-full h-24 bg-purple-600/70 rounded-t-md"></div>
<div className="w-full h-20 bg-indigo-600/70 rounded-t-md"></div>
<span className="text-xs text-gray-400">Feb</span>
</div>
<div className="flex-1 flex flex-col items-center space-y-2">
<div className="w-full h-32 bg-purple-600/70 rounded-t-md"></div>
<div className="w-full h-20 bg-indigo-600/70 rounded-t-md"></div>
<span className="text-xs text-gray-400">Mar</span>
</div>
<div className="flex-1 flex flex-col items-center space-y-2">
<div className="w-full h-20 bg-purple-600/70 rounded-t-md"></div>
<div className="w-full h-24 bg-indigo-600/70 rounded-t-md"></div>
<span className="text-xs text-gray-400">Apr</span>
</div>
<div className="flex-1 flex flex-col items-center space-y-2">
<div className="w-full h-36 bg-purple-600/70 rounded-t-md"></div>
<div className="w-full h-16 bg-indigo-600/70 rounded-t-md"></div>
<span className="text-xs text-gray-400">May</span>
</div>
<div className="flex-1 flex flex-col items-center space-y-2">
<div className="w-full h-40 bg-purple-600/70 rounded-t-md"></div>
<div className="w-full h-24 bg-indigo-600/70 rounded-t-md"></div>
<span className="text-xs text-gray-400">Jun</span>
</div>
</div>
</div>
<div className="bg-indigo-900/30 rounded-xl p-6 border border-indigo-800/40 card-glow">
<h2 className="text-xl font-bold text-white mb-6">Spending Categories</h2>
<div className="space-y-4">
<div>
<div className="flex justify-between mb-1">
<span className="text-gray-300">Food &amp; Dining</span>
<span className="text-gray-400">$482.25</span>
</div>
<div className="w-full bg-indigo-950/50 rounded-full h-2">
<div className="bg-gradient-to-r from-purple-500 to-indigo-600 h-2 rounded-full w-3/4"></div>
</div>
</div>
<div>
<div className="flex justify-between mb-1">
<span className="text-gray-300">Shopping</span>
<span className="text-gray-400">$395.40</span>
</div>
<div className="w-full bg-indigo-950/50 rounded-full h-2">
<div className="bg-gradient-to-r from-blue-500 to-cyan-600 h-2 rounded-full w-2/3"></div>
</div>
</div>
<div>
<div className="flex justify-between mb-1">
<span className="text-gray-300">Transportation</span>
<span className="text-gray-400">$312.12</span>
</div>
<div className="w-full bg-indigo-950/50 rounded-full h-2">
<div className="bg-gradient-to-r from-yellow-500 to-orange-600 h-2 rounded-full w-1/2"></div>
</div>
</div>
<div>
<div className="flex justify-between mb-1">
<span className="text-gray-300">Utilities</span>
<span className="text-gray-400">$254.87</span>
</div>
<div className="w-full bg-indigo-950/50 rounded-full h-2">
<div className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full w-2/5"></div>
</div>
</div>
<div>
<div className="flex justify-between mb-1">
<span className="text-gray-300">Entertainment</span>
<span className="text-gray-400">$187.45</span>
</div>
<div className="w-full bg-indigo-950/50 rounded-full h-2">
<div className="bg-gradient-to-r from-pink-500 to-rose-600 h-2 rounded-full w-1/3"></div>
</div>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="bg-indigo-900/30 rounded-xl p-6 border border-indigo-800/40 card-glow">
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
<div className="bg-indigo-900/30 rounded-xl p-6 border border-indigo-800/40 card-glow">
<h2 className="text-xl font-bold text-white mb-6">Net Worth Trend</h2>
<div className="h-40 flex items-end space-x-1">
<div className="flex-1 h-1/4 bg-indigo-600/50 rounded-t-md"></div>
<div className="flex-1 h-1/3 bg-indigo-600/50 rounded-t-md"></div>
<div className="flex-1 h-1/2 bg-indigo-600/50 rounded-t-md"></div>
<div className="flex-1 h-2/5 bg-indigo-600/50 rounded-t-md"></div>
<div className="flex-1 h-3/5 bg-indigo-600/50 rounded-t-md"></div>
<div className="flex-1 h-1/2 bg-indigo-600/50 rounded-t-md"></div>
<div className="flex-1 h-3/4 bg-indigo-600/50 rounded-t-md"></div>
<div className="flex-1 h-4/5 bg-indigo-600/50 rounded-t-md"></div>
<div className="flex-1 h-full bg-purple-600/70 rounded-t-md"></div>
</div>
<div className="flex justify-between mt-2 text-xs text-gray-400">
<span>Oct</span>
<span>Nov</span>
<span>Dec</span>
<span>Jan</span>
<span>Feb</span>
<span>Mar</span>
<span>Apr</span>
<span>May</span>
<span>Jun</span>
</div>
</div>
<div className="bg-indigo-900/30 rounded-xl p-6 border border-indigo-800/40 card-glow">
<h2 className="text-xl font-bold text-white mb-6">Upcoming Bills</h2>
<div className="space-y-4">
<div className="flex justify-between items-center p-3 bg-indigo-800/30 rounded-lg">
<div>
<div className="text-white">Netflix</div>
<div className="text-gray-400 text-xs">Jun 23, 2023</div>
</div>
<div className="text-red-400">$12.99</div>
</div>
<div className="flex justify-between items-center p-3 bg-indigo-800/30 rounded-lg">
<div>
<div className="text-white">Electric Bill</div>
<div className="text-gray-400 text-xs">Jun 25, 2023</div>
</div>
<div className="text-red-400">$85.00</div>
</div>
<div className="flex justify-between items-center p-3 bg-indigo-800/30 rounded-lg">
<div>
<div className="text-white">Gym Membership</div>
<div className="text-gray-400 text-xs">Jun 28, 2023</div>
</div>
<div className="text-red-400">$45.00</div>
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
