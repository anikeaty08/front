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



  document.addEventListener('DOMContentLoaded', () => {
    if (window.lucide) {
      lucide.createIcons();
    }
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
      <div className="fixed top-0 w-full h-screen -z-10 bg-cover bg-center saturate-0 opacity-60 brightness-50" data-alpha-mask="100" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d6444ca7-884d-4d5f-bc93-c1396c804d15_3840w.webp")', maskImage: 'linear-gradient(transparent, black 0%, black 100%, transparent)'}}></div>


<div className="relative backdrop-blur-none">


<header className="sticky top-0 z-30">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="flex supports-[backdrop-filter]:bg-white/100 bg-white border-neutral-200 border rounded-2xl mt-5 pt-2 pr-3 pb-2 pl-3 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] backdrop-blur items-center justify-between">
<a className="inline-flex items-center justify-center bg-center mix-blend-multiply w-[80px] h-[36px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/12005141-c9fb-406f-a767-d04124893a70_320w.webp)] bg-cover rounded-full invert" href="#" style={{}}></a>
<nav className="hidden items-center gap-7 md:flex">
<a className="text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors" href="#">Destinations</a>
<a className="text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors" href="#">Experiences</a>
<a className="text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors" href="#">Stories</a>
<a className="text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors" href="#">About</a>
</nav>
<div className="flex items-center gap-2">
<button className="hidden rounded-xl border border-neutral-200 px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 md:block">Sign In</button>
<button className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 transition-colors">
<span className="">Start Journey</span>
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</header>

<main className="relative sm:px-6 lg:px-8 max-w-7xl mt-8 mr-auto ml-auto pr-4 pl-4">
<section className="relative overflow-hidden group animate-fade-in bg-neutral-50 border-neutral-200 border rounded-3xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" style={{animation: 'fadeIn 0.8s ease-out'}}>
<div className="relative grid grid-cols-1 gap-8 sm:p-10 lg:grid-cols-12 lg:gap-10 pt-6 pr-6 pb-6 pl-6">

<div className="order-2 flex flex-col justify-between lg:order-1 lg:col-span-6 animate-slide-in-left" style={{animation: 'slideInLeft 0.8s ease-out 0.2s backwards'}}>
<div className="max-w-xl">
<div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/70 px-3 py-1 text-xs font-medium text-neutral-700 backdrop-blur hover:bg-white/80 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-bounce" style={{animation: 'gentleBounce 2s ease-in-out infinite'}}>
<span className="flex items-center justify-center animate-pulse text-white bg-gradient-to-br from-blue-400 to-blue-600 w-5 h-5 rounded-full" style={{animation: 'pulse 2s ease-in-out infinite'}}>
<svg className="lucide lucide-compass w-[14px] h-[14px]" data-icon-replaced="true" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5', color: 'rgb(255, 255, 255)', width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</span>
              Live Travel Updates
              <span className="mx-1.5 h-1 w-1 rounded-full bg-neutral-400 animate-pulse"></span>
              Discover new horizons daily
            </div>
<h1 className="sm:text-6xl lg:text-7xl hover:bg-gradient-to-r hover:from-indigo-600 hover:to-indigo-400 hover:bg-clip-text hover:text-transparent transition-all duration-500 animate-fade-in-up text-5xl font-semibold text-neutral-900 tracking-tight" style={{animation: '0.8s ease-out 0.4s 1 normal backwards running fadeInUp'}}>
  EXPLORE THE WORLD YOUR WAY
</h1>
<p className="mt-5 max-w-lg text-base leading-relaxed text-neutral-700 animate-fade-in-up" style={{animation: 'fadeInUp 0.8s ease-out 0.6s backwards'}}>
              Curated journeys to extraordinary destinations. From hidden gems to iconic landmarks, experience travel reimagined for the modern explorer.
            </p>
<div className="flex flex-wrap gap-3 animate-fade-in-up mt-8 gap-x-3 gap-y-3 items-center" style={{animation: 'fadeInUp 0.8s ease-out 0.8s backwards'}}>
<button className="flex gap-2 hover:from-indigo-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-1 active:scale-95 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-indigo-600 w-full max-w-xs rounded-xl pt-3.5 pr-6 pb-3.5 pl-6 shadow-lg gap-x-2 gap-y-2 items-center justify-center" style={{}}>
<svg className="lucide lucide-map-pin w-[16px] h-[16px] animate-pulse" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="text-sm">Plan Your Adventure</span>
</button>
<button className="inline-flex gap-2 hover:bg-neutral-50 text-sm font-medium text-neutral-900 bg-white border-neutral-300 border rounded-xl pt-3 pr-4 pb-3 pl-4 items-center transition-all duration-300 hover:scale-105 hover:shadow-md hover:-translate-y-0.5 active:scale-95">
<svg className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
                Watch Film
              </button>
</div>
</div>

<div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 animate-fade-in-up" style={{animation: 'fadeInUp 0.8s ease-out 1s backwards'}}>
<div className="rounded-2xl border border-neutral-200 bg-white/80 p-4 backdrop-blur hover:bg-white/90 hover:scale-105 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
<div className="text-sm font-medium text-neutral-600">Countries</div>
<div className="group-hover:text-indigo-600 transition-colors duration-300 text-2xl font-semibold text-neutral-900 tracking-tight mt-1">
  120+</div>
</div>
<div className="rounded-2xl border border-neutral-200 bg-white/80 p-4 backdrop-blur hover:bg-white/90 hover:scale-105 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
<div className="text-sm font-medium text-neutral-600">Travelers</div>
<div className="mt-1 text-2xl font-semibold tracking-tight text-neutral-900 group-hover:text-indigo-600 transition-colors duration-300">
  50K</div>
</div>
<div className="rounded-2xl border border-neutral-200 bg-white/80 p-4 backdrop-blur hover:bg-white/90 hover:scale-105 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
<div className="text-sm font-medium text-neutral-600">Reviews</div>
<div className="group-hover:text-indigo-600 transition-colors duration-300 text-2xl font-semibold text-neutral-900 tracking-tight mt-1">
  4.9/5</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2 lg:col-span-6 animate-slide-in-right" style={{animation: 'slideInRight 0.8s ease-out 0.4s backwards'}}>
<div className="relative">

<div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-full border border-white/60 bg-white/80 shadow-lg backdrop-blur hover:scale-105 hover:shadow-2xl transition-all duration-500 group hover:border-indigo-300/60">
<img alt="Travel destination" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fd19b368-8a01-4d1e-8c65-24942a0b22c8_1600w.webp" style={{}}/>
<div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/60" style={{}}></div>
<div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr to-blue-400/20 mix-blend-overlay animate-pulse from-indigo-400/25 via-indigo-400/20" style={{animation: 'glowPulse 4s ease-in-out infinite'}}></div>
</div>


<div className="absolute -left-2 top-6 sm:-left-4 sm:top-4 animate-float w-[56%]" style={{animation: 'float 6s ease-in-out infinite'}}>
<div className="hover:shadow-lg hover:scale-105 hover:bg-white/90 transition-all duration-300 hover:-translate-y-2 group cursor-pointer bg-white/80 border-white/60 border rounded-2xl pt-4 pr-4 pb-4 pl-4 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] backdrop-blur">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-neutral-700 tracking-tight group-hover:text-blue-600 transition-colors duration-300">Top Destination</div>
<svg className="lucide lucide-star h-4 w-4 text-neutral-400 group-hover:text-yellow-500 group-hover:animate-bounce transition-all duration-300 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="mt-0.5 text-xs text-neutral-600 group-hover:text-blue-700 transition-colors duration-300">Santorini, Greece</p>
<div className="mt-3">
<div className="relative h-20 w-full overflow-hidden rounded-lg border border-neutral-200 group-hover:border-blue-300 transition-all duration-300">
<img alt="Santorini" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/784eed30-4fba-4d77-b082-1569c7e927c8_800w.webp" style={{}}/>
</div>
</div>
</div>
</div>



<div className="-right-2 sm:-right-4 animate-float-reverse w-[42%] absolute bottom-3" style={{animation: 'floatReverse 6s ease-in-out infinite 1s'}}>
<div className="hover:shadow-lg hover:scale-105 hover:bg-white/90 transition-all duration-300 hover:-translate-y-2 group cursor-pointer bg-white/80 border-white/60 border rounded-2xl pt-4 pr-4 pb-4 pl-4 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] backdrop-blur">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-neutral-700 tracking-tight group-hover:text-indigo-600 transition-colors duration-300">
      Activities</div>
<svg className="lucide lucide-mountain h-4 w-4 text-neutral-400 group-hover:animate-pulse transition-all duration-300 group-hover:text-indigo-500" data-lucide="mountain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m8 3 4 8 5-5 5 15H2L8 3z"></path></svg>
</div>
<div className="mt-3 flex items-center gap-3">
<img alt="Activities" className="h-14 w-14 rounded-xl object-cover group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c317dfd8-d480-4050-8248-4c3f34ce95e9_320w.webp" style={{}}/>
<div className="space-y-1">
<div className="flex items-center justify-between gap-4">
<span className="text-xs text-neutral-600 group-hover:text-indigo-700 transition-colors duration-300">Adventure</span>
<span className="text-sm font-medium text-neutral-900 group-hover:text-indigo-600 transition-colors duration-300">24</span>
</div>
<div className="flex items-center justify-between gap-4">
<span className="text-xs text-neutral-600 group-hover:text-indigo-700 transition-colors duration-300">Culture</span>
<span className="text-sm font-medium text-neutral-900 group-hover:text-indigo-600 transition-colors duration-300">18</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="order-3 lg:col-span-12 animate-fade-in-up" style={{animation: 'fadeInUp 0.8s ease-out 1.2s backwards'}}>
<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:p-5 hover:bg-white/90 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group bg-white border-white/60 border rounded-2xl mt-2 pt-4 pr-4 pb-4 pl-4 backdrop-blur items-start justify-between">
<p className="max-w-3xl text-sm text-neutral-700 group-hover:text-neutral-900 transition-colors duration-300">
              Join thousands of travelers discovering unique experiences across the globe. From pristine beaches to mountain peaks, your next adventure awaits.
            </p>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50 hover:scale-105 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 active:scale-95">
<svg className="lucide lucide-book-open h-4 w-4" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
                Travel Guide
              </button>
<button className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 hover:scale-105 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:scale-95">
<svg className="lucide lucide-phone h-4 w-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                Contact Expert
              </button>
</div>
</div>
</div>
</div>
</section>

<section className="sm:p-8 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 bg-neutral-50 max-w-7xl border-neutral-200 border rounded-3xl mt-20 pt-6 pr-6 pb-6 pl-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" style={{animation: 'slideUp 0.8s ease-out'}}>
<div className="text-center mb-10" style={{animation: 'fadeInUp 0.8s ease-out 0.2s both'}}>
<span className="text-sm font-normal text-neutral-500 transition-colors duration-300 hover:text-indigo-600">Why travelers choose Voyage</span>
<h2 className="sm:text-6xl lg:text-7xl hover:bg-gradient-to-r hover:from-indigo-600 hover:to-indigo-400 hover:bg-clip-text hover:text-transparent transition-all duration-500 animate-fade-in-up text-5xl font-normal text-neutral-900 tracking-tight" style={{}}>
      Features built for modern journeys
    </h2>
<p className="mt-4 text-sm text-neutral-600 max-w-2xl mx-auto">
      From planning to your final flight home, every detail is designed to keep you inspired, informed, and in control.
    </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 items-start">

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-x-6 gap-y-6" style={{animation: 'fadeInLeft 0.8s ease-out 0.3s both'}}>

<article className="overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-500 hover:-translate-y-2 group bg-white border-neutral-200 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border group-hover:scale-110 transition-all duration-300 mb-4 bg-indigo-50 text-indigo-600 border-indigo-100 group-hover:bg-indigo-100" style={{}}>
<svg className="lucide lucide-route h-5 w-5" data-lucide="route" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="19" r="3"></circle><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path><circle cx="18" cy="5" r="3"></circle></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight text-neutral-900 mb-1">
    Tailored itineraries
  </h3>
<p className="text-sm text-neutral-600 mb-4">
    Share your preferences and we’ll design flexible journeys that adapt to your pace, budget, and travel style.
  </p>
<div className="flex items-center gap-2 text-xs text-neutral-500">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full border text-[10px] font-medium bg-indigo-50 text-indigo-600 border-indigo-100" style={{}}>AI</span>
<span className="">Smart suggestions powered by your past trips</span>
</div>
</article>

<article className="relative overflow-hidden bg-white border border-neutral-200 rounded-2xl p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 hover:-translate-y-2 group">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100 group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300 mb-4" style={{}}>
<svg className="lucide lucide-radar h-5 w-5" data-lucide="radar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path><path d="M4 6h.01"></path><path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path><path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path><path d="M12 18h.01"></path><path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path><circle cx="12" cy="12" r="2"></circle><path d="m13.41 10.59 5.66-5.66"></path></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight text-neutral-900 mb-1">
    Live trip updates
  </h3>
<p className="text-sm text-neutral-600 mb-4">
    Get real-time alerts on flight changes, weather shifts, and local events so you’re never caught off guard.
  </p>
<div className="flex items-center gap-2 text-xs text-neutral-500">
<span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="">Live status for flights, transfers, and activities</span>
</div>
</article>

<article className="relative overflow-hidden bg-white border border-neutral-200 rounded-2xl p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 hover:-translate-y-2 group">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 group-hover:bg-emerald-100 group-hover:scale-110 transition-all duration-300 mb-4" style={{}}>
<svg className="lucide lucide-shield-check h-5 w-5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight text-neutral-900 mb-1">
    Trusted local experts
  </h3>
<p className="text-sm text-neutral-600 mb-4">
    Travel with vetted guides, handpicked stays, and experiences backed by thousands of reviews.
  </p>
<div className="flex items-center gap-2 text-xs text-neutral-500">
<svg className="lucide lucide-star h-3.5 w-3.5 text-yellow-500 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="">4.9 average rating across 50K+ travelers</span>
</div>
</article>

<article className="relative overflow-hidden bg-white border border-neutral-200 rounded-2xl p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 hover:-translate-y-2 group">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-600 border border-rose-100 group-hover:bg-rose-100 group-hover:scale-110 transition-all duration-300 mb-4">
<svg className="lucide lucide-wallet h-5 w-5" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight text-neutral-900 mb-1">
    Flexible budgeting
  </h3>
<p className="text-sm text-neutral-600 mb-4">
    Lock in prices, split payments with your group, and adjust your itinerary without surprise fees.
  </p>
<div className="flex items-center gap-2 text-xs text-neutral-500">
<span className="px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
            Free changes up to 30 days before departure
          </span>
</div>
</article>
</div>

<aside className="relative h-full" style={{animation: 'fadeInRight 0.8s ease-out 0.4s both'}}>
<div className="h-full rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800 text-white p-6 sm:p-7 flex flex-col justify-between overflow-hidden shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.5),_0_6.7px_5.3px_rgba(0,_0,_0,_0.4)]">
<div className="relative">
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1 text-[11px] font-medium tracking-tight mb-4">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" style={{}}></span>
            Always-on trip companion
          </div>
<h3 className="text-2xl sm:text-[26px] leading-snug tracking-tight font-semibold">
            All your travel details, synced in one place
          </h3>
<p className="mt-3 text-xs sm:text-sm text-neutral-200">
            Access boarding passes, hotel confirmations, activities, and support in a single, offline-ready trip hub.
          </p>
<div className="mt-6 space-y-3 text-xs sm:text-[13px]">
<div className="flex items-center justify-between gap-3 rounded-xl bg-white/5 border border-white/10 px-3 py-2.5">
<div className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-white/10">
<svg className="lucide lucide-clock h-3.5 w-3.5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</span>
<div className="">
<p className="font-medium text-white">Time-zoned itinerary</p>
<p className="text-[11px] text-neutral-300">Auto-adjusts as you cross borders</p>
</div>
</div>
<span className="text-[11px] text-emerald-300">+3h layover saved</span>
</div>
<div className="flex items-center justify-between gap-3 rounded-xl bg-white/5 border border-white/10 px-3 py-2.5">
<div className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-white/10">
<svg className="lucide lucide-globe-2 h-3.5 w-3.5" data-lucide="globe-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></svg>
</span>
<div className="">
<p className="font-medium text-white">Offline access</p>
<p className="text-[11px] text-neutral-300">Maps, tickets &amp; tips without roaming</p>
</div>
</div>
<span className="text-[11px] text-neutral-200">Works in 120+ countries</span>
</div>
</div>
</div>
<div className="relative mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<div className="flex gap-x-8 items-center">
<div className="flex -space-x-2">
<img alt="Traveler 1" className="h-7 w-7 rounded-full border border-white/40 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0b01db06-ac1c-4e1d-919a-b307908029f2_320w.webp"/>
<img alt="Traveler 2" className="h-7 w-7 rounded-full border border-white/40 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3012bbbf-121f-4308-810b-4e024631baa5_320w.webp"/>
<img alt="Traveler 3" className="h-7 w-7 rounded-full border border-white/40 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ecaf3cc3-752c-47c2-a790-883a13de7ca8_320w.webp" style={{}}/>
</div>
<p className="text-[11px] text-neutral-200">
              9/10 travelers would plan their next trip with Voyage.
            </p>
</div>
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-neutral-900 px-4 py-2 text-xs font-medium hover:bg-neutral-100 hover:scale-105 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 active:scale-95">
<span className="">See how it works</span>
<svg className="lucide lucide-arrow-right h-3.5 w-3.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</aside>
</div>
</section><section className="sm:p-8 bg-neutral-50 max-w-7xl border-neutral-200 border rounded-3xl mt-20 pt-6 pr-6 pb-6 pl-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] hover:shadow-xl hover:scale-[1.02] transition-all duration-500" style={{animation: 'slideUp 0.8s ease-out'}}>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 relative z-10 items-start">

<div className="flex flex-col justify-between min-h-full" style={{animation: 'fadeInLeft 0.8s ease-out 0.2s both'}}>
<div className="">
<span className="text-sm font-normal text-neutral-500 transition-colors duration-300 hover:text-indigo-600">Travel experiences</span>
<h2 className="sm:text-6xl lg:text-7xl hover:bg-gradient-to-r hover:from-indigo-600 hover:to-indigo-400 hover:bg-clip-text hover:text-transparent transition-all duration-500 animate-fade-in-up text-5xl font-normal text-neutral-900 tracking-tight" style={{animation: '0.8s ease-out 0.4s 1 normal both running fadeInUp'}}>
              Curated journeys for every traveler
            </h2>
<div className="mt-8 relative" style={{animation: 'fadeInUp 0.8s ease-out 0.6s both'}}>
<div className="absolute inset-0 flex items-center">
<div className="w-full h-px bg-gradient-to-r from-neutral-200 via-neutral-300 to-neutral-200"></div>
</div>
<div className="hidden sm:grid grid-cols-3 gap-6 text-neutral-600 bg-neutral-50 px-4 relative">
<div className="flex items-center gap-2 hover:scale-105 transition-all duration-300 cursor-pointer group hover:text-indigo-600">
<svg className="lucide lucide-globe h-4 w-4 group-hover:rotate-90 transition-transform duration-300" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<span className="text-sm font-normal">Global Reach</span>
</div>
<div className="flex items-center gap-2 hover:text-blue-600 hover:scale-105 transition-all duration-300 cursor-pointer group">
<svg className="lucide lucide-shield-check h-4 w-4 group-hover:rotate-90 transition-transform duration-300" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm font-normal">Verified Guides</span>
</div>
<div className="flex items-center gap-2 hover:scale-105 transition-all duration-300 cursor-pointer group hover:text-indigo-600">
<svg className="lucide lucide-heart h-4 w-4 group-hover:rotate-90 transition-transform duration-300" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
<span className="text-sm font-normal">Local Experiences</span>
</div>
</div>
</div>
</div>
<div className="w-full mt-10" style={{animation: 'fadeInUp 0.8s ease-out 0.8s both'}}>
<div className="">
<p className="text-sm font-medium text-neutral-900 tracking-tight transition-colors duration-300 hover:text-indigo-600">Personalized adventures worldwide</p>
<p className="mt-1 text-sm text-neutral-600 hover:text-neutral-800 transition-colors duration-300" style={{}}>Whether you seek adventure, relaxation, or cultural immersion, our expert team crafts unforgettable experiences tailored to your desires.</p>
<button className="mt-4 w-full inline-flex items-center justify-center gap-2 h-10 px-4 rounded-full bg-neutral-900 text-white text-sm font-normal hover:bg-neutral-800 hover:scale-105 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 active:scale-95 group">
<span className="">Browse Experiences</span>
<span className="inline-flex h-2 w-2 rounded-full bg-white group-hover:animate-bounce"></span>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 relative" style={{animation: 'fadeInRight 0.8s ease-out 0.4s both'}}>

<div className="flex flex-col gap-4">

<article className="overflow-hidden aspect-[4/5] bg-center hover:scale-105 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group cursor-pointer bg-cover border-neutral-200 border rounded-2xl relative bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ee716ac7-e894-4f78-a368-207dfcd986f7_800w.webp)] hover:border-indigo-300" style={{animation: 'slideInUp 0.8s ease-out 0.6s both'}}>
<div className="group-hover:opacity-50 transition-opacity duration-300 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-neutral-900 border border-neutral-300 group-hover:scale-110 transition-all duration-300 group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:border-indigo-300">
<svg className="lucide lucide-mountain-snow h-3.5 w-3.5" data-lucide="mountain-snow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m8 3 4 8 5-5 5 15H2L8 3z"></path><path d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-white/60 backdrop-blur text-[11px] text-neutral-700 font-normal border border-neutral-200 transition-all duration-300 group-hover:bg-indigo-50 group-hover:border-indigo-300 group-hover:text-indigo-700">Adventure</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight group-hover:scale-105 transition-transform duration-300">Mountain Trekking</p>
</div>
</article>

<article className="overflow-hidden aspect-[4/3] bg-center hover:scale-105 hover:shadow-2xl hover:border-blue-300 transition-all duration-500 hover:-translate-y-2 group cursor-pointer bg-cover border-neutral-200 border rounded-2xl relative bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fbfd8a74-1d62-463f-8df9-58e527163665_800w.webp)]" style={{animation: 'slideInUp 0.8s ease-out 0.8s both'}}>
<div className="group-hover:opacity-50 transition-opacity duration-300 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-neutral-900 border border-neutral-300 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-300 group-hover:scale-110 transition-all duration-300">
<svg className="lucide lucide-palmtree h-3.5 w-3.5" data-lucide="palmtree" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4"></path><path d="M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3"></path><path d="M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35"></path><path d="M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-white/60 backdrop-blur text-[11px] text-neutral-700 font-normal border border-neutral-200 group-hover:bg-blue-50 group-hover:border-blue-300 group-hover:text-blue-700 transition-all duration-300">Beach</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight group-hover:scale-105 transition-transform duration-300">Island Paradise</p>
</div>
</article>
</div>

<div className="flex flex-col gap-4">

<article className="overflow-hidden aspect-[4/3] bg-center hover:scale-105 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group cursor-pointer bg-cover border-neutral-200 border rounded-2xl relative bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6d047609-9207-42ad-b26b-d5d65c289fb3_800w.webp)] hover:border-indigo-300" style={{animation: 'slideInUp 0.8s ease-out 0.7s both'}}>
<div className="group-hover:opacity-50 transition-opacity duration-300 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-neutral-900 border border-neutral-300 group-hover:scale-110 transition-all duration-300 group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:border-indigo-300">
<svg className="lucide lucide-landmark h-3.5 w-3.5" data-lucide="landmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 18v-7"></path><path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"></path><path d="M14 18v-7"></path><path d="M18 18v-7"></path><path d="M3 22h18"></path><path d="M6 18v-7"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-white/60 backdrop-blur text-[11px] text-neutral-700 font-normal border border-neutral-200 transition-all duration-300 group-hover:bg-indigo-50 group-hover:border-indigo-300 group-hover:text-indigo-700">Culture</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight group-hover:scale-105 transition-transform duration-300">City Heritage</p>
</div>
</article>

<article className="overflow-hidden aspect-[4/5] bg-center hover:scale-105 hover:shadow-2xl hover:border-green-300 transition-all duration-500 hover:-translate-y-2 group cursor-pointer bg-cover border-neutral-200 border rounded-2xl relative bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a169fb34-0122-4ee3-b1ea-6dc5afac5246_800w.jpg)]" style={{animation: '0.8s ease-out 0.9s 1 normal both running slideInUp'}}>
<div className="group-hover:opacity-50 transition-opacity duration-300 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-neutral-900 border border-neutral-300 group-hover:bg-green-50 group-hover:text-green-600 group-hover:border-green-300 group-hover:scale-110 transition-all duration-300">
<svg className="lucide lucide-trees h-3.5 w-3.5" data-lucide="trees" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"></path><path d="M7 16v6"></path><path d="M13 19v3"></path><path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-white/60 backdrop-blur text-[11px] text-neutral-700 font-normal border border-neutral-200 group-hover:bg-green-50 group-hover:border-green-300 group-hover:text-green-700 transition-all duration-300">Nature</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight group-hover:scale-105 transition-transform duration-300">Wildlife Safari</p>
</div>
</article>
</div>
</div>
</div>
</section><section className="sm:p-8 bg-neutral-50 max-w-7xl border-neutral-200 border rounded-3xl mt-20 pt-6 pr-6 pb-6 pl-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] hover:shadow-xl hover:scale-[1.02] transition-all duration-500" style={{animation: 'slideUp 0.8s ease-out'}}>
<div className="text-center mb-12" style={{animation: 'fadeInUp 0.8s ease-out 0.2s both'}}>
<span className="text-sm font-normal text-neutral-500 transition-colors duration-300 hover:text-indigo-600">Featured destinations</span>
<h2 className="sm:text-6xl lg:text-7xl hover:bg-gradient-to-r hover:from-indigo-600 hover:to-indigo-400 hover:bg-clip-text hover:text-transparent transition-all duration-500 animate-fade-in-up text-5xl font-normal text-neutral-900 tracking-tight" style={{}}>
      Discover iconic places
    </h2>
<p className="mt-4 text-sm text-neutral-600 max-w-2xl mx-auto">
      Hand-picked destinations that promise extraordinary adventures and lasting memories
    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-6 gap-y-6">

<article className="md:col-span-2 lg:col-span-2 overflow-hidden bg-center hover:scale-[1.02] hover:shadow-2xl transition-all duration-500 group cursor-pointer min-h-[400px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d06e0595-2863-4523-8cc0-99475470f51d_1600w.webp)] bg-cover border-neutral-200 border rounded-2xl relative hover:border-indigo-300" style={{animation: '0.8s ease-out 0.4s 1 normal both running slideInUp'}}>
<div className="group-hover:from-black/80 transition-all duration-300 bg-gradient-to-t from-black/70 via-black/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="flex gap-3 absolute top-6 left-6 items-center">
<span className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-xs font-medium text-neutral-900 border border-neutral-300 transition-all duration-300 group-hover:bg-indigo-50 group-hover:border-indigo-300 group-hover:text-indigo-700">Popular</span>
<span className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur text-xs font-medium text-white border border-white/40">8 Experiences</span>
</div>
<div className="absolute top-6 right-6">
<button className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur text-white border border-white/40 hover:bg-white hover:text-neutral-900 hover:scale-110 transition-all duration-300">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="absolute bottom-6 left-6 right-6">
<div className="flex items-start justify-between gap-4">
<div className="flex-1">
<h3 className="text-3xl font-semibold text-white tracking-tight mb-2 group-hover:scale-105 transition-transform duration-300">Paris, France</h3>
<p className="text-sm text-white/90 mb-3">The City of Light beckons with timeless charm and romance</p>
<div className="flex items-center gap-4 text-xs text-white/80">
<div className="flex items-center gap-1.5">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 2v20M2 12h20"></path></svg>
<span className="">7-14 days</span>
</div>
<div className="flex items-center gap-1.5">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
<span className="">From $1,899</span>
</div>
</div>
</div>
<button className="inline-flex hover:bg-indigo-600 hover:text-white hover:scale-110 transition-all duration-300 flex-shrink-0 text-neutral-900 bg-white w-12 h-12 rounded-full items-center justify-center" style={{}}>
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path className="" d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</article>

<article className="overflow-hidden bg-center hover:scale-[1.02] hover:shadow-2xl hover:border-blue-300 transition-all duration-500 group cursor-pointer min-h-[400px] bg-cover border-neutral-200 border rounded-2xl relative bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/70dd0481-c871-4cfe-ba2d-7317cc9a1e04_800w.webp)]" style={{animation: '0.8s ease-out 0.5s 1 normal both running slideInUp'}}>
<div className="group-hover:from-black/80 transition-all duration-300 bg-gradient-to-t from-black/70 via-black/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-6 left-6">
<span className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur text-xs font-medium text-white border border-white/40">12 Experiences</span>
</div>
<div className="absolute top-6 right-6">
<button className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur text-white border border-white/40 hover:bg-white hover:text-neutral-900 hover:scale-110 transition-all duration-300">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="absolute bottom-6 left-6 right-6">
<h3 className="text-2xl font-semibold text-white tracking-tight mb-2 group-hover:scale-105 transition-transform duration-300">Santorini, Greece</h3>
<p className="text-sm text-white/90 mb-3">Whitewashed villages and azure waters</p>
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-white">From $2,299</span>
<div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-neutral-900 group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-110 transition-all duration-300">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg>
</div>
</div>
</div>
</article>

<article className="overflow-hidden bg-center hover:scale-[1.02] hover:shadow-2xl hover:border-green-300 transition-all duration-500 group cursor-pointer min-h-[400px] bg-cover border-neutral-200 border rounded-2xl relative bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d6e8d4a7-7f5c-4280-80e4-75bbb7c3ebee_800w.webp)]" style={{animation: 'slideInUp 0.8s ease-out 0.6s both'}}>
<div className="group-hover:from-black/80 transition-all duration-300 bg-gradient-to-t from-black/70 via-black/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-6 left-6">
<span className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur text-xs font-medium text-white border border-white/40">15 Experiences</span>
</div>
<div className="absolute top-6 right-6">
<button className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur text-white border border-white/40 hover:bg-white hover:text-neutral-900 hover:scale-110 transition-all duration-300">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="absolute bottom-6 left-6 right-6">
<h3 className="text-2xl font-semibold text-white tracking-tight mb-2 group-hover:scale-105 transition-transform duration-300">Norwegian Fjords</h3>
<p className="text-sm text-white/90 mb-3">Majestic natural wonders await</p>
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-white">From $2,799</span>
<div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-neutral-900 group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-110 transition-all duration-300">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</div>
</div>
</article>

<article className="overflow-hidden bg-center hover:scale-[1.02] hover:shadow-2xl transition-all duration-500 group cursor-pointer min-h-[400px] bg-cover border-neutral-200 border rounded-2xl relative bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c317dfd8-d480-4050-8248-4c3f34ce95e9_800w.webp)] hover:border-indigo-300" style={{animation: '0.8s ease-out 0.7s 1 normal both running slideInUp'}}>
<div className="group-hover:from-black/80 transition-all duration-300 bg-gradient-to-t from-black/70 via-black/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-6 left-6">
<span className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur text-xs font-medium text-white border border-white/40">9 Experiences</span>
</div>
<div className="absolute top-6 right-6">
<button className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur text-white border border-white/40 hover:bg-white hover:text-neutral-900 hover:scale-110 transition-all duration-300">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="absolute bottom-6 left-6 right-6">
<h3 className="text-2xl font-semibold text-white tracking-tight mb-2 group-hover:scale-105 transition-transform duration-300">Tokyo, Japan</h3>
<p className="text-sm text-white/90 mb-3">Modern marvels meet ancient traditions</p>
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-white">From $2,199</span>
<div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-neutral-900 group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-110 transition-all duration-300">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</div>
</div>
</article><article className="overflow-hidden bg-center hover:scale-[1.02] hover:shadow-2xl transition-all duration-500 group cursor-pointer min-h-[400px] bg-cover border-neutral-200 border rounded-2xl relative bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/31a54947-a7fb-4002-8f53-c3c0ec770f03_800w.webp)] hover:border-indigo-300" style={{animation: '0.8s ease-out 0.7s 1 normal both running slideInUp'}}>
<div className="group-hover:from-black/80 transition-all duration-300 bg-gradient-to-t from-black/70 via-black/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-6 left-6">
<span className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur text-xs font-medium text-white border border-white/40">9 Experiences</span>
</div>
<div className="absolute top-6 right-6">
<button className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur text-white border border-white/40 hover:bg-white hover:text-neutral-900 hover:scale-110 transition-all duration-300">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="absolute bottom-6 left-6 right-6">
<h3 className="group-hover:scale-105 transition-transform duration-300 text-2xl font-semibold text-white tracking-tight mb-2">Rome, Italy</h3>
<p className="text-sm text-white/90 mb-3">Ancient wonders and timeless beauty</p>
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-white">From $2,379</span>
<div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-neutral-900 group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-110 transition-all duration-300">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg>
</div>
</div>
</div>
</article><article className="overflow-hidden bg-center hover:scale-[1.02] hover:shadow-2xl transition-all duration-500 group cursor-pointer min-h-[400px] bg-cover border-neutral-200 border rounded-2xl relative bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b3b5fd67-290c-4efa-bbaf-62073402721d_800w.webp)] hover:border-indigo-300" style={{animation: '0.8s ease-out 0.7s 1 normal both running slideInUp'}}>
<div className="group-hover:from-black/80 transition-all duration-300 bg-gradient-to-t from-black/70 via-black/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-6 left-6">
<span className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur text-xs font-medium text-white border border-white/40">9 Experiences</span>
</div>
<div className="absolute top-6 right-6">
<button className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur text-white border border-white/40 hover:bg-white hover:text-neutral-900 hover:scale-110 transition-all duration-300">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="absolute bottom-6 left-6 right-6">
<h3 className="group-hover:scale-105 transition-transform duration-300 text-2xl font-semibold text-white tracking-tight mb-2">Bangkok, Thailand</h3>
<p className="text-sm text-white/90 mb-3">Vibrant streets, temples, and night markets</p>
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-white">From $1,599</span>
<div className="inline-flex group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-110 transition-all duration-300 text-neutral-900 bg-white w-10 h-10 rounded-full items-center justify-center">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg>
</div>
</div>
</div>
</article>

<article className="md:col-span-2 lg:col-span-2 overflow-hidden bg-center hover:scale-[1.02] hover:shadow-2xl transition-all duration-500 group cursor-pointer min-h-[400px] bg-cover border-neutral-200 border rounded-2xl relative bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/18ae237d-6c3d-4f61-aaaa-d00113ae5b20_1600w.webp)] hover:border-indigo-300" style={{animation: '0.8s ease-out 0.8s 1 normal both running slideInUp'}}>
<div className="group-hover:from-black/80 transition-all duration-300 bg-gradient-to-t from-black/70 via-black/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-6 left-6 flex items-center gap-3">
<span className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-xs font-medium text-neutral-900 border border-neutral-300 group-hover:bg-amber-50 group-hover:border-amber-300 group-hover:text-amber-700 transition-all duration-300">Trending</span>
<span className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur text-xs font-medium text-white border border-white/40">18 Experiences</span>
</div>
<div className="absolute top-6 right-6">
<button className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur text-white border border-white/40 hover:bg-white hover:text-neutral-900 hover:scale-110 transition-all duration-300">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="absolute bottom-6 left-6 right-6">
<div className="flex items-start justify-between gap-4">
<div className="flex-1">
<h3 className="group-hover:scale-105 transition-transform duration-300 text-3xl font-semibold text-white tracking-tight mb-2">Singapore</h3>
<p className="text-sm text-white/90 mb-3">Futuristic skyline and lush green escapes</p>
<div className="flex gap-4 text-xs text-white/80 gap-x-4 gap-y-4 items-center">
<div className="flex items-center gap-1.5">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20M2 12h20"></path></svg>
<span className="">10-16 days</span>
</div>
<div className="flex items-center gap-1.5">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
<span className="">From $1,899</span>
</div>
</div>
</div>
<button className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-neutral-900 hover:bg-indigo-600 hover:text-white hover:scale-110 transition-all duration-300 flex-shrink-0" style={{}}>
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</article>
</div>
<div className="mt-10 text-center" style={{animation: 'fadeInUp 0.8s ease-out 1s both'}}>
<button className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800 hover:scale-105 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 active:scale-95">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<span className="">Explore All Destinations</span>
</button>
</div>
</section><section className="sm:p-8 bg-neutral-50 max-w-7xl border-neutral-200 border rounded-3xl mt-20 pt-6 pr-6 pb-6 pl-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] hover:shadow-xl hover:scale-[1.02] transition-all duration-500" style={{animation: 'slideUp 0.8s ease-out'}}>
<div className="text-center mb-12" style={{animation: 'fadeInUp 0.8s ease-out 0.2s both'}}>
<span className="text-sm font-normal text-neutral-500 transition-colors duration-300 hover:text-indigo-600">Flexible pricing</span>
<h2 className="sm:text-6xl lg:text-7xl hover:bg-gradient-to-r hover:from-indigo-600 hover:to-indigo-400 hover:bg-clip-text hover:text-transparent transition-all duration-500 animate-fade-in-up text-5xl font-normal text-neutral-900 tracking-tight" style={{}}>
      Choose your journey
    </h2>
<p className="mt-4 text-sm text-neutral-600 max-w-2xl mx-auto">
      Transparent pricing for every type of adventure. No hidden fees, just unforgettable experiences.
    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<article className="relative overflow-hidden bg-white border-neutral-200 border rounded-2xl p-8 hover:shadow-xl hover:scale-105 hover:border-blue-300 transition-all duration-500 hover:-translate-y-2 group" style={{animation: 'slideInUp 0.8s ease-out 0.4s both'}}>
<div className="mb-6">
<div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600 border border-blue-200 group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300 mb-4">
<svg className="lucide lucide-compass h-6 w-6" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<h3 className="text-2xl font-semibold text-neutral-900 tracking-tight">Explorer</h3>
<p className="mt-2 text-sm text-neutral-600">Perfect for first-time travelers</p>
</div>
<div className="mb-6">
<div className="flex items-baseline gap-1">
<span className="text-5xl font-semibold text-neutral-900 tracking-tight">$899</span>
<span className="text-sm text-neutral-500">/person</span>
</div>
<p className="mt-1 text-xs text-neutral-500">5-day adventure</p>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm text-neutral-700">
<svg className="lucide lucide-check h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '2'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">Curated itinerary with 3 destinations</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-700">
<svg className="lucide lucide-check h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '2'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">Standard accommodation</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-700">
<svg className="lucide lucide-check h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '2'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">Ground transportation</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-700">
<svg className="lucide lucide-check h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '2'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">Basic travel insurance</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-700">
<svg className="lucide lucide-check h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '2'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>24/7 support</span>
</li>
</ul>
<button className="w-full inline-flex items-center justify-center gap-2 h-11 px-4 rounded-xl bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 hover:scale-105 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 active:scale-95 group">
<span>Start Exploring</span>
<svg className="lucide lucide-arrow-right h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</article>

<article className="relative overflow-hidden bg-gradient-to-br border-2 rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:-translate-y-2 group from-indigo-50 border-indigo-200 to-indigo-50" style={{animation: 'slideInUp 0.8s ease-out 0.5s both'}}>
<div className="absolute top-4 right-4">
<span className="inline-flex items-center gap-1 text-xs font-medium text-white bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full px-3 py-1">
<svg className="lucide lucide-sparkles h-3 w-3" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '2'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
          Popular
        </span>
</div>
<div className="mb-6">
<div className="inline-flex group-hover:scale-110 transition-all duration-300 text-white bg-gradient-to-br from-indigo-400 to-indigo-600 w-12 h-12 rounded-full mb-4 items-center justify-center">
<svg className="lucide lucide-map h-6 w-6" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
</div>
<h3 className="text-2xl font-semibold text-neutral-900 tracking-tight">Adventurer</h3>
<p className="mt-2 text-sm text-neutral-600">Most popular for groups</p>
</div>
<div className="mb-6">
<div className="flex items-baseline gap-1">
<span className="text-5xl font-semibold text-neutral-900 tracking-tight">$1,599</span>
<span className="text-sm text-neutral-500">/person</span>
</div>
<p className="mt-1 text-xs text-neutral-500">10-day adventure</p>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm text-neutral-700">
<svg className="lucide lucide-check h-5 w-5 flex-shrink-0 mt-0.5 text-indigo-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '2'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">Curated itinerary with 6 destinations</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-700">
<svg className="lucide lucide-check h-5 w-5 flex-shrink-0 mt-0.5 text-indigo-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '2'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">Premium accommodation</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-700">
<svg className="lucide lucide-check h-5 w-5 flex-shrink-0 mt-0.5 text-indigo-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '2'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">All transportation included</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-700">
<svg className="lucide lucide-check h-5 w-5 flex-shrink-0 mt-0.5 text-indigo-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '2'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">Comprehensive travel insurance</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-700">
<svg className="lucide lucide-check h-5 w-5 flex-shrink-0 mt-0.5 text-indigo-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '2'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">5 guided experiences</span>
</li>
</ul>
<button className="flex gap-2 hover:from-indigo-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-1 active:scale-95 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-indigo-600 w-full max-w-xs rounded-xl pt-3.5 pr-6 pb-3.5 pl-6 shadow-lg gap-x-2 gap-y-2 items-center justify-center" style={{}}>
<span className="">Start Adventure</span>
<svg className="lucide lucide-arrow-right h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</article>

<article className="relative overflow-hidden bg-white border-neutral-200 border rounded-2xl p-8 hover:shadow-xl hover:scale-105 hover:border-amber-300 transition-all duration-500 hover:-translate-y-2 group" style={{animation: '0.8s ease-out 0.6s 1 normal both running slideInUp'}}>
<div className="mb-6">
<div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-50 text-amber-600 border border-amber-200 group-hover:bg-amber-100 group-hover:scale-110 transition-all duration-300 mb-4" style={{}}>
<svg className="lucide lucide-crown h-6 w-6" data-lucide="crown" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>
</div>
<h3 className="text-2xl font-semibold text-neutral-900 tracking-tight">Luxury</h3>
<p className="mt-2 text-sm text-neutral-600">Ultimate premium experience</p>
</div>
<div className="mb-6">
<div className="flex items-baseline gap-1">
<span className="text-5xl font-semibold text-neutral-900 tracking-tight">$3,499</span>
<span className="text-sm text-neutral-500">/person</span>
</div>
<p className="mt-1 text-xs text-neutral-500">14-day adventure</p>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm text-neutral-700">
<svg className="lucide lucide-check h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '2'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Fully customized itinerary</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-700">
<svg className="lucide lucide-check h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '2'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>5-star luxury accommodation</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-700">
<svg className="lucide lucide-check h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '2'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Private transportation &amp; flights</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-700">
<svg className="lucide lucide-check h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '2'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Premium travel insurance</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-700">
<svg className="lucide lucide-check h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '2'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Unlimited guided experiences</span>
</li>
</ul>
<button className="w-full inline-flex items-center justify-center gap-2 h-11 px-4 rounded-xl bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 hover:scale-105 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 active:scale-95 group">
<span>Go Luxury</span>
<svg className="lucide lucide-arrow-right h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</article>
</div>
<div className="mt-12 text-center" style={{animation: 'fadeInUp 0.8s ease-out 0.8s both'}}>
<p className="text-sm text-neutral-600 mb-4">All plans include flexible cancellation up to 30 days before departure</p>
<button className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-50 hover:scale-105 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 active:scale-95">
<svg className="lucide lucide-help-circle h-4 w-4" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
<span className="">Compare All Plans</span>
</button>
</div>
</section><section className="sm:p-8 bg-neutral-50 max-w-7xl border-neutral-200 border rounded-3xl mt-20 pt-6 pr-6 pb-6 pl-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] hover:shadow-xl hover:scale-[1.02] transition-all duration-500" style={{animation: 'slideUp 0.8s ease-out'}}>
<div className="text-center mb-10" style={{animation: 'fadeInUp 0.8s ease-out 0.2s both'}}>
<span className="text-sm font-normal text-neutral-500 transition-colors duration-300 hover:text-indigo-600">Traveler testimonials</span>
<h2 className="sm:text-6xl lg:text-7xl hover:bg-gradient-to-r hover:from-indigo-600 hover:to-indigo-400 hover:bg-clip-text hover:text-transparent transition-all duration-500 animate-fade-in-up text-5xl font-normal text-neutral-900 tracking-tight" style={{}}>
      Stories from our community
    </h2>
<p className="mt-4 text-sm text-neutral-600 max-w-2xl mx-auto">
      Real experiences from travelers who discovered unforgettable moments with Voyage
    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="relative overflow-hidden bg-white border-neutral-200 border rounded-2xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-500 hover:-translate-y-2 group hover:border-indigo-300" style={{animation: 'slideInUp 0.8s ease-out 0.4s both'}}>
<div className="flex items-start gap-3 mb-4">
<img alt="Sarah Mitchell" className="h-12 w-12 rounded-full object-cover border-2 border-neutral-200 transition-all duration-300 group-hover:border-indigo-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e0df7dab-ab96-4b15-807d-cf8b3f74b0b6_320w.webp" style={{}}/>
<div className="flex-1">
<p className="text-sm font-medium text-neutral-900 tracking-tight">Sarah Mitchell</p>
<p className="text-xs text-neutral-500">Solo Traveler</p>
</div>
<div className="flex gap-0.5">
<svg className="lucide lucide-star h-4 w-4 text-yellow-500 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 text-yellow-500 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 text-yellow-500 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 text-yellow-500 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 text-yellow-500 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
<p className="text-sm text-neutral-700 leading-relaxed group-hover:text-neutral-900 transition-colors duration-300">
        "The mountain trekking experience was absolutely breathtaking. Every detail was thoughtfully planned, and the guides were incredibly knowledgeable. I felt safe and inspired throughout the journey."
      </p>
<div className="mt-4 flex items-center gap-2 text-xs text-neutral-500">
<svg className="lucide lucide-map-pin h-3.5 w-3.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span>Swiss Alps, Switzerland</span>
</div>
</article>

<article className="relative overflow-hidden bg-white border-neutral-200 border rounded-2xl p-6 hover:shadow-xl hover:scale-105 hover:border-blue-300 transition-all duration-500 hover:-translate-y-2 group" style={{animation: 'slideInUp 0.8s ease-out 0.5s both'}}>
<div className="flex items-start gap-3 mb-4">
<img alt="Marcus Chen" className="h-12 w-12 rounded-full object-cover border-2 border-neutral-200 group-hover:border-blue-300 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6778595c-aed8-459c-978d-3e10ab041c9f_320w.webp" style={{}}/>
<div className="flex-1">
<p className="text-sm font-medium text-neutral-900 tracking-tight">Marcus Chen</p>
<p className="text-xs text-neutral-500">Adventure Seeker</p>
</div>
<div className="flex gap-0.5">
<svg className="lucide lucide-star h-4 w-4 text-yellow-500 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 text-yellow-500 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 text-yellow-500 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 text-yellow-500 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 text-yellow-500 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
<p className="text-sm text-neutral-700 leading-relaxed group-hover:text-neutral-900 transition-colors duration-300">
        "Island Paradise exceeded all expectations. The beaches were pristine, the accommodations luxurious, and the local experiences authentic. This trip changed my perspective on travel."
      </p>
<div className="mt-4 flex items-center gap-2 text-xs text-neutral-500">
<svg className="lucide lucide-map-pin h-3.5 w-3.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span>Maldives</span>
</div>
</article>

<article className="relative overflow-hidden bg-white border-neutral-200 border rounded-2xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-500 hover:-translate-y-2 group hover:border-indigo-300" style={{animation: 'slideInUp 0.8s ease-out 0.6s both'}}>
<div className="flex items-start gap-3 mb-4">
<img alt="Emma Rodriguez" className="h-12 w-12 rounded-full object-cover border-2 border-neutral-200 transition-all duration-300 group-hover:border-indigo-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/365d77e0-77ae-4e62-bcc1-61f68be58356_320w.webp" style={{}}/>
<div className="flex-1">
<p className="text-sm font-medium text-neutral-900 tracking-tight">Emma Rodriguez</p>
<p className="text-xs text-neutral-500">Culture Enthusiast</p>
</div>
<div className="flex gap-0.5">
<svg className="lucide lucide-star h-4 w-4 text-yellow-500 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 text-yellow-500 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 text-yellow-500 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 text-yellow-500 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 text-yellow-500 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
<p className="text-sm text-neutral-700 leading-relaxed group-hover:text-neutral-900 transition-colors duration-300">
        "The cultural immersion in Kyoto was phenomenal. From traditional tea ceremonies to temple visits, every moment felt authentic and meaningful. Truly a once-in-a-lifetime experience."
      </p>
<div className="mt-4 flex items-center gap-2 text-xs text-neutral-500">
<svg className="lucide lucide-map-pin h-3.5 w-3.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span>Kyoto, Japan</span>
</div>
</article>

<article className="relative overflow-hidden bg-white border-neutral-200 border rounded-2xl p-6 hover:shadow-xl hover:scale-105 hover:border-green-300 transition-all duration-500 hover:-translate-y-2 group" style={{animation: 'slideInUp 0.8s ease-out 0.7s both'}}>
<div className="flex items-start gap-3 mb-4">
<img alt="James Thompson" className="h-12 w-12 rounded-full object-cover border-2 border-neutral-200 group-hover:border-green-300 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e54a682e-0572-4963-acad-3fef8c475181_320w.webp" style={{}}/>
<div className="flex-1">
<p className="text-sm font-medium text-neutral-900 tracking-tight">James Thompson</p>
<p className="text-xs text-neutral-500">Wildlife Photographer</p>
</div>
<div className="flex gap-0.5">
<svg className="lucide lucide-star h-4 w-4 text-yellow-500 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 text-yellow-500 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 text-yellow-500 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 text-yellow-500 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 text-yellow-500 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
<p className="text-sm text-neutral-700 leading-relaxed group-hover:text-neutral-900 transition-colors duration-300">
        "The safari was extraordinary. We saw the Big Five in their natural habitat, and the conservation efforts were truly inspiring. The guides' passion for wildlife was contagious."
      </p>
<div className="mt-4 flex items-center gap-2 text-xs text-neutral-500">
<svg className="lucide lucide-map-pin h-3.5 w-3.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="">Serengeti, Tanzania</span>
</div>
</article>

<article className="relative overflow-hidden bg-white border-neutral-200 border rounded-2xl p-6 hover:shadow-xl hover:scale-105 hover:border-indigo-300 transition-all duration-500 hover:-translate-y-2 group" style={{animation: 'slideInUp 0.8s ease-out 0.8s both'}}>
<div className="flex items-start gap-3 mb-4">
<img alt="Olivia Park" className="h-12 w-12 rounded-full object-cover border-2 border-neutral-200 group-hover:border-indigo-300 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2fa60469-e50c-4fcd-a217-aca7a8d03124_320w.webp" style={{}}/>
<div className="flex-1">
<p className="text-sm font-medium text-neutral-900 tracking-tight">Olivia Park</p>
<p className="text-xs text-neutral-500">Family Traveler</p>
</div>
<div className="flex gap-0.5">
<svg className="lucide lucide-star h-4 w-4 text-yellow-500 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 text-yellow-500 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 text-yellow-500 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 text-yellow-500 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 text-yellow-500 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
<p className="text-sm text-neutral-700 leading-relaxed group-hover:text-neutral-900 transition-colors duration-300">
        "Traveling with kids can be challenging, but Voyage made it seamless. Every activity was family-friendly and educational. Our children still talk about the experience months later!"
      </p>
<div className="mt-4 flex items-center gap-2 text-xs text-neutral-500">
<svg className="lucide lucide-map-pin h-3.5 w-3.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span>Iceland</span>
</div>
</article>

<article className="relative overflow-hidden bg-white border-neutral-200 border rounded-2xl p-6 hover:shadow-xl hover:scale-105 hover:border-orange-300 transition-all duration-500 hover:-translate-y-2 group" style={{animation: '0.8s ease-out 0.9s 1 normal both running slideInUp'}}>
<div className="flex items-start gap-3 mb-4">
<img alt="Daniel Foster" className="h-12 w-12 rounded-full object-cover border-2 border-neutral-200 group-hover:border-orange-300 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/277951f8-da0b-4a19-b86f-cb2c0d3c0b97_320w.webp" style={{}}/>
<div className="flex-1">
<p className="text-sm font-medium text-neutral-900 tracking-tight">Daniel Foster</p>
<p className="text-xs text-neutral-500">Digital Nomad</p>
</div>
<div className="flex gap-0.5">
<svg className="lucide lucide-star h-4 w-4 text-yellow-500 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 text-yellow-500 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 text-yellow-500 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 text-yellow-500 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 text-yellow-500 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
<p className="text-sm text-neutral-700 leading-relaxed group-hover:text-neutral-900 transition-colors duration-300">
        "Perfect blend of work and adventure. The co-working spaces were excellent, and the weekend excursions helped me disconnect and recharge. Highly recommend for remote workers!"
      </p>
<div className="mt-4 flex items-center gap-2 text-xs text-neutral-500">
<svg className="lucide lucide-map-pin h-3.5 w-3.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span>Bali, Indonesia</span>
</div>
</article>
</div>
<div className="mt-10 text-center" style={{animation: 'fadeInUp 0.8s ease-out 1s both'}}>
<button className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800 hover:scale-105 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 active:scale-95">
<span className="">Read More Stories</span>
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</section>

<section className="sm:py-12 max-w-7xl mt-10 mr-auto ml-auto pt-10 pr-0 pb-10 pl-0">
<div className="flex flex-wrap text-gray-950 gap-x-10 gap-y-6 items-center justify-center">
<span className="text-xs font-medium">Trusted by leading travel brands</span>
<div className="w-px text-slate-950 bg-slate-950 h-5"></div>
<span className="text-sm font-medium">TravelPro</span>
<span className="text-sm font-medium">Wanderlust</span>
<span className="text-sm font-medium">Explorer Co</span>
<span className="text-sm font-medium">Journey Plus</span>
</div>
</section>
</main>
</div>
<style>
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-50px); }
    to { opacity: 1; transform: translateX(0); }
  }
  
  @keyframes slideInRight {
    from { opacity: 0; transform: translateX(50px); }
    to { opacity: 1; transform: translateX(0); }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  
  @keyframes floatReverse {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(10px); }
  }
  
  @keyframes gentleBounce {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-5px); }
  }
  
  @keyframes glowPulse {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.6; }
  }
  
  @keyframes ringPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
  
  @keyframes slideUp {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes fadeInLeft {
    from { opacity: 0; transform: translateX(-50px); }
    to { opacity: 1; transform: translateX(0); }
  }
  
  @keyframes slideInUp {
    from { opacity: 0; transform: translateY(60px) scale(0.95); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }
</style>


    </>
  );
}
