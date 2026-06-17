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



lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

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
      <div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c592e5b5-3682-4c4f-85ce-669f4c0f9625_3840w.jpg")'}}></div>
<div className="min-h-full flex flex-col lg:space-y-0 lg:flex-row lg:gap-8 pt-8 pr-4 pb-8 pl-4 space-y-8 items-center justify-center">

<div className="relative w-[393px] h-[852px] overflow-hidden animate-slide text-white bg-gray-900 rounded-[44px] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" style={{animationDelay: '.2s'}}>

<div className="absolute top-[14px] left-1/2 -translate-x-1/2 w-[126px] h-[30px] bg-black rounded-full z-50"></div>
<img alt="" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6e29bd08-f172-468a-9f34-baf96386658d_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-purple-900/40 to-blue-900/30" style={{top: '-40px'}}></div>

<div className="absolute bottom-0 left-0 w-full flex flex-col pt-8 pr-8 pb-8 pl-8">

<div className="mb-8">
<h1 className="text-3xl tracking-tight leading-tight mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent font-sans font-semibold" style={{}}>Explore the World Your Way</h1>
<p className="leading-relaxed text-base text-white/90">Discover hidden gems, plan perfect trips, and create memories that last a lifetime with Wanderlust.</p>
</div><div className="flex items-center gap-2 mb-8">
<div className="w-2 h-2 rounded-full bg-white/20"></div>
<div className="w-2 h-2 rounded-full bg-white/20"></div>
<div className="w-8 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500"></div>
</div>
<div className="flex items-center justify-between">
<button className="text-white/60 font-medium hover:text-white transition font-sans">Skip</button>
<button className="flex gap-2 hover:from-blue-600 hover:to-purple-700 transition shadow-blue-500/25 font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl pt-4 pr-8 pb-4 pl-8 shadow-lg items-center font-sans">
          Get Started
          <svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>

<div className="w-[134px] h-[5px] bg-white/40 rounded-full mx-auto mt-6"></div>
</div><div className="absolute top-0 left-0 w-full h-16"></div>

</div>

<div className="relative w-[393px] h-[852px] overflow-hidden flex flex-col animate-slide shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] bg-gray-900 border-gray-800 border rounded-[44px]" style={{animationDelay: '.4s'}}>

<div className="absolute top-[14px] left-1/2 -translate-x-1/2 w-[126px] h-[30px] bg-black rounded-full z-50"></div>

<div className="h-16 flex items-end pb-2 px-8">
<div className="w-full flex items-center justify-between text-sm font-semibold text-white">
<span className="font-sans">9:41</span>
<div className="flex items-center gap-1">
<svg className="lucide lucide-signal w-4 h-4" data-lucide="signal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg className="lucide lucide-wifi w-4 h-4" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<svg className="lucide lucide-battery w-6 h-3" data-lucide="battery" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M 22 14 L 22 10"></path><rect height="12" rx="2" width="16" x="2" y="6"></rect></svg>
</div>
</div>
</div>
<div className="flex flex-col gap-6 flex-1 overflow-hidden pr-8 pb-8 pl-8">

<div className="flex items-center justify-between">
<div className="">
<p className="text-sm text-gray-400 font-sans">Good morning</p>
<h2 className="text-2xl tracking-tight text-white font-sans font-semibold" style={{}}>Alex Johnson</h2>
</div>
<div className="flex gap-3">
<button className="w-10 h-10 rounded-xl bg-gray-800/80 border border-gray-700/50 flex items-center justify-center hover:bg-gray-700 transition">
<svg className="lucide lucide-bell w-5 h-5 text-gray-300" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</button>
<div className="w-10 h-10 rounded-xl ring-2 ring-gradient-to-r ring-blue-400 overflow-hidden">
<img alt="" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/693a62b0-4d0b-42c8-9af1-ed66d6c4180b_320w.jpg" style={{}}/>
</div>
</div>
</div>

