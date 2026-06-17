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
      

<aside className="w-64 bg-white border-r border-gray-200 flex-shrink-0 flex flex-col justify-between hidden md:flex z-20">
<div className="">

<div className="h-16 flex items-center px-6 border-b border-gray-100">
<div className="flex items-center gap-2">
<div className="flex w-8 h-8 items-center justify-center shrink-0">
<img alt="Telkom Indonesia" className="w-full h-full object-contain" src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Telkom_Indonesia_2013.svg"/>
</div>
<span className="text-sm font-semibold text-gray-900 tracking-tight">Telkom Indonesia</span>
</div>
</div>

<nav className="p-4 space-y-1">
<div className="px-2 py-2 text-xs font-medium text-gray-400 uppercase tracking-wider">Platform</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md font-medium group transition-all-200" href="#">
<iconify-icon className="text-gray-400 group-hover:text-gray-900 transition-colors" height="18" icon="solar:widget-linear" width="18"></iconify-icon>
                    Dashboard
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-gray-900 bg-gray-50 rounded-md font-medium group transition-all-200" href="#">
<iconify-icon className="text-red-600" height="18" icon="solar:plane-linear" width="18"></iconify-icon>
                    Trips
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md font-medium group transition-all-200" href="#">
<iconify-icon className="text-gray-400 group-hover:text-gray-900 transition-colors" height="18" icon="solar:bed-linear" width="18"></iconify-icon>
                    Accommodation
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md font-medium group transition-all-200" href="#">
<div className="flex items-center justify-between w-full">
<div className="flex items-center gap-3">
<iconify-icon className="text-gray-400 group-hover:text-gray-900 transition-colors" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            Approvals
                        </div>
<span className="bg-red-50 text-red-600 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-red-100">4</span>
</div>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md font-medium group transition-all-200" href="#">
<iconify-icon className="text-gray-400 group-hover:text-gray-900 transition-colors" height="18" icon="solar:bill-list-linear" width="18"></iconify-icon>
                    Expenses
                </a>
<div className="px-2 py-2 mt-6 text-xs font-medium text-gray-400 uppercase tracking-wider">Management</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md font-medium group transition-all-200" href="#">
<iconify-icon className="text-gray-400 group-hover:text-gray-900 transition-colors" height="18" icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
                    Employees
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md font-medium group transition-all-200" href="#">
<iconify-icon className="text-gray-400 group-hover:text-gray-900 transition-colors" height="18" icon="solar:settings-linear" width="18"></iconify-icon>
                    Settings
                </a>
</nav>
</div>
<div className="p-4 border-t border-gray-100">
<button className="flex items-center gap-3 w-full p-2 rounded-md hover:bg-gray-50 transition-colors text-left">
<div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium text-xs">JD</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-gray-900 truncate">Joko D.</p>
<p className="text-xs text-gray-500 truncate">Travel Admin</p>
</div>
<iconify-icon className="text-gray-400" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full relative">

<header className="flex sticky z-10 bg-white/80 h-16 border-gray-200 border-b pr-6 pl-6 top-0 backdrop-blur-md items-center justify-between">
<div className="flex items-center gap-4">
<button className="md:hidden text-gray-500">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<nav className="hidden sm:flex items-center text-sm text-gray-500">
<span>Trips</span>
<iconify-icon className="mx-2 text-gray-400" icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<span className="text-gray-900 font-medium">New Request</span>
</nav>
</div>
<div className="flex items-center gap-3">
<button className="text-gray-500 hover:text-gray-900 text-sm font-medium px-3 py-2 transition-colors">Save Draft</button>
<button className="bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium px-4 py-2 rounded-md shadow-sm flex items-center gap-2 transition-colors">
                    Submit Request
                </button>
</div>
</header>

<div className="flex-1 overflow-y-auto bg-gray-50/50">
<div className="max-w-5xl mx-auto p-6 md:p-10">
<div className="mb-8">
<h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Create Travel Request</h1>
<p className="text-sm text-gray-500 mt-1">Fill in the details below. Requests over Rp 10M require VP approval.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 space-y-6">

