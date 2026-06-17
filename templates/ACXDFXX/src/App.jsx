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



    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileDropdown = document.getElementById('mobileDropdown');
    
    mobileMenuBtn?.addEventListener('click', () => {
      mobileDropdown?.classList.toggle('hidden');
    });

    // Add Lucide icons
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
      <div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b5cf09cd-cb67-413d-aa02-1b08cd4cf7fb_3840w.jpg")'}}></div>

<header className="fade-in fixed top-4 left-4 right-4 z-40 glass border-white/20 border rounded-2xl mr-60 ml-60 shadow-xl" style={{animationDelay: '0.05s', animationPlayState: 'running'}}>
<nav className="mx-auto max-w-5xl flex items-center justify-between px-4 py-3">

<a className="flex items-center gap-2 text-lg font-bold tracking-tight text-white hover:opacity-85 transition group select-none" href="#">
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-indigo-300 font-light tracking-tighter font-manrope">BOREAL ADVENTURE</span>
</a>

<button 26"="" className="lg:hidden p-2 rounded-lg hover:bg-slate-800/60 focus-visible:ring-2 focus-visible:ring-blue-400=" height="26" id="mobileMenuBtn" strokeWidth="1.5">
</button>

<ul className="hidden lg:flex gap-1 text-sm font-medium">
<li className=""><a className="px-3 py-2 rounded-xl transition flex items-center gap-2 hover:bg-slate-800/60 hover:text-blue-300 focus-visible:ring-2 focus-visible:ring-blue-500 outline-none font-sans" href="#">
<svg className="lucide lucide-home w-4 h-4" height="18" strokeWidth="1.5" width="18"></svg>Home</a></li>
<li className=""><a className="px-3 py-2 rounded-xl transition flex items-center gap-2 hover:bg-slate-800/60 hover:text-blue-300 focus-visible:ring-2 focus-visible:ring-blue-500 outline-none font-sans" href="#">
<svg className="lucide lucide-map-pin w-4 h-4" height="18" strokeWidth="1.5" width="18"></svg>Sepaq Parks</a></li>
<li className=""><a className="px-3 py-2 rounded-xl transition flex items-center gap-2 hover:bg-slate-800/60 hover:text-blue-300 focus-visible:ring-2 focus-visible:ring-blue-500 outline-none font-sans" href="#">
<svg className="lucide lucide-tent w-4 h-4" height="18" strokeWidth="1.5" width="18"></svg>Camping</a></li>
<li className=""><a className="px-3 py-2 rounded-xl transition flex items-center gap-2 hover:bg-slate-800/60 hover:text-blue-300 focus-visible:ring-2 focus-visible:ring-blue-500 outline-none font-sans" href="#">
<svg className="lucide lucide-phone w-4 h-4" height="18" strokeWidth="1.5" width="18"></svg>Contact</a></li>
</ul>

<div className="hidden lg:flex items-center gap-2">
<a className="text-sm flex items-center gap-2 text-blue-300 hover:text-slate-100 transition outline-none focus-visible:ring-2 focus-visible:ring-blue-500 font-sans px-2 py-2 rounded-lg" href="#">
<svg className="lucide lucide-play-circle w-4 h-4" height="18" strokeWidth="1.5" width="18"></svg>
          Nature Video
        </a>
<a className="hover:bg-gradient-to-tl hover:to-blue-300 hover:from-white transition flex items-center gap-2 outline-none focus-visible:ring-2 focus-visible:ring-blue-500 text-sm font-medium text-slate-900 bg-gradient-to-l from-teal-400 to-blue-500 border-neutral-50/20 border rounded-xl pt-2.5 pr-5 pb-2.5 pl-5 shadow-lg" href="#">
<svg className="lucide lucide-calendar w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
          Book Now
        </a>
</div>
</nav>

