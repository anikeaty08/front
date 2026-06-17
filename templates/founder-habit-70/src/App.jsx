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
      

<nav className="w-full py-6">
<div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="font-bold text-xl tracking-tight text-slate-900">FounderFuel</span>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors">
<iconify-icon icon="logos:apple" width="16"></iconify-icon>
<div className="flex flex-col items-start leading-none">
<span className="text-[8px] font-medium opacity-80">Download on the</span>
<span className="text-xs font-semibold">App Store</span>
</div>
</button>
<button className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors">
<iconify-icon icon="logos:google-play-icon" width="14"></iconify-icon>
<div className="flex flex-col items-start leading-none">
<span className="text-[8px] font-medium opacity-80">GET IT ON</span>
<span className="text-xs font-semibold">Google Play</span>
</div>
</button>
</div>
</div>
</nav>

<section className="max-w-[1200px] mx-auto px-4 md:px-0 mb-16">
<div className="relative w-full rounded-[3rem] bg-[#A7F3D0] overflow-hidden min-h-[600px] md:h-[680px] flex flex-col items-center pt-16 md:pt-20 text-center">


<div className="absolute inset-0 bg-[#BDF7E3] z-0"></div>

<div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-[#15803d] rounded-full z-10 opacity-90"></div>
<div className="absolute bottom-[-150px] right-[-50px] w-[600px] h-[600px] bg-[#15803d] rounded-full z-10 opacity-90"></div>
<div className="absolute bottom-[-50px] left-[30%] w-[400px] h-[300px] bg-[#166534] rounded-full z-0"></div>

<div className="absolute bottom-32 left-10 z-20 text-white opacity-90 animate-bounce duration-[3000ms]">
<iconify-icon icon="solar:flower-bold" width="64"></iconify-icon>
</div>
<div className="absolute bottom-40 right-20 z-20 text-white opacity-90 animate-bounce duration-[4000ms]">
<iconify-icon icon="solar:leaf-bold" width="56"></iconify-icon>
</div>

<div className="relative z-30 max-w-2xl px-4">
<h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                    Easy &amp; fun <br/>
                    founder habit tracker
                </h1>
</div>

<div className="relative z-30 mt-8">

<div className="relative mx-auto w-[280px] h-[550px] bg-white rounded-[2.5rem] border-[6px] border-white shadow-2xl overflow-hidden flex flex-col">

<div className="bg-[#F0FDF4] p-6 flex flex-col items-center pb-10">
<div className="w-full flex justify-between items-center mb-4">
<span className="text-sm font-bold text-slate-700">Sparky</span>
<iconify-icon className="text-slate-400" icon="solar:settings-linear"></iconify-icon>
</div>
<div className="flex gap-1 text-red-400 mb-2">
<iconify-icon icon="solar:heart-bold"></iconify-icon>
<iconify-icon icon="solar:heart-bold"></iconify-icon>
<iconify-icon icon="solar:heart-bold"></iconify-icon>
<iconify-icon icon="solar:heart-linear"></iconify-icon>
</div>

<div className="relative w-32 h-32 flex items-center justify-center">
<span className="text-[5rem] drop-shadow-xl filter grayscale-0">🦄</span>
</div>
</div>

<div className="bg-white flex-1 p-4 -mt-6 rounded-t-[2rem] relative z-10">

<div className="flex justify-between items-center mb-6 px-2">
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full border-4 border-green-400 flex items-center justify-center mb-1">
<span className="text-xs font-bold">12</span>
</div>
<span className="text-[10px] text-slate-400 font-medium">Streak</span>
</div>
<div className="flex flex-col items-center">
<span className="text-sm font-bold text-slate-800">85%</span>
<div className="h-1 w-12 bg-gray-100 rounded-full mt-1 overflow-hidden">
<div className="h-full bg-blue-500 w-[85%]"></div>
</div>
<span className="text-[10px] text-slate-400 font-medium mt-1">Focus</span>
</div>
<div className="flex flex-col items-center">
<span className="text-sm font-bold text-slate-800">5/6</span>
<div className="h-1 w-12 bg-gray-100 rounded-full mt-1 overflow-hidden">
<div className="h-full bg-purple-500 w-[80%]"></div>
</div>
<span className="text-[10px] text-slate-400 font-medium mt-1">Habits</span>
</div>
</div>

<div className="space-y-3">
<div className="flex items-center gap-3 p-3 bg-gray-50 rounded-2xl">
<div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
<iconify-icon icon="solar:check-circle-bold"></iconify-icon>
</div>
<div>
<div className="text-xs font-bold text-slate-800">Ship Code</div>
<div className="text-[10px] text-slate-400">Today</div>
</div>
</div>
<div className="flex items-center gap-3 p-3 bg-gray-50 rounded-2xl opacity-60">
<div className="w-8 h-8 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center">
<iconify-icon icon="solar:circle-linear"></iconify-icon>
</div>
<div>
<div className="text-xs font-bold text-slate-800">User Call</div>
<div className="text-[10px] text-slate-400">Scheduled</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full bg-white border-t border-gray-50 p-4 flex justify-around text-gray-300 z-20">
<iconify-icon className="text-green-500" icon="solar:home-2-bold"></iconify-icon>
<iconify-icon icon="solar:chart-square-linear"></iconify-icon>
<iconify-icon icon="solar:user-circle-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto mb-24 px-4">
<div className="flex justify-center gap-8 md:gap-20">
<div className="flex flex-col items-center text-center">
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-slate-200 text-3xl" icon="ph:wreath-left-fill"></iconify-icon>
<span className="text-3xl font-bold text-slate-900">4.8</span>
<iconify-icon className="text-slate-200 text-3xl" icon="ph:wreath-right-fill"></iconify-icon>
</div>
<div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Average Rating</div>
</div>
<div className="w-px bg-slate-100 h-12"></div>
<div className="flex flex-col items-center text-center">
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-slate-200 text-3xl" icon="ph:wreath-left-fill"></iconify-icon>
<span className="text-3xl font-bold text-slate-900">10k</span>
<iconify-icon className="text-slate-200 text-3xl" icon="ph:wreath-right-fill"></iconify-icon>
</div>
<div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Active Founders</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 space-y-24 md:space-y-32 mb-32">

<div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
<div className="w-full md:w-1/2 space-y-4">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
                    Track habits &amp; goals <br/>
                    without the hassle
                </h2>
<p className="text-lg text-slate-500 font-medium leading-relaxed max-w-sm">
                    Just set your core founder tasks and let the app handle the accountability. No complex spreadsheets.
                </p>
</div>
<div className="w-full md:w-1/2">
<div className="bg-[#A5B4FC] rounded-[3rem] w-full aspect-[4/3] relative overflow-hidden flex items-end justify-center pt-10">
<div className="relative w-[60%] h-full bg-white rounded-t-[2rem] shadow-2xl p-4 transform translate-y-4">

<div className="flex justify-between items-center mb-4">
<div className="text-[10px] font-bold text-slate-400">TODAY'S GOALS</div>
<div className="text-[10px] font-bold text-indigo-500">Edit</div>
</div>
<div className="flex gap-2 overflow-x-hidden mb-4">
<div className="flex-shrink-0 bg-orange-50 p-2 rounded-xl w-20 text-center border border-orange-100">
<span className="text-lg">💻</span>
<div className="text-[10px] font-bold mt-1 text-slate-700">Code</div>
</div>
<div className="flex-shrink-0 bg-blue-50 p-2 rounded-xl w-20 text-center border border-blue-100">
<span className="text-lg">📞</span>
<div className="text-[10px] font-bold mt-1 text-slate-700">Sales</div>
</div>
<div className="flex-shrink-0 bg-green-50 p-2 rounded-xl w-20 text-center border border-green-100">
<span className="text-lg">🧘‍♂️</span>
<div className="text-[10px] font-bold mt-1 text-slate-700">Health</div>
</div>
</div>

<div className="absolute -right-8 top-20 bg-white p-2 rounded-xl shadow-lg transform rotate-6">
<div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
<span className="text-2xl">🚀</span>
</div>
<div className="text-[10px] font-bold text-center mt-1">Ship It</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
<div className="w-full md:w-1/2 space-y-4">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
                    Simple founder <br/>
                    mindset tips
                </h2>
<p className="text-lg text-slate-500 font-medium leading-relaxed max-w-sm">
                    Get easy, actionable advice from YC mentors and successful founders after every session.
                </p>
</div>
<div className="w-full md:w-1/2">
<div className="bg-[#FDE047] rounded-[3rem] w-full aspect-[4/3] relative overflow-hidden flex items-center justify-center">

<div className="relative w-[50%] bg-white rounded-[1.5rem] shadow-xl p-4 transform -rotate-3">
<div className="flex items-center gap-2 mb-3">
<div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center text-xs">💡</div>
<span className="text-[10px] font-bold text-slate-400">DAILY INSIGHT</span>
</div>
<div className="bg-slate-50 rounded-xl p-3 mb-2">
<div className="w-full h-24 bg-gray-200 rounded-lg mb-2 overflow-hidden relative">
<img alt="meeting" className="object-cover w-full h-full opacity-80" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&amp;fit=crop&amp;q=80&amp;w=300"/>
</div>
<h4 className="text-xs font-bold text-slate-800 mb-1">Talk to users</h4>
<p className="text-[10px] text-slate-500 leading-snug">Don't scale until you have to. Do things that don't scale first.</p>
</div>
<div className="flex justify-between items-center px-1">
<div className="flex -space-x-1">
<div className="w-4 h-4 rounded-full bg-gray-200"></div>
<div className="w-4 h-4 rounded-full bg-gray-300"></div>
</div>
<iconify-icon className="text-slate-400" icon="solar:upload-square-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
<div className="w-full md:w-1/2 space-y-4">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
                    Your startup <br/>
                    statistics
                </h2>
<p className="text-lg text-slate-500 font-medium leading-relaxed max-w-sm">
                    Track progress, find patterns, and level up your execution habits week by week.
                </p>
</div>
<div className="w-full md:w-1/2">
<div className="bg-[#F9A8D4] rounded-[3rem] w-full aspect-[4/3] relative overflow-hidden flex items-end justify-center pt-10">
<div className="relative w-[55%] h-full bg-white rounded-t-[2rem] shadow-2xl p-5">
<div className="flex justify-between items-end mb-6">
<div>
<div className="text-[10px] font-bold text-slate-400 uppercase">This Week</div>
<div className="text-2xl font-bold text-slate-900">24h</div>
</div>
<div className="bg-pink-100 text-pink-600 px-2 py-1 rounded text-[10px] font-bold">+12%</div>
</div>

<div className="flex items-end justify-between h-24 gap-2 mb-4">
<div className="w-full bg-gray-100 rounded-t-md h-[40%]"></div>
<div className="w-full bg-gray-100 rounded-t-md h-[60%]"></div>
<div className="w-full bg-pink-400 rounded-t-md h-[80%] shadow-lg shadow-pink-200"></div>
<div className="w-full bg-gray-100 rounded-t-md h-[50%]"></div>
<div className="w-full bg-gray-100 rounded-t-md h-[70%]"></div>
</div>

<div className="border-t border-gray-100 pt-4 flex justify-between">
<div>
<div className="text-xs font-bold text-slate-900">Productivity</div>
<div className="text-[10px] text-slate-400">High Score</div>
</div>
<div className="text-lg font-bold text-green-500">92</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-4 mb-32">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-3">What our users are saying</h2>
<p className="text-slate-500 font-medium">Used by 1M+ people worldwide</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-[#FFF7ED] rounded-[2.5rem] p-8 flex flex-col items-center text-center">
<img alt="User" className="w-14 h-14 rounded-full object-cover mb-4 border-2 border-white shadow-sm" src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
<div className="flex items-center gap-2 mb-1">
<span className="font-bold text-slate-900 text-sm">Amanda</span>
<span className="text-sm">🇺🇸</span>
</div>
<div className="text-[10px] text-slate-500 font-semibold mb-6">MVP launched in 2 months</div>
<p className="text-sm text-slate-700 font-medium leading-relaxed">
                    "I've built 5 projects before and quit. Love the interface and how it gives smart tips without overwhelming. Finally shipped!"
                </p>
</div>

<div className="bg-[#EFF6FF] rounded-[2.5rem] p-8 flex flex-col items-center text-center">
<img alt="User" className="w-14 h-14 rounded-full object-cover mb-4 border-2 border-white shadow-sm" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
<div className="flex items-center gap-2 mb-1">
<span className="font-bold text-slate-900 text-sm">Sophie</span>
<span className="text-sm">🇬🇧</span>
</div>
<div className="text-[10px] text-slate-500 font-semibold mb-6">First $1K MRR reached</div>
<p className="text-sm text-slate-700 font-medium leading-relaxed">
                    "I've tried so many productivity counters, but FounderFuel is actually different. Logging tasks doesn't feel like a chore anymore!"
                </p>
</div>

<div className="bg-[#FFF1F2] rounded-[2.5rem] p-8 flex flex-col items-center text-center">
<img alt="User" className="w-14 h-14 rounded-full object-cover mb-4 border-2 border-white shadow-sm" src="https://i.pravatar.cc/150?u=a042581f4e29026024d1"/>
<div className="flex items-center gap-2 mb-1">
<span className="font-bold text-slate-900 text-sm">Lena</span>
<span className="text-sm">🇩🇪</span>
</div>
<div className="text-[10px] text-slate-500 font-semibold mb-6">60 day active streak</div>
<p className="text-sm text-slate-700 font-medium leading-relaxed">
                    "I usually quit apps after a week, but this one stuck. The unicorn, the design, and how quick it is to log. Obsessed."
                </p>
</div>
</div>
</section>

<footer className="px-4 pb-4">
<div className="bg-gray-100 rounded-[3rem] py-16 text-center">
<div className="flex flex-col items-center justify-center gap-2 mb-8">
<div className="text-4xl">🦄</div>
<span className="font-bold text-xl tracking-tight text-slate-900">FounderFuel</span>
</div>
<div className="flex flex-col gap-4 text-xs font-medium text-slate-500 mb-8">
<a className="hover:text-slate-900 transition-colors" href="#">Terms of Use</a>
<a className="hover:text-slate-900 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-slate-900 transition-colors" href="#">Sources</a>
</div>
<div className="text-[10px] text-slate-400 font-medium">
                © Founder Fuel 2025
            </div>
</div>
</footer>



    </>
  );
}
