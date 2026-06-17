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



        lucide.createIcons({
            attrs: {
                "stroke-width": 1.5
            }
        });
    
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
      

<div className="max-w-[1600px] mx-auto flex flex-col gap-8">

<div className="flex justify-between items-center">

<div className="relative w-96">
<i className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" data-lucide="search"></i>
<input className="w-full pl-12 pr-4 py-3 bg-white rounded-full text-base border-none outline-none focus:ring-2 focus:ring-slate-100 shadow-sm placeholder:text-slate-400" placeholder="Search room, guest, book, etc" type="text"/>
</div>

<div className="flex items-center gap-4">
<button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-slate-50 transition-colors relative">
<i className="w-6 h-6 text-slate-800" data-lucide="bell"></i>
<span className="absolute top-3 right-3.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
</button>
<div className="bg-white rounded-full p-1 flex items-center shadow-sm">
<button className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center">
<i className="w-5 h-5 text-white" data-lucide="moon"></i>
</button>
<button className="w-10 h-10 rounded-full flex items-center justify-center">
<i className="w-5 h-5 text-slate-400" data-lucide="sun"></i>
</button>
</div>
<div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
<img alt="Profile" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=128&amp;q=80"/>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-4">
<h1 className="text-3xl font-medium text-slate-900 tracking-tight">Hey, Sarah. Ready to Manage Bookings?</h1>
<button className="bg-white hover:bg-slate-50 text-slate-900 px-6 py-3 rounded-full font-medium shadow-sm flex items-center gap-2 border border-slate-100">
<i className="w-5 h-5" data-lucide="plus"></i>
                Add New Reservation
            </button>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

<div className="lg:col-span-8 xl:col-span-9 flex flex-col gap-8">

<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

<div className="bg-white p-6 rounded-3xl shadow-sm flex flex-col gap-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
<i className="w-5 h-5 text-slate-600" data-lucide="map-pin"></i>
</div>
<span className="text-base text-slate-500">Total Booking</span>
</div>
<div className="mt-2">
<h2 className="text-4xl font-medium text-slate-900 tracking-tight">345</h2>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-slate-400">Last 30 days</span>
<span className="text-emerald-500 font-medium">+10.8%</span>
</div>
</div>

<div className="bg-white p-6 rounded-3xl shadow-sm flex flex-col gap-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
<i className="w-5 h-5 text-slate-600" data-lucide="building-2"></i>
</div>
<span className="text-base text-slate-500">Active Properties</span>
</div>
<div className="mt-2">
<h2 className="text-4xl font-medium text-slate-900 tracking-tight">124</h2>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-slate-400">Last 30 days</span>
<span className="text-emerald-500 font-medium">+10.8%</span>
</div>
</div>

<div className="bg-white p-6 rounded-3xl shadow-sm flex flex-col gap-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
<i className="w-5 h-5 text-slate-600" data-lucide="users"></i>
</div>
<span className="text-base text-slate-500">Total Guests</span>
</div>
<div className="mt-2">
<h2 className="text-4xl font-medium text-slate-900 tracking-tight">273</h2>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-slate-400">Last 30 days</span>
<span className="text-emerald-500 font-medium">+10.8%</span>
</div>
</div>

<div className="bg-white p-6 rounded-3xl shadow-sm flex flex-col gap-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
<i className="w-5 h-5 text-slate-600" data-lucide="eye"></i>
</div>
<span className="text-base text-slate-500">Total Revenue</span>
</div>
<div className="mt-2">
<h2 className="text-4xl font-medium text-slate-900 tracking-tight">$6,128.00</h2>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-slate-400">Last 30 days</span>
<span className="text-emerald-500 font-medium">+10.8%</span>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm">
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
<div>
<h3 className="text-lg text-slate-500 mb-1">Revenue Snapshot</h3>
<div className="text-4xl font-medium text-slate-900 tracking-tight">$47,928.10</div>
</div>
<div className="flex items-center gap-6 mt-4 sm:mt-0">
<div className="flex items-center gap-4 text-sm">
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-orange-400"></div>
<span>Income</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-indigo-500"></div>
<span>Expense</span>
</div>
</div>
<button className="bg-slate-50 hover:bg-slate-100 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                                Yearly
                                <i className="w-4 h-4" data-lucide="chevron-down"></i>
