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
      

<div className="max-w-7xl mx-auto space-y-12">

<header className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-zinc-900 pb-8">
<div className="space-y-2">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-zinc-100 rounded flex items-center justify-center text-zinc-950 font-semibold tracking-tighter text-sm">
                        JP
                    </div>
<span className="text-zinc-100 font-medium tracking-tight text-xl">Japan Expedition</span>
</div>
<p className="text-sm text-zinc-500 font-normal">March 9 — March 18 • 3 Cities • 10 Days</p>
</div>
<div className="flex items-center gap-3">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-950 flex items-center justify-center text-xs text-zinc-300">YO</div>
</div>
<button className="flex items-center gap-2 px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 text-xs font-medium rounded-full border border-zinc-800 transition-colors">
<iconify-icon icon="solar:share-linear" strokeWidth="1.5" width="16"></iconify-icon>
                    Share
                </button>
<button className="flex items-center gap-2 px-4 py-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-950 text-xs font-medium rounded-full transition-colors">
<iconify-icon icon="solar:add-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
                    Add Plan
                </button>
</div>
</header>

<div className="border border-zinc-900 rounded-xl overflow-hidden bg-zinc-900/20 backdrop-blur-sm">

<div className="hidden md:grid grid-cols-[100px_100px_1fr_200px_180px_100px] gap-4 px-6 py-3 bg-zinc-900/50 border-b border-zinc-800 text-xs font-medium text-zinc-500 uppercase tracking-wider">
<div>Date</div>
<div>Time</div>
<div>Activity</div>
<div>Accommodation</div>
<div>Logistics</div>
<div className="text-right">Maps</div>
</div>

<div className="group grid md:grid-cols-[100px_100px_1fr_200px_180px_100px] gap-4 px-6 py-5 border-b border-zinc-800/50 hover:bg-zinc-900/40 transition-colors items-start">
<div className="flex flex-col">
<span className="text-zinc-100 font-medium text-sm">Mar 9</span>
<span className="text-xs text-zinc-600">Day 1</span>
</div>
<div className="text-sm text-zinc-400 font-normal flex items-center gap-1.5">
<iconify-icon className="text-zinc-600" icon="solar:moon-linear"></iconify-icon> Night
                </div>
<div className="space-y-1">
<div className="flex items-center gap-2">
<span className="px-1.5 py-0.5 rounded border border-zinc-800 text-[10px] font-medium text-zinc-500 bg-zinc-900">Tokyo</span>
<span className="text-zinc-200 font-medium text-sm">Arrival &amp; Check-in</span>
</div>
<p className="text-xs text-zinc-500">Flight landing followed by transfer to Shinjuku.</p>
</div>
<div className="flex items-center gap-2 text-xs text-zinc-400">
<iconify-icon className="text-zinc-600 text-base" icon="solar:bed-linear"></iconify-icon>
                    Toyoko Inn Shinjuku
                </div>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs text-zinc-400">
<iconify-icon icon="solar:plane-linear"></iconify-icon> Flight
                    </span>
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs text-zinc-400">
<iconify-icon icon="solar:train-linear"></iconify-icon> Train
                    </span>
</div>
<div className="text-right">
<span className="text-zinc-700 text-xs cursor-not-allowed">-</span>
</div>
</div>

<div className="border-b border-zinc-800/50">

<div className="group grid md:grid-cols-[100px_100px_1fr_200px_180px_100px] gap-4 px-6 py-4 hover:bg-zinc-900/40 transition-colors items-center relative">

<div className="absolute left-[29px] top-10 bottom-0 w-px bg-zinc-800 md:block hidden z-0"></div>
<div className="flex flex-col relative z-10 bg-zinc-950 md:bg-transparent pr-2">
<span className="text-zinc-100 font-medium text-sm">Mar 10</span>
<span className="text-xs text-zinc-600">Day 2</span>
</div>
<div className="text-sm text-zinc-400 font-normal">9:00 AM</div>
<div className="space-y-1">
<div className="flex items-center gap-2">
<span className="px-1.5 py-0.5 rounded border border-zinc-800 text-[10px] font-medium text-zinc-500 bg-zinc-900">Tokyo</span>
<span className="text-zinc-200 font-medium text-sm">Meiji Jingu Shrine</span>
</div>
</div>
<div className="flex items-center gap-2 text-xs text-zinc-400">
<iconify-icon className="text-zinc-600 text-base" icon="solar:bed-linear"></iconify-icon>
                        Same Hotel
                    </div>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs text-zinc-400">
