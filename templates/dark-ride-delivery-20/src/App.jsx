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
      

<div className="w-full max-w-md bg-white h-full min-h-screen relative shadow-2xl flex flex-col pb-24">

<header className="pt-12 px-6 pb-4 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-sm z-20">
<div className="flex flex-col">
<p className="text-xs text-zinc-500 font-medium mb-1">Current Location</p>
<div className="flex items-center gap-2 cursor-pointer group">
<h1 className="text-lg font-semibold tracking-tight text-zinc-900 group-hover:text-zinc-600 transition-colors">SoHo, New York</h1>
<iconify-icon className="text-zinc-400" height="16" icon="lucide:chevron-down" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
<button className="relative p-2 rounded-full hover:bg-zinc-50 transition-colors">
<iconify-icon className="text-zinc-800" height="22" icon="lucide:bell" strokeWidth="1.5" width="22"></iconify-icon>
<span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border border-white"></span>
</button>
</header>

<div className="px-6 mb-8">
<div className="bg-zinc-100/80 rounded-2xl flex items-center p-4 gap-3 shadow-sm border border-zinc-100 focus-within:ring-2 focus-within:ring-zinc-200 transition-all">
<iconify-icon className="text-zinc-500" height="20" icon="lucide:search" strokeWidth="1.5" width="20"></iconify-icon>
<input className="bg-transparent w-full outline-none text-sm text-zinc-900 placeholder:text-zinc-400 font-medium" placeholder="Where do you want to go?" type="text"/>
<div className="flex items-center pl-3 border-l border-zinc-300">
<button className="bg-white rounded-full p-1.5 shadow-sm flex items-center justify-center">
<iconify-icon className="text-zinc-800" height="14" icon="lucide:mic" strokeWidth="1.5" width="14"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="px-6 mb-8">
<div className="grid grid-cols-2 gap-3">

<button className="col-span-1 bg-zinc-50 hover:bg-zinc-100 border border-zinc-100 rounded-3xl p-5 flex flex-col justify-between h-32 relative overflow-hidden group transition-all duration-300">
<div className="absolute right-[-10px] bottom-[-10px] opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon height="80" icon="lucide:car-taxi-front" width="80"></iconify-icon>
</div>
<div className="bg-zinc-900 w-10 h-10 rounded-full flex items-center justify-center text-white mb-2 shadow-lg shadow-zinc-200">
<iconify-icon height="20" icon="lucide:car" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="font-semibold text-lg tracking-tight text-left">Ride</span>
</button>

<button className="col-span-1 bg-zinc-50 hover:bg-zinc-100 border border-zinc-100 rounded-3xl p-5 flex flex-col justify-between h-32 relative overflow-hidden group transition-all duration-300">
<div className="absolute right-[-10px] bottom-[-10px] opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon height="80" icon="lucide:utensils" width="80"></iconify-icon>
</div>
<div className="bg-emerald-600 w-10 h-10 rounded-full flex items-center justify-center text-white mb-2 shadow-lg shadow-emerald-100">
<iconify-icon height="20" icon="lucide:utensils" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="font-semibold text-lg tracking-tight text-left">Eat</span>
</button>

<button className="bg-zinc-50 hover:bg-zinc-100 border border-zinc-100 rounded-3xl p-4 flex flex-col gap-3 group transition-all duration-300">
<div className="flex justify-between items-start">
<div className="bg-orange-500 w-8 h-8 rounded-full flex items-center justify-center text-white shadow-md shadow-orange-100">
<iconify-icon height="16" icon="lucide:shopping-bag" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="bg-zinc-200 text-zinc-600 text-[10px] font-semibold px-2 py-0.5 rounded-full">Fast</span>
</div>
<span className="font-medium text-sm tracking-tight text-left">Grocery</span>
</button>

<button className="bg-zinc-50 hover:bg-zinc-100 border border-zinc-100 rounded-3xl p-4 flex flex-col gap-3 group transition-all duration-300 relative">
<div className="flex justify-between items-start">
<div className="bg-indigo-600 w-8 h-8 rounded-full flex items-center justify-center text-white shadow-md shadow-indigo-100">
<iconify-icon height="16" icon="lucide:users" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="bg-indigo-100 text-indigo-700 text-[10px] font-semibold px-2 py-0.5 rounded-full">Save</span>
</div>
<span className="font-medium text-sm tracking-tight text-left">Pool</span>
</button>
</div>
</div>

<div className="px-6 mb-8">
<div className="relative w-full h-36 rounded-3xl overflow-hidden bg-zinc-900 text-white shadow-lg shadow-zinc-200 flex items-center">

