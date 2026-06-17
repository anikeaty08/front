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
  lucide.createIcons();
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
      

<div className="flex flex-col xl:flex-row gap-8 max-w-6xl w-full justify-center">

<div className="relative w-full max-w-[320px] xl:mx-0 h-[640px] flex flex-col overflow-hidden hover:scale-105 transition-transform duration-300 bg-indigo-800 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3d88d288-2c8c-4130-b2d9-20c5a68b3998_1600w.jpg)] bg-cover rounded-[2.5rem] mr-auto ml-auto shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">

<div className="flex pt-6 pr-6 pl-6 items-center justify-between">
<button className="p-2 rounded-full transition-colors bg-indigo-700 hover:bg-indigo-600">
<svg className="lucide lucide-arrow-left w-5 h-5 stroke-[2.5] text-indigo-200" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button className="p-2 rounded-full transition-colors bg-indigo-700 hover:bg-indigo-600">
<svg className="lucide lucide-sun w-5 h-5 stroke-[2.5] text-indigo-200" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
</button>
</div>

<div className="mt-6 pr-6 pl-6">
<h1 className="text-xl font-semibold leading-tight tracking-tight font-geist text-indigo-100">Check Your Learning Roadmap<span className="font-medium font-geist">and Upcoming Lessons</span></h1>
</div>

<div className="flex-1 flex relative max-h-44 items-center justify-center">
<div className="w-40 h-40 rounded-full flex items-center justify-center bg-black/30">
<img alt="Learning illustration" className="w-32 h-32 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51a15b-4dd1-4b40-b2b9-2e943bd5e564_320w.jpg" style={{}}/>
</div>
</div>

<div className="px-6 pb-4">
<div className="flex items-center justify-center gap-2 rounded-full py-3 px-4 bg-black/30">
<span className="text-xs font-medium font-geist text-indigo-100">Sun</span>
<span className="w-4 h-4 rounded-full bg-black"></span>
<span className="text-xs font-medium font-geist text-indigo-100">Mon</span>
<span className="w-4 h-4 rounded-full bg-black"></span>
<span className="text-xs font-medium font-geist text-indigo-100">Tue</span>
<span className="w-4 h-4 rounded-full bg-black"></span>
<span className="text-xs font-medium font-geist text-indigo-100">Wed</span>
<span className="w-4 h-4 rounded-full border-2 bg-black border-indigo-300"></span>
<span className="text-xs font-medium font-geist text-indigo-100">Thu</span>
<span className="w-4 h-4 rounded-full bg-black/50"></span>
<span className="text-xs font-medium font-geist text-indigo-100">Fri</span>
<span className="w-4 h-4 rounded-full bg-black/50"></span>
<span className="text-xs font-medium font-geist text-indigo-100">Sat</span>
<span className="w-4 h-4 rounded-full bg-black/50"></span>
</div>
</div>

<div className="flex-1 overflow-y-auto px-6 pb-8 space-y-3">
<h2 className="text-lg font-semibold tracking-tight font-geist text-indigo-100">My Courses</h2>
<div className="rounded-2xl p-4 flex items-center justify-between transition-colors bg-white text-black hover:bg-gray-200">
<div className="flex items-center gap-4">
<svg className="lucide lucide-compass w-6 h-6 stroke-[1.5]" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
<div>
<p className="font-semibold font-geist">AI Fundamentals</p>
<p className="text-xs font-geist text-black/70">Master the basics</p>
</div>
</div>
<button className="p-2 rounded-full transition-colors bg-black/10 hover:bg-black/20">
<svg className="lucide lucide-arrow-right w-5 h-5 stroke-[1.5]" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<div className="rounded-2xl p-4 flex items-center justify-between transition-colors bg-black/40 text-indigo-100 hover:bg-black/50">
<div className="flex items-center gap-4">
<svg className="lucide lucide-code-2 w-6 h-6 stroke-[1.5]" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
<div>
<p className="font-semibold font-geist">React Mastery</p>
<p className="text-xs font-geist text-indigo-100/70">Build modern apps</p>
</div>
</div>
<button className="p-2 rounded-full transition-colors bg-indigo-700 hover:bg-indigo-600">
<svg className="lucide lucide-arrow-right w-5 h-5 stroke-[1.5]" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<div className="rounded-2xl p-4 flex items-center justify-between transition-colors bg-black/30 text-indigo-100 hover:bg-black/40">
<div className="flex items-center gap-4">
<svg className="lucide lucide-palette w-6 h-6 stroke-[1.5]" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
<div>
<p className="font-semibold font-geist">Figma Design</p>
<p className="text-xs font-geist text-indigo-100/70">UI/UX Essentials</p>
</div>
</div>
<button className="p-2 rounded-full transition-colors bg-indigo-700 hover:bg-indigo-600">
<svg className="lucide lucide-arrow-right w-5 h-5 stroke-[1.5]" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>