<div className="relative">
<input className="w-full h-14 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-base text-white bg-gray-800/60 border-gray-700/50 border rounded-2xl pr-12 pl-12 backdrop-blur-sm" placeholder="Where do you want to go?" type="text"/>
<svg className="lucide lucide-search absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<button className="absolute right-4 top-1/2 -translate-y-1/2 hover:text-blue-400 transition">
<svg className="lucide lucide-sliders-horizontal w-5 h-5 text-cyan-400" data-lucide="sliders-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="21" x2="14" y1="4" y2="4"></line><line x1="10" x2="3" y1="4" y2="4"></line><line x1="21" x2="12" y1="12" y2="12"></line><line x1="8" x2="3" y1="12" y2="12"></line><line x1="21" x2="16" y1="20" y2="20"></line><line x1="12" x2="3" y1="20" y2="20"></line><line x1="14" x2="14" y1="2" y2="6"></line><line x1="8" x2="8" y1="10" y2="14"></line><line x1="16" x2="16" y1="18" y2="22"></line></svg>
</button>
</div>

<div className="flex overflow-x-auto gap-3 hide-scrollbar -mx-2 px-2">
<button className="flex-shrink-0 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium shadow-lg shadow-blue-500/25 font-sans">Popular</button>
<button className="flex-shrink-0 px-5 py-3 rounded-xl bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 text-gray-300 text-sm font-medium hover:bg-gray-700 hover:text-white transition font-sans">Beach</button>
<button className="flex-shrink-0 px-5 py-3 rounded-xl bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 text-gray-300 text-sm font-medium hover:bg-gray-700 hover:text-white transition font-sans">Mountain</button>
<button className="flex-shrink-0 px-5 py-3 rounded-xl bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 text-gray-300 text-sm font-medium hover:bg-gray-700 hover:text-white transition font-sans">City</button>
</div>

<div className="flex items-center justify-between">
<h3 className="text-xl font-bold tracking-tight text-white font-sans">Trending Destinations</h3>
<button className="text-sm text-blue-400 font-medium hover:text-blue-300 transition font-sans">See all</button>
</div>

<div className="flex-1 overflow-y-auto hide-scrollbar">
<div className="pb-6 space-y-5">

<div className="relative rounded-3xl overflow-hidden bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 shadow-xl hover:shadow-2xl hover:bg-gray-800/80 transition group">
<img alt="" className="w-full h-48 object-cover group-hover:scale-105 transition duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b5cf09cd-cb67-413d-aa02-1b08cd4cf7fb_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
<div className="absolute top-4 left-4 flex items-center gap-1 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium text-white border border-white/10 font-sans">
<svg className="lucide lucide-star w-4 h-4 text-yellow-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> 4.8
            </div>
<button className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition">
<svg className="lucide lucide-heart w-5 h-5 text-white" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
<div className="absolute bottom-0 left-0 right-0 p-5">
<div className="flex items-center gap-2 text-sm text-gray-300 mb-2">
<svg className="lucide lucide-map-pin w-4 h-4 text-cyan-400" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="font-sans">Santorini, Greece</span>
</div>
<h4 className="text-lg font-bold tracking-tight text-white mb-1 font-sans">Oia Village</h4>
<p className="text-base font-semibold text-blue-400 font-sans">$899 <span className="text-sm font-normal text-gray-400 font-sans">per person</span></p>
</div>
</div>

<div className="relative rounded-3xl overflow-hidden bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 shadow-xl hover:shadow-2xl hover:bg-gray-800/80 transition group">
<img alt="" className="w-full h-48 object-cover group-hover:scale-105 transition duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/24c7c604-ba48-4e9c-b415-dbbe91d1337d_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
<div className="absolute top-4 left-4 flex items-center gap-1 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium text-white border border-white/10 font-sans">
<svg className="lucide lucide-star w-4 h-4 text-yellow-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> 4.9
            </div>
<button className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition">
<svg className="lucide lucide-heart w-5 h-5 text-pink-400 fill-current" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
<div className="absolute bottom-0 left-0 right-0 p-5">
<div className="flex items-center gap-2 text-sm text-gray-300 mb-2">
<svg className="lucide lucide-map-pin w-4 h-4 text-cyan-400" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="font-sans">Kyoto, Japan</span>
</div>
<h4 className="text-lg font-bold tracking-tight text-white mb-1 font-sans">Bamboo Forest</h4>
<p className="text-base font-semibold text-blue-400 font-sans">$1,299 <span className="text-sm font-normal text-gray-400 font-sans">per person</span></p>
</div>
</div>
</div><div className="pb-6 space-y-5">

