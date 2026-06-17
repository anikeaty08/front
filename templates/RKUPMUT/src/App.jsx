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
      

<div className="w-full bg-emerald-600/5 border-b border-emerald-200/60">
<div className="mx-auto max-w-7xl px-6">
<div className="flex items-center justify-between py-2 text-sm">
<p className="text-emerald-800">Summer Invitational • August 24 • Limited spots</p>
<a className="inline-flex items-center gap-2 text-emerald-800 hover:text-emerald-900 transition-colors" href="#tee-times">
            Reserve now
            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
<div className="mx-auto max-w-7xl px-6">
<div className="flex items-center justify-between h-16">

<a aria-label="Golden Gate Golf Club" className="flex items-center gap-2 group" href="#">
<div className="h-8 w-8 rounded-md bg-emerald-600/10 ring-1 ring-emerald-200 flex items-center justify-center text-emerald-700 tracking-tight font-semibold">
<span className="text-[11px] leading-none">GG</span>
</div>
<span className="text-base tracking-tight font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors">Golden Gate Golf Club</span>
</a>

<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="text-gray-700 hover:text-gray-900 transition-colors" href="#course">Course</a>
<a className="text-gray-700 hover:text-gray-900 transition-colors" href="#membership">Membership</a>
<a className="text-gray-700 hover:text-gray-900 transition-colors" href="#tee-times">Tee Times</a>
<a className="text-gray-700 hover:text-gray-900 transition-colors" href="#events">Events</a>
<a className="text-gray-700 hover:text-gray-900 transition-colors" href="#contact">Contact</a>
</nav>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold text-emerald-900 ring-1 ring-emerald-200 bg-emerald-50 hover:bg-emerald-100 hover:ring-emerald-300 transition-all" href="#tee-times">
<i className="w-4 h-4" data-lucide="calendar"></i>
              Book Tee Time
            </a>
<button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center rounded-md p-2 ring-1 ring-gray-300 hover:ring-gray-400 hover:bg-gray-50 transition-all">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="absolute inset-0">
<img alt="Coastal golf course near San Francisco" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-white/50" style={{backdropFilter: 'blur(1.5px)'}}></div>
<div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/70 to-white"></div>
</div>
<div className="relative mx-auto max-w-7xl px-6 pt-20 pb-24">
<div className="grid md:grid-cols-12 gap-8 items-center">
<div className="md:col-span-7">
<div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium text-emerald-900 ring-1 ring-emerald-200 bg-emerald-50 mb-4">
<i className="w-3.5 h-3.5" data-lucide="map-pin"></i>
              San Francisco, California
            </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight font-semibold text-gray-900">
              Championship golf above the Bay
            </h1>
<p className="mt-5 text-base sm:text-lg text-gray-700 max-w-xl">
              A modern links experience shaped by ocean breezes and golden light. Book your round, refine your game, and make the most of every swing.
            </p>
<div className="mt-8 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 ring-1 ring-emerald-700/50 hover:ring-emerald-800 transition-all" href="#tee-times">
<i className="w-4 h-4" data-lucide="flag"></i>
                Book Tee Time
              </a>
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold text-emerald-900 ring-1 ring-gray-300 hover:ring-gray-400 hover:bg-gray-50 transition-all" href="#membership">
<i className="w-4 h-4" data-lucide="id-card"></i>
                Explore Membership
              </a>
</div>

