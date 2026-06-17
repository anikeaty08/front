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
darkMode: 'class',
theme: {
extend: {
colors: {
canvas: '#0a0a0a',
card: '#111111',
accent: '#3b82f6'
}
}
}
}

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
      
<div className="h-screen w-full flex">

<aside className="w-14 bg-card dark:bg-card backdrop-blur-md border-r border-white/5 dark:border-white/5 flex flex-col items-center py-4" style={{opacity: '0', animation: 'fadeInLeft 0.6s ease-out 0.2s forwards'}}>
<img alt="" className="w-8 h-8 rounded-full mb-6 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1ddf69f0-d3d2-4775-bbe6-cfea18262abb_320w.jpg"/>
<button className="group mb-4 hover:scale-110 transition-transform duration-200">
<svg className="lucide lucide-home stroke-white/60 dark:stroke-white/60 group-hover:stroke-accent dark:group-hover:stroke-accent transition-colors duration-200" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
</button>
<button className="group mb-4 hover:scale-110 transition-transform duration-200">
<svg className="lucide lucide-bookmark stroke-white/60 dark:stroke-white/60 group-hover:stroke-accent dark:group-hover:stroke-accent transition-colors duration-200" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</button>
<button className="group hover:scale-110 transition-transform duration-200">
<svg className="lucide lucide-user stroke-white/60 dark:stroke-white/60 group-hover:stroke-accent dark:group-hover:stroke-accent transition-colors duration-200" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</button>
</aside>

<section className="w-1/3 max-w-sm flex flex-col border-r border-white/5 dark:border-white/5" style={{opacity: '0', animation: 'fadeInUp 0.6s ease-out 0.3s forwards'}}>

<div className="pt-4 pr-4 pb-4 pl-4">
<div className="relative rounded-3xl overflow-hidden bg-card dark:bg-card hover:bg-white/5 dark:hover:bg-white/5 transition-colors duration-300">
<img alt="" className="w-full h-64 object-cover opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6bd66a5c-e532-4073-b36d-e9af6900f32f_800w.jpg"/>
<input className="absolute top-4 left-4 right-4 focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-accent placeholder-white/60 dark:placeholder-white/60 transition-all duration-200 text-sm text-neutral-950 dark:text-neutral-950 rounded-full pt-2 pr-4 pb-2 pl-4 backdrop-blur-md" placeholder="Discover neighborhoods" type="text"/>

<span className="absolute top-20 left-24 bg-card dark:bg-card px-2 py-1 text-xs rounded-full border border-white/10 dark:border-white/10">$1.8M</span>
<span className="absolute top-32 left-48 bg-card dark:bg-card px-2 py-1 text-xs rounded-full border border-white/10 dark:border-white/10">$2.1M</span>
</div>
</div>

<div className="flex-1 overflow-y-auto space-y-4 px-4 pb-4">

<article className="bg-card dark:bg-card rounded-2xl p-4 hover:bg-white/5 dark:hover:bg-white/5 transition-all duration-300 border border-white/5 dark:border-white/5" style={{opacity: '0', animation: 'fadeInUp 0.6s ease-out 0.4s forwards'}}>
<h3 className="font-semibold text-sm mb-1 flex items-start">
<svg className="lucide lucide-map-pin w-4 h-4 stroke-accent dark:stroke-accent mr-1.5 flex-shrink-0" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
            Austin, TX   <span className="font-semibold">Hyde Park</span>
</h3>
<p className="text-xs leading-relaxed mb-3 text-white/70 dark:text-white/70">Hyde Park offers historic charm with tree-lined boulevards and eclectic local businesses within walking distance.</p>
<div className="flex flex-wrap gap-2 text-[10px]">
<span className="px-2 py-1 bg-card dark:bg-card border border-accent/30 dark:border-accent/30 rounded-full hover:border-accent/50 dark:hover:border-accent/50 transition-colors duration-200">Artsy District</span>
<span className="px-2 py-1 bg-card dark:bg-card border border-accent/30 dark:border-accent/30 rounded-full hover:border-accent/50 dark:hover:border-accent/50 transition-colors duration-200">8 Avg. Schools</span>
<span className="px-2 py-1 bg-card dark:bg-card border border-accent/30 dark:border-accent/30 rounded-full hover:border-accent/50 dark:hover:border-accent/50 transition-colors duration-200">7 Safety</span>
<span className="px-2 py-1 bg-card dark:bg-card border border-accent/30 dark:border-accent/30 rounded-full hover:border-accent/50 dark:hover:border-accent/50 transition-colors duration-200">Great Cafes</span>
</div>
</article>

