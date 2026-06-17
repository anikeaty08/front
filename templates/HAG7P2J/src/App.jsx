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
      

<div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
<div className="bg-white rounded-lg w-11/12 max-w-md p-6 flex flex-col items-center">
<img alt="RBA Logo" className="mb-3" src="https://placehold.co/80x40?text=RBA"/>
<h2 className="text-xl font-semibold mb-2 text-center">Welcome to Closing Now</h2>
<p className="text-sm text-gray-600 mb-4 text-center">
        Live, real-time bidding on lots closing soon.<br/>
        Place quick bids, track favorites, and compete in the final minutes!
      </p>
<button className="w-full py-2 bg-orange-500 text-white rounded font-semibold hover:bg-orange-600 transition">Enter Live Auction</button>
</div>
</div>

<header className="bg-white shadow sticky top-0 z-40">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-2">
<div>
<h1 className="text-lg font-semibold">2024 Summer Equipment Auction</h1>
<div className="text-xs text-gray-500">Pacific Time (UTC-8) · 1,200 Lots</div>
</div>
<div className="flex items-center gap-4 mt-2 md:mt-0">
<button className="flex items-center gap-1 text-sm text-orange-600 font-medium">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
          My Watchlist
        </button>
<button className="flex items-center gap-1 text-sm text-gray-600">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
          Auction Details
        </button>
</div>
</div>
</header>

<nav className="max-w-5xl mx-auto flex overflow-x-auto gap-2 px-4 py-2 mb-2">
<button className="px-3 py-1 bg-orange-100 text-orange-700 rounded font-semibold border border-orange-400">Closing in 5 min</button>
<button className="px-3 py-1 bg-gray-200 text-gray-700 rounded">10 min</button>
<button className="px-3 py-1 bg-gray-200 text-gray-700 rounded">15 min</button>
</nav>

<main className="max-w-5xl mx-auto px-4 space-y-4">

<div className="bg-white rounded-lg shadow flex flex-col md:flex-row md:items-stretch p-3 gap-3 border-l-4 border-green-500 relative">

<div className="absolute right-3 top-3">
<span className="animate-pulse bg-green-200 text-green-700 text-xs px-2 py-1 rounded">Winning</span>
</div>
<img alt="Lot Item" className="w-24 h-18 object-cover rounded border" src="https://placehold.co/96x72?text=Lot+Image"/>
<div className="flex-1 flex flex-col justify-between">
<div>
<h2 className="font-semibold text-base mb-1">2019 Cat D6T Dozer</h2>
<div className="text-xs text-gray-500 mb-1">Lot #123 • 12 bids</div>
<div className="flex items-center gap-2">
<span className="text-lg font-bold text-green-600">$120,000</span>
<span className="text-xs text-gray-500">Current Bid</span>
</div>
</div>

<div className="flex items-center justify-between mt-2">
<div className="flex items-center gap-1">
<svg className="w-5 h-5 text-red-500 animate-pulse" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M12 8v4l3 3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="font-mono text-base text-red-600">01:28</span>
<span className="text-xs text-gray-500">left</span>
</div>
<div className="flex gap-1">
<button className="px-2 py-1 bg-orange-500 text-white rounded font-semibold text-sm hover:bg-orange-600 transition">+ $2,000</button>
<button className="px-2 py-1 bg-gray-200 text-gray-700 rounded">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              Watch
            </button>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-lg shadow flex flex-col md:flex-row md:items-stretch p-3 gap-3 border-l-4 border-red-500 relative">
<div className="absolute right-3 top-3 flex items-center gap-1">
<span className="animate-bounce bg-red-200 text-red-700 text-xs px-2 py-1 rounded">Outbid</span>
<span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-ping ml-1"></span>
</div>
<img alt="Lot Item" className="w-24 h-18 object-cover rounded border" src="https://placehold.co/96x72?text=Lot+Image"/>
<div className="flex-1 flex flex-col justify-between">
<div>
<h2 className="font-semibold text-base mb-1">2021 John Deere 210G LC</h2>
<div className="text-xs text-gray-500 mb-1">Lot #128 • 9 bids</div>
<div className="flex items-center gap-2">
<span className="text-lg font-bold text-red-600">$95,000</span>
<span className="text-xs text-gray-500">Current Bid</span>
</div>
</div>
<div className="flex items-center justify-between mt-2">
<div className="flex items-center gap-1">
<svg className="w-5 h-5 text-red-500 animate-pulse" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M12 8v4l3 3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="font-mono text-base text-red-600">00:39</span>
<span className="text-xs text-gray-500">left</span>
</div>
<div className="flex gap-1">
<button className="px-2 py-1 bg-orange-500 text-white rounded font-semibold text-sm hover:bg-orange-600 transition">+ $2,000</button>
<button className="px-2 py-1 bg-gray-200 text-gray-700 rounded">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              Watch
            </button>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-lg shadow flex flex-col md:flex-row md:items-stretch p-3 gap-3 border-l-4 border-yellow-400 relative opacity-70">
<div className="absolute right-3 top-3">
<span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded">Watched</span>
</div>
<img alt="Lot Item" className="w-24 h-18 object-cover rounded border" src="https://placehold.co/96x72?text=Lot+Image"/>
<div className="flex-1 flex flex-col justify-between">
<div>
<h2 className="font-semibold text-base mb-1">2018 Komatsu PC210LC</h2>
<div className="text-xs text-gray-500 mb-1">Lot #135 • 4 bids</div>
<div className="flex items-center gap-2">
<span className="text-lg font-bold text-gray-700">$82,500</span>
<span className="text-xs text-gray-500">Current Bid</span>
</div>
</div>
<div className="flex items-center justify-between mt-2">
<div className="flex items-center gap-1">
<svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M12 8v4l3 3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="font-mono text-base text-gray-500">09:45</span>
<span className="text-xs text-gray-500">left</span>
</div>
<div className="flex gap-1">
<button className="px-2 py-1 bg-gray-200 text-gray-700 rounded">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              Unwatch
            </button>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
<div className="bg-white rounded-lg shadow-lg w-10/12 max-w-xs p-6 flex flex-col items-center">
<svg className="w-10 h-10 text-green-500 mb-2" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h3 className="font-semibold text-lg mb-1">Bid Placed!</h3>
<p className="text-sm text-gray-600 text-center mb-2">Your bid of <span className="font-bold">$122,000</span> was submitted for Lot #123.</p>
<button className="mt-2 px-4 py-2 bg-orange-500 text-white rounded font-semibold">OK</button>
</div>
</div>

<div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-red-500 text-white rounded shadow-lg px-6 py-3 z-50 flex items-center gap-2 animate-bounce">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>You've been outbid on Lot #128!</span>
</div>

<div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white rounded shadow px-4 py-2 z-40 flex items-center gap-2 animate-pulse">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M12 8v4l3 3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>Time extended for Lot #123 - new bid placed!</span>
</div>
</main>

<nav className="fixed bottom-0 left-0 w-full bg-white border-t flex justify-around py-2 md:hidden z-40">
<button className="flex flex-col items-center text-orange-600">
<svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M16 3v4M8 3v4M4 11h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-xs font-semibold">Lots</span>
</button>
<button className="flex flex-col items-center text-gray-600">
<svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-xs">Watchlist</span>
</button>
<button className="flex flex-col items-center text-gray-600">
<svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-xs">Info</span>
</button>
</nav>

    </>
  );
}
