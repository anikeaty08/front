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
      
<div className="max-w-2xl mx-auto p-5">

<div className="mb-6 border-b border-gray-800 pb-4">
<div className="flex justify-between items-center">
<h1 className="text-lg font-semibold text-white">WEEKLY<span className="text-blue-400">BRIEF</span></h1>
<p className="text-gray-400 text-sm">March 15, 2023</p>
</div>
</div>

<div className="mb-6">
<h2 className="text-xl font-semibold text-white mb-4">This Week's Highlights</h2>

<div className="bg-gray-800 rounded p-4 mb-5">
<span className="inline-block bg-blue-500 text-white text-xs px-2 py-1 rounded mb-2">FEATURED</span>
<h3 className="text-white font-medium mb-2">AI Revolution: The Next Industrial Frontier</h3>
<p className="text-gray-400 text-sm mb-2">Artificial intelligence continues to transform industries at an unprecedented pace. Our analysis shows investment opportunities in these key sectors...</p>
<a className="text-blue-400 text-sm" href="#">Read more →</a>
</div>

<div className="bg-gray-800 rounded p-4 mb-5">
<h3 className="text-white font-medium mb-3">Market at a Glance</h3>
<div className="space-y-2 text-sm">
<div className="flex justify-between">
<span className="text-gray-400">S&amp;P 500</span>
<span className="text-green-400">+2.3%</span>
</div>
<div className="flex justify-between">
<span className="text-gray-400">NASDAQ</span>
<span className="text-green-400">+3.1%</span>
</div>
<div className="flex justify-between">
<span className="text-gray-400">DOW</span>
<span className="text-green-400">+1.7%</span>
</div>
<div className="flex justify-between">
<span className="text-gray-400">Bitcoin</span>
<span className="text-red-400">-2.5%</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 gap-3 mb-5">
<div className="bg-gray-800 rounded p-3">
<span className="text-xs text-gray-400 block mb-1">TECH</span>
<p className="text-white text-sm">Semiconductor Shortage: New manufacturing facilities may finally ease global supply constraints.</p>
</div>
<div className="bg-gray-800 rounded p-3">
<span className="text-xs text-gray-400 block mb-1">POLICY</span>
<p className="text-white text-sm">Fed Signals Shift: Interest rate projections suggest a more dovish approach in coming quarters.</p>
</div>
</div>
</div>

<div className="mb-6">
<h2 className="text-white text-lg font-medium mb-3">Coming Up</h2>
<div className="bg-gray-800 rounded p-4">
<div className="space-y-3 text-sm">
<div className="flex">
<div className="bg-gray-700 rounded px-2 py-1 mr-3 text-center min-w-[50px]">
<span className="block text-xs text-gray-400">MAR</span>
<span className="block text-white">18</span>
</div>
<div>
<p className="text-white">Q1 Earnings: Tech Giants</p>
<p className="text-gray-400 text-xs">11:00 AM EST</p>
</div>
</div>
<div className="flex">
<div className="bg-gray-700 rounded px-2 py-1 mr-3 text-center min-w-[50px]">
<span className="block text-xs text-gray-400">MAR</span>
<span className="block text-white">22</span>
</div>
<div>
<p className="text-white">Fed Press Conference</p>
<p className="text-gray-400 text-xs">2:30 PM EST</p>
</div>
</div>
</div>
</div>
</div>

<div className="border-t border-gray-800 pt-4 text-xs text-gray-500">
<p>You're receiving this email because you subscribed to WeeklyBrief.</p>
<p className="mt-2">
<a className="text-blue-400" href="#">Unsubscribe</a> • 
        <a className="text-blue-400" href="#">View in browser</a>
</p>
<p className="mt-3">© 2023 WeeklyBrief. All rights reserved.</p>
</div>
</div>

    </>
  );
}