<article className="bg-card dark:bg-card rounded-2xl p-4 hover:bg-white/5 dark:hover:bg-white/5 transition-all duration-300 border border-white/5 dark:border-white/5" style={{opacity: '0', animation: 'fadeInUp 0.6s ease-out 0.5s forwards'}}>
<h3 className="font-semibold text-sm mb-1 flex items-start">
<svg className="lucide lucide-map-pin w-4 h-4 stroke-accent dark:stroke-accent mr-1.5 flex-shrink-0" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
            Austin, TX   <span className="font-semibold">Tarrytown</span>
</h3>
<p className="text-xs leading-relaxed mb-3 text-white/70 dark:text-white/70">An upscale lakeside community known for mature oak trees and stunning waterfront properties.</p>
<div className="flex flex-wrap gap-2 text-[10px]">
<span className="px-2 py-1 bg-card dark:bg-card border border-accent/30 dark:border-accent/30 rounded-full hover:border-accent/50 dark:hover:border-accent/50 transition-colors duration-200">Lake Access</span>
<span className="px-2 py-1 bg-card dark:bg-card border border-accent/30 dark:border-accent/30 rounded-full hover:border-accent/50 dark:hover:border-accent/50 transition-colors duration-200">9 Commute</span>
<span className="px-2 py-1 bg-card dark:bg-card border border-accent/30 dark:border-accent/30 rounded-full hover:border-accent/50 dark:hover:border-accent/50 transition-colors duration-200">8 Climate</span>
</div>
</article>
<article className="bg-card dark:bg-card rounded-2xl p-4 hover:bg-white/5 dark:hover:bg-white/5 transition-all duration-300 border border-white/5 dark:border-white/5" style={{opacity: '0', animation: 'fadeInUp 0.6s ease-out 0.6s forwards'}}>
<h3 className="font-semibold text-sm mb-1 flex items-start">
<svg className="lucide lucide-map-pin w-4 h-4 stroke-accent dark:stroke-accent mr-1.5 flex-shrink-0" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
            Austin, TX   <span className="font-semibold">Mueller</span>
</h3>
<p className="text-xs leading-relaxed mb-3 text-white/70 dark:text-white/70">A master-planned community featuring modern architecture and sustainable living principles.</p>
<div className="flex flex-wrap gap-2 text-[10px]">
<span className="px-2 py-1 bg-card dark:bg-card border border-accent/30 dark:border-accent/30 rounded-full hover:border-accent/50 dark:hover:border-accent/50 transition-colors duration-200">Eco-Friendly</span>
<span className="px-2 py-1 bg-card dark:bg-card border border-accent/30 dark:border-accent/30 rounded-full hover:border-accent/50 dark:hover:border-accent/50 transition-colors duration-200">Green Spaces</span>
<span className="px-2 py-1 bg-card dark:bg-card border border-accent/30 dark:border-accent/30 rounded-full hover:border-accent/50 dark:hover:border-accent/50 transition-colors duration-200">9 Avg. Schools</span>
</div>
</article>
</div>
</section>

<main className="flex-1 flex flex-col overflow-hidden" style={{opacity: '0', animation: 'fadeInUp 0.6s ease-out 0.4s forwards'}}>
<div className="flex-1 overflow-y-auto space-y-6 p-4">