<iconify-icon icon="solar:train-linear"></iconify-icon> Metro
                        </span>
</div>
<div className="text-right">
<a className="inline-flex items-center justify-center w-8 h-8 rounded-full hover:bg-zinc-800 text-zinc-500 hover:text-zinc-200 transition-colors" href="https://maps.google.com/?q=Meiji+Jingu" target="_blank">
<iconify-icon icon="solar:map-arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="group grid md:grid-cols-[100px_100px_1fr_200px_180px_100px] gap-4 px-6 py-4 hover:bg-zinc-900/40 transition-colors items-center relative">
<div className="absolute left-[29px] top-0 bottom-0 w-px bg-zinc-800 md:block hidden"></div>
<div className="hidden md:block"></div> 
<div className="text-sm text-zinc-400 font-normal">11:00 AM</div>
<div className="space-y-1">
<div className="flex items-center gap-2">
<span className="text-zinc-200 font-medium text-sm">Takeshita Street</span>
</div>
</div>
<div className="hidden md:block"></div>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs text-zinc-400">
<iconify-icon icon="solar:walking-linear"></iconify-icon> Walk
                        </span>
</div>
<div className="text-right">
<a className="inline-flex items-center justify-center w-8 h-8 rounded-full hover:bg-zinc-800 text-zinc-500 hover:text-zinc-200 transition-colors" href="https://maps.google.com/?q=Takeshita+Street" target="_blank">
<iconify-icon icon="solar:map-arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="group grid md:grid-cols-[100px_100px_1fr_200px_180px_100px] gap-4 px-6 py-4 hover:bg-zinc-900/40 transition-colors items-center relative">
<div className="absolute left-[29px] top-0 bottom-0 w-px bg-zinc-800 md:block hidden"></div>
<div className="hidden md:block"></div>
<div className="text-sm text-zinc-400 font-normal">2:00 PM</div>
<div className="space-y-1">
<div className="flex items-center gap-2">
<span className="text-zinc-200 font-medium text-sm">Shibuya Crossing</span>
</div>
</div>
<div className="hidden md:block"></div>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs text-zinc-400">
<iconify-icon icon="solar:walking-linear"></iconify-icon> Walk
                        </span>
</div>
<div className="text-right">
<a className="inline-flex items-center justify-center w-8 h-8 rounded-full hover:bg-zinc-800 text-zinc-500 hover:text-zinc-200 transition-colors" href="https://maps.google.com/?q=Shibuya+Crossing" target="_blank">
<iconify-icon icon="solar:map-arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="group grid md:grid-cols-[100px_100px_1fr_200px_180px_100px] gap-4 px-6 py-4 hover:bg-zinc-900/40 transition-colors items-center relative">
<div className="absolute left-[29px] top-0 bottom-10 w-px bg-zinc-800 md:block hidden"></div>
<div className="hidden md:block"></div>
<div className="text-sm text-zinc-400 font-normal">5:00 PM</div>
<div className="space-y-1">
<div className="flex items-center gap-2">
<span className="text-zinc-200 font-medium text-sm">Shibuya Sky</span>
<span className="px-1.5 py-0.5 rounded-full border border-amber-900/30 bg-amber-950/20 text-[10px] font-medium text-amber-500">Optional</span>
</div>
</div>
<div className="hidden md:block"></div>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs text-zinc-400">
<iconify-icon icon="solar:walking-linear"></iconify-icon> Walk
                        </span>
