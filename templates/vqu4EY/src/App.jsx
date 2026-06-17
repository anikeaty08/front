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
      

<div className="w-[280px] h-screen bg-white shadow-lg flex flex-col overflow-hidden border-r border-gray-200">

<div className="flex items-center gap-3 px-6 py-5 border-b border-gray-200">
<div className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-green-600 to-green-500 rounded-xl shadow">
<span className="text-white text-xl font-bold">RQ</span>
</div>
<span className="ml-1 text-xl font-semibold text-gray-900">RideQuick</span>
</div>

<div className="px-6 py-4 border-b border-gray-200 flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full object-cover border border-gray-200" src="https://randomuser.me/api/portraits/men/32.jpg"/>
<div>
<div className="font-semibold text-gray-900">Alex Morgan</div>
<div className="text-xs text-gray-500">★ 4.92 · 142 rides</div>
</div>
</div>

<nav className="flex-1 px-3 pt-4 pb-2 overflow-y-auto">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-green-50 text-green-700 font-medium mb-1" href="#">
<i className="w-5 h-5" data-lucide="home"></i>
        Home
      </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-100 text-gray-700 font-medium mb-1" href="#">
<i className="w-5 h-5" data-lucide="map"></i>
        My Rides
      </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-100 text-gray-700 font-medium mb-1" href="#">
<i className="w-5 h-5" data-lucide="calendar"></i>
        Schedule Ride
      </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-100 text-gray-700 font-medium mb-1 relative" href="#">
<i className="w-5 h-5" data-lucide="heart"></i>
        Saved Places
      </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-100 text-gray-700 font-medium mb-1" href="#">
<i className="w-5 h-5" data-lucide="gift"></i>
        Promotions
        <span className="ml-auto inline-flex items-center justify-center text-xs font-semibold bg-red-500 text-white rounded-full w-5 h-5">2</span>
</a>
<div className="uppercase text-xs text-gray-400 font-semibold mt-6 mb-2 px-3">Payment</div>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-100 text-gray-700 font-medium mb-1" href="#">
<i className="w-5 h-5" data-lucide="credit-card"></i>
        Payment Methods
      </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-100 text-gray-700 font-medium mb-1" href="#">
<i className="w-5 h-5" data-lucide="receipt"></i>
        Ride History
      </a>
<div className="uppercase text-xs text-gray-400 font-semibold mt-6 mb-2 px-3">Account</div>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-100 text-gray-700 font-medium mb-1" href="#">
<i className="w-5 h-5" data-lucide="user"></i>
        Profile
      </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-100 text-gray-700 font-medium mb-1" href="#">
<i className="w-5 h-5" data-lucide="settings"></i>
        Settings
      </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-100 text-gray-700 font-medium mb-1" href="#">
<i className="w-5 h-5" data-lucide="help-circle"></i>
        Help &amp; Support
      </a>
</nav>

<div className="px-6 py-4 border-t border-gray-200">
<a className="flex items-center gap-2 text-gray-600 hover:text-red-600 font-medium" href="#">
<i className="w-5 h-5" data-lucide="log-out"></i>
<span>Sign Out</span>
</a>
</div>
</div>

<div className="flex-1 flex flex-col h-screen overflow-hidden">

<div className="bg-white h-16 border-b border-gray-200 flex items-center px-6 justify-between">
<div className="flex items-center gap-2">
<button className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
<h1 className="text-lg font-semibold">Book a Ride</h1>
</div>
<div className="flex items-center gap-3">
<button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100">
<i className="w-5 h-5" data-lucide="bell"></i>
</button>
<button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100">
<i className="w-5 h-5" data-lucide="message-circle"></i>
</button>
</div>
</div>

<div className="flex-1 flex flex-col relative">

<div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
<div className="text-gray-400 flex flex-col items-center">
<i className="w-16 h-16 mb-2" data-lucide="map"></i>
<span>Map View</span>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-lg p-6">
<h2 className="text-xl font-semibold mb-4">Where to?</h2>

<div className="relative mb-4">
<div className="absolute left-4 top-1/2 -translate-y-1/2">
<div className="w-2.5 h-2.5 rounded-full bg-green-500 ring-4 ring-green-100"></div>
</div>
<input className="w-full pl-12 pr-4 py-3.5 bg-gray-100 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition" placeholder="Current location" type="text"/>
</div>
<div className="relative mb-6">
<div className="absolute left-4 top-1/2 -translate-y-1/2">
<div className="w-2.5 h-2.5 rounded-full bg-red-500 ring-4 ring-red-100"></div>
</div>
<input className="w-full pl-12 pr-4 py-3.5 bg-gray-100 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition" placeholder="Enter destination" type="text"/>
</div>

<div className="flex gap-3 mb-6 overflow-x-auto pb-2">
<div className="flex-shrink-0 w-28 flex flex-col items-center p-3 rounded-xl border-2 border-green-500 bg-green-50">
<i className="w-8 h-8 text-green-600 mb-1" data-lucide="car"></i>
<span className="text-sm font-medium">Economy</span>
<span className="text-xs text-gray-500">$12.50</span>
</div>
<div className="flex-shrink-0 w-28 flex flex-col items-center p-3 rounded-xl border border-gray-200 hover:border-green-500 hover:bg-green-50">
<i className="w-8 h-8 text-gray-600 mb-1" data-lucide="car"></i>
<span className="text-sm font-medium">Comfort</span>
<span className="text-xs text-gray-500">$18.75</span>
</div>
<div className="flex-shrink-0 w-28 flex flex-col items-center p-3 rounded-xl border border-gray-200 hover:border-green-500 hover:bg-green-50">
<i className="w-8 h-8 text-gray-600 mb-1" data-lucide="truck"></i>
<span className="text-sm font-medium">XL</span>
<span className="text-xs text-gray-500">$24.30</span>
</div>
<div className="flex-shrink-0 w-28 flex flex-col items-center p-3 rounded-xl border border-gray-200 hover:border-green-500 hover:bg-green-50">
<i className="w-8 h-8 text-gray-600 mb-1" data-lucide="car"></i>
<span className="text-sm font-medium">Premium</span>
<span className="text-xs text-gray-500">$32.80</span>
</div>
</div>

<button className="w-full py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition shadow-sm">
          Book Ride Now
        </button>
</div>
</div>
</div>


    </>
  );
}
