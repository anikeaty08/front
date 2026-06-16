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

<header className="px-6 py-2 flex justify-between items-center">
<h1 className="text-2xl font-bold text-gray-900">Wallet</h1>
<div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
<svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<rect height="14" rx="4" width="20" x="2" y="5"></rect><path d="M6 5v-2a2 2 0 012-2h8a2 2 0 012 2v2" strokeLinecap="round"></path>
</svg>
</div>
</header>

<main className="px-6 pb-24">

<div className="mb-8">
<div className="flex justify-between items-center mb-3">
<h3 className="font-bold text-gray-900 text-base">My Cards</h3>
<button className="text-xs text-purple-600 font-medium" onclick="alert('Show all cards')">See All</button>
</div>
<div className="flex space-x-4 overflow-x-auto pb-2">
<div className="min-w-[230px] h-40 bg-gradient-to-r from-blue-400 to-purple-600 rounded-2xl p-5 shadow flex flex-col justify-between text-white cursor-pointer">
<div className="flex items-center justify-between">
<span className="font-bold text-lg tracking-widest">**** 8273</span>
<span className="text-xs">VISA</span>
</div>
<div>
<div className="text-xs text-blue-100 mb-1">Balance</div>
<div className="font-bold text-xl">$5,700</div>
<div className="text-xs text-blue-100">Exp 09/26</div>
</div>
</div>
<div className="min-w-[230px] h-40 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-2xl p-5 shadow flex flex-col justify-between text-white cursor-pointer">
<div className="flex items-center justify-between">
<span className="font-bold text-lg tracking-widest">**** 1309</span>
<span className="text-xs">MASTERCARD</span>
</div>
<div>
<div className="text-xs text-pink-100 mb-1">Balance</div>
<div className="font-bold text-xl">$1,900</div>
<div className="text-xs text-pink-100">Exp 01/25</div>
</div>
</div>
</div>
</div>

<div className="mb-8">
<div className="flex justify-between items-center mb-3">
<h3 className="font-bold text-gray-900 text-base">Quick Actions</h3>
</div>
<div className="grid grid-cols-4 gap-4">
<div className="flex flex-col items-center bg-white rounded-xl shadow p-3 cursor-pointer transition hover:bg-purple-50" onclick="alert('Send Money')">
<div className="bg-purple-500/10 rounded-full p-2 mb-1.5">
<svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 19V6m0 0l8 8m-8-8L4 14" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<span className="text-xs font-medium text-gray-700">Send</span>
</div>
<div className="flex flex-col items-center bg-white rounded-xl shadow p-3 cursor-pointer transition hover:bg-purple-50" onclick="alert('Receive Money')">
<div className="bg-green-500/10 rounded-full p-2 mb-1.5">
<svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 5v13m0 0l-8-8m8 8l8-8" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<span className="text-xs font-medium text-gray-700">Receive</span>
</div>
<div className="flex flex-col items-center bg-white rounded-xl shadow p-3 cursor-pointer transition hover:bg-purple-50" onclick="alert('Top Up')">
<div className="bg-blue-500/10 rounded-full p-2 mb-1.5">
<svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 8v8m4-4H8" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<span className="text-xs font-medium text-gray-700">Top Up</span>
</div>
<div className="flex flex-col items-center bg-white rounded-xl shadow p-3 cursor-pointer transition hover:bg-purple-50" onclick="alert('More')">
<div className="bg-gray-500/10 rounded-full p-2 mb-1.5">
<svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="19.5" cy="12" r="1.5"></circle><circle cx="4.5" cy="12" r="1.5"></circle></svg>
</div>
<span className="text-xs font-medium text-gray-700">More</span>
</div>
</div>
</div>

<div>
<div className="flex justify-between items-center mb-3">
<h3 className="font-bold text-gray-900 text-base">Recent Activity</h3>
<button className="text-xs text-purple-600 font-medium" onclick="alert('See all activity')">See All</button>
</div>
<div className="space-y-3">
<div className="flex items-center bg-white rounded-xl shadow px-4 py-3 cursor-pointer transition hover:bg-purple-50" onclick="alert('Starbucks')">
<div className="w-11 h-11 rounded-full bg-yellow-400/10 flex items-center justify-center mr-3">
<svg className="h-5 w-5 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M8 15a4 4 0 108 0"></path></svg>
</div>
<div className="flex-1">
<div className="font-semibold text-gray-800">Starbucks</div>
<div className="text-xs text-gray-500">Coffee • 10:30AM</div>
</div>
<div className="text-right">
<div className="text-base font-bold text-gray-800">- $5.40</div>
</div>
</div>
<div className="flex items-center bg-white rounded-xl shadow px-4 py-3 cursor-pointer transition hover:bg-purple-50" onclick="alert('Transfer from Anna')">
<div className="w-11 h-11 rounded-full bg-green-400/10 flex items-center justify-center mr-3">
<svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M21 15v3a2 2 0 01-2 2H5a2 2 0 01-2-2v-3m16-4l-8-8m0 0L5 12m8-8v12" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<div className="flex-1">
<div className="font-semibold text-gray-800">From Anna</div>
<div className="text-xs text-gray-500">Income • 9:05AM</div>
</div>
<div className="text-right">
<div className="text-base font-bold text-green-600">+ $120.00</div>
</div>
</div>
</div>
</div>
</main>

<div className="absolute bottom-0 left-0 right-0 h-20 bg-white border-t border-gray-100 flex items-center justify-around px-6 z-10">
<div className="flex flex-col items-center cursor-pointer" onclick="alert('Go to Finance')">
<svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M3 10.5V6.75A2.25 2.25 0 015.25 4.5h13.5A2.25 2.25 0 0121 6.75v3.75m-18 0v6.75A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 17.25V10.5m-18 0h18" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span className="text-xs font-medium text-gray-400 mt-1">Finance</span>
</div>
<div className="flex flex-col items-center cursor-pointer">
<svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><rect height="14" rx="4" width="20" x="2" y="5"></rect><path d="M6 5v-2a2 2 0 012-2h8a2 2 0 012 2v2" strokeLinecap="round"></path></svg>
<span className="text-xs font-bold text-purple-600 mt-1">Wallet</span>
<div className="w-1 h-1 bg-purple-600 rounded-full mt-1"></div>
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