<div className="lg:hidden hidden glass divider rounded-b-2xl" id="mobileDropdown">
<ul className="flex flex-col px-4 py-3 gap-1 text-base font-medium">
<li><a className="flex items-center gap-2 px-3 py-3 rounded-md outline-none hover:bg-slate-800/60 hover:text-blue-300 focus-visible:ring-2 focus-visible:ring-blue-500 transition font-sans" href="#">
<svg className="lucide lucide-home w-4 h-4" height="20" strokeWidth="1.5" width="20"></svg>Home</a></li>
<li><a className="flex items-center gap-2 px-3 py-3 rounded-md outline-none hover:bg-slate-800/60 hover:text-blue-300 focus-visible:ring-2 focus-visible:ring-blue-500 transition font-sans" href="#">
<svg className="lucide lucide-map-pin w-4 h-4" height="20" strokeWidth="1.5" width="20"></svg>Sepaq Parks</a></li>
<li><a className="flex items-center gap-2 px-3 py-3 rounded-md outline-none hover:bg-slate-800/60 hover:text-blue-300 focus-visible:ring-2 focus-visible:ring-blue-500 transition font-sans" href="#">
<svg className="lucide lucide-tent w-4 h-4" height="20" strokeWidth="1.5" width="20"></svg>Camping</a></li>
<li><a className="flex items-center gap-2 px-3 py-3 rounded-md outline-none hover:bg-slate-800/60 hover:text-blue-300 focus-visible:ring-2 focus-visible:ring-blue-500 transition font-sans" href="#">
<svg className="lucide lucide-phone w-4 h-4" height="20" strokeWidth="1.5" width="20"></svg>Contact</a></li>
<li className="pt-2"><a className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-200 to-indigo-400 px-6 py-3 text-base text-slate-900 hover:bg-gradient-to-tl hover:to-blue-300 hover:from-white transition border border-white/60 outline-none focus-visible:ring-2 focus-visible:ring-blue-500 font-sans" href="#">
<svg className="lucide lucide-calendar w-4 h-4" height="20" strokeWidth="1.5" width="20"></svg>
          Book Now
        </a></li>
</ul>
</div>
</header>

<main className="sm:px-4 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] pt-32 pr-2 pb-20 pl-10">
<div className="max-w-7xl glass card-shadow sm:p-8 rounded-3xl mr-auto ml-auto pt-5 pr-3 pb-7 pl-3">
<div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[210px] md:auto-rows-[260px] lg:auto-rows-[320px] gap-5 lg:gap-8 relative">

<a className="relative col-span-1 md:col-span-8 md:row-span-2 overflow-hidden rounded-2xl lg:rounded-3xl group scale-in card-outline min-h-hero shadow-xl hover:scale-[1.03] transition-all duration-500 border border-white/10" href="#" style={{animationDelay: '0.18s', animationPlayState: 'running'}}>
<img alt="Camping in the Laurentians" className="absolute inset-0 h-full w-full object-cover scale-100 group-hover:scale-105 transition duration-700 z-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c956db0f-553e-416a-999b-48f537a5aff1_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-slate900/85 via-slate-900/60 to-transparent"></div>
<div className="absolute inset-0 flex flex-col md:p-10 z-10 pt-4 pr-6 pb-4 pl-6 space-y-3 items-stretch justify-end">
<div className="pt-0 pb-0">
<h2 className="sm:text-4xl lg:text-5xl text-5xl font-light text-white tracking-tighter font-manrope mb-4 drop-shadow-lg">
                Discover Quebec's Wilderness with Sepaq
              </h2>
<p className="max-w-lg leading-relaxed text-xl text-neutral-300/90 mb-7 drop-shadow">
                Explore Quebec's most beautiful parks. Camping, hiking, and unforgettable adventures await you.
              </p>
