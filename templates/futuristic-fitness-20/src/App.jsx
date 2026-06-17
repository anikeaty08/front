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
      
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto">

<div className="relative bg-zinc-950 rounded-[2.5rem] border border-white/5 shadow-2xl overflow-hidden h-[850px] flex flex-col group transition-all duration-500 hover:shadow-emerald-900/10 hover:border-white/10">

<div className="absolute top-0 left-0 w-full h-64 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"></div>

<header className="relative z-10 flex items-center justify-between p-6 pt-8 pb-4">
<button className="p-2 rounded-full hover:bg-white/5 transition-colors text-white">
<i className="w-6 h-6" data-lucide="chevron-left"></i>
</button>
<h1 className="text-lg font-semibold tracking-tight text-white">Followers</h1>
<div className="w-10"></div> 
</header>

<div className="px-6 mb-6">
<div className="relative group/search">
<i className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within/search:text-emerald-400 transition-colors" data-lucide="search"></i>
<input className="w-full bg-zinc-900/50 border border-white/5 rounded-xl py-3.5 pl-11 pr-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500/30 focus:ring-1 focus:ring-emerald-500/30 transition-all shadow-inner" placeholder="Search followers..." type="text"/>
</div>
</div>

<div className="flex-1 overflow-y-auto px-6 space-y-5 no-scrollbar pb-6">

<div className="flex items-center justify-between group">
<div className="flex items-center gap-4">
<div className="relative">
<img alt="User" className="w-12 h-12 rounded-full object-cover ring-2 ring-transparent group-hover:ring-emerald-500/50 transition-all" src="https://i.pravatar.cc/150?u=1"/>
</div>
<div>
<h3 className="text-sm font-medium text-white leading-tight">Sarah Lifts</h3>
<p className="text-xs text-zinc-500 mt-0.5">@sarah_lifts</p>
</div>
</div>
<button className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-semibold tracking-wide rounded-lg shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all transform hover:scale-105">
                        FOLLOW BACK
                    </button>
</div>

<div className="flex items-center justify-between group">
<div className="flex items-center gap-4">
<img alt="User" className="w-12 h-12 rounded-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://i.pravatar.cc/150?u=2"/>
<div>
<h3 className="text-sm font-medium text-zinc-200 leading-tight">Mike Ross</h3>
<p className="text-xs text-zinc-500 mt-0.5">@mike_r_fit</p>
</div>
</div>
<button className="px-4 py-2 border border-white/10 bg-white/5 hover:bg-white/10 text-zinc-400 text-xs font-medium rounded-lg transition-all">
                        Following
                    </button>
</div>

<div className="flex items-center justify-between group">
<div className="flex items-center gap-4">
<img alt="User" className="w-12 h-12 rounded-full object-cover ring-2 ring-transparent group-hover:ring-emerald-500/50 transition-all" src="https://i.pravatar.cc/150?u=3"/>
<div>
<h3 className="text-sm font-medium text-white leading-tight">Gym Rat 99</h3>
<p className="text-xs text-zinc-500 mt-0.5">@gymrat99</p>
</div>
</div>
<button className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-semibold tracking-wide rounded-lg shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all transform hover:scale-105">
                        FOLLOW BACK
                    </button>
</div>

<div className="flex items-center justify-between group">
<div className="flex items-center gap-4">
<img alt="User" className="w-12 h-12 rounded-full object-cover ring-2 ring-transparent group-hover:ring-emerald-500/50 transition-all" src="https://i.pravatar.cc/150?u=4"/>
<div>
<h3 className="text-sm font-medium text-white leading-tight">Alex Chen</h3>
<p className="text-xs text-zinc-500 mt-0.5">@alexc_lifts</p>
</div>
</div>
<button className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-semibold tracking-wide rounded-lg shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all transform hover:scale-105">
                        FOLLOW BACK
                    </button>
</div>

<div className="flex items-center justify-between group">
<div className="flex items-center gap-4">
<img alt="User" className="w-12 h-12 rounded-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://i.pravatar.cc/150?u=5"/>
<div>
<h3 className="text-sm font-medium text-zinc-200 leading-tight">Jessica Pearson</h3>
<p className="text-xs text-zinc-500 mt-0.5">@j_pearson</p>
</div>
</div>
<button className="px-4 py-2 border border-white/10 bg-white/5 hover:bg-white/10 text-zinc-400 text-xs font-medium rounded-lg transition-all">
                        Following
                    </button>
</div>

<div className="flex items-center justify-between group">
<div className="flex items-center gap-4">
<img alt="User" className="w-12 h-12 rounded-full object-cover ring-2 ring-transparent group-hover:ring-emerald-500/50 transition-all" src="https://i.pravatar.cc/150?u=6"/>
<div>
<h3 className="text-sm font-medium text-white leading-tight">David Kim</h3>
<p className="text-xs text-zinc-500 mt-0.5">@kim_cardio</p>
</div>
</div>
<button className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-semibold tracking-wide rounded-lg shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all transform hover:scale-105">
                        FOLLOW BACK
                    </button>
