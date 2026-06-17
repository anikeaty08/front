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
      

<aside className="w-20 bg-white rounded-[40px] flex flex-col items-center py-8 justify-between shadow-sm flex-shrink-0 hidden md:flex">
<div className="flex flex-col items-center gap-8 w-full">

<div className="text-gray-900">
<i className="w-8 h-8 stroke-[2.5]" data-lucide="asterisk"></i>
</div>

<nav className="flex flex-col gap-6 w-full px-3">

<button className="w-14 h-14 bg-[#2a2a2e] rounded-2xl flex items-center justify-center text-white shadow-lg relative group">
<div className="absolute inset-0 rounded-2xl border border-white/20"></div>
<i className="w-6 h-6" data-lucide="layout-grid"></i>
</button>
<button className="w-14 h-14 hover:bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400 transition-colors">
<i className="w-6 h-6" data-lucide="line-chart"></i>
</button>
<button className="w-14 h-14 hover:bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400 transition-colors">
<i className="w-6 h-6" data-lucide="shopping-cart"></i>
</button>
<button className="w-14 h-14 hover:bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400 transition-colors">
<i className="w-6 h-6" data-lucide="store"></i>
</button>
<button className="w-14 h-14 hover:bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400 transition-colors">
<i className="w-6 h-6" data-lucide="users"></i>
</button>
<button className="w-14 h-14 hover:bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400 transition-colors">
<i className="w-6 h-6" data-lucide="shopping-bag"></i>
</button>
</nav>
</div>
<div className="flex flex-col items-center gap-6">
<button className="text-gray-400 hover:text-gray-600"><i className="w-6 h-6" data-lucide="percent"></i></button>
<button className="text-gray-400 hover:text-gray-600"><i className="w-6 h-6" data-lucide="bell"></i></button>
<img alt="User" className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm mt-2" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
</aside>

<main className="flex-1 grid grid-cols-1 lg:grid-cols-4 grid-rows-[auto_auto_auto] lg:grid-rows-[2fr_1fr_1.5fr] gap-4 lg:gap-5 overflow-y-auto pb-4">

<div className="col-span-1 lg:col-span-3 bg-[#1c1c1e] rounded-[32px] p-8 relative overflow-hidden flex flex-col">
<div className="flex justify-between items-start z-10">
<h2 className="text-white text-3xl font-normal tracking-tight">Sales Funnel</h2>
<button className="text-gray-500 hover:text-white"><i className="w-6 h-6" data-lucide="more-horizontal"></i></button>
</div>

<div className="grid grid-cols-4 mt-12 z-20 relative">

<div className="flex flex-col gap-2">
<span className="text-gray-400 text-sm font-medium">Purchase</span>
<span className="text-white text-3xl font-medium tracking-tight">354</span>
</div>

<div className="relative">

<div className="absolute -top-6 -left-6 bg-white w-[120%] p-6 rounded-2xl shadow-2xl z-30 transform scale-100 transition-transform">
<div className="flex flex-col gap-2 mb-10">
<span className="text-gray-600 text-sm font-medium">Add to Cart</span>
<span className="text-gray-900 text-4xl font-semibold tracking-tight">992</span>
</div>
<div className="flex justify-between items-center mt-4">
<span className="text-gray-500 text-sm font-medium">Insight</span>
<i className="w-4 h-4 text-gray-400" data-lucide="chevron-right"></i>
</div>
</div>
</div>

<div className="flex flex-col gap-2 pl-4">
<span className="text-gray-400 text-sm font-medium">Product View</span>
<span className="text-white text-3xl font-medium tracking-tight">5,7K</span>
</div>

<div className="flex flex-col gap-2 border-l border-white/10 pl-8">
<span className="text-gray-400 text-sm font-medium">Session</span>
<span className="text-white text-3xl font-medium tracking-tight">11,2K</span>
</div>
</div>

<div className="absolute inset-0 top-32 w-full h-full pointer-events-none">
<svg className="w-full h-full opacity-90" preserveaspectratio="none" viewbox="0 0 1000 300">
<defs>
<lineargradient id="funnelGradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: '#fca5a5', stopOpacity: '0.8'}}></stop> 
<stop offset="40%" style={{stopColor: '#c084fc', stopOpacity: '0.6'}}></stop> 
<stop offset="100%" style={{stopColor: '#6366f1', stopOpacity: '0.8'}}></stop> 
</lineargradient>
</defs>

<path d="M0,150 C200,150 250,130 400,100 L400,200 C250,170 200,150 0,150 Z" fill="url(#funnelGradient)" opacity="0.6"></path>
<path d="M350,100 C500,60 600,80 1000,80 L1000,220 C600,220 500,240 350,200 Z" fill="url(#funnelGradient)"></path>
</svg>
</div>
</div>

