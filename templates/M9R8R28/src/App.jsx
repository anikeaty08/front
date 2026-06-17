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
      

<div className="relative w-full overflow-hidden">
<div className="flex w-full mr-auto ml-auto justify-center"></div>
</div>

<section className="relative w-full sm:px-6 md:px-10 max-w-7xl mt-12 mr-auto mb-12 ml-auto pr-4 pl-4">
<div className="relative -mt-2 w-full shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)] bg-white/90 border-neutral-200/70 rounded-[40px] border-t backdrop-blur-xl">
<div className="sm:px-6 md:px-10 pt-8 pr-4 pb-10 pl-4">

<header className="w-full">
<div className="flex gap-4 w-full mb-8 items-center justify-between">
<div className="flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-900 text-white ring-1 ring-black/10">
<svg className="lucide lucide-waves w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="waves" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>
</span>
<span className="text-lg font-semibold text-black tracking-tight font-geist">TROPIX SWIM CLUB</span>
</div>
<nav className="hidden md:flex items-center gap-6 text-sm text-neutral-700">
<a className="hover:text-black transition-colors font-medium font-geist" href="#programs">Programs</a>
<a className="hover:text-black transition-colors font-medium font-geist" href="#coaches">Coaches</a>
<a className="hover:text-black transition-colors font-medium font-geist" href="#documents">Documents</a>
<a className="hover:text-black transition-colors font-medium font-geist" href="#shop">Shop</a>
<a className="hover:text-black transition-colors font-medium font-geist" href="#reviews">Reviews</a>
<a className="hover:text-black transition-colors font-medium font-geist" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-3">
<button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg ring-1 ring-black/20 bg-black text-white hover:bg-neutral-800 transition-colors">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
<button className="group inline-flex gap-3 shadow-stone-800/20 ring-1 ring-neutral-200 transition duration-150 ease-out hover:-translate-y-0.5 text-base font-medium text-white bg-gradient-to-l from-gray-900 to-black rounded-full pt-3 pr-6 pb-3 pl-6 shadow-lg items-center justify-center font-geist">
                Member Portal
              </button>
</div>
</div>
</header>

<h1 className="max-w-3xl sm:text-5xl md:text-6xl lg:text-8xl leading-[1.05] text-4xl text-neutral-900 tracking-tighter font-space-grotesk font-semibold" style={{}}>
          Dive into your best form at 
          
          Harbor Swim Club
        </h1>

<p className="sm:text-lg max-w-[85ch] text-base text-neutral-600 mt-4 font-geist">
          Year-round training and recreational swimming for all ages and levels. Certified coaches, world-class facilities, and a welcoming community—whether you’re learning to float or chasing personal bests.
        </p>

<div className="flex flex-wrap gap-2.5 mt-6">
<span className="inline-flex items-center gap-2 ring-1 ring-neutral-200 text-xs text-slate-950 bg-neutral-200 rounded-full pt-1.5 pr-3 pb-1.5 font-geist">
<svg className="lucide lucide-thermometer-sun w-[14px] h-[14px]" data-lucide="thermometer-sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 9a4 4 0 0 0-2 7.5"></path><path d="M12 3v2"></path><path d="m6.6 18.4-1.4 1.4"></path><path d="M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path><path d="M4 13H2"></path><path d="M6.34 7.34 4.93 5.93"></path></svg>
            Heated 8-lane pool
          </span>
<span className="inline-flex items-center gap-2 ring-1 ring-neutral-200 text-xs text-slate-950 bg-neutral-200 rounded-full pt-1.5 pr-3 pb-1.5 font-geist">
<svg className="lucide lucide-badge-check w-[14px] h-[14px]" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
            Certified coaches
          </span>
<span className="inline-flex items-center gap-2 ring-1 ring-neutral-200 text-xs text-slate-950 bg-neutral-200 rounded-full pt-1.5 pr-3 pb-1.5 font-geist">
<svg className="lucide lucide-users w-[14px] h-[14px]" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
            All ages &amp; levels
          </span>
<span className="inline-flex items-center gap-2 ring-1 ring-neutral-200 text-xs text-slate-950 bg-neutral-200 rounded-full pt-1.5 pr-3 pb-1.5 font-geist">
<svg className="lucide lucide-heart w-[14px] h-[14px]" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
            Family-friendly
          </span>
</div>

<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8">
<a className="group inline-flex items-center justify-center gap-3 shadow-stone-800/20 ring-1 ring-neutral-200 transition duration-150 ease-out hover:-translate-y-0.5 text-base font-medium text-white font-geist bg-zinc-800 rounded-full pt-3 pr-6 pb-3 pl-6 shadow-lg" href="#booking">Book Your First Splash<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/25">
<svg className="lucide lucide-arrow-big-right w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="arrow-big-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11 9a1 1 0 0 0 1-1V5.061a1 1 0 0 1 1.811-.75l6.836 6.836a1.207 1.207 0 0 1 0 1.707l-6.836 6.835a1 1 0 0 1-1.811-.75V16a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z"></path></svg>
</span></a>
<a className="inline-flex items-center justify-center text-base font-medium text-neutral-800 bg-neutral-100/60 border border-neutral-200 rounded-full px-6 py-3 hover:bg-neutral-100 font-geist" href="#programs">
            View programs
          </a>
</div>

