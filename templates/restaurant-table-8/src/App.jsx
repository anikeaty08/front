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
      

<div className="flex flex-wrap justify-center gap-10 w-full max-w-[1400px]">

<div className="relative w-full max-w-sm h-[840px] bg-slate-900 rounded-[2.5rem] border-[6px] border-slate-800 overflow-hidden shadow-2xl flex flex-col shrink-0 ring-1 ring-white/10 group">

<div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-indigo-500/10 to-transparent pointer-events-none"></div>
<div className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-teal-500/20 rounded-full blur-[80px] pointer-events-none"></div>

<div className="flex items-center justify-between px-6 pt-12 pb-4 z-10">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 p-[1px]">
<div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
<img alt="Profile" className="opacity-90" src="https://ui-avatars.com/api/?name=Alex+M&amp;background=0f172a&amp;color=cbd5e1"/>
</div>
</div>
<div>
<p className="text-xs text-slate-400 font-medium">Welcome back,</p>
<h2 className="text-sm text-slate-100 font-semibold tracking-wide">Alex Morgan</h2>
</div>
</div>
<button className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-white/5 transition">
<iconify-icon className="text-slate-300" icon="lucide:bell" width="20"></iconify-icon>
</button>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar px-6 space-y-6 pb-24 z-10">

<div className="flex justify-center py-2 opacity-50">
<span className="text-xs tracking-[0.3em] font-light uppercase text-slate-500">MasaVar Systems</span>
</div>

<div className="glass-panel p-5 rounded-3xl relative overflow-hidden neon-glow-purple">
<div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-xs text-slate-400 font-medium mb-1">Live Occupancy</p>
<h1 className="text-3xl text-white font-medium tracking-tight">82%</h1>
</div>
<span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            Open
                        </span>
</div>

<div className="w-full bg-slate-800/50 h-1.5 rounded-full overflow-hidden mb-4">
<div className="h-full bg-gradient-to-r from-teal-400 to-purple-500 w-[82%] rounded-full"></div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-slate-900/40 rounded-xl p-3 border border-white/5">
<p className="text-xs text-slate-500">Tables Free</p>
<p className="text-lg text-slate-200 font-medium mt-1">4 <span className="text-xs text-slate-600 font-normal">/ 22</span></p>
</div>
<div className="bg-slate-900/40 rounded-xl p-3 border border-white/5">
<p className="text-xs text-slate-500">Waitlist</p>
<p className="text-lg text-slate-200 font-medium mt-1">12 <span className="text-xs text-slate-600 font-normal">min</span></p>
</div>
</div>
</div>

<div>
<div className="flex justify-between items-center mb-4">
<h3 className="text-base text-slate-200 font-medium tracking-tight">Floor Status</h3>
<button className="text-xs text-teal-400 hover:text-teal-300 transition">View Map</button>
</div>
<div className="grid grid-cols-4 gap-3">


<div className="aspect-square glass-card rounded-2xl flex flex-col items-center justify-center border-purple-500/30 bg-purple-500/5">
<span className="text-xs font-medium text-purple-200">T1</span>
<div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1 shadow-[0_0_8px_rgba(168,85,247,0.6)]"></div>
</div>
<div className="aspect-square glass-card rounded-2xl flex flex-col items-center justify-center border-purple-500/30 bg-purple-500/5">
<span className="text-xs font-medium text-purple-200">T2</span>
<div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1 shadow-[0_0_8px_rgba(168,85,247,0.6)]"></div>
</div>

<div className="aspect-square glass-card rounded-2xl flex flex-col items-center justify-center border-teal-500/20 bg-teal-500/5">
<span className="text-xs font-medium text-teal-200">T3</span>
<div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1 shadow-[0_0_8px_rgba(45,212,191,0.6)]"></div>
</div>
<div className="aspect-square glass-card rounded-2xl flex flex-col items-center justify-center border-purple-500/30 bg-purple-500/5">
<span className="text-xs font-medium text-purple-200">T4</span>
<div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1"></div>
</div>

<div className="aspect-square glass-card rounded-2xl flex flex-col items-center justify-center border-teal-500/20 bg-teal-500/5">
<span className="text-xs font-medium text-teal-200">T5</span>
<div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1 shadow-[0_0_8px_rgba(45,212,191,0.6)]"></div>
</div>
<div className="aspect-square glass-card rounded-2xl flex flex-col items-center justify-center border-purple-500/30 bg-purple-500/5">
<span className="text-xs font-medium text-purple-200">T6</span>
<div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1"></div>
</div>

