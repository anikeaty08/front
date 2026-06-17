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



// REMIX: Adjust the brand palette here
tailwind.config = {
theme: {
extend: {
colors: {
kwela: {
50:'#FFF2E8',100:'#FFE3D1',200:'#FFC4A3',300:'#FFA373',
400:'#FF8749',500:'#FF6A00',600:'#FF5400',700:'#E24A00',
800:'#B83D00',900:'#7A2900'
},
charcoal:'#0F172A'
},
boxShadow: { 'soft':'0 10px 30px rgba(0,0,0,.08)' }
}
}
}



      document.addEventListener('DOMContentLoaded', () => {
        // REMIX: set lucide stroke width to 1.5
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        showPage('home');
        updateClock();
        setInterval(updateClock, 60000);
      });

      function showPage(id){
        document.querySelectorAll('#pages > section').forEach(s => s.classList.add('hidden'));
        const el = document.getElementById(id); if(el) el.classList.remove('hidden');
        const map = {home:'nav-home', routes:'nav-routes', map:'nav-map', fare:'nav-fare'};
        Object.entries(map).forEach(([page,btnId]) => {
          const btn = document.getElementById(btnId); if(!btn) return;
          const icon = btn.querySelector('i');
          if(page === id){ icon.classList.add('text-kwela-400'); } else { icon.classList.remove('text-kwela-400'); }
        });
        toggleMenu(false);
      }

      function toggleMenu(open){
        const m=document.getElementById('side-menu'), o=document.getElementById('overlay');
        if(open){ m.style.transform='translateX(0)'; o.classList.remove('hidden'); }
        else{ m.style.transform='translateX(-100%)'; o.classList.add('hidden'); }
      }

      function openFromMenu(p){ showPage(p); toggleMenu(false); }

      function toggleDepartArrive(opt){
        const d=document.getElementById('departBtn'), a=document.getElementById('arriveBtn');
        if(!d || !a) return;
        if(opt==='depart'){
          d.classList.add('bg-kwela-600','text-white');
          a.classList.remove('bg-kwela-600','text-white'); a.classList.add('text-neutral-700');
        } else {
          a.classList.add('bg-kwela-600','text-white');
          d.classList.remove('bg-kwela-600','text-white'); d.classList.add('text-neutral-700');
        }
      }

      function filterMap(){ alert('Filter coming soon'); }

      function updateClock(){
        const n=new Date(); const hh=String(n.getHours()).padStart(2,'0'); const mm=String(n.getMinutes()).padStart(2,'0');
        const el=document.getElementById('clock'); if(el) el.textContent=`${hh}:${mm}`;
      }

      // REMIX: custom switch logic
      function toggleSwitch(id){
        const btn = document.getElementById(id);
        if(!btn) return;
        const isOn = btn.getAttribute('aria-checked') === 'true';
        btn.setAttribute('aria-checked', String(!isOn));
        btn.classList.toggle('bg-kwela-600', !isOn);
        btn.classList.toggle('bg-neutral-300', isOn);
        const knob = btn.querySelector('span#notifKnob');
        if(knob){
          knob.style.transform = !isOn ? 'translateX(16px)' : 'translateX(0px)';
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
      
<main className="max-w-5xl mx-auto pt-10 pb-10 px-4 h-full flex justify-center">

<div className="relative w-[320px] md:w-[360px] h-[720px] rounded-[42px] bg-white shadow-2xl ring-1 ring-black/5 overflow-hidden">

<div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-br from-kwela-600 via-kwela-500 to-kwela-400"></div>

<div className="relative h-12 z-10">
<div className="absolute left-1/2 -translate-x-1/2 top-2 notch"></div>
<div className="px-4 pt-2 flex items-center justify-between text-xs text-white/90">
<span id="clock">11:58</span>
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="wifi"></i>
<i className="w-4 h-4" data-lucide="signal"></i>
<i className="w-4 h-4" data-lucide="battery"></i>
</div>
</div>
</div>

<div className="absolute inset-0 bg-black/40 z-30 hidden" id="overlay" onclick="toggleMenu(false)"></div>
<aside className="absolute top-0 bottom-0 left-0 w-64 bg-white z-40 transform -translate-x-full transition-transform p-6 pt-12 space-y-6 shadow-xl" id="side-menu">
<div className="flex items-center gap-3">

<div className="w-8 h-8 rounded-xl bg-kwela-600 text-white flex items-center justify-center shadow"><i className="w-4 h-4" data-lucide="navigation"></i></div>
<div className="leading-tight">
<p className="text-[11px] text-neutral-500">Welcome to</p>
<p className="font-semibold tracking-tight">Kwela</p>
</div>
</div>
<nav className="space-y-3 text-neutral-800">
<button className="flex items-center gap-3 w-full text-left text-[15px] hover:text-kwela-600" onclick="openFromMenu('home')"><i className="w-5 h-5" data-lucide="home"></i>Dashboard</button>
<button className="flex items-center gap-3 w-full text-left text-[15px] hover:text-kwela-600" onclick="openFromMenu('routes')"><i className="w-5 h-5" data-lucide="list"></i>Routes</button>
<button className="flex items-center gap-3 w-full text-left text-[15px] hover:text-kwela-600" onclick="openFromMenu('map')"><i className="w-5 h-5" data-lucide="map"></i>Map Explorer</button>
<button className="flex items-center gap-3 w-full text-left text-[15px] hover:text-kwela-600" onclick="openFromMenu('fare')"><i className="w-5 h-5" data-lucide="coins"></i>Fare Calculator</button>
<button className="flex items-center gap-3 w-full text-left text-[15px] hover:text-kwela-600" onclick="openFromMenu('topup')"><i className="w-5 h-5" data-lucide="credit-card"></i>Top-ups</button>
<button className="flex items-center gap-3 w-full text-left text-[15px] hover:text-kwela-600" onclick="openFromMenu('settings')"><i className="w-5 h-5" data-lucide="settings"></i>Settings</button>

<div className="pt-2 border-t border-neutral-100"></div>
<button className="flex items-center gap-3 w-full text-left text-[15px] hover:text-kwela-600" onclick="openFromMenu('nearby')"><i className="w-5 h-5" data-lucide="map-pin"></i>Nearby ranks</button>
<button className="flex items-center gap-3 w-full text-left text-[15px] hover:text-kwela-600" onclick="openFromMenu('saved')"><i className="w-5 h-5" data-lucide="bookmark"></i>Saved trips</button>
</nav>
</aside>

<div className="absolute top-12 bottom-20 inset-x-0 overflow-y-auto no-scrollbar z-10" id="pages">

<section className="px-4 pb-6 space-y-4" id="home">
<div className="mt-3 flex items-center justify-between text-white">
<div className="flex items-center gap-2">
<button className="p-2 rounded-full hover:bg-white/10 transition" onclick="toggleMenu(true)"><i className="w-5 h-5" data-lucide="menu"></i></button>
<div className="ml-1 flex items-center gap-2">

<svg className="text-white" height="24" viewbox="0 0 24 24" width="24">
<circle cx="12" cy="12" fill="currentColor" opacity="0.18" r="10"></circle>
<path d="M6 13h12l-1.2-3.5a2 2 0 0 0-1.9-1.3H9.1a2 2 0 0 0-1.9 1.3L6 13Z" fill="currentColor"></path>
<rect fill="#fff" height="1.7" rx=".8" width="9.6" x="7.2" y="9.5"></rect>
</svg>
<span className="text-lg font-semibold tracking-tight">Kwela</span>
</div>
</div>
<button className="p-2 rounded-full hover:bg-white/10 transition" onclick="showPage('saved')" title="Saved"><i className="w-5 h-5" data-lucide="bookmark"></i></button>
</div>

<div className="glass rounded-3xl shadow-soft mt-3 p-4 text-neutral-900">
<p className="text-[13px] text-neutral-600">Plan your taxi route</p>
<div className="flex items-center gap-3 mt-1">
<div className="w-10 h-10 rounded-xl bg-kwela-600 text-white flex items-center justify-center shadow"><i className="w-5 h-5" data-lucide="waypoints"></i></div>
<div className="flex-1">
<p className="text-[18px] tracking-tight font-semibold">Where do you want to go?</p>
<div className="relative mt-2">

<input className="w-full pl-10 pr-3 py-3 rounded-2xl border border-neutral-200 placeholder-neutral-400 text-sm focus:border-kwela-500 focus:ring-0" placeholder="Search destination" type="text"/>
<i className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 w-4 h-4" data-lucide="search"></i>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-3 gap-3">
<button className="rounded-2xl bg-white border border-neutral-200 p-4 flex flex-col items-center hover:border-kwela-500 hover:shadow-soft transition" onclick="showPage('routes')">
<i className="w-6 h-6 text-kwela-600" data-lucide="list"></i>
<span className="mt-2 text-[12px] font-medium">Routes</span>
</button>
<button className="rounded-2xl bg-white border border-neutral-200 p-4 flex flex-col items-center hover:border-kwela-500 hover:shadow-soft transition" onclick="showPage('map')">
<i className="w-6 h-6 text-kwela-600" data-lucide="map"></i>
<span className="mt-2 text-[12px] font-medium">Map</span>
</button>
<button className="rounded-2xl bg-white border border-neutral-200 p-4 flex flex-col items-center hover:border-kwela-500 hover:shadow-soft transition" onclick="showPage('fare')">
<i className="w-6 h-6 text-kwela-600" data-lucide="coins"></i>
<span className="mt-2 text-[12px] font-medium">Fare</span>
</button>
</div>

<div className="grid grid-cols-3 gap-3">
<button className="rounded-2xl bg-white border border-neutral-200 p-4 flex flex-col items-center hover:border-kwela-500 hover:shadow-soft transition" onclick="showPage('nearby')">
<i className="w-6 h-6 text-kwela-600" data-lucide="map-pin"></i>
<span className="mt-2 text-[12px] font-medium">Nearby</span>
</button>
<button className="rounded-2xl bg-white border border-neutral-200 p-4 flex flex-col items-center hover:border-kwela-500 hover:shadow-soft transition" onclick="showPage('saved')">
<i className="w-6 h-6 text-kwela-600" data-lucide="bookmark"></i>
<span className="mt-2 text-[12px] font-medium">Saved</span>
</button>
<div className="rounded-2xl border border-dashed border-neutral-200 p-4 flex flex-col items-center justify-center text-neutral-400">
<i className="w-6 h-6" data-lucide="plus"></i>
<span className="mt-2 text-[12px]">Add</span>
</div>
</div>

<div className="grid grid-cols-2 gap-3">
<div className="rounded-2xl border border-neutral-200 p-4 bg-white shadow-sm">
<div className="flex items-center justify-between">
<div>
<p className="text-3xl font-semibold">23°</p>
<p className="text-xs text-neutral-500">Johannesburg</p>
</div>
<i className="w-8 h-8 text-kwela-600" data-lucide="sun"></i>
</div>
</div>
<div className="rounded-2xl border border-neutral-200 p-4 bg-white shadow-sm">
<div className="flex items-start gap-2">
<i className="w-5 h-5 text-red-600" data-lucide="alert-triangle"></i>
<p className="text-[12px] text-neutral-700">Service alert: stop relocation on route 104 until end of November.</p>
</div>
</div>
</div>
</section>

<section className="hidden px-4 pb-6 space-y-4" id="routes">
<div className="flex items-center justify-between mt-2">
<button className="p-2 rounded-full hover:bg-neutral-100" onclick="showPage('home')"><i className="w-5 h-5" data-lucide="chevron-left"></i></button>
<h2 className="text-lg font-semibold">Routes</h2>
<div></div>
</div>
<div className="relative mt-1">
<input className="w-full pl-10 pr-4 py-2 rounded-xl border border-neutral-200 text-sm placeholder-neutral-400 focus:border-kwela-500 focus:ring-0" placeholder="Search route" type="text"/>
<i className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 w-4 h-4" data-lucide="search"></i>
</div>
<div className="space-y-3 pt-2">

<button className="flex items-center gap-4 p-3 border border-neutral-200 rounded-xl hover:bg-neutral-50">
<span className="text-sm font-semibold px-2 py-1 rounded-md bg-emerald-500 text-white">101</span>
<span className="text-sm flex-1 text-left">Soweto — Johannesburg CBD</span>
<i className="w-4 h-4 text-neutral-400" data-lucide="chevron-right"></i>
</button>
<button className="flex items-center gap-4 p-3 border border-neutral-200 rounded-xl hover:bg-neutral-50">
<span className="text-sm font-semibold px-2 py-1 rounded-md bg-sky-500 text-white">102</span>
<span className="text-sm flex-1 text-left">Alexandra — Sandton</span>
<i className="w-4 h-4 text-neutral-400" data-lucide="chevron-right"></i>
</button>
<button className="flex items-center gap-4 p-3 border border-neutral-200 rounded-xl hover:bg-neutral-50">
<span className="text-sm font-semibold px-2 py-1 rounded-md bg-yellow-500 text-white">103</span>
<span className="text-sm flex-1 text-left">Mamelodi — Pretoria CBD</span>
<i className="w-4 h-4 text-neutral-400" data-lucide="chevron-right"></i>
</button>
</div>
</section>

<section className="hidden px-4 pb-6 space-y-4" id="map">
<div className="flex items-center justify-between mt-2">
<button className="p-2 rounded-full hover:bg-neutral-100" onclick="showPage('home')"><i className="w-5 h-5" data-lucide="chevron-left"></i></button>
<h2 className="text-lg font-semibold">Map Explorer</h2>
<div></div>
</div>

<div className="relative mt-2 w-full h-80 rounded-3xl overflow-hidden border border-neutral-200 shadow-soft">
<img alt="Static map of city roads" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1469489951495-36dbba0a1515?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-3 right-3 text-[11px] text-neutral-600 bg-white/70 backdrop-blur px-2 py-0.5 rounded-md">Static map preview</div>
<button className="absolute left-3 bottom-3 inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white text-[12px] font-medium border border-neutral-200 shadow-sm hover:bg-neutral-50" onclick="filterMap()">
<i className="w-4 h-4" data-lucide="sliders-horizontal"></i>Filter
              </button>
</div>
</section>

<section className="hidden px-4 pb-6 space-y-4" id="fare">
<div className="flex items-center justify-between mt-2">
<button className="p-2 rounded-full hover:bg-neutral-100" onclick="showPage('home')"><i className="w-5 h-5" data-lucide="chevron-left"></i></button>
<h2 className="text-lg font-semibold">Fare Calculator</h2>
<div></div>
</div>
<div className="space-y-3 mt-2">
<div>
<label className="text-xs text-neutral-600">From</label>
<select className="mt-1 w-full border border-neutral-200 rounded-xl py-2 px-3 text-sm focus:border-kwela-500 focus:ring-0">
<option selected="">Choose departure stop</option>
<option>Soweto Rank</option><option>Alexandra Rank</option><option>Mamelodi Rank</option>
</select>
</div>
<div>
<label className="text-xs text-neutral-600">To</label>
<select className="mt-1 w-full border border-neutral-200 rounded-xl py-2 px-3 text-sm focus:border-kwela-500 focus:ring-0">
<option selected="">Choose arrival stop</option>
<option>Johannesburg CBD</option><option>Sandton</option><option>Pretoria CBD</option>
</select>
</div>
<div className="flex items-center gap-3 mt-1">
<label className="text-xs text-neutral-600">I would like to</label>
<div className="flex border border-neutral-200 rounded-xl overflow-hidden">
<button className="px-4 py-1 text-sm font-medium text-white bg-kwela-600" id="departBtn" onclick="toggleDepartArrive('depart')">Depart</button>
<button className="px-4 py-1 text-sm font-medium text-neutral-700 hover:bg-neutral-100" id="arriveBtn" onclick="toggleDepartArrive('arrive')">Arrive</button>
</div>
</div>
<div className="flex items-center gap-3">
<div className="flex-1">
<label className="text-xs text-neutral-600">Date</label>
<input className="mt-1 w-full border border-neutral-200 rounded-xl py-2 px-3 text-sm focus:border-kwela-500 focus:ring-0" type="date" value="2025-10-12"/>
</div>
<div className="flex-1">
<label className="text-xs text-neutral-600">Time</label>
<input className="mt-1 w-full border border-neutral-200 rounded-xl py-2 px-3 text-sm focus:border-kwela-500 focus:ring-0" type="time" value="11:58"/>
</div>
</div>
<button className="w-full py-3 rounded-xl bg-kwela-600 text-white font-medium hover:bg-kwela-700 transition mt-2">Calculate Fare</button>
</div>
</section>

<section className="hidden px-4 pb-6 space-y-4" id="topup">
<div className="flex items-center justify-between mt-2">
<button className="p-2 rounded-full hover:bg-neutral-100" onclick="showPage('home')"><i className="w-5 h-5" data-lucide="chevron-left"></i></button>
<h2 className="text-lg font-semibold">Top-up Locations</h2>
<div></div>
</div>
<div className="relative mt-2 w-full h-80 rounded-3xl bg-white border border-neutral-200 shadow-soft">

<span className="absolute top-1/4 left-1/3"><i className="w-6 h-6 text-kwela-600" data-lucide="shopping-bag"></i></span>
<span className="absolute top-1/2 left-2/3"><i className="w-6 h-6 text-kwela-600" data-lucide="shopping-bag"></i></span>
<span className="absolute top-[70%] left-1/2"><i className="w-6 h-6 text-kwela-600" data-lucide="shopping-bag"></i></span>
</div>
<p className="text-xs text-neutral-500">Nearby retailers where you can top-up your Kwela wallet.</p>
</section>

<section className="hidden px-4 pb-6 space-y-4" id="settings">
<div className="flex items-center justify-between mt-2">
<button className="p-2 rounded-full hover:bg-neutral-100" onclick="showPage('home')"><i className="w-5 h-5" data-lucide="chevron-left"></i></button>
<h2 className="text-lg font-semibold">Settings</h2>
<div></div>
</div>
<div className="rounded-2xl bg-white border border-neutral-200 p-4 space-y-3 shadow-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3"><i className="w-5 h-5 text-kwela-600" data-lucide="bell"></i><span className="text-sm">Notifications</span></div>

<button aria-checked="true" className="relative inline-flex h-6 w-10 items-center rounded-full bg-kwela-600 transition-colors" id="notifSwitch" onclick="toggleSwitch('notifSwitch')" role="switch">
<span className="sr-only">Toggle notifications</span>
<span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform translate-x-4" id="notifKnob"></span>
</button>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3"><i className="w-5 h-5 text-kwela-600" data-lucide="languages"></i><span className="text-sm">Language</span></div>
<span className="text-sm text-neutral-500">English</span>
</div>
</div>
</section>

<section className="hidden px-4 pb-6 space-y-4" id="nearby">
<div className="flex items-center justify-between mt-2">
<button className="p-2 rounded-full hover:bg-neutral-100" onclick="showPage('home')"><i className="w-5 h-5" data-lucide="chevron-left"></i></button>
<h2 className="text-lg font-semibold">Nearby ranks</h2>
<div></div>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3 p-3 rounded-2xl border border-neutral-200 bg-white hover:bg-neutral-50">
<i className="w-5 h-5 text-kwela-600" data-lucide="map-pin"></i>
<div className="flex-1">
<p className="text-sm font-medium">Noord Street Taxi Rank</p>
<p className="text-[12px] text-neutral-500">0.6 km • Johannesburg CBD</p>
</div>
<i className="w-4 h-4 text-neutral-400" data-lucide="chevron-right"></i>
</div>
<div className="flex items-center gap-3 p-3 rounded-2xl border border-neutral-200 bg-white hover:bg-neutral-50">
<i className="w-5 h-5 text-kwela-600" data-lucide="map-pin"></i>
<div className="flex-1">
<p className="text-sm font-medium">Bree Taxi Rank</p>
<p className="text-[12px] text-neutral-500">1.1 km • Newtown</p>
</div>
<i className="w-4 h-4 text-neutral-400" data-lucide="chevron-right"></i>
</div>
</div>
</section>

<section className="hidden px-4 pb-6 space-y-4" id="saved">
<div className="flex items-center justify-between mt-2">
<button className="p-2 rounded-full hover:bg-neutral-100" onclick="showPage('home')"><i className="w-5 h-5" data-lucide="chevron-left"></i></button>
<h2 className="text-lg font-semibold">Saved trips</h2>
<div></div>
</div>
<div className="space-y-3">
<div className="p-3 rounded-2xl border border-neutral-200 bg-white">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-kwela-600" data-lucide="bookmark"></i>
<div className="flex-1">
<p className="text-sm font-medium">Home → CBD</p>
<p className="text-[12px] text-neutral-500">Weekdays, 7:30</p>
</div>
<button className="px-2 py-1 text-[12px] rounded-lg border border-neutral-200 hover:bg-neutral-50">Open</button>
</div>
</div>
<div className="p-3 rounded-2xl border border-neutral-200 bg-white">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-kwela-600" data-lucide="bookmark"></i>
<div className="flex-1">
<p className="text-sm font-medium">Alexandra → Sandton</p>
<p className="text-[12px] text-neutral-500">Weekends</p>
</div>
<button className="px-2 py-1 text-[12px] rounded-lg border border-neutral-200 hover:bg-neutral-50">Open</button>
</div>
</div>
</div>
</section>
</div>

<div className="absolute bottom-0 inset-x-0">
<div className="h-20 bg-charcoal text-white relative flex items-center justify-around rounded-t-[28px]">
<button className="p-3 rounded-xl flex flex-col items-center" id="nav-home" onclick="showPage('home')">
<i className="w-5 h-5" data-lucide="home"></i><span className="mt-1 text-[10px]">Home</span>
</button>
<button className="p-3 rounded-xl flex flex-col items-center" id="nav-routes" onclick="showPage('routes')">
<i className="w-5 h-5" data-lucide="list"></i><span className="mt-1 text-[10px]">Routes</span>
</button>
<button className="p-3 rounded-xl flex flex-col items-center" id="nav-map" onclick="showPage('map')">
<i className="w-5 h-5" data-lucide="map"></i><span className="mt-1 text-[10px]">Map</span>
</button>
<button className="p-3 rounded-xl flex flex-col items-center" id="nav-fare" onclick="showPage('fare')">
<i className="w-5 h-5" data-lucide="coins"></i><span className="mt-1 text-[10px]">Fare</span>
</button>
<button className="p-3 rounded-xl flex flex-col items-center" id="nav-more" onclick="toggleMenu(true)">
<i className="w-5 h-5" data-lucide="menu"></i><span className="mt-1 text-[10px]">More</span>
</button>
</div>
</div>
</div>
</main>



    </>
  );
}
