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
      

<div className="bg-slate-950 text-slate-400 text-xs py-2 px-4 sm:px-8 border-b border-slate-800">
<div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
<div className="flex items-center gap-4">
<span className="flex items-center gap-1"><svg aria-hidden="true" className="lucide lucide-map-pin w-3 h-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Redhill Aerodrome, Surrey, RH1 5JY</span>
<span className="flex items-center gap-1"><svg aria-hidden="true" className="lucide lucide-phone w-3 h-3" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg> 01737 822959</span>
<span className="flex items-center gap-1"><svg aria-hidden="true" className="lucide lucide-mail w-3 h-3" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg> fly@redhillaviation.co.uk</span>
</div>
<a className="hover:text-white transition-colors underline decoration-slate-600 underline-offset-2" href="#booking">Member Booking Login</a>
</div>
</div>

<nav className="z-50 w-full pt-4 pr-6 pb-4 pl-6 absolute top-10 left-0">
<div className="max-w-7xl mx-auto flex justify-between items-center">

<div className="flex items-center gap-2">
<div className="bg-white/10 border-white/20 border rounded pt-2 pr-2 pb-2 pl-2 backdrop-blur-md">
<svg aria-hidden="true" className="lucide lucide-plane w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="plane" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(56, 189, 248)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>
</div>
<div className="">
<h1 className="uppercase leading-none text-xl font-bold text-white tracking-tight">VALTORA</h1>
<p className="text-[10px] uppercase text-sky-200 tracking-widest">AVIATION</p>
</div>
</div>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/90">
<a className="hover:text-white transition-colors" href="#">Experience Flights</a>
<a className="hover:text-white transition-colors" href="#">Training</a>
<a className="hover:text-white transition-colors" href="#">Our Fleet</a>
<a className="hover:text-white transition-colors" href="#">About</a>
<a className="hover:bg-sky-50 transition-colors font-semibold text-slate-900 bg-white rounded pt-2.5 pr-5 pb-2.5 pl-5" href="#">Request quote</a>
</div>
<button className="md:hidden text-white"><svg aria-hidden="true" className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg></button>
</div>
</nav>

<header className="min-h-[600px] flex overflow-hidden bg-slate-900 h-[85vh] relative items-center justify-center">

<div className="z-0 absolute top-0 right-0 bottom-0 left-0">
<img className="opacity-40 w-full h-full object-cover [--fx-filter:blur(10px)_liquid-glass(0,10)_saturate(1.25)_noise(0.5,1,0)]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/423a7311-a318-477a-b533-0dc70e3b2749_3840w.png"/>
</div>
<div className="z-10 -mt-20 text-center max-w-4xl pr-6 pl-6 relative">
<div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/10 px-4 py-1.5 rounded-full mb-6">
<div className="flex -space-x-1">
<div className="w-5 h-5 rounded-full bg-green-500 border border-white flex items-center justify-center text-[8px] text-white font-bold">★</div>
<div className="w-5 h-5 rounded-full bg-green-500 border border-white flex items-center justify-center text-[8px] text-white font-bold">★</div>
<div className="w-5 h-5 rounded-full bg-green-500 border border-white flex items-center justify-center text-[8px] text-white font-bold">★</div>
<div className="w-5 h-5 rounded-full bg-green-500 border border-white flex items-center justify-center text-[8px] text-white font-bold">★</div>
<div className="w-5 h-5 rounded-full bg-green-500 border border-white flex items-center justify-center text-[8px] text-white font-bold">★</div>
</div>
<span className="text-white text-xs font-medium">Rated Excellent on TripAdvisor</span>
</div>
<h1 className="serif-font md:text-7xl leading-[1.1] text-5xl text-white tracking-tight mb-6">Luxury travel without limits</h1>
<p className="md:text-xl text-lg font-light text-slate-300 max-w-2xl mr-auto mb-8 ml-auto">Discover a PRIVATE AVIATION EXPERIENCE BUILT ON

SERVICE, VALUE AND TRUST.</p>
</div>
</header>

<div className="-mt-24 z-20 pr-4 pb-20 pl-4 relative">
<div className="max-w-6xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
<div className="bg-white p-1 text-center border-b border-slate-100">
<p className="text-xs font-semibold text-slate-500 py-2 tracking-widest uppercase">Book a Trial Lesson or
                Enquire Today</p>