<article className="bg-card dark:bg-card rounded-3xl overflow-hidden hover:bg-white/5 dark:hover:bg-white/5 transition-all duration-300 border border-white/5 dark:border-white/5" style={{opacity: '0', animation: 'fadeInUp 0.6s ease-out 0.5s forwards'}}>
<div className="relative">
<img alt="" className="w-full h-56 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ebb77f71-46e3-4f1e-b8b5-d1bbe5a39202_1600w.jpg"/>
<span className="absolute top-3 left-3 bg-accent dark:bg-accent px-2 py-0.5 text-[10px] rounded-full">95% Match</span>
</div>
<div className="p-4 space-y-2">
<h4 className="text-lg font-semibold">$1,650,000</h4>
<p className="text-xs">4 bd • 3 ba • 2,845 sq ft • Built 2018</p>
<p className="text-xs text-white/70 dark:text-white/70 leading-snug">Stunning contemporary home with open floor plan and designer finishes throughout...</p>
<div className="flex items-center text-xs pt-2 justify-between">
<div className="flex items-center gap-3 hover:text-accent dark:hover:text-accent transition-colors duration-200 cursor-pointer">
<svg className="lucide lucide-bookmark w-4 h-4 stroke-white/60 dark:stroke-white/60" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
                127
              </div>
<div className="flex items-center gap-3 hover:text-accent dark:hover:text-accent transition-colors duration-200 cursor-pointer">
<svg className="lucide lucide-message-square w-4 h-4 stroke-white/60 dark:stroke-white/60" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                42
              </div>
</div>
</div>
</article>

<article className="bg-card dark:bg-card rounded-3xl overflow-hidden hover:bg-white/5 dark:hover:bg-white/5 transition-all duration-300 border border-white/5 dark:border-white/5" style={{opacity: '0', animation: 'fadeInUp 0.6s ease-out 0.6s forwards'}}>
<div className="relative">
<img alt="" className="w-full h-56 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b330c40c-1e1a-4fc3-b0ed-2194b9d1cfef_800w.jpg"/>
<span className="absolute top-3 left-3 bg-accent dark:bg-accent px-2 py-0.5 text-[10px] rounded-full">91% Transit</span>
</div>
<div className="p-4 space-y-2">
<h4 className="text-lg font-semibold">$2,125,000</h4>
<p className="text-xs">3 bd • 2.5 ba • 2,560 sq ft • Built 2021</p>
<p className="text-xs text-white/70 dark:text-white/70 leading-snug">Located in the heart of Bouldin Creek, this modern farmhouse combines luxury with...</p>
<div className="flex items-center text-xs pt-2 justify-between">
<div className="flex items-center gap-3 hover:text-accent dark:hover:text-accent transition-colors duration-200 cursor-pointer">
<svg className="lucide lucide-bookmark w-4 h-4 stroke-white/60 dark:stroke-white/60" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
                73
              </div>
<div className="flex items-center gap-3 hover:text-accent dark:hover:text-accent transition-colors duration-200 cursor-pointer">
<svg className="lucide lucide-message-square w-4 h-4 stroke-white/60 dark:stroke-white/60" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                18
              </div>
</div>
</div>
</article>

<article className="bg-card dark:bg-card rounded-3xl overflow-hidden hover:bg-white/5 dark:hover:bg-white/5 transition-all duration-300 border border-white/5 dark:border-white/5" style={{opacity: '0', animation: 'fadeInUp 0.6s ease-out 0.7s forwards'}}>
<div className="relative">
<img alt="" className="w-full h-56 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/042fed3d-0f6d-4b08-850a-37171a14d47b_1600w.jpg"/>
<span className="absolute top-3 left-3 bg-accent dark:bg-accent px-2 py-0.5 text-[10px] rounded-full">87% Investment</span>
</div>
<div className="p-4 space-y-2">
<h4 className="text-lg font-semibold">$945,000</h4>
<p className="text-xs">2 bd • 2 ba • 1,890 sq ft • Built 2019</p>
<p className="text-xs text-white/70 dark:text-white/70 leading-snug">Chic downtown loft featuring exposed brick and floor-to-ceiling windows...</p>
<div className="flex items-center text-xs pt-2 justify-between">
<div className="flex items-center gap-3 hover:text-accent dark:hover:text-accent transition-colors duration-200 cursor-pointer">
<svg className="lucide lucide-bookmark w-4 h-4 stroke-white/60 dark:stroke-white/60" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
                91
              </div>
<div className="flex items-center gap-3 hover:text-accent dark:hover:text-accent transition-colors duration-200 cursor-pointer">
<svg className="lucide lucide-message-square w-4 h-4 stroke-white/60 dark:stroke-white/60" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                25
              </div>
