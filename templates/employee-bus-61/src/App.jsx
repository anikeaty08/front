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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-lg font-medium tracking-tighter" href="#">VPS</a>
<nav className="hidden md:flex space-x-6 text-sm text-gray-500">
<a className="text-gray-900 font-medium" href="#">Book Seat</a>
<a className="hover:text-gray-900 transition-colors" href="#">My Bookings</a>
<a className="hover:text-gray-900 transition-colors" href="#">Schedules</a>
</nav>
</div>
<div className="flex items-center gap-4">
<button className="hidden sm:flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors">
<iconify-icon icon="solar:headphones-round-linear" strokeWidth="1.5"></iconify-icon>
                    Support
                </button>
</div>
</div>
</header>
<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
<div className="mb-10">
<h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-2">Employee Bus Booking</h1>
<p className="text-sm text-gray-500 max-w-xl">Select your bus, choose a seat, and enter your details to save your booking.</p>
</div>
<div className="flex flex-col lg:flex-row gap-12 items-start">

<div className="w-full lg:w-1/3 flex flex-col gap-6 sticky top-24">
<div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col gap-5">
<div className="flex items-center justify-between pb-4 border-b border-gray-100">
<h2 className="text-lg font-medium tracking-tight">Passenger Details</h2>
<span className="bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full text-xs font-medium">Internal</span>
</div>

<div>
<label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wider">Select Bus</label>
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-black transition-colors">
<iconify-icon icon="solar:bus-linear" strokeWidth="1.5"></iconify-icon>
</div>
<select className="block w-full pl-10 pr-10 py-3 text-sm border border-gray-200 rounded-xl focus:ring-1 focus:ring-black focus:border-black appearance-none bg-transparent text-gray-900 outline-none transition-all cursor-pointer">
<option disabled="" selected="" value="">Choose a bus...</option>
<option>BUS A</option>
<option>BUS B</option>
<option>BUS C</option>
<option>BUS D</option>
<option>BUS E</option>
</select>
<div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-gray-400">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>

<div>
<label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wider">Full Name</label>
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-black transition-colors">
<iconify-icon icon="solar:user-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-3 py-3 text-sm border border-gray-200 rounded-xl focus:ring-1 focus:ring-black focus:border-black bg-transparent text-gray-900 outline-none transition-all placeholder:text-gray-400" placeholder="Enter your full name" type="text"/>
</div>
</div>

<div>
<label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wider">Employee ID</label>
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-black transition-colors">
<iconify-icon icon="solar:id-card-linear" strokeWidth="1.5"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-3 py-3 text-sm border border-gray-200 rounded-xl focus:ring-1 focus:ring-black focus:border-black bg-transparent text-gray-900 outline-none transition-all placeholder:text-gray-400" placeholder="e.g. EMP-12345" type="text"/>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-2/3 flex flex-col items-center">
<h2 className="text-xl font-medium tracking-tight mb-6 w-full text-center md:text-left">Select Seat</h2>

<div className="bg-gray-200/50 p-3 md:p-4 rounded-[3rem] w-full max-w-lg border border-gray-200 shadow-sm relative overflow-hidden">

<div className="bg-white rounded-[2.5rem] pt-8 pb-12 px-6 md:px-10 flex flex-col items-center relative shadow-sm border border-gray-100">

<div className="w-full flex justify-between items-end mb-10 pb-6 border-b border-gray-100 relative">
<div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 bg-white px-3 text-xs uppercase tracking-widest text-gray-400 font-medium">Front</div>
<div className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-400 shadow-sm">
<iconify-icon icon="solar:steering-wheel-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-xl border border-gray-100 bg-gray-50 flex items-center justify-center text-gray-300">
<iconify-icon icon="solar:user-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="grid grid-cols-[1fr_1fr_0.5fr_1fr_1fr] gap-y-4 gap-x-2 w-full">

