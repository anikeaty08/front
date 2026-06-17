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
      
<div className="flex flex-col md:flex-row gap-12">

<div className="relative w-72 sm:w-80 flex flex-col gap-6 bg-slate-100/80 border rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-2xl backdrop-blur-sm">

<div className="flex items-center gap-4">
<button className="h-8 w-8 rounded-full bg-white shadow flex items-center justify-center">
<svg className="lucide lucide-chevron-left h-5 w-5 stroke-gray-700" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<h2 className="flex-1 text-lg font-semibold text-gray-900 text-center pr-8">Tokyo adventure</h2>
</div>

<div className="flex gap-5 items-end">
<button className="flex flex-col items-center">
<span className="text-sm font-semibold text-gray-900">Day 1</span>
<span className="text-xs text-gray-500">May 15</span>
<span className="mt-2 block h-0.5 w-10 bg-teal-500 rounded"></span>
</button>
<button className="flex flex-col items-center">
<span className="text-sm font-medium text-gray-500">Day 2</span>
<span className="text-xs text-gray-400">May 16</span>
<span className="block h-0.5 w-10 bg-slate-300 rounded mt-2"></span>
</button>
<button className="flex flex-col items-center">
<span className="text-sm font-medium text-gray-500">Day 3</span>
<span className="text-xs text-gray-400">May 17</span>
<span className="block h-0.5 w-10 bg-slate-300 rounded mt-2"></span>
</button><svg className="lucide lucide-chevron-right ml-auto h-4 w-4 stroke-gray-500" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>

<div className="relative flex-1 overflow-y-auto pr-2">
<div className="absolute left-5 top-0 h-full border-l border-dashed border-gray-300"></div>
<div className="relative mb-4 pl-12">
<span className="absolute left-[17px] top-2 h-3 w-3 rounded-full bg-teal-500"></span>
<div className="flex items-center justify-between bg-white rounded-xl shadow px-4 py-3">
<div className="flex items-start gap-3">
<span className="h-9 w-9 rounded-full flex items-center justify-center bg-purple-100">
<svg className="lucide lucide-plane h-4 w-4 stroke-purple-600" data-lucide="plane" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>
</span>
<div className="text-sm">
<p className="font-semibold text-gray-800">Arrival</p>
<p className="text-xs text-gray-500">San Francisco → Narita</p>
</div>
</div>
<span className="text-xs font-medium text-gray-600">7:15 AM</span>
</div>
</div>
<div className="relative mb-4 pl-12">
<span className="absolute left-[17px] top-2 h-3 w-3 border-teal-500 border-2 rounded-full"></span>
<div className="flex items-center justify-between bg-white rounded-xl shadow px-4 py-3">
<div className="flex items-start gap-3">
<span className="h-9 w-9 rounded-full flex items-center justify-center bg-red-100">
<svg className="lucide lucide-hotel h-4 w-4 stroke-red-600" data-lucide="hotel" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 22v-6.57"></path><path d="M12 11h.01"></path><path d="M12 7h.01"></path><path d="M14 15.43V22"></path><path d="M15 16a5 5 0 0 0-6 0"></path><path d="M16 11h.01"></path><path d="M16 7h.01"></path><path d="M8 11h.01"></path><path d="M8 7h.01"></path><rect height="20" rx="2" width="16" x="4" y="2"></rect></svg>
</span>
<div className="text-sm">
<p className="font-semibold text-gray-800">Grand Palace Inn</p>
<p className="text-xs text-gray-500">Check-in</p>
</div>
</div>
<span className="text-xs font-medium text-gray-600">10:30 AM</span>
</div>
</div>
<div className="relative mb-4 pl-12">
<span className="absolute left-[17px] top-2 h-3 w-3 border-teal-500 border-2 rounded-full"></span>
<div className="flex items-center justify-between bg-white rounded-xl shadow px-4 py-3">
<div className="flex items-start gap-3">
<span className="h-9 w-9 rounded-full flex items-center justify-center bg-green-100">
<svg className="lucide lucide-map-pin h-4 w-4 stroke-green-600" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</span>
<div className="text-sm">
<p className="font-semibold text-gray-800">Senso-ji Temple</p>
<p className="text-xs text-gray-500">Cultural Tour</p>
</div>
</div>
<span className="text-xs font-medium text-gray-600">2:30 PM</span>
</div>
</div>
<div className="relative mb-4 pl-12">
<span className="absolute left-[17px] top-2 h-3 w-3 border-teal-500 border-2 rounded-full ml-0"></span>
<div className="flex items-center justify-between bg-white rounded-xl shadow px-4 py-3">
<div className="flex items-start gap-3">
<span className="h-9 w-9 rounded-full flex items-center justify-center bg-orange-100">
<svg className="lucide lucide-utensils h-4 w-4 stroke-orange-600" data-lucide="utensils" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>
</span>
<div className="text-sm">
<p className="font-semibold text-gray-800">Ramen Street</p>
<p className="text-xs text-gray-500">Dinner</p>
</div>
</div>
<span className="text-xs font-medium text-gray-600">7:30 PM</span>
</div>
</div>
<div className="relative pl-12">
<span className="absolute left-[17px] top-2 h-3 w-3 border-teal-500 border-2 rounded-full"></span>
<div className="flex items-center justify-between bg-white rounded-xl shadow px-4 py-3">
<div className="flex gap-3 items-start">
<span className="h-9 w-9 rounded-full flex items-center justify-center bg-indigo-100">
<svg className="lucide lucide-camera h-4 w-4 stroke-indigo-600" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg>
</span>
<div className="text-sm">
<p className="font-semibold text-gray-800">Shibuya Crossing</p>
<p className="text-xs text-gray-500">Night Photography</p>
</div>
</div>
<span className="text-xs font-medium text-gray-600">9:45 PM</span>
</div>
</div>
</div>
</div><div className="relative w-72 sm:w-80 flex flex-col gap-6 bg-slate-100/70 border rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-2xl backdrop-blur-sm">