</div>
<div className="md:p-6 grid grid-cols-1 md:grid-cols-4 gap-4 pt-4 pr-4 pb-4 pl-4 gap-x-4 gap-y-4 items-end">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">Full Name</label>
<div className="relative">
<svg aria-hidden="true" className="lucide lucide-user absolute left-3 top-2.5 w-4 h-4 text-slate-400" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<input className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded text-sm focus:outline-none focus:border-sky-500" placeholder="John Doe" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">Phone Number</label>
<div className="relative">
<svg aria-hidden="true" className="lucide lucide-phone absolute left-3 top-2.5 w-4 h-4 text-slate-400" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<input className="focus:outline-none focus:border-sky-500 text-sm bg-slate-50 w-full border-slate-200 border rounded pt-2.5 pr-3 pb-2.5 pl-9" placeholder="07700 900000" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">Email Address</label>
<div className="relative">
<svg className="lucide lucide-mail absolute top-2.5 left-3 w-[16px] h-[16px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(148, 163, 184)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect className="" height="16" rx="2" width="20" x="2" y="4"></rect><path className="" d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path></svg>
<input className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded text-sm text-slate-600 focus:outline-none focus:border-sky-500 placeholder-slate-400" placeholder="john@example.com" type="email"/>
</div>
</div>
<button className="hover:bg-red-800 transition-colors flex gap-2 font-medium text-gray-950 bg-yellow-400 w-full rounded pt-2.5 pb-2.5 gap-x-2 gap-y-2 items-center justify-center">Request quote</button>
</div>

<div className="bg-slate-50 border-t border-slate-100 px-6 py-4 flex flex-wrap justify-center md:justify-between items-center gap-6 opacity-80">
<div className="flex items-center gap-2"><svg aria-hidden="true" className="lucide lucide-check-circle w-5 h-5 text-slate-400" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> <span className="text-xs font-bold font-serif text-slate-500">UK CAA APPROVED</span></div>
<div className="flex items-center gap-2"><svg aria-hidden="true" className="lucide lucide-map w-5 h-5 text-slate-400" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg> <span className="text-xs font-bold font-serif text-slate-500">6 GRASS RUNWAYS</span></div>
<div className="flex items-center gap-2"><svg aria-hidden="true" className="lucide lucide-star w-5 h-5 text-slate-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> <span className="text-xs font-bold font-serif text-slate-500">TRIPADVISOR EXCELLENCE</span></div>
<div className="flex items-center gap-2"><svg aria-hidden="true" className="lucide lucide-calendar w-5 h-5 text-slate-400" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> <span className="text-xs font-bold font-serif text-slate-500">OPEN 7 DAYS A WEEK</span></div>
</div>
</div>
</div>

<section className="bg-slate-900 text-white py-20 overflow-hidden relative">
<div className="opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] absolute top-0 right-0 bottom-0 left-0"></div>
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="text-center mb-16">
<h2 className="serif-font md:text-5xl text-3xl mb-4">Your Private Aviation Experts
</h2>
<p className="text-slate-400 max-w-xl mr-auto ml-auto">Valtora provides on-demand private jet and helicopter charters globally. We arrange the right aircraft for every journey, from light jets and turboprops to long-range jets and VIP airliners.

</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

<div className="space-y-8">

<div className="group hover:border-sky-500/50 transition-all duration-300 hover:-translate-x-1 bg-slate-800/50 border-white/5 border rounded-lg pt-6 pr-6 pb-6 pl-6 backdrop-blur">
<h3 className="text-lg font-semibold mb-2">Private Pilot Licence</h3>
<p className="leading-relaxed text-sm text-slate-400 mb-4">Valtora provides on-demand private jet and helicopter charters globally. We arrange the right aircraft for every journey, from light jets and turboprops to long-range jets and VIP airliners.

</p>
<a className="text-xs font-bold text-white flex items-center gap-1 group-hover:gap-2 transition-all" href="#">VIEW COURSES <svg aria-hidden="true" className="lucide lucide-chevron-right w-3 h-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg></a>
</div>