<div className="col-span-1 bg-[#1c1c1e] rounded-[32px] p-6 relative overflow-hidden flex flex-col justify-between">

<div className="absolute inset-0 bg-gradient-to-tr from-[#3f2b28] via-[#1c1c1e] to-[#1c1c1e] opacity-80"></div>
<h2 className="text-gray-300 text-lg font-normal relative z-10">Conversion</h2>
<div className="relative z-10 flex flex-col items-center mt-4">

<div className="relative w-48 h-24 overflow-hidden mb-4">
<svg className="w-full h-full" viewbox="0 0 200 100">

<path d="M20,100 A80,80 0 0,1 180,100" fill="none" stroke="#333" strokeLinecap="round" strokeWidth="24"></path>

<defs>
<lineargradient id="gaugeGradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: '#f87171'}}></stop>
<stop offset="100%" style={{stopColor: '#a855f7'}}></stop>
</lineargradient>
</defs>
<path d="M20,100 A80,80 0 0,1 120,38" fill="none" stroke="url(#gaugeGradient)" strokeLinecap="round" strokeWidth="24"></path>
</svg>
</div>
<div className="text-center -mt-8">
<span className="text-white text-3xl font-medium block">55,20%</span>
<span className="inline-flex items-center gap-1 bg-white text-green-700 text-xs font-bold px-2 py-0.5 rounded-full mt-2">
<i className="w-2 h-2 fill-current" data-lucide="triangle"></i> 12%
                     </span>
</div>
</div>
<div className="relative z-10 mt-6">
<p className="text-gray-200 text-base font-normal">Congratulations!</p>
<p className="text-gray-500 text-xs mt-1">You've just hit a new record</p>
</div>
</div>


<div className="bg-[#e6e5e3] rounded-[32px] p-6 flex flex-col justify-between min-h-[160px]">
<span className="text-gray-600 text-sm font-medium">Available to payout</span>
<div className="mt-2">
<h3 className="text-[#1a1a1a] text-3xl font-medium tracking-tight">$271,632.09</h3>
<div className="flex items-center gap-3 mt-3">
<span className="inline-flex items-center gap-1 bg-white text-green-700 text-xs font-bold px-2 py-1 rounded-md shadow-sm">
<i className="w-2 h-2 fill-current" data-lucide="triangle"></i> 25,5%
                    </span>
<span className="text-gray-500 text-xs font-medium">+$15k Today</span>
</div>
</div>
</div>

<div className="bg-[#e6e5e3] rounded-[32px] p-6 flex flex-col justify-between min-h-[160px]">
<span className="text-gray-600 text-sm font-medium">Today Revenue</span>
<div className="mt-2">
<h3 className="text-[#1a1a1a] text-3xl font-medium tracking-tight">$2,635</h3>
<div className="flex items-center gap-3 mt-3">
<span className="inline-flex items-center gap-1 bg-white text-green-700 text-xs font-bold px-2 py-1 rounded-md shadow-sm">
<i className="w-2 h-2 fill-current" data-lucide="triangle"></i> 5,5%
                    </span>
<span className="text-gray-500 text-xs font-medium">+$1k Today</span>
</div>
</div>
</div>

<div className="bg-[#e6e5e3] rounded-[32px] p-6 flex flex-col justify-between min-h-[160px]">
<span className="text-gray-600 text-sm font-medium">Today Sessions</span>
<div className="mt-2">
<h3 className="text-[#1a1a1a] text-3xl font-medium tracking-tight">354</h3>
<div className="flex items-center gap-3 mt-3">
<span className="inline-flex items-center gap-1 bg-white text-red-600 text-xs font-bold px-2 py-1 rounded-md shadow-sm">
<i className="w-2 h-2 fill-current rotate-180" data-lucide="triangle"></i> 4%
                    </span>
<span className="text-gray-500 text-xs font-medium">-$931 Today</span>
</div>
</div>
</div>

<div className="col-span-1 bg-[#1c1c1e] rounded-[32px] p-6 relative flex flex-col">

<div className="absolute inset-0 bg-gradient-to-b from-[#1c1c1e] to-[#252530]"></div>
<div className="absolute bottom-0 left-0 right-0 h-32 bg-purple-900/20 blur-3xl"></div>
<h2 className="text-white text-lg font-normal mb-6 relative z-10">5 Top Products</h2>
<div className="relative z-10 bg-white/10 backdrop-blur-md rounded-2xl p-3 flex items-center gap-4 border border-white/5">
<div className="w-12 h-12 rounded-xl overflow-hidden bg-gray-500 shrink-0">
<img alt="Product" className="w-full h-full object-cover grayscale opacity-80 mix-blend-luminosity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex flex-col gap-1">
<span className="text-white text-xl font-normal tracking-tight">4.354 Sold</span>
<span className="inline-flex items-center gap-1 bg-white text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full w-fit">
<i className="w-1.5 h-1.5 fill-current" data-lucide="triangle"></i> 3,3%
                    </span>