</div>

<div className="flex items-center justify-between group">
<div className="flex items-center gap-4">
<img alt="User" className="w-12 h-12 rounded-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://i.pravatar.cc/150?u=7"/>
<div>
<h3 className="text-sm font-medium text-zinc-200 leading-tight">Louis Litt</h3>
<p className="text-xs text-zinc-500 mt-0.5">@louis_mud</p>
</div>
</div>
<button className="px-4 py-2 border border-white/10 bg-white/5 hover:bg-white/10 text-zinc-400 text-xs font-medium rounded-lg transition-all">
                        Following
                    </button>
</div>

<div className="flex items-center justify-between group">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">M</div>
<div>
<h3 className="text-sm font-medium text-white leading-tight">Marcus T</h3>
<p className="text-xs text-zinc-500 mt-0.5">@marcus_trains</p>
</div>
</div>
<button className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-semibold tracking-wide rounded-lg shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all transform hover:scale-105">
                        FOLLOW BACK
                    </button>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none"></div>
</div>

<div className="relative bg-zinc-950 rounded-[2.5rem] border border-white/5 shadow-2xl overflow-hidden h-[850px] flex flex-col group transition-all duration-500 hover:shadow-emerald-900/10 hover:border-white/10">

<header className="relative z-10 flex items-center justify-between p-6 pt-8 pb-2">
<button className="p-2 rounded-full hover:bg-white/5 transition-colors text-white">
<i className="w-6 h-6" data-lucide="x"></i>
</button>
<h1 className="text-base font-medium tracking-tight text-white">New Workout</h1>
<button className="px-5 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold rounded-full shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all">
                    Save
                </button>
</header>
<div className="flex-1 overflow-y-auto px-6 no-scrollbar pb-32">

<div className="mt-4 mb-8">
<input className="w-full bg-transparent border-b border-white/10 pb-2 text-xl font-semibold text-white tracking-tight focus:outline-none focus:border-emerald-500 transition-colors placeholder-zinc-700" type="text" value="Push Day (Chest &amp; Tris)"/>
</div>

<div className="mb-8">
<p className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold mb-4">Target Muscles</p>
<button className="w-full py-3 mb-4 rounded-xl border border-white/10 bg-zinc-900/30 flex items-center justify-center gap-2 text-zinc-400 text-sm font-medium hover:bg-zinc-900/60 hover:text-zinc-200 transition-all group/body">
<i className="w-4 h-4 group-hover/body:text-emerald-400 transition-colors" data-lucide="accessibility"></i>
                        Full Body
                    </button>
<div className="flex flex-wrap gap-2">
<button className="px-4 py-1.5 rounded-full bg-emerald-500 text-black text-xs font-semibold flex items-center gap-1.5 shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                            Chest <i className="w-3 h-3 stroke-[3]" data-lucide="check"></i>
</button>
<button className="px-4 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 hover:text-zinc-200 text-xs font-medium hover:border-white/20 transition-all">Back</button>
<button className="px-4 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 hover:text-zinc-200 text-xs font-medium hover:border-white/20 transition-all">Shoulders</button>
<button className="px-4 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 hover:text-zinc-200 text-xs font-medium hover:border-white/20 transition-all">Biceps</button>
<button className="px-4 py-1.5 rounded-full bg-emerald-500 text-black text-xs font-semibold flex items-center gap-1.5 shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                            Triceps <i className="w-3 h-3 stroke-[3]" data-lucide="check"></i>
</button>
<button className="px-4 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 hover:text-zinc-200 text-xs font-medium hover:border-white/20 transition-all">Legs</button>
<button className="px-4 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 hover:text-zinc-200 text-xs font-medium hover:border-white/20 transition-all">Abs</button>
</div>
</div>

<div className="relative group/search mb-8">
<i className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within/search:text-emerald-400 transition-colors" data-lucide="search"></i>
<input className="w-full bg-zinc-900/50 border border-white/5 rounded-xl py-3.5 pl-11 pr-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500/30 transition-all" placeholder="Search Chest, Triceps exercises..." type="text"/>
</div>

<div className="mb-4">
<div className="flex items-center justify-between mb-4 pl-1">
<div className="flex items-center gap-2">
<div className="w-1 h-4 bg-emerald-500 rounded-full"></div>
<h2 className="text-sm font-semibold text-white">Chest</h2>
</div>
<button className="text-[10px] bg-zinc-900 border border-white/5 px-2 py-1 rounded text-zinc-500 font-medium">A-Z</button>
</div>
<div className="space-y-3">