<div className="group hover:border-sky-500/50 transition-all duration-300 hover:-translate-x-1 bg-slate-800/50 border-white/5 border rounded-lg pt-6 pr-6 pb-6 pl-6 backdrop-blur">
<div className="w-10 h-10 bg-sky-900/50 rounded-lg flex items-center justify-center text-sky-400 mb-4 group-hover:bg-sky-500 group-hover:text-white transition-colors">
<svg aria-hidden="true" className="lucide lucide-ticket w-5 h-5" data-lucide="ticket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M13 5v2"></path><path d="M13 17v2"></path><path d="M13 11v2"></path></svg>
</div>
<h3 className="text-lg font-semibold mb-2">Experience Flights</h3>
<p className="leading-relaxed text-sm text-slate-400 mb-4">With a close-knit team and a clear vision for growth, we are setting new standards in private travel. For us, every journey is personal.

</p>
<a className="text-xs font-bold text-white flex items-center gap-1 group-hover:gap-2 transition-all" href="#">BUY VOUCHERS <svg aria-hidden="true" className="lucide lucide-chevron-right w-3 h-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg></a>
</div>
</div>

<div className="relative h-[400px] lg:h-[500px]">
<div className="absolute inset-0 bg-sky-500/20 blur-3xl rounded-full"></div>
<img alt="Cockpit View" className="z-10 transform lg:scale-110 w-full h-full object-cover border-slate-800/50 border-4 rounded-2xl relative shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/900470d7-24cb-4639-ab90-7b0dfa4031b9_1600w.jpg"/>

<div className="-bottom-4 -right-4 z-20 text-slate-900 bg-white max-w-[180px] rounded pt-4 pr-4 pb-4 pl-4 absolute shadow-xl">
<p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Established</p>
<p className="text-2xl font-serif font-bold leading-none">1947</p>
<p className="text-sm font-medium">Flight Excellence</p>
</div>
</div>

<div className="space-y-8">

<div className="group hover:border-sky-500/50 transition-all duration-300 hover:translate-x-1 bg-slate-800/50 border-white/5 border rounded-lg pt-6 pr-6 pb-6 pl-6 backdrop-blur">
<div className="w-10 h-10 bg-sky-900/50 rounded-lg flex items-center justify-center text-sky-400 mb-4 group-hover:bg-sky-500 group-hover:text-white transition-colors">
<svg aria-hidden="true" className="lucide lucide-briefcase w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
</div>
<h3 className="text-lg font-semibold mb-2">Commercial Training</h3>
<p className="leading-relaxed text-sm text-slate-400 mb-4">Backed by decades of private aviation experience, Valtora has a singular ambition: to build a boutique aviation company defined by trust, precision and a passion for exceptional service.</p>
<a className="text-xs font-bold text-white flex items-center gap-1 group-hover:gap-2 transition-all" href="#">PROFESSIONAL COURSES <svg aria-hidden="true" className="lucide lucide-chevron-right w-3 h-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg></a>
</div>

<div className="group bg-slate-800/50 backdrop-blur border border-white/5 p-6 rounded-lg hover:border-sky-500/50 transition-all duration-300 hover:translate-x-1">
<div className="w-10 h-10 bg-sky-900/50 rounded-lg flex items-center justify-center text-sky-400 mb-4 group-hover:bg-sky-500 group-hover:text-white transition-colors">
<svg aria-hidden="true" className="lucide lucide-users w-5 h-5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h3 className="text-lg font-semibold mb-2">Instructor Courses</h3>
<p className="leading-relaxed text-sm text-slate-400 mb-4">It begins with listening - understanding what matters most to you - and delivering it with discretion and care. From the aircraft we select to the way every detail is managed, our experienced team is available 24/7 to ensure your journey is smooth, seamless and entirely tailored around you.

</p>
<a className="text-xs font-bold text-white flex items-center gap-1 group-hover:gap-2 transition-all" href="#">BECOME AN INSTRUCTOR <svg aria-hidden="true" className="lucide lucide-chevron-right w-3 h-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg></a>
</div>
</div>
</div>
</div>
</section>

