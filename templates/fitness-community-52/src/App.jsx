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
      

<header className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50">
<div className="px-6 py-5 flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
<i className="w-5 h-5" data-lucide="users"></i>
</div>
<h1 className="text-xl font-semibold text-zinc-100 tracking-tight">Community</h1>
</div>
<div className="flex items-center gap-4">
<button className="relative group p-2 rounded-full hover:bg-zinc-800 transition-colors">
<i className="w-6 h-6 text-zinc-400 group-hover:text-zinc-100 transition-colors" data-lucide="bell"></i>
<span className="absolute top-2 right-2.5 w-2 h-2 bg-emerald-500 rounded-full border-2 border-zinc-950"></span>
</button>
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-600 p-[1px]">
<img alt="User" className="w-full h-full rounded-full object-cover border-2 border-zinc-950" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
</div>
</div>
</header>

<div className="px-6 mt-6">
<div className="relative group">
<div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
<i className="w-5 h-5 text-zinc-500 group-focus-within:text-emerald-400 transition-colors" data-lucide="search"></i>
</div>
<input className="w-full bg-zinc-900/50 border border-zinc-800 text-zinc-200 text-base rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/50 placeholder:text-zinc-600 transition-all shadow-sm" placeholder="Find athletes or handles..." type="text"/>
</div>
</div>

<section className="mt-10">
<div className="px-6 flex justify-between items-end mb-4">
<h2 className="text-lg font-medium text-zinc-100">Suggested Athletes</h2>
<button className="text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors">See all</button>
</div>
<div className="flex gap-4 overflow-x-auto px-6 pb-4 no-scrollbar">

<div className="min-w-[160px] p-4 rounded-3xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm flex flex-col items-center gap-3 hover:border-emerald-500/30 transition-all group">
<div className="relative w-16 h-16 rounded-full p-[2px] bg-gradient-to-b from-emerald-500 to-transparent">
<img alt="Alex" className="w-full h-full rounded-full object-cover border-2 border-zinc-900" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<div className="text-center">
<h3 className="text-base font-medium text-zinc-100">Alex Smith</h3>
<p className="text-sm text-zinc-500">@alexlifts</p>
</div>
<button className="w-full py-2 rounded-xl bg-emerald-500 text-zinc-950 text-sm font-semibold hover:bg-emerald-400 transition-colors shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                    Follow
                </button>
</div>

<div className="min-w-[160px] p-4 rounded-3xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm flex flex-col items-center gap-3 hover:border-zinc-700 transition-all">
<div className="relative w-16 h-16 rounded-full p-[2px] bg-zinc-800">
<img alt="Sarah" className="w-full h-full rounded-full object-cover border-2 border-zinc-900" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<div className="text-center">
<h3 className="text-base font-medium text-zinc-100">Sarah Jones</h3>
<p className="text-sm text-zinc-500">@sarahstrong</p>
</div>
<button className="w-full py-2 rounded-xl bg-zinc-800 text-zinc-300 text-sm font-medium hover:bg-zinc-700 transition-colors border border-zinc-700">
                    Follow
                </button>
</div>

<div className="min-w-[160px] p-4 rounded-3xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm flex flex-col items-center gap-3 hover:border-zinc-700 transition-all">
<div className="relative w-16 h-16 rounded-full p-[2px] bg-zinc-800">
<img alt="Mike" className="w-full h-full rounded-full object-cover border-2 border-zinc-900" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<div className="text-center">
<h3 className="text-base font-medium text-zinc-100">Mike Ross</h3>
<p className="text-sm text-zinc-500">@mikerunner</p>
</div>
<button className="w-full py-2 rounded-xl bg-zinc-800 text-zinc-300 text-sm font-medium hover:bg-zinc-700 transition-colors border border-zinc-700">
                    Follow
                </button>
</div>
</div>
</section>

<section className="mt-8 px-6">
<h2 className="text-lg font-medium text-zinc-100 mb-4">Daily Challenge</h2>
<div className="relative w-full aspect-[4/3] sm:aspect-[21/9] rounded-[2rem] overflow-hidden group shadow-2xl shadow-emerald-900/10">

<img alt="Gym" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>

<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
<div className="absolute inset-0 bg-emerald-900/20 mix-blend-overlay"></div>

<div className="absolute inset-0 p-6 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="px-3 py-1.5 rounded-lg bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">Today's Pick</span>
<button className="p-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-colors">
<i className="w-5 h-5 text-white" data-lucide="share-2"></i>
</button>
</div>
<div>
<h3 className="text-3xl font-semibold text-white tracking-tight mb-2 drop-shadow-lg">Leg Day Gauntlet</h3>
<div className="flex flex-wrap items-center gap-4 text-zinc-300 text-sm mb-6">
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-emerald-400" data-lucide="flame"></i>
<span>Hard</span>
</div>
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-emerald-400" data-lucide="clock"></i>
<span>45m</span>
</div>
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-emerald-400" data-lucide="users"></i>
<span>124 joined</span>
</div>
</div>
<button className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-500 text-zinc-950 font-semibold flex items-center justify-center gap-2 hover:bg-emerald-400 transition-all hover:gap-3">
<span>Join Challenge</span>
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</section>

<section className="mt-10 px-6">
<h2 className="text-lg font-medium text-zinc-100 mb-4">Trending Workouts</h2>
<div className="flex flex-col gap-4">

