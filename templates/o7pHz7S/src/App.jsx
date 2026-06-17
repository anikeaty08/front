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
<h1 className="text-xl font-bold text-white flex-1 text-center">Booking Confirmed</h1>
<button className="text-gray-400">
<svg className="h-5 w-5" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>

<div className="flex-1 p-4 overflow-y-auto">

<div className="flex flex-col items-center justify-center py-6">
<div className="w-20 h-20 rounded-full bg-green-900/30 flex items-center justify-center mb-4 border-4 border-green-500">
<svg className="h-10 w-10 text-green-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h2 className="text-white text-lg font-bold mb-1">Thank You!</h2>
<p className="text-gray-400 text-sm text-center mb-4">Your booking has been confirmed. We've sent the details to your email.</p>
<div className="bg-gray-800/70 px-4 py-1.5 rounded-full text-sm text-blue-400 border border-gray-700">
            Booking ID: ADTNY28756
          </div>
</div>

<div className="bg-gray-800 rounded-lg border border-gray-700 mb-4">
<div className="p-3 border-b border-gray-700">
<div className="flex items-center">
<div className="w-12 h-12 rounded-lg overflow-hidden mr-3">
<img alt="Grand Plaza" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h3 className="text-white font-bold">The Grand Plaza</h3>
<div className="flex items-center text-xs text-gray-400">
<svg className="h-3 w-3 mr-1" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  Midtown Manhattan, New York
                </div>
</div>
</div>
</div>
<div className="p-3 border-b border-gray-700">
<div className="grid grid-cols-2 gap-2">
<div>
<div className="text-xs text-gray-400">Check-in</div>
<div className="text-white">Aug 15, 2023</div>
<div className="text-xs text-gray-400">From 3:00 PM</div>
</div>
<div>
<div className="text-xs text-gray-400">Check-out</div>
<div className="text-white">Aug 18, 2023</div>
<div className="text-xs text-gray-400">Until 11:00 AM</div>
</div>
</div>
</div>
<div className="p-3 border-b border-gray-700">
<div className="text-xs text-gray-400">Room Type</div>
<div className="text-white">Deluxe King Room</div>
<div className="text-xs text-gray-400">1 king bed • City view • 400 sq ft</div>
</div>
<div className="p-3">
<div className="text-xs text-gray-400">Guests</div>
<div className="text-white">2 Adults</div>
</div>
</div>

<div className="bg-gray-800 rounded-lg border border-gray-700 mb-4">
<div className="p-3 border-b border-gray-700">
<h3 className="text-white font-medium mb-1">Payment Summary</h3>
<div className="flex items-center">
<div className="w-8 h-5 bg-blue-900 rounded mr-2 flex items-center justify-center">
<span className="text-blue-300 text-xs font-bold">VISA</span>
</div>
<span className="text-white text-sm">•••• 4832</span>
</div>
</div>
<div className="p-3">
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
<span className="text-white">Total Paid</span>
<span className="text-blue-400">$1,586.55</span>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-3 mb-4">
<button className="py-3 bg-gray-800 text-white font-medium rounded-lg border border-gray-700 flex items-center justify-center">
<svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
            Save
          </button>
<button className="py-3 bg-gray-800 text-white font-medium rounded-lg border border-gray-700 flex items-center justify-center">
<svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
            Email
          </button>
</div>

<button className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg mb-3">
          View Itinerary
        </button>
<button className="w-full py-3 bg-gray-800 text-white font-bold rounded-lg border border-gray-700">
          Return to Home
        </button>
</div>
</div>
</div>

    </>
  );
}