<div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
<div className="rounded-lg ring-1 ring-gray-200 bg-white p-4 hover:shadow-sm transition-shadow">
<div className="text-xs text-gray-500">Established</div>
<div className="mt-1 text-2xl tracking-tight font-semibold text-gray-900">1928</div>
</div>
<div className="rounded-lg ring-1 ring-gray-200 bg-white p-4 hover:shadow-sm transition-shadow">
<div className="text-xs text-gray-500">Holes</div>
<div className="mt-1 text-2xl tracking-tight font-semibold text-gray-900">18</div>
</div>
<div className="rounded-lg ring-1 ring-gray-200 bg-white p-4 hover:shadow-sm transition-shadow">
<div className="text-xs text-gray-500">Par</div>
<div className="mt-1 text-2xl tracking-tight font-semibold text-gray-900">72</div>
</div>
<div className="rounded-lg ring-1 ring-gray-200 bg-white p-4 hover:shadow-sm transition-shadow">
<div className="text-xs text-gray-500">Slope / Rating</div>
<div className="mt-1 text-2xl tracking-tight font-semibold text-gray-900">132 / 72.4</div>
</div>
</div>
</div>
<div className="md:col-span-5">
<div className="rounded-xl bg-white ring-1 ring-gray-200 shadow-sm p-5 md:p-6">
<div className="flex items-center justify-between">
<h3 className="text-lg tracking-tight font-semibold text-gray-900">Quick booking</h3>
<span className="text-xs text-emerald-800 bg-emerald-50 ring-1 ring-emerald-200 rounded px-2 py-0.5">Members save 15%</span>
</div>
<form className="mt-4 space-y-4" id="quick-book">
<div>
<label className="text-xs text-gray-600">Date</label>
<div className="mt-1 relative">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" data-lucide="calendar"></i>
<input className="w-full rounded-md border-gray-300 pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 transition-colors" type="date"/>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div>
<label className="text-xs text-gray-600">Players</label>
<div className="mt-1 relative">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" data-lucide="users"></i>
<select className="w-full appearance-none rounded-md border-gray-300 pl-10 pr-8 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 transition-colors">
<option>1</option><option>2</option><option selected="">3</option><option>4</option>
</select>
<i className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" data-lucide="chevron-down"></i>
</div>
</div>
<div>
<label className="text-xs text-gray-600">Time</label>
<div className="mt-1 relative">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" data-lucide="clock"></i>
<input className="w-full rounded-md border-gray-300 pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 transition-colors" type="time" value="08:30"/>
</div>
</div>
</div>

<div>
<label className="text-xs text-gray-600">Round</label>
<div className="mt-2 inline-flex rounded-md ring-1 ring-gray-300 overflow-hidden">
<button className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:bg-gray-50" type="button">9</button>
<div className="w-px bg-gray-200"></div>
<button className="px-3 py-2 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800" type="button">18</button>
</div>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 ring-1 ring-emerald-700/50 hover:ring-emerald-800 transition-all" type="submit">
                  Continue
                  <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<p className="text-xs text-gray-500 text-center">No booking fee • Free cancellations up to 24h</p>
</form>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20" id="course">
<div className="mx-auto max-w-7xl px-6">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold">Course highlights</h2>
<p className="mt-2 text-gray-600 max-w-2xl">Natural contours, firm fescue, and views over the Pacific—crafted to reward strategy and precision.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors" href="#gallery">
            View gallery
            <i className="w-4 h-4" data-lucide="image"></i>
</a>
</div>
<div className="mt-10 grid md:grid-cols-3 gap-6">

<div className="group rounded-xl ring-1 ring-gray-200 bg-white overflow-hidden hover:shadow-sm transition-all">
<img alt="Coastal par-3 hole" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1535139262971-c51845709a48?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="p-5">
<div className="inline-flex items-center gap-2 text-emerald-800 bg-emerald-50 ring-1 ring-emerald-200 rounded px-2 py-0.5 text-xs">Signature Par-3</div>
<h3 className="mt-3 text-xl tracking-tight font-semibold">Cliffside sixteen</h3>
<p className="mt-1.5 text-sm text-gray-600">Play the wind over the cove to a narrow green defended by natural dunes.</p>
<div className="mt-4 inline-flex items-center gap-2 text-sm text-emerald-800">
<i className="w-4 h-4" data-lucide="wind"></i>
                Prevailing westerlies
              </div>
</div>
</div>
<div className="group rounded-xl ring-1 ring-gray-200 bg-white overflow-hidden hover:shadow-sm transition-all">
<img alt="Practice facility" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="p-5">
<div className="inline-flex items-center gap-2 text-emerald-800 bg-emerald-50 ring-1 ring-emerald-200 rounded px-2 py-0.5 text-xs">Practice</div>
<h3 className="mt-3 text-xl tracking-tight font-semibold">Short-game complex</h3>
<p className="mt-1.5 text-sm text-gray-600">Two greens, three bunkers, and varied lies to dial in scoring shots.</p>
<div className="mt-4 inline-flex items-center gap-2 text-sm text-emerald-800">
<i className="w-4 h-4" data-lucide="target"></i>
                Tour-quality turf
              </div>