<div className="aspect-square glass-card rounded-2xl flex flex-col items-center justify-center border-amber-500/20 bg-amber-500/5 opacity-60">
<span className="text-xs font-medium text-amber-200">T7</span>
<div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1"></div>
</div>
<div className="aspect-square glass-card rounded-2xl flex flex-col items-center justify-center border-purple-500/30 bg-purple-500/5">
<span className="text-xs font-medium text-purple-200">T8</span>
<div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1"></div>
</div>
</div>
</div>

<div>
<h3 className="text-base text-slate-200 font-medium tracking-tight mb-4">Actions</h3>
<div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
<button className="flex flex-col items-center gap-2 min-w-[80px]">
<div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center hover:bg-white/10 transition border border-white/5">
<iconify-icon className="text-teal-400" icon="lucide:calendar-plus" width="24"></iconify-icon>
</div>
<span className="text-xs text-slate-400">Book</span>
</button>
<button className="flex flex-col items-center gap-2 min-w-[80px]">
<div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center hover:bg-white/10 transition border border-white/5">
<iconify-icon className="text-violet-400" icon="lucide:users" width="24"></iconify-icon>
</div>
<span className="text-xs text-slate-400">Staff</span>
</button>
<button className="flex flex-col items-center gap-2 min-w-[80px]">
<div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center hover:bg-white/10 transition border border-white/5">
<iconify-icon className="text-blue-400" icon="lucide:file-text" width="24"></iconify-icon>
</div>
<span className="text-xs text-slate-400">Menu</span>
</button>
<button className="flex flex-col items-center gap-2 min-w-[80px]">
<div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center hover:bg-white/10 transition border border-white/5">
<iconify-icon className="text-slate-400" icon="lucide:settings-2" width="24"></iconify-icon>
</div>
<span className="text-xs text-slate-400">Setup</span>
</button>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full px-6 pb-6 pt-10 bg-gradient-to-t from-slate-900 via-slate-900 to-transparent z-20 pointer-events-none">
<div className="glass-panel h-16 rounded-full flex items-center justify-between px-2 pointer-events-auto shadow-2xl ring-1 ring-white/5">
<button className="w-12 h-12 rounded-full flex items-center justify-center text-teal-400">
<iconify-icon icon="lucide:home" width="22"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-300 transition">
<iconify-icon icon="lucide:calendar" width="22"></iconify-icon>
</button>

<button className="w-14 h-14 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-full flex items-center justify-center text-white -mt-8 border-[4px] border-slate-900 shadow-lg shadow-teal-500/30 hover:scale-105 transition transform neon-glow-teal">
<iconify-icon icon="lucide:qr-code" width="24"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-300 transition">
<iconify-icon icon="lucide:utensils-crossed" width="22"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-300 transition">
<iconify-icon icon="lucide:user" width="22"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="relative w-full max-w-sm h-[840px] bg-slate-900 rounded-[2.5rem] border-[6px] border-slate-800 overflow-hidden shadow-2xl flex flex-col shrink-0 ring-1 ring-white/10">

<div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-violet-900/20 to-transparent pointer-events-none"></div>

<div className="flex items-center justify-between px-6 pt-12 pb-2 z-10">
<button className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center hover:bg-white/5 transition text-slate-300">
<iconify-icon icon="lucide:chevron-left" width="22"></iconify-icon>
</button>
<h2 className="text-base text-slate-100 font-medium tracking-tight">Reservations</h2>
<button className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center hover:bg-white/5 transition text-slate-300">
<iconify-icon icon="lucide:search" width="20"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto no-scrollbar px-6 pt-4 pb-24 z-10">

<div className="flex items-center justify-between mb-2">
<h3 className="text-sm text-slate-400 font-medium">October 2023</h3>
<button className="text-xs text-teal-400">Today</button>
</div>
<div className="flex gap-3 overflow-x-auto no-scrollbar mb-8 pb-2">
<div className="flex flex-col items-center gap-1 min-w-[56px] p-2 rounded-2xl border border-white/5 bg-slate-800/50">
<span className="text-[10px] text-slate-500 uppercase tracking-wider">Mon</span>
<span className="text-sm font-medium text-slate-400">23</span>
</div>

