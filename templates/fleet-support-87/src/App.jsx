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
      

<aside className="w-16 lg:w-64 bg-white border-r border-gray-200 flex flex-col justify-between flex-shrink-0 transition-all duration-300 z-20">
<div className="">

<div className="h-16 flex items-center px-4 border-b border-gray-100">
<div className="flex items-center gap-3">
<div className="flex items-center gap-2">
<svg className="flex-shrink-0 text-blue-700" fill="none" height="28" viewbox="0 0 32 32" width="28" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM22.5 10.5C22.5 12.1569 21.1569 13.5 19.5 13.5C17.8431 13.5 16.5 12.1569 16.5 10.5C16.5 8.84315 17.8431 7.5 19.5 7.5C21.1569 7.5 22.5 8.84315 22.5 10.5ZM11.5 16C11.5 18.4853 13.5147 20.5 16 20.5C18.4853 20.5 20.5 18.4853 20.5 16H25C25 20.9706 20.9706 25 16 25C11.0294 25 7 20.9706 7 16H11.5Z" fill="currentColor" fill-rule="evenodd"></path>
</svg>
<div className="hidden lg:flex flex-col justify-center">
<span className="font-bold text-lg leading-none tracking-tight text-gray-900">AVRIOS</span>
<span className="text-[9px] font-semibold leading-none tracking-wider text-gray-500 mt-1 uppercase">By Shiftmove</span>
</div>
</div>
</div>
</div>
<nav className="p-2 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md group transition-colors" href="#">
<iconify-icon className="text-gray-400 group-hover:text-gray-600" icon="lucide:layout-dashboard" strokeWidth="1.5" width="18"></iconify-icon>
<span className="hidden lg:block">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium bg-blue-50 text-blue-700 rounded-md group transition-colors" href="#">
<div className="relative">
<iconify-icon className="text-blue-600" icon="lucide:inbox" strokeWidth="1.5" width="18"></iconify-icon>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-600 rounded-full border-2 border-white"></span>
</div>
<span className="hidden lg:block">Inbox</span>
<span className="ml-auto hidden lg:flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-[10px] font-medium text-blue-700">6</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md group transition-colors" href="#">
<iconify-icon className="text-gray-400 group-hover:text-gray-600" icon="lucide:car" strokeWidth="1.5" width="18"></iconify-icon>
<span className="hidden lg:block">Vehicles</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md group transition-colors" href="#">
<iconify-icon className="text-gray-400 group-hover:text-gray-600" icon="lucide:users" strokeWidth="1.5" width="18"></iconify-icon>
<span className="hidden lg:block">Drivers</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md group transition-colors" href="#">
<iconify-icon className="text-gray-400 group-hover:text-gray-600" icon="lucide:file-bar-chart" strokeWidth="1.5" width="18"></iconify-icon>
<span className="hidden lg:block">Reports</span>
</a>
</nav>
</div>
<div className="p-4 border-t border-gray-100">
<button className="flex items-center gap-3 w-full p-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-md transition-colors">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-gray-200 to-gray-300 flex items-center justify-center text-xs font-semibold text-gray-600">
                    JD
                </div>
<div className="hidden lg:flex flex-col items-start">
<span className="text-xs font-semibold text-gray-800">John Doe</span>
<span className="text-[10px] text-gray-500">Fleet Manager</span>
</div>
</button>
</div>
</aside>

<div className="w-80 lg:w-96 bg-white border-r border-gray-200 flex flex-col flex-shrink-0 z-10">
<div className="h-16 px-4 border-b border-gray-100 flex items-center justify-between">
<h2 className="font-semibold text-gray-800 tracking-tight">Inbox</h2>
<div className="flex gap-2">
<button className="text-gray-400 hover:text-gray-600 p-1 rounded-md hover:bg-gray-100">
<iconify-icon icon="lucide:filter" width="16"></iconify-icon>
</button>
<button className="text-gray-400 hover:text-gray-600 p-1 rounded-md hover:bg-gray-100">
<iconify-icon icon="lucide:arrow-up-down" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="p-3 border-b border-gray-100">
<div className="relative">
<iconify-icon className="absolute left-3 top-2.5 text-gray-400" icon="lucide:search" width="14"></iconify-icon>
<input className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder-gray-400" placeholder="Search tickets..." type="text"/>
</div>
</div>

<div className="flex-1 overflow-y-auto">