</div>
</div>
<div className="group rounded-xl ring-1 ring-gray-200 bg-white overflow-hidden hover:shadow-sm transition-all">
<img alt="Clubhouse and dining" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1519121785383-3229633bb75b?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="p-5">
<div className="inline-flex items-center gap-2 text-emerald-800 bg-emerald-50 ring-1 ring-emerald-200 rounded px-2 py-0.5 text-xs">Clubhouse</div>
<h3 className="mt-3 text-xl tracking-tight font-semibold">Dining with a view</h3>
<p className="mt-1.5 text-sm text-gray-600">Seasonal menus, local wines, and sunsets that linger over the Bridge.</p>
<div className="mt-4 inline-flex items-center gap-2 text-sm text-emerald-800">
<i className="w-4 h-4" data-lucide="utensils"></i>
                Reservations available
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 bg-gray-50 border-t border-b border-gray-200" id="tee-times">
<div className="mx-auto max-w-7xl px-6">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold">Reserve tee times</h2>
<p className="mt-2 text-gray-600">Public play after 10:30 AM. Members enjoy priority access and preferred rates.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors" href="#">
            Group bookings
            <i className="w-4 h-4" data-lucide="users"></i>
</a>
</div>
<div className="mt-8 grid lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 rounded-xl ring-1 ring-gray-200 bg-white p-4 sm:p-5">
<div className="flex flex-wrap items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold text-gray-700 ring-1 ring-gray-300 hover:bg-gray-50 hover:ring-gray-400 transition-all">
<i className="w-4 h-4" data-lucide="calendar"></i>
                Today
              </button>
<button className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 ring-1 ring-gray-300 hover:bg-gray-50 hover:ring-gray-400 transition-all">
                Tomorrow
              </button>
<button className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 ring-1 ring-gray-300 hover:bg-gray-50 hover:ring-gray-400 transition-all">
                Weekend
              </button>
<div className="ml-auto relative">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" data-lucide="search"></i>
<input className="rounded-md border-gray-300 pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 transition-colors" placeholder="Search time..." type="text"/>
</div>
</div>
<div className="mt-5 grid sm:grid-cols-2 xl:grid-cols-3 gap-3">

<button className="group flex items-center justify-between rounded-lg ring-1 ring-gray-200 bg-white px-3 py-3 hover:bg-gray-50 hover:ring-gray-300 transition-all">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-gray-600" data-lucide="clock"></i>
<div className="text-sm">
<div className="font-semibold tracking-tight">8:40 AM</div>
<div className="text-xs text-gray-500">Walking • 18</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-semibold text-emerald-800">$95</div>
<div className="text-xs text-gray-500">2 spots</div>
</div>
</button>
<button className="group flex items-center justify-between rounded-lg ring-1 ring-gray-200 bg-white px-3 py-3 hover:bg-gray-50 hover:ring-gray-300 transition-all">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-gray-600" data-lucide="clock"></i>
<div className="text-sm">
<div className="font-semibold tracking-tight">9:10 AM</div>
<div className="text-xs text-gray-500">Cart • 18</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-semibold text-emerald-800">$115</div>
<div className="text-xs text-gray-500">4 spots</div>
</div>
</button>
<button className="group flex items-center justify-between rounded-lg ring-1 ring-gray-200 bg-white px-3 py-3 hover:bg-gray-50 hover:ring-gray-300 transition-all">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-gray-600" data-lucide="clock"></i>
<div className="text-sm">
<div className="font-semibold tracking-tight">10:20 AM</div>
<div className="text-xs text-gray-500">Walking • 9</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-semibold text-emerald-800">$55</div>
<div className="text-xs text-gray-500">3 spots</div>
</div>
</button>
<button className="group flex items-center justify-between rounded-lg ring-1 ring-gray-200 bg-white px-3 py-3 hover:bg-gray-50 hover:ring-gray-300 transition-all">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-gray-600" data-lucide="clock"></i>
<div className="text-sm">
<div className="font-semibold tracking-tight">11:05 AM</div>
<div className="text-xs text-gray-500">Cart • 18</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-semibold text-emerald-800">$120</div>
<div className="text-xs text-gray-500">1 spot</div>
</div>
</button>
<button className="group flex items-center justify-between rounded-lg ring-1 ring-gray-200 bg-white px-3 py-3 hover:bg-gray-50 hover:ring-gray-300 transition-all">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-gray-600" data-lucide="clock"></i>
<div className="text-sm">
<div className="font-semibold tracking-tight">12:30 PM</div>
<div className="text-xs text-gray-500">Walking • 18</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-semibold text-emerald-800">$105</div>
<div className="text-xs text-gray-500">4 spots</div>
</div>
</button>
<button className="group flex items-center justify-between rounded-lg ring-1 ring-gray-200 bg-white px-3 py-3 hover:bg-gray-50 hover:ring-gray-300 transition-all">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-gray-600" data-lucide="clock"></i>
<div className="text-sm">
<div className="font-semibold tracking-tight">1:15 PM</div>
<div className="text-xs text-gray-500">Cart • 9</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-semibold text-emerald-800">$60</div>
<div className="text-xs text-gray-500">2 spots</div>
</div>
</button>
</div>
</div>

