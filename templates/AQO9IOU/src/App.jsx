import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    function updateClock() {
      const now = new Date();
      document.getElementById('clock-more').textContent =
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
<span className="font-mono" id="clock-more">9:41</span>
<div className="flex space-x-1">
<i className="fas fa-signal"></i>
<i className="fas fa-wifi"></i>
<i className="fas fa-battery-three-quarters"></i>
</div>
</div>

<header className="px-6 py-4">
<div className="flex justify-between items-center">
<h1 className="text-2xl font-bold">More</h1>
<span className="h-8 w-8 flex items-center justify-center opacity-60">
<i className="fas fa-ellipsis-h"></i>
</span>
</div>
</header>
<main className="px-4 pb-28 flex-1 overflow-y-auto hide-scrollbar">

<div className="grid grid-cols-4 gap-4 mb-8">
<div className="flex flex-col items-center cursor-pointer group">
<span className="p-4 bg-gradient-to-tr from-purple-500 to-pink-400 rounded-2xl shadow-icon mb-2"><i className="fas fa-gift text-xl"></i></span>
<span className="text-xs text-white/80 group-hover:text-pink-400">Rewards</span>
</div>
<div className="flex flex-col items-center cursor-pointer group">
<span className="p-4 bg-gradient-to-tr from-blue-500 to-indigo-400 rounded-2xl shadow-icon mb-2"><i className="fas fa-bell text-xl"></i></span>
<span className="text-xs text-white/80 group-hover:text-blue-400">Alerts</span>
</div>
<div className="flex flex-col items-center cursor-pointer group">
<span className="p-4 bg-gradient-to-tr from-green-500 to-emerald-400 rounded-2xl shadow-icon mb-2"><i className="fas fa-crown text-xl"></i></span>
<span className="text-xs text-white/80 group-hover:text-green-400">Pro</span>
</div>
<div className="flex flex-col items-center cursor-pointer group">
<span className="p-4 bg-gradient-to-tr from-yellow-500 to-amber-400 rounded-2xl shadow-icon mb-2"><i className="fas fa-share-alt text-xl"></i></span>
<span className="text-xs text-white/80 group-hover:text-yellow-400">Invite</span>
</div>
</div>

<div className="space-y-6">
<div className="bg-[#181830] rounded-2xl shadow-lg p-5 space-y-2">
<a className="flex items-center justify-between py-2 px-1 hover:bg-white/5 rounded-lg cursor-pointer transition" href="#">
<div className="flex items-center gap-4">
<span className="bg-[#212143] rounded-full p-2"><i className="fa-solid fa-user text-purple-400"></i></span>
<span>My Profile</span>
</div>
<i className="fas fa-chevron-right text-xs opacity-40"></i>
</a>
<a className="flex items-center justify-between py-2 px-1 hover:bg-white/5 rounded-lg cursor-pointer transition" href="#">
<div className="flex items-center gap-4">
<span className="bg-[#212143] rounded-full p-2"><i className="fa-solid fa-star text-yellow-400"></i></span>
<span>Rate Us</span>
</div>
<i className="fas fa-chevron-right text-xs opacity-40"></i>
</a>
<a className="flex items-center justify-between py-2 px-1 hover:bg-white/5 rounded-lg cursor-pointer transition" href="#">
<div className="flex items-center gap-4">
<span className="bg-[#212143] rounded-full p-2"><i className="fa-solid fa-file-contract text-emerald-400"></i></span>
<span>Terms &amp; Conditions</span>
</div>
<i className="fas fa-chevron-right text-xs opacity-40"></i>
</a>
<a className="flex items-center justify-between py-2 px-1 hover:bg-white/5 rounded-lg cursor-pointer transition" href="#">
<div className="flex items-center gap-4">
<span className="bg-[#212143] rounded-full p-2"><i className="fa-solid fa-shield-halved text-pink-400"></i></span>
<span>Privacy Policy</span>
</div>
<i className="fas fa-chevron-right text-xs opacity-40"></i>
</a>
<a className="flex items-center justify-between pt-2 mt-1 border-t border-white/10 hover:bg-white/5 rounded-lg cursor-pointer transition" href="#">
<div className="flex items-center gap-4">
<span className="bg-[#212143] rounded-full p-2"><i className="fa-solid fa-right-from-bracket text-red-400"></i></span>
<span>Logout</span>
</div>
<i className="fas fa-chevron-right text-xs opacity-40"></i>
</a>
</div>
<div className="bg-[#181830] rounded-2xl shadow-lg p-5 space-y-2">
<a className="flex items-center justify-between py-2 px-1 hover:bg-white/5 rounded-lg cursor-pointer transition" href="#">
<div className="flex items-center gap-4">
<span className="bg-[#212143] rounded-full p-2"><i className="fa-solid fa-phone-volume text-blue-400"></i></span>
<span>Contact Support</span>
</div>
<i className="fas fa-chevron-right text-xs opacity-40"></i>
</a>
<a className="flex items-center justify-between py-2 px-1 hover:bg-white/5 rounded-lg cursor-pointer transition" href="#">
<div className="flex items-center gap-4">
<span className="bg-[#212143] rounded-full p-2"><i className="fa-solid fa-info-circle text-gray-400"></i></span>
<span>About App</span>
</div>
<i className="fas fa-chevron-right text-xs opacity-40"></i>
</a>
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
<i className="fas fa-chart-pie text-gray-400"></i>
<span className="text-xs text-gray-400 mt-1">Stats</span>
</div>
<div className="flex flex-col items-center cursor-pointer">
<i className="fas fa-ellipsis-h text-purple-500"></i>
<span className="text-xs text-purple-500 mt-1">More</span>
<div className="w-1 h-1 bg-purple-500 rounded-full mt-1"></div>
</div>
</div>
</nav>
</div>
</div>


    </>
  );
}
