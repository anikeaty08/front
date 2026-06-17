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



        lucide.createIcons({
            attrs: {
                strokeWidth: 1.5
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
      

<div className="w-full max-w-md bg-black min-h-screen relative pb-20 overflow-hidden">

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="fixed bottom-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

<header className="flex justify-between items-center p-6 relative z-10">
<button className="w-10 h-10 rounded-full bg-zinc-900/50 backdrop-blur-md border border-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all">
<i className="w-4 h-4" data-lucide="edit-3"></i>
</button>
<div className="flex items-center space-x-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)] animate-pulse"></span>
<h1 className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase">Profile View</h1>
</div>
<button className="w-10 h-10 rounded-full bg-zinc-900/50 backdrop-blur-md border border-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all">
<i className="w-5 h-5" data-lucide="settings-2"></i>
</button>
</header>

<section className="px-6 flex flex-col items-center mb-8 relative z-10 text-center">
<div className="relative group mb-4">

<div className="absolute -inset-1 rounded-full bg-gradient-to-b from-emerald-500 to-transparent opacity-20 group-hover:opacity-40 blur transition duration-500"></div>
<div className="relative h-28 w-28 rounded-full bg-zinc-900 border-2 border-zinc-800 overflow-hidden flex items-center justify-center shadow-2xl">
<img alt="User Avatar" className="w-full h-full object-cover opacity-90" src="https://api.dicebear.com/9.x/avataaars/svg?seed=Felix"/>
</div>
<div className="absolute bottom-0 right-1 bg-emerald-500 text-black text-[10px] font-bold px-2 py-0.5 rounded-full border-2 border-black">PRO</div>
</div>
<h2 className="text-2xl font-bold text-white tracking-tight">Lifting User</h2>
<p className="text-emerald-400 font-medium text-sm mt-1">@liftin_user</p>
<div className="flex items-center gap-4 mt-4">
<button className="px-6 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-emerald-400 transition-colors shadow-lg shadow-white/10">
                    Edit Profile
                </button>
<button className="p-2 rounded-full border border-zinc-800 bg-zinc-900/50 hover:border-zinc-600 transition-colors">
<i className="w-4 h-4 text-zinc-400" data-lucide="share-2"></i>
</button>
</div>
</section>

<section className="px-6 grid grid-cols-3 gap-2 mb-8 relative z-10">

<div className="bg-zinc-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-3 flex flex-col items-center justify-center hover:bg-zinc-800/40 transition-colors group">
<i className="w-4 h-4 text-emerald-500 mb-2 opacity-70 group-hover:opacity-100" data-lucide="dumbbell"></i>
<span className="text-xl font-bold text-white tracking-tight">120</span>
<span className="text-[10px] uppercase tracking-wider text-zinc-500 mt-1">Workouts</span>
</div>

<div className="bg-zinc-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-3 flex flex-col items-center justify-center hover:bg-zinc-800/40 transition-colors group">
<i className="w-4 h-4 text-orange-500 mb-2 opacity-70 group-hover:opacity-100" data-lucide="flame"></i>
<span className="text-xl font-bold text-white tracking-tight">7</span>
<span className="text-[10px] uppercase tracking-wider text-zinc-500 mt-1">Day Streak</span>
</div>

<div className="bg-zinc-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-3 flex flex-col items-center justify-center hover:bg-zinc-800/40 transition-colors group">
<i className="w-4 h-4 text-blue-500 mb-2 opacity-70 group-hover:opacity-100" data-lucide="users"></i>
<span className="text-xl font-bold text-white tracking-tight">200</span>
<span className="text-[10px] uppercase tracking-wider text-zinc-500 mt-1">Followers</span>
</div>
</section>

<div className="px-6 mb-6 relative z-10">
<nav className="flex bg-zinc-900/80 p-1 rounded-xl border border-white/5 backdrop-blur-sm">
<button className="flex-1 py-2 text-center text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-colors rounded-lg">Feed</button>
<button className="flex-1 py-2 text-center text-xs font-bold text-black bg-emerald-400 rounded-lg shadow-lg shadow-emerald-900/20">Progress</button>
<button className="flex-1 py-2 text-center text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-colors rounded-lg">History</button>
</nav>
</div>

<div className="px-6 space-y-4 relative z-10">

<div className="bg-gradient-to-br from-zinc-900/90 to-black border border-white/10 rounded-3xl p-5 relative overflow-hidden">

<div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl -mr-6 -mt-6 pointer-events-none"></div>
<div className="flex justify-between items-center mb-4">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
<h3 className="text-sm font-semibold text-white tracking-wide uppercase">Current Split</h3>
</div>
<span className="text-xs text-zinc-500 font-mono">PPL • Wk 3</span>
</div>

<div className="flex items-end justify-between mb-2">
<h2 className="text-xl font-bold text-white">Push Pull Legs</h2>
<span className="text-emerald-400 text-sm font-bold">66%</span>
</div>
<div className="h-1.5 w-full bg-zinc-800 rounded-full mb-6 overflow-hidden">
<div className="h-full w-2/3 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full shadow-[0_0_15px_rgba(52,211,153,0.5)]"></div>
</div>

<div className="grid grid-cols-3 gap-2">

<div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3 flex flex-col items-center justify-center text-center h-20 transition-all hover:bg-emerald-500/20">
<i className="w-5 h-5 text-emerald-400 mb-1" data-lucide="check-circle-2"></i>
<span className="text-[10px] font-bold text-emerald-100 uppercase tracking-wide">Push</span>
</div>

<div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3 flex flex-col items-center justify-center text-center h-20 transition-all hover:bg-emerald-500/20">
<i className="w-5 h-5 text-emerald-400 mb-1" data-lucide="check-circle-2"></i>
<span className="text-[10px] font-bold text-emerald-100 uppercase tracking-wide">Pull</span>
</div>

<div className="bg-zinc-800/30 border border-white/5 rounded-xl p-3 flex flex-col items-center justify-center text-center h-20 relative overflow-hidden">
<div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
<span className="text-xs font-bold text-white mb-1">Legs</span>
<span className="text-[10px] text-zinc-500 uppercase">Tomorrow</span>
</div>
</div>
</div>

<div className="bg-zinc-900/40 backdrop-blur-md border border-white/5 rounded-3xl p-6">
<div className="flex justify-between items-center mb-6">
<h3 className="text-sm font-bold text-white uppercase tracking-wide">June 2024</h3>
<div className="flex gap-1">
<button className="p-1 hover:bg-zinc-800 rounded text-zinc-500 hover:text-white transition-colors"><i className="w-4 h-4" data-lucide="chevron-left"></i></button>
<button className="p-1 hover:bg-zinc-800 rounded text-zinc-500 hover:text-white transition-colors"><i className="w-4 h-4" data-lucide="chevron-right"></i></button>
</div>
</div>

<div className="grid grid-cols-7 gap-y-4 gap-x-1 text-center text-sm">

<div className="text-zinc-600 font-bold text-[10px] uppercase">S</div>
<div className="text-zinc-600 font-bold text-[10px] uppercase">M</div>
<div className="text-zinc-600 font-bold text-[10px] uppercase">T</div>
<div className="text-zinc-600 font-bold text-[10px] uppercase">W</div>
<div className="text-zinc-600 font-bold text-[10px] uppercase">T</div>
<div className="text-zinc-600 font-bold text-[10px] uppercase">F</div>
<div className="text-zinc-600 font-bold text-[10px] uppercase">S</div>

<div className="text-zinc-800">26</div>
<div className="text-zinc-800">27</div>
<div className="text-zinc-800">28</div>
<div className="text-zinc-800">29</div>
<div className="text-zinc-800">30</div>
<div className="text-zinc-800">31</div>
<div className="text-zinc-400">1</div>

<div className="text-zinc-400">2</div>
<div className="text-zinc-400">3</div>

<div className="flex justify-center items-center">
<div className="w-6 h-6 rounded-full bg-zinc-800 border border-emerald-500/30 text-emerald-400 text-xs font-medium flex items-center justify-center">4</div>
</div>
<div className="text-zinc-400">5</div>
<div className="text-zinc-400">6</div>

<div className="flex justify-center items-center">
<div className="w-6 h-6 rounded-full bg-zinc-800 border border-emerald-500/30 text-emerald-400 text-xs font-medium flex items-center justify-center">7</div>
</div>
<div className="text-zinc-400">8</div>

<div className="text-zinc-400">9</div>
<div className="text-zinc-400">10</div>

<div className="flex justify-center items-center">
<div className="w-6 h-6 rounded-full bg-zinc-800 border border-emerald-500/30 text-emerald-400 text-xs font-medium flex items-center justify-center">11</div>
</div>
<div className="text-zinc-400">12</div>

<div className="flex justify-center items-center relative">
<div className="absolute inset-0 bg-emerald-500 blur-md opacity-30 rounded-full"></div>
<div className="w-7 h-7 rounded-full bg-emerald-500 text-black font-bold text-xs flex items-center justify-center relative z-10 shadow-lg shadow-emerald-500/20">13</div>
</div>

<div className="flex justify-center items-center">
<div className="w-6 h-6 rounded-full bg-zinc-800 border border-emerald-500/30 text-emerald-400 text-xs font-medium flex items-center justify-center">14</div>
</div>
<div className="text-zinc-400">15</div>
</div>
</div>

<div className="h-8"></div>
</div>
</div>


    </>
  );
}
