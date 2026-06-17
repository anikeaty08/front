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
      

<div className="w-full md:max-w-[400px] h-[100dvh] md:h-[850px] bg-slate-50 md:rounded-[2.5rem] md:shadow-2xl md:border-[8px] md:border-slate-900 relative overflow-hidden flex flex-col">

<input checked="" className="hidden" id="tab-home" name="nav" type="radio"/>
<input className="hidden" id="tab-book" name="nav" type="radio"/>
<input className="hidden" id="tab-my" name="nav" type="radio"/>
<input className="hidden" id="tab-admin" name="nav" type="radio"/>



<div className="content-home hidden h-full overflow-y-auto no-scrollbar pb-24 bg-slate-50">

<div className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-sky-800 text-white p-6 pt-12 rounded-b-3xl relative shadow-lg overflow-hidden">

<div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
<div className="relative z-10 flex justify-between items-start mb-6">
<div>
<h1 className="text-2xl font-semibold tracking-tight leading-tight">VELOCITY<br/>TURF</h1>
<div className="h-1 w-8 bg-orange-500 mt-2 rounded-full"></div>
</div>
<button className="bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/10">
<iconify-icon className="text-white" icon="solar:bell-linear" width="24"></iconify-icon>
</button>
</div>
<p className="relative z-10 text-emerald-100 text-sm mb-6 max-w-[85%] leading-relaxed">The premier sports destination in Vaniyambadi. Book courts instantly.</p>

<div className="relative z-10 flex gap-3">
<div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 flex-1 border border-white/5">
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-orange-400" icon="solar:clock-circle-linear"></iconify-icon>
<span className="text-xs font-medium text-emerald-50">Open 24/7</span>
</div>
</div>
<div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 flex-1 border border-white/5">
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-sky-300" icon="solar:map-point-linear"></iconify-icon>
<span className="text-xs font-medium text-emerald-50">Vaniyambadi</span>
</div>
</div>
</div>
</div>

<div className="p-5">
<div className="flex justify-between items-end mb-4">
<h2 className="text-lg font-semibold tracking-tight text-slate-900">Choose Facility</h2>
<span className="text-xs text-emerald-600 font-medium">View all</span>
</div>

<label className="block group cursor-pointer mb-5 relative" htmlFor="tab-book">
<div className="h-48 w-full bg-slate-200 rounded-2xl overflow-hidden relative shadow-md">
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10"></div>
<img alt="Turf" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1529900748604-07564a03e7a6?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute bottom-4 left-4 z-20">
<div className="flex items-center gap-2 mb-1">
<span className="bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded tracking-wide">HOT</span>
<span className="text-white/80 text-xs flex items-center gap-1"><iconify-icon icon="solar:bolt-linear"></iconify-icon> Flood Lights</span>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight">Football / Cricket Turf</h3>
</div>
<div className="absolute bottom-4 right-4 z-20">
<div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-lg px-3 py-1.5 text-white">
<span className="text-xs">₹</span><span className="font-semibold text-lg">1200</span><span className="text-[10px]">/hr</span>
</div>
</div>
</div>
</label>

<label className="block group cursor-pointer relative" htmlFor="tab-book">
<div className="h-40 w-full bg-slate-200 rounded-2xl overflow-hidden relative shadow-md">
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10"></div>

<img alt="Badminton Court" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1626224583764-847890e0e999?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute bottom-4 left-4 z-20">
<div className="flex items-center gap-2 mb-1">
<span className="text-white/80 text-xs flex items-center gap-1"><iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> 2 Courts</span>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight">Badminton Court</h3>
</div>
<div className="absolute bottom-4 right-4 z-20">
<div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-lg px-3 py-1.5 text-white">
<span className="text-xs">₹</span><span className="font-semibold text-lg">250</span><span className="text-[10px]">/hr</span>
</div>
</div>
</div>
</label>
</div>
</div>



<div className="content-book hidden h-full overflow-y-auto no-scrollbar pb-28 bg-slate-50">

<div className="sticky top-0 bg-slate-50/90 backdrop-blur-sm z-30 px-5 pt-12 pb-4 border-b border-slate-100">
<div className="flex items-center gap-4">
<label className="p-2 -ml-2 rounded-full hover:bg-slate-100 text-slate-500" htmlFor="tab-home">
<iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon>
</label>
<h2 className="text-lg font-semibold tracking-tight">Book Slot</h2>
</div>
</div>
<div className="p-5 space-y-8">