</div>
</div>
</article>
</div>
</main>

<aside className="w-80 bg-card dark:bg-card border-l border-white/5 dark:border-white/5 flex flex-col" style={{opacity: '0', animation: 'fadeInRight 0.6s ease-out 0.5s forwards'}}>
<div className="p-6">
<h2 className="text-xl font-semibold mb-2 tracking-tight">Austin Urban Sanctuary</h2>
<p className="text-xs text-white/70 dark:text-white/70 mb-3">Contemporary living meets urban convenience—your ideal Austin home near tech corridors and cultural hotspots.</p>
<p className="text-xs text-white/70 dark:text-white/70">This property matches your lifestyle preferences exceptionally well. Strategic improvements could unlock additional value potential. Consider 4 upgrade paths to enhance ROI by $75k.</p>
</div>
<div className="flex-1 overflow-y-auto pr-6 pb-6 pl-6 space-y-4" style={{fontFamily: '\'Inter\', ui-sans-serif, system-ui, sans-serif'}}>
<div className="opacity-100 transition-opacity duration-400 ease-out" style={{animation: '0.4s ease-out 0.6s 1 normal forwards running fadeInUp'}}>
<div className="flex justify-between text-xs mb-1 font-medium text-white/90 dark:text-white/90" style={{fontVariantNumeric: 'tabular-nums'}}>
<span>Budget</span>
<span className="">1.65M / 1.80M</span>
</div>
<div aria-label="Budget progress" aria-valuemax="1.8" aria-valuemin="0" aria-valuenow="1.65" className="relative h-2 bg-white/10 dark:bg-white/10 rounded-full overflow-hidden cursor-pointer" role="progressbar" tabindex="0">
<div className="h-2 bg-blue-600 dark:bg-blue-600 rounded-full transition-all duration-500" style={{width: '91.66666666666666%'}}></div>
<div className="absolute top-0 left-0 h-2 w-full" style={{pointerEvents: 'none'}}></div>
</div>
</div>
<div className="opacity-100 transition-opacity duration-400 ease-out" style={{animation: '0.4s ease-out 0.7s 1 normal forwards running fadeInUp'}}>
<div className="flex justify-between text-xs mb-1 font-medium text-white/90 dark:text-white/90" style={{fontVariantNumeric: 'tabular-nums'}}>
<span className="">Bedrooms</span>
<span>4 / 4</span>
</div>
<div aria-label="Bedrooms progress" aria-valuemax="4" aria-valuemin="0" aria-valuenow="4" className="relative h-2 bg-white/10 dark:bg-white/10 rounded-full overflow-hidden cursor-pointer" role="progressbar" tabindex="0">
<div className="h-2 bg-blue-600 dark:bg-blue-600 rounded-full transition-all duration-500" style={{width: '100%'}}></div>
<div className="absolute top-0 left-0 h-2 w-full" style={{pointerEvents: 'none'}}></div>
</div>
</div>
<div className="opacity-100 transition-opacity duration-400 ease-out" style={{animation: '0.4s ease-out 0.8s 1 normal forwards running fadeInUp'}}>
<div className="flex justify-between text-xs mb-1 font-medium text-white/90 dark:text-white/90" style={{fontVariantNumeric: 'tabular-nums'}}>
<span className="">Bathrooms</span>
<span>3 / 3</span>
</div>
<div aria-label="Bathrooms progress" aria-valuemax="3" aria-valuemin="0" aria-valuenow="3" className="relative h-2 bg-white/10 dark:bg-white/10 rounded-full overflow-hidden cursor-pointer" role="progressbar" tabindex="0">
<div className="h-2 bg-blue-600 dark:bg-blue-600 rounded-full transition-all duration-500" style={{width: '100%'}}></div>
<div className="absolute top-0 left-0 h-2 w-full" style={{pointerEvents: 'none'}}></div>
</div>
</div>
<div className="opacity-100 transition-opacity duration-400 ease-out" style={{animation: '0.4s ease-out 0.9s 1 normal forwards running fadeInUp'}}>
<div className="flex justify-between text-xs mb-1 font-medium text-white/90 dark:text-white/90" style={{fontVariantNumeric: 'tabular-nums'}}>
<span className="">Living Space</span>
<span>2845 / 3200</span>
</div>
<div aria-label="Living Spaceprogress" aria-valuemax="3200" aria-valuemin="0" aria-valuenow="2845" className="relative h-2 bg-white/10 dark:bg-white/10 rounded-full overflow-hidden cursor-pointer" role="progressbar" tabindex="0">
<div className="h-2 bg-blue-600 dark:bg-blue-600 rounded-full transition-all duration-500" style={{width: '88.9%'}}></div>
<div className="absolute top-0 left-0 h-2 w-full" style={{pointerEvents: 'none'}}></div>
</div>
</div>
<div className="opacity-100 transition-opacity duration-400 ease-out" style={{animation: '0.4s ease-out 1.0s 1 normal forwards running fadeInUp'}}>
<div className="flex justify-between text-xs mb-1 font-medium text-white/90 dark:text-white/90" style={{fontVariantNumeric: 'tabular-nums'}}>
<span className="">Commute Score</span>
<span>8.5 / 10</span>
</div>
<div aria-label="Commute Score" aria-valuemax="10" aria-valuemin="0" aria-valuenow="8.5" className="relative h-2 bg-white/10 dark:bg-white/10 rounded-full overflow-hidden cursor-pointer" role="progressbar" tabindex="0">
<div className="h-2 bg-blue-600 dark:bg-blue-600 rounded-full transition-all duration-500" style={{width: '85%'}}></div>
<div className="absolute top-0 left-0 h-2 w-full" style={{pointerEvents: 'none'}}></div>
</div>
</div>
<div className="opacity-100 transition-opacity duration-400 ease-out" style={{animation: '0.4s ease-out 1.1s 1 normal forwards running fadeInUp'}}>
<div className="flex justify-between text-xs mb-1 font-medium text-white/90 dark:text-white/90" style={{fontVariantNumeric: 'tabular-nums'}}>
<span className="">Investment Potential</span>
<span>7.2 / 10</span>
</div>
<div aria-label="Investment Potential" aria-valuemax="10" aria-valuemin="0" aria-valuenow="7.2" className="relative h-2 bg-white/10 dark:bg-white/10 rounded-full overflow-hidden cursor-pointer" role="progressbar" tabindex="0">
<div className="h-2 bg-blue-600 dark:bg-blue-600 rounded-full transition-all duration-500" style={{width: '72%'}}></div>
<div className="absolute top-0 left-0 h-2 w-full" style={{pointerEvents: 'none'}}></div>
</div>
</div>

