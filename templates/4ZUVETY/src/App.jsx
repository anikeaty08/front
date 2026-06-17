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



    tailwind.config = {
      theme: {
        extend: {
          fontFamily: { sans: ['Inter', 'sans-serif'] },
          colors: {
            primary: '#2563eb',
            dark: '#0d0d0d'
          }
        }
      }
    }
  


    const range = document.getElementById('range');
    const rangeValue = document.getElementById('rangeValue');
    range.addEventListener('input', () => {
      rangeValue.textContent = range.value + '%';
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
      
<div className="min-h-screen flex pt-6 pr-6 pb-6 pl-6 items-center justify-center">
<div className="max-w-lg w-full space-y-8">

<div className="flight-card relative overflow-hidden border-slate-700/50 border rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-2xl">

<div className="flex items-start justify-between mb-4">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center">
<span className="text-white font-bold text-lg">UA</span>
</div>
<div className="">
<span className="leading-none text-2xl font-semibold">United Airlines</span>
<p className="text-sm text-emerald-400 font-medium">Premium Economy</p>
</div>
</div>
<div className="status-badge flex items-center space-x-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full px-4 py-2">
<div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
<span className="text-sm font-medium text-emerald-300">On Time</span>
</div>
</div>

<div className="flex items-center justify-between mb-6">
<div className="flex items-center space-x-4">
<span className="text-lg font-semibold text-blue-300">UA 1847</span>
<span className="text-sm text-slate-400">Boeing 787-9</span>
</div>
<div className="flex items-center space-x-2 bg-slate-800/50 rounded-full px-4 py-2">
<svg className="w-4 h-4 text-blue-400" fill="currentColor" viewbox="0 0 24 24">
<path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"></path>
</svg>
<span className="text-sm font-semibold text-slate-200">4h 18m</span>
</div>
</div>
<div className="flex items-end justify-between mb-6">

<div className="text-left">
<p className="leading-none bg-clip-text text-7xl font-semibold text-transparent bg-gradient-to-r from-blue-400 to-purple-400">LAX</p>
<p className="text-lg font-semibold text-slate-200 mt-2">11:45 AM</p>
<p className="text-sm text-slate-400">Los Angeles Intl</p>
<p className="text-xs text-slate-500">Terminal 7 • Gate 45A</p>
</div>

<div className="text-right">
<p className="leading-none bg-clip-text text-7xl font-semibold text-transparent bg-gradient-to-r from-purple-400 to-pink-400">JFK</p>
<p className="text-lg font-semibold text-slate-200 mt-2">8:03 PM</p>
<p className="text-sm text-slate-400">John F Kennedy Intl</p>
<p className="text-xs text-slate-500">Terminal 4 • Gate B12</p>
</div>
</div>

<div className="relative mb-6">
<svg className="w-full h-10" viewbox="0 0 100 20">
<defs>
</defs>
<path className="" d="M8 15 Q50 -5 92 15" fill="none" stroke="url(#pathGradient)" strokeLinecap="round" strokeWidth="3"></path>
<circle cx="8" cy="15" fill="#3b82f6" r="3"></circle>
<circle cx="92" cy="15" fill="#ec4899" r="3"></circle>
</svg>

<div className="absolute left-1/3 -translate-x-1/2 -top-4">
<div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
<svg className="w-4 h-4 text-white" fill="currentColor" viewbox="0 0 24 24">
<path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"></path>
</svg>
</div>
</div>
</div>
<div className="border-slate-600/50 border-t mt-6 mb-6"></div><div className="text-center mb-6">
<p className="text-sm text-slate-400">Currently over Kansas City • Alt: 37,000 ft • Speed: 548 mph</p>
<p className="text-xs text-slate-500 mt-1">Last updated 2 minutes ago</p>
</div>


<div className="border-slate-600/50 border-t mt-6 mb-6"></div><div className="grid grid-cols-2 gap-6 mb-6">
<div className="">
<p className="text-xs tracking-wide text-slate-400 uppercase">Passenger</p>
<p className="font-semibold mt-1 text-slate-200">Sarah M. Johnson</p>
<p className="text-sm text-blue-300">MileagePlus Premier Silver</p>
</div>
<div className="">
<p className="text-xs tracking-wide text-slate-400 uppercase">Seat Assignment</p>
<p className="font-semibold mt-1 text-slate-200">12A</p>
<p className="text-sm text-slate-400">Window • Extra Legroom</p>
</div>
</div>

<div className="border-slate-600/50 border-t mt-6 mb-6"></div><div className="grid grid-cols-3 gap-4">
<div className="text-center">
<p className="text-xs tracking-wide text-slate-400 uppercase">Baggage Claim</p>
<p className="text-lg font-semibold text-slate-200 mt-1">Carousel 3</p>
</div>
<div className="text-center">
<p className="text-xs tracking-wide text-slate-400 uppercase">Confirmation</p>
<p className="font-semibold mt-1 text-slate-200 text-lg">MNX7K2</p>
</div>
<div className="text-center">
<p className="text-xs tracking-wide text-slate-400 uppercase">Miles Earned</p>
<p className="font-semibold mt-1 text-slate-200 text-lg">2,574</p>
</div>
</div>
</div>

<div className="bg-white/95 backdrop-blur-sm rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-xl border border-white/50 space-y-8">
<h3 className="text-xl font-bold text-slate-800 mb-6">Flight Preferences</h3>

<div className="flex items-center justify-between">
<div className="flex-1">
<span className="font-semibold text-slate-800">Push Notifications</span>
<p className="text-sm text-slate-500 mt-1">Get alerts for gate changes, delays, and boarding</p>
</div>
<label className="relative inline-flex items-center cursor-pointer ml-4">
<input checked="" className="sr-only toggle" type="checkbox"/>
<span className="w-12 h-7 bg-slate-300 rounded-full flex items-center p-1 transition-colors">
<span className="dot w-5 h-5 bg-white rounded-full shadow-md transform transition-transform"></span>
</span>
</label>
</div>

<div>
<div className="flex justify-between items-center mb-3">
<div>
<label className="font-semibold text-slate-800">Alert Volume</label>
<p className="text-sm text-slate-500">Notification sound level</p>
</div>
<span className="text-slate-600 font-medium bg-slate-100 px-3 py-1 rounded-full text-sm" id="rangeValue">75%</span>
</div>
<input className="mt-2" id="range" max="100" min="0" type="range" value="75"/>
</div>

<div>
<label className="block font-semibold text-slate-800 mb-3" htmlFor="airline">Default Airline Preference</label>
<div className="relative">
<select className="custom w-full bg-slate-50 border border-slate-200 text-slate-800 font-medium rounded-xl py-3 pl-4 pr-12 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" id="airline">
<option>Alaska Airlines</option>
<option>American Airlines</option>
<option>Delta Air Lines</option>
<option>JetBlue Airways</option>
<option>Southwest Airlines</option>
<option selected="">United Airlines</option>
</select>
<svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M6 9l6 6 6-6"></path>
</svg>
</div>
</div>

<div>
<label className="block font-semibold text-slate-800 mb-3" htmlFor="class">Preferred Travel Class</label>
<div className="relative">
<select className="custom w-full bg-slate-50 border border-slate-200 text-slate-800 font-medium rounded-xl py-3 pl-4 pr-12 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" id="class">
<option>Basic Economy</option>
<option>Economy</option>
<option selected="">Premium Economy</option>
<option>Business Class</option>
<option>First Class</option>
</select>
<svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M6 9l6 6 6-6"></path>
</svg>
</div>
</div>

<div className="space-y-4 pt-4 border-t border-slate-200">
<div className="flex items-start space-x-3">
<input checked="" className="mt-1 h-4 w-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500 accent-blue-600" id="checkin" type="checkbox"/>
<label className="text-slate-700 font-medium" htmlFor="checkin">Enable automatic check-in 24 hours before departure</label>
</div>
<div className="flex items-start space-x-3">
<input className="mt-1 h-4 w-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500 accent-blue-600" id="weather" type="checkbox"/>
<label className="text-slate-700 font-medium" htmlFor="weather">Include weather updates for destination city</label>
</div>
<div className="flex items-start space-x-3">
<input checked="" className="mt-1 h-4 w-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500 accent-blue-600" id="calendar" type="checkbox"/>
<label className="text-slate-700 font-medium" htmlFor="calendar">Sync flight details with calendar app</label>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