<div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
<div className="flex items-center gap-3 mb-5">
<div className="w-8 h-8 rounded-full bg-gray-50 text-gray-600 border border-gray-200 flex items-center justify-center font-semibold text-sm">1</div>
<h2 className="text-base font-medium text-gray-900">Trip Details</h2>
</div>
<div className="space-y-4">
<div className="">
<label className="block text-xs font-medium text-gray-700 mb-1.5">Purpose of Trip</label>
<input className="w-full text-sm border border-gray-200 rounded-md px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-gray-100 focus:border-gray-300 transition-all bg-gray-50 focus:bg-white placeholder-gray-400" placeholder="e.g. Annual Strategic Meeting with Partners" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="">
<label className="block text-xs font-medium text-gray-700 mb-1.5">Trip Type</label>
<div className="relative">
<iconify-icon className="absolute left-3 top-2.5 text-gray-400 pointer-events-none" icon="solar:case-linear"></iconify-icon>
<select className="focus:outline-none focus:ring-2 focus:ring-gray-100 focus:border-gray-300 appearance-none text-sm text-gray-600 bg-white w-full border-gray-200 border rounded-md pt-2.5 pr-3 pb-2.5 pl-9">
<option>Business Meeting</option>
<option>Conference / Seminar</option>
<option>Training</option>
<option>Site Visit</option>
</select>
<iconify-icon className="absolute right-3 top-3 text-gray-400 pointer-events-none text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="">
<label className="block text-xs font-medium text-gray-700 mb-1.5">Cost Center</label>
<div className="relative">
<iconify-icon className="absolute left-3 top-2.5 text-gray-400 pointer-events-none" icon="solar:card-linear"></iconify-icon>
<select className="w-full text-sm border border-gray-200 rounded-md pl-9 pr-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-gray-100 focus:border-gray-300 bg-white appearance-none text-gray-600">
<option>CC-401 Marketing</option>
<option>CC-202 Engineering</option>
<option>CC-105 Corporate</option>
</select>
<iconify-icon className="absolute right-3 top-3 text-gray-400 pointer-events-none text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
<div className="flex items-center gap-3 mb-5">
<div className="w-8 h-8 rounded-full bg-gray-50 text-gray-600 border border-gray-200 flex items-center justify-center font-semibold text-sm">2</div>
<h2 className="text-base font-medium text-gray-900">Itinerary</h2>
</div>

<div className="grid grid-cols-3 gap-3 mb-6">
<label className="cursor-pointer">
<input checked="" className="custom-radio hidden" name="trip_mode" type="radio"/>
<div className="border border-gray-200 rounded-lg p-3 text-center hover:bg-gray-50 transition-all">
<span className="text-sm font-medium">Round Trip</span>
</div>
</label>
<label className="cursor-pointer">
<input className="custom-radio hidden" name="trip_mode" type="radio"/>
<div className="border border-gray-200 rounded-lg p-3 text-center hover:bg-gray-50 transition-all">
<span className="text-sm font-medium">One Way</span>
</div>
</label>
<label className="cursor-pointer">
<input className="custom-radio hidden" name="trip_mode" type="radio"/>
<div className="border border-gray-200 rounded-lg p-3 text-center hover:bg-gray-50 transition-all">
<span className="text-sm font-medium">Multi-city</span>
</div>
</label>
</div>
<div className="space-y-4 relative">

<div className="absolute left-6 top-10 bottom-10 w-px bg-gray-200 border-l border-dashed border-gray-300 z-0"></div>

