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

  const drawer = document.getElementById('drawer');
  const btnMenu = document.getElementById('btnMenu');
  const closeDrawer = document.getElementById('closeDrawer');
  btnMenu.addEventListener('click', () => drawer.style.transform = 'translateX(0)');
  closeDrawer.addEventListener('click', () => drawer.style.transform = 'translateX(-100%)');

  const calendarModal = document.getElementById('calendarModal');
  document.getElementById('openCalendar').addEventListener('click', () => {
    calendarModal.classList.remove('opacity-0', 'pointer-events-none');
    setTimeout(() => calendarModal.classList.add('opacity-100'));
  });

  function closeCal() {
    calendarModal.classList.remove('opacity-100');
    calendarModal.classList.add('opacity-0');
    setTimeout(() => calendarModal.classList.add('pointer-events-none'), 300);
  }

  document.getElementById('closeCalendar').addEventListener('click', closeCal);
  document.getElementById('cancelCalendar').addEventListener('click', closeCal);

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
      

<div className="w-full max-w-sm mx-auto my-8 rounded-3xl bg-[#111827]/90 backdrop-blur-xl shadow-2xl overflow-hidden relative animate-fade-in-up">

<div className="flex items-center px-4 py-3 animate-fade-in-up animate-delay-100">
<button aria-label="Menu" className="p-1 hover:bg-neutral-700/50 rounded-lg transition-colors duration-200" id="btnMenu" style={{transition: `outline 0.1s ease-in-out`}}>
<svg className="lucide lucide-menu w-6 h-6 stroke-1" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
<input className="ml-3 flex-1 bg-[#1f2937] placeholder-neutral-400 text-sm rounded-full py-2 px-4 outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 hover:bg-[#374151]" placeholder="Discover destinations..." style={{transition: `outline 0.1s ease-in-out`}} type="text" />
<button aria-label="Search" className="p-1 ml-3 hover:bg-neutral-700/50 rounded-lg transition-colors duration-200" style={{transition: `outline 0.1s ease-in-out`}}>
<svg className="lucide lucide-search w-6 h-6 stroke-1" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
</div>

<div className="flex overflow-x-auto space-x-4 px-4 pb-3 animate-fade-in-up animate-delay-200">
<button className="shrink-0 flex items-center gap-1 px-3 py-1.5 text-xs bg-[#1f2937] rounded-full hover:bg-indigo-600 transition-colors duration-200 font-geist">
<svg className="lucide lucide-home w-4 h-4" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg> Villas
    </button>
<button className="shrink-0 flex items-center gap-1 px-3 py-1.5 text-xs bg-[#1f2937] rounded-full hover:bg-indigo-600 transition-colors duration-200 font-geist">
<svg className="lucide lucide-building w-4 h-4" data-lucide="building" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="16" x="4" y="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg> Apartments
    </button>
<button className="shrink-0 flex items-center gap-1 px-3 py-1.5 text-xs bg-[#1f2937] rounded-full hover:bg-indigo-600 transition-colors duration-200 font-geist">
<svg className="lucide lucide-waves w-4 h-4" data-lucide="waves" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg> Beachfront
    </button>
<button className="shrink-0 flex items-center gap-1 px-3 py-1.5 text-xs bg-[#1f2937] rounded-full hover:bg-indigo-600 transition-colors duration-200 font-geist">
<svg className="lucide lucide-mountain w-4 h-4" data-lucide="mountain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m8 3 4 8 5-5 5 15H2L8 3z"></path></svg> Mountain
    </button>
</div>

<div className="space-y-6 pb-24">

<div className="mx-4 rounded-2xl overflow-hidden shadow-xl animate-fade-in-up animate-delay-300 hover:shadow-2xl transition-shadow duration-300">
<div className="relative">
<img alt="Luxury Villa in Barcelona" className="w-full h-56 object-cover" src="https://cdn.midjourney.com/video/c1a8da7f-bc0b-42af-a7ce-2ef626a0c7f2/0.mp4?w=800&q=80" style={{transition: `outline 0.1s ease-in-out`}} />
<button aria-label="Favorite" className="absolute top-3 right-3 bg-black/50 backdrop-blur rounded-full p-1 hover:bg-blue-500/70 transition-colors duration-200">
<svg className="lucide lucide-heart w-5 h-5 stroke-2" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
<div className="absolute top-3 left-3 flex items-center gap-1 text-xs bg-black/50 backdrop-blur rounded-full px-2 py-0.5">
<svg className="lucide lucide-star w-3 h-3 fill-cyan-400 stroke-0" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><span className="font-geist">4.9 (2,143)</span>
</div>
</div>
<div className="bg-[#1f2937] p-4 hover:bg-[#374151] transition-colors duration-200">
<h3 className="text-sm font-medium mb-2 font-geist">Barcelona, Spain</h3>
<div className="flex justify-between text-xs text-neutral-400" style={{transition: `outline 0.1s ease-in-out`}}>
<div className="flex flex-col">
<span className="text-white font-geist">€180 EUR</span>
<span className="font-geist">RATE / night</span>
</div>
<div className="flex flex-col items-center">
<svg className="lucide lucide-map-pin w-4 h-4 mb-0.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="font-geist">485km</span>
</div>
<div className="flex flex-col text-right">
<span className="text-neutral-400 font-geist" style={{transition: `outline 0.1s ease-in-out`}}>OPEN</span>
<span className="font-geist">Dec 15 - 18</span>
</div>
</div>
</div>
</div>

