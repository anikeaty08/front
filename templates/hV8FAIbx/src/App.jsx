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
      
<div className="w-[350px] h-[650px] rounded-[2rem] overflow-hidden shadow-xl">
<div className="w-full h-full bg-gray-900 flex flex-col">

<div className="p-4 border-b border-gray-800 flex items-center">
<button className="text-gray-400 mr-3">
<svg className="h-5 w-5" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<h1 className="text-xl font-bold text-white flex-1">Book Your Stay</h1>
<div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
<svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>

<div className="flex-1 p-4 overflow-y-auto">

<div className="flex items-center mb-4">
<div className="w-16 h-16 rounded-lg overflow-hidden mr-3">
<img alt="Grand Plaza" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h2 className="text-white font-bold">The Grand Plaza</h2>
<div className="flex items-center text-xs text-gray-400">
<svg className="h-3 w-3 mr-1" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
              Midtown Manhattan, New York
            </div>
<div className="flex items-center text-xs text-yellow-400 mt-0.5">
<svg className="h-3 w-3" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
<span className="ml-1">4.9 (128 reviews)</span>
</div>
</div>
</div>

<div className="bg-gray-800 rounded-lg border border-gray-700 mb-4">
<div className="p-3 border-b border-gray-700">
<h3 className="text-white font-medium mb-1">Select Room Type</h3>
<div className="flex items-center justify-between">
<div className="flex items-center">
<div className="w-5 h-5 rounded-full border-2 border-blue-500 flex items-center justify-center bg-blue-500 mr-2">
<svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
</svg>
</div>
<span className="text-white text-sm">Deluxe King Room</span>
</div>
<span className="text-blue-400 font-bold">$399</span>
</div>
<div className="text-xs text-gray-400 ml-7">1 king bed • City view • 400 sq ft</div>
</div>
<div className="p-3">
<div className="flex items-center justify-between">
<div className="flex items-center">
<div className="w-5 h-5 rounded-full border-2 border-gray-600 mr-2"></div>
<span className="text-white text-sm">Park View Suite</span>
</div>
<span className="text-blue-400 font-bold">$549</span>
</div>
<div className="text-xs text-gray-400 ml-7">1 king bed • Park view • 650 sq ft</div>
</div>
</div>

<div className="bg-gray-800 rounded-lg border border-gray-700 mb-4">
<div className="p-3 border-b border-gray-700">
<h3 className="text-white font-medium mb-2">Dates</h3>
<div className="flex justify-between">
<div className="bg-gray-900 rounded-lg p-2 flex-1 mr-2">
<div className="text-xs text-gray-400">Check-in</div>
<div className="text-white font-medium">Aug 15, 2023</div>
</div>
<div className="bg-gray-900 rounded-lg p-2 flex-1">
<div className="text-xs text-gray-400">Check-out</div>
<div className="text-white font-medium">Aug 18, 2023</div>
</div>
</div>
<div className="text-xs text-gray-400 mt-2">3 nights</div>
</div>
<div className="p-3">
<h3 className="text-white font-medium mb-2">Guests</h3>
<div className="flex items-center justify-between">
<div className="text-white">2 Adults, 0 Children</div>
<button className="text-blue-400">
<svg className="h-5 w-5" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="bg-gray-800 rounded-lg border border-gray-700 mb-4">
<div className="p-3">
<h3 className="text-white font-medium mb-2">Add-ons</h3>
<div className="flex items-center justify-between mb-2">
<div className="flex items-center">
<div className="w-5 h-5 rounded mr-2 flex items-center justify-center border border-gray-600">
<svg className="h-3 w-3 text-blue-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
</svg>
</div>
<span className="text-white text-sm">Airport Transfer</span>
</div>
<span className="text-blue-400">$75</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center">
<div className="w-5 h-5 rounded mr-2 flex items-center justify-center border border-gray-600">
<svg className="h-3 w-3 text-blue-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
</svg>
</div>
<span className="text-white text-sm">Breakfast Package</span>
</div>
<span className="text-blue-400">$45/day</span>
</div>
</div>
</div>

<div className="bg-gray-800 rounded-lg border border-gray-700 mb-4">
<div className="p-3">
<h3 className="text-white font-medium mb-2">Price Details</h3>
<div className="flex justify-between text-sm mb-1">
<span className="text-gray-400">Room (3 nights)</span>
<span className="text-white">$1,197.00</span>
</div>
<div className="flex justify-between text-sm mb-1">
<span className="text-gray-400">Taxes &amp; Fees</span>
<span className="text-white">$179.55</span>
</div>
<div className="flex justify-between text-sm mb-1">
<span className="text-gray-400">Add-ons</span>
<span className="text-white">$210.00</span>
</div>
<div className="border-t border-gray-700 my-2"></div>
<div className="flex justify-between font-bold">
<span className="text-white">Total</span>
<span className="text-blue-400">$1,586.55</span>
</div>
</div>
</div>

<div className="bg-gray-800 rounded-lg border border-gray-700 mb-4">
<div className="p-3">
<div className="flex justify-between items-center">
<h3 className="text-white font-medium">Payment Method</h3>
<button className="text-blue-400 text-sm">Change</button>
</div>
<div className="flex items-center mt-2">
<div className="w-10 h-6 bg-blue-900 rounded mr-2 flex items-center justify-center">
<span className="text-blue-300 text-xs font-bold">VISA</span>
</div>
<span className="text-white text-sm">•••• 4832</span>
</div>
</div>
</div>

<button className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg mb-2">
          Confirm Booking
        </button>
<p className="text-gray-400 text-xs text-center">By confirming, you agree to our terms and conditions</p>
</div>
</div>
</div>

    </>
  );
}
