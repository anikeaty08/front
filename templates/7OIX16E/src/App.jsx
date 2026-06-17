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



    document.addEventListener('DOMContentLoaded',()=>lucide.createIcons());
    // dropdown script
    const dropdownBtn=document.getElementById('dropdownBtn');
    const dropdownMenu=document.getElementById('dropdownMenu');
    dropdownBtn?.addEventListener('click',(e)=>{
      e.stopPropagation();
      dropdownMenu.classList.toggle('hidden');
    });
    document.addEventListener('click',()=>dropdownMenu?.classList.add('hidden'));
    // Fade-in staggered animation
    window.addEventListener("DOMContentLoaded",()=>{
      document.querySelectorAll('.fade-in, .fade-in-blur').forEach(el=>{
        el.style.animationPlayState='running'
      });
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
      
<div className="flex flex-col lg:flex-row w-full h-full">

<aside className="bg-white/60 backdrop-blur-lg shadow-lg lg:h-screen lg:w-20 w-full flex lg:flex-col flex-row justify-between lg:py-6 px-4 fade-in stagger-1 lg:sticky lg:top-0 lg:min-h-screen z-30">
<div className="flex lg:flex-col flex-row gap-6 lg:gap-8 items-center">
<button className="rounded-full p-2 hover:bg-indigo-100 transition focus:outline-none focus:ring-2 focus:ring-indigo-200 group">
<i className="text-indigo-600 group-hover:scale-110 transition" data-lucide="user"></i>
</button>
<button className="rounded-full p-2 hover:bg-indigo-100 transition focus:outline-none focus:ring-2 focus:ring-indigo-200 group">
<i className="text-indigo-600 group-hover:scale-110 transition" data-lucide="image"></i>
</button>
<button className="rounded-full p-2 hover:bg-indigo-100 transition focus:outline-none focus:ring-2 focus:ring-indigo-200 group">
<i className="text-indigo-600 group-hover:scale-110 transition" data-lucide="cloud"></i>
</button>
</div>
<button className="rounded-full p-2 hover:bg-indigo-100 transition focus:outline-none focus:ring-2 focus:ring-indigo-200 group">
<i className="text-indigo-600 group-hover:scale-110 transition" data-lucide="settings"></i>
</button>
</aside>

<main className="flex-1 p-6 lg:p-10 space-y-8">

<div className="flex flex-col gap-4 fade-in stagger-2">
<div className="flex items-center gap-4">
<img alt="" className="w-12 h-12 rounded-full object-cover shadow" src="https://i.pravatar.cc/100?img=48"/>
<h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight">Hi Sandra,<br className="hidden sm:block"/>Welcome back!</h1>
</div>
<div className="relative w-full max-w-xl">
<input className="w-full rounded-full bg-white shadow px-5 py-3 pr-14 focus:outline-none focus:ring-2 focus:ring-indigo-300 custom-outline text-base transition" placeholder="Search for contacts..." type="text"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 bg-indigo-600 hover:bg-indigo-700 transition text-white p-2 rounded-full shadow-md">
<i className="w-5 h-5" data-lucide="search"></i>
</button>
</div>
</div>

<div className="grid lg:grid-cols-3 gap-6 fade-in stagger-3">

<div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-6 overflow-hidden flex flex-col gap-6">
<div className="flex">
<div className="w-40 min-w-[10rem] bg-indigo-600 text-white rounded-xl p-6 flex flex-col items-start justify-center gap-4 shadow-md transition-transform hover:scale-105 duration-200">
<div>
<p className="text-sm uppercase opacity-70">Total views</p>
<p className="text-3xl font-extrabold tracking-tight">72,593</p>
</div>
<div>
<p className="text-sm uppercase opacity-70">This week</p>
<p className="text-xl font-semibold tracking-tight">9,307</p>
</div>
<div>
<p className="text-sm uppercase opacity-70">Today</p>
<p className="text-xl font-semibold tracking-tight">1,328</p>
</div>
</div>
<div className="flex-1 pl-6">
<div className="flex justify-between items-start">
<h2 className="text-lg font-semibold mb-2 tracking-tight">Time spent</h2>
<span className="bg-yellow-300 text-slate-800 text-xs font-semibold px-3 py-1 rounded-full shadow">37 min</span>
</div>

<div>
<svg className="w-full h-32" viewbox="0 0 300 100">
<defs>
<lineargradient id="stats-gradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#6366f1" stop-opacity="0.3"></stop>
<stop offset="100%" stop-color="#6366f1" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0 70 C50 30 100 90 150 50 C200 10 250 60 300 40" fill="none" stroke="#6366f1" strokeLinecap="round" strokeWidth="3"></path>
<path d="M0 70 C50 30 100 90 150 50 C200 10 250 60 300 40 L300 100 L0 100 Z" fill="url(#stats-gradient)"></path>
</svg>
</div>
<div className="flex justify-between text-xs text-slate-500 mt-2 px-1">
<span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span className="text-indigo-600 font-semibold">Sat</span><span>Sun</span>
</div>
</div>
</div>
</div>

<div className="space-y-4">
<h3 className="font-semibold tracking-tight">Top posts</h3>
<div className="space-y-4">
<div className="rounded-[32px] overflow-hidden shadow-lg group transition hover:shadow-xl hover:scale-[1.02]">
<img alt="" className="w-full h-24 object-cover transition group-hover:scale-105 duration-200" src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&amp;fit=crop&amp;w=400&amp;q=60"/>
<p className="text-center py-2 font-medium">Synergy</p>
</div>
<div className="rounded-[32px] overflow-hidden shadow-lg group transition hover:shadow-xl hover:scale-[1.02]">
<img alt="" className="w-full h-24 object-cover transition group-hover:scale-105 duration-200" src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&amp;fit=crop&amp;w=400&amp;q=60"/>
<p className="text-center py-2 font-medium">Urban</p>
</div>
<div className="rounded-[32px] overflow-hidden shadow-lg group transition hover:shadow-xl hover:scale-[1.02]">
<img alt="" className="w-full h-24 object-cover transition group-hover:scale-105 duration-200" src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&amp;fit=crop&amp;w=400&amp;q=60"/>
<p className="text-center py-2 font-medium">Gardens</p>
</div>
<div className="rounded-[32px] overflow-hidden shadow-lg group transition hover:shadow-xl hover:scale-[1.02]">
<img alt="" className="w-full h-24 object-cover transition group-hover:scale-105 duration-200" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&amp;fit=crop&amp;w=400&amp;q=60"/>
<p className="text-center py-2 font-medium">Travel</p>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl shadow-md p-6 space-y-4 fade-in stagger-4">
<div className="flex items-center gap-3">
<img alt="" className="w-10 h-10 rounded-full object-cover" src="https://i.pravatar.cc/100?img=48"/>
<input className="flex-1 rounded-full bg-slate-100 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-300 custom-outline text-base transition" placeholder="My latest trip was..." type="text"/>
<button className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-md transition">Post now</button>
</div>
<div className="flex justify-between items-center text-sm">
<label className="flex items-center gap-2 cursor-pointer select-none">
<input className="peer appearance-none w-5 h-5 rounded-md border border-slate-300 checked:bg-indigo-600 checked:border-transparent transition" type="checkbox"/>
<span className="peer-checked:text-indigo-600">Private post</span>
</label>
<div className="relative">
<button className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold px-4 py-2 rounded-full shadow transition" id="dropdownBtn">
              Travel
              <i className="w-4 h-4" data-lucide="chevron-down"></i>
</button>
<ul className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-lg py-2 hidden z-10" id="dropdownMenu">
<li><button className="w-full text-left px-4 py-2 hover:bg-slate-100">Travel</button></li>
<li><button className="w-full text-left px-4 py-2 hover:bg-slate-100">Urban</button></li>
<li><button className="w-full text-left px-4 py-2 hover:bg-slate-100">Nature</button></li>
</ul>
</div>
</div>
</div>

<div className="grid lg:grid-cols-3 gap-6 fade-in stagger-5">

<div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-6">
<div className="grid md:grid-cols-3 gap-6">
<div className="bg-indigo-600 text-white rounded-xl p-6 flex flex-col gap-2 items-start shadow-md">
<p className="uppercase text-sm opacity-70">Recorded</p>
<p className="text-3xl font-extrabold tracking-tight">173 <span className="text-base font-medium">min</span></p>
<p className="uppercase text-sm opacity-70 mt-2">Screen play</p>
<p className="text-xl font-semibold tracking-tight">12 <span className="text-base font-medium">min</span></p>
</div>
<div className="flex flex-col items-center justify-center">
<svg className="w-28 h-28" viewbox="0 0 120 120">
<circle cx="60" cy="60" fill="none" r="54" stroke="#e5e7eb" strokeWidth="12"></circle>
<circle cx="60" cy="60" fill="none" r="54" stroke="#facc15" stroke-dasharray="339.29" stroke-dashoffset="145" strokeLinecap="round" strokeWidth="12" transform="rotate(-90 60 60)"></circle>
<text dominant-baseline="middle" fill="#1e293b" fontSize="22" font-weight="bold" text-anchor="middle" x="50%" y="50%">57.3%</text>
</svg>
<p className="font-semibold mt-2 tracking-tight">Goal progress</p>
</div>
<div className="flex flex-col items-center justify-center">
<svg className="w-28 h-28" viewbox="0 0 120 120">
<g className="fill-none stroke-indigo-400 stroke-[10]">
<line strokeLinecap="round" x1="20" x2="20" y1="100" y2="50"></line>
<line strokeLinecap="round" x1="45" x2="45" y1="100" y2="70"></line>
<line strokeLinecap="round" x1="70" x2="70" y1="100" y2="40"></line>
<line strokeLinecap="round" x1="95" x2="95" y1="100" y2="80"></line>
</g>
</svg>
<p className="font-semibold mt-2 tracking-tight">Daily records</p>
<span className="bg-yellow-300 text-slate-800 text-xs font-semibold px-3 py-1 rounded-full shadow mt-1">12 min</span>
</div>
</div>
</div>

<div className="space-y-4">
<h3 className="font-semibold tracking-tight">Linked accounts</h3>
<div className="flex gap-4">
<img alt="" className="w-8 h-8 hover:scale-110 transition" src="https://cdn.simpleicons.org/dropbox/6366f1" />
<img alt="" className="w-8 h-8 hover:scale-110 transition" src="https://cdn.simpleicons.org/vimeo/1ab7ea" />
<img alt="" className="w-8 h-8 hover:scale-110 transition" src="https://cdn.simpleicons.org/twitter/1da1f2" />
</img></img></img></div>
</div>
</div>
</main>

<aside className="lg:w-80 w-full bg-white/60 backdrop-blur-lg shadow-lg p-6 space-y-8 fade-in stagger-6">
<div className="bg-gradient-to-br from-indigo-600 to-indigo-400 rounded-3xl overflow-hidden shadow-xl relative group">
<img alt="" className="w-full h-56 object-cover opacity-80 group-hover:scale-105 transition" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&amp;fit=crop&amp;w=400&amp;q=60"/>
<div className="absolute top-4 left-4 text-white text-xs font-semibold">Popular this week</div>
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-white">
<p className="font-semibold">Jen Smith</p>
<div className="flex gap-1 justify-center mt-1">
<i className="w-4 h-4 fill-yellow-300 text-yellow-300" data-lucide="star"></i>
<i className="w-4 h-4 fill-yellow-300 text-yellow-300" data-lucide="star"></i>
<i className="w-4 h-4 fill-yellow-300 text-yellow-300" data-lucide="star"></i>
<i className="w-4 h-4 fill-yellow-300 text-yellow-300" data-lucide="star"></i>
<i className="w-4 h-4 text-white" data-lucide="star"></i>
</div>
<p className="text-xs mt-1">230,547</p>
</div>
</div>

<div className="space-y-6">
<h3 className="font-semibold tracking-tight">Contacts</h3>
<div className="space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="" className="w-10 h-10 rounded-full object-cover" src="https://i.pravatar.cc/100?img=32"/>
<div>
<p className="font-medium">Annie Batford</p>
<p className="text-xs text-slate-500 flex items-center gap-1"><i className="w-3 h-3" data-lucide="map-pin"></i> San Francisco</p>
</div>
</div>
<button className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold px-4 py-1 rounded-full transition">Add</button>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="" className="w-10 h-10 rounded-full object-cover" src="https://i.pravatar.cc/100?img=13"/>
<div>
<p className="font-medium">Nancy Smith</p>
<p className="text-xs text-slate-500 flex items-center gap-1"><i className="w-3 h-3" data-lucide="map-pin"></i> London</p>
</div>
</div>
<button className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold px-4 py-1 rounded-full transition">Add</button>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="" className="w-10 h-10 rounded-full object-cover" src="https://i.pravatar.cc/100?img=3"/>
<div>
<p className="font-medium">Jack Bravis</p>
<p className="text-xs text-slate-500 flex items-center gap-1"><i className="w-3 h-3" data-lucide="map-pin"></i> New York</p>
</div>
</div>
<button className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold px-4 py-1 rounded-full transition">Add</button>
</div>
</div>
</div>

<div className="space-y-4">
<h3 className="font-semibold tracking-tight">Top accounts</h3>
<div className="flex gap-4 overflow-x-auto">
<div className="flex flex-col items-center">
<img alt="" className="w-16 h-16 rounded-2xl object-cover" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&amp;fit=crop&amp;w=120&amp;q=60"/>
<p className="text-xs mt-2 font-medium">Mark Damon</p>
</div>
<div className="flex flex-col items-center">
<img alt="" className="w-16 h-16 rounded-2xl object-cover" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&amp;fit=crop&amp;w=120&amp;q=60"/>
<p className="text-xs mt-2 font-medium">Max Khudoyan</p>
</div>
<div className="flex flex-col items-center">
<img alt="" className="w-16 h-16 rounded-2xl object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&amp;fit=crop&amp;w=120&amp;q=60"/>
<p className="text-xs mt-2 font-medium">Samantha</p>
</div>
</div>
</div>
</aside>
</div>


    </>
  );
}
