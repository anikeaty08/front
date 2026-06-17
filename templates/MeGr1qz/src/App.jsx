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
      
<div className="mx-auto my-10 max-w-[375px] h-[812px] bg-white rounded-[60px] overflow-hidden shadow-xl border-8 border-gray-800 relative">

<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[40%] h-[30px] bg-gray-800 rounded-b-xl"></div>

<div className="pt-1 px-6">
<div className="flex justify-between text-xs">
<span>9:41</span>
<div className="flex gap-1">
<svg className="h-4 w-4" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 7h12m0 0l-4-4m4 4l-4 4m-8 6H4m0 0l4 4m-4-4l4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg className="h-4 w-4" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg className="h-4 w-4" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>

<div className="pt-6 px-6 h-full flex flex-col">

<div className="flex justify-between items-center mb-6">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
<svg className="h-4 w-4 text-blue-500" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" fill-rule="evenodd"></path>
</svg>
</div>
<span className="text-sm text-gray-600">3,217 Points</span>
</div>
<div>
<svg className="h-6 w-6 text-gray-500" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>

<div className="text-center mb-6">
<p className="text-indigo-600 italic text-lg mb-1">Jordan,</p>
<p className="text-indigo-900 font-bold text-xl mb-3">YOUR BOOKING IS CONFIRMED</p>
<div className="flex justify-center items-center gap-2">
<div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
<div className="w-20 h-0.5 bg-indigo-600"></div>
<svg className="h-5 w-5 text-indigo-600" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21.5,16.5H18.75a1,1,0,0,1-.66-.25l-1.59-1.4V16.5h-7.5V14.86L7.41,16.25a1,1,0,0,1-.66.25H3.5a1,1,0,0,1-1-1v-4a1,1,0,0,1,1-1H6.75a1,1,0,0,1,.66.25L9,12.14V10.5h7.5v1.64l1.59-1.39a1,1,0,0,1,.66-.25H21.5a1,1,0,0,1,1,1v4A1,1,0,0,1,21.5,16.5Z"></path>
</svg>
<div className="w-20 h-0.5 bg-indigo-600"></div>
<div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
</div>
</div>

<div className="mb-4 overflow-y-auto h-[450px] pb-4">
<div className="flex justify-between items-center mb-3">
<p className="text-gray-500 text-sm">Upcoming Bookings</p>
<button className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
<svg className="h-4 w-4 text-gray-500" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" fill-rule="evenodd"></path>
</svg>
</button>
</div>

<div className="bg-white rounded-xl shadow-md p-5 mb-4 border border-black/10">
<div className="flex items-center gap-3 mb-3">
<div className="p-2 bg-indigo-100 rounded-lg">
<svg className="h-5 w-5 text-indigo-600" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21.5,16.5H18.75a1,1,0,0,1-.66-.25l-1.59-1.4V16.5h-7.5V14.86L7.41,16.25a1,1,0,0,1-.66.25H3.5a1,1,0,0,1-1-1v-4a1,1,0,0,1,1-1H6.75a1,1,0,0,1,.66.25L9,12.14V10.5h7.5v1.64l1.59-1.39a1,1,0,0,1,.66-.25H21.5a1,1,0,0,1,1,1v4A1,1,0,0,1,21.5,16.5Z"></path>
</svg>
</div>
<div>
<p className="font-semibold text-gray-800">Flight to Paris</p>
<p className="text-xs text-gray-500">Business Class • 2 Passengers</p>
</div>
</div>
<div className="flex justify-between items-center mb-2">
<div className="text-center">
<p className="text-indigo-900 font-bold text-2xl">JFK</p>
<p className="text-gray-500 text-sm">10:30</p>
</div>
<div className="flex flex-col items-center">
<svg className="h-5 w-5 text-gray-400 mb-1" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21.5,16.5H18.75a1,1,0,0,1-.66-.25l-1.59-1.4V16.5h-7.5V14.86L7.41,16.25a1,1,0,0,1-.66.25H3.5a1,1,0,0,1-1-1v-4a1,1,0,0,1,1-1H6.75a1,1,0,0,1,.66.25L9,12.14V10.5h7.5v1.64l1.59-1.39a1,1,0,0,1,.66-.25H21.5a1,1,0,0,1,1,1v4A1,1,0,0,1,21.5,16.5Z"></path>
</svg>
<p className="text-gray-600 font-bold text-xs">7 h 45 min</p>
</div>
<div className="text-center">
<p className="text-indigo-900 font-bold text-2xl">CDG</p>
<p className="text-gray-500 text-sm">23:15</p>
</div>
</div>
<div className="mt-4 flex justify-between text-sm">
<div>
<p className="text-gray-500 text-xs mb-1">Date</p>
<p className="text-gray-700 font-medium">Jun 15, 2023</p>
</div>
<div>
<p className="text-gray-500 text-xs mb-1">Booking Ref</p>
<p className="text-gray-700 font-medium">AF 3842</p>
</div>
</div>
</div>