<div className="rounded-xl ring-1 ring-gray-200 bg-white p-5">
<h3 className="text-lg tracking-tight font-semibold">Policies</h3>
<ul className="mt-3 space-y-2 text-sm text-gray-600">
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-gray-500 mt-0.5" data-lucide="info"></i>
                24-hour cancellation window
              </li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-gray-500 mt-0.5" data-lucide="parking-circle-off"></i>
                Limited parking on weekends; rideshare recommended
              </li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-gray-500 mt-0.5" data-lucide="shield-check"></i>
                Soft spikes only; proper golf attire required
              </li>
</ul>
<a className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors" href="#">
              Full terms
              <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20" id="membership">
<div className="mx-auto max-w-7xl px-6">
<div className="text-center max-w-2xl mx-auto">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold">Memberships for every golfer</h2>
<p className="mt-2 text-gray-600">Priority tee times, exclusive events, and year-round access to practice facilities.</p>
</div>
<div className="mt-10 grid md:grid-cols-3 gap-6">

<div className="flex flex-col rounded-xl ring-1 ring-gray-200 bg-white p-6 hover:shadow-sm transition-all">
<div className="flex items-center justify-between">
<h3 className="text-xl tracking-tight font-semibold">Weekday</h3>
<span className="text-xs text-gray-700 bg-gray-50 ring-1 ring-gray-200 rounded px-2 py-0.5">Best value</span>
</div>
<div className="mt-4">
<div className="text-3xl font-semibold tracking-tight">$149</div>
<div className="text-xs text-gray-500">per month</div>
</div>
<ul className="mt-4 space-y-2 text-sm text-gray-600">
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-700" data-lucide="check"></i>
                Mon–Fri access after 8:30 AM
              </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-700" data-lucide="check"></i>
                10-day advance booking
              </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-700" data-lucide="check"></i>
                Practice facility access
              </li>
</ul>
<a className="mt-5 inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold text-emerald-900 ring-1 ring-gray-300 hover:ring-gray-400 hover:bg-gray-50 transition-all" href="#">
              Choose Weekday
              <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="relative flex flex-col rounded-xl ring-2 ring-emerald-300 bg-white p-6 shadow-sm">
<div className="absolute -top-3 right-4 text-xs text-emerald-900 bg-emerald-50 ring-1 ring-emerald-200 rounded px-2 py-0.5">Most popular</div>
<h3 className="text-xl tracking-tight font-semibold">Full</h3>
<div className="mt-4">
<div className="text-3xl font-semibold tracking-tight">$239</div>
<div className="text-xs text-gray-500">per month</div>
</div>
<ul className="mt-4 space-y-2 text-sm text-gray-600">
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-700" data-lucide="check"></i>
                7-day access, any time
              </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-700" data-lucide="check"></i>
                14-day advance booking
              </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-700" data-lucide="check"></i>
                Guest passes and event invites
              </li>
