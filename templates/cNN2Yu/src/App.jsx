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
      
<div className="iphone-frame relative bg-[#1A1A1C] rounded-[45px] overflow-hidden shadow-2xl border-8 border-[#0F0F10] w-[380px] h-[780px] outline outline-1 outline-gray-700">

<div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-20">
<div className="dynamic-island bg-black rounded-full h-[34px] w-[120px] mt-3 flex items-center justify-center overflow-hidden outline outline-1 outline-gray-700">
<div className="text-white text-xs font-medium opacity-0 hover:opacity-100 transition-opacity">
          $89.97 monthly
        </div>
</div>
</div>

<div className="pt-16 h-full bg-[#1A1A1C] flex flex-col">
<div className="flex-1 overflow-y-auto px-5 pb-20">

<div className="mt-8 animate-in">
<h1 className="text-3xl font-bold text-white">SubTrack</h1>
<p className="text-gray-400 mt-1">Track your subscriptions</p>
</div>

<div className="bg-[#27272A] rounded-xl p-5 mt-6 shadow-sm animate-in delay-1 outline outline-1 outline-gray-700">
<div className="flex justify-between items-center">
<h2 className="text-lg font-semibold text-white">Monthly Total</h2>
<span className="text-2xl font-bold text-indigo-400">$89.97</span>
</div>
<div className="h-2 bg-[#3A3A3D] rounded-full mt-4 overflow-hidden">
<div className="h-full bg-indigo-500 rounded-full w-3/4"></div>
</div>
<div className="flex justify-between mt-2 text-xs text-gray-400">
<span>Budget: $120</span>
<span>75% used</span>
</div>
</div>

<h2 className="text-lg font-semibold text-white mt-8 mb-4 animate-in delay-2">Active Subscriptions</h2>
<div className="space-y-3">

<div className="subscription-card bg-[#27272A] rounded-xl p-4 shadow-sm flex items-center justify-between animate-in delay-2 outline outline-1 outline-gray-700">
<div className="flex items-center">
<div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
<svg className="h-6 w-6 text-white" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5v14h14V5H5zm12 10h-4v-2h4v2zm0-4H7V9h10v2z"></path>
</svg>
</div>
<div className="ml-3">
<h3 className="font-medium text-white">Netflix</h3>
<p className="text-xs text-gray-400">Premium Plan</p>
</div>
</div>
<div className="text-right">
<p className="font-semibold text-white">$17.99</p>
<p className="text-xs text-gray-400">Monthly</p>
</div>
</div>

<div className="subscription-card bg-[#27272A] rounded-xl p-4 shadow-sm flex items-center justify-between animate-in delay-3 outline outline-1 outline-gray-700">
<div className="flex items-center">
<div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
<svg className="h-6 w-6 text-white" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5z"></path>
</svg>
</div>
<div className="ml-3">
<h3 className="font-medium text-white">Spotify</h3>
<p className="text-xs text-gray-400">Family Plan</p>
</div>
</div>
<div className="text-right">
<p className="font-semibold text-white">$14.99</p>
<p className="text-xs text-gray-400">Monthly</p>
</div>
</div>

<div className="subscription-card bg-[#27272A] rounded-xl p-4 shadow-sm flex items-center justify-between animate-in delay-4 outline outline-1 outline-gray-700">
<div className="flex items-center">
<div className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center">
<svg className="h-6 w-6 text-white" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11A2.98 2.98 0 0 1 22 15c0 1.65-1.35 3-3 3H6c-2.21 0-4-1.79-4-4 0-1.93 1.38-3.56 3.2-3.92l.8-.16.16-.79C6.97 6.5 9.28 4 12 4"></path>
</svg>
</div>
<div className="ml-3">
<h3 className="font-medium text-white">iCloud+</h3>
<p className="text-xs text-gray-400">200GB Storage</p>
</div>
</div>
<div className="text-right">
<p className="font-semibold text-white">$2.99</p>
<p className="text-xs text-gray-400">Monthly</p>
</div>
</div>

<div className="subscription-card bg-[#27272A] rounded-xl p-4 shadow-sm flex items-center justify-between animate-in delay-4 outline outline-1 outline-gray-700">
<div className="flex items-center">
<div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
<svg className="h-6 w-6 text-white" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H5v-2h7v2zm7-4H5v-2h14v2zm0-4H5V7h14v2z"></path>
</svg>
</div>
<div className="ml-3">
<h3 className="font-medium text-white">Linear</h3>
<p className="text-xs text-gray-400">Team Plan</p>
</div>
</div>
<div className="text-right">
<p className="font-semibold text-white">$8.00</p>
<p className="text-xs text-gray-400">Monthly</p>
</div>
</div>
</div>
</div>

<div className="absolute bottom-24 right-6 z-10">
<button className="bg-indigo-600 h-14 w-14 rounded-full shadow-lg flex items-center justify-center text-white outline outline-1 outline-indigo-400 hover:scale-105 transition-transform">
<svg className="h-8 w-8" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>

<div className="h-20 bg-[#232326] border-t border-[#343438] flex justify-around items-center px-6 mt-auto outline outline-1 outline-gray-700">
<button className="text-indigo-400 flex flex-col items-center">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs mt-1">Home</span>
</button>
<button className="text-gray-500 flex flex-col items-center">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs mt-1">Stats</span>
</button>
<button className="text-gray-500 flex flex-col items-center">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs mt-1">Settings</span>
</button>
</div>
</div>
</div>

    </>
  );
}