<div className="flex flex-col items-center gap-1 min-w-[56px] p-2 rounded-2xl bg-gradient-to-b from-teal-500 to-teal-600 shadow-lg shadow-teal-500/20">
<span className="text-[10px] text-teal-100 uppercase tracking-wider">Tue</span>
<span className="text-sm font-medium text-white">24</span>
</div>
<div className="flex flex-col items-center gap-1 min-w-[56px] p-2 rounded-2xl border border-white/5 bg-slate-800/50">
<span className="text-[10px] text-slate-500 uppercase tracking-wider">Wed</span>
<span className="text-sm font-medium text-slate-400">25</span>
</div>
<div className="flex flex-col items-center gap-1 min-w-[56px] p-2 rounded-2xl border border-white/5 bg-slate-800/50">
<span className="text-[10px] text-slate-500 uppercase tracking-wider">Thu</span>
<span className="text-sm font-medium text-slate-400">26</span>
</div>
<div className="flex flex-col items-center gap-1 min-w-[56px] p-2 rounded-2xl border border-white/5 bg-slate-800/50">
<span className="text-[10px] text-slate-500 uppercase tracking-wider">Fri</span>
<span className="text-sm font-medium text-slate-400">27</span>
</div>
</div>

<div className="mb-8">
<h3 className="text-sm text-slate-200 font-medium mb-4">Availability</h3>
<div className="grid grid-cols-4 gap-2">
<button className="py-2 rounded-lg text-xs font-medium bg-slate-800/50 text-slate-500 border border-white/5">17:00</button>
<button className="py-2 rounded-lg text-xs font-medium bg-slate-800/50 text-slate-500 border border-white/5 line-through decoration-slate-600">17:30</button>
<button className="py-2 rounded-lg text-xs font-medium bg-white/10 text-white border border-teal-500/50 relative overflow-hidden">
                            18:00
                            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-teal-500"></div>
</button>
<button className="py-2 rounded-lg text-xs font-medium bg-slate-800/50 text-slate-300 border border-white/5 hover:bg-white/5">18:30</button>
<button className="py-2 rounded-lg text-xs font-medium bg-slate-800/50 text-slate-300 border border-white/5 hover:bg-white/5">19:00</button>
<button className="py-2 rounded-lg text-xs font-medium bg-slate-800/50 text-slate-300 border border-white/5 hover:bg-white/5">19:30</button>
<button className="py-2 rounded-lg text-xs font-medium bg-slate-800/50 text-slate-500 border border-white/5 line-through decoration-slate-600">20:00</button>
<button className="py-2 rounded-lg text-xs font-medium bg-slate-800/50 text-slate-300 border border-white/5 hover:bg-white/5">20:30</button>
</div>
</div>

<div>
<h3 className="text-sm text-slate-200 font-medium mb-4">Upcoming (3)</h3>

<div className="glass-panel p-4 rounded-2xl mb-3 flex items-center gap-4 group hover:bg-white/5 transition border-l-[3px] border-l-teal-500">
<div className="w-12 h-12 rounded-xl bg-slate-800 overflow-hidden shrink-0">
<img alt="" className="w-full h-full object-cover opacity-80" src="https://ui-avatars.com/api/?name=Sarah+J&amp;background=random"/>
</div>
<div className="flex-1">
<h4 className="text-sm text-slate-100 font-medium">Sarah Jenkins</h4>
<div className="flex items-center gap-3 mt-1">
<span className="text-xs text-slate-400 flex items-center gap-1"><iconify-icon icon="lucide:users" width="12"></iconify-icon> 4 Guests</span>
<span className="text-xs text-slate-400 flex items-center gap-1"><iconify-icon icon="lucide:armchair" width="12"></iconify-icon> T-12</span>
</div>
</div>
<div className="text-right">
<span className="block text-sm text-teal-400 font-medium">18:00</span>
<span className="text-[10px] text-slate-500 uppercase font-medium tracking-wide">Confirmed</span>
</div>
</div>