<div className="overflow-hidden border-y flex bg-sky-50 border-sky-100 pt-3 pb-3 items-center">
<div className="flex gap-8 whitespace-nowrap animate-marquee font-bold text-xs tracking-widest text-slate-400 uppercase">
<span className="flex items-center gap-2"><svg aria-hidden="true" className="lucide lucide-check-circle w-4 h-4 text-sky-600" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> CAA Approved ATO</span>
<span className="text-slate-300">///</span>
<span className="flex items-center gap-2"><svg aria-hidden="true" className="lucide lucide-map w-4 h-4 text-sky-600" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg> 6 Grass Runways</span>
<span className="text-slate-300">///</span>
<span className="flex items-center gap-2"><svg aria-hidden="true" className="lucide lucide-coffee w-4 h-4 text-sky-600" data-lucide="coffee" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 2v2"></path><path d="M14 2v2"></path><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"></path><path d="M6 2v2"></path></svg> On-site Cafe &amp; Wi-Fi</span>
<span className="text-slate-300">///</span>
<span className="flex items-center gap-2"><svg aria-hidden="true" className="lucide lucide-calendar w-4 h-4 text-sky-600" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> Open 7 Days a Week</span>
<span className="text-slate-300">///</span>
<span className="flex items-center gap-2"><svg aria-hidden="true" className="lucide lucide-check-circle w-4 h-4 text-sky-600" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> Friendly Atmosphere</span>
<span className="text-slate-300">///</span>
<span className="flex items-center gap-2"><svg aria-hidden="true" className="lucide lucide-wifi w-4 h-4 text-sky-600" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg> Free Parking</span>
</div>
</div>

<section className="bg-white pt-24 pb-24">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16">
<span className="text-red-700 font-semibold tracking-widest text-xs uppercase mb-2 block">Our Aircraft</span>
<h2 className="serif-font text-4xl text-slate-900">DISCOVER OUR
                <span className="italic text-red-700 font-serif">DIVERSE</span><br/>TRAINING FLEET</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-slate-100">
<img alt="Cessna 152" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity">
</div>
<div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<h3 className="font-serif text-xl mb-1">Cessna 152</h3>
<p className="text-xs text-slate-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100 line-clamp-2">
                        Ideal for initial training and PPL. We operate multiple two-seat C152s including an Aerobat.</p>
<span className="text-xs font-bold uppercase tracking-wider flex items-center gap-2">View Specs <svg aria-hidden="true" className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></span>
</div>
</div>

<div className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-slate-100">
<img alt="Piper PA28" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1569629743817-70d8db6c323b?q=80&amp;w=1600"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity">
</div>
<div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<h3 className="font-serif text-xl mb-1">Piper PA28</h3>
<p className="text-xs text-slate-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100 line-clamp-2">
                        The ubiquitous 4-seater tourer. 180hp variant with Garmin 430 and leather seats.</p>
<span className="text-xs font-bold uppercase tracking-wider flex items-center gap-2">View Specs <svg aria-hidden="true" className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></span>
</div>
</div>

<div className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-slate-100">
<img alt="Piper Arrow" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&amp;w=1600"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity">
</div>
<div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<h3 className="font-serif text-xl mb-1">Piper Arrow</h3>
<p className="text-xs text-slate-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100 line-clamp-2">
                        Complex single with retractable undercarriage and variable-pitch prop for advanced training.</p>
<span className="text-xs font-bold uppercase tracking-wider flex items-center gap-2">View Specs <svg aria-hidden="true" className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></span>
</div>
</div>

<div className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-slate-100">
<img alt="Aerobatics" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity">
</div>
<div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<h3 className="font-serif text-xl mb-1">Aerobatics</h3>
<p className="text-xs text-slate-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100 line-clamp-2">
                        Experience the thrill of loops and rolls in our Cessna 152 Aerobat.</p>
<span className="text-xs font-bold uppercase tracking-wider flex items-center gap-2">View Specs <svg aria-hidden="true" className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-900 text-white relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
<div className="grid grid-cols-1 lg:grid-cols-2">
<div className="relative h-[400px] lg:h-auto">
<img alt="Redhill Aviation Team" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&amp;w=1600"/>
<div className="absolute inset-0 bg-slate-900/30"></div>
</div>
<div className="p-12 lg:p-24 flex flex-col justify-center">
<div className="w-16 h-1 bg-red-600 mb-8"></div>
<h2 className="serif-font text-4xl lg:text-5xl mb-6 leading-tight">
                    PASSION FOR <span className="italic text-sky-400">FLIGHT</span>, <br/> SINCE 1947
                </h2>