<div className="bg-white rounded-xl shadow-md p-5 mb-4 border border-black/10">
<div className="flex items-center gap-3 mb-3">
<div className="p-2 bg-blue-100 rounded-lg">
<svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<p className="font-semibold text-gray-800">Grand Hôtel Paris</p>
<p className="text-xs text-gray-500">Deluxe Suite • 4 Nights</p>
</div>
</div>
<div className="flex items-center gap-2 mb-3">
<svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<p className="text-sm text-gray-600">8 Rue de Rivoli, 75001 Paris, France</p>
</div>
<div className="mt-4 flex justify-between text-sm">
<div>
<p className="text-gray-500 text-xs mb-1">Check-in</p>
<p className="text-gray-700 font-medium">Jun 15, 2023</p>
</div>
<div>
<p className="text-gray-500 text-xs mb-1">Check-out</p>
<p className="text-gray-700 font-medium">Jun 19, 2023</p>
</div>
<div>
<p className="text-gray-500 text-xs mb-1">Booking Ref</p>
<p className="text-gray-700 font-medium">GHP 7842</p>
</div>
</div>
</div>

<div className="bg-white rounded-xl shadow-md p-5 mb-4 border border-black/10">
<div className="flex items-center gap-3 mb-3">
<div className="p-2 bg-green-100 rounded-lg">
<svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 7h12m0 0l-4-4m4 4l-4 4m-8 6H4m0 0l4 4m-4-4l4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<p className="font-semibold text-gray-800">Luxury Car Rental</p>
<p className="text-xs text-gray-500">Mercedes E-Class • 5 Days</p>
</div>
</div>
<div className="flex items-center gap-2 mb-3">
<svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<p className="text-sm text-gray-600">Charles de Gaulle Airport, Terminal 2</p>
</div>
<div className="mt-4 flex justify-between text-sm">
<div>
<p className="text-gray-500 text-xs mb-1">Pick-up</p>
<p className="text-gray-700 font-medium">Jun 15, 2023</p>
</div>
<div>
<p className="text-gray-500 text-xs mb-1">Drop-off</p>
<p className="text-gray-700 font-medium">Jun 20, 2023</p>
</div>
<div>
<p className="text-gray-500 text-xs mb-1">Booking Ref</p>
<p className="text-gray-700 font-medium">LCR 5692</p>
</div>
</div>
</div>
</div>

<div className="mt-auto border-t border-gray-200 pt-4 pb-8">
<div className="flex justify-between items-center">
<div className="flex flex-col items-center">
<svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs text-indigo-600 font-medium mt-1">Home</span>
</div>
<div className="flex flex-col items-center">
<svg className="h-6 w-6 text-gray-500" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs text-gray-500 mt-1">Bookings</span>
</div>
<div className="flex flex-col items-center">
<svg className="h-6 w-6 text-gray-500" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs text-gray-500 mt-1">Search</span>
</div>
<div className="flex flex-col items-center">
<svg className="h-6 w-6 text-gray-500" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs text-gray-500 mt-1">Profile</span>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