<div className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors border-l-4 border-l-red-500 bg-red-50/20">
<div className="flex justify-between items-start mb-1">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
<span className="text-xs font-bold text-gray-900">Michael Chen</span>
</div>
<span className="text-[10px] text-red-600 font-medium">3m ago</span>
</div>
<h3 className="text-sm font-semibold text-gray-900 mb-1">I just had an accident</h3>
<p className="text-xs text-gray-600 line-clamp-2">I was rear-ended at a traffic light on Main St. Everyone is okay but the bumper is crushed...</p>
<div className="mt-3 flex gap-2">
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-red-100 text-red-700 border border-red-200">
<iconify-icon className="mr-1" icon="lucide:alert-triangle" width="10"></iconify-icon> Damage
                    </span>
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-white border border-gray-200 text-gray-600">
                         Urgent
                    </span>
</div>
</div>

<div className="p-4 border-b border-gray-100 bg-blue-50/40 border-l-4 border-l-blue-600 cursor-pointer">
<div className="flex justify-between items-start mb-1">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-blue-600"></span>
<span className="text-xs font-medium text-gray-900">Sarah Weber</span>
</div>
<span className="text-[10px] text-gray-400">12m ago</span>
</div>
<h3 className="text-sm font-semibold text-gray-900 mb-1">What is my license plate?</h3>
<p className="text-xs text-gray-500 line-clamp-2">Hi, I'm at the parking registration and I completely forgot my plate number...</p>
<div className="mt-3 flex gap-2">
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-white border border-gray-200 text-gray-600">
<iconify-icon className="mr-1" icon="lucide:car" width="10"></iconify-icon> Vehicle
                    </span>
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-blue-100 text-blue-700 border border-blue-200">
                        New
                    </span>
</div>
</div>

<div className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors border-l-4 border-l-transparent">
<div className="flex justify-between items-start mb-1">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-indigo-400"></span>
<span className="text-xs font-medium text-gray-900">Emma Wilson</span>
</div>
<span className="text-[10px] text-gray-400">45m ago</span>
</div>
<h3 className="text-sm font-medium text-gray-800 mb-1">Here is the signed document</h3>
<p className="text-xs text-gray-500 line-clamp-2">Please find attached the signed vehicle handover protocol for the new Audi A4...</p>
<div className="mt-3 flex gap-2">
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-white border border-gray-200 text-gray-600">
<iconify-icon className="mr-1" icon="lucide:file-check" width="10"></iconify-icon> Contract
                    </span>
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-gray-100 text-gray-600 border border-gray-200">
<iconify-icon className="mr-1" icon="lucide:paperclip" width="10"></iconify-icon> 1 File
                    </span>
</div>
</div>

<div className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors border-l-4 border-l-transparent">
<div className="flex mb-1 items-start justify-between">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-yellow-400"></span>
<span className="text-xs font-medium text-gray-900">Marcus Reid</span>
</div>
<span className="text-[10px] text-gray-400">2h ago</span>
</div>
<h3 className="text-sm font-medium text-gray-800 mb-1">Delivery date for Model Y</h3>
<p className="text-xs text-gray-500 line-clamp-2">Do we have an ETA on the new Tesla? My lease ends next week.</p>
<div className="mt-3 flex gap-2">
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-white border border-gray-200 text-gray-600">
<iconify-icon className="mr-1" icon="lucide:calendar" width="10"></iconify-icon> Procurement
                    </span>
</div>
</div>
<div className="hover:bg-gray-50 cursor-pointer transition-colors border-l-transparent border-gray-100 border-b border-l-4 pt-4 pr-4 pb-4 pl-4">
<div className="flex justify-between items-start mb-1">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-gray-300"></span>
<span className="text-xs font-medium text-gray-500">Auto-Service</span>
</div>
<span className="text-[10px] text-gray-400">1d ago</span>
</div>
<h3 className="text-sm font-medium text-gray-600 mb-1">Maintenance Reminder: B-XY 992</h3>
<p className="line-clamp-2 text-xs text-gray-400">Scheduled maintenance is due for vehicle ID #99281.</p>
</div>
</div>
</div>

<main className="flex-1 flex flex-col min-w-0 bg-white">

