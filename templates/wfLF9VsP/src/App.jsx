import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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

<header className="px-6 py-2 flex items-center">
<button className="mr-2 p-2 bg-gray-100 rounded-full" onclick="window.history.back()">
<svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>
<h1 className="text-2xl font-bold text-gray-900">Groceries</h1>
</header>
<main className="px-6 pb-24">

<div className="bg-gradient-to-r from-blue-500 to-green-400 rounded-3xl p-6 mb-7 shadow-lg mt-2 flex items-center">
<div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mr-4">
<svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<rect height="6" rx="2" width="8" x="8" y="10"></rect>
<path d="M3 6h18M3 6v12c0 1.104.896 2 2 2h14c1.104 0 2-.896 2-2V6"></path>
</svg>
</div>
<div>
<div className="text-xs text-white/80">Spent this month</div>
<div className="text-2xl font-bold text-white">$760</div>
<div className="mt-1 text-xs text-white/80">18% of total expenses</div>
</div>
</div>

<div className="flex space-x-4 mb-6">
<div className="flex-1 bg-white rounded-xl shadow p-4 flex flex-col items-center">
<div className="text-xs text-gray-500">Average/week</div>
<div className="font-bold text-lg text-blue-600">$190</div>
</div>
<div className="flex-1 bg-white rounded-xl shadow p-4 flex flex-col items-center">
<div className="text-xs text-gray-500">This week</div>
<div className="font-bold text-lg text-green-600">$172</div>
</div>
</div>

<div className="mb-4">
<div className="flex justify-between items-center mb-2">
<h3 className="font-bold text-gray-900 text-base">Recent Purchases</h3>
<button className="text-xs text-purple-600 font-medium" onclick="alert('Show all groceries')">See All</button>
</div>
<div className="space-y-3">
<div className="flex items-center bg-white rounded-xl shadow px-4 py-3 transition hover:bg-blue-50 cursor-pointer" onclick="alert('View Walmart')">
<div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mr-3">
<svg className="h-5 w-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<rect height="6" rx="2" width="8" x="8" y="10"></rect>
<path d="M3 6h18M3 6v12c0 1.104.896 2 2 2h14c1.104 0 2-.896 2-2V6"></path>
</svg>
</div>
<div className="flex-1">
<div className="font-semibold text-gray-800">Walmart</div>
<div className="text-xs text-gray-500">Today • 8:24AM</div>
</div>
<div className="text-base font-bold text-gray-800">- $57.80</div>
</div>
<div className="flex items-center bg-white rounded-xl shadow px-4 py-3 transition hover:bg-blue-50 cursor-pointer" onclick="alert('View Aldi')">
<div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center mr-3">
<svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<rect height="6" rx="2" width="8" x="8" y="10"></rect>
<path d="M3 6h18M3 6v12c0 1.104.896 2 2 2h14c1.104 0 2-.896 2-2V6"></path>
</svg>
</div>
<div className="flex-1">
<div className="font-semibold text-gray-800">Aldi Market</div>
<div className="text-xs text-gray-500">Yesterday • 11:47AM</div>
</div>
<div className="text-base font-bold text-gray-800">- $43.20</div>
</div>
<div className="flex items-center bg-white rounded-xl shadow px-4 py-3 transition hover:bg-blue-50 cursor-pointer" onclick="alert('View Trader Joe\'s')">
<div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center mr-3">
<svg className="h-5 w-5 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<rect height="6" rx="2" width="8" x="8" y="10"></rect>
<path d="M3 6h18M3 6v12c0 1.104.896 2 2 2h14c1.104 0 2-.896 2-2V6"></path>
</svg>
</div>
<div className="flex-1">
<div className="font-semibold text-gray-800">Trader Joe's</div>
<div className="text-xs text-gray-500">2 days ago • 4:18PM</div>
</div>
<div className="text-base font-bold text-gray-800">- $69.00</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl shadow p-4 flex items-center mt-5">
<div className="mr-3">
<div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
<svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" strokeWidth="1.8" viewbox="0 0 24 24"><path d="M13.73 21a2 2 0 01-3.46 0"></path><path d="M13 10V4a4 4 0 00-8 0v6a9 9 0 008 9 9 9 0 008-9z"></path></svg>
</div>
</div>
<div className="flex-1">
<div className="font-bold text-gray-800 mb-1 text-sm">Tip</div>
<div className="text-xs text-gray-500">Buy in bulk to save more on your weekly groceries!</div>
</div>
</div>
</main>

<div className="absolute bottom-0 left-0 right-0 h-20 bg-white border-t border-gray-100 flex items-center justify-around px-6 z-10">
<div className="flex flex-col items-center cursor-pointer" onclick="alert('Go to Finance')">
<svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M3 10.5V6.75A2.25 2.25 0 015.25 4.5h13.5A2.25 2.25 0 0121 6.75v3.75m-18 0v6.75A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 17.25V10.5m-18 0h18" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span className="text-xs font-medium text-gray-400 mt-1">Finance</span>
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