<div className="mx-4 rounded-2xl overflow-hidden shadow-xl animate-fade-in-up animate-delay-300 hover:shadow-2xl transition-shadow duration-300">
<div className="relative">
<img alt="Modern Apartment in Amsterdam" className="w-full h-56 object-cover" src="https://cdn.midjourney.com/video/9b710789-31dc-4a23-83af-aec635c42a00/3.mp4?w=800&q=80" style={{transition: `outline 0.1s ease-in-out`}} />
<button aria-label="Favorite" className="absolute top-3 right-3 bg-black/50 backdrop-blur rounded-full p-1 hover:bg-blue-500/70 transition-colors duration-200">
<svg className="lucide lucide-heart w-5 h-5 stroke-2" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
<div className="absolute top-3 left-3 flex items-center gap-1 text-xs bg-black/50 backdrop-blur rounded-full px-2 py-0.5">
<svg className="lucide lucide-star w-3 h-3 fill-cyan-400 stroke-0" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><span className="font-geist">4.6 (1,356)</span>
</div>
</div>
<div className="bg-[#1f2937] p-4 hover:bg-[#374151] transition-colors duration-200">
<h3 className="text-sm font-medium mb-2 font-geist">Amsterdam, Netherlands</h3>
<div className="flex justify-between text-xs text-neutral-400" style={{transition: `outline 0.1s ease-in-out`}}>
<div className="flex flex-col">
<span className="text-white font-geist">€145 EUR</span>
<span className="font-geist">RATE / night</span>
</div>
<div className="flex flex-col items-center">
<svg className="lucide lucide-map-pin w-4 h-4 mb-0.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="font-geist">298km</span>
</div>
<div className="flex flex-col text-right">
<span className="text-neutral-400 font-geist" style={{transition: `outline 0.1s ease-in-out`}}>OPEN</span>
<span className="font-geist">Jan 12 - 16</span>
</div>
</div>
</div>
</div>
</div>

<div className="fixed bottom-2 left-1/2 -translate-x-1/2 w-full max-w-xs px-6">
<div className="flex items-center justify-between bg-[#1f2937]/90 rounded-full px-5 py-2 backdrop-blur border border-neutral-700/50" style={{transition: `outline 0.1s ease-in-out`}}>
<button aria-label="Explore" className="flex flex-col items-center gap-0.5 text-xs hover:text-indigo-400 transition-colors duration-200">
<svg className="lucide lucide-compass w-5 h-5" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</button>
<button aria-label="Calendar" className="flex flex-col items-center gap-0.5 text-xs hover:text-indigo-400 transition-colors duration-200" id="openCalendar">
<svg className="lucide lucide-calendar w-5 h-5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</button>
<button aria-label="Profile" className="flex flex-col items-center gap-0.5 text-xs hover:text-indigo-400 transition-colors duration-200">
<svg className="lucide lucide-user w-5 h-5" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</button>
</div>
</div>
</div>

<div className="fixed inset-y-0 left-0 w-72 max-w-full bg-[#0d1526]/90 backdrop-blur-xl text-white -translate-x-full transition-transform duration-300 z-40 overflow-y-auto border-r border-neutral-700/50" id="drawer" style={{transition: `outline 0.1s ease-in-out`}}>
<div className="p-6">
<div className="flex items-center justify-between">
<div>
<h2 className="text-lg font-semibold tracking-tight font-geist">Maya Richardson</h2>
<button className="text-xs text-indigo-400 underline hover:text-indigo-300 transition-colors duration-200 font-geist">View profile</button>
</div>
<button className="p-1 hover:bg-neutral-700/50 rounded-lg transition-colors duration-200" id="closeDrawer" style={{transition: `outline 0.1s ease-in-out`}}>
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="mt-8 space-y-6">