<div className="p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 hover:bg-zinc-800/40 hover:border-emerald-500/20 transition-all cursor-pointer group flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-16 h-16 rounded-xl overflow-hidden bg-zinc-800">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<div>
<h4 className="text-base font-medium text-zinc-200 group-hover:text-emerald-400 transition-colors">Arnold Split</h4>
<p className="text-sm text-zinc-500">by @terminator</p>
<div className="flex items-center gap-1 mt-1 text-emerald-500 text-xs font-medium">
<i className="w-3 h-3" data-lucide="activity"></i>
<span>1.2k lifted this</span>
</div>
</div>
</div>
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-emerald-500/10 group-hover:text-emerald-400 transition-all">
<i className="w-5 h-5" data-lucide="chevron-right"></i>
</div>
</div>

<div className="p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 hover:bg-zinc-800/40 hover:border-emerald-500/20 transition-all cursor-pointer group flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-16 h-16 rounded-xl overflow-hidden bg-zinc-800">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<div>
<h4 className="text-base font-medium text-zinc-200 group-hover:text-emerald-400 transition-colors">HIIT Blaster 3000</h4>
<p className="text-sm text-zinc-500">by @cardioqueen</p>
<div className="flex items-center gap-1 mt-1 text-emerald-500 text-xs font-medium">
<i className="w-3 h-3" data-lucide="activity"></i>
<span>850 lifted this</span>
</div>
</div>
</div>
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-emerald-500/10 group-hover:text-emerald-400 transition-all">
<i className="w-5 h-5" data-lucide="chevron-right"></i>
</div>
</div>

<div className="p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 hover:bg-zinc-800/40 hover:border-emerald-500/20 transition-all cursor-pointer group flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-16 h-16 rounded-xl overflow-hidden bg-zinc-800">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<div>
<h4 className="text-base font-medium text-zinc-200 group-hover:text-emerald-400 transition-colors">5x5 Stronglift</h4>
<p className="text-sm text-zinc-500">by @strongman_bob</p>
<div className="flex items-center gap-1 mt-1 text-emerald-500 text-xs font-medium">
<i className="w-3 h-3" data-lucide="activity"></i>
<span>432 lifted this</span>
</div>
</div>
</div>
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-emerald-500/10 group-hover:text-emerald-400 transition-all">
<i className="w-5 h-5" data-lucide="chevron-right"></i>
</div>
</div>
</div>
</section>

<section className="mt-10 px-6">
<h2 className="text-lg font-medium text-zinc-100 mb-4">Creator Spotlight</h2>
<div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800/50">

<div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
<div className="relative p-6">
<div className="flex items-start gap-4 mb-4">
<div className="relative w-16 h-16 rounded-full p-[2px] bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg shadow-emerald-900/20">
<img className="w-full h-full rounded-full object-cover border-4 border-zinc-900" src="https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<div className="absolute bottom-0 right-0 bg-emerald-500 rounded-full p-1 border-2 border-zinc-900">
<i className="w-3 h-3 text-zinc-950 fill-current" data-lucide="star"></i>
</div>
</div>
<div>
<h3 className="text-xl font-semibold text-zinc-100 tracking-tight">Jen Anderson</h3>
<p className="text-emerald-400 text-sm font-medium">@powerlifter_jen</p>
<div className="flex items-center gap-2 mt-2">
<span className="px-2 py-0.5 rounded text-xs bg-zinc-800 text-zinc-400 border border-zinc-700">Pro Coach</span>
</div>
</div>
</div>
<p className="text-base text-zinc-400 leading-relaxed mb-6">
                    National record holder in deadlift. Helping others break their PRs through science-based programming and technique mastery.
                </p>
<div className="flex gap-3">
<button className="flex-1 py-3 rounded-xl bg-zinc-800 text-zinc-200 text-sm font-medium hover:bg-zinc-700 transition-colors border border-zinc-700">
                        View Profile
                    </button>
<button className="flex-1 py-3 rounded-xl bg-emerald-500 text-zinc-950 text-sm font-semibold hover:bg-emerald-400 transition-colors">
                        Follow
                    </button>
</div>
</div>
</div>
</section>

<nav className="fixed bottom-0 left-0 right-0 bg-zinc-950/80 backdrop-blur-xl border-t border-zinc-800/50 z-50 pb-safe">
<div className="flex justify-around items-center px-2 py-3">
<a className="flex flex-col items-center gap-1.5 p-2 w-16 group" href="#">
<i className="w-6 h-6 text-zinc-500 group-hover:text-zinc-300 transition-colors" data-lucide="home"></i>
<span className="text-[10px] font-medium text-zinc-500 group-hover:text-zinc-300">Home</span>
</a>
<a className="flex flex-col items-center gap-1.5 p-2 w-16 group" href="#">
<i className="w-6 h-6 text-zinc-500 group-hover:text-zinc-300 transition-colors" data-lucide="dumbbell"></i>
<span className="text-[10px] font-medium text-zinc-500 group-hover:text-zinc-300">Workout</span>
</a>
<a className="flex flex-col items-center gap-1.5 p-2 w-16 group relative" href="#">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-1 bg-emerald-500 rounded-b-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
<i className="w-6 h-6 text-emerald-400 shadow-emerald-400/50" data-lucide="users"></i>
<span className="text-[10px] font-medium text-emerald-400">Community</span>
</a>
<a className="flex flex-col items-center gap-1.5 p-2 w-16 group" href="#">
<i className="w-6 h-6 text-zinc-500 group-hover:text-zinc-300 transition-colors" data-lucide="user"></i>
<span className="text-[10px] font-medium text-zinc-500 group-hover:text-zinc-300">Profile</span>
</a>
</div>

<div className="h-5"></div>
</nav>


    </>
  );
}