</ul>
<a className="mt-5 inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 ring-1 ring-emerald-700/50 hover:ring-emerald-800 transition-all" href="#">
              Choose Full
              <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="flex flex-col rounded-xl ring-1 ring-gray-200 bg-white p-6 hover:shadow-sm transition-all">
<h3 className="text-xl tracking-tight font-semibold">Young Professional</h3>
<div className="mt-4">
<div className="text-3xl font-semibold tracking-tight">$189</div>
<div className="text-xs text-gray-500">per month</div>
</div>
<ul className="mt-4 space-y-2 text-sm text-gray-600">
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-700" data-lucide="check"></i>
                Ages 21–35
              </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-700" data-lucide="check"></i>
                12-day advance booking
              </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-700" data-lucide="check"></i>
                League nights &amp; socials
              </li>
</ul>
<a className="mt-5 inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold text-emerald-900 ring-1 ring-gray-300 hover:ring-gray-400 hover:bg-gray-50 transition-all" href="#">
              Choose YP
              <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 bg-gray-50 border-t border-b border-gray-200" id="gallery">
<div className="mx-auto max-w-7xl px-6">
<div className="flex items-end justify-between">
<div>
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold">Gallery</h2>
<p className="mt-2 text-gray-600">Scenes from the course, from foggy mornings to golden evenings.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors" href="#contact">
            Book a tour
            <i className="w-4 h-4" data-lucide="compass"></i>
</a>
</div>
<div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
<div className="rounded-lg overflow-hidden ring-1 ring-gray-200">
<img alt="Golden hour fairway" className="h-44 md:h-56 w-full object-cover hover:scale-[1.02] transition-transform" src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="rounded-lg overflow-hidden ring-1 ring-gray-200">
<img alt="Golden Gate bridge view" className="h-44 md:h-56 w-full object-cover hover:scale-[1.02] transition-transform" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
</div>
<div className="rounded-lg overflow-hidden ring-1 ring-gray-200">
<img alt="Putting green" className="h-44 md:h-56 w-full object-cover hover:scale-[1.02] transition-transform" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="rounded-lg overflow-hidden ring-1 ring-gray-200">
<img alt="Clubhouse terrace" className="h-44 md:h-56 w-full object-cover hover:scale-[1.02] transition-transform" src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="rounded-lg overflow-hidden ring-1 ring-gray-200">
<img alt="Bunker complex" className="h-44 md:h-56 w-full object-cover hover:scale-[1.02] transition-transform" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
<div className="rounded-lg overflow-hidden ring-1 ring-gray-200">
<img alt="Coastal views" className="h-44 md:h-56 w-full object-cover hover:scale-[1.02] transition-transform" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20" id="events">
<div className="mx-auto max-w-7xl px-6">
<div className="text-center max-w-2xl mx-auto">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold">What players say</h2>
<p className="mt-2 text-gray-600">Consistent conditioning, memorable holes, and a welcoming community.</p>
</div>
<div className="mt-10 grid md:grid-cols-3 gap-6">
<div className="rounded-xl ring-1 ring-gray-200 bg-white p-6">
<div className="flex items-center gap-3">
<img alt="Member portrait" className="h-10 w-10 rounded-full object-cover ring-1 ring-gray-200" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-semibold tracking-tight">Alex P.</div>
<div className="text-xs text-gray-500">Member since 2021</div>
</div>
</div>
<p className="mt-4 text-sm text-gray-700">“Firm fairways, quick greens, and that trademark ocean breeze—this course asks all the right questions.”</p>
</div>
<div className="rounded-xl ring-1 ring-gray-200 bg-white p-6">
<div className="flex items-center gap-3">
<img alt="Golfer portrait" className="h-10 w-10 rounded-full object-cover ring-1 ring-gray-200" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-semibold tracking-tight">Priya S.</div>
<div className="text-xs text-gray-500">Weekend player</div>
</div>
</div>
<p className="mt-4 text-sm text-gray-700">“Great pace of play and a practice area that actually helps my scoring.”</p>
</div>
<div className="rounded-xl ring-1 ring-gray-200 bg-white p-6">
<div className="flex items-center gap-3">
<img alt="Visitor portrait" className="h-10 w-10 rounded-full object-cover ring-1 ring-gray-200" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-semibold tracking-tight">Diego R.</div>
<div className="text-xs text-gray-500">Visiting from LA</div>
</div>
</div>
<p className="mt-4 text-sm text-gray-700">“Views for days and a routing that keeps you thinking. Will be back.”</p>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 bg-gray-50 border-t border-gray-200" id="contact">
<div className="mx-auto max-w-7xl px-6">
<div className="grid lg:grid-cols-2 gap-8">
<div>
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold">Visit us</h2>
<p className="mt-2 text-gray-600">Just minutes from the Presidio and the Marina. Street parking and rideshare drop-off available at the clubhouse.</p>
<div className="mt-6 space-y-3 text-sm">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-gray-600" data-lucide="map-pin"></i>
                100 Marina Blvd, San Francisco, CA 94123
              </div>
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-gray-600" data-lucide="phone"></i>
                (415) 555-0130
              </div>
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-gray-600" data-lucide="mail"></i>
                tee-times@goldengategolf.club
              </div>