</div>
<div className="text-right">
<a className="inline-flex items-center justify-center w-8 h-8 rounded-full hover:bg-zinc-800 text-zinc-500 hover:text-zinc-200 transition-colors" href="https://maps.google.com/?q=Shibuya+Sky" target="_blank">
<iconify-icon icon="solar:map-arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="group grid md:grid-cols-[100px_100px_1fr_200px_180px_100px] gap-4 px-6 py-5 border-b border-zinc-800/50 hover:bg-zinc-900/40 transition-colors items-center">
<div className="flex flex-col">
<span className="text-zinc-100 font-medium text-sm">Mar 11</span>
<span className="text-xs text-zinc-600">Day 3</span>
</div>
<div className="text-sm text-zinc-400 font-normal">9:00 AM</div>
<div className="space-y-1">
<div className="flex items-center gap-2">
<span className="px-1.5 py-0.5 rounded border border-zinc-800 text-[10px] font-medium text-zinc-500 bg-zinc-900">Osaka</span>
<span className="text-zinc-200 font-medium text-sm">Travel to Osaka</span>
</div>
</div>
<div className="flex items-center gap-2 text-xs text-zinc-400">
<iconify-icon className="text-zinc-600 text-base" icon="solar:bed-linear"></iconify-icon>
                    Toyoko Inn Namba
                </div>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs text-zinc-400">
<iconify-icon icon="solar:train-linear"></iconify-icon> Shinkansen
                    </span>
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs text-zinc-400">
<iconify-icon icon="solar:ticket-sale-linear"></iconify-icon> Rail Pass
                    </span>
</div>
<div className="text-right">
<a className="inline-flex items-center justify-center w-8 h-8 rounded-full hover:bg-zinc-800 text-zinc-500 hover:text-zinc-200 transition-colors" href="https://maps.google.com/?q=Osaka" target="_blank">
<iconify-icon icon="solar:map-arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="group grid md:grid-cols-[100px_100px_1fr_200px_180px_100px] gap-4 px-6 py-5 border-b border-zinc-800/50 hover:bg-zinc-900/40 transition-colors items-center">
<div className="flex flex-col">
<span className="text-zinc-100 font-medium text-sm">Mar 12</span>
<span className="text-xs text-zinc-600">Day 4</span>
</div>
<div className="text-sm text-zinc-400 font-normal">7:30 AM</div>
<div className="space-y-1">
<div className="flex items-center gap-2">
<span className="px-1.5 py-0.5 rounded border border-zinc-800 text-[10px] font-medium text-zinc-500 bg-zinc-900">Osaka</span>
<span className="text-zinc-200 font-medium text-sm">Universal Studios Japan</span>
</div>
</div>
<div className="flex items-center gap-2 text-xs text-zinc-400">
<iconify-icon className="text-zinc-600 text-base" icon="solar:bed-linear"></iconify-icon>
                    Same Hotel
                </div>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs text-zinc-400">
<iconify-icon icon="solar:train-linear"></iconify-icon> Train
                    </span>
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-emerald-950/20 border border-emerald-900/40 text-xs text-emerald-400">
<iconify-icon icon="solar:ticket-star-linear"></iconify-icon> USJ Pass
                    </span>
</div>
<div className="text-right">
<a className="inline-flex items-center justify-center w-8 h-8 rounded-full hover:bg-zinc-800 text-zinc-500 hover:text-zinc-200 transition-colors" href="https://maps.google.com/?q=Universal+Studios+Japan" target="_blank">
<iconify-icon icon="solar:map-arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="group grid md:grid-cols-[100px_100px_1fr_200px_180px_100px] gap-4 px-6 py-5 border-b border-zinc-800/50 hover:bg-zinc-900/40 transition-colors items-center">
<div className="flex flex-col">
<span className="text-zinc-100 font-medium text-sm">Mar 13</span>
<span className="text-xs text-zinc-600">Day 5</span>
</div>
<div className="text-sm text-zinc-400 font-normal">9:00 AM</div>
<div className="space-y-1">
<div className="flex items-center gap-2">
<span className="px-1.5 py-0.5 rounded border border-zinc-800 text-[10px] font-medium text-zinc-500 bg-zinc-900">Kyoto</span>
<span className="text-zinc-200 font-medium text-sm">Travel to Kyoto</span>
</div>
</div>
<div className="flex items-center gap-2 text-xs text-zinc-400">
<iconify-icon className="text-zinc-600 text-base" icon="solar:bed-linear"></iconify-icon>
                    Toyoko Inn Kyoto
                </div>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs text-zinc-400">
<iconify-icon icon="solar:train-linear"></iconify-icon> Train
                    </span>