<div className="glass-panel p-4 rounded-2xl mb-3 flex items-center gap-4 group hover:bg-white/5 transition border-l-[3px] border-l-violet-500">
<div className="w-12 h-12 rounded-xl bg-slate-800 overflow-hidden shrink-0">
<img alt="" className="w-full h-full object-cover opacity-80" src="https://ui-avatars.com/api/?name=Mike+R&amp;background=random"/>
</div>
<div className="flex-1">
<h4 className="text-sm text-slate-100 font-medium">Mike Ross</h4>
<div className="flex items-center gap-3 mt-1">
<span className="text-xs text-slate-400 flex items-center gap-1"><iconify-icon icon="lucide:users" width="12"></iconify-icon> 2 Guests</span>
<span className="text-xs text-slate-400 flex items-center gap-1"><iconify-icon icon="lucide:armchair" width="12"></iconify-icon> T-05</span>
</div>
</div>
<div className="text-right">
<span className="block text-sm text-violet-400 font-medium">18:15</span>
<span className="text-[10px] text-slate-500 uppercase font-medium tracking-wide">Seated</span>
</div>
</div>

<div className="glass-panel p-4 rounded-2xl mb-3 flex items-center gap-4 group hover:bg-white/5 transition border-l-[3px] border-l-amber-500 opacity-60">
<div className="w-12 h-12 rounded-xl bg-slate-800 overflow-hidden shrink-0">
<img alt="" className="w-full h-full object-cover opacity-80" src="https://ui-avatars.com/api/?name=David+L&amp;background=random"/>
</div>
<div className="flex-1">
<h4 className="text-sm text-slate-100 font-medium">David Lee</h4>
<div className="flex items-center gap-3 mt-1">
<span className="text-xs text-slate-400 flex items-center gap-1"><iconify-icon icon="lucide:users" width="12"></iconify-icon> 6 Guests</span>
<span className="text-xs text-slate-400 flex items-center gap-1"><iconify-icon icon="lucide:clock" width="12"></iconify-icon> Late</span>
</div>
</div>
<div className="text-right">
<span className="block text-sm text-slate-400 font-medium">17:45</span>
<span className="text-[10px] text-amber-500 uppercase font-medium tracking-wide">Pending</span>
</div>
</div>
</div>
</div>

<div className="absolute bottom-6 left-6 right-6 z-20">
<button className="w-full py-4 rounded-2xl bg-slate-100 text-slate-900 font-semibold text-sm shadow-lg shadow-white/10 hover:bg-white transition flex items-center justify-center gap-2">
<iconify-icon icon="lucide:plus" width="18"></iconify-icon> New Reservation
                </button>
</div>
</div>

<div className="relative w-full max-w-sm h-[840px] bg-slate-900 rounded-[2.5rem] border-[6px] border-slate-800 overflow-hidden shadow-2xl flex flex-col shrink-0 ring-1 ring-white/10">
<div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-[60px] pointer-events-none"></div>

<div className="flex items-center justify-between px-6 pt-12 pb-6 z-10">
<h2 className="text-xl text-slate-100 font-medium tracking-tight">Kitchen Orders</h2>
<div className="flex gap-2">
<button className="w-9 h-9 rounded-full border border-white/5 bg-slate-800/50 flex items-center justify-center text-slate-400">
<iconify-icon icon="lucide:sliders-horizontal" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="px-6 mb-6">
<div className="flex gap-3 overflow-x-auto no-scrollbar">
<button className="px-4 py-2 rounded-full bg-white/10 text-white text-xs font-medium border border-white/10 whitespace-nowrap">Active (5)</button>
<button className="px-4 py-2 rounded-full bg-transparent text-slate-500 text-xs font-medium border border-slate-800 hover:border-slate-700 whitespace-nowrap">Preparing</button>
<button className="px-4 py-2 rounded-full bg-transparent text-slate-500 text-xs font-medium border border-slate-800 hover:border-slate-700 whitespace-nowrap">Ready to Serve</button>
</div>
</div>
<div className="flex-1 overflow-y-auto no-scrollbar px-6 pb-24 space-y-4 z-10">