<p className="text-slate-300 text-lg leading-relaxed mb-8">
                    Redhill Aviation Flight Centre is a friendly, professional aero club. We have a team of dedicated instructors, all of whom are professionally qualified pilots. With in-house examiners, we can take you from your first trial lesson right through to your commercial licence.
                </p>
<div className="flex flex-wrap gap-4">
<a className="bg-white text-slate-900 px-6 py-3 rounded font-semibold hover:bg-sky-50 transition-colors" href="#">Meet The Team</a>
<a className="border border-white/30 text-white px-6 py-3 rounded font-semibold hover:bg-white/10 transition-colors" href="#">Read Reviews</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div className="max-w-xl">
<h5 className="text-red-700 font-bold uppercase tracking-widest text-xs mb-2">Your Path to a License</h5>
<h2 className="serif-font text-4xl text-slate-900">BECOME A PILOT: <span className="italic font-serif">STEP BY STEP</span></h2>
</div>
<div className="max-w-md text-sm text-slate-500 text-justify">
                    Whether you are flying for fun or aiming for a career, our structured training programs ensure you reach your goals safely and efficiently.
                </div>
</div>

<div className="bg-slate-900 text-white rounded-2xl p-8 lg:p-12 shadow-2xl overflow-hidden">
<h3 className="serif-font text-2xl text-center mb-12 text-slate-200">THE P.I.L.O.T. METHOD</h3>
<div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">

<div className="relative group">
<div className="text-7xl font-serif text-slate-800 font-bold absolute -top-4 -left-2 z-0 group-hover:text-sky-900/50 transition-colors">P</div>
<div className="relative z-10 pt-8">
<h4 className="text-xl font-bold mb-3 text-sky-400">PREPARE</h4>
<p className="text-xs text-slate-400 leading-relaxed">
                                Start with a Trial Lesson. Experience the sensation of flying and controlling the aircraft yourself.
                            </p>
</div>
<div className="hidden md:block absolute top-12 -right-4 w-8 h-[1px] bg-slate-700"></div>
</div>

<div className="relative group">
<div className="text-7xl font-serif text-slate-800 font-bold absolute -top-4 -left-2 z-0 group-hover:text-sky-900/50 transition-colors">I</div>
<div className="relative z-10 pt-8">
<h4 className="text-xl font-bold mb-3 text-sky-400">INSTRUCTION</h4>
<p className="text-xs text-slate-400 leading-relaxed">
                                Dual flight training with our experienced instructors covering handling, navigation, and emergencies.
                            </p>
</div>
<div className="hidden md:block absolute top-12 -right-4 w-8 h-[1px] bg-slate-700"></div>
</div>

<div className="relative group">
<div className="text-7xl font-serif text-slate-800 font-bold absolute -top-4 -left-2 z-0 group-hover:text-sky-900/50 transition-colors">L</div>
<div className="relative z-10 pt-8">
<h4 className="text-xl font-bold mb-3 text-sky-400">LEARNING</h4>
<p className="text-xs text-slate-400 leading-relaxed">
                                Ground school exams (Air Law, Meteorology, etc.) taken in our dedicated exam rooms on-site.
                            </p>
</div>
<div className="hidden md:block absolute top-12 -right-4 w-8 h-[1px] bg-slate-700"></div>
</div>

<div className="relative group">
<div className="text-7xl font-serif text-slate-800 font-bold absolute -top-4 -left-2 z-0 group-hover:text-sky-900/50 transition-colors">O</div>
<div className="relative z-10 pt-8">
<h4 className="text-xl font-bold mb-3 text-sky-400">OFF SOLO</h4>
<p className="text-xs text-slate-400 leading-relaxed">
                                The milestone first solo flight, followed by solo navigation exercises to build confidence.
                            </p>
</div>
<div className="hidden md:block absolute top-12 -right-4 w-8 h-[1px] bg-slate-700"></div>
</div>