<section className="sm:p-8 bg-zinc-900 border-zinc-800 border rounded-3xl mt-8 pt-6 pr-6 pb-6 pl-6" style={{position: 'relative', overflow: 'hidden'}}>

<div className="absolute inset-0 opacity-10 pointer-events-none">
<div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent"></div>
<div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent"></div>
<div className="absolute top-0 bottom-0 left-1/3 w-px bg-gradient-to-b from-transparent via-zinc-600 to-transparent"></div>
<div className="absolute top-0 bottom-0 right-1/3 w-px bg-gradient-to-b from-transparent via-zinc-600 to-transparent"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-start relative z-10">

<div className="flex flex-col justify-between min-h-full">
<div className="">
<span className="text-sm font-normal text-zinc-500 font-geist">About the club</span>
<h2 className="text-[44px] sm:text-6xl lg:text-7xl leading-[0.9] text-zinc-100 mt-2 tracking-tight font-space-grotesk font-semibold" style={{}}>Swim better, together.</h2>
<div className="mt-8 relative">
<div className="absolute inset-0 flex items-center">
<div className="w-full h-px bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800"></div>
</div>
<div className="hidden sm:grid grid-cols-3 gap-6 text-zinc-600 bg-zinc-900 px-4 relative">
<div className="flex items-center gap-2">
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="text-sm font-normal text-slate-50 font-geist">Technique-first coaching</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-plus w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5px', width: '16px', height: '16px', color: 'rgb(82, 82, 91)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="text-sm font-normal text-slate-50 font-geist">Structured programs</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="text-sm font-normal text-slate-50 font-geist">Inclusive community</span>
</div>
</div>
</div>
</div>
<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
<div className="">
<p className="text-sm text-zinc-100 font-medium tracking-tight font-geist">Progress with purpose</p>
<p className="mt-1 text-sm text-zinc-400 font-geist">From fundamentals to elite racing, our pathways and session plans help swimmers build confidence, efficiency, and endurance.</p>
<a className="mt-4 inline-flex items-center gap-2 h-10 px-4 rounded-full bg-zinc-100 text-zinc-900 text-sm font-normal hover:bg-zinc-200 transition font-geist" href="#programs">
                    Explore programs
                    <span className="inline-flex h-2 w-2 rounded-full bg-zinc-900"></span>
</a>
</div>
<div className="relative">
<div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-700 to-transparent sm:block hidden"></div>
<p className="text-base text-zinc-300 leading-relaxed sm:text-right sm:pl-8 font-geist">
                    Our coaching team blends <span className="font-medium text-zinc-100 font-geist">years of competitive experience</span> with a supportive approach that brings out your best.
                  </p>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 relative" id="coaches">

<article className="relative overflow-hidden h-[200px] bg-center bg-gradient-to-br from-zinc-800 to-zinc-900 bg-[url(https://images.unsplash.com/photo-1612957753858-3ed536c929d1?w=800&amp;q=80)] bg-cover border-zinc-800 border rounded-2xl" style={{}}>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100/90 text-zinc-900 border border-zinc-700">
<svg className="lucide lucide-user w-[14px] h-[14px]" data-icon-replaced="true" data-lucide="star" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', color: 'rgb(24, 24, 27)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-zinc-900/60 backdrop-blur text-[11px] text-zinc-300 font-normal border border-zinc-800 font-geist">Head Coach</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight font-geist">Alex Morgan</p>
</div>
</article>

<article className="relative overflow-hidden h-[200px] bg-center bg-gradient-to-br from-zinc-800 to-zinc-900 bg-[url(https://images.unsplash.com/photo-1559074087-b2c54acb76a3?w=800&amp;q=80)] bg-cover border-zinc-800 border rounded-2xl" style={{}}>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100/90 text-zinc-900 border border-zinc-700">
<svg className="lucide lucide-activity w-[14px] h-[14px]" data-icon-replaced="true" data-lucide="star" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', color: 'rgb(24, 24, 27)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-zinc-900/60 backdrop-blur text-[11px] text-zinc-300 font-normal border border-zinc-800 font-geist">Strength &amp; Conditioning</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight font-geist">Jordan Lee</p>
</div>
</article>

<article className="relative overflow-hidden h-[200px] bg-center bg-gradient-to-br from-zinc-800 to-zinc-900 bg-[url(https://images.unsplash.com/photo-1593215261340-ca189da98636?w=800&amp;q=80)] bg-cover border-zinc-800 border rounded-2xl" style={{}}>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100/90 text-zinc-900 border border-zinc-700">
<svg className="lucide lucide-user lucide-baby w-[14px] h-[14px]" data-icon-replaced="true" data-lucide="star" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', color: 'rgb(24, 24, 27)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-zinc-900/60 backdrop-blur text-[11px] text-zinc-300 font-normal border border-zinc-800 font-geist">Learn-to-Swim</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight font-geist">Taylor Brooks</p>
</div>
</article>

<article className="relative overflow-hidden h-[200px] bg-center bg-gradient-to-br from-zinc-800 to-zinc-900 bg-[url(https://images.unsplash.com/photo-1727896910189-0fab56a44d5a?w=800&amp;q=80)] bg-cover border-zinc-800 border rounded-2xl" style={{}}>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100/90 text-zinc-900 border border-zinc-700">
<svg className="lucide lucide-medal w-[14px] h-[14px]" data-icon-replaced="true" data-lucide="star" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', color: 'rgb(24, 24, 27)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-zinc-900/60 backdrop-blur text-[11px] text-zinc-300 font-normal border border-zinc-800 font-geist">Masters / Tri</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight font-geist">Casey Nguyen</p>
</div>
</article>
</div>
</div>
</section>
</div>
</div>
</section>