</button>
</div>
</div>

<div className="relative h-[320px] w-full">

<div className="absolute left-0 top-0 bottom-8 w-8 flex flex-col justify-between text-xs text-slate-400 font-medium">
<span>$10k</span>
<span>$8k</span>
<span>$6k</span>
<span>$4k</span>
<span>$2k</span>
</div>

<div className="ml-10 h-full flex items-end justify-between pr-4 pb-8 relative">

<div className="absolute inset-0 w-full h-full flex flex-col justify-between pointer-events-none z-0 pb-8">
<div className="w-full h-px bg-slate-50 border-t border-dashed border-slate-100"></div>
<div className="w-full h-px bg-slate-50 border-t border-dashed border-slate-100"></div>
<div className="w-full h-px bg-slate-50 border-t border-dashed border-slate-100"></div>
<div className="w-full h-px bg-slate-50 border-t border-dashed border-slate-100"></div>
<div className="w-full h-px bg-slate-50 border-t border-dashed border-slate-100"></div>
</div>

<div className="relative z-10 flex flex-col items-center gap-1 group w-full px-1 sm:px-3">
<div className="w-10 sm:w-12 flex flex-col gap-1 items-center justify-end h-[240px]">
<div className="w-full bg-indigo-200 rounded-md" style={{height: '35%'}}></div>
<div className="w-full bg-orange-100 rounded-md" style={{height: '45%'}}></div>
</div>
<span className="text-xs text-slate-400 mt-2">Jan</span>
</div>

<div className="relative z-10 flex flex-col items-center gap-1 group w-full px-1 sm:px-3">
<div className="w-10 sm:w-12 flex flex-col gap-1 items-center justify-end h-[240px]">
<div className="w-full bg-indigo-200 rounded-md" style={{height: '25%'}}></div>
<div className="w-full bg-orange-100 rounded-md" style={{height: '55%'}}></div>
</div>
<span className="text-xs text-slate-400 mt-2">Feb</span>
</div>

<div className="relative z-10 flex flex-col items-center gap-1 group w-full px-1 sm:px-3">
<div className="w-10 sm:w-12 flex flex-col gap-1 items-center justify-end h-[240px]">
<div className="w-full bg-indigo-200 rounded-md" style={{height: '20%'}}></div>
<div className="w-full bg-orange-100 rounded-md" style={{height: '70%'}}></div>
</div>
<span className="text-xs text-slate-400 mt-2">Mar</span>
</div>

<div className="relative z-10 flex flex-col items-center gap-1 group w-full px-1 sm:px-3">
<div className="w-10 sm:w-12 flex flex-col gap-1 items-center justify-end h-[240px]">
<div className="w-full bg-indigo-200 rounded-md" style={{height: '28%'}}></div>
<div className="w-full bg-orange-100 rounded-md" style={{height: '58%'}}></div>
</div>
<span className="text-xs text-slate-400 mt-2">Apr</span>
</div>

<div className="relative z-10 flex flex-col items-center gap-1 group w-full px-1 sm:px-3">
<div className="w-10 sm:w-12 flex flex-col gap-1 items-center justify-end h-[240px]">
<div className="w-full bg-indigo-200 rounded-md" style={{height: '15%'}}></div>
<div className="w-full bg-orange-100 rounded-md" style={{height: '75%'}}></div>
</div>
<span className="text-xs text-slate-400 mt-2">May</span>
</div>

<div className="relative z-10 flex flex-col items-center gap-1 group w-full px-1 sm:px-3">

<div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-slate-800/80 backdrop-blur-sm text-white text-xs p-3 rounded-xl shadow-lg whitespace-nowrap z-50">
<div className="flex items-center gap-2 mb-1">
<div className="w-2 h-2 rounded-full bg-orange-500"></div>
<span>Income <span className="font-semibold text-slate-200 ml-1">$9,000</span></span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-indigo-400"></div>
<span>Expense <span className="font-semibold text-slate-200 ml-1">$1,000</span></span>
</div>
</div>
<div className="w-10 sm:w-12 flex flex-col gap-1 items-center justify-end h-[240px]">
<div className="w-full bg-indigo-500 rounded-md" style={{height: '10%'}}></div>
<div className="w-full bg-orange-500 rounded-md" style={{height: '90%'}}></div>
</div>
<span className="text-xs text-slate-600 font-medium mt-2">Jun</span>
</div>

