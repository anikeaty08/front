import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Live clock
    const updateClock = () => {
      const now = new Date();
      document.getElementById('clock').textContent =
        now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
    };
    setInterval(updateClock, 1000); updateClock();

    // Render lucide icons
    lucide.createIcons();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="relative w-[390px] max-w-full h-[844px] bg-gradient-to-b from-[#fff4e8] to-[#ffe6d1] shadow-xl rounded-[40px] overflow-hidden border-4 border-[#ffd7b5] flex flex-col mx-auto">

<div className="absolute left-1/2 -top-1.5 -translate-x-1/2 z-10 flex items-center justify-center" style={{height: '44px'}}>
<div className="w-24 h-4 rounded-b-3xl mt-2 bg-black/10"></div>
</div>

<div className="flex-1 flex flex-col">

<div className="flex justify-between items-center px-3 py-1 text-xs mt-2">
<span className="font-medium" id="clock">12:10</span>
<div className="flex space-x-1 opacity-80">
<i className="w-4 h-4" data-lucide="signal"></i>
<i className="w-4 h-4" data-lucide="wifi"></i>
<i className="w-4 h-4" data-lucide="battery"></i>
</div>
</div>

<header className="px-6 py-4 flex items-center justify-between">
<h1 className="text-3xl font-semibold tracking-tight">My Pets</h1>
<button aria-label="Settings" className="h-10 w-10 flex items-center justify-center rounded-full bg-[#ffe8d8] hover:bg-[#ffd9c0] transition-colors">
<i className="w-5 h-5 text-orange-500 gear-icon" data-lucide="settings"></i>
</button>
</header>

<main className="px-6 pb-24 flex-1 overflow-y-auto space-y-8">

<div className="w-full rounded-2xl p-0.5 bg-gradient-to-r from-orange-400 to-amber-500">
<div className="flex items-center space-x-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-[calc(1rem-2px)] px-6 py-4">
<div className="h-12 w-12 flex items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-amber-500">
<i className="w-6 h-6 text-white" data-lucide="sparkles"></i>
</div>
<div className="flex flex-col text-start">
<span className="text-lg font-semibold text-gray-900 tracking-tight">Fun Fact!</span>
<span className="text-sm text-gray-600">Your pets have been fed 47 times this month</span>
</div>
</div>
</div>

<section className="space-y-4">
<h2 className="text-lg font-semibold tracking-tight">Your Pets</h2>
<div className="grid grid-cols-2 gap-4">

<button className="group flex flex-col items-center p-4 rounded-2xl bg-white/60 hover:bg-white/80 transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-orange-400" onclick="alert('Luna selected!')">
<div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 mb-3 overflow-hidden border-2 border-white shadow-sm">
<div className="w-full h-full bg-gradient-to-br from-slate-400 to-slate-600 flex items-center justify-center">
<i className="w-8 h-8 text-white" data-lucide="cat"></i>
</div>
</div>
<span className="text-sm font-medium text-gray-900">Luna</span>
</button>

<button className="group flex flex-col items-center p-4 rounded-2xl bg-white/60 hover:bg-white/80 transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-orange-400" onclick="alert('Max selected!')">
<div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-300 to-amber-600 mb-3 overflow-hidden border-2 border-white shadow-sm">
<div className="w-full h-full bg-gradient-to-br from-amber-400 to-amber-700 flex items-center justify-center">
<i className="w-8 h-8 text-white" data-lucide="dog"></i>
</div>
</div>
<span className="text-sm font-medium text-gray-900">Max</span>
</button>

<button className="group flex flex-col items-center p-4 rounded-2xl bg-white/60 hover:bg-white/80 transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-orange-400" onclick="alert('Bella selected!')">
<div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-300 to-pink-500 mb-3 overflow-hidden border-2 border-white shadow-sm">
<div className="w-full h-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center">
<i className="w-8 h-8 text-white" data-lucide="rabbit"></i>
</div>
</div>
<span className="text-sm font-medium text-gray-900">Bella</span>
</button>

<button className="group flex flex-col items-center p-4 rounded-2xl bg-white/60 hover:bg-white/80 transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-orange-400" onclick="alert('Charlie selected!')">
<div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-300 to-green-500 mb-3 overflow-hidden border-2 border-white shadow-sm">
<div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
<i className="w-8 h-8 text-white" data-lucide="bird"></i>
</div>
</div>
<span className="text-sm font-medium text-gray-900">Charlie</span>
</button>

<button className="group flex flex-col items-center p-4 rounded-2xl bg-white/60 hover:bg-white/80 transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-orange-400" onclick="alert('Milo selected!')">
<div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-300 to-orange-500 mb-3 overflow-hidden border-2 border-white shadow-sm">
<div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
<i className="w-8 h-8 text-white" data-lucide="fish"></i>
</div>
</div>
<span className="text-sm font-medium text-gray-900">Milo</span>
</button>

<button className="group flex flex-col items-center p-4 rounded-2xl bg-white/40 hover:bg-white/60 transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-orange-400 border-2 border-dashed border-gray-300" onclick="alert('Add new pet!')">
<div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 mb-3 flex items-center justify-center border-2 border-dashed border-gray-300">
<i className="w-8 h-8 text-gray-400 group-hover:text-gray-600 transition-colors" data-lucide="plus"></i>
</div>
<span className="text-sm font-medium text-gray-500 group-hover:text-gray-700 transition-colors">Add Pet</span>
</button>
</div>
</section>
</main>
</div>

<nav className="absolute bottom-0 inset-x-0 rounded-t-3xl py-4 px-6 backdrop-blur bg-white/90">
<div className="flex justify-around items-center">
<button className="flex flex-col items-center opacity-100">
<i className="w-5 h-5" data-lucide="home"></i>
<span className="text-xs mt-1">Home</span>
</button>
<button className="flex flex-col items-center opacity-60">
<i className="w-5 h-5" data-lucide="list-checks"></i>
<span className="text-xs mt-1">Tasks</span>
</button>
<button className="flex flex-col items-center opacity-60">
<i className="w-5 h-5" data-lucide="activity"></i>
<span className="text-xs mt-1">Health</span>
</button>
<button className="flex flex-col items-center opacity-60">
<i className="w-5 h-5" data-lucide="more-horizontal"></i>
<span className="text-xs mt-1">More</span>
</button>
</div>
</nav>
</div>



    </>
  );
}