<section className="mt-10" id="portfolio">
<div className="flex sm:mb-8 mb-6 items-end justify-between">
<div className="">
<p className="text-[11px] sm:text-xs tracking-widest text-neutral-500 uppercase font-geist">(03) Selected Work</p>
<h3 className="mt-2 text-2xl sm:text-3xl tracking-tight font-geist font-medium" style={{}}>A few projects I'm proud of.</h3>
</div>
<a className="hidden sm:inline-flex items-center gap-2 ring-1 ring-neutral-200 hover:shadow text-sm text-neutral-700 font-geist bg-white rounded-full pt-2 pr-4 pb-2 pl-4" href="#work">
          View Portfolio
          <svg className="lucide lucide-arrow-up-right w-[24px] h-[16px]" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '16px', color: 'rgb(64, 64, 64)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M7 7h10v10"></path><path className="" d="M7 17 17 7"></path></svg>
</a>
</div>
<section className="w-full sm:px-6 md:px-10 max-w-7xl mr-auto ml-auto pt-12 pr-4 pb-6 pl-4">
<div className="flex sm:mb-8 mb-6 items-end justify-between">
<div className="">
<p className="text-[11px] sm:text-xs uppercase text-neutral-500 tracking-[0.2em]">(01) La Carta</p>
<h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight font-playfair">Signature dishes we're passionate about.</h2>
</div>
<a className="hidden sm:inline-flex items-center gap-2 ring-1 ring-neutral-200 hover:shadow text-sm text-neutral-700 bg-white rounded-full px-4 py-2" href="#menu">
                Full menu
                <svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M7 7h10v10"></path><path className="" d="M7 17 17 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">

<div className="group relative overflow-hidden ring-1 ring-neutral-200 cursor-pointer bg-white rounded-3xl shadow-sm h-80">
<img alt="Risotto alla Milanese" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://cdn.midjourney.com/2eebbbc6-df55-4d9e-8b34-ad25cbc1ed0a/0_0.png?w=800&amp;q=80" style={{}}/>
<div className="absolute inset-0 opacity-100 group-hover:opacity-0 transition-opacity duration-300 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-white/70">Primo • Risotto</p>
<div className="mt-1 flex items-center justify-between">
<h3 className="sm:text-lg text-base font-semibold text-white tracking-tight">Risotto alla Milanese</h3>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M5 12h14"></path><path className="" d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</div>

<div className="group relative overflow-hidden ring-1 ring-neutral-200 cursor-pointer bg-white rounded-3xl shadow-sm h-80">
<img alt="Pizza Margherita" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://cdn.midjourney.com/3b8ab5be-cc27-4162-bc9f-d6937e463e58/0_0.png?w=800&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-white/70">Pizza • Classica</p>
<div className="mt-1 flex items-center justify-between">
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-white">Pizza Margherita</h3>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M5 12h14"></path><path className="" d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</div>

<div className="group relative overflow-hidden ring-1 ring-neutral-200 cursor-pointer bg-white rounded-3xl shadow-sm h-80">
<img alt="Pasta Carbonara" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://cdn.midjourney.com/87c2476e-c102-40c7-aec2-a866e606cf9f/0_0.png?w=800&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-white/70">Pasta • Romano</p>
<div className="mt-1 flex items-center justify-between">
<h3 className="sm:text-lg text-base font-semibold text-white tracking-tight">Carbonara Classica</h3>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M5 12h14"></path><path className="" d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</div>
</div>
<div className="mt-8 sm:mt-10 flex justify-center">
<a className="inline-flex items-center gap-2 rounded-full bg-white ring-1 ring-neutral-200 px-5 py-3 text-sm text-neutral-700 hover:shadow" href="#menu">
                View complete menu
                <svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M7 7h10v10"></path><path className="" d="M7 17 17 7"></path></svg>
</a>
</div>
</section>
<div className="mt-8 sm:mt-10 flex justify-center">
<a className="inline-flex items-center gap-2 rounded-full bg-white ring-1 ring-neutral-200 px-5 py-3 text-sm text-neutral-700 hover:shadow font-geist" href="#work">
          View All Work
          <svg className="lucide lucide-arrow-up-right w-[24px] h-[16px]" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '16px', color: 'rgb(64, 64, 64)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M7 7h10v10"></path><path className="" d="M7 17 17 7"></path></svg>
</a>
</div>
</section>

<section className="relative z-10 max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pt-8 pr-4 pb-20 pl-4">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
<div className="">
<p className="text-sm font-medium text-neutral-500 font-geist">What sets us apart</p>
<h2 className="sm:text-4xl md:text-5xl text-3xl text-neutral-900 tracking-tight font-space-grotesk font-semibold" style={{}}>Facilities, coaching, and community.</h2>
<p className="sm:text-lg max-w-[85ch] text-base text-neutral-600 mt-4 font-geist">Clean, modern spaces, flexible schedules, and a supportive team dedicated to your safety and progress.</p>
</div>
</div>
<div className="grid gap-6 md:grid-cols-3">