<div className="group flex items-center justify-between p-3 bg-zinc-900/30 rounded-xl border border-white/5 hover:bg-zinc-900/60 hover:border-white/10 transition-all">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-zinc-800 rounded-lg overflow-hidden relative">
<div className="absolute inset-0 flex items-center justify-center text-zinc-600">
<i className="w-6 h-6 opacity-50" data-lucide="dumbbell"></i>
</div>

<img className="w-full h-full object-cover opacity-60 mix-blend-overlay" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h3 className="text-sm font-medium text-white">Barbell Bench Press</h3>
<p className="text-[10px] text-zinc-500 mt-0.5">Compound • Strength</p>
</div>
</div>
<button className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-emerald-500 hover:bg-emerald-500 hover:text-black transition-all">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>

<div className="group flex items-center justify-between p-3 bg-zinc-900/30 rounded-xl border border-white/5 hover:bg-zinc-900/60 hover:border-white/10 transition-all">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-zinc-800 rounded-lg overflow-hidden relative">
<div className="absolute inset-0 flex items-center justify-center text-zinc-600">
<i className="w-6 h-6 opacity-50" data-lucide="dumbbell"></i>
</div>
<img className="w-full h-full object-cover opacity-60 mix-blend-overlay" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h3 className="text-sm font-medium text-white">Incline Dumbbell Press</h3>
<p className="text-[10px] text-zinc-500 mt-0.5">Isolation • Hypertrophy</p>
</div>
</div>
<button className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-emerald-500 hover:bg-emerald-500 hover:text-black transition-all">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full bg-[#0a0a0a] border-t border-white/10 rounded-t-[2rem] p-6 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] z-20">
<div className="w-10 h-1 bg-zinc-800 rounded-full mx-auto mb-6"></div>
<div className="flex items-center justify-between mb-6">
<h2 className="text-[10px] uppercase tracking-widest text-emerald-500 font-bold glow-text">Your Workout</h2>
<button className="text-xs text-white font-medium hover:text-emerald-400 transition-colors">Edit List</button>
</div>
<div className="space-y-4 max-h-48 overflow-y-auto no-scrollbar">

<div className="bg-zinc-900/50 rounded-xl p-3 border border-white/5">
<div className="flex justify-between items-start mb-3">
<div className="flex gap-2 items-center">
<i className="w-4 h-4 text-zinc-600" data-lucide="grip-vertical"></i>
<h3 className="text-sm font-medium text-white">Barbell Bench Press</h3>
</div>
<button className="text-zinc-600 hover:text-red-400 transition-colors"><i className="w-3.5 h-3.5" data-lucide="trash-2"></i></button>
</div>
<div className="flex gap-3 pl-6">
<div className="bg-black/40 rounded-lg p-2 flex-1 border border-white/5">
<label className="text-[9px] text-zinc-500 uppercase block mb-1">Sets</label>
<div className="text-sm font-semibold text-white">3</div>
</div>
<div className="bg-black/40 rounded-lg p-2 flex-1 border border-white/5">
<label className="text-[9px] text-zinc-500 uppercase block mb-1">Reps</label>
<div className="text-sm font-semibold text-white">8-12</div>
</div>
</div>
</div>

<div className="bg-zinc-900/50 rounded-xl p-3 border border-white/5">
<div className="flex justify-between items-start mb-3">
<div className="flex gap-2 items-center">
<i className="w-4 h-4 text-zinc-600" data-lucide="grip-vertical"></i>
<h3 className="text-sm font-medium text-white">Pull Ups</h3>
</div>
<button className="text-zinc-600 hover:text-red-400 transition-colors"><i className="w-3.5 h-3.5" data-lucide="trash-2"></i></button>
</div>
<div className="flex gap-3 pl-6">
<div className="bg-black/40 rounded-lg p-2 flex-1 border border-white/5">
<label className="text-[9px] text-zinc-500 uppercase block mb-1">Sets</label>
<div className="text-sm font-semibold text-white">3</div>
</div>
<div className="bg-black/40 rounded-lg p-2 flex-1 border border-white/5">
<label className="text-[9px] text-zinc-500 uppercase block mb-1">Reps</label>
<div className="text-sm font-semibold text-white">Failure</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="relative bg-zinc-950 rounded-[2.5rem] border border-white/5 shadow-2xl overflow-hidden h-[850px] flex flex-col group transition-all duration-500 hover:shadow-emerald-900/10 hover:border-white/10">

<div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

<header className="relative z-10 flex items-center justify-between p-6 pt-8 pb-4">
<button className="p-2 rounded-full hover:bg-white/5 transition-colors text-white">
<i className="w-6 h-6" data-lucide="chevron-left"></i>
</button>
<h1 className="text-lg font-semibold tracking-tight text-white">Following</h1>
<button className="p-2 rounded-full hover:bg-white/5 transition-colors text-white">
<i className="w-5 h-5" data-lucide="user-plus"></i>
</button>
</header>