<div className="glass-panel p-5 rounded-3xl relative overflow-hidden group">
<div className="absolute top-0 left-0 w-1 h-full bg-amber-500"></div>
<div className="flex justify-between items-start mb-4 pl-2">
<div>
<div className="flex items-center gap-2 mb-1">
<span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-500 text-[10px] font-semibold border border-amber-500/20 uppercase tracking-wide">Cooking</span>
<span className="text-xs text-slate-500">#ORD-920</span>
</div>
<h3 className="text-lg text-slate-200 font-medium">Table 5</h3>
</div>
<div className="text-right">
<span className="block text-2xl text-slate-100 font-light font-mono tracking-tighter">12:45</span>
<span className="text-[10px] text-slate-500">Elapsed Time</span>
</div>
</div>

<div className="space-y-3 pl-2 mb-5">
<div className="flex justify-between items-center">
<div className="flex items-center gap-3">
<span className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center text-xs text-slate-300 font-medium border border-white/5">2x</span>
<span className="text-sm text-slate-300">Wagyu Burger</span>
</div>
<span className="w-3 h-3 rounded-full border border-slate-600"></span>
</div>
<div className="flex justify-between items-center">
<div className="flex items-center gap-3">
<span className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center text-xs text-slate-300 font-medium border border-white/5">1x</span>
<span className="text-sm text-slate-300">Truffle Fries</span>
</div>
<span className="w-3 h-3 rounded-full border border-amber-500 bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
</div>
</div>

<div className="pl-2">
<div className="w-full h-1 bg-slate-800 rounded-full mb-2 overflow-hidden">
<div className="h-full w-2/3 bg-gradient-to-r from-amber-600 to-amber-400 rounded-full"></div>
</div>
<div className="flex justify-between text-[10px] text-slate-500 font-medium uppercase tracking-wider">
<span>Order</span>
<span className="text-amber-400">Prep</span>
<span>Serve</span>
</div>
</div>
</div>

<div className="glass-panel p-5 rounded-3xl relative overflow-hidden group border-teal-500/30">
<div className="absolute top-0 left-0 w-1 h-full bg-teal-500"></div>
<div className="flex justify-between items-start mb-4 pl-2">
<div>
<div className="flex items-center gap-2 mb-1">
<span className="px-2 py-0.5 rounded bg-teal-500/10 text-teal-400 text-[10px] font-semibold border border-teal-500/20 uppercase tracking-wide neon-glow-teal">Ready</span>
<span className="text-xs text-slate-500">#ORD-921</span>
</div>
<h3 className="text-lg text-slate-200 font-medium">Table 2</h3>
</div>
<div className="text-right">
<span className="block text-2xl text-teal-400 font-light font-mono tracking-tighter">04:20</span>
<span className="text-[10px] text-slate-500">Since Ready</span>
</div>
</div>
<div className="space-y-3 pl-2 mb-5">
<div className="flex justify-between items-center opacity-50">
<div className="flex items-center gap-3">
<span className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center text-xs text-slate-300 font-medium border border-white/5">2x</span>
<span className="text-sm text-slate-300 line-through">Mojito</span>
</div>
<iconify-icon className="text-teal-500" icon="lucide:check-circle-2"></iconify-icon>
</div>
<div className="flex justify-between items-center opacity-50">
<div className="flex items-center gap-3">
<span className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center text-xs text-slate-300 font-medium border border-white/5">1x</span>
<span className="text-sm text-slate-300 line-through">Caesar Salad</span>
</div>
<iconify-icon className="text-teal-500" icon="lucide:check-circle-2"></iconify-icon>
</div>
</div>

<button className="w-full py-3 rounded-xl bg-teal-500 text-white font-medium text-sm hover:bg-teal-400 transition shadow-lg shadow-teal-500/20">
                        Mark as Served
                    </button>
</div>

<div className="glass-panel p-5 rounded-3xl relative overflow-hidden group opacity-80">
<div className="absolute top-0 left-0 w-1 h-full bg-purple-500"></div>
<div className="flex justify-between items-start mb-2 pl-2">
<div>
<div className="flex items-center gap-2 mb-1">
<span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 text-[10px] font-semibold border border-purple-500/20 uppercase tracking-wide">New</span>
</div>
<h3 className="text-lg text-slate-200 font-medium">Table 8</h3>
</div>
<button className="text-xs text-purple-400 border border-purple-500/30 px-3 py-1 rounded-full hover:bg-purple-500/10 transition">Accept</button>
</div>

<div className="pl-2">
<p className="text-xs text-slate-400">3 items • $45.00</p>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