<div className="relative rounded-3xl overflow-hidden bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 shadow-xl hover:shadow-2xl hover:bg-gray-800/80 transition group">
<img alt="" className="w-full h-48 object-cover group-hover:scale-105 transition duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3fd5ecc0-70c1-481e-bcca-44739e6af626_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>
<div className="absolute top-4 left-4 flex items-center gap-1 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium text-white border border-white/10 font-sans">
<svg className="lucide lucide-star w-4 h-4 text-yellow-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> 4.8
            </div>
<button className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition">
<svg className="lucide lucide-heart w-5 h-5 text-white" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
<div className="absolute bottom-0 left-0 right-0 pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center gap-2 text-sm text-gray-300 mb-2">
<svg className="lucide lucide-map-pin w-4 h-4 text-cyan-400" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="font-sans">Santorini, Greece</span>
</div>
<h4 className="text-lg font-bold tracking-tight text-white mb-1 font-sans">Oia Village</h4>
<p className="text-base font-semibold text-blue-400 font-sans">$899 <span className="text-sm font-normal text-gray-400 font-sans">per person</span></p>
</div>
</div>

<div className="relative rounded-3xl overflow-hidden bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 shadow-xl hover:shadow-2xl hover:bg-gray-800/80 transition group">
<img alt="" className="w-full h-48 object-cover group-hover:scale-105 transition duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/acc53465-8174-4822-b041-b15c04dd35bc_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
<div className="absolute top-4 left-4 flex items-center gap-1 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium text-white border border-white/10 font-sans">
<svg className="lucide lucide-star w-4 h-4 text-yellow-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> 4.9
            </div>
<button className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition">
<svg className="lucide lucide-heart w-5 h-5 text-pink-400 fill-current" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
<div className="absolute bottom-0 left-0 right-0 p-5">
<div className="flex items-center gap-2 text-sm text-gray-300 mb-2">
<svg className="lucide lucide-map-pin w-4 h-4 text-cyan-400" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="font-sans">Kyoto, Japan</span>
</div>
<h4 className="text-lg font-bold tracking-tight text-white mb-1 font-sans">Bamboo Forest</h4>
<p className="text-base font-semibold text-blue-400 font-sans">$1,299 <span className="text-sm font-normal text-gray-400 font-sans">per person</span></p>
</div>
</div>
</div>
</div>
</div>

<div className="w-[134px] h-[5px] bg-white/30 rounded-full mx-auto mb-2"></div>
</div>

<div className="relative w-[393px] h-[852px] overflow-hidden flex flex-col animate-slide bg-gray-900 border-gray-800 border rounded-[44px] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" style={{animationDelay: '.6s'}}>

<div className="absolute top-[14px] left-1/2 -translate-x-1/2 w-[126px] h-[30px] bg-black rounded-full z-50"></div>

<div className="h-16 flex items-end pb-2 px-8">
<div className="w-full flex items-center justify-between text-sm font-semibold text-white">
<span className="font-sans">9:41</span>
<div className="flex items-center gap-1">
<svg className="lucide lucide-signal w-4 h-4" data-lucide="signal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg className="lucide lucide-wifi w-4 h-4" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<svg className="lucide lucide-battery w-6 h-3" data-lucide="battery" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M 22 14 L 22 10"></path><rect height="12" rx="2" width="16" x="2" y="6"></rect></svg>
</div>
</div>
</div>
<div className="flex-1 overflow-y-auto hide-scrollbar">

<div className="px-8 flex items-center justify-between mb-4">
<button className="w-11 h-11 rounded-xl bg-gray-800/80 border border-gray-700/50 flex items-center justify-center hover:bg-gray-700 transition">
<svg className="lucide lucide-arrow-left w-5 h-5 text-gray-300" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<h2 className="text-lg font-semibold text-white font-sans">Destination</h2>
<button className="w-11 h-11 rounded-xl bg-gray-800/80 border border-gray-700/50 flex items-center justify-center hover:bg-gray-700 transition">
<svg className="lucide lucide-share w-5 h-5 text-gray-300" data-lucide="share" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v13"></path><path d="m16 6-4-4-4 4"></path><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path></svg>
</button>
</div>