</div>
<form className="mt-6 grid sm:grid-cols-2 gap-3">
<input className="rounded-md border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 transition-colors" placeholder="Full name" type="text"/>
<input className="rounded-md border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 transition-colors" placeholder="Email address" type="email"/>
<div className="sm:col-span-2">
<textarea className="w-full rounded-md border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 transition-colors" placeholder="How can we help?" rows="4"></textarea>
</div>
<button className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 ring-1 ring-emerald-700/50 hover:ring-emerald-800 transition-all">
                Send message
                <i className="w-4 h-4" data-lucide="send"></i>
</button>
</form>
</div>
<div className="rounded-xl ring-1 ring-gray-200 bg-white overflow-hidden">
<div className="h-72 sm:h-96 w-full">
<img alt="Map placeholder of San Francisco waterfront" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&amp;w=2200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4 border-t border-gray-200">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-gray-600" data-lucide="navigation"></i>
<a className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors" href="https://maps.apple.com/?q=100+Marina+Blvd,+San+Francisco,+CA">Open in Maps</a>
</div>
</div>
</div>
</div>

<div className="mt-12 rounded-xl ring-1 ring-gray-200 bg-white p-6">
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
<div className="flex-1">
<h3 className="text-lg tracking-tight font-semibold">Get the monthly course report</h3>
<p className="text-sm text-gray-600">Course conditions, upcoming events, and exclusive offers.</p>
</div>
<form className="w-full sm:w-auto flex gap-2">
<input className="w-full sm:w-64 rounded-md border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 transition-colors" placeholder="you@example.com" type="email"/>
<button className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 ring-1 ring-emerald-700/50 hover:ring-emerald-800 transition-all">
                Subscribe
                <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-gray-200">
<div className="mx-auto max-w-7xl px-6">
<div className="grid md:grid-cols-4 gap-8">
<div className="md:col-span-2">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-emerald-600/10 ring-1 ring-emerald-200 flex items-center justify-center text-emerald-700 tracking-tight font-semibold">
<span className="text-[11px] leading-none">GG</span>
</div>
<span className="text-base tracking-tight font-semibold text-gray-900">Golden Gate Golf Club</span>
</div>
<p className="mt-3 text-sm text-gray-600 max-w-md">Where the city meets the sea. A timeless walk with modern conditioning and thoughtful design.</p>
</div>
<div>
<div className="text-sm font-semibold tracking-tight">Explore</div>
<ul className="mt-3 space-y-2 text-sm text-gray-600">
<li><a className="hover:text-gray-900 transition-colors" href="#course">Course</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#membership">Membership</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#tee-times">Tee Times</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#events">Events</a></li>
</ul>
</div>
<div>
<div className="text-sm font-semibold tracking-tight">Connect</div></div></div></div></footer>
    </>
  );
}
