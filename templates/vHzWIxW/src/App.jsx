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
<h1 className="text-2xl font-bold">Finance</h1>
<button className="h-8 w-8 flex items-center justify-center rounded-full bg-[#eaecf0]">
<i className="fas fa-bell text-sm"></i>
</button>
</div>
</header>

<main className="px-4 pb-20 flex-1 overflow-y-auto hide-scrollbar">

<div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-5 shadow-lg text-white mb-6">
<div className="text-sm font-medium mb-1">Total Balance</div>
<div className="text-3xl font-bold mb-5">$19,074.45</div>
<div className="flex justify-between">
<div className="flex items-center">
<div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-2">
<i className="fas fa-arrow-up text-green-300 text-sm"></i>
</div>
<div>
<div className="text-xs text-white/70">Income</div>
<div className="font-semibold">$4,352.90</div>
</div>
</div>
<div className="flex items-center">
<div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-2">
<i className="fas fa-arrow-down text-red-300 text-sm"></i>
</div>
<div>
<div className="text-xs text-white/70">Expenses</div>
<div className="font-semibold">$2,180.75</div>
</div>
</div>
</div>
</div>

<div className="mb-6">
<div className="flex justify-between items-center mb-4">
<h3 className="font-bold">Financial Overview</h3>
<div className="flex space-x-2 text-xs">
<button className="px-3 py-1 bg-blue-500 text-white rounded-full">Week</button>
<button className="px-3 py-1 bg-[#eaecf0] rounded-full">Month</button>
<button className="px-3 py-1 bg-[#eaecf0] rounded-full">Year</button>
</div>
</div>

<div className="bg-[#eaecf0] rounded-2xl p-4 shadow">
<div className="h-40 flex items-end justify-between px-2">
<div className="w-8 flex flex-col items-center">
<div className="h-16 w-3 bg-blue-500 rounded-t-full"></div>
<div className="mt-2 text-xs">Mon</div>
</div>
<div className="w-8 flex flex-col items-center">
<div className="h-28 w-3 bg-blue-500 rounded-t-full"></div>
<div className="mt-2 text-xs">Tue</div>
</div>
<div className="w-8 flex flex-col items-center">
<div className="h-20 w-3 bg-blue-500 rounded-t-full"></div>
<div className="mt-2 text-xs">Wed</div>
</div>
<div className="w-8 flex flex-col items-center">
<div className="h-32 w-3 bg-indigo-600 rounded-t-full"></div>
<div className="mt-2 text-xs">Thu</div>
</div>
<div className="w-8 flex flex-col items-center">
<div className="h-24 w-3 bg-blue-500 rounded-t-full"></div>
<div className="mt-2 text-xs">Fri</div>
</div>
<div className="w-8 flex flex-col items-center">
<div className="h-12 w-3 bg-blue-500 rounded-t-full"></div>
<div className="mt-2 text-xs">Sat</div>
</div>
<div className="w-8 flex flex-col items-center">
<div className="h-8 w-3 bg-blue-500 rounded-t-full"></div>
<div className="mt-2 text-xs">Sun</div>
</div>
</div>
</div>
</div>

<div className="mb-6">
<div className="flex justify-between items-center mb-4">
<h3 className="font-bold">Budget Categories</h3>
<button className="text-xs text-blue-600">View All</button>
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
<p className="text-xs text-gray-500">$1,200 / $1,500</p>
</div>
</div>
<p className="font-bold">80%</p>
</div>
<div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
<div className="h-full bg-purple-500 rounded-full" style={{width: '80%'}}></div>
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
<p className="text-xs text-gray-500">$450 / $600</p>
</div>
</div>
<p className="font-bold">75%</p>
</div>
<div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 rounded-full" style={{width: '75%'}}></div>
</div>
</div>

<div className="bg-[#eaecf0] rounded-2xl p-4 shadow">
<div className="flex justify-between items-center mb-2">
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
<i className="fas fa-car text-green-500"></i>
</div>
<div>
<p className="font-medium">Transportation</p>
<p className="text-xs text-gray-500">$180 / $300</p>
</div>
</div>
<p className="font-bold">60%</p>
</div>
<div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
<div className="h-full bg-green-500 rounded-full" style={{width: '60%'}}></div>
</div>
</div>
</div>
</div>

<div>
<div className="flex justify-between items-center mb-4">
<h3 className="font-bold">Upcoming Bills</h3>
<button className="text-xs text-blue-600">View All</button>
</div>
<div className="space-y-3">

<div className="bg-[#eaecf0] rounded-2xl p-4 shadow flex items-center justify-between">
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-3">
<i className="fas fa-bolt text-red-500"></i>
</div>
<div>
<p className="font-medium">Electricity</p>
<p className="text-xs text-gray-500">Due in 3 days</p>
</div>
</div>
<p className="font-bold">$85.00</p>
</div>

<div className="bg-[#eaecf0] rounded-2xl p-4 shadow flex items-center justify-between">
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
<i className="fas fa-wifi text-blue-500"></i>
</div>
<div>
<p className="font-medium">Internet</p>
<p className="text-xs text-gray-500">Due in 7 days</p>
</div>
</div>
<p className="font-bold">$59.99</p>
</div>
</div>
</div>
</main>
</div>

<nav className="absolute bottom-0 left-0 right-0 bg-[#ffffff]/90 rounded-t-3xl py-4 px-6 backdrop-blur-sm border-t border-gray-200" style={{zIndex: '20'}}>
<div className="flex justify-between items-center">
<div className="nav-item flex flex-col items-center active cursor-pointer">
<i className="fas fa-dollar-sign text-blue-600"></i>
<span className="text-xs text-blue-600 mt-1">Finance</span>
<div className="w-1 h-1 bg-blue-600 rounded-full mt-1"></div>
</div>
<div className="nav-item flex flex-col items-center cursor-pointer">
<i className="fas fa-wallet text-gray-400"></i>
<span className="text-xs text-gray-400 mt-1">Wallet</span>
</div>
<div className="relative -mt-8">
<button className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
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
