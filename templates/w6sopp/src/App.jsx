import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
<h1 className="text-2xl font-bold">Statistics</h1>
<button className="h-8 w-8 flex items-center justify-center rounded-full bg-[#eaecf0]">
<i className="fas fa-calendar text-sm"></i>
</button>
</div>
</header>

<main className="px-4 pb-20 flex-1 overflow-y-auto hide-scrollbar">

<div className="flex justify-between items-center mb-6">
<button className="flex items-center text-gray-400">
<i className="fas fa-chevron-left mr-1 text-xs"></i>
<span>Previous</span>
</button>
<h3 className="font-bold">April 2023</h3>
<button className="flex items-center text-gray-400">
<span>Next</span>
<i className="fas fa-chevron-right ml-1 text-xs"></i>
</button>
</div>

<div className="bg-[#eaecf0] rounded-2xl p-5 shadow-lg mb-6">
<div className="flex justify-between items-center mb-4">
<h3 className="font-bold">Monthly Overview</h3>
<div className="flex items-center text-xs">
<div className="flex items-center mr-3">
<div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
<span>Income</span>
</div>
<div className="flex items-center">
<div className="w-3 h-3 rounded-full bg-orange-500 mr-1"></div>
<span>Expenses</span>
</div>
</div>
</div>

<div className="flex justify-center mb-4">
<div className="relative w-40 h-40">
<svg className="w-full h-full" viewbox="0 0 36 36">
<path className="stroke-none fill-green-500" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke-dasharray="60, 100" strokeLinecap="round" strokeWidth="1"></path>
<path className="stroke-none fill-orange-500" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke-dasharray="40, 100" strokeLinecap="round" strokeWidth="1"></path>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-2xl font-bold">$2,172</span>
<span className="text-xs text-gray-500">Saved</span>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-white rounded-xl p-3">
<div className="text-xs text-gray-500 mb-1">Income</div>
<div className="font-bold text-lg">$4,352.90</div>
<div className="text-xs text-green-500 mt-1">+12% from last month</div>
</div>
<div className="bg-white rounded-xl p-3">
<div className="text-xs text-gray-500 mb-1">Expenses</div>
<div className="font-bold text-lg">$2,180.75</div>
<div className="text-xs text-red-500 mt-1">-5% from last month</div>
</div>
</div>
</div>

<div className="mb-6">
<div className="flex justify-between items-center mb-4">
<h3 className="font-bold">Spending by Category</h3>
<button className="text-xs text-teal-600">View Details</button>
</div>
<div className="space-y-3">

<div className="bg-[#eaecf0] rounded-2xl p-4 shadow">
<div className="flex justify-between items-center mb-2">
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
<i className="fas fa-home text-purple-500"></i>
</div>
<div>
<p className="font-medium">Housing</p>
<div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden mt-1">
<div className="h-full bg-purple-500 rounded-full" style={{width: '35%'}}></div>
</div>
</div>
</div>
<div className="text-right">
<p className="font-bold">$1,200</p>
<p className="text-xs text-gray-500">35%</p>
</div>
</div>
</div>

<div className="bg-[#eaecf0] rounded-2xl p-4 shadow">
<div className="flex justify-between items-center mb-2">
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
<i className="fas fa-utensils text-blue-500"></i>
</div>
<div>
<p className="font-medium">Food</p>
<div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden mt-1">
<div className="h-full bg-blue-500 rounded-full" style={{width: '25%'}}></div>
</div>
</div>
</div>
<div className="text-right">
<p className="font-bold">$450</p>
<p className="text-xs text-gray-500">25%</p>
</div>
</div>
</div>

<div className="bg-[#eaecf0] rounded-2xl p-4 shadow">
<div className="flex justify-between items-center mb-2">
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
<i className="fas fa-shopping-bag text-green-500"></i>
</div>
<div>
<p className="font-medium">Shopping</p>
<div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden mt-1">
<div className="h-full bg-green-500 rounded-full" style={{width: '20%'}}></div>
</div>
</div>
</div>
<div className="text-right">
<p className="font-bold">$320</p>
<p className="text-xs text-gray-500">20%</p>
</div>
</div>
</div>

<div className="bg-[#eaecf0] rounded-2xl p-4 shadow">
<div className="flex justify-between items-center mb-2">
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-3">
<i className="fas fa-car text-orange-500"></i>
</div>
<div>
<p className="font-medium">Transportation</p>
<div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden mt-1">
<div className="h-full bg-orange-500 rounded-full" style={{width: '15%'}}></div>
</div>
</div>
</div>
<div className="text-right">
<p className="font-bold">$180</p>
<p className="text-xs text-gray-500">15%</p>
</div>
</div>
</div>
</div>
</div>

<div>
<div className="flex justify-between items-center mb-4">
<h3 className="font-bold">Recent Transactions</h3>
<button className="text-xs text-teal-600">View All</button>
</div>
<div className="space-y-3">

<div className="bg-[#eaecf0] rounded-2xl p-4 shadow flex items-center justify-between">
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
<i className="fas fa-shopping-cart text-blue-500"></i>
</div>
<div>
<p className="font-medium">Grocery Store</p>
<p className="text-xs text-gray-500">Apr 23 • Food</p>
</div>
</div>
<p className="font-bold text-red-500">-$85.20</p>
</div>

<div className="bg-[#eaecf0] rounded-2xl p-4 shadow flex items-center justify-between">
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
<i className="fas fa-tshirt text-purple-500"></i>
</div>
<div>
<p className="font-medium">Clothing Store</p>
<p className="text-xs text-gray-500">Apr 20 • Shopping</p>
</div>
</div>
<p className="font-bold text-red-500">-$126.50</p>
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
<div className="nav-item flex flex-col items-center cursor-pointer">
<i className="fas fa-wallet text-gray-400"></i>
<span className="text-xs text-gray-400 mt-1">Wallet</span>
</div>
<div className="relative -mt-8">
<button className="w-14 h-14 rounded-full bg-gradient-to-r from-teal-500 to-green-500 flex items-center justify-center shadow-lg shadow-teal-500/20">
<i className="fas fa-plus text-white text-xl"></i>
</button>
</div>
<div className="nav-item flex flex-col items-center active cursor-pointer">
<i className="fas fa-chart-pie text-teal-600"></i>
<span className="text-xs text-teal-600 mt-1">Stats</span>
<div className="w-1 h-1 bg-teal-600 rounded-full mt-1"></div>
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