<div className="flex items-center justify-between">
<img alt="" className="h-9 w-9 object-cover rounded-full" src="https://images.unsplash.com/photo-1713733742914-13a687d26bc9?w=1080&amp;q=80"/>
<button className="relative h-9 w-9 rounded-full bg-white shadow flex items-center justify-center">
<svg className="lucide lucide-bell h-5 w-5 stroke-gray-700" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</button>
</div>

<h1 className="leading-snug text-3xl font-semibold text-gray-900 tracking-tight">Explore amazing places</h1>

<label className="flex items-center bg-slate-300 border rounded-full pt-3 pr-3 pb-3 pl-4">
<input className="flex-1 bg-transparent placeholder-gray-500 text-sm focus:outline-none" placeholder="City, destination..." type="search"/>
<svg className="lucide lucide-search h-5 w-5 stroke-gray-600" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</label>

<div className="flex flex-col gap-3">
<h2 className="text-base font-semibold text-gray-900">Trending</h2>
<div className="flex gap-3 overflow-x-auto pb-1">
<button className="shrink-0 flex items-center gap-2 bg-white rounded-xl shadow px-3 py-2">
<img alt="" className="h-7 w-7 object-cover rounded-lg" src="https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1080&amp;q=80"/>
<span className="text-sm font-medium text-gray-800">Islands</span>
</button>
<button className="shrink-0 flex items-center gap-2 bg-white rounded-xl shadow px-3 py-2">
<img alt="" className="h-7 w-7 object-cover rounded-lg" src="https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1080&amp;q=80"/>
<span className="text-sm font-medium text-gray-800">Cities</span>
</button>
<button className="shrink-0 flex items-center justify-center bg-white rounded-xl shadow w-10 h-10">
<svg className="lucide lucide-more-horizontal h-5 w-5 stroke-gray-700" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
</div>

<div className="flex items-center gap-6">
<button className="relative pb-1 text-sm font-semibold text-gray-900 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-teal-500">Planned</button>
<button className="text-sm font-medium text-gray-500">History</button>
</div>

<div className="flex gap-4 overflow-x-auto pb-1">
<div className="shrink-0 w-40 bg-white rounded-2xl shadow">
<img alt="" className="h-24 w-full object-cover rounded-t-2xl" src="https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=1080&amp;q=80"/>
<div className="p-3 flex flex-col gap-1">
<p className="text-sm font-semibold text-gray-900">Tokyo</p>
<div className="flex items-center justify-between">
<span className="text-xs text-gray-500">May 15</span>
<svg className="lucide lucide-chevron-right h-4 w-4 stroke-gray-500" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</div>
</div>
<div className="shrink-0 w-40 bg-white rounded-2xl shadow">
<img alt="" className="h-24 w-full object-cover rounded-t-2xl" src="https://images.unsplash.com/photo-1504218727796-db522606b16f?w=1080&amp;q=80"/>
<div className="p-3 flex flex-col gap-1">
<p className="text-sm font-semibold text-gray-900">Switzerland</p>
<div className="flex items-center justify-between">
<span className="text-xs text-gray-500">June 22</span>
<svg className="lucide lucide-chevron-right h-4 w-4 stroke-gray-500" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</div>
</div>
</div>

<nav className="flex items-center justify-between bg-white/70 backdrop-blur rounded-full py-3 px-6 shadow mt-auto">
<button className="flex flex-col items-center gap-1">
<span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-500">
<svg className="lucide lucide-home h-4 w-4 stroke-white" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
</span>
</button>
<button className=""><svg className="lucide lucide-map-pinned lucide-grid-3x3 stroke-gray-400 w-[24px] h-[24px]" data-lucide="map-pinned" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(0, 0, 0)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"></path><circle cx="12" cy="8" r="2"></circle><path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"></path></svg></button>
<button className=""><svg className="lucide lucide-heart lucide-user stroke-gray-400 w-[24px] h-[24px]" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(0, 0, 0)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg></button>
<button className=""><svg className="lucide lucide-chart-no-axes-column-increasing lucide-chart-no-axes-combined lucide-chart-column-increasing lucide-bar-chart-2 stroke-gray-400 w-[24px] h-[24px]" data-lucide="chart-no-axes-column-increasing" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(0, 0, 0)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="20" y2="10"></line><line x1="18" x2="18" y1="20" y2="4"></line><line x1="6" x2="6" y1="20" y2="16"></line></svg></button>
</nav>
</div>

</div>


    </>
  );
}