</div>
<div className="text-right">
<a className="inline-flex items-center justify-center w-8 h-8 rounded-full hover:bg-zinc-800 text-zinc-500 hover:text-zinc-200 transition-colors" href="https://maps.google.com/?q=Kyoto" target="_blank">
<iconify-icon icon="solar:map-arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="group grid md:grid-cols-[100px_100px_1fr_200px_180px_100px] gap-4 px-6 py-5 border-b border-zinc-800/50 hover:bg-zinc-900/40 transition-colors items-center">
<div className="flex flex-col">
<span className="text-zinc-100 font-medium text-sm">Mar 14</span>
<span className="text-xs text-zinc-600">Day 6</span>
</div>
<div className="text-sm text-zinc-400 font-normal">8:00 AM</div>
<div className="space-y-1">
<div className="flex items-center gap-2">
<span className="px-1.5 py-0.5 rounded border border-zinc-800 text-[10px] font-medium text-zinc-500 bg-zinc-900">Kyoto</span>
<span className="text-zinc-200 font-medium text-sm">Fushimi Inari Taisha</span>
</div>
</div>
<div className="flex items-center gap-2 text-xs text-zinc-400">
<iconify-icon className="text-zinc-600 text-base" icon="solar:bed-linear"></iconify-icon>
                    Same Hotel
                </div>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs text-zinc-400">
<iconify-icon icon="solar:train-linear"></iconify-icon> Train
                    </span>
</div>
<div className="text-right">
<a className="inline-flex items-center justify-center w-8 h-8 rounded-full hover:bg-zinc-800 text-zinc-500 hover:text-zinc-200 transition-colors" href="https://maps.google.com/?q=Fushimi+Inari" target="_blank">
<iconify-icon icon="solar:map-arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="group grid md:grid-cols-[100px_100px_1fr_200px_180px_100px] gap-4 px-6 py-5 border-b border-zinc-800/50 hover:bg-zinc-900/40 transition-colors items-center">
<div className="flex flex-col">
<span className="text-zinc-100 font-medium text-sm">Mar 15</span>
<span className="text-xs text-zinc-600">Day 7</span>
</div>
<div className="text-sm text-zinc-400 font-normal">9:00 AM</div>
<div className="space-y-1">
<div className="flex items-center gap-2">
<span className="px-1.5 py-0.5 rounded border border-zinc-800 text-[10px] font-medium text-zinc-500 bg-zinc-900">Tokyo</span>
<span className="text-zinc-200 font-medium text-sm">Return to Tokyo</span>
</div>
</div>
<div className="flex items-center gap-2 text-xs text-zinc-400">
<iconify-icon className="text-zinc-600 text-base" icon="solar:bed-linear"></iconify-icon>
                    APA Hotel Ueno
                </div>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs text-zinc-400">
<iconify-icon icon="solar:train-linear"></iconify-icon> Shinkansen
                    </span>
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs text-zinc-400">
<iconify-icon icon="solar:ticket-sale-linear"></iconify-icon> Rail Pass
                    </span>
</div>
<div className="text-right">
<a className="inline-flex items-center justify-center w-8 h-8 rounded-full hover:bg-zinc-800 text-zinc-500 hover:text-zinc-200 transition-colors" href="https://maps.google.com/?q=Tokyo" target="_blank">
<iconify-icon icon="solar:map-arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="group grid md:grid-cols-[100px_100px_1fr_200px_180px_100px] gap-4 px-6 py-5 border-b border-zinc-800/50 hover:bg-zinc-900/40 transition-colors items-center">
<div className="flex flex-col">
<span className="text-zinc-100 font-medium text-sm">Mar 16</span>
<span className="text-xs text-zinc-600">Day 8</span>
</div>
<div className="text-sm text-zinc-400 font-normal">10:00 AM</div>
<div className="space-y-1">
<div className="flex items-center gap-2">
<span className="px-1.5 py-0.5 rounded border border-zinc-800 text-[10px] font-medium text-zinc-500 bg-zinc-900">Tokyo</span>
<span className="text-zinc-200 font-medium text-sm">Sensoji Temple</span>
</div>
</div>
<div className="flex items-center gap-2 text-xs text-zinc-400">
<iconify-icon className="text-zinc-600 text-base" icon="solar:bed-linear"></iconify-icon>
                    Same Hotel
                </div>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs text-zinc-400">
<iconify-icon icon="solar:train-linear"></iconify-icon> Metro
                    </span>