<div className="relative w-full max-w-[320px] xl:mx-0 h-[640px] overflow-hidden flex flex-col hover:scale-105 transition-transform duration-300 bg-black rounded-[2.5rem] mr-auto ml-auto shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">

<div className="flex items-center justify-between px-6 pt-6">
<div className="flex items-center gap-3">
<img alt="Profile" className="w-10 h-10 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/226384e4-8238-463a-baaa-645484f90b86_320w.jpg"/>
<div className="">
<p className="font-semibold font-geist text-slate-100">Hello, Alex</p>
<p className="text-xs text-slate-500 font-geist">Level Up</p>
</div>
</div>
<button className="relative">
<svg className="lucide lucide-bell w-6 h-6 stroke-[1.5] text-slate-300" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="absolute top-0 right-0 inline-flex h-2 w-2 rounded-full bg-red-500"></span>
</button>
</div>

<div className="px-6 mt-6">
<div className="relative">
<input className="w-full h-10 rounded-full pl-10 pr-4 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all bg-slate-900" placeholder="Search courses, skills..." type="text"/>
<svg className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 stroke-[1.5] text-slate-600" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
</div>

<div className="px-6 mt-6">
<div className="w-full flex flex-col gap-4 bg-indigo-800 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2082cb53-c0f0-46e5-a4e5-8de1d2247343_800w.jpg)] bg-cover rounded-3xl pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<svg className="lucide lucide-monitor-play w-6 h-6 stroke-[1.5] text-indigo-200" data-lucide="monitor-play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z"></path><path d="M12 17v4"></path><path d="M8 21h8"></path><rect height="14" rx="2" width="20" x="2" y="3"></rect></svg>
<h3 className="font-semibold tracking-tight font-geist text-indigo-100">UX Lab: Motion Edition</h3>
</div>
<span className="text-xs font-semibold font-geist text-indigo-100/70">2/3 spots</span>
</div>
<button className="self-start px-4 py-2 rounded-full text-sm font-medium transition-colors font-geist bg-white text-black hover:bg-gray-200">Join Now</button>
</div>
</div>

<div className="px-6 mt-4 flex gap-3 overflow-x-auto">
<button className="px-4 py-2 rounded-full text-sm font-medium transition-colors font-geist bg-white text-black hover:bg-gray-200">Logic</button>
<button className="px-4 py-2 rounded-full text-sm font-medium transition-colors font-geist bg-slate-800 text-slate-200 hover:bg-slate-700">Visual</button>
<button className="px-4 py-2 rounded-full text-sm font-medium transition-colors font-geist bg-slate-800 text-slate-200 hover:bg-slate-700">Focus</button>
</div>

