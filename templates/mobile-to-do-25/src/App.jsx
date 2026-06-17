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
boxShadow: {
'beautiful': '0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12)',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



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
      

<div className="flex items-center gap-10">

<div className="relative w-[393px] h-[852px] bg-[#FAFAFA] rounded-[55px] shadow-beautiful border-[12px] border-zinc-900 overflow-hidden flex flex-col shrink-0">

<div className="absolute top-0 left-1/2 -translate-x-1/2 h-[35px] w-[120px] bg-black rounded-b-3xl z-50"></div>

<div className="flex justify-between items-center px-8 pt-4 pb-2 text-zinc-900 font-semibold text-sm">
<span>9:41</span>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-zinc-900" data-lucide="signal"></i>
<i className="w-4 h-4 text-zinc-900" data-lucide="wifi"></i>
<i className="w-4 h-4 text-zinc-900" data-lucide="battery-full"></i>
</div>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar pt-8 px-6 pb-32">

<div className="flex justify-between items-end mb-8">
<div>
<p className="text-zinc-400 text-lg font-medium mb-1">Monday, Nov 12</p>
<h1 className="text-4xl font-serif text-zinc-900 tracking-tight">Today</h1>
</div>
<button className="bg-white p-3 rounded-full shadow-sm">
<i className="w-6 h-6 text-zinc-800 stroke-[1.5]" data-lucide="calendar"></i>
</button>
</div>

<div className="flex justify-between mb-10 overflow-x-auto no-scrollbar gap-2">
<div className="flex flex-col items-center gap-2 bg-zinc-900 text-white rounded-full py-4 px-3 w-16 shrink-0 shadow-lg">
<span className="text-sm font-medium">12</span>
<span className="text-xs font-normal opacity-80">Mon</span>
</div>
<div className="flex flex-col items-center gap-2 bg-white text-zinc-400 rounded-full py-4 px-3 w-16 shrink-0 border border-zinc-100">
<span className="text-sm font-medium text-zinc-800">13</span>
<span className="text-xs font-normal">Tue</span>
</div>
<div className="flex flex-col items-center gap-2 bg-white text-zinc-400 rounded-full py-4 px-3 w-16 shrink-0 border border-zinc-100">
<span className="text-sm font-medium text-zinc-800">14</span>
<span className="text-xs font-normal">Wed</span>
</div>
<div className="flex flex-col items-center gap-2 bg-white text-zinc-400 rounded-full py-4 px-3 w-16 shrink-0 border border-zinc-100">
<span className="text-sm font-medium text-zinc-800">15</span>
<span className="text-xs font-normal">Thu</span>
</div>
</div>

<div className="space-y-4">
<div className="flex gap-4">
<div className="flex flex-col items-center gap-1 pt-2 w-12">
<span className="text-zinc-400 text-sm font-medium">09:00</span>
</div>
<div className="flex-1 bg-white p-5 rounded-[24px] border-l-4 border-orange-200 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
<h3 className="text-lg font-medium text-zinc-800 mb-1">Standup Meeting</h3>
<p className="text-zinc-500 text-base">Zoom Call</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex flex-col items-center gap-1 pt-2 w-12">
<span className="text-zinc-400 text-sm font-medium">10:30</span>
</div>
<div className="flex-1 bg-white p-5 rounded-[24px] border-l-4 border-indigo-200 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
<h3 className="text-lg font-medium text-zinc-800 mb-1">Design Review</h3>
<p className="text-zinc-500 text-base">Office Room 3</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex flex-col items-center gap-1 pt-2 w-12">
<span className="text-zinc-400 text-sm font-medium">13:00</span>
</div>
<div className="flex-1 bg-white p-5 rounded-[24px] border-l-4 border-red-200 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
<h3 className="text-lg font-medium text-zinc-800 mb-1">Lunch Break</h3>
<p className="text-zinc-500 text-base">Cafe</p>
</div>
</div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[85%] bg-white/90 backdrop-blur-xl rounded-[35px] p-2 flex justify-between shadow-[0_8px_30px_rgba(0,0,0,0.08)] z-40">
<div className="flex flex-col items-center justify-center w-16 h-14 rounded-3xl gap-1 text-zinc-400">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="check-square"></i>
<span className="text-[10px] font-medium">To-do</span>
</div>
<div className="flex flex-col items-center justify-center w-16 h-14 rounded-3xl bg-zinc-900 text-white gap-1 shadow-md">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="calendar"></i>
<span className="text-[10px] font-medium">Today</span>
</div>
<div className="flex flex-col items-center justify-center w-16 h-14 rounded-3xl gap-1 text-zinc-400">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="loader-2"></i>
<span className="text-[10px] font-medium">Focus</span>
</div>
<div className="flex flex-col items-center justify-center w-16 h-14 rounded-3xl gap-1 text-zinc-400">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="smile"></i>
<span className="text-[10px] font-medium">Me</span>
</div>
</div>
</div>

<div className="relative w-[393px] h-[852px] bg-[#FAFAFA] rounded-[55px] shadow-beautiful border-[12px] border-zinc-900 overflow-hidden flex flex-col shrink-0">

<div className="absolute top-0 left-1/2 -translate-x-1/2 h-[35px] w-[120px] bg-black rounded-b-3xl z-50"></div>

<div className="flex justify-between items-center px-8 pt-4 pb-2 text-zinc-900 font-semibold text-sm">
<span>9:41</span>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-zinc-900" data-lucide="signal"></i>
<i className="w-4 h-4 text-zinc-900" data-lucide="wifi"></i>
<i className="w-4 h-4 text-zinc-900" data-lucide="battery-full"></i>
</div>
</div>

<div className="flex justify-between items-center px-6 mt-2">
<button className="bg-white px-5 py-3 rounded-full flex items-center gap-3 shadow-sm hover:shadow-md transition-all">
<span className="text-xl">🎉</span>
<span className="text-base font-medium text-zinc-800">0 / 0</span>
</button>
<div className="bg-white px-3 py-3 rounded-full flex items-center gap-4 shadow-sm">
<i className="w-5 h-5 text-indigo-500 stroke-[2]" data-lucide="arrow-up-down"></i>
<div className="w-[1px] h-4 bg-zinc-200"></div>
<i className="w-5 h-5 text-zinc-800 stroke-[2]" data-lucide="plus"></i>
</div>
</div>

<div className="mt-8 mb-6 text-center">
<h1 className="font-serif text-[42px] text-zinc-900 tracking-tight leading-none">To-do</h1>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar pb-32">

<div className="mb-4">
<div className="flex justify-between items-center px-6 mb-3">
<div className="bg-rose-100/60 text-rose-700 px-4 py-2 rounded-xl flex items-center gap-2 cursor-pointer">
<i className="w-2.5 h-2.5 fill-current rotate-0" data-lucide="triangle"></i>
<span className="text-xs font-bold tracking-wide">HIGH (1)</span>
<i className="w-3.5 h-3.5 ml-1 opacity-60" data-lucide="chevron-down"></i>
</div>
<button className="text-zinc-300 hover:text-zinc-500 transition-colors">
<i className="w-5 h-5 stroke-[2.5]" data-lucide="plus"></i>
</button>
</div>
<div className="mx-4 bg-white rounded-[28px] p-5 flex items-center justify-between shadow-[0_4px_20px_rgba(0,0,0,0.02)] mb-2 group cursor-pointer hover:scale-[1.01] transition-transform duration-200">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-lg">📚</div>
<span className="text-lg font-medium text-zinc-800">Do homework</span>
</div>
<div className="w-7 h-7 rounded-full border-[2.5px] border-zinc-900 cursor-pointer group-hover:bg-zinc-50 transition-colors"></div>
</div>
</div>

<div className="mb-4">
<div className="flex justify-between items-center px-6 mb-3">
<div className="bg-orange-100/60 text-orange-700 px-4 py-2 rounded-xl flex items-center gap-2 cursor-pointer">
<div className="w-2 h-2 rounded-full bg-orange-500"></div>
<span className="text-xs font-bold tracking-wide">MEDIUM (2)</span>
<i className="w-3.5 h-3.5 ml-1 opacity-60" data-lucide="chevron-down"></i>
</div>
<button className="text-zinc-300 hover:text-zinc-500 transition-colors">
<i className="w-5 h-5 stroke-[2.5]" data-lucide="plus"></i>
</button>
</div>
<div className="space-y-2">
<div className="mx-4 bg-white rounded-[28px] p-5 flex items-center justify-between shadow-[0_4px_20px_rgba(0,0,0,0.02)] group cursor-pointer hover:scale-[1.01] transition-transform duration-200">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-lg">🏠</div>
<span className="text-lg font-medium text-zinc-800">Paying rent</span>
</div>
<div className="w-7 h-7 rounded-full border-[2.5px] border-zinc-900 cursor-pointer group-hover:bg-zinc-50"></div>
</div>
<div className="mx-4 bg-white rounded-[28px] p-5 flex items-center justify-between shadow-[0_4px_20px_rgba(0,0,0,0.02)] group cursor-pointer hover:scale-[1.01] transition-transform duration-200">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-lg">🍽️</div>
<span className="text-lg font-medium text-zinc-800">Weekly meal preparation</span>
</div>
<div className="w-7 h-7 rounded-full border-[2.5px] border-zinc-900 cursor-pointer group-hover:bg-zinc-50"></div>
</div>
</div>
</div>

<div className="mb-4">
<div className="flex justify-between items-center px-6 mb-3">
<div className="bg-indigo-100/60 text-indigo-700 px-4 py-2 rounded-xl flex items-center gap-2 cursor-pointer">
<i className="w-2.5 h-2.5 fill-current rotate-180" data-lucide="triangle"></i>
<span className="text-xs font-bold tracking-wide">LOW (1)</span>
<i className="w-3.5 h-3.5 ml-1 opacity-60" data-lucide="chevron-down"></i>
</div>
<button className="text-zinc-300 hover:text-zinc-500 transition-colors">
<i className="w-5 h-5 stroke-[2.5]" data-lucide="plus"></i>
</button>
</div>
<div className="mx-4 bg-white rounded-[28px] p-5 flex items-center justify-between shadow-[0_4px_20px_rgba(0,0,0,0.02)] group cursor-pointer hover:scale-[1.01] transition-transform duration-200">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-lg">🧺</div>
<span className="text-lg font-medium text-zinc-800">Do laundry</span>
</div>
<div className="w-7 h-7 rounded-full border-[2.5px] border-zinc-900 cursor-pointer group-hover:bg-zinc-50"></div>
</div>
</div>

<div className="mb-4">
<div className="flex justify-between items-center px-6 mb-3">
<div className="bg-gray-100 text-gray-700 px-4 py-2 rounded-xl flex items-center gap-2 cursor-pointer">
<span className="text-xs font-bold tracking-wide">TO-DO (1)</span>
<i className="w-3.5 h-3.5 ml-1 opacity-60" data-lucide="chevron-down"></i>
</div>
<button className="text-zinc-300 hover:text-zinc-500 transition-colors">
<i className="w-5 h-5 stroke-[2.5]" data-lucide="plus"></i>
</button>
</div>
<div className="mx-4 bg-white rounded-[28px] p-5 flex items-center justify-between shadow-[0_4px_20px_rgba(0,0,0,0.02)] group cursor-pointer hover:scale-[1.01] transition-transform duration-200">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-lg">🏋️</div>
<span className="text-lg font-medium text-zinc-800">Go to gym</span>
</div>
<div className="w-7 h-7 rounded-full border-[2.5px] border-zinc-900 cursor-pointer group-hover:bg-zinc-50"></div>
</div>
</div>
</div>

<div className="absolute bottom-32 right-6 w-16 h-16 rounded-full bg-gradient-to-br from-indigo-300 to-indigo-500 flex items-center justify-center shadow-lg border-[3px] border-white z-10 animate-bounce">
<i className="text-white w-8 h-8 stroke-[2]" data-lucide="smile"></i>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[85%] bg-white/95 backdrop-blur-2xl rounded-[35px] p-2 flex justify-between shadow-[0_8px_30px_rgba(0,0,0,0.08)] z-50">
<div className="flex flex-col items-center justify-center w-16 h-14 rounded-3xl bg-zinc-900 text-white gap-1 shadow-md cursor-pointer">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="check-square"></i>
<span className="text-[10px] font-medium">To-do</span>
</div>
<div className="flex flex-col items-center justify-center w-16 h-14 rounded-3xl gap-1 text-zinc-400 hover:text-zinc-600 transition-colors cursor-pointer">
<div className="relative">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="calendar"></i>
<div className="absolute -top-1 -right-1 bg-zinc-200 text-[8px] font-bold px-1 rounded-full">18</div>
</div>
<span className="text-[10px] font-medium">Today</span>
</div>
<div className="flex flex-col items-center justify-center w-16 h-14 rounded-3xl gap-1 text-zinc-400 hover:text-zinc-600 transition-colors cursor-pointer">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="loader-2"></i>
<span className="text-[10px] font-medium">Focus</span>
</div>
<div className="flex flex-col items-center justify-center w-16 h-14 rounded-3xl gap-1 text-zinc-400 hover:text-zinc-600 transition-colors cursor-pointer">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="smile"></i>
<span className="text-[10px] font-medium">Me</span>
</div>
</div>
</div>

<div className="relative w-[393px] h-[852px] bg-[#FAFAFA] rounded-[55px] shadow-beautiful border-[12px] border-zinc-900 overflow-hidden flex flex-col shrink-0">

<div className="absolute top-0 left-1/2 -translate-x-1/2 h-[35px] w-[120px] bg-black rounded-b-3xl z-50"></div>

<div className="flex justify-between items-center px-8 pt-4 pb-2 text-zinc-900 font-semibold text-sm">
<span>9:41</span>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-zinc-900" data-lucide="signal"></i>
<i className="w-4 h-4 text-zinc-900" data-lucide="wifi"></i>
<i className="w-4 h-4 text-zinc-900" data-lucide="battery-full"></i>
</div>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar pt-8 px-6 flex flex-col items-center">

<div className="flex justify-between items-center w-full mb-12">
<button className="bg-white p-3 rounded-full shadow-sm">
<i className="w-6 h-6 text-zinc-800 stroke-[1.5]" data-lucide="settings-2"></i>
</button>
<h1 className="text-2xl font-serif text-zinc-900 tracking-tight">Focus</h1>
<button className="bg-white p-3 rounded-full shadow-sm">
<i className="w-6 h-6 text-zinc-800 stroke-[1.5]" data-lucide="more-horizontal"></i>
</button>
</div>

<div className="relative w-64 h-64 mb-12">

<svg className="w-full h-full transform -rotate-90">
<circle className="text-zinc-100" cx="128" cy="128" fill="transparent" r="120" stroke="currentColor" strokeWidth="24"></circle>
<circle className="text-indigo-500" cx="128" cy="128" fill="transparent" r="120" stroke="currentColor" stroke-dasharray="753" stroke-dashoffset="180" strokeLinecap="round" strokeWidth="24"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-5xl font-medium text-zinc-900 tracking-tight">25:00</span>
<span className="text-zinc-400 mt-2 font-medium">Do homework</span>
</div>
</div>

<div className="flex items-center gap-8 mb-12">
<button className="w-16 h-16 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400 hover:bg-zinc-200 transition-colors">
<i className="w-7 h-7 stroke-[2]" data-lucide="rotate-ccw"></i>
</button>
<button className="w-24 h-24 rounded-[32px] bg-zinc-900 flex items-center justify-center text-white shadow-xl hover:scale-105 transition-transform">
<i className="w-10 h-10 fill-current" data-lucide="play"></i>
</button>
<button className="w-16 h-16 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400 hover:bg-zinc-200 transition-colors">
<i className="w-7 h-7 stroke-[2]" data-lucide="skip-forward"></i>
</button>
</div>

<div className="w-full bg-white rounded-[32px] p-6 shadow-sm">
<div className="flex justify-between items-center mb-4">
<h3 className="text-zinc-900 font-medium">Daily Goal</h3>
<span className="text-indigo-500 font-semibold">2h 30m</span>
</div>
<div className="w-full h-3 bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full w-[60%] bg-indigo-500 rounded-full"></div>
</div>
<p className="text-zinc-400 text-sm mt-3">You are on fire today! 🔥</p>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[85%] bg-white/90 backdrop-blur-xl rounded-[35px] p-2 flex justify-between shadow-[0_8px_30px_rgba(0,0,0,0.08)] z-40">
<div className="flex flex-col items-center justify-center w-16 h-14 rounded-3xl gap-1 text-zinc-400">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="check-square"></i>
<span className="text-[10px] font-medium">To-do</span>
</div>
<div className="flex flex-col items-center justify-center w-16 h-14 rounded-3xl gap-1 text-zinc-400">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="calendar"></i>
<span className="text-[10px] font-medium">Today</span>
</div>
<div className="flex flex-col items-center justify-center w-16 h-14 rounded-3xl bg-zinc-900 text-white gap-1 shadow-md">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="loader-2"></i>
<span className="text-[10px] font-medium">Focus</span>
</div>
<div className="flex flex-col items-center justify-center w-16 h-14 rounded-3xl gap-1 text-zinc-400">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="smile"></i>
<span className="text-[10px] font-medium">Me</span>
</div>
</div>
</div>
</div>


    </>
  );
}