</div>
<div className="text-right">
<a className="inline-flex items-center justify-center w-8 h-8 rounded-full hover:bg-zinc-800 text-zinc-500 hover:text-zinc-200 transition-colors" href="https://maps.google.com/?q=Sensoji" target="_blank">
<iconify-icon icon="solar:map-arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="group grid md:grid-cols-[100px_100px_1fr_200px_180px_100px] gap-4 px-6 py-5 border-b border-zinc-800/50 hover:bg-zinc-900/40 transition-colors items-center">
<div className="flex flex-col">
<span className="text-zinc-100 font-medium text-sm">Mar 17</span>
<span className="text-xs text-zinc-600">Day 9</span>
</div>
<div className="text-sm text-zinc-400 font-normal">Free</div>
<div className="space-y-1">
<div className="flex items-center gap-2">
<span className="px-1.5 py-0.5 rounded border border-zinc-800 text-[10px] font-medium text-zinc-500 bg-zinc-900">Tokyo</span>
<span className="text-zinc-200 font-medium text-sm">Ginza Shopping District</span>
</div>
</div>
<div className="flex items-center gap-2 text-xs text-zinc-400">
<iconify-icon className="text-zinc-600 text-base" icon="solar:bed-linear"></iconify-icon>
                    Same Hotel
                </div>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs text-zinc-400">
<iconify-icon icon="solar:train-linear"></iconify-icon> Metro
                    </span>
</div>
<div className="text-right">
<a className="inline-flex items-center justify-center w-8 h-8 rounded-full hover:bg-zinc-800 text-zinc-500 hover:text-zinc-200 transition-colors" href="https://maps.google.com/?q=Ginza" target="_blank">
<iconify-icon icon="solar:map-arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="group grid md:grid-cols-[100px_100px_1fr_200px_180px_100px] gap-4 px-6 py-5 hover:bg-zinc-900/40 transition-colors items-center">
<div className="flex flex-col">
<span className="text-zinc-100 font-medium text-sm">Mar 18</span>
<span className="text-xs text-zinc-600">Day 10</span>
</div>
<div className="text-sm text-zinc-400 font-normal">Morning</div>
<div className="space-y-1">
<div className="flex items-center gap-2">
<span className="px-1.5 py-0.5 rounded border border-zinc-800 text-[10px] font-medium text-zinc-500 bg-zinc-900">Tokyo</span>
<span className="text-zinc-200 font-medium text-sm">Departure</span>
</div>
<p className="text-xs text-zinc-500">Train to airport followed by flight home.</p>
</div>
<div className="flex items-center gap-2 text-xs text-zinc-500 italic">
<iconify-icon className="text-zinc-600 text-base" icon="solar:home-linear"></iconify-icon>
                    Home Sweet Home
                </div>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs text-zinc-400">
<iconify-icon icon="solar:train-linear"></iconify-icon> Train
                    </span>
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs text-zinc-400">
<iconify-icon icon="solar:plane-linear"></iconify-icon> Flight
                    </span>
</div>
<div className="text-right">
<span className="text-zinc-700 text-xs cursor-not-allowed">-</span>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-zinc-900">
<div className="p-4 rounded-lg bg-zinc-900/30 border border-zinc-900">
<p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Status</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
<span className="text-sm text-zinc-200 font-medium">All Systems Go</span>
</div>
</div>
<div className="p-4 rounded-lg bg-zinc-900/30 border border-zinc-900">
<p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Total Distance</p>
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:route-linear"></iconify-icon>
<span className="text-sm text-zinc-200 font-medium">~1,100 km</span>
</div>
</div>
<div className="p-4 rounded-lg bg-zinc-900/30 border border-zinc-900">
<p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Hotels</p>
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:buildings-linear"></iconify-icon>
<span className="text-sm text-zinc-200 font-medium">4 Booked</span>
</div>
</div>
<div className="p-4 rounded-lg bg-zinc-900/30 border border-zinc-900">
<p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Completion</p>
<div className="w-full bg-zinc-800 rounded-full h-1.5 mt-2">
<div className="bg-zinc-100 h-1.5 rounded-full" style={{width: '100%'}}></div>
</div>
</div>
</div>
</div>

    </>
  );
}