<header className="h-16 px-6 border-b border-gray-200 flex items-center justify-between bg-white flex-shrink-0">
<div>
<div className="flex items-center gap-3 mb-0.5">
<span className="text-xs font-mono text-gray-400">#TK-4921</span>
<span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-semibold border border-blue-100">Open</span>
</div>
<h1 className="text-base font-semibold text-gray-900 tracking-tight">What is my license plate?</h1>
</div>
<div className="flex items-center gap-3">
<button className="p-2 text-gray-400 hover:text-gray-600 rounded-md hover:bg-gray-50 transition-colors">
<iconify-icon icon="lucide:clock" width="18"></iconify-icon>
</button>
<button className="p-2 text-gray-400 hover:text-gray-600 rounded-md hover:bg-gray-50 transition-colors">
<iconify-icon icon="lucide:user-plus" width="18"></iconify-icon>
</button>
<button className="p-2 text-gray-400 hover:text-gray-600 rounded-md hover:bg-gray-50 transition-colors">
<iconify-icon icon="lucide:more-horizontal" width="18"></iconify-icon>
</button>
<div className="h-6 w-px bg-gray-200 mx-1"></div>
<button className="flex items-center gap-2 px-3 py-1.5 bg-gray-900 hover:bg-gray-800 text-white text-xs font-medium rounded-md shadow-sm transition-colors">
<iconify-icon icon="lucide:check" width="14"></iconify-icon>
                    Resolve
                </button>
</div>
</header>

<div className="flex-1 flex overflow-hidden">

<div className="flex-1 overflow-y-auto bg-gray-50/50 p-6">

<div className="flex gap-4 mb-8">
<div className="w-8 h-8 rounded-full bg-teal-100 border border-teal-200 flex items-center justify-center text-teal-700 font-medium text-xs flex-shrink-0">
                        SW
                    </div>
<div className="flex-1">
<div className="flex items-baseline justify-between mb-1">
<span className="text-sm font-semibold text-gray-900">Sarah Weber</span>
<span className="text-xs text-gray-400">Today, 10:23 AM</span>
</div>
<div className="text-sm text-gray-700 leading-relaxed bg-white p-4 rounded-lg shadow-sm border border-gray-200">
<p className="mb-2">Hi Team,</p>
<p className="mb-2">I hope you are having a good week.</p>
<p className="">I'm currently at the hotel parking registration and I completely forgot my plate number for the registration form. Could you please check it for me quickly?</p>
<p className="mt-4 text-gray-500">Best,Sarah</p>
</div>
</div>
</div>

<div className="flex mb-8 justify-center">
<div className="bg-gray-100 border border-gray-200 px-3 py-1.5 rounded-full flex items-center gap-2">
<iconify-icon className="text-amber-500" icon="lucide:zap" width="12"></iconify-icon>
<span className="text-[10px] font-medium text-gray-500">AI detected intent: </span>
</div>
</div>

<div className="flex gap-x-4 gap-y-4">
<div className="w-8 h-8 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-700 font-medium text-xs flex-shrink-0">
                        JD
                    </div>
<div className="flex-1">
<div className="bg-white border border-gray-200 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-600 transition-all overflow-hidden">

<div className="px-3 py-2 border-b border-gray-100 flex items-center gap-1 bg-gray-50">
<button className="p-1.5 text-gray-500 hover:text-gray-700 rounded hover:bg-gray-200"><iconify-icon icon="lucide:bold" width="14"></iconify-icon></button>
<button className="p-1.5 text-gray-500 hover:text-gray-700 rounded hover:bg-gray-200"><iconify-icon icon="lucide:italic" width="14"></iconify-icon></button>
<button className="p-1.5 text-gray-500 hover:text-gray-700 rounded hover:bg-gray-200"><iconify-icon icon="lucide:list" width="14"></iconify-icon></button>
<div className="h-4 w-px bg-gray-300 mx-1"></div>
<button className="p-1.5 text-gray-500 hover:text-gray-700 rounded hover:bg-gray-200 flex items-center gap-1">
<iconify-icon icon="lucide:paperclip" width="14"></iconify-icon>
<span className="text-[10px]">Attach</span>
</button>
</div>
<textarea className="w-full p-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none min-h-[120px] resize-none" placeholder="Write a reply..."></textarea>
<div className="px-3 py-2 flex justify-between items-center">
<div className="flex items-center gap-2">
<span className="text-[10px] text-gray-400">Press ⌘+Enter to send</span>
</div>
<button className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-md shadow-sm transition-colors">Send Reply</button>
</div>
</div>
</div>
</div>
</div>

<div className="w-80 border-l border-gray-200 bg-white flex flex-col flex-shrink-0 overflow-y-auto">