<div className="group relative overflow-hidden md:col-span-2 md:row-span-2 bg-zinc-900 border-white/10 border rounded-2xl cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/20">
<div className="relative overflow-hidden">
<img alt="Indoor heated pool facility" className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80" style={{}}/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/50"></div>
</div>
<div className="pt-5 pr-5 pb-5 pl-5 sm:p-6">
<div className="flex items-center gap-2">
<span className="inline-flex items-center text-[11px] font-medium text-slate-50 bg-slate-50/5 border-slate-50/10 border rounded-full pt-0.5 pr-2 pb-0.5 pl-2 font-geist">
              INDOOR
            </span>
<span className="text-xs text-white/60 font-geist">Year-round comfort</span>
</div>
<h3 className="mt-3 text-2xl sm:text-3xl tracking-tight text-white font-space-grotesk font-semibold" style={{}}>Heated 25m pool with adjustable lanes</h3>
<p className="mt-2 text-sm sm:text-base text-white/70 font-geist">From open fitness lanes to squad sessions, our pool configuration adapts to your training needs while maintaining optimal water quality and temperature.</p>
<div className="mt-5 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 text-sm font-medium text-black bg-cyan-300 rounded-lg px-4 py-2 hover:bg-cyan-200 transition-all duration-300 hover:scale-105 hover:shadow-lg font-geist" href="#booking">
<svg className="lucide lucide-calendar-check h-4 w-4" data-lucide="calendar-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
              Book a lane
            </a>
<a className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur hover:bg-white/10 transition-all duration-300 hover:scale-105 font-geist" href="#programs">
<svg className="lucide lucide-list-checks h-4 w-4" data-lucide="list-checks" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m3 17 2 2 4-4"></path><path d="m3 7 2 2 4-4"></path><path d="M13 6h8"></path><path d="M13 12h8"></path><path d="M13 18h8"></path></svg>
              View schedule
            </a>
</div>
</div>
</div>

<div className="group sm:p-8 bg-zinc-900 border-zinc-800 border rounded-3xl mt-0 pt-6 pr-6 pb-6 pl-6 cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-zinc-800/80 hover:shadow-xl">
<div className="sm:p-6 md:p-8 bg-white/5 border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20">
<div className="flex items-center justify-between">
<h3 className="text-xl font-medium tracking-tight text-white flex items-center gap-2 font-geist">
              Evidence-based coaching
            </h3>
<span className="inline-flex items-center text-[11px] font-medium text-slate-50 bg-slate-50/5 border-slate-50/10 border rounded-full pt-0.5 pr-2 pb-0.5 pl-2 font-geist">FORM</span>
</div>
<p className="mt-2 text-sm text-white/70 font-geist">Video analysis, drills, and progressive sets that reinforce efficient technique for faster, safer swimming.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10 transition-all duration-300 group-hover:border-white/20">
<img alt="Coach providing feedback" className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80" style={{}}/>
</div>
</div>
</div>

<div className="group sm:p-8 bg-zinc-900 border-zinc-800 border rounded-3xl mt-8 pt-6 pr-6 pb-6 pl-6 cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-zinc-800/80 hover:shadow-xl">
<div className="sm:p-6 md:p-8 bg-white/5 border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20">
<div className="flex items-center justify-between">
<h3 className="text-xl font-medium tracking-tight text-white flex items-center gap-2 font-geist">
              Safety-first environment
            </h3>
<span className="inline-flex items-center text-[11px] font-medium text-slate-50 bg-slate-50/5 border-slate-50/10 border rounded-full pt-0.5 pr-2 pb-0.5 pl-2 font-geist">LIFEGUARDED</span>
</div>
<p className="mt-2 text-sm text-white/70 font-geist">Certified lifeguards on duty, clear lane etiquette, and safeguarding policies to protect members of all ages.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10 transition-all duration-300 group-hover:border-white/20">
<img alt="Lifeguard station" className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80" style={{}}/>
</div>
</div>
</div>

<div className="group sm:p-8 bg-zinc-900 border-zinc-800 border rounded-3xl mt-8 pt-6 pr-6 pb-6 pl-6 cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-zinc-800/80 hover:shadow-xl">
<div className="sm:p-6 md:p-8 bg-white/5 border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20">
<h3 className="text-lg font-medium tracking-tight text-white flex items-center gap-2 font-geist">
            Community &amp; events
            <span className="ml-2 inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/15 px-2 py-0.5 text-[11px] font-medium text-cyan-300 font-geist">SOCIAL</span>
</h3>
<p className="mt-2 text-sm text-white/70 font-geist">Club nights, time trials, workshops, and family swim events throughout the year.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10 transition-all duration-300 group-hover:border-white/20">
<img alt="Swim event crowd" className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80" style={{}}/>
</div>
</div>
</div>

<div className="group sm:p-8 bg-zinc-900 border-zinc-800 border rounded-3xl mt-8 pt-6 pr-6 pb-6 pl-6 cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-zinc-800/80 hover:shadow-xl">
<div className="sm:p-6 md:p-8 bg-white/5 border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20">
<h3 className="text-lg font-medium tracking-tight text-white flex items-center gap-2 font-geist">
            Clean, modern amenities
          </h3>
<p className="mt-2 text-sm text-white/70 font-geist">Family changing areas, accessible showers, and secure lockers with digital keys.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-white/10 transition-all duration-300 group-hover:border-white/20">
<img alt="Modern locker room" className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80" style={{}}/>
</div>
</div>
</div>
</div>
</section>