<div>
<div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
<div className="flex-shrink-0 relative">
<input checked="" className="peer hidden" id="fac-turf" name="facility" type="radio"/>
<label className="block w-32 p-3 rounded-xl border border-slate-200 bg-white peer-checked:border-emerald-500 peer-checked:ring-1 peer-checked:ring-emerald-500 transition-all" htmlFor="fac-turf">
<iconify-icon className="text-2xl mb-2 text-slate-400 peer-checked:text-emerald-600" icon="solar:football-linear"></iconify-icon>
<div className="text-xs text-slate-500">Premium</div>
<div className="font-semibold text-sm text-slate-800">Turf</div>
</label>
<div className="absolute top-2 right-2 hidden peer-checked:block text-emerald-500">
<iconify-icon icon="solar:check-circle-bold" width="16"></iconify-icon>
</div>
</div>
<div className="flex-shrink-0 relative">
<input className="peer hidden" id="fac-bad" name="facility" type="radio"/>
<label className="block w-32 p-3 rounded-xl border border-slate-200 bg-white peer-checked:border-emerald-500 peer-checked:ring-1 peer-checked:ring-emerald-500 transition-all" htmlFor="fac-bad">
<iconify-icon className="text-2xl mb-2 text-slate-400 peer-checked:text-emerald-600" icon="solar:tennis-ball-linear"></iconify-icon>

<div className="text-xs text-slate-500 flex items-center gap-1 text-orange-500">
<iconify-icon icon="solar:star-linear" width="10"></iconify-icon> Pro Court
                                </div>
<div className="font-semibold text-sm text-slate-800">Badminton</div>
</label>
</div>
</div>
</div>

<div>
<h3 className="text-sm font-semibold text-slate-900 mb-3">Select Date</h3>
<div className="flex gap-3 overflow-x-auto no-scrollbar">

<div className="flex-shrink-0 bg-emerald-600 text-white rounded-2xl p-3 w-16 text-center shadow-lg shadow-emerald-600/20">
<div className="text-xs opacity-80 mb-1">Sat</div>
<div className="text-xl font-bold">22</div>
</div>

<div className="flex-shrink-0 bg-white border border-slate-200 text-slate-600 rounded-2xl p-3 w-16 text-center">
<div className="text-xs opacity-60 mb-1">Sun</div>
<div className="text-xl font-semibold">23</div>
</div>
<div className="flex-shrink-0 bg-white border border-slate-200 text-slate-600 rounded-2xl p-3 w-16 text-center">
<div className="text-xs opacity-60 mb-1">Mon</div>
<div className="text-xl font-semibold">24</div>
</div>
<div className="flex-shrink-0 bg-white border border-slate-200 text-slate-600 rounded-2xl p-3 w-16 text-center">
<div className="text-xs opacity-60 mb-1">Tue</div>
<div className="text-xl font-semibold">25</div>
</div>
</div>
</div>

<div>
<h3 className="text-sm font-semibold text-slate-900 mb-3">Available Slots (1 hr)</h3>
<div className="grid grid-cols-3 gap-3">

<button className="py-2.5 rounded-lg bg-slate-100 text-slate-300 text-sm font-medium border border-transparent cursor-not-allowed decoration-slice line-through decoration-slate-300" disabled="">
                            16:00
                        </button>

<label className="cursor-pointer">
<input className="peer hidden" name="time" type="radio"/>
<div className="py-2.5 rounded-lg bg-white border border-slate-200 text-slate-700 text-sm font-medium text-center hover:border-emerald-400 peer-checked:bg-emerald-600 peer-checked:text-white peer-checked:border-emerald-600 transition-all shadow-sm">
                                17:00
                            </div>
</label>
<label className="cursor-pointer">
<input className="peer hidden" name="time" type="radio"/>
<div className="py-2.5 rounded-lg bg-white border border-slate-200 text-slate-700 text-sm font-medium text-center hover:border-emerald-400 peer-checked:bg-emerald-600 peer-checked:text-white peer-checked:border-emerald-600 transition-all shadow-sm">
                                18:00
                            </div>