</div><div className="slide-up mt-8 items-end justify-end" style={{animationDelay: '0.6s', animationPlayState: 'running'}}>
<div className="glass border-white/20 border rounded-2xl mb-0 pt-2 pr-2 pb-2 pl-2 shadow-2xl" style={{background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(20px) saturate(180%)', WebkitBackdropFilter: 'blur(20px) saturate(180%)', border: '1px solid rgba(255, 255, 255, 0.25)', boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(0, 0, 0, 0.05)'}}>
<div className="relative">
<div className="flex flex-col sm:flex-row gap-3">
<div className="flex-1 relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<svg className="lucide lucide-search w-[18px] h-[18px] text-neutral-300" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<path d="m21 21-4.35-4.35"></path>
</svg>
</div>
<input className="w-full placeholder-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-300 text-white bg-white/10 border-white/30 border rounded-xl pt-3.5 pr-4 pb-3.5 pl-12 backdrop-blur-sm shadow-inner" placeholder="Search parks, regions, or activities..." style={{paddingLeft: '3rem', background: 'rgba(255, 255, 255, 0.06)', border: '1px solid rgba(255, 255, 255, 0.25)', backdropFilter: 'blur(8px)'}} type="text"/>
</div>
<div className="relative">
<select className="appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-300 text-white border-white/30 border rounded-xl pt-3.5 pr-10 pb-3.5 pl-4 shadow-inner" style={{background: 'rgba(255, 255, 255, 0.06)', border: '1px solid rgba(255, 255, 255, 0.25)', backdropFilter: 'blur(8px)'}}>
<option className="bg-slate-800 text-white" value="">All Regions</option>
<option className="bg-slate-800 text-white" value="laurentians">Laurentians</option>
<option className="bg-slate-800 text-white" value="eastern-townships">Eastern Townships</option>
<option className="bg-slate-800 text-white" value="quebec-city">Quebec City Region</option>
<option className="bg-slate-800 text-white" value="gaspe">Gaspé Peninsula</option>
<option className="bg-slate-800 text-white" value="mauricie">Mauricie</option>
<option className="bg-slate-800 text-white" value="saguenay">Saguenay</option>
</select>
<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
<svg className="lucide lucide-chevron-down w-[16px] h-[16px] text-neutral-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>
<button className="inline-flex gap-2 hover:from-blue-400/90 hover:to-indigo-400/90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 font-medium text-neutral-950 bg-gradient-to-l from-teal-400 to-blue-500 border-white/20 border rounded-xl pt-3.5 pr-6 pb-3.5 pl-6 shadow-xl backdrop-blur-sm items-center">
<svg className="lucide lucide-search w-[18px] h-[18px]" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<path d="m21 21-4.35-4.35"></path>
</svg>
  Search
</button>
</div>
</div>
</div>
</div>
</div>
</a>