<section className="w-full sm:px-6 md:px-10 max-w-7xl mr-auto ml-auto pt-12 pr-4 pb-10 pl-4" id="booking">
<div className="relative overflow-hidden bg-neutral-900 rounded-3xl">
<div className="relative z-10 sm:p-12 md:p-16 pt-12 pr-8 pb-8 pl-8">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-8 border-white/10 border-b pb-12">
<div className="lg:col-span-4">
<div className="flex items-center gap-2 mb-4">
<svg className="lucide lucide-swiss-franc" data-lucide="swiss-franc" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{display: 'none'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 21V3h8"></path><path d="M6 16h9"></path><path d="M10 9.5h7"></path></svg>
<svg className="lucide lucide-waves w-5 h-5 text-white/80" data-lucide="waves" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>
<h3 className="text-2xl text-white tracking-tight font-space-grotesk font-semibold" style={{}}>Book a Swim Session</h3>
</div>
<p className="max-w-3xl text-white/70 font-geist">Reserve lanes, join a class, or schedule a 1:1. Pick your program, choose a time, and you’re all set.</p>
<div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 md:p-8">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="space-y-4">
<div className="inline-flex items-center gap-2 ring-1 ring-neutral-200 text-xs text-slate-950 bg-neutral-200 rounded-full pt-1.5 pr-3 pb-1.5 pl-3 font-geist">
<span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse"></span>
                    Slots available today
                  </div>
<h4 className="text-white font-semibold tracking-tight font-geist">How it works</h4>
<ul className="space-y-2 text-sm text-neutral-300">
<li className="flex items-start gap-2">
<svg className="lucide lucide-check w-4 h-4 text-green-400 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-geist">Select program and swimmers</span>
</li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check w-4 h-4 text-green-400 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-geist">Pick date, time, and lane preference</span>
</li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check w-4 h-4 text-green-400 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-geist">Get confirmation by email</span>
</li>
</ul>
<div className="flex items-center gap-3 pt-2 text-sm">
<a className="inline-flex items-center gap-2 text-white hover:text-cyan-300 transition font-geist" href="tel:+1234567890">
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                      +1 (234) 567‑8900
                    </a>
</div>

<div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center justify-between mb-2">
<span className="text-white/80 text-sm font-medium font-geist">Today’s occupancy</span>
<span className="text-white/60 text-xs font-geist">7:00–21:00</span>
</div>
<div>
<div>
<canvas height="120" id="occupancyChart"></canvas>
</div>
</div>
</div>
</div>

<form className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="sm:col-span-1">
<label className="block text-xs font-medium text-white/80 mb-1 font-geist">Program</label>
<select className="w-full appearance-none outline-none focus:ring-2 focus:ring-cyan-400/60 focus:border-cyan-300 transition text-sm text-white bg-white/10 border-white/10 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3" required="">
<option className="bg-neutral-900 font-geist" value="lane">Lane Swim</option>
<option className="bg-neutral-900 font-geist" value="learn">Learn to Swim</option>
<option className="bg-neutral-900 font-geist" value="masters">Masters &amp; Tri</option>
<option className="bg-neutral-900 font-geist" value="private">Private Coaching</option>
</select>
</div>
<div className="sm:col-span-1">
<label className="block text-xs font-medium text-white/80 mb-1 font-geist">Swimmers</label>
<select className="w-full appearance-none outline-none focus:ring-2 focus:ring-cyan-400/60 focus:border-cyan-300 transition text-sm text-white bg-white/10 border-white/10 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3" required="">
<option className="bg-neutral-900 font-geist" value="1">1 swimmer</option>
<option className="bg-neutral-900 font-geist" value="2">2 swimmers</option>
<option className="bg-neutral-900 font-geist" value="3">3 swimmers</option>
<option className="bg-neutral-900 font-geist" value="4">4 swimmers</option>
</select>
</div>
<div className="sm:col-span-1">
<label className="block text-xs font-medium text-white/80 mb-1 font-geist">Skill level</label>
<select className="w-full appearance-none outline-none focus:ring-2 focus:ring-cyan-400/60 focus:border-cyan-300 transition text-sm text-white bg-white/10 border-white/10 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3">
<option className="bg-neutral-900 font-geist">Beginner</option>
<option className="bg-neutral-900 font-geist">Intermediate</option>
<option className="bg-neutral-900 font-geist">Advanced</option>
</select>
</div>
<div className="sm:col-span-1">
<label className="block text-xs font-medium text-white/80 mb-1 font-geist">Date &amp; Time</label>
<input className="w-full outline-none focus:ring-2 focus:ring-cyan-400/60 focus:border-cyan-300 transition text-sm text-white bg-white/10 border-white/10 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3" required="" type="datetime-local"/>
</div>
<div className="sm:col-span-1">
<label className="block text-xs font-medium text-white/80 mb-1 font-geist">Lane preference</label>
<select className="w-full appearance-none outline-none focus:ring-2 focus:ring-cyan-400/60 focus:border-cyan-300 transition text-sm text-white bg-white/10 border-white/10 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3">
<option className="bg-neutral-900 font-geist">No preference</option>
<option className="bg-neutral-900 font-geist">Fast lane</option>
<option className="bg-neutral-900 font-geist">Medium lane</option>
<option className="bg-neutral-900 font-geist">Recreational lane</option>
</select>
</div>
<div className="sm:col-span-1">
<label className="block text-xs font-medium text-white/80 mb-1 font-geist">Coach (optional)</label>
<select className="w-full appearance-none outline-none focus:ring-2 focus:ring-cyan-400/60 focus:border-cyan-300 transition text-sm text-white bg-white/10 border-white/10 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3">
<option className="bg-neutral-900 font-geist">Any available</option>
<option className="bg-neutral-900 font-geist">Alex Morgan</option>
<option className="bg-neutral-900 font-geist">Jordan Lee</option>
<option className="bg-neutral-900 font-geist">Taylor Brooks</option>
<option className="bg-neutral-900 font-geist">Casey Nguyen</option>
</select>
</div>
<div className="sm:col-span-2">
<label className="block text-xs font-medium text-white/80 mb-1 font-geist">Notes</label>
<textarea className="w-full placeholder-white/40 outline-none focus:ring-2 focus:ring-cyan-400/60 focus:border-cyan-300 transition text-sm text-white bg-white/10 border-white/10 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3" placeholder="Goals, recent injuries, accessibility needs..." rows="3"></textarea>
</div>
<div className="sm:col-span-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 justify-end">
<a className="inline-flex gap-2 ring-1 ring-white/20 hover:bg-white/10 transition text-sm font-medium text-white bg-white/5 rounded-xl pt-2.5 pr-4 pb-2.5 pl-4 items-center font-geist" href="mailto:bookings@harborswimclub.com">
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
                      Email us
                    </a>
<button className="inline-flex gap-2 ring-1 ring-cyan-300 hover:bg-cyan-300 transition text-sm font-medium text-neutral-900 bg-cyan-400 rounded-xl pt-2.5 pr-4 pb-2.5 pl-4 shadow items-center font-geist" type="submit">
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                      Confirm booking
                    </button>
</div>
</form>
</div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center gap-3 border-white/10 border-t mt-10 pt-6 items-start justify-between">
<p className="text-white/60 text-sm font-geist">Open daily • Weekdays 5:30–22:00 • Weekends 7:00–20:00</p>
<div className="flex items-center gap-4 text-white/60 text-sm">
<span className="font-geist">123 Marina Lane, Bayside</span>
<span className="hidden sm:block text-white/20 font-geist">•</span>
<span className="font-geist">Free parking • Accessible</span>
</div>
</div>
</div>
</div>
</div>

</div>
</section>

<section className="w-full sm:px-6 md:px-10 max-w-7xl mr-auto ml-auto pt-6 pr-4 pb-6 pl-4" id="documents">
<div className="flex items-end justify-between mb-6 sm:mb-8">
<div className="">
<p className="text-[11px] sm:text-xs uppercase text-neutral-500 tracking-[0.2em] font-geist">(02) Documents</p>
<h2 className="mt-2 text-2xl sm:text-3xl tracking-tight font-space-grotesk font-semibold" style={{}}>Important club documents.</h2>
<p className="text-neutral-600 mt-2 font-geist">Policies, forms, and schedules available for download.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<a className="group flex items-center justify-between rounded-2xl border border-neutral-200 bg-white p-4 hover:shadow-sm" href="#">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 ring-1 ring-neutral-200">
<svg className="lucide lucide-sticky-note w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="sticky-note" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(23, 23, 23)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"></path><path d="M15 3v4a2 2 0 0 0 2 2h4"></path></svg>
</span>
<div className="">
<p className="text-sm font-medium font-geist">Club Constitution</p>
<p className="text-xs text-neutral-500 font-geist">PDF • 284 KB</p>
</div>
</div>
<svg className="lucide lucide-download w-4 h-4 text-neutral-400 group-hover:text-neutral-700" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</a>
<a className="group flex items-center justify-between rounded-2xl border border-neutral-200 bg-white p-4 hover:shadow-sm" href="#">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 ring-1 ring-neutral-200">
<svg className="lucide lucide-sticky-note w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="sticky-note" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(23, 23, 23)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"></path><path d="M15 3v4a2 2 0 0 0 2 2h4"></path></svg>
</span>
<div className="">
<p className="text-sm font-medium font-geist">Safeguarding Policy</p>
<p className="text-xs text-neutral-500 font-geist">PDF • 612 KB</p>
</div>
</div>
<svg className="lucide lucide-download w-4 h-4 text-neutral-400 group-hover:text-neutral-700" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</a>
<a className="group flex items-center justify-between rounded-2xl border border-neutral-200 bg-white p-4 hover:shadow-sm" href="#">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 ring-1 ring-neutral-200">
<svg className="lucide lucide-sticky-note w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="sticky-note" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(23, 23, 23)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"></path><path d="M15 3v4a2 2 0 0 0 2 2h4"></path></svg>
</span>
<div className="">
<p className="text-sm font-medium font-geist">Medical &amp; Consent Form</p>
<p className="text-xs text-neutral-500 font-geist">PDF • 431 KB</p>
</div>
</div>
<svg className="lucide lucide-download w-4 h-4 text-neutral-400 group-hover:text-neutral-700" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</a>
<a className="group flex items-center justify-between rounded-2xl border border-neutral-200 bg-white p-4 hover:shadow-sm" href="#">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 ring-1 ring-neutral-200">
<svg className="lucide lucide-sticky-note w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="sticky-note" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(23, 23, 23)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"></path><path d="M15 3v4a2 2 0 0 0 2 2h4"></path></svg>
</span>
<div>
<p className="text-sm font-medium font-geist">Timetable</p>
<p className="text-xs text-neutral-500 font-geist">PDF • 198 KB</p>
</div>
</div>
<svg className="lucide lucide-download w-4 h-4 text-neutral-400 group-hover:text-neutral-700" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</a>
<a className="group flex items-center justify-between rounded-2xl border border-neutral-200 bg-white p-4 hover:shadow-sm" href="#">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 ring-1 ring-neutral-200">
<svg className="lucide lucide-sticky-note w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="sticky-note" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(23, 23, 23)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"></path><path d="M15 3v4a2 2 0 0 0 2 2h4"></path></svg>
</span>
<div className="">
<p className="text-sm font-medium font-geist">Health &amp; Safety Guidelines</p>
<p className="text-xs text-neutral-500 font-geist">PDF • 356 KB</p>
</div>
</div>
<svg className="lucide lucide-download w-4 h-4 text-neutral-400 group-hover:text-neutral-700" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</a>
<a className="group flex items-center justify-between rounded-2xl border border-neutral-200 bg-white p-4 hover:shadow-sm" href="#">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 ring-1 ring-neutral-200">
<svg className="lucide lucide-sticky-note w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="sticky-note" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(23, 23, 23)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"></path><path d="M15 3v4a2 2 0 0 0 2 2h4"></path></svg>
</span>
<div className="">
<p className="text-sm font-medium font-geist">Membership Info Pack</p>
<p className="text-xs text-neutral-500 font-geist">PDF • 512 KB</p>
</div>
</div>
<svg className="lucide lucide-download w-4 h-4 text-neutral-400 group-hover:text-neutral-700" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</a>
</div>
</section>

<section className="max-w-7xl sm:px-6 lg:px-8 sm:py-10 md:py-12 mr-auto ml-auto pt-8 pr-4 pb-8 pl-4">
<div className="flex items-center justify-between">
<div className="space-y-1">
<p className="text-xs sm:text-sm text-zinc-600 font-geist">What our swimmers say</p>
<h2 className="text-2xl sm:text-3xl md:text-4xl tracking-tight text-zinc-900 font-space-grotesk font-semibold" style={{}}>Member Reviews</h2>
</div>
<div className="hidden sm:flex items-center gap-2 text-zinc-600">
<svg className="lucide lucide-quote w-4 h-4" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<span className="text-sm font-geist">Real reviews from members</span>
</div>
</div>
<div className="relative mt-6 sm:mt-8 overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-100 bg-zinc-50">
<div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r to-transparent z-10 from-zinc-50">
</div>
<div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l to-transparent z-10 from-zinc-50">
</div>

<div className="relative py-6 sm:py-8">
<div className="flex gap-4 sm:gap-5 will-change-transform animate-[marquee-ltr_45s_linear_infinite]">

<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border p-5 border-zinc-100 bg-zinc-100/40">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=120&amp;h=120&amp;fit=crop&amp;crop=faces" style={{}}/>
<div className="">
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-900 font-geist">Sarah Mitchell</span>
<svg className="lucide lucide-check-circle-2 w-[14px] h-[14px]" data-icon-replaced="true" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', color: 'rgb(37, 99, 235)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-600 font-geist">Adult Beginner Program</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-700 font-geist">
            Started as a complete beginner at 35. The coaches are so patient and encouraging. Now I can swim 500m without stopping!
          </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] bg-zinc-100/40 border-zinc-100 border rounded-2xl pt-5 pr-5 pb-5 pl-5">