<div className="flex-1 overflow-y-auto px-6 mt-4 pb-20 grid grid-cols-2 gap-4">
<div className="rounded-3xl p-4 flex flex-col gap-2 hover:shadow-lg transition-shadow bg-pink-800">
<svg className="lucide lucide-layers w-6 h-6 stroke-[1.5] text-pink-100" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
<p className="text-xs font-geist text-pink-100/80">by Emma Watson</p>
<h4 className="font-semibold font-geist text-pink-100">Design Systems</h4>
<span className="text-xs font-geist text-pink-100/80">Brief 001</span>
</div>
<div className="rounded-3xl p-4 flex flex-col gap-2 hover:shadow-lg transition-shadow bg-orange-800">
<svg className="lucide lucide-cpu w-6 h-6 stroke-[1.5] text-orange-100" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<p className="text-xs font-geist text-orange-100/80">by Marcus Kim</p>
<h4 className="font-semibold font-geist text-orange-100">ML Engineering</h4>
<span className="text-xs font-geist text-orange-100/80">Brief 002</span>
</div>
<div className="rounded-3xl p-4 flex flex-col gap-2 hover:shadow-lg transition-shadow bg-violet-800">
<svg className="lucide lucide-trending-up w-6 h-6 stroke-[1.5] text-violet-100" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<p className="text-xs font-geist text-violet-100/80">by Sarah Chen</p>
<h4 className="font-semibold font-geist text-violet-100">Growth Marketing</h4>
<span className="text-xs font-geist text-violet-100/80">Brief 003</span>
</div>
<div className="rounded-3xl p-4 flex flex-col gap-2 hover:shadow-lg transition-shadow bg-yellow-800">
<svg className="lucide lucide-database w-6 h-6 stroke-[1.5] text-yellow-100" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
<p className="text-xs font-geist text-yellow-100/80">by David Park</p>
<h4 className="font-semibold font-geist text-yellow-100">Data Science</h4>
<span className="text-xs font-geist text-yellow-100/80">Brief 004</span>
</div>
</div>

<div className="absolute bottom-0 w-full h-14 border-t flex items-center justify-around bg-black border-slate-900">
<button className="flex flex-col items-center gap-1 transition-colors text-slate-100 hover:text-indigo-400">
<svg className="lucide lucide-home w-5 h-5 stroke-[1.5]" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="text-[10px] font-medium font-geist">Home</span>
</button>
<button className="flex flex-col items-center gap-1 transition-colors text-slate-600 hover:text-slate-400">
<svg className="lucide lucide-clock w-5 h-5 stroke-[1.5]" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-[10px] font-medium font-geist">Schedule</span>
</button>
<button className="flex flex-col items-center gap-1 transition-colors text-slate-600 hover:text-slate-400">
<svg className="lucide lucide-list w-5 h-5 stroke-[1.5]" data-lucide="list" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h.01"></path><path d="M3 18h.01"></path><path d="M3 6h.01"></path><path d="M8 12h13"></path><path d="M8 18h13"></path><path d="M8 6h13"></path></svg>
<span className="text-[10px] font-medium font-geist">Tasks</span>
</button>
<button className="flex flex-col items-center gap-1 transition-colors text-slate-600 hover:text-slate-400">
<svg className="lucide lucide-message-circle w-5 h-5 stroke-[1.5]" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
<span className="text-[10px] font-medium font-geist">Chat</span>
</button>
<button className="flex flex-col items-center gap-1 transition-colors text-slate-600 hover:text-slate-400">
<svg className="lucide lucide-user w-5 h-5 stroke-[1.5]" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span className="text-[10px] font-medium font-geist">Profile</span>
</button>
</div>
</div>

<div className="relative w-full max-w-[320px] xl:mx-0 h-[640px] overflow-hidden flex flex-col hover:scale-105 transition-transform duration-300 bg-black rounded-[2.5rem] mr-auto ml-auto shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">

<div className="flex pt-6 pr-6 pl-6 items-center justify-between">
<button className="p-2 rounded-full transition-colors bg-slate-900 hover:bg-slate-800">
<svg className="lucide lucide-arrow-left w-5 h-5 stroke-[1.5] text-slate-300" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<h2 className="text-base font-semibold tracking-tight font-geist text-slate-100">AI Assistant</h2>
<button className="p-2 rounded-full transition-colors bg-slate-900 hover:bg-slate-800">
<svg className="lucide lucide-menu w-5 h-5 stroke-[1.5] text-slate-300" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>