<div>
<h3 className="text-sm font-semibold mb-3 uppercase tracking-wide text-neutral-400 font-geist" style={{transition: `outline 0.1s ease-in-out`}}>Account</h3>
<ul className="space-y-2 text-sm">
<li className="flex items-center justify-between bg-[#1f2937]/60 rounded-xl px-4 py-3 hover:bg-[#374151]/60 transition-colors duration-200 cursor-pointer">
<span className="flex items-center gap-3 font-geist"><svg className="lucide lucide-bell w-4 h-4" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>Alerts</span>
<span className="text-xs bg-indigo-600 px-2 py-0.5 rounded-full font-geist">8</span>
</li>
<li className="flex items-center justify-between bg-[#1f2937]/60 rounded-xl px-4 py-3 hover:bg-[#374151]/60 transition-colors duration-200 cursor-pointer">
<span className="flex items-center gap-3 font-geist"><svg className="lucide lucide-credit-card w-4 h-4" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>Billing</span>
<svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</li>
<li className="flex items-center justify-between bg-[#1f2937]/60 rounded-xl px-4 py-3 hover:bg-[#374151]/60 transition-colors duration-200 cursor-pointer">
<span className="flex items-center gap-3 font-geist"><svg className="lucide lucide-globe w-4 h-4" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>Region</span>
<svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</li>
</ul>
</div>

<div>
<h3 className="text-sm font-semibold mb-3 uppercase tracking-wide text-neutral-400 font-geist" style={{transition: `outline 0.1s ease-in-out`}}>Preferences</h3>
<div className="flex items-center justify-between bg-[#1f2937]/60 rounded-xl px-4 py-3 hover:bg-[#374151]/60 transition-colors duration-200">
<div className="flex items-center gap-3 font-geist"><svg className="lucide lucide-moon w-4 h-4" data-lucide="moon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>Night mode</div>

<div>
<input checked className="peer sr-only" id="darkToggle" type="checkbox" />
<label className="relative flex w-10 h-6 cursor-pointer items-center rounded-full bg-neutral-600 peer-checked:bg-indigo-600 transition-colors duration-300 hover:bg-neutral-500 peer-checked:hover:bg-indigo-500" htmlFor="darkToggle" style={{transition: `outline 0.1s ease-in-out`}}>
<span className="absolute left-1 peer-checked:translate-x-4 w-4 h-4 bg-white rounded-full transition-transform duration-300 shadow-sm"></span>
</label>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300 z-50" id="calendarModal">
<div className="bg-[#0d1526] w-full max-w-sm mx-4 rounded-2xl overflow-hidden shadow-2xl border border-neutral-700/50" style={{transition: `outline 0.1s ease-in-out`}}>
<div className="flex items-center justify-between px-4 py-4 bg-[#1f2937] border-b border-neutral-700/50" style={{transition: `outline 0.1s ease-in-out`}}>
<button className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors duration-200 font-geist" id="closeCalendar">Back</button>
<span className="text-sm font-medium font-geist">3-night getaway</span>
<button className="text-sm text-neutral-400 hover:text-neutral-300 transition-colors duration-200 font-geist" id="cancelCalendar" style={{transition: `outline 0.1s ease-in-out`}}>Cancel</button>
</div>