<div className="flex gap-3 items-center">
<img alt="Avatar" className="size-9 object-cover rounded-full translate-y-2" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=120&amp;h=120&amp;fit=crop&amp;crop=faces" style={{}}/>
<div className="font-geist"><div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-900 font-geist">Marcus Chen</span>
<svg className="lucide lucide-circle-check lucide-check-circle-2 font-geist w-[14px] h-[14px]" data-icon-replaced="true" data-lucide="circle-check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', color: 'rgb(37, 99, 235)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div><p></p></div>
</div><p className="text-xs text-zinc-600 font-geist translate-x-12 -translate-y-2">Adult Beginner Program</p>
<p className="sm:text-base text-sm text-zinc-700 font-geist mt-4 -translate-y-2">
            The technique improvements have been incredible. My stroke is so much more efficient now. Amazing coaching!
          </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border p-5 border-zinc-100 bg-zinc-100/40">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=320&amp;q=80"/>
<div className="">
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-900 font-geist">Emma Rodriguez</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-blue-600" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-600 font-geist">Parent of Junior Swimmer</p>
</div>
</div>
<p className="sm:text-base text-sm text-zinc-700 font-geist mt-4">My 8-year-old daughter loves coming here. 
The instructors make learning fun and she's gained so much confidence in the water.</p>
</article>
<article className="shrink-0 w-[280px] sm:w-[420px] rounded-2xl border p-5 border-zinc-100 bg-zinc-100/40">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&amp;w=120&amp;h=120&amp;fit=crop&amp;crop=faces" style={{}}/>
<div className="">
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-900 font-geist">David Thompson</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-blue-600" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-600 font-geist">Triathlete Training</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-700 font-geist">
            Training for my first triathlon here was perfect. The structured sessions and coaching helped me go from struggling to confident in open water.
          </p>