<div className="relative group">
<div className="text-7xl font-serif text-slate-800 font-bold absolute -top-4 -left-2 z-0 group-hover:text-sky-900/50 transition-colors">T</div>
<div className="relative z-10 pt-8">
<h4 className="text-xl font-bold mb-3 text-sky-400">TESTING</h4>
<p className="text-xs text-slate-400 leading-relaxed">
                                Skills Test with our in-house examiners. Gain your license and join our club fly-outs!
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-blue-950 py-20 text-white border-b border-white/10">
<div className="max-w-7xl mx-auto px-6">
<h3 className="text-center font-serif text-3xl mb-16">WHY CHOOSE REDHILL AVIATION?</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
<div className="pt-8 md:pt-0 px-4">
<span className="block text-5xl font-bold font-serif mb-2">6</span>
<span className="text-xs font-bold tracking-widest uppercase text-sky-400">Grass Runways</span>
</div>
<div className="pt-8 md:pt-0 px-4">
<span className="block text-5xl font-bold font-serif mb-2">7</span>
<span className="text-xs font-bold tracking-widest uppercase text-sky-400">Days a Week</span>
</div>
<div className="pt-8 md:pt-0 px-4">
<span className="block text-5xl font-bold font-serif mb-2">100%</span>
<span className="text-xs font-bold tracking-widest uppercase text-sky-400">Customer Satisfaction</span>
</div>
</div>

<div className="mt-20 max-w-4xl mx-auto relative">
<div className="bg-white text-slate-900 rounded-lg p-8 shadow-xl flex flex-col md:flex-row gap-6 items-center">
<div className="flex-shrink-0 bg-slate-100 rounded-full p-4 border border-slate-200">
<img alt="TripAdvisor" className="h-6" src="https://static.tacdn.com/img2/widget/tripadvisor_logo_115x18.gif"/>
</div>
<div className="">
<div className="flex text-green-500 mb-2">
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="italic text-slate-600 text-sm mb-3">"An absolutely amazing experience. The instructor was brilliant, explaining everything clearly. Taking controls was the highlight. Highly recommended!"</p>
<p className="font-bold text-xs uppercase tracking-wider text-slate-900">- Recent Visitor</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-900 text-white py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="w-full lg:w-1/2 relative">
<div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-sky-500/50 rounded-tl-3xl"></div>
<div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-sky-500/50 rounded-br-3xl"></div>
<img alt="Pilot Checking Aircraft" className="hover:grayscale-0 transition-all duration-700 z-10 w-full h-auto rounded-lg relative shadow-2xl grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="w-full lg:w-1/2">
<h2 className="serif-font text-4xl mb-8"><span className="italic text-sky-400">EXCELLENCE</span> IN AVIATION TRAINING</h2>
<div className="space-y-8">
<div className="flex gap-6">
<div className="flex-shrink-0 w-16 h-16 bg-white text-slate-900 flex items-center justify-center text-3xl font-serif font-bold rounded shadow-lg">F</div>
<div className="">
<h4 className="text-sm font-bold uppercase tracking-wider text-sky-400 mb-1">Facilities</h4>
<p className="text-slate-400 text-sm leading-relaxed">
                                    Welcoming reception with free Wi-Fi, dedicated briefing &amp; exam rooms for students, and ample free parking on-site.
                                </p>
</div>
</div>
<div className="flex gap-6">
<div className="flex-shrink-0 w-16 h-16 bg-white text-slate-900 flex items-center justify-center text-3xl font-serif font-bold rounded shadow-lg">L</div>
<div className="">
<h4 className="text-sm font-bold uppercase tracking-wider text-sky-400 mb-1">Location</h4>
<p className="text-slate-400 text-sm leading-relaxed">
                                    Based at Redhill Aerodrome, one of the oldest purpose-built airfields in the UK. Full Air Traffic Control environment.
                                </p>
</div>
</div>
<div className="flex gap-6">
<div className="flex-shrink-0 w-16 h-16 bg-white text-slate-900 flex items-center justify-center text-3xl font-serif font-bold rounded shadow-lg">S</div>
<div className="">
<h4 className="text-sm font-bold uppercase tracking-wider text-sky-400 mb-1">Social Events</h4>
<p className="text-slate-400 text-sm leading-relaxed">
                                    We actively encourage students and qualified pilots to fly to different destinations by organising regular Club Fly Outs.
                                </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-black py-16 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-8 flex justify-between items-end">