<div className="relative z-10 flex flex-col items-center gap-1 group w-full px-1 sm:px-3">
<div className="w-10 sm:w-12 flex flex-col gap-1 items-center justify-end h-[240px]">
<div className="w-full bg-indigo-200 rounded-md" style={{height: '20%'}}></div>
<div className="w-full bg-orange-100 rounded-md" style={{height: '45%'}}></div>
</div>
<span className="text-xs text-slate-400 mt-2">Jul</span>
</div>

<div className="relative z-10 flex flex-col items-center gap-1 group w-full px-1 sm:px-3">
<div className="w-10 sm:w-12 flex flex-col gap-1 items-center justify-end h-[240px]">
<div className="w-full bg-indigo-200 rounded-md" style={{height: '18%'}}></div>
<div className="w-full bg-orange-100 rounded-md" style={{height: '62%'}}></div>
</div>
<span className="text-xs text-slate-400 mt-2">Aug</span>
</div>

<div className="relative z-10 flex flex-col items-center gap-1 group w-full px-1 sm:px-3">
<div className="w-10 sm:w-12 flex flex-col gap-1 items-center justify-end h-[240px]">
<div className="w-full bg-indigo-200 rounded-md" style={{height: '12%'}}></div>
<div className="w-full bg-orange-100 rounded-md" style={{height: '80%'}}></div>
</div>
<span className="text-xs text-slate-400 mt-2">Sep</span>
</div>

<div className="relative z-10 flex flex-col items-center gap-1 group w-full px-1 sm:px-3">
<div className="w-10 sm:w-12 flex flex-col gap-1 items-center justify-end h-[240px]">
<div className="w-full bg-indigo-200 rounded-md" style={{height: '20%'}}></div>
<div className="w-full bg-orange-100 rounded-md" style={{height: '60%'}}></div>
</div>
<span className="text-xs text-slate-400 mt-2">Oct</span>
</div>

<div className="relative z-10 flex flex-col items-center gap-1 group w-full px-1 sm:px-3">
<div className="w-10 sm:w-12 flex flex-col gap-1 items-center justify-end h-[240px]">
<div className="w-full bg-indigo-200 rounded-md" style={{height: '22%'}}></div>
<div className="w-full bg-orange-100 rounded-md" style={{height: '75%'}}></div>
</div>
<span className="text-xs text-slate-400 mt-2">Nov</span>
</div>

<div className="relative z-10 flex flex-col items-center gap-1 group w-full px-1 sm:px-3">
<div className="w-10 sm:w-12 flex flex-col gap-1 items-center justify-end h-[240px]">
<div className="w-full bg-indigo-200 rounded-md" style={{height: '18%'}}></div>
<div className="w-full bg-orange-100 rounded-md" style={{height: '70%'}}></div>
</div>
<span className="text-xs text-slate-400 mt-2">Dec</span>
</div>
</div>
</div>
</div>

<div>
<div className="flex justify-between items-center mb-6">
<h3 className="text-lg font-medium text-slate-500">Today's Booking</h3>
<div className="flex items-center gap-2 text-slate-400">
<i className="w-5 h-5" data-lucide="search"></i>
<span className="text-sm">Search room, guest, book, etc</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-4 rounded-3xl shadow-sm">
<div className="flex gap-4">
<img alt="Resort" className="w-20 h-20 rounded-2xl object-cover" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<div className="flex flex-col justify-center">
<h4 className="font-medium text-slate-900 text-lg">Nomadic Resort</h4>
<div className="flex items-center gap-1 text-slate-400 text-xs mt-1">
<i className="w-3 h-3" data-lucide="map-pin"></i>
<span>Wild Coast Tented Lodge, Sri Lanka</span>
</div>
</div>
</div>
<div className="flex items-center justify-between mt-6 text-sm text-slate-500">
<div className="flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="calendar"></i>
<span>8 - 9 Aug</span>
</div>
<div className="flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="bed-double"></i>
<span>1 Room</span>
</div>
<div className="flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="user"></i>
<span>6 Guests</span>
</div>
</div>
</div>