<div className="pt-6 pr-6 pb-6 pl-6">
<div className="w-full flex flex-col gap-6 bg-indigo-800 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/322719de-f763-429e-9cc6-d2f032a9f8ec_800w.jpg)] bg-cover rounded-3xl pt-6 pr-6 pb-6 pl-6 items-center">
<div className="w-32 h-32 rounded-full flex items-center justify-center bg-black/50">
<img alt="AI Assistant" className="w-24 h-24 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/21b7ee4f-dfd0-45f5-a64c-b8a7761bc2b9_320w.jpg"/>
</div>
<div className="text-sm font-medium px-4 py-2 rounded-full shadow-sm font-geist text-slate-200 bg-black">Hi! How can I help you?</div>
<div className="flex items-center gap-6">
<button className="p-3 rounded-full shadow-sm hover:shadow-md transition-shadow bg-black">
<svg className="lucide lucide-camera w-5 h-5 stroke-[1.5] text-slate-300" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg>
</button>
<button className="p-4 rounded-full shadow-lg transition-colors bg-white hover:bg-gray-200">
<svg className="lucide lucide-mic w-6 h-6 stroke-[1.5] text-black" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
</button>
</div>
</div>
</div>

<div className="px-6 flex items-center justify-between text-[11px] text-slate-500">
<span className="font-geist">16 prompts left</span>
<span className="font-geist">Powered by GPT-4.5</span>
</div>

<div className="px-6 mt-2">
<div className="relative">
<input className="w-full h-10 rounded-full pl-4 pr-10 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all bg-slate-900" placeholder="Ask me anything..." type="text"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full transition-colors bg-white hover:bg-gray-200">
<svg className="lucide lucide-send w-4 h-4 stroke-[1.5] text-black" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</button>
</div>
</div>

<div className="px-6 mt-4 flex gap-2 overflow-x-auto">
<button className="px-4 py-2 rounded-full text-xs font-medium transition-colors whitespace-nowrap font-geist bg-white text-black hover:bg-gray-200">Week Summary</button>
<button className="px-4 py-2 rounded-full text-xs font-medium transition-colors whitespace-nowrap font-geist bg-slate-800 text-slate-200 hover:bg-slate-700">Create Plan</button>
<button className="px-4 py-2 rounded-full text-xs font-medium transition-colors whitespace-nowrap font-geist bg-slate-800 text-slate-200 hover:bg-slate-700">Strategy</button>
</div>

<div className="px-6 mt-4 flex-1 overflow-y-auto pb-8">
<h3 className="font-semibold mb-3 tracking-tight font-geist text-slate-100">Learning Roadmap</h3>
<div className="space-y-4">
<div className="flex items-center gap-3">
<div className="w-3 h-3 bg-orange-500 rounded-full"></div>
<span className="text-sm font-geist text-slate-300">Ignite Curiosity</span>
</div>
<div className="flex items-center gap-3">
<div className="w-3 h-3 rounded-full bg-white"></div>
<span className="text-sm font-geist text-slate-300">Assess Skills</span>
</div>
<div className="flex items-center gap-3">
<div className="w-3 h-3 rounded-full bg-indigo-400"></div>
<span className="text-sm font-geist text-slate-300">Map the Path</span>
<span className="ml-auto text-xs font-semibold text-slate-500 font-geist">75%</span>
</div>
<div className="flex items-center gap-3">
<div className="w-3 h-3 rounded-full bg-slate-700"></div>
<span className="text-sm font-geist text-slate-300">Launch Journey</span>
</div>
</div>

<div className="mt-6">
<div className="flex items-center justify-between text-xs text-slate-500 mb-2">
<span className="font-geist">Mon</span><span className="font-geist">Tue</span><span className="font-geist">Wed</span><span className="font-geist">Thu</span><span className="font-geist">Fri</span>
</div>
<div className="h-2 rounded-full relative bg-slate-800">
<div className="absolute left-0 top-0 h-2 rounded-full bg-indigo-400" style={{width: '55%'}}></div>
<div className="absolute left-[55%] -translate-x-1/2 -top-1 flex items-center gap-1">
<div className="w-3 h-3 rounded-full border-2 bg-indigo-400 border-black"></div>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