<h2 className="serif-font text-3xl text-white">LIFE AT <span className="italic text-sky-500">REDHILL</span></h2>
<div className="flex gap-2">
<button className="p-2 border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-colors"><svg aria-hidden="true" className="lucide lucide-arrow-left w-4 h-4" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg></button>
<button className="p-2 border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-colors"><svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></button>
</div>
</div>
<div className="flex gap-4 overflow-x-auto pb-8 px-6 no-scrollbar">
<img className="h-64 w-80 object-cover rounded grayscale hover:grayscale-0 transition-all duration-500 flex-shrink-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<img className="h-64 w-80 object-cover rounded grayscale hover:grayscale-0 transition-all duration-500 flex-shrink-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img className="h-64 w-80 object-cover rounded grayscale hover:grayscale-0 transition-all duration-500 flex-shrink-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<img className="h-64 w-80 object-cover rounded grayscale hover:grayscale-0 transition-all duration-500 flex-shrink-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<img className="h-64 w-80 object-cover rounded grayscale hover:grayscale-0 transition-all duration-500 flex-shrink-0" src="https://images.unsplash.com/photo-1473862170180-84427c485aca?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</section>

<footer className="bg-slate-950 text-slate-400 pt-20 pb-10 border-t border-slate-900 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col items-center text-center mb-16">
<h2 className="serif-font text-3xl text-white mb-4">VISIT US AT <span className="italic text-sky-500">REDHILL AERODROME</span></h2>
<div className="w-full h-64 bg-slate-800 rounded-lg overflow-hidden relative mt-6 max-w-4xl">

<iframe allowfullscreen="" className="opacity-60 hover:opacity-100 transition-opacity" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.490776518456!2d-0.1415!3d51.2295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875ef2974051c9d%3A0x868c679f2252125a!2sRedhill+Aviation+Flight+Centre!5e0!3m2!1sen!2suk!4v1" style={{border: '0'}} width="100%"></iframe>
<div className="absolute bottom-4 left-4 bg-white text-slate-900 p-4 rounded shadow-lg text-left max-w-xs hidden sm:block">
<p className="font-bold text-xs mb-1">REDHILL AVIATION</p>
<p className="text-xs text-slate-500">Redhill Aerodrome, Kings Mill Lane, Redhill, Surrey, RH1 5JY</p>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-slate-900 pt-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<svg aria-hidden="true" className="lucide lucide-plane w-6 h-6 text-sky-500" data-lucide="plane" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>
<span className="text-white font-bold text-lg uppercase">Redhill Aviation</span>
</div>
<p className="text-xs leading-relaxed mb-6">
                        A friendly, professional aero club and UK CAA Approved Training Organisation based in Surrey.
                    </p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded bg-slate-900 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="lucide lucide-facebook w-4 h-4" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
<a className="w-8 h-8 rounded bg-slate-900 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="w-8 h-8 rounded bg-slate-900 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
</div>
</div>
<div>
<h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Flight Training</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-sky-400 transition-colors" href="#">Private Pilot Licence (PPL)</a></li>
<li><a className="hover:text-sky-400 transition-colors" href="#">LAPL Training</a></li>
<li><a className="hover:text-sky-400 transition-colors" href="#">Night Rating</a></li>
<li><a className="hover:text-sky-400 transition-colors" href="#">IMC / IR(R)</a></li>
<li><a className="hover:text-sky-400 transition-colors" href="#">Aerobatics</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Services</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-sky-400 transition-colors" href="#">Experience Flights</a></li>
<li><a className="hover:text-sky-400 transition-colors" href="#">Commercial Training (CPL)</a></li>
<li><a className="hover:text-sky-400 transition-colors" href="#">Instrument Rating</a></li>
<li><a className="hover:text-sky-400 transition-colors" href="#">Instructor Courses</a></li>
<li><a className="hover:text-sky-400 transition-colors" href="#">Revalidations &amp; Renewals</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Contact Us</h4>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="lucide lucide-phone w-4 h-4 mt-0.5 text-sky-500" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span>01737 822959</span>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="lucide lucide-mail w-4 h-4 mt-0.5 text-sky-500" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<a className="hover:text-sky-400" href="mailto:fly@redhillaviation.co.uk">fly@redhillaviation.co.uk</a>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="lucide lucide-map-pin w-4 h-4 mt-0.5 text-sky-500" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span>Redhill Aerodrome, Kings Mill Lane, Redhill, Surrey, RH1 5JY</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-900 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
<p>© 2023 Redhill Aviation Flight Centre. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-slate-400" href="#">Privacy Policy</a>
<a className="hover:text-slate-400" href="#">Terms &amp; Conditions</a>
<a className="hover:text-slate-400" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
