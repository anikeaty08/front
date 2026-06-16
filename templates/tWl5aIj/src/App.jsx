import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    function updateClock() {
      const now = new Date();
      document.getElementById('clock').textContent =
        now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
    }
    setInterval(updateClock, 1000); updateClock();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="relative w-[390px] max-w-full h-[844px] bg-gradient-to-b from-[#181830] to-[#0a0a17] shadow-xl rounded-[40px] overflow-hidden border-4 border-[#171731] flex flex-col mx-auto">
<div className="absolute left-1/2 -top-1.5 -translate-x-1/2 z-10">
<div className="w-24 h-4 bg-black/80 rounded-b-3xl mt-2"></div>
</div>
<div className="flex flex-col h-full">

<div className="flex justify-between items-center p-2 text-xs mt-2 select-none">
<span className="font-mono" id="clock">9:41</span>
<div className="flex space-x-1">
<i className="fas fa-signal"></i>
<i className="fas fa-wifi"></i>
<i className="fas fa-battery-three-quarters"></i>
</div>
</div>

<header className="px-6 py-4">
<div className="flex justify-between items-center">
<h1 className="text-2xl font-bold">Stats</h1>
<button className="h-8 w-8 flex items-center justify-center rounded-full bg-[#1e1e3a] focus:ring-2 focus:ring-purple-400">
<i className="fas fa-sync"></i>
</button>
</div>
</header>
<main className="px-4 pb-28 flex-1 overflow-y-auto hide-scrollbar">

<div className="flex justify-between items-center mb-6">
<div className="text-lg font-semibold">June 2024</div>
<div className="flex gap-2">
<button className="px-3 py-1 rounded-full bg-[#222241] hover:bg-[#373766] text-xs"><i className="fa fa-angle-left"></i></button>
<button className="px-3 py-1 rounded-full bg-[#222241] hover:bg-[#373766] text-xs"><i className="fa fa-angle-right"></i></button>
</div>
</div>

<div className="grid grid-cols-2 gap-3 mb-6">
<div className="bg-gradient-to-tr from-blue-600 to-blue-300 rounded-2xl p-5 shadow-lg">
<div className="flex items-center justify-between">
<span className="text-xs font-medium opacity-80">Income</span>
<i className="fas fa-arrow-down opacity-60"></i>
</div>
<div className="mt-5 mb-1 text-2xl font-bold">$5,400.00</div>
<div className="flex items-center text-emerald-400 text-xs">
<i className="fas fa-arrow-up mr-1"></i> +8%
            </div>
</div>
<div className="bg-gradient-to-tr from-pink-500 to-purple-500 rounded-2xl p-5 shadow-lg">
<div className="flex items-center justify-between">
<span className="text-xs font-medium opacity-80">Expenses</span>
<i className="fas fa-arrow-up opacity-60"></i>
</div>
<div className="mt-5 mb-1 text-2xl font-bold">$2,120.00</div>
<div className="flex items-center text-rose-400 text-xs">
<i className="fas fa-arrow-down mr-1"></i> -4%
            </div>
</div>
</div>

<div className="mb-7 bg-[#181830] p-6 rounded-2xl shadow-lg">
<div className="flex justify-between items-center mb-3">
<div className="font-semibold">Balance Trend</div>
<div className="flex space-x-2 text-xs">
<span className="flex items-center"><span className="w-2 h-2 rounded-full bg-blue-400 inline-block mr-1"></span>Income</span>
<span className="flex items-center"><span className="w-2 h-2 rounded-full bg-pink-400 inline-block mr-1"></span>Expense</span>
</div>
</div>
<div className="spark mt-2 mb-1">

<svg fill="none" height="44" viewbox="0 0 320 44" width="100%" xmlns="http://www.w3.org/2000/svg">
<polyline fill="none" points="0,34 40,22 80,10 120,7 160,11 200,16 240,22 280,19 320,12" stroke="#60a5fa" strokeLinecap="round" strokeWidth="3"></polyline>
<polyline fill="none" points="0,38 40,35 80,31 120,35 160,21 200,27 240,33 280,25 320,31" stroke="#f472b6" strokeLinecap="round" strokeWidth="3"></polyline>
</svg>
</div>
<div className="flex justify-between text-xs text-white/50">
<span>Week 1</span>
<span>Week 2</span>
<span>Week 3</span>
<span>Week 4</span>
</div>
</div>

