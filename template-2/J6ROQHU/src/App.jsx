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
      
        // Clock
        const updateClock = () => {
            const now = new Date();
            document.getElementById('clock').textContent =
                now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
        };
        setInterval(updateClock, 1000);
        updateClock();

        // Render lucide icons
        lucide.createIcons();
    
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
      

<div className="relative w-[390px] max-w-full h-[844px] bg-gradient-to-b from-[#fff4e8] to-[#ffe6d1] shadow-xl rounded-[40px] overflow-hidden border-4 border-[#ffd7b5] flex flex-col mx-auto">

<div className="absolute left-1/2 -top-1.5 -translate-x-1/2 z-10 flex items-center justify-center" style={{height: `44px`}}>
<div className="w-24 h-4 rounded-b-3xl mt-2 bg-black/10"></div>
</div>

<div className="flex justify-between items-center px-3 py-1 text-xs mt-2 flex-shrink-0">
<span className="font-medium" id="clock">12:10</span>
<div className="flex space-x-1 opacity-80">
<i className="w-4 h-4" data-lucide="signal"></i>
<i className="w-4 h-4" data-lucide="wifi"></i>
<i className="w-4 h-4" data-lucide="battery"></i>
</div>
</div>

<header className="px-6 py-4 flex items-center justify-between flex-shrink-0">
<div className="flex items-center">
<button aria-label="Back" className="h-9 w-9 flex items-center justify-center rounded-full bg-[#ffe8d8] hover:bg-[#ffd9c0] transition-colors">
<i className="w-5 h-5 text-orange-500" data-lucide="chevron-left"></i>
</button>
<h1 className="text-3xl font-semibold tracking-tight ml-3">Pet Details</h1>
</div>
<button aria-label="Edit" className="h-9 w-9 flex items-center justify-center rounded-full bg-[#ffe8d8] hover:bg-[#ffd9c0] transition-colors">
<i className="w-5 h-5 text-orange-500" data-lucide="edit-3"></i>
</button>
</header>

<main className="flex-1 overflow-y-auto scrollbar-hide">
<div className="px-6 pb-32 space-y-6">

<section className="relative">
<div className="bg-gradient-to-br from-[#fff2e8] to-[#ffe7d5] rounded-2xl p-6 text-center">
<div className="relative inline-block">
<img alt="Milo" className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-white shadow-lg" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=200&q=80" />
<div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-white flex items-center justify-center">
<i className="w-4 h-4 text-white" data-lucide="heart"></i>
</div>
</div>
<h2 className="text-2xl font-semibold mt-4 tracking-tight">Milo</h2>
<p className="text-gray-600 mt-1">Golden Retriever • 3 years old</p>
<div className="flex justify-center gap-4 mt-4">
<div className="text-center">
<div className="text-xl font-semibold text-orange-500">32</div>
<div className="text-xs text-gray-500">Tasks Done</div>
</div>
<div className="w-px bg-gray-300"></div>
<div className="text-center">
<div className="text-xl font-semibold text-rose-500">8.5</div>
<div className="text-xs text-gray-500">Health Score</div>
</div>
<div className="w-px bg-gray-300"></div>
<div className="text-center">
<div className="text-xl font-semibold text-amber-500">45</div>
<div className="text-xs text-gray-500">lbs Weight</div>
</div>
</div>
</div>
</section>

<section>
<h3 className="text-lg font-semibold mb-3 tracking-tight">Quick Actions</h3>
<div className="grid grid-cols-4 gap-3">
<button className="flex flex-col items-center justify-center rounded-xl bg-[#fff2e8] aspect-square gap-2 hover:bg-[#ffe7d5] transition-colors">
<div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
<i className="w-5 h-5 text-orange-500" data-lucide="paw-print"></i>
</div>
<span className="text-xs">Walk</span>
</button>
<button className="flex flex-col items-center justify-center rounded-xl bg-[#fff2e8] aspect-square gap-2 hover:bg-[#ffe7d5] transition-colors">
<div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center">
<i className="w-5 h-5 text-rose-500" data-lucide="utensils"></i>
</div>
<span className="text-xs">Feed</span>
</button>
<button className="flex flex-col items-center justify-center rounded-xl bg-[#fff2e8] aspect-square gap-2 hover:bg-[#ffe7d5] transition-colors">
<div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
<i className="w-5 h-5 text-amber-500" data-lucide="scissors"></i>
</div>
<span className="text-xs">Groom</span>
</button>
<button className="flex flex-col items-center justify-center rounded-xl bg-[#fff2e8] aspect-square gap-2 hover:bg-[#ffe7d5] transition-colors">
<div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
<i className="w-5 h-5 text-red-500" data-lucide="stethoscope"></i>
</div>
<span className="text-xs">Vet</span>
</button>
</div>
</section>