</label>
<label className="cursor-pointer">
<input checked="" className="peer hidden" name="time" type="radio"/>
<div className="py-2.5 rounded-lg bg-white border border-slate-200 text-slate-700 text-sm font-medium text-center hover:border-emerald-400 peer-checked:bg-emerald-600 peer-checked:text-white peer-checked:border-emerald-600 transition-all shadow-sm">
                                19:00
                            </div>
</label>
<label className="cursor-pointer">
<input className="peer hidden" name="time" type="radio"/>
<div className="py-2.5 rounded-lg bg-white border border-slate-200 text-slate-700 text-sm font-medium text-center hover:border-emerald-400 peer-checked:bg-emerald-600 peer-checked:text-white peer-checked:border-emerald-600 transition-all shadow-sm">
                                20:00
                            </div>
</label>

<button className="py-2.5 rounded-lg bg-slate-100 text-slate-300 text-sm font-medium border border-transparent cursor-not-allowed line-through" disabled="">
                            21:00
                        </button>
</div>
</div>

<div>
<div className="flex justify-between mb-2">
<h3 className="text-sm font-semibold text-slate-900">Duration</h3>
<span className="text-sm font-semibold text-orange-500">1 Hour</span>
</div>
<input className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer" max="4" min="1" step="1" type="range" value="1"/>
<div className="flex justify-between text-xs text-slate-400 mt-2 px-1">
<span>1h</span>
<span>2h</span>
<span>3h</span>
<span>4h</span>
</div>
</div>

<div className="bg-slate-100 rounded-xl p-4 flex justify-between items-center border border-slate-200">
<div>
<div className="text-xs text-slate-500">Total Amount</div>
<div className="text-lg font-bold text-slate-900">₹1,200</div>
</div>
<div className="text-right">
<div className="text-xs text-emerald-600 font-medium">Pay at venue</div>
</div>
</div>
</div>

<div className="fixed md:absolute bottom-[0px] left-0 w-full p-4 bg-white border-t border-slate-100 z-40 pb-24 md:pb-4">
<button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-xl shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2 transition-transform active:scale-95" onclick="document.getElementById('tab-my').checked = true">
                    Confirm Booking
                    <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>



<div className="content-my hidden h-full overflow-y-auto no-scrollbar pb-24 bg-slate-50">
<div className="px-5 pt-12 pb-6">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">My Bookings</h2>
</div>

<div className="px-5 mb-8">
<div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100 relative">
<div className="h-1.5 w-full bg-emerald-500"></div>
<div className="p-6 text-center">
<div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3 text-emerald-600">
<iconify-icon icon="solar:check-circle-bold" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-slate-900 tracking-tight">Booking Confirmed!</h3>
<p className="text-xs text-slate-500 mt-1">Show this QR at the venue</p>
<div className="my-6 border-y border-dashed border-slate-200 py-6">
<div className="bg-slate-900 w-32 h-32 mx-auto rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:qr-code-bold" width="64"></iconify-icon>
</div>
<div className="mt-2 text-xs font-mono text-slate-500">VT-20260122-007</div>
</div>
<div className="grid grid-cols-2 gap-4 text-left">
<div>
<div className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">Date</div>
<div className="text-sm font-semibold text-slate-800">Sat, 22 Jan</div>
</div>
<div>
<div className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">Time</div>
<div className="text-sm font-semibold text-slate-800">19:00 - 20:00</div>
</div>
</div>
</div>
<div className="bg-slate-50 p-3 text-center border-t border-slate-100">
<span className="text-xs font-medium text-orange-500">To Pay: ₹1,200</span>
</div>
</div>
</div>

<div className="px-5">
<h3 className="text-sm font-semibold text-slate-900 mb-4">Past Bookings</h3>
<div className="space-y-3">

<div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
<iconify-icon icon="solar:tennis-ball-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">Badminton</div>
<div className="text-xs text-slate-500">12 Jan • 10:00 AM</div>
</div>
</div>
<div className="px-2 py-1 bg-slate-100 rounded text-[10px] font-medium text-slate-500">Completed</div>
</div>

<div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between opacity-60">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-500">
<iconify-icon icon="solar:football-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">Turf</div>
<div className="text-xs text-slate-500">05 Jan • 06:00 PM</div>
</div>
</div>
<div className="px-2 py-1 bg-red-50 rounded text-[10px] font-medium text-red-500">Cancelled</div>
</div>
</div>
</div>
</div>