<div className="mb-7">
<h2 className="font-semibold mb-3">Category Breakdown</h2>
<div className="space-y-3">
<div className="flex items-center justify-between bg-[#212143] rounded-xl px-4 py-3 shadow">
<div className="flex items-center gap-3">
<span className="bg-green-500/20 rounded-full p-2"><i className="fas fa-briefcase text-green-400"></i></span>
<span>Salary</span>
</div>
<span className="font-semibold text-green-400">+$3,520.00</span>
</div>
<div className="flex items-center justify-between bg-[#212143] rounded-xl px-4 py-3 shadow">
<div className="flex items-center gap-3">
<span className="bg-blue-500/20 rounded-full p-2"><i className="fas fa-coins text-blue-400"></i></span>
<span>Investments</span>
</div>
<span className="font-semibold text-blue-400">+$1,880.00</span>
</div>
<div className="flex items-center justify-between bg-[#212143] rounded-xl px-4 py-3 shadow">
<div className="flex items-center gap-3">
<span className="bg-pink-500/20 rounded-full p-2"><i className="fas fa-shopping-bag text-pink-400"></i></span>
<span>Shopping</span>
</div>
<span className="font-semibold text-pink-400">-$890.00</span>
</div>
<div className="flex items-center justify-between bg-[#212143] rounded-xl px-4 py-3 shadow">
<div className="flex items-center gap-3">
<span className="bg-yellow-500/20 rounded-full p-2"><i className="fas fa-home text-yellow-400"></i></span>
<span>Rent</span>
</div>
<span className="font-semibold text-yellow-400">-$730.00</span>
</div>
</div>
</div>

<div>
<div className="flex justify-between items-center mb-3">
<h2 className="font-semibold">Recent Highlights</h2>
<a className="text-xs text-purple-400" href="#">View All</a>
</div>
<div className="space-y-3">
<div className="bg-[#1e1e3a] rounded-xl p-4 shadow flex items-center justify-between">
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
<i className="fas fa-receipt text-green-400"></i>
</div>
<div>
<div className="font-medium">Freelance Income</div>
<div className="text-xs text-gray-400">Income • 11 Jun, 10:18</div>
</div>
</div>
<div className="font-bold text-green-400">+$450.00</div>
</div>
<div className="bg-[#1e1e3a] rounded-xl p-4 shadow flex items-center justify-between">
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center mr-3">
<i className="fas fa-shopping-basket text-pink-400"></i>
</div>
<div>
<div className="font-medium">Groceries</div>
<div className="text-xs text-gray-400">Expense • 09 Jun, 19:50</div>
</div>
</div>
<div className="font-bold text-pink-400">-$125.60</div>
</div>
</div>
</div>
</main>

<nav className="absolute bottom-0 left-0 right-0 bg-[#151530]/90 rounded-t-3xl py-4 px-6 backdrop-blur-sm" style={{zIndex: '20'}}>
<div className="flex justify-between items-center">
<div className="flex flex-col items-center cursor-pointer">
<i className="fas fa-dollar-sign text-gray-400"></i>
<span className="text-xs text-gray-400 mt-1">Finance</span>
</div>
<div className="flex flex-col items-center cursor-pointer">
<i className="fas fa-wallet text-gray-400"></i>
<span className="text-xs text-gray-400 mt-1">Wallet</span>
</div>
<div className="relative -mt-8">
<button className="w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center shadow-lg">
<i className="fas fa-plus text-white text-xl"></i>
</button>
</div>
<div className="flex flex-col items-center cursor-pointer">
<i className="fas fa-chart-pie text-purple-500"></i>
<span className="text-xs text-purple-500 mt-1">Stats</span>
<div className="w-1 h-1 bg-purple-500 rounded-full mt-1"></div>
</div>
<div className="flex flex-col items-center cursor-pointer">
<i className="fas fa-ellipsis-h text-gray-400"></i>
<span className="text-xs text-gray-400 mt-1">More</span>
</div>
</div>
</nav>
</div>
</div>


    </>
  );
}