<div className="pt-4 space-y-3" style={{opacity: '0', animation: 'fadeInUp 0.6s ease-out 1.2s forwards'}}>
<button className="w-full bg-accent dark:bg-accent text-white py-3 px-4 rounded-2xl font-medium text-sm hover:bg-blue-700 dark:hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent/50 dark:focus:ring-accent/50">
            Schedule Visit
          </button>
<button className="w-full border border-white/20 dark:border-white/20 text-white py-3 px-4 rounded-2xl font-medium text-sm hover:bg-white/5 dark:hover:bg-white/5 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/20 dark:focus:ring-white/20">
            Save Property
          </button>
</div>

<div className="pt-4 border-t border-white/10 dark:border-white/10" style={{opacity: '0', animation: 'fadeInUp 0.6s ease-out 1.3s forwards'}}>
<h3 className="text-sm font-semibold mb-3">Market Insights</h3>
<div className="space-y-3 text-xs text-white/70 dark:text-white/70">
<div className="flex justify-between">
<span>Avg. Days on Market</span>
<span className="text-white/90 dark:text-white/90">28 days</span>
</div>
<div className="flex justify-between">
<span>Price per Sq Ft</span>
<span className="text-white/90 dark:text-white/90">$580</span>
</div>
<div className="flex justify-between">
<span>Neighborhood Growth</span>
<span className="text-green-400 dark:text-green-400">+12.3%</span>
</div>
<div className="flex justify-between">
<span>Walk Score</span>
<span className="text-white/90 dark:text-white/90">89/100</span>
</div>
</div>
</div>
</div>
</aside>
</div>

    </>
  );
}