<button className="w-full aspect-[4/5] rounded-t-lg rounded-b flex items-center justify-center border border-gray-200 text-gray-500 hover:border-black hover:text-black transition-all group relative">
<span className="text-xs font-medium">1A</span>
</button>
<button className="w-full aspect-[4/5] rounded-t-lg rounded-b flex items-center justify-center border border-gray-200 text-gray-500 hover:border-black hover:text-black transition-all group relative">
<span className="text-xs font-medium">1B</span>
</button>
<div className="flex justify-center items-center text-gray-300 text-xs">1</div>
<button className="w-full aspect-[4/5] rounded-t-lg rounded-b flex items-center justify-center bg-gray-100 border border-transparent text-gray-400 cursor-not-allowed">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-full aspect-[4/5] rounded-t-lg rounded-b flex items-center justify-center bg-gray-100 border border-transparent text-gray-400 cursor-not-allowed">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>

<button className="w-full aspect-[4/5] rounded-t-lg rounded-b flex items-center justify-center bg-gray-100 border border-transparent text-gray-400 cursor-not-allowed">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-full aspect-[4/5] rounded-t-lg rounded-b flex items-center justify-center border border-gray-200 text-gray-500 hover:border-black hover:text-black transition-all group relative">
<span className="text-xs font-medium">2B</span>
</button>
<div className="flex justify-center items-center text-gray-300 text-xs">2</div>
<button className="w-full aspect-[4/5] rounded-t-lg rounded-b flex items-center justify-center border border-gray-200 text-gray-500 hover:border-black hover:text-black transition-all group relative">
<span className="text-xs font-medium">2C</span>
</button>
<button className="w-full aspect-[4/5] rounded-t-lg rounded-b flex items-center justify-center border border-gray-200 text-gray-500 hover:border-black hover:text-black transition-all group relative">
<span className="text-xs font-medium">2D</span>
</button>

<button className="w-full aspect-[4/5] rounded-t-lg rounded-b flex items-center justify-center border border-gray-200 text-gray-500 hover:border-black hover:text-black transition-all group relative">
<span className="text-xs font-medium">3A</span>
</button>
<button className="w-full aspect-[4/5] rounded-t-lg rounded-b flex items-center justify-center border border-black bg-black text-white shadow-md transition-all group relative ring-2 ring-black/20 ring-offset-1">
<span className="text-xs font-medium">3B</span>
</button>
<div className="flex justify-center items-center text-gray-300 text-xs">3</div>
<button className="w-full aspect-[4/5] rounded-t-lg rounded-b flex items-center justify-center border border-gray-200 text-gray-500 hover:border-black hover:text-black transition-all group relative">
<span className="text-xs font-medium">3C</span>
</button>
<button className="w-full aspect-[4/5] rounded-t-lg rounded-b flex items-center justify-center border border-gray-200 text-gray-500 hover:border-black hover:text-black transition-all group relative">
<span className="text-xs font-medium">3D</span>
</button>

<button className="w-full aspect-[4/5] rounded-t-lg rounded-b flex items-center justify-center border border-gray-200 text-gray-500 hover:border-black hover:text-black transition-all group relative">
<span className="text-xs font-medium">4A</span>
</button>
<button className="w-full aspect-[4/5] rounded-t-lg rounded-b flex items-center justify-center border border-gray-200 text-gray-500 hover:border-black hover:text-black transition-all group relative">
<span className="text-xs font-medium">4B</span>
</button>
<div className="flex justify-center items-center text-gray-300 text-xs">4</div>
<button className="w-full aspect-[4/5] rounded-t-lg rounded-b flex items-center justify-center border border-gray-200 text-gray-500 hover:border-black hover:text-black transition-all group relative">
<span className="text-xs font-medium">4C</span>
</button>
<button className="w-full aspect-[4/5] rounded-t-lg rounded-b flex items-center justify-center border border-gray-200 text-gray-500 hover:border-black hover:text-black transition-all group relative">
<span className="text-xs font-medium">4D</span>
</button>