<div className="p-4 border-b border-gray-100 bg-gradient-to-b from-blue-50/50 to-white">
<div className="flex items-center gap-2 mb-3">
<iconify-icon className="text-blue-600" icon="lucide:sparkles" width="14"></iconify-icon>
<h3 className="text-xs font-semibold text-blue-900 uppercase tracking-wide">Smart Suggestion</h3>
</div>
<div className="bg-white border border-blue-100 rounded-lg p-3 shadow-sm mb-3">
<p className="text-xs text-gray-600 mb-2 leading-relaxed">
                            Hello Sarah,
                            Your license plate number is .
                            Let me know if you need anything else.
                        </p>
<button className="w-full mt-1 flex items-center justify-center gap-2 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-medium rounded border border-blue-200 transition-colors">
<iconify-icon className="" icon="lucide:corner-down-left" width="12"></iconify-icon>
                            Insert Reply
                        </button>
</div>
<div className="text-[10px] text-gray-400 flex items-center gap-1">
<iconify-icon icon="lucide:database" width="10"></iconify-icon>
                        Data source: Vehicle Assignment Record #882
                    </div>
</div>

<div className="p-5 border-b border-gray-100">
<h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-4">Requester</h4>
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
<iconify-icon className="text-gray-400" icon="lucide:user" width="18"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-gray-900">Sarah Weber</div>
<div className="text-xs text-gray-500">Senior Sales Manager</div>
</div>
</div>
<div className="space-y-3">
<div className="flex items-start justify-between">
<span className="text-xs text-gray-500">Email</span>
<span className="text-xs text-gray-900 font-medium text-right">s.weber@company.com</span>
</div>
<div className="flex items-start justify-between">
<span className="text-xs text-gray-500">Phone</span>
<span className="text-xs text-gray-900 font-medium text-right">+49 171 992831</span>
</div>
<div className="flex items-start justify-between">
<span className="text-xs text-gray-500">Location</span>
<span className="text-xs text-gray-900 font-medium text-right">Munich, DE</span>
</div>
</div>
</div>

<div className="p-5">
<div className="flex items-center justify-between mb-4">
<h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wide">Assigned Vehicle</h4>
<a className="text-[10px] text-blue-600 hover:underline" href="#">View details</a>
</div>
<div className="border border-gray-200 rounded-lg p-1 mb-4">

<div className="bg-gray-100 rounded h-24 w-full flex items-center justify-center mb-1 relative overflow-hidden group">
<img alt="BMW i4" className="object-cover w-full h-full opacity-90 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/5">
</div>
</div>
</div>
<div className="space-y-3">
<div className="flex items-start justify-between py-1 border-b border-gray-50">
<span className="text-xs text-gray-500">Model</span>
<span className="text-xs text-gray-900 font-medium">BMW i4 eDrive40</span>
</div>
<div className="flex items-start justify-between py-1 border-b border-gray-50 bg-yellow-50/50 -mx-1 px-1 rounded">
<span className="text-xs text-gray-500">License Plate</span>
<div className="flex items-center gap-1">
<span className="text-xs text-gray-900 font-bold tracking-tight">M-AV 8839</span>
<iconify-icon className="text-gray-400 cursor-pointer hover:text-gray-700" icon="lucide:copy" width="10"></iconify-icon>
</div>
</div>
<div className="flex items-start justify-between py-1 border-b border-gray-50">
<span className="text-xs text-gray-500">VIN</span>
<span className="text-xs text-gray-900 font-mono text-[10px]">WBA44AG000...</span>
</div>
<div className="flex items-start justify-between py-1 border-b border-gray-50">
<span className="text-xs text-gray-500">Contract End</span>
<span className="text-xs text-gray-900 font-medium">12 Nov 2025</span>
</div>
<div className="flex items-start justify-between py-1">
<span className="text-xs text-gray-500">Status</span>
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-green-100 text-green-700">
                                Active
                            </span>
</div>
</div>

<div className="mt-6">
<div className="flex justify-between items-end mb-1">
<span className="text-xs text-gray-500">Mileage Usage</span>
<span className="text-xs font-semibold text-gray-900">12,450 / 15,000 km</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-1.5">
<div className="bg-green-500 h-1.5 rounded-full" style={{width: '82%'}}></div>
</div>
<div className="mt-1 text-[10px] text-gray-400 text-right">Updated 2 days ago via Fuel Card</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