<div className="px-6 mb-6">
<div className="relative group/search">
<i className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within/search:text-emerald-400 transition-colors" data-lucide="search"></i>
<input className="w-full bg-zinc-900/50 border border-white/5 rounded-xl py-3.5 pl-11 pr-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500/30 focus:ring-1 focus:ring-emerald-500/30 transition-all shadow-inner" placeholder="Search users..." type="text"/>
</div>
</div>

<div className="flex-1 overflow-y-auto px-6 space-y-6 no-scrollbar pb-16">

<div className="flex items-center justify-between group">
<div className="flex items-center gap-4">
<div className="relative">
<img alt="User" className="w-12 h-12 rounded-full object-cover" src="https://i.pravatar.cc/150?u=1"/>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-zinc-950 rounded-full"></div>
</div>
<div>
<div className="flex items-center gap-1">
<h3 className="text-sm font-semibold text-white">Sarah Lifts</h3>
<i className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500/20" data-lucide="badge-check"></i>
</div>
<p className="text-xs text-zinc-500 mt-0.5">@sarah_squats</p>
</div>
</div>
<button className="px-3 py-1.5 border border-emerald-500/30 text-emerald-400 bg-emerald-500/5 hover:bg-emerald-500/10 text-[10px] font-semibold tracking-wider rounded uppercase transition-all">
                        Following
                    </button>
</div>

<div className="flex items-center justify-between group">
<div className="flex items-center gap-4">
<img alt="User" className="w-12 h-12 rounded-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all" src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=150&amp;auto=format&amp;fit=crop"/>
<div>
<h3 className="text-sm font-medium text-white">Mike The Lifter</h3>
<p className="text-xs text-zinc-500 mt-0.5">@mike_heavy_weight</p>
</div>
</div>
<button className="px-3 py-1.5 border border-emerald-500/30 text-emerald-400 bg-emerald-500/5 hover:bg-emerald-500/10 text-[10px] font-semibold tracking-wider rounded uppercase transition-all">
                        Following
                    </button>
</div>

<div className="flex items-center justify-between group">
<div className="flex items-center gap-4">
<div className="relative">
<img alt="User" className="w-12 h-12 rounded-full object-cover" src="https://i.pravatar.cc/150?u=8"/>

<div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-zinc-950 rounded-full animate-pulse"></div>
</div>
<div>
<h3 className="text-sm font-medium text-white">Emily Runz</h3>
<p className="text-xs text-zinc-500 mt-0.5">@emily_cardio</p>
</div>
</div>
<button className="px-3 py-1.5 border border-emerald-500/30 text-emerald-400 bg-emerald-500/5 hover:bg-emerald-500/10 text-[10px] font-semibold tracking-wider rounded uppercase transition-all">
                        Following
                    </button>
</div>

<div className="flex items-center justify-between group">
<div className="flex items-center gap-4">
<div className="relative">
<img alt="User" className="w-12 h-12 rounded-full object-cover" src="https://i.pravatar.cc/150?u=12"/>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-zinc-950 rounded-full"></div>
</div>
<div>
<h3 className="text-sm font-medium text-white">David Goggins Fan</h3>
<p className="text-xs text-zinc-500 mt-0.5">@cant_hurt_me_fan</p>
</div>
</div>
<button className="px-3 py-1.5 border border-emerald-500/30 text-emerald-400 bg-emerald-500/5 hover:bg-emerald-500/10 text-[10px] font-semibold tracking-wider rounded uppercase transition-all">
                        Following
                    </button>
</div>

<div className="flex items-center justify-between group">
<div className="flex items-center gap-4">
<img alt="User" className="w-12 h-12 rounded-full object-cover" src="https://i.pravatar.cc/150?u=15"/>
<div>
<h3 className="text-sm font-medium text-white">Yoga With Jessica</h3>
<p className="text-xs text-zinc-500 mt-0.5">@jessica_flows</p>
</div>
</div>
<button className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold tracking-wide rounded shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all">
                        FOLLOW BACK
                    </button>
</div>

<div className="flex items-center justify-between group">
<div className="flex items-center gap-4">
<img alt="User" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=150&amp;auto=format&amp;fit=crop"/>
<div>
<h3 className="text-sm font-medium text-white">Bulk Bogan</h3>
<p className="text-xs text-zinc-500 mt-0.5">@bulking_season_forever</p>
</div>
</div>
<button className="px-3 py-1.5 border border-emerald-500/30 text-emerald-400 bg-emerald-500/5 hover:bg-emerald-500/10 text-[10px] font-semibold tracking-wider rounded uppercase transition-all">
                        Following
                    </button>
</div>
</div>

<div className="absolute bottom-8 left-0 w-full flex justify-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div>
</div>
</div>
</div>


    </>
  );
}
