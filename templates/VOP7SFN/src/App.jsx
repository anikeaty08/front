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
      theme: {
        extend: {
          fontFamily: { inter: ['Inter', 'sans-serif'] },
          colors: {
            card: 'rgba(255,255,255,0.05)',
            track: 'rgba(255,255,255,0.08)',
          },
          boxShadow: {
            inset: 'inset 0 0 0 1px rgba(255,255,255,.06)',
          }
        }
      }
    }
  


    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons();

      const daysContainer = document.querySelector('.grid.grid-cols-7');
      const template = document.getElementById('day-template').content;
      const today = new Date();
      const start = new Date(today);
      start.setDate(today.getDate() - (today.getDay() || 7) + 1);
      
      for (let i = 0; i < 7; i++) {
        const date = new Date(start);
        date.setDate(start.getDate() + i);
        const clone = template.cloneNode(true);
        clone.querySelector('.day').textContent = date.toLocaleDateString('en-us', { weekday: 'short' });
        clone.querySelector('.date').textContent = date.getDate();
        
        if (Math.random() > 0.6) clone.querySelector('span.h-1\\.5').classList.add('bg-emerald-500');
        
        if (date.toDateString() === today.toDateString()) {
          clone.firstElementChild.classList.add('bg-gradient-to-b','from-emerald-600/50','to-teal-600/20','ring-1','ring-emerald-500/40');
        }
        daysContainer.appendChild(clone);
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
      
<div className="relative mx-auto w-full max-w-[400px] sm:max-w-[380px] rounded-[24px] sm:rounded-[42px] bg-black/70 backdrop-blur p-4 sm:p-6 shadow-2xl ring-1 ring-white/10">

<div className="flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="h-10 w-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
<svg className="lucide lucide-gamepad lucide-gamepad-2 w-[20px] h-[20px]" data-lucide="gamepad" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="10" y1="12" y2="12"></line><line x1="8" x2="8" y1="10" y2="14"></line><line x1="15" x2="15.01" y1="13" y2="13"></line><line x1="18" x2="18.01" y1="11" y2="11"></line><rect height="12" rx="2" width="20" x="2" y="6"></rect></svg>
</div>
<div className="">
<p className="text-sm text-gray-400">Welcome back,</p>
<p className="text-lg font-semibold">Alex!</p>
</div>
</div>
<div className="flex items-center space-x-3">
<button className="h-10 w-10 grid place-items-center rounded-full bg-card shadow-inset">
<svg className="lucide lucide-settings w-[20px] h-[20px]" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" style={{color: 'rgb(209, 213, 219)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
<button className="h-10 w-10 grid place-items-center rounded-full bg-card shadow-inset">
<svg className="lucide lucide-award lucide-trophy w-[20px] h-[20px]" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(209, 213, 219)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
</button>
</div>
</div>

<div className="grid grid-cols-7 gap-1 sm:gap-2 mt-6">
<template id="day-template"></template>
<button className="flex flex-col items-center justify-center p-1 sm:p-2 rounded-xl bg-card text-xs space-y-1">
<span className="day font-medium text-[10px] sm:text-xs">Mon</span>
<span className="date text-gray-400 text-[10px] sm:text-xs">9</span>
<span className="h-1.5 w-1.5 rounded-full bg-transparent bg-emerald-500"></span>
</button>
<button className="flex flex-col items-center justify-center p-1 sm:p-2 rounded-xl bg-card text-xs space-y-1 bg-gradient-to-b from-emerald-600/50 to-teal-600/20 ring-1 ring-emerald-500/40">
<span className="day font-medium text-[10px] sm:text-xs">Tue</span>
<span className="date text-gray-400 text-[10px] sm:text-xs">10</span>
<span className="h-1.5 w-1.5 rounded-full bg-transparent"></span>
</button>
<button className="flex flex-col items-center justify-center p-1 sm:p-2 rounded-xl bg-card text-xs space-y-1">
<span className="day font-medium text-[10px] sm:text-xs">Wed</span>
<span className="date text-gray-400 text-[10px] sm:text-xs">11</span>
<span className="h-1.5 w-1.5 rounded-full bg-transparent"></span>
</button>
<button className="flex flex-col items-center justify-center p-1 sm:p-2 rounded-xl bg-card text-xs space-y-1">
<span className="day font-medium text-[10px] sm:text-xs">Thu</span>
<span className="date text-gray-400 text-[10px] sm:text-xs">12</span>
<span className="h-1.5 w-1.5 rounded-full bg-transparent"></span>
</button>
<button className="flex flex-col items-center justify-center p-1 sm:p-2 rounded-xl bg-card text-xs space-y-1">
<span className="day font-medium text-[10px] sm:text-xs">Fri</span>
<span className="date text-gray-400 text-[10px] sm:text-xs">13</span>
<span className="h-1.5 w-1.5 rounded-full bg-transparent"></span>
</button>
<button className="flex flex-col items-center justify-center p-1 sm:p-2 rounded-xl bg-card text-xs space-y-1">
<span className="day font-medium text-[10px] sm:text-xs">Sat</span>
<span className="date text-gray-400 text-[10px] sm:text-xs">14</span>
<span className="h-1.5 w-1.5 rounded-full bg-transparent bg-emerald-500"></span>
</button>
<button className="flex flex-col items-center justify-center p-1 sm:p-2 rounded-xl bg-card text-xs space-y-1">
<span className="day font-medium text-[10px] sm:text-xs">Sun</span>
<span className="date text-gray-400 text-[10px] sm:text-xs">15</span>
<span className="h-1.5 w-1.5 rounded-full bg-transparent"></span>
</button>
</div>

<div className="mt-6 rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-600 via-green-600 to-teal-700 relative">
<div className="absolute right-2 bottom-2 opacity-30">
<svg className="lucide lucide-zap w-16 h-16 text-white" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div className="relative p-4 sm:p-5">
<p className="text-xs text-gray-200 mb-1">Tournament Mode</p>
<h2 className="text-xl sm:text-2xl font-semibold mb-1">Apex Legends</h2>
<p className="text-sm text-gray-200">Ranked: Diamond III</p>
<div className="flex items-center mt-4 space-x-1">
<div className="h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-emerald-500 flex items-center justify-center border-2 border-white/20">
<svg className="lucide lucide-user w-3 h-3 text-white" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<div className="h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-blue-500 flex items-center justify-center border-2 border-white/20 -ml-2">
<svg className="lucide lucide-users w-3 h-3 text-white" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div className="h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-purple-500 flex items-center justify-center border-2 border-white/20 -ml-2">
<svg className="lucide lucide-crown w-3 h-3 text-white" data-lucide="crown" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>
</div>
<span className="-ml-1 text-xs bg-white/20 rounded-full px-2 py-0.5">+12</span>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6">
<div className="rounded-2xl bg-card p-3 sm:p-4 shadow-inset">
<div className="flex items-center space-x-2 mb-1">
<svg className="lucide lucide-target w-4 h-4 text-emerald-400" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
<p className="text-lg sm:text-2xl font-semibold">2,847</p>
</div>
<p className="text-xs sm:text-sm text-gray-400">Total Kills</p>
<p className="text-[10px] text-gray-500 mt-1">This season</p>
</div>
<div className="rounded-2xl bg-card p-3 sm:p-4 shadow-inset">
<div className="flex items-center space-x-2 mb-1">
<svg className="lucide lucide-clock w-4 h-4 text-blue-400" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
<p className="text-lg sm:text-2xl font-semibold">127 <span className="text-sm text-gray-400 font-normal">hrs</span></p>
</div>
<p className="text-xs sm:text-sm text-gray-400">Play time</p>
<p className="text-[10px] text-gray-500 mt-1">Last 30 days</p>
</div>
</div>

<div className="mt-4 rounded-2xl bg-card p-3 sm:p-4 shadow-inset">
<div className="flex items-center space-x-2 mb-2">
<svg className="lucide lucide-play-circle w-4 h-4 text-orange-400" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
<p className="text-sm text-gray-300">Current Session</p>
</div>
<div className="flex justify-between items-baseline mb-1">
<span className="text-xs text-gray-400">Progress: 67%</span>
<span className="text-base sm:text-lg font-semibold">2h 24m<span className="text-xs text-gray-400">/3h 36m</span></span>
</div>
<div className="w-full h-1.5 rounded-full overflow-hidden bg-track">
<div className="h-full bg-gradient-to-r from-orange-400 via-red-500 to-pink-600" style={{width: '67%'}}></div>
</div>
</div>

<div className="mt-4 rounded-2xl bg-card p-3 sm:p-4 shadow-inset">
<div className="flex items-center space-x-2 mb-2">
<svg className="lucide lucide-trending-up w-4 h-4 text-emerald-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<p className="text-sm text-gray-300">Rank Progress</p>
</div>
<div className="flex justify-between items-baseline mb-1">
<span className="text-xs text-gray-400">Diamond III → Diamond II</span>
<span className="text-base sm:text-lg font-semibold">1,240<span className="text-xs text-gray-400"> RP needed</span></span>
</div>
<div className="w-full h-1.5 rounded-full overflow-hidden bg-track">
<div className="h-full bg-gradient-to-r from-emerald-400 via-green-500 to-teal-600" style={{width: '28%'}}></div>
</div>
</div>

<div className="bg-card sm:p-5 rounded-2xl mt-6 pt-4 pr-4 pb-4 pl-4 shadow-inset space-y-4">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-settings w-4 h-4 text-gray-400" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
<h3 className="font-semibold">Game Settings</h3>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-bell w-4 h-4 text-gray-400" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<label className="text-sm" htmlFor="notifs">Match alerts</label>
</div>
<label className="toggle">
<input checked="" className="rounded-md" id="notifs" type="checkbox"/>
<span className="slider"></span>
</label>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-calendar w-4 h-4 text-gray-400" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<label className="text-sm" htmlFor="reminders">Tournament reminders</label>
</div>
<input className="checkbox-gradient rounded-md" id="reminders" type="checkbox"/>
</div>
<div className="">
</div>
</div>
</div>



    </>
  );
}