</article>

<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border p-5 border-zinc-100 bg-zinc-100/40">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=120&amp;h=120&amp;fit=crop&amp;crop=faces" style={{}}/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-900 font-geist">Sarah Mitchell</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-blue-600" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-600 font-geist">Adult Beginner Program</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-700 font-geist">
            Started as a complete beginner at 35. The coaches are so patient and encouraging. Now I can swim 500m without stopping!
          </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border p-5 border-zinc-100 bg-zinc-100/40">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=120&amp;h=120&amp;fit=crop&amp;crop=faces" style={{}}/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-900 font-geist">Marcus Chen</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-blue-600" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-600 font-geist">Masters Swimming</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-700 font-geist">
            The technique improvements have been incredible. My stroke is so much more efficient now. Amazing coaching!
          </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border p-5 border-zinc-100 bg-zinc-100/40">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80" style={{}}/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-900 font-geist">Emma Rodriguez</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-blue-600" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-600 font-geist">Parent of Junior Swimmer</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-700 font-geist">
            My  here. The instructors make learning fun and she's gained so much confidence in the water.
          </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border p-5 border-zinc-100 bg-zinc-100/40">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&amp;w=120&amp;h=120&amp;fit=crop&amp;crop=faces" style={{}}/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-900 font-geist">David Thompson</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-blue-600" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-600 font-geist">Triathlete Training</p>