<div className="grid grid-cols-1 sm:grid-cols-[40px_1fr_1fr] gap-4 items-start relative z-10">
<div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400">
<iconify-icon icon="solar:map-point-linear" width="18"></iconify-icon>
</div>
<div>
<label className="block text-xs font-medium text-gray-500 mb-1">From</label>
<input className="w-full text-sm border border-gray-200 rounded-md px-3 py-2 bg-white text-gray-900 focus:outline-none focus:border-gray-400 font-medium" type="text" value="Jakarta (CGK)"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-500 mb-1">Departure Date</label>
<div className="relative">
<input className="w-full text-sm border border-gray-200 rounded-md px-3 py-2 bg-white text-gray-900 focus:outline-none focus:border-gray-400" type="text" value="Thu, Oct 24, 2023"/>
<iconify-icon className="absolute right-3 top-2.5 text-gray-400 pointer-events-none" icon="solar:calendar-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-[40px_1fr_1fr] gap-4 items-start relative z-10">
<div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-red-500">
<iconify-icon icon="solar:map-point-wave-linear" width="18"></iconify-icon>
</div>
<div>
<label className="block text-xs font-medium text-gray-500 mb-1">To</label>
<input className="w-full text-sm border border-gray-200 rounded-md px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100 transition-all placeholder-gray-400" placeholder="Search city or airport" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-500 mb-1">Return Date</label>
<div className="relative">
<input className="w-full text-sm border border-gray-200 rounded-md px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100 transition-all" placeholder="Select date" type="text"/>
<iconify-icon className="absolute right-3 top-2.5 text-gray-400 pointer-events-none" icon="solar:calendar-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
<div className="flex items-center justify-between mb-5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-50 text-gray-600 border border-gray-200 flex items-center justify-center font-semibold text-sm">3</div>
<h2 className="text-base font-medium text-gray-900">Preferences</h2>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-gray-500">Need Accommodation?</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-gray-900"></div>
</label>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="p-3 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-gray-400" icon="solar:armchair-linear"></iconify-icon>
<span className="text-xs font-medium text-gray-900">Flight Class</span>
</div>
<select className="w-full text-sm bg-transparent border-none p-0 text-gray-600 focus:ring-0 cursor-pointer">
<option>Economy</option>
<option>Business</option>
<option>First Class</option>
</select>
</div>
<div className="p-3 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-gray-400" icon="solar:buildings-linear"></iconify-icon>
<span className="text-xs font-medium text-gray-900">Hotel Rating</span>
</div>
<select className="w-full text-sm bg-transparent border-none p-0 text-gray-600 focus:ring-0 cursor-pointer">
<option>4 Stars &amp; above</option>
<option>3 Stars</option>
<option>Any</option>
</select>
</div>
</div>
<div className="mt-4">
<label className="block text-xs font-medium text-gray-700 mb-1.5">Special Instructions</label>
<textarea className="w-full text-sm border border-gray-200 rounded-md px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-100 placeholder-gray-400 transition-all" placeholder="Dietary restrictions, preferred airlines, etc..." rows="3"></textarea>
</div>
</div>
</div>

<div className="lg:col-span-1 space-y-6">

<div className="bg-white border-gray-200 border rounded-xl pt-5 pr-5 pb-5 pl-5 top-20 shadow-sm">
<h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="solar:shield-check-linear"></iconify-icon>
    Policy Check
  </h3>
<div className="space-y-3 mb-6">
<div className="flex items-start gap-3 text-xs">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-gray-600">Travel dates within approved window</span>
</div>
<div className="flex items-start gap-3 text-xs">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-gray-600">Economy class mandated for &lt; 6hr flights</span>
</div>
<div className="flex items-start gap-3 text-xs">
<iconify-icon className="text-orange-500 mt-0.5 shrink-0" icon="solar:danger-circle-linear"></iconify-icon>
<span className="text-gray-600">Hotel budget capped at Rp 1.5M/night in this region</span>
</div>
</div>
<div className="border-t border-gray-100 pt-4 mb-4">
<p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Estimated Cost</p>
<div className="flex items-end gap-1">
<span className="text-2xl font-bold text-gray-900 tracking-tight">Rp 5.2M</span>
<span className="text-xs text-gray-400 mb-1">/ person</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-1.5 mt-2 overflow-hidden">
<div className="bg-gray-900 h-1.5 rounded-full" style={{width: '45%'}}></div>
</div>
<p className="text-[10px] text-gray-400 mt-1.5 text-right">45% of monthly department budget</p>
</div>
<div className="bg-gray-50 rounded-lg p-3 text-xs text-gray-500 border border-gray-100">
<p className=""> Approvals usually take 24-48 hours. Please submit at least 1 week prior to departure.</p>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
<h3 className="text-sm font-semibold text-gray-900 mb-3">Attachments</h3>
<div className="border-2 border-dashed border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition-colors cursor-pointer group">
<iconify-icon className="text-gray-300 group-hover:text-gray-400 transition-colors mb-2" icon="solar:file-smile-linear" width="24"></iconify-icon>
<p className="text-xs font-medium text-gray-600">Click to upload</p>
<p className="text-[10px] text-gray-400 mt-1">Invitation letters, agenda, etc.</p>
</div>
</div>
</div>
</div>
</div>

<footer className="mt-8 border-t border-gray-200 py-6 px-10">
<div className="flex justify-between items-center text-xs text-gray-400">
<p>© 2023 Telkom Indonesia</p>
<p>Internal Travel System v2.4</p>
</div>
</footer>
</div>
</main>

    </>
  );
}