<div className="bg-white p-4 rounded-3xl shadow-sm">
<div className="flex gap-4">
<img alt="Resort" className="w-20 h-20 rounded-2xl object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="flex flex-col justify-center">
<h4 className="font-medium text-slate-900 text-lg">Azure Wave Resort</h4>
<div className="flex items-center gap-1 text-slate-400 text-xs mt-1">
<i className="w-3 h-3" data-lucide="map-pin"></i>
<span>Wild Coast Tented Lodge, Sri Lanka</span>
</div>
</div>
</div>
<div className="flex items-center justify-between mt-6 text-sm text-slate-500">
<div className="flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="calendar"></i>
<span>15 - 17 Aug</span>
</div>
<div className="flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="bed-double"></i>
<span>1 Room</span>
</div>
<div className="flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="user"></i>
<span>8 Guests</span>
</div>
</div>
</div>

<div className="bg-white p-4 rounded-3xl shadow-sm">
<div className="flex gap-4">
<img alt="Resort" className="w-20 h-20 rounded-2xl object-cover" src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<div className="flex flex-col justify-center">
<h4 className="font-medium text-slate-900 text-lg">Desert Oasis Lodge</h4>
<div className="flex items-center gap-1 text-slate-400 text-xs mt-1">
<i className="w-3 h-3" data-lucide="map-pin"></i>
<span>Wild Coast Tented Lodge, Sri Lanka</span>
</div>
</div>
</div>
<div className="flex items-center justify-between mt-6 text-sm text-slate-500">
<div className="flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="calendar"></i>
<span>22 - 24 Aug</span>
</div>
<div className="flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="bed-double"></i>
<span>1 Room</span>
</div>
<div className="flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="user"></i>
<span>2 Guests</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 xl:col-span-3 flex flex-col gap-8">

<div className="bg-gradient-to-br from-white via-white to-orange-100 p-8 rounded-3xl shadow-sm border border-white">
<div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-6 shadow-md shadow-orange-200">
<i className="w-6 h-6 text-white" data-lucide="rocket"></i>
</div>
<h2 className="text-2xl font-medium text-slate-900 mb-3 tracking-tight leading-tight">Upcoming Occupancy Forecast Update</h2>
<p className="text-sm text-slate-500 mb-8 leading-relaxed">
                        Hotel expected occupancy is confidently projected to steadily <span className="text-slate-900 font-semibold">reach 87%</span> by next month.
                    </p>
<button className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg shadow-slate-200">
                        Boost it to 87%
                    </button>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm">
<h3 className="text-slate-400 text-base mb-2">Room Availability</h3>
<div className="text-4xl font-medium text-slate-900 mb-1 tracking-tight">120</div>
<div className="text-slate-400 text-sm mb-6">Room Available</div>

<div className="flex gap-[3px] h-8 mb-4">

<div className="w-1 h-full bg-red-500 rounded-full"></div>
<div className="w-1 h-full bg-red-500 rounded-full"></div>
<div className="w-1 h-full bg-red-500 rounded-full"></div>
<div className="w-1 h-full bg-red-500 rounded-full"></div>
<div className="w-1 h-full bg-red-500 rounded-full"></div>
<div className="w-1 h-full bg-red-500 rounded-full"></div>
<div className="w-1 h-full bg-red-500 rounded-full"></div>
<div className="w-1 h-full bg-red-500 rounded-full"></div>
<div className="w-1 h-full bg-red-500 rounded-full"></div>
<div className="w-1 h-full bg-red-500 rounded-full"></div>
<div className="w-1 h-full bg-red-500 rounded-full"></div>
<div className="w-1 h-full bg-red-500 rounded-full"></div>
<div className="w-1 h-full bg-red-500 rounded-full"></div>
<div className="w-1 h-full bg-red-500 rounded-full"></div>
<div className="w-1 h-full bg-red-500 rounded-full"></div>
<div className="w-1 h-full bg-red-500 rounded-full"></div>
<div className="w-1 h-full bg-red-500 rounded-full"></div>
<div className="w-1 h-full bg-red-500 rounded-full"></div>