</div>
</div>
<p --="" 2="" border-t="" border-zinc-100="" className="mt-4 text-sm sm:text-baseTraining for my first triathlon here was perfect. The structured sessions and coaching helped me go from struggling to confident in open water. &lt;/p&gt; &lt;/article&gt; &lt;/div&gt; &lt;div class=" left="" right="" to="" —="">
</p><div className="relative py-6 sm:py-8">
<div className="flex gap-4 sm:gap-5 will-change-transform animate-[marquee-rtl_45s_linear_infinite]">

<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] border rounded-2xl pt-5 pr-5 pb-5 pl-5 bg-zinc-100/40 border-zinc-100">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=120&amp;h=120&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-900 font-geist">Jessica Park</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-blue-600" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-600 font-geist">Stroke Improvement Class</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-700 font-geist">
            My video analysis sessions were a game changer for my swimming form.
          </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] border rounded-2xl pt-5 pr-5 pb-5 pl-5 bg-zinc-100/40 border-zinc-100">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&amp;w=120&amp;h=120&amp;fit=crop&amp;crop=faces" style={{}}/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-900 font-geist">Ryan Wilson</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-blue-600" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-600 font-geist">Private Lessons</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-700 font-geist">
            The one-on-one coaching was exactly what I needed. Overcame my fear of deep water and now swimming is my favorite exercise.
          </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] border rounded-2xl pt-5 pr-5 pb-5 pl-5 bg-zinc-100/40 border-zinc-100">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://images.unsplash.com/photo-1494790108755-2616c723d5fb?q=80&amp;w=120&amp;h=120&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-900 font-geist">Rachel Adams</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-blue-600" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-600 font-geist">Adult Learn to Swim</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-700 font-geist">
            Never thought I'd learn to swim at 42, but the instructors made it possible. The small class sizes made all the difference.
          </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border p-5 border-zinc-100 bg-zinc-100/40">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=120&amp;h=120&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-900 font-geist">Michael Kim</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-blue-600" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-600 font-geist">Competitive Swimming</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-700 font-geist">
            The training programs here helped me cut 15 seconds off my 100m time. Professional coaching at its finest.
          </p>
</article>

<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border p-5 border-zinc-100 bg-zinc-100/40">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=120&amp;h=120&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-900 font-geist">Jessica Park</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-blue-600" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-600 font-geist">Stroke Improvement Class</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-700 font-geist">
            My freestyle technique has improved dramatically. The video analysis sessions were a game changer for my swimming form.
          </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border p-5 border-zinc-100 bg-zinc-100/40">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&amp;w=120&amp;h=120&amp;fit=crop&amp;crop=faces" style={{}}/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-900 font-geist">Ryan Wilson</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-blue-600" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-600 font-geist">Private Lessons</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-700 font-geist">
            The one-on-one coaching was exactly what I needed. Overcame my fear of deep water and now swimming is my favorite exercise.
          </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border p-5 border-zinc-100 bg-zinc-100/40">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108755-2616c723d5fb?q=80&amp;w=120&amp;h=120&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-900 font-geist">Rachel Adams</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-blue-600" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-600 font-geist">Adult Learn to Swim</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-700 font-geist">
            Never thought I'd learn to swim at 42, but the instructors made it possible. The small class sizes made all the difference.
          </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border p-5 border-zinc-100 bg-zinc-100/40">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=120&amp;h=120&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-900 font-geist">Michael Kim</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-blue-600" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-600 font-geist">Competitive Swimming</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-700 font-geist">
            The training programs here helped me cut 15 seconds off my 100m time. Professional coaching at its finest.
          </p>
</article>
</div>
</div>
</article></div>
<style>
    @keyframes marquee-rtl {
      0% {
        transform: translateX(0);
      }

      100% {
        transform: translateX(-50%);
      }
    }

    @keyframes marquee-ltr {
      0% {
        transform: translateX(-50%);
      }

      100% {
        transform: translateX(0);
      }
    }

    @media (prefers-reduced-motion: reduce) {

      .animate-\[marquee-rtl_45s_linear_infinite\],
      .animate-\[marquee-ltr_45s_linear_infinite\] {
        animation: none !important;
      }
    }
  </style>
</div></div></section>
    </>
  );
}