<div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-500 via-zinc-900 to-zinc-900"></div>
<div className="relative z-10 p-6 flex-1">
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-white/10 border border-white/10 backdrop-blur-md mb-3">
<iconify-icon className="text-emerald-400" height="12" icon="lucide:leaf" width="12"></iconify-icon>
<span className="text-[10px] font-medium tracking-wide">ECO FRIENDLY</span>
</div>
<h3 className="text-lg font-semibold tracking-tight leading-tight mb-1">Commute &amp; Save</h3>
<p className="text-xs text-zinc-400 font-normal mb-4">Carpool with neighbors to save up to 40%.</p>
<button className="bg-white text-zinc-950 text-xs font-semibold px-4 py-2 rounded-full hover:bg-zinc-100 transition-colors">
                        Find a ride
                    </button>
</div>
<div className="relative z-10 pr-4">
<iconify-icon className="text-indigo-500/50 rotate-12" height="64" icon="lucide:map-pin" width="64"></iconify-icon>
</div>
</div>
</div>

<div className="mb-4">
<div className="px-6 flex items-center justify-between mb-4">
<h2 className="text-sm font-semibold text-zinc-900 tracking-tight">Recent</h2>
<button className="text-xs text-indigo-600 font-medium hover:text-indigo-700">View all</button>
</div>
<div className="flex overflow-x-auto hide-scrollbar px-6 gap-4 pb-4">

<div className="min-w-[140px] flex flex-col gap-2 group cursor-pointer">
<div className="w-full h-24 bg-zinc-100 rounded-2xl overflow-hidden relative border border-zinc-100 group-hover:border-zinc-300 transition-colors">
<div className="absolute inset-0 flex items-center justify-center text-zinc-300">
<iconify-icon height="32" icon="lucide:building-2" strokeWidth="1" width="32"></iconify-icon>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900 leading-tight">Work</h4>
<p className="text-xs text-zinc-500 mt-0.5">124 Broadway, NYC</p>
</div>
</div>

<div className="min-w-[140px] flex flex-col gap-2 group cursor-pointer">
<div className="w-full h-24 bg-zinc-100 rounded-2xl overflow-hidden relative border border-zinc-100 group-hover:border-zinc-300 transition-colors">
<div className="absolute inset-0 flex items-center justify-center text-zinc-300">
<iconify-icon height="32" icon="lucide:home" strokeWidth="1" width="32"></iconify-icon>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900 leading-tight">Home</h4>
<p className="text-xs text-zinc-500 mt-0.5">34 Green St, Jersey</p>
</div>
</div>

<div className="min-w-[140px] flex flex-col gap-2 group cursor-pointer">
<div className="w-full h-24 bg-zinc-100 rounded-2xl overflow-hidden relative border border-zinc-100 group-hover:border-zinc-300 transition-colors">
<div className="absolute inset-0 flex items-center justify-center text-zinc-300">
<iconify-icon height="32" icon="lucide:coffee" strokeWidth="1" width="32"></iconify-icon>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900 leading-tight">Blue Bottle</h4>
<p className="text-xs text-zinc-500 mt-0.5">Coffee Shop • 1.2mi</p>
</div>
</div>
</div>
</div>

<div className="px-6 mb-8 mt-2">
<div className="bg-white border border-zinc-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-2xl p-4 flex items-center gap-4">
<div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 shrink-0">
<iconify-icon height="20" icon="lucide:shopping-bag" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between items-center mb-1">
<h4 className="text-sm font-semibold text-zinc-900">Whole Foods</h4>
<span className="text-xs font-mono text-zinc-400">12:30 PM</span>
</div>
<div className="w-full bg-zinc-100 h-1.5 rounded-full overflow-hidden">
<div className="bg-emerald-500 h-full w-2/3 rounded-full"></div>
</div>
<p className="text-[10px] text-zinc-500 mt-1.5 font-medium">Picking up your order...</p>
</div>
</div>
</div>

<nav className="absolute bottom-0 w-full glass pb-8 pt-4 px-8 flex justify-between items-end z-30">
<button className="flex flex-col items-center gap-1 text-zinc-900 group">
<iconify-icon className="group-hover:scale-110 transition-transform" height="24" icon="lucide:home" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium tracking-wide">Home</span>
</button>
<button className="flex flex-col items-center gap-1 text-zinc-400 hover:text-zinc-600 transition-colors group">
<iconify-icon className="group-hover:scale-110 transition-transform" height="24" icon="lucide:layout-grid" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium tracking-wide">Services</span>
</button>
<button className="flex flex-col items-center gap-1 text-zinc-400 hover:text-zinc-600 transition-colors group">
<iconify-icon className="group-hover:scale-110 transition-transform" height="24" icon="lucide:receipt" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium tracking-wide">Activity</span>
</button>
<button className="flex flex-col items-center gap-1 text-zinc-400 hover:text-zinc-600 transition-colors group">
<div className="w-6 h-6 rounded-full bg-zinc-200 overflow-hidden border border-zinc-300">
<img alt="Profile" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix"/>
</div>
<span className="text-[10px] font-medium tracking-wide">Account</span>
</button>
</nav>
</div>

    </>
  );
}