<div className="content-admin hidden h-full overflow-y-auto no-scrollbar pb-24 bg-slate-50">
<div className="bg-slate-900 text-white pt-12 pb-6 px-5 rounded-b-3xl">
<div className="flex justify-between items-center mb-6">
<div>
<div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Velocity Admin</div>
<h2 className="text-xl font-semibold">Dashboard</h2>
</div>
<div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
<span className="text-xs font-bold">A</span>
</div>
</div>

<div className="grid grid-cols-2 gap-3">
<div className="bg-slate-800 p-3 rounded-xl border border-slate-700">
<div className="text-slate-400 text-xs mb-1">Today's Revenue</div>
<div className="text-xl font-bold text-emerald-400">₹8,450</div>
</div>
<div className="bg-slate-800 p-3 rounded-xl border border-slate-700">
<div className="text-slate-400 text-xs mb-1">Bookings</div>
<div className="text-xl font-bold text-white">14</div>
</div>
</div>
</div>
<div className="px-5 mt-6">
<div className="flex justify-between items-center mb-4">
<h3 className="text-sm font-semibold text-slate-900">Live Schedule</h3>
<div className="text-xs text-emerald-600 font-medium flex items-center gap-1">
<iconify-icon icon="solar:calendar-linear"></iconify-icon> Today
                    </div>
</div>

<div className="space-y-3">

<div className="bg-white p-3 rounded-xl border-l-4 border-l-emerald-500 shadow-sm border-y border-r border-slate-200">
<div className="flex justify-between items-start mb-2">
<div className="text-sm font-semibold text-slate-900">Kumar V.</div>
<span className="text-[10px] bg-emerald-50 text-emerald-600 px-1.5 py-0.5 rounded font-medium">Paid</span>
</div>
<div className="flex items-center gap-4 text-xs text-slate-500">
<div className="flex items-center gap-1">
<iconify-icon className="text-slate-400" icon="solar:clock-circle-linear"></iconify-icon>
                                17:00 - 18:00
                            </div>
<div className="flex items-center gap-1">
<iconify-icon className="text-slate-400" icon="solar:football-linear"></iconify-icon>
                                Turf
                            </div>
</div>
</div>

<div className="bg-white p-3 rounded-xl border-l-4 border-l-orange-500 shadow-sm border-y border-r border-slate-200">
<div className="flex justify-between items-start mb-2">
<div className="text-sm font-semibold text-slate-900">Rahul S.</div>
<span className="text-[10px] bg-orange-50 text-orange-600 px-1.5 py-0.5 rounded font-medium">Pending</span>
</div>
<div className="flex items-center gap-4 text-xs text-slate-500">
<div className="flex items-center gap-1">
<iconify-icon className="text-slate-400" icon="solar:clock-circle-linear"></iconify-icon>
                                18:00 - 19:00
                            </div>
<div className="flex items-center gap-1">
<iconify-icon className="text-slate-400" icon="solar:tennis-ball-linear"></iconify-icon>
                                Court 1
                            </div>
</div>
</div>

<div className="border border-dashed border-slate-300 rounded-xl p-3 flex items-center justify-center gap-2 text-slate-400">
<iconify-icon icon="solar:add-circle-linear"></iconify-icon>
<span className="text-sm">19:00 - 20:00 (Empty)</span>
</div>
</div>
</div>
</div>



<div className="bottom-nav absolute bottom-0 w-full bg-white border-t border-slate-100 flex justify-around items-center py-3 pb-6 md:pb-3 z-50 text-slate-400 text-[10px] font-medium">
<label className="nav-home flex flex-col items-center gap-1 cursor-pointer hover:text-emerald-500 transition-colors w-16" htmlFor="tab-home">
<iconify-icon icon="solar:home-smile-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span>Home</span>
</label>
<label className="nav-book flex flex-col items-center gap-1 cursor-pointer hover:text-emerald-500 transition-colors w-16" htmlFor="tab-book">
<iconify-icon icon="solar:calendar-add-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span>Book</span>
</label>
<label className="nav-my flex flex-col items-center gap-1 cursor-pointer hover:text-emerald-500 transition-colors w-16" htmlFor="tab-my">
<iconify-icon icon="solar:ticket-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span>My Bookings</span>
</label>
<label className="nav-admin flex flex-col items-center gap-1 cursor-pointer hover:text-emerald-500 transition-colors w-16" htmlFor="tab-admin">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span>Admin</span>
</label>
</div>
</div>

    </>
  );
}