<div className="overflow-hidden border-gray-700/50 border rounded-3xl mr-8 mb-6 ml-8">
<img alt="" className="w-full h-64 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4c4a5b30-8f7a-42dd-9bd3-b841442b3830_800w.jpg"/>
<div className="absolute inset-0 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] bg-gradient-to-t from-gray-900/40 via-transparent to-transparent rounded-3xl"></div>
</div>

<div className="px-8">
<div className="flex items-start justify-between mb-4">
<div className="flex-1">
<div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
<svg className="lucide lucide-map-pin w-4 h-4 text-cyan-400" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="font-sans">Santorini, Greece</span>
</div>
<h1 className="text-2xl tracking-tight text-white mb-2 font-sans font-semibold" style={{}}>Oia Village Sunset Tour</h1>
<div className="flex items-center gap-4">
<span className="flex items-center gap-1 text-sm font-medium text-gray-300 font-sans">
<svg className="lucide lucide-star w-4 h-4 text-yellow-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> 4.8 (2,847)
              </span>
<span className="text-2xl text-blue-400 font-sans font-semibold" style={{}}>$899</span>
</div>
</div>
<button className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center hover:bg-purple-500/30 transition">
<svg className="lucide lucide-heart w-6 h-6 text-pink-400 fill-current" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>

<div className="flex items-center gap-3 p-4 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl mb-6">
<div className="w-12 h-12 rounded-xl ring-2 ring-purple-400/50 overflow-hidden">
<img alt="" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/10b82f02-0664-4276-be7d-8b63b0623907_320w.jpg"/>
</div>
<div className="flex-1">
<p className="font-semibold text-white font-sans">Hosted by Maria</p>
<p className="text-sm text-gray-400 font-sans">Local expert • 5 years hosting</p>
</div>
<button className="px-4 py-2 bg-gray-700/60 border border-gray-600/50 rounded-xl text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition font-sans">
            Message
          </button>
</div>

<div className="mb-6">
<h3 className="text-lg font-bold text-white mb-4 font-sans">What's Included</h3>
<div className="grid grid-cols-3 gap-3">
<div className="flex flex-col items-center p-4 bg-purple-500/10 border border-purple-500/20 rounded-2xl hover:bg-purple-500/20 transition">
<svg className="lucide lucide-camera w-6 h-6 text-blue-400 mb-2" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg>
<span className="text-xs font-medium text-purple-300 font-sans">Photography</span>
</div>
<div className="flex flex-col items-center p-4 bg-gray-500/10 border border-gray-500/20 rounded-2xl hover:bg-gray-500/20 transition">
<svg className="lucide lucide-utensils w-6 h-6 text-emerald-400 mb-2" data-lucide="utensils" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>
<span className="text-xs font-medium text-gray-300 font-sans">Local Food</span>
</div>
<div className="flex flex-col items-center p-4 bg-purple-500/10 border border-purple-500/20 rounded-2xl hover:bg-purple-500/20 transition">
<svg className="lucide lucide-users w-6 h-6 text-purple-400 mb-2" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="text-xs font-medium text-purple-300 font-sans">Small Group</span>
</div>
</div>
</div>

<div className="mb-8">
<h3 className="text-lg font-bold text-white mb-3 font-sans">About this experience</h3>
<p className="text-base text-gray-300 leading-relaxed font-sans">
            Experience the world-famous Santorini sunset from the picturesque village of Oia. This 4-hour tour includes guided exploration of the narrow streets, traditional architecture, and the best sunset viewing spots.
          </p>
</div>
</div>
</div>

<div className="bg-gray-900/80 border-gray-800 border-t pt-6 pr-8 pb-6 pl-8 backdrop-blur-sm">
<div className="flex items-center gap-4">
<button className="w-12 h-12 rounded-xl bg-gray-800/80 border border-gray-700/50 flex items-center justify-center hover:bg-gray-700 transition">
<svg className="lucide lucide-message-circle w-5 h-5 text-gray-300" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</button>
<button className="flex-1 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold flex items-center justify-center gap-2 hover:from-blue-600 hover:to-purple-700 transition shadow-lg shadow-blue-500/25 font-sans">
          Book Experience
          <svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="w-[134px] h-[5px] bg-white/30 rounded-full mx-auto mb-2"></div>
</div>
</div>




<style>
.hide-scrollbar::-webkit-scrollbar { display:none }
.hide-scrollbar { scrollbar-width:none; -ms-overflow-style:none }
</style>

    </>
  );
}