</div>
</div>
<div className="mt-auto relative z-10 pt-6">
<a className="text-gray-400 text-sm hover:text-white transition-colors" href="#">See All Products</a>
</div>
</div>


<div className="bg-[#e6e5e3] rounded-[32px] p-6 flex flex-col relative overflow-hidden">
<h2 className="text-[#1a1a1a] text-lg font-normal mb-4">Device</h2>
<div className="flex items-center h-full">

<div className="relative w-24 h-24 shrink-0">
<svg className="w-full h-full -rotate-90" viewbox="0 0 36 36">
<circle cx="18" cy="18" fill="none" r="15.9155" stroke="#d1d1d1" strokeWidth="8"></circle> 
<circle className="origin-center" cx="18" cy="18" fill="none" r="15.9155" stroke="#6366f1" stroke-dasharray="60, 100" strokeWidth="8"></circle> 
<circle className="origin-center" cx="18" cy="18" fill="none" r="15.9155" stroke="#ea580c" stroke-dasharray="15, 100" stroke-dashoffset="-60" strokeWidth="8"></circle> 
<circle className="origin-center" cx="18" cy="18" fill="none" r="15.9155" stroke="#000000" stroke-dasharray="25, 100" stroke-dashoffset="-75" strokeWidth="8"></circle> 
<circle cx="18" cy="18" fill="#e6e5e3" r="9"></circle> 
</svg>
</div>

<div className="flex flex-col gap-3 ml-6 w-full">
<div className="flex items-center justify-between w-full">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-indigo-500"></span>
<span className="text-gray-500 text-xs font-medium">Mobile</span>
</div>
<span className="text-gray-900 text-xs font-medium">354</span>
</div>
<div className="flex items-center justify-between w-full">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-black"></span>
<span className="text-gray-500 text-xs font-medium">Dekstop</span>
</div>
<span className="text-gray-900 text-xs font-medium">211</span>
</div>
<div className="flex items-center justify-between w-full">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-orange-400"></span>
<span className="text-gray-500 text-xs font-medium">Other</span>
</div>
<span className="text-gray-900 text-xs font-medium">79</span>
</div>
</div>
</div>
</div>

<div className="col-span-1 lg:col-span-2 bg-[#e6e5e3] rounded-[32px] p-6 relative overflow-hidden group">
<div className="flex justify-between items-start relative z-10">
<h2 className="text-[#1a1a1a] text-lg font-normal">Traffic Channels</h2>
<div className="flex gap-2">
<button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-400">
<i className="w-4 h-4" data-lucide="search"></i>
</button>
<button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-400">
<i className="w-4 h-4 rotate-90" data-lucide="code"></i>
</button>
</div>
</div>

<div className="absolute inset-0 top-12 opacity-40">
<svg className="w-full h-full" viewbox="0 0 800 400">
<pattern height="20" id="dotPattern" patternunits="userSpaceOnUse" width="20" x="0" y="0">
<circle cx="2" cy="2" fill="#a3a3a3" r="1.5"></circle>
</pattern>

<path d="M150,100 Q200,80 250,120 T350,100 T550,120 T650,80 T750,120 V300 H50 V150 Z" fill="url(#dotPattern)"></path>
</svg>
</div>

<div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">
<div className="bg-black text-white px-3 py-2 rounded-xl shadow-xl flex flex-col items-center min-w-[100px]">
<span className="text-[10px] text-gray-400 font-medium mb-0.5">United States</span>
<span className="text-sm font-semibold">60.10%</span>
</div>
<div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-black"></div>
<div className="w-3 h-3 bg-purple-500 rounded-full mt-1 ring-4 ring-purple-500/30 animate-pulse"></div>
</div>
</div>

<div className="bg-[#e6e5e3] rounded-[32px] p-6 flex flex-col justify-between">
<h2 className="text-[#1a1a1a] text-lg font-normal">Sales Team</h2>
<div className="flex items-center -space-x-3 mt-4">
<img alt="Person 1" className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<img alt="Person 2" className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<img alt="Person 3" className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div className="w-12 h-12 rounded-full border-2 border-white bg-black text-white flex items-center justify-center text-xs font-semibold z-10">
                    +20
                </div>
</div>
</div>
</main>


    </>
  );
}