<section>
<h3 className="text-lg font-semibold mb-3 tracking-tight">Information</h3>
<div className="space-y-3">
<div className="flex items-center justify-between bg-[#fff2e8] rounded-xl px-4 py-3">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-gray-500" data-lucide="calendar"></i>
<span>Birthday</span>
</div>
<span className="text-gray-600">March 15, 2021</span>
</div>
<div className="flex items-center justify-between bg-[#fff2e8] rounded-xl px-4 py-3">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-gray-500" data-lucide="palette"></i>
<span>Color</span>
</div>
<span className="text-gray-600">Golden</span>
</div>
<div className="flex items-center justify-between bg-[#fff2e8] rounded-xl px-4 py-3">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-gray-500" data-lucide="zap"></i>
<span>Energy Level</span>
</div>
<div className="flex gap-1">
<div className="w-2 h-2 rounded-full bg-orange-400"></div>
<div className="w-2 h-2 rounded-full bg-orange-400"></div>
<div className="w-2 h-2 rounded-full bg-orange-400"></div>
<div className="w-2 h-2 rounded-full bg-orange-400"></div>
<div className="w-2 h-2 rounded-full bg-gray-300"></div>
</div>
</div>
<div className="flex items-center justify-between bg-[#fff2e8] rounded-xl px-4 py-3">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-gray-500" data-lucide="shield-check"></i>
<span>Microchip ID</span>
</div>
<span className="text-gray-600">982000123456789</span>
</div>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-3">
<h3 className="text-lg font-semibold tracking-tight">Recent Activities</h3>
<button className="text-sm text-orange-500 hover:text-orange-600">View All</button>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3 bg-[#fff2e8] rounded-xl px-4 py-3">
<div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
<i className="w-4 h-4 text-orange-500" data-lucide="paw-print"></i>
</div>
<div className="flex-1">
<p className="text-sm font-medium">Morning Walk</p>
<p className="text-xs text-gray-500">Today at 8:30 AM</p>
</div>
<div className="w-2 h-2 rounded-full bg-green-400"></div>
</div>
<div className="flex items-center gap-3 bg-[#fff2e8] rounded-xl px-4 py-3">
<div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center">
<i className="w-4 h-4 text-rose-500" data-lucide="utensils"></i>
</div>
<div className="flex-1">
<p className="text-sm font-medium">Breakfast</p>
<p className="text-xs text-gray-500">Today at 7:00 AM</p>
</div>
<div className="w-2 h-2 rounded-full bg-green-400"></div>
</div>
<div className="flex items-center gap-3 bg-[#fff2e8] rounded-xl px-4 py-3">
<div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
<i className="w-4 h-4 text-amber-500" data-lucide="scissors"></i>
</div>
<div className="flex-1">
<p className="text-sm font-medium">Grooming Session</p>
<p className="text-xs text-gray-500">Yesterday at 2:00 PM</p>
</div>
<div className="w-2 h-2 rounded-full bg-green-400"></div>
</div>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-3">
<h3 className="text-lg font-semibold tracking-tight">Upcoming</h3>
<button className="text-sm text-orange-500 hover:text-orange-600">Add Task</button>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3 bg-[#fff2e8] rounded-xl px-4 py-3">
<div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
<i className="w-4 h-4 text-red-500" data-lucide="stethoscope"></i>
</div>
<div className="flex-1">
<p className="text-sm font-medium">Vet Checkup</p>
<p className="text-xs text-gray-500">Tomorrow at 10:00 AM</p>
</div>
<div className="w-2 h-2 rounded-full bg-amber-400"></div>
</div>
<div className="flex items-center gap-3 bg-[#fff2e8] rounded-xl px-4 py-3">
<div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
<i className="w-4 h-4 text-orange-500" data-lucide="paw-print"></i>
</div>
<div className="flex-1">
<p className="text-sm font-medium">Evening Walk</p>
<p className="text-xs text-gray-500">Today at 6:00 PM</p>
</div>
<div className="w-2 h-2 rounded-full bg-blue-400"></div>
</div>
</div>
</section>

<section>
<h3 className="text-lg font-semibold mb-3 tracking-tight">Medical Records</h3>
<div className="space-y-3">
<div className="flex items-center gap-3 bg-[#fff2e8] rounded-xl px-4 py-3">
<div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
<i className="w-4 h-4 text-green-500" data-lucide="syringe"></i>
</div>
<div className="flex-1">
<p className="text-sm font-medium">Rabies Vaccination</p>
<p className="text-xs text-gray-500">Valid until March 2025</p>
</div>
<div className="w-2 h-2 rounded-full bg-green-400"></div>
</div>
<div className="flex items-center gap-3 bg-[#fff2e8] rounded-xl px-4 py-3">
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
<i className="w-4 h-4 text-blue-500" data-lucide="pill"></i>
</div>
<div className="flex-1">
<p className="text-sm font-medium">Heartworm Prevention</p>
<p className="text-xs text-gray-500">Monthly treatment</p>
</div>
<div className="w-2 h-2 rounded-full bg-blue-400"></div>
</div>
</div>
</section>

<section>
<h3 className="text-lg font-semibold mb-3 tracking-tight">Notes</h3>
<div className="bg-[#fff2e8] rounded-xl p-4">
<p className="text-sm text-gray-700">Milo loves playing fetch and is very social with other dogs. He's been doing great with his training and responds well to treats. Remember to brush his coat regularly to prevent matting.</p>
</div>
</section>

<section>
<h3 className="text-lg font-semibold mb-3 tracking-tight">Emergency Contacts</h3>
<div className="space-y-3">
<div className="flex items-center justify-between bg-[#fff2e8] rounded-xl px-4 py-3">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-gray-500" data-lucide="phone"></i>
<div>
<p className="text-sm font-medium">Dr. Sarah Johnson</p>
<p className="text-xs text-gray-500">Primary Veterinarian</p>
</div>
</div>
<button className="text-green-500 hover:text-green-600">
<i className="w-5 h-5" data-lucide="phone"></i>
</button>
</div>
<div className="flex items-center justify-between bg-[#fff2e8] rounded-xl px-4 py-3">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-gray-500" data-lucide="phone"></i>
<div>
<p className="text-sm font-medium">24/7 Emergency Clinic</p>
<p className="text-xs text-gray-500">Animal Hospital</p>
</div>
</div>
<button className="text-red-500 hover:text-red-600">
<i className="w-5 h-5" data-lucide="phone"></i>
</button>
</div>
</div>
</section>
</div>
</main>

<nav className="absolute bottom-0 left-0 right-0 rounded-t-3xl py-4 px-6 backdrop-blur bg-white/90 flex-shrink-0">
<div className="flex justify-between items-center">
<div className="flex flex-col items-center opacity-60">
<i className="w-5 h-5" data-lucide="home"></i>
<span className="text-xs mt-1">Home</span>
</div>
<div className="flex flex-col items-center opacity-60">
<i className="w-5 h-5" data-lucide="list-checks"></i>
<span className="text-xs mt-1">Tasks</span>
</div>
<div className="relative -mt-8">
<button aria-label="Add" className="w-14 h-14 rounded-full bg-gradient-to-r flex items-center justify-center shadow-lg from-orange-400 shadow-orange-400/30 to-rose-400">
<i className="w-6 h-6 text-white" data-lucide="plus"></i>
</button>
</div>
<div className="flex flex-col items-center opacity-60">
<i className="w-5 h-5" data-lucide="activity"></i>
<span className="text-xs mt-1">Stats</span>
</div>
<div className="flex flex-col items-center opacity-60">
<i className="w-5 h-5" data-lucide="more-horizontal"></i>
<span className="text-xs mt-1">More</span>
</div>
</div>
</nav>
</div>




    </>
  );
}
