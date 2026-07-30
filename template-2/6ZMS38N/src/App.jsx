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
  
  // Add some interactive feedback
  document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', function() {
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 150);
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
      
<main className="flex items-center justify-center min-h-screen p-4 lg:p-8">
<div className="w-full max-w-sm lg:max-w-md space-y-6 lg:space-y-8">
<header className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="Marcus Chen profile" className="w-10 h-10 lg:w-12 lg:h-12 ring-2 ring-violet-500/20 object-cover rounded-full" src="https://images.unsplash.com/photo-1582233479366-6d38bc390a08?w=1080&q=80" />
<div className="">
<span className="text-lg lg:text-xl font-semibold tracking-tight">Hey, Marcus!</span>
<p className="text-xs text-neutral-400 lg:block hidden">Ready to crush today's workout?</p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="w-10 h-10 lg:w-11 lg:h-11 flex items-center justify-center rounded-full ring-1 ring-neutral-800 bg-neutral-900/80 hover:bg-neutral-800/80 transition-colors duration-200">
<svg className="lucide lucide-bell w-5 h-5 text-neutral-300" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</button>
<button className="w-10 h-10 lg:w-11 lg:h-11 flex items-center justify-center rounded-full ring-1 ring-neutral-800 bg-neutral-900/80 hover:bg-neutral-800/80 transition-colors duration-200">
<svg className="lucide lucide-settings w-5 h-5 text-neutral-300" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>
</header>
<section className="overflow-x-auto pb-2">
<div className="flex gap-3 text-center min-w-max px-1">
<div className="flex flex-col gap-2 w-12 lg:w-14">
<span className="text-xs text-neutral-500 font-medium">Sun</span>
<div className="flex items-center justify-center w-full aspect-square rounded-xl ring-1 ring-neutral-800 text-sm hover:ring-neutral-700 transition-colors">16</div>
</div>
<div className="flex flex-col gap-2 w-12 lg:w-14">
<span className="text-xs text-neutral-500 font-medium">Mon</span>
<div className="flex items-center justify-center w-full aspect-square rounded-xl ring-1 ring-neutral-800 text-sm bg-emerald-500/10 ring-emerald-500/50">
<svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
</div>
<div className="flex flex-col gap-2 w-12 lg:w-14">
<span className="text-xs text-neutral-500 font-medium">Tue</span>
<div className="flex items-center justify-center w-full aspect-square rounded-xl ring-1 ring-neutral-800 text-sm bg-emerald-500/10 ring-emerald-500/50">
<svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
</div>
<div className="flex flex-col gap-2 w-12 lg:w-14">
<span className="text-xs text-violet-400 font-semibold">Wed</span>
<div className="flex items-center justify-center w-full aspect-square rounded-xl bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 text-sm font-semibold shadow-lg shadow-violet-500/25">18</div>
</div>
<div className="flex flex-col gap-2 w-12 lg:w-14">
<span className="text-xs text-neutral-500 font-medium">Thu</span>
<div className="flex items-center justify-center w-full aspect-square rounded-xl ring-1 ring-neutral-800 text-sm hover:ring-neutral-700 transition-colors">19</div>
</div>
<div className="flex flex-col gap-2 w-12 lg:w-14">
<span className="text-xs text-neutral-500 font-medium">Fri</span>
<div className="flex items-center justify-center w-full aspect-square rounded-xl ring-1 ring-neutral-800 text-sm hover:ring-neutral-700 transition-colors">20</div>
</div>
<div className="flex flex-col gap-2 w-12 lg:w-14">
<span className="text-xs text-neutral-500 font-medium">Sat</span>
<div className="flex items-center justify-center w-full aspect-square rounded-xl ring-1 ring-neutral-800 text-sm hover:ring-neutral-700 transition-colors">21</div>
</div>
</div>
</section>
<section className="rounded-3xl bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-700 p-6 lg:p-7 space-y-5 shadow-2xl shadow-violet-500/20 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
<div className="relative flex items-start gap-4 lg:gap-5">
<img alt="Upper body strength training" className="w-20 h-24 lg:w-24 lg:h-28 ring-2 ring-white/20 object-cover rounded-xl shadow-xl" src="https://images.unsplash.com/photo-1484452330304-377cdeb05340?w=1080&q=80" />
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<span className="text-xs uppercase font-semibold text-white/90 tracking-wider">Day 12 • Week 3</span>
<svg className="lucide lucide-zap w-3 h-3 text-yellow-300" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h2 className="text-xl lg:text-2xl font-bold tracking-tight">Power Upper Body</h2>
<p className="text-sm text-white/80 mt-1 lg:mt-2">Chest, Shoulders & Triceps Focus</p>
<div className="flex items-center mt-4 lg:mt-5">
<div className="flex -space-x-2">
<img alt="Sarah M." className="w-7 h-7 lg:w-8 lg:h-8 object-cover border-white/40 border-2 rounded-full" src="https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=1080&q=80" />
<img alt="Jake R." className="w-7 h-7 lg:w-8 lg:h-8 rounded-full border-2 border-white/40" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face&q=80" />
<img alt="Emma K." className="w-7 h-7 lg:w-8 lg:h-8 rounded-full border-2 border-white/40" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face&q=80" />
</div>
<span className="ml-3 text-sm font-semibold">+142 completed today</span>
</div>
</div>
</div>
<div className="relative flex items-center justify-between pt-2 border-t border-white/10">
<div className="flex items-center gap-2 text-sm text-white/90">
<svg className="lucide lucide-clock w-4 h-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
<span>45-60 min</span>
</div>
<div className="flex items-center gap-2 text-sm text-white/90">
<svg className="lucide lucide-target w-4 h-4" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
<span>8 exercises</span>
</div>
</div>
</section>
<section className="grid grid-cols-2 gap-4 lg:gap-5">
<div className="rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800 p-5 lg:p-6 flex flex-col justify-between shadow-xl ring-1 ring-neutral-800 relative overflow-hidden">
<div className="absolute top-3 right-3">
<svg className="lucide lucide-scale w-4 h-4 text-neutral-600" data-lucide="scale" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="M7 21h10"></path><path d="M12 3v18"></path><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path></svg>
</div>
<div className="">
<p className="text-3xl lg:text-4xl font-bold leading-none tracking-tight">182.4 <span className="text-base font-medium text-neutral-400">lbs</span></p>
<p className="text-xs text-neutral-400 mt-2">Current weight</p>
<div className="flex items-center gap-1 mt-1">
<svg className="lucide lucide-trending-down w-3 h-3 text-emerald-400" data-lucide="trending-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 17h6v-6"></path><path d="m22 17-8.5-8.5-5 5L2 7"></path></svg>
<span className="text-xs text-emerald-400 font-medium">-2.1 lbs this week</span>
</div>
</div>
<p className="text-xs text-neutral-600 mt-4">Last updated: 2h 18m ago</p>
</div>
<div className="rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800 p-5 lg:p-6 flex flex-col justify-between shadow-xl ring-1 ring-neutral-800 relative overflow-hidden">
<div className="absolute top-3 right-3">
<svg className="lucide lucide-flame w-4 h-4 text-orange-500" data-lucide="flame" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>
</div>
<div className="">
<p className="text-3xl lg:text-4xl font-bold leading-none tracking-tight">1,247 <span className="text-base font-medium text-neutral-400">kcal</span></p>
<p className="text-xs text-neutral-400 mt-2">Calories burned</p>
<div className="flex items-center gap-1 mt-1">
<svg className="lucide lucide-trending-up w-3 h-3 text-orange-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="text-xs text-orange-400 font-medium">Goal: 1,500 kcal</span>
</div>
</div>
<p className="text-xs text-neutral-600 mt-4">Today • 83% complete</p>
</div>
</section>
<section className="rounded-2xl ring-1 ring-neutral-800 bg-gradient-to-br from-neutral-900/90 to-neutral-800/90 p-5 lg:p-6 space-y-4 shadow-xl backdrop-blur">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-timer w-4 h-4 text-amber-400" data-lucide="timer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="10" x2="14" y1="2" y2="2"></line><line x1="12" x2="15" y1="14" y2="11"></line><circle cx="12" cy="14" r="8"></circle></svg>
<p className="text-sm font-semibold">Today's Workout Duration</p>
</div>
<p className="text-lg lg:text-xl font-bold tracking-tight"><span id="durationValue">22</span><span className="text-neutral-400 font-medium">/60 min</span></p>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs text-neutral-400">
<span>Progress</span>
<span className="">37% complete</span>
</div>
<div className="w-full h-2.5 rounded-full bg-neutral-700/80 overflow-hidden">
<div className="h-full bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 rounded-full transition-all duration-500" style={{width: `37%`}}></div>
</div>
</div>
</section>
<section className="rounded-2xl ring-1 ring-neutral-800 bg-gradient-to-br from-neutral-900/90 to-neutral-800/90 p-5 lg:p-6 space-y-4 shadow-xl backdrop-blur">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-trophy w-4 h-4 text-violet-400" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg>
<p className="text-sm font-semibold">12-Week Transformation</p>
</div>
<p className="text-lg lg:text-xl font-bold tracking-tight"><span id="daysLeft">67</span><span className="text-neutral-400 font-medium"> days left</span></p>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs text-neutral-400">
<span>Week 3 of 12 completed</span>
<span className="">25% complete</span>
</div>
<div className="w-full h-2.5 rounded-full bg-neutral-700/80 overflow-hidden">
<div className="h-full bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-500 rounded-full transition-all duration-500" style={{width: `25%`}}></div>
</div>
</div>
<div className="pt-2 border-t border-neutral-800">
<div className="flex items-center justify-between text-xs text-neutral-500">
<span>Started: Jan 15, 2024</span>
<span>Target: Apr 15, 2024</span>
</div>
</div>
</section>
</div>
</main>



    </>
  );
}