<a className="relative col-span-1 md:col-span-4 overflow-hidden rounded-2xl card-outline group hover:scale-105 transition-all duration-300 scale-in bg-gradient-to-br from-blue-900/70 to-indigo-800/60 border border-white/10 shadow-lg" href="#" style={{animationDelay: '0.26s', animationPlayState: 'running'}}>
<img alt="Mont-Tremblant" className="absolute inset-0 h-full w-full object-cover scale-100 group-hover:scale-105 transition duration-500 z-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5fedd99a-caed-4493-8783-009c7bef7da5_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/70 to-transparent"></div>
<div className="absolute inset-0 flex flex-col md:p-7 z-10 pt-6 pr-6 pb-6 pl-6 justify-end">
<div className="glass border-white/15 border rounded-2xl pt-5 pr-5 pb-5 pl-5 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" style={{background: 'rgba(255, 255, 255, 0.04)', backdropFilter: 'blur(12px) saturate(140%)', WebkitBackdropFilter: 'blur(12px) saturate(140%)', border: '1px solid rgba(255, 255, 255, 0.2)', boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.05)'}}>
<div className="flex items-center gap-2 mb-3">
<svg className="lucide lucide-mountain w-5 h-5 text-blue-400 drop-shadow-sm" fill="none" height="19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="19" xmlns="http://www.w3.org/2000/svg">
<path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
</svg>
<span className="text-xs uppercase tracking-wide text-blue-200/80 font-sans drop-shadow-sm">National Park</span>
</div>
<h3 className="leading-snug text-2xl text-blue-50 tracking-tight mb-2 drop-shadow">
    Mont-Tremblant
  </h3>
<p className="text-sm leading-relaxed mb-4 text-blue-200/95 font-sans drop-shadow-sm">
    Lush forests, crystal-clear lakes, and 400 camping sites in the Laurentians.
  </p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5 text-xs text-blue-300/95">
<svg className="lucide lucide-tent w-[14px] h-[14px] drop-shadow-sm" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', color: 'rgb(147, 197, 253)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 21 14 3l10.5 18H3.5Z"></path><path d="M14 3v18"></path></svg>
<span className="font-sans drop-shadow-sm">400 sites</span>
</div>
<span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-200/90 group-hover:bg-blue-400 transition text-slate-900 border border-white/70 shadow-lg backdrop-blur-sm">
<svg className="lucide lucide-arrow-up-right w-[16px] h-[16px]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(15, 23, 42)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</span>
</div>
</div>
</div>
</a>

<a className="relative col-span-1 md:col-span-4 md:row-span-2 overflow-hidden rounded-2xl card-outline group hover:scale-105 transition-all duration-300 scale-in shadow-lg border border-white/10 bg-gradient-to-br from-white/10 to-blue-50/10" href="#" style={{animationDelay: '0.33s', animationPlayState: 'running'}}>
<img alt="Jacques-Cartier Park" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 scale-100 transition duration-500 z-0" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-b from-white/80 via-blue-50/50 to-transparent"></div>
<div className="absolute inset-0 flex flex-col w-full h-full md:col-span-4 z-10 pt-6 pr-6 pb-6 pl-6 justify-end">
<img alt="Jacques-Cartier Park" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 scale-100 transition duration-500 z-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6e29bd08-f172-468a-9f34-baf96386658d_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-transparent"></div>
<div className="glass relative z-10 border-white/15 border rounded-2xl pt-5 pr-5 pb-5 pl-5 shadow-lg" style={{background: 'rgba(255, 255, 255, 0.02)', backdropFilter: 'blur(8px) saturate(120%)', WebkitBackdropFilter: 'blur(8px) saturate(120%)', border: '1px solid rgba(255, 255, 255, 0.12)', boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.1)'}}>
<div className="flex gap-2 mb-3 items-center">
<svg className="lucide lucide-trees w-[18px] h-[18px] text-blue-400 drop-shadow" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"></path><path d="M7 16v6"></path><path d="M13 19v3"></path><path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"></path></svg>
<span className="text-xs uppercase tracking-wide text-blue-200/80 font-sans drop-shadow-sm">Valley Park</span>
</div>
<h3 className="leading-snug text-2xl text-blue-50 tracking-tight mb-2 drop-shadow">
    Jacques-Cartier
  </h3>
<p className="text-sm leading-relaxed mb-4 text-blue-200/95 font-sans drop-shadow-sm">
    Experience dramatic valleys, pristine rivers, and abundant wildlife. Perfect for kayaking and backcountry camping.
  </p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5 text-xs text-blue-300/95">
<svg className="lucide lucide-waves w-[14px] h-[14px] drop-shadow-sm" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>
<span className="font-sans drop-shadow-sm">River access</span>
</div>
<span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-200/90 group-hover:bg-blue-400 transition text-slate-900 border border-white/70 shadow-lg backdrop-blur-sm">
<svg className="lucide lucide-arrow-up-right w-[16px] h-[16px]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</span>
</div>
</div>
</div>
</a>

<a className="relative col-span-1 md:col-span-4 overflow-hidden rounded-2xl card-outline group hover:scale-105 transition-all duration-300 scale-in shadow-lg border border-white/10" href="#" style={{animationDelay: '0.40s', animationPlayState: 'running'}}>
<img alt="Forillon National Park" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 scale-100 transition duration-500 z-0" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-transparent"></div>
<div className="absolute inset-0 flex flex-col md:p-7 z-10 pt-2 pr-2 pb-2 pl-2 justify-end">
<div className="glass border-white/15 border rounded-2xl pt-5 pr-5 pb-5 pl-5 shadow-lg" style={{background: 'rgba(255, 255, 255, 0.04)', backdropFilter: 'blur(8px) saturate(160%)', WebkitBackdropFilter: 'blur(8px) saturate(160%)', border: '1px solid rgba(255, 255, 255, 0.2)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'}}>
<div className="flex gap-2 mb-3 items-center">
<svg className="lucide lucide-waves w-[18px] h-[18px] text-blue-400" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>
<span className="text-xs uppercase tracking-wide text-blue-200/70 font-sans">Coastal Park</span>
</div>
<h3 className="leading-snug text-2xl text-blue-50 tracking-tight mb-2">
    Forillon National Park
  </h3>
<p className="text-sm leading-relaxed mb-4 text-blue-200/90 font-sans">
    Where the land meets the sea in Gaspé. Coastal camping with whale watching and lighthouse views.
  </p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5 text-xs text-blue-300/90">
<svg className="lucide lucide-binoculars w-[14px] h-[14px]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M10 10h4"></path><path d="M19 7a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2c-1.7 0-3-1.3-3-3V9c0-1.7 1.3-3 3-3Z"></path><path d="M5 7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2c1.7 0 3-1.3 3-3V9c0-1.7-1.3-3-3-3Z"></path></svg>
<span className="font-sans">Whale watching</span>
</div>
<span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-200 group-hover:bg-blue-400 transition text-slate-900 border border-white/60 shadow">
<svg className="lucide lucide-arrow-up-right w-[16px] h-[16px]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</span>
</div>
</div>
</div>
</a>

<a className="relative col-span-1 md:col-span-4 overflow-hidden rounded-2xl card-outline group hover:scale-105 transition-all duration-300 scale-in shadow-lg border border-white/10" href="#" style={{animationDelay: '0.47s', animationPlayState: 'running'}}>
<img alt="La Mauricie National Park" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 scale-100 transition duration-500 z-0" src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-transparent"></div>
<div className="absolute inset-0 flex flex-col md:p-7 z-10 pt-6 pr-6 pb-6 pl-6 justify-end">
<div className="glass border-white/15 border rounded-2xl pt-5 pr-5 pb-5 pl-5 shadow-lg" style={{background: 'rgba(255, 255, 255, 0.01)', backdropFilter: 'blur(8px) saturate(140%)', WebkitBackdropFilter: 'blur(8px) saturate(140%)', border: '1px solid rgba(255, 255, 255, 0.08)', boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.05), inset 0 -1px 0 rgba(0, 0, 0, 0.1)'}}>
<div className="flex items-center gap-2 mb-3">
<svg className="lucide lucide-leaf w-[18px] h-[18px] text-green-400" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
<span className="text-xs uppercase tracking-wide text-green-200/70 font-sans">Forest Park</span>
</div>
<h3 className="leading-snug text-2xl text-blue-50 tracking-tight mb-2">
    La Mauricie
  </h3>
<p className="text-sm leading-relaxed mb-4 text-blue-200/90 font-sans">
    Dense boreal forest with 150 pristine lakes. Canoe camping and wildlife photography paradise.
  </p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5 text-xs text-blue-300/90">
<svg className="lucide lucide-camera w-[14px] h-[14px]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3Z"></path><circle cx="12" cy="13" r="3"></circle></svg>
<span className="font-sans">150 lakes</span>
</div>
<span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-200 group-hover:bg-blue-400 transition text-slate-900 border border-white/60 shadow">
<svg className="lucide lucide-arrow-up-right w-[16px] h-[16px]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</span>
</div>
</div>
</div>
</a>
</div>
</div>
</main><section className="max-w-7xl mx-auto mt-16 scale-in" style={{animationDelay: '0.54s'}}>
<div className="glass card-shadow rounded-3xl p-8 border border-white/10">
<div className="text-center mb-12">
<div className="flex items-center justify-center gap-3 mb-4">
<svg className="lucide lucide-compass text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88"></polygon>
</svg>
<span className="text-sm uppercase tracking-wide text-blue-200/80 font-sans">Adventure Awaits</span>
</div>
<h2 className="text-3xl lg:text-4xl font-light text-white tracking-tight font-manrope mb-4">
        Explore Quebec's Natural Wonders
      </h2>
<p className="text-lg text-neutral-300/90 max-w-2xl mx-auto leading-relaxed">
        From the rugged coastlines of Gaspé to the pristine lakes of the Laurentians, discover endless possibilities for outdoor adventure across Quebec's protected wilderness areas.
      </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">

<div className="glass border-white/10 border rounded-2xl p-6 hover:border-white/20 transition-all duration-300 group">
<div className="flex items-center gap-3 mb-4">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400/20 to-emerald-500/20 flex items-center justify-center border border-green-400/30">
<svg className="lucide lucide-mountain text-green-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
</svg>
</div>
<h3 className="text-2xl font-medium text-white">Hiking Trails</h3>
</div>
<p className="text-sm text-neutral-300/90 mb-4 leading-relaxed font-sans">
          Over 1,000 km of marked trails ranging from easy nature walks to challenging summit climbs. Experience Quebec's diverse ecosystems up close.
        </p>
<div className="flex items-center gap-2 text-xs text-green-300/90">
<svg className="lucide lucide-map" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="1,6 1,22 8,18 16,22 23,18 23,2 16,6 8,2"></polygon>
<line x1="8" x2="8" y1="2" y2="18"></line>
<line x1="16" x2="16" y1="6" y2="22"></line>
</svg>
<span className="font-sans">All difficulty levels</span>
</div>
</div>

<div className="glass border-white/10 border rounded-2xl p-6 hover:border-white/20 transition-all duration-300 group">
<div className="flex items-center gap-3 mb-4">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400/20 to-cyan-500/20 flex items-center justify-center border border-blue-400/30">
<svg className="lucide lucide-waves text-blue-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
<path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
<path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
</svg>
</div>
<h3 className="text-2xl font-medium text-white">Water Adventures</h3>
</div>
<p className="text-sm text-neutral-300/90 mb-4 leading-relaxed font-sans">
          Paddle through pristine waterways, fish in crystal-clear lakes, or enjoy refreshing swims in secluded swimming holes throughout the parks.
        </p>
<div className="flex items-center gap-2 text-xs text-blue-300/90">
<svg className="lucide lucide-anchor" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="5" r="3"></circle>
<line x1="12" x2="12" y1="22" y2="8"></line>
<path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>
</svg>
<span className="font-sans">Kayaking &amp; fishing</span>
</div>
</div>

<div className="glass border-white/10 border rounded-2xl p-6 hover:border-white/20 transition-all duration-300 group">
<div className="flex items-center gap-3 mb-4">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400/20 to-orange-500/20 flex items-center justify-center border border-amber-400/30">
<svg className="lucide lucide-binoculars text-amber-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M10 10h4"></path>
<path d="M19 7a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2c-1.7 0-3-1.3-3-3V9c0-1.7 1.3-3 3-3Z"></path>
<path d="M5 7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2c1.7 0 3-1.3 3-3V9c0-1.7-1.3-3-3-3Z"></path>
</svg>
</div>
<h3 className="text-2xl font-medium text-white">Wildlife Watching</h3>
</div>
<p className="text-sm text-neutral-300/90 mb-4 leading-relaxed font-sans">
          Encounter moose, black bears, caribou, and over 200 bird species. Our parks offer some of North America's best wildlife observation opportunities.
        </p>
<div className="flex items-center gap-2 text-xs text-amber-300/90">
<svg className="lucide lucide-camera" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3Z"></path>
<circle cx="12" cy="13" r="3"></circle>
</svg>
<span className="font-sans">Photography hotspots</span>
</div>
</div>
</div>

<div className="text-center">
<div className="glass border-white/10 border rounded-2xl p-6 hover:border-white/20 transition-all duration-300 group">
<div className="flex gap-3 mb-4 items-center justify-center">
<h3 className="text-lg font-medium text-white font-sans">Ready for Your Quebec Adventure?</h3>
</div>
<p className="text-sm text-neutral-300/90 mb-4 leading-relaxed font-sans">
    Plan your perfect outdoor getaway with our expert guides and comprehensive trail maps.
  </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="inline-flex items-center gap-2 hover:from-blue-400 hover:to-indigo-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 font-medium text-neutral-950 bg-gradient-to-l from-teal-400 to-blue-500 rounded-xl pt-3 pr-6 pb-3 pl-6 shadow-lg" href="#">
<svg className="lucide lucide-download" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="7,10 12,15 17,10"></polyline>
<line x1="12" x2="12" y1="15" y2="3"></line>
</svg>
      Download Trail Maps
    </a>
<a className="inline-flex items-center gap-2 glass border-white/20 border text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 hover:border-white/30" href="#">
<svg className="lucide lucide-info" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 16v-4"></path>
<path d="M12 8h.01"></path>
</svg>
      Park Information
    </a>
</div>
</div>
</div>
</div>
</section>


    </>
  );
}