<div className="w-1 h-full bg-amber-400 rounded-full"></div>
<div className="w-1 h-full bg-amber-400 rounded-full"></div>
<div className="w-1 h-full bg-amber-400 rounded-full"></div>
<div className="w-1 h-full bg-amber-400 rounded-full"></div>
<div className="w-1 h-full bg-amber-400 rounded-full"></div>
<div className="w-1 h-full bg-amber-400 rounded-full"></div>
<div className="w-1 h-full bg-amber-400 rounded-full"></div>
<div className="w-1 h-full bg-amber-400 rounded-full"></div>

<div className="w-1 h-full bg-indigo-400 rounded-full"></div>
<div className="w-1 h-full bg-indigo-400 rounded-full"></div>
<div className="w-1 h-full bg-indigo-400 rounded-full"></div>
<div className="w-1 h-full bg-indigo-400 rounded-full"></div>
<div className="w-1 h-full bg-indigo-400 rounded-full"></div>
<div className="w-1 h-full bg-indigo-400 rounded-full"></div>
<div className="w-1 h-full bg-indigo-400 rounded-full"></div>
<div className="w-1 h-full bg-indigo-400 rounded-full"></div>
<div className="w-1 h-full bg-indigo-400 rounded-full"></div>
<div className="w-1 h-full bg-indigo-400 rounded-full"></div>
<div className="w-1 h-full bg-slate-200 rounded-full opacity-50"></div>
<div className="w-1 h-full bg-slate-200 rounded-full opacity-50"></div>
<div className="w-1 h-full bg-slate-200 rounded-full opacity-50"></div>
<div className="w-1 h-full bg-slate-200 rounded-full opacity-50"></div>
</div>
<div className="flex items-center gap-4 text-xs font-medium">
<div className="flex items-center gap-1.5 text-slate-600">
<div className="w-1 h-3 bg-red-500 rounded-full"></div>
                            230 Occupied
                        </div>
<div className="flex items-center gap-1.5 text-slate-600">
<div className="w-1 h-3 bg-amber-400 rounded-full"></div>
                            85 Reserved
                        </div>
<div className="flex items-center gap-1.5 text-slate-600">
<div className="w-1 h-3 bg-indigo-400 rounded-full"></div>
                            18 Not Ready
                        </div>
</div>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm">
<h3 className="text-lg font-medium text-slate-500 mb-6">Latest Transaction</h3>
<div className="flex flex-col gap-6">

<div className="flex justify-between items-center">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center">
<span className="text-sky-600 font-bold text-lg">P</span>
</div>
<div>
<div className="text-slate-900 font-medium">Nomadic Resort</div>
<div className="text-slate-400 text-xs mt-0.5">8 - 9 August 2025</div>
</div>
</div>
<div className="text-right">
<div className="text-slate-900 font-medium">$250.00</div>
<div className="text-emerald-500 text-xs mt-0.5">Successful</div>
</div>
</div>

<div className="flex justify-between items-center">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center">
<span className="text-indigo-600 font-bold text-lg">S</span>
</div>
<div>
<div className="text-slate-900 font-medium">Azure Wave Resort</div>
<div className="text-slate-400 text-xs mt-0.5">15 - 16 September 2025</div>
</div>
</div>
<div className="text-right">
<div className="text-slate-900 font-medium">$300.00</div>
<div className="text-amber-500 text-xs mt-0.5">Pending</div>
</div>
</div>

<div className="flex justify-between items-center">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center relative">
<div className="w-4 h-4 rounded-full bg-red-500 opacity-80 absolute left-2"></div>
<div className="w-4 h-4 rounded-full bg-amber-400 opacity-80 absolute right-2"></div>
</div>
<div>
<div className="text-slate-900 font-medium">Desert Oasis Lodge</div>
<div className="text-slate-400 text-xs mt-0.5">22 - 23 October 2025</div>
</div>
</div>
<div className="text-right">
<div className="text-slate-900 font-medium">$400.00</div>
<div className="text-red-500 text-xs mt-0.5">Cancelled</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