<button className="w-full aspect-[4/5] rounded-t-lg rounded-b flex items-center justify-center border border-gray-200 text-gray-500 hover:border-black hover:text-black transition-all group relative">
<span className="text-xs font-medium">5A</span>
</button>
<button className="w-full aspect-[4/5] rounded-t-lg rounded-b flex items-center justify-center border border-gray-200 text-gray-500 hover:border-black hover:text-black transition-all group relative">
<span className="text-xs font-medium">5B</span>
</button>
<div className="flex justify-center items-center text-gray-300 text-xs">5</div>
<button className="w-full aspect-[4/5] rounded-t-lg rounded-b flex items-center justify-center bg-gray-100 border border-transparent text-gray-400 cursor-not-allowed">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-full aspect-[4/5] rounded-t-lg rounded-b flex items-center justify-center border border-gray-200 text-gray-500 hover:border-black hover:text-black transition-all group relative">
<span className="text-xs font-medium">5D</span>
</button>

<div className="col-span-5 grid grid-cols-5 gap-2 mt-4 pt-4 border-t border-gray-100 relative">
<div className="absolute top-[-10px] left-1/2 -translate-x-1/2 bg-white px-3 text-xs uppercase tracking-widest text-gray-400 font-medium">Rear</div>
<button className="w-full aspect-[4/5] rounded-t-lg rounded-b flex items-center justify-center border border-gray-200 text-gray-500 hover:border-black hover:text-black transition-all group relative">
<span className="text-xs font-medium">6A</span>
</button>
<button className="w-full aspect-[4/5] rounded-t-lg rounded-b flex items-center justify-center border border-gray-200 text-gray-500 hover:border-black hover:text-black transition-all group relative">
<span className="text-xs font-medium">6B</span>
</button>
<button className="w-full aspect-[4/5] rounded-t-lg rounded-b flex items-center justify-center border border-gray-200 text-gray-500 hover:border-black hover:text-black transition-all group relative">
<span className="text-xs font-medium">6M</span>
</button>
<button className="w-full aspect-[4/5] rounded-t-lg rounded-b flex items-center justify-center border border-gray-200 text-gray-500 hover:border-black hover:text-black transition-all group relative">
<span className="text-xs font-medium">6C</span>
</button>
<button className="w-full aspect-[4/5] rounded-t-lg rounded-b flex items-center justify-center border border-gray-200 text-gray-500 hover:border-black hover:text-black transition-all group relative">
<span className="text-xs font-medium">6D</span>
</button>
</div>
</div>
</div>
</div>

<div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-xs text-gray-500 bg-white py-3 px-6 rounded-full border border-gray-200 shadow-sm">
<div className="flex items-center gap-2">
<div className="w-3.5 h-3.5 rounded-sm border border-gray-300 bg-white"></div>
<span>Available</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3.5 h-3.5 rounded-sm bg-black"></div>
<span className="text-gray-900 font-medium">Selected</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3.5 h-3.5 rounded-sm bg-gray-100 flex items-center justify-center text-xs text-gray-400">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="2"></iconify-icon>
</div>
<span>Unavailable</span>
</div>
</div>
</div>
</div>
</main>

<div className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-xl border-t border-gray-200 shadow-[0_-4px_24px_-12px_rgba(0,0,0,0.1)] z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-4 w-full sm:w-auto">
<div>
<div className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">Selected Seat</div>
<div className="text-sm font-medium flex gap-1">
<span className="bg-gray-100 px-2 py-0.5 rounded text-gray-900">3B</span>
</div>
</div>
</div>
<div className="w-full sm:w-auto flex gap-3">
<button className="hidden md:block px-6 py-2.5 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-xl hover:bg-gray-50 transition-colors">
                    Cancel
                </button>
<button className="w-full sm:w-auto px-8 py-2.5 bg-black text-white text-sm font-medium rounded-xl hover:bg-gray-800 transition-colors shadow-sm flex items-center justify-center gap-2">
                    Save
                    <iconify-icon icon="solar:disk-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>

    </>
  );
}