<div className="px-6 py-6">
<h4 className="text-center text-sm mb-4 font-medium tracking-tight font-geist">December 2023</h4>
<div className="grid grid-cols-7 gap-4 text-xs text-center text-neutral-400 mb-4" style={{transition: `outline 0.1s ease-in-out`}}>
<span className="font-geist">Sun</span><span className="font-geist">Mon</span><span className="font-geist">Tue</span><span className="font-geist">Wed</span><span className="font-geist">Thu</span><span className="font-geist">Fri</span><span className="font-geist">Sat</span>
</div>
<div className="grid grid-cols-7 gap-2 text-sm">
<span></span><span></span><span></span><span></span><span></span><span className="text-neutral-400 hover:text-white cursor-pointer font-geist" style={{transition: `outline 0.1s ease-in-out`}}>1</span><span className="text-neutral-400 hover:text-white cursor-pointer font-geist" style={{transition: `outline 0.1s ease-in-out`}}>2</span>
<span className="text-neutral-400 hover:text-white cursor-pointer font-geist" style={{transition: `outline 0.1s ease-in-out`}}>3</span><span className="text-neutral-400 hover:text-white cursor-pointer font-geist" style={{transition: `outline 0.1s ease-in-out`}}>4</span><span className="text-neutral-400 hover:text-white cursor-pointer font-geist" style={{transition: `outline 0.1s ease-in-out`}}>5</span><span className="text-neutral-400 hover:text-white cursor-pointer font-geist" style={{transition: `outline 0.1s ease-in-out`}}>6</span><span className="text-neutral-400 hover:text-white cursor-pointer font-geist" style={{transition: `outline 0.1s ease-in-out`}}>7</span><span className="text-neutral-400 hover:text-white cursor-pointer font-geist" style={{transition: `outline 0.1s ease-in-out`}}>8</span><span className="text-neutral-400 hover:text-white cursor-pointer font-geist" style={{transition: `outline 0.1s ease-in-out`}}>9</span>
<span className="text-neutral-400 hover:text-white cursor-pointer font-geist" style={{transition: `outline 0.1s ease-in-out`}}>10</span><span className="text-neutral-400 hover:text-white cursor-pointer font-geist" style={{transition: `outline 0.1s ease-in-out`}}>11</span><span className="text-neutral-400 hover:text-white cursor-pointer font-geist" style={{transition: `outline 0.1s ease-in-out`}}>12</span><span className="text-neutral-400 hover:text-white cursor-pointer font-geist" style={{transition: `outline 0.1s ease-in-out`}}>13</span><span className="text-neutral-400 hover:text-white cursor-pointer font-geist" style={{transition: `outline 0.1s ease-in-out`}}>14</span>
<span className="relative z-10 cursor-pointer">
<span className="absolute inset-0 bg-indigo-600/50 rounded-full"></span>
<span className="relative font-geist">15</span>
</span>
<span className="relative z-10 cursor-pointer">
<span className="absolute inset-0 bg-indigo-600 text-white rounded-full"></span>
<span className="relative font-geist">16</span>
</span>
<span className="relative z-10 cursor-pointer">
<span className="absolute inset-0 bg-indigo-600/50 rounded-full"></span>
<span className="relative font-geist">17</span>
</span>
<span className="relative z-10 cursor-pointer">
<span className="absolute inset-0 bg-indigo-600/50 rounded-full"></span>
<span className="relative font-geist">18</span>
</span>
<span className="text-neutral-400 hover:text-white cursor-pointer font-geist" style={{transition: `outline 0.1s ease-in-out`}}>19</span><span className="text-neutral-400 hover:text-white cursor-pointer font-geist" style={{transition: `outline 0.1s ease-in-out`}}>20</span><span className="text-neutral-400 hover:text-white cursor-pointer font-geist" style={{transition: `outline 0.1s ease-in-out`}}>21</span>
<span className="text-neutral-400 hover:text-white cursor-pointer font-geist" style={{transition: `outline 0.1s ease-in-out`}}>22</span><span className="text-neutral-400 hover:text-white cursor-pointer font-geist" style={{transition: `outline 0.1s ease-in-out`}}>23</span><span className="text-neutral-400 hover:text-white cursor-pointer font-geist" style={{transition: `outline 0.1s ease-in-out`}}>24</span><span className="text-neutral-400 hover:text-white cursor-pointer font-geist" style={{transition: `outline 0.1s ease-in-out`}}>25</span><span className="text-neutral-400 hover:text-white cursor-pointer font-geist" style={{transition: `outline 0.1s ease-in-out`}}>26</span><span className="text-neutral-400 hover:text-white cursor-pointer font-geist" style={{transition: `outline 0.1s ease-in-out`}}>27</span><span className="text-neutral-400 hover:text-white cursor-pointer font-geist" style={{transition: `outline 0.1s ease-in-out`}}>28</span>
<span className="text-neutral-400 hover:text-white cursor-pointer font-geist" style={{transition: `outline 0.1s ease-in-out`}}>29</span><span className="text-neutral-400 hover:text-white cursor-pointer font-geist" style={{transition: `outline 0.1s ease-in-out`}}>30</span><span className="text-neutral-400 hover:text-white cursor-pointer font-geist" style={{transition: `outline 0.1s ease-in-out`}}>31</span><span></span><span></span><span></span><span></span>
</div>
</div>
<div className="flex items-center justify-between px-6 py-4 bg-[#1f2937] border-t border-neutral-700/50" style={{transition: `outline 0.1s ease-in-out`}}>
<div>
<p className="text-xs text-neutral-400 font-geist" style={{transition: `outline 0.1s ease-in-out`}}>€180 EUR <span className="text-white font-geist">/ night</span></p>
<p className="text-xs mt-1 font-geist">Dec 15 - 18</p>
</div>
<button className="bg-indigo-600 hover:bg-indigo-500 transition-colors rounded-xl px-6 py-2 text-sm font-medium shadow-lg hover:shadow-xl font-geist">Confirm</button>
</div>
</div>
</div>


    </>
  );
}
