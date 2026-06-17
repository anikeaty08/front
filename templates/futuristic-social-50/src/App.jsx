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
colors: {
zinc: {
850: '#1f2024',
900: '#18181b',
950: '#09090b', // Deep dark
},
neon: {
400: '#4ade80', // Bright green
500: '#22c55e',
900: 'rgba(34, 197, 94, 0.1)',
}
},
fontFamily: {
sans: ['Inter', 'system-ui', 'sans-serif'],
}
}
}
}



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
      

<div className="relative w-full max-w-[400px] h-[860px] bg-zinc-950 rounded-[2.5rem] border border-zinc-800/60 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col ring-1 ring-white/5">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-neon-500/10 blur-[100px] rounded-full pointer-events-none"></div>

<header className="relative z-10 flex items-center justify-between px-6 pt-8 pb-4 bg-zinc-950/80 backdrop-blur-md sticky top-0 border-b border-white/5">
<button className="p-2 -ml-2 hover:bg-zinc-900 rounded-full transition-colors text-zinc-400 hover:text-white group">
<i className="w-5 h-5 transition-transform group-hover:-translate-x-1" data-lucide="arrow-left"></i>
</button>
<div className="flex flex-col items-center">
<h1 className="text-sm font-semibold text-white tracking-wide">sarah_connor</h1>
<div className="flex items-center gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-neon-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
<span className="text-[10px] text-zinc-500 font-medium">Online</span>
</div>
</div>
<button className="p-2 -mr-2 hover:bg-zinc-900 rounded-full transition-colors text-zinc-400 hover:text-white">
<i className="w-5 h-5" data-lucide="user-plus"></i>
</button>
</header>

<main className="flex-1 overflow-y-auto relative z-0">
<div className="px-6 pt-2 pb-24">

<div className="flex p-1 bg-zinc-900/50 border border-zinc-800 rounded-xl mb-6 backdrop-blur-sm sticky top-2 z-20">
<button className="flex-1 py-2 text-xs font-semibold text-zinc-950 bg-neon-400 rounded-lg shadow-[0_0_15px_rgba(74,222,128,0.3)] transition-all">
                        1.2k Followers
                    </button>
<button className="flex-1 py-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors">
                        840 Following
                    </button>
</div>

<div className="relative group mb-6">
<i className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-neon-400 transition-colors" data-lucide="search"></i>
<input className="w-full bg-zinc-900/40 border border-zinc-800 text-sm text-white rounded-xl py-3 pl-11 pr-4 outline-none focus:border-neon-500/50 focus:ring-1 focus:ring-neon-500/20 transition-all placeholder:text-zinc-600" placeholder="Search friends..." type="text"/>
</div>

<div className="mb-8">
<div className="flex items-center justify-between mb-4 px-1">
<span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-semibold">Requests</span>
<span className="text-[10px] bg-neon-500/10 text-neon-400 px-2 py-0.5 rounded-md border border-neon-500/20">3 New</span>
</div>

<div className="group flex items-center gap-3 p-3 rounded-2xl border border-zinc-800/50 bg-zinc-900/20 hover:bg-zinc-900/40 transition-all mb-3">
<div className="relative">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-600 p-[1px]">
<img alt="User" className="w-full h-full rounded-full bg-black object-cover opacity-80" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
</div>
<div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-black rounded-full flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
</div>
</div>
<div className="flex-1 min-w-0">
<h3 className="text-sm font-medium text-zinc-200 truncate">Alex Chen</h3>
<p className="text-[10px] text-zinc-500 truncate">Followed by mike_lift + 2 others</p>
</div>
<div className="flex gap-2">
<button className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
<button className="w-8 h-8 rounded-full bg-neon-400 text-zinc-950 flex items-center justify-center shadow-[0_0_10px_rgba(74,222,128,0.3)] hover:bg-neon-300 transition-all">
<i className="w-4 h-4 stroke-[3]" data-lucide="check"></i>
</button>
</div>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-4 px-1">
<span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-semibold">All Followers</span>
<i className="w-3.5 h-3.5 text-zinc-600 cursor-pointer hover:text-white transition-colors" data-lucide="sliders-horizontal"></i>
</div>

<div className="flex items-center justify-between py-3 group hover:bg-zinc-900/30 -mx-2 px-2 rounded-xl transition-colors cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 overflow-hidden border border-zinc-700/50">
<img alt="User" className="w-full h-full opacity-90" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica"/>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">Jessica M.</h3>
<p className="text-[10px] text-zinc-500">@jess_fit • Elite Trainer</p>
</div>
</div>
<button className="px-3 py-1.5 rounded-full border border-zinc-700 bg-transparent text-[10px] font-medium text-zinc-400 hover:border-zinc-500 hover:text-zinc-200 transition-all">
                            Following
                        </button>
</div>

<div className="flex items-center justify-between py-3 group hover:bg-zinc-900/30 -mx-2 px-2 rounded-xl transition-colors cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 overflow-hidden border border-zinc-700/50">
<img alt="User" className="w-full h-full opacity-90" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus"/>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">Marcus Aurelius</h3>
<p className="text-[10px] text-zinc-500">@stoic_lifts</p>
</div>
</div>
<button className="px-3 py-1.5 rounded-full bg-neon-400 text-zinc-950 text-[10px] font-bold shadow-[0_0_10px_rgba(74,222,128,0.2)] hover:shadow-[0_0_15px_rgba(74,222,128,0.4)] transition-all">
                            Follow Back
                        </button>
</div>

<div className="flex items-center justify-between py-3 group hover:bg-zinc-900/30 -mx-2 px-2 rounded-xl transition-colors cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 overflow-hidden border border-zinc-700/50">
<img alt="User" className="w-full h-full opacity-90" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"/>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">Sarah Connor</h3>
<p className="text-[10px] text-zinc-500">@resistance_leader</p>
</div>
</div>
<button className="px-3 py-1.5 rounded-full border border-zinc-700 bg-transparent text-[10px] font-medium text-zinc-400 hover:border-zinc-500 hover:text-zinc-200 transition-all">
                            Following
                        </button>
</div>

<div className="flex items-center justify-between py-3 group hover:bg-zinc-900/30 -mx-2 px-2 rounded-xl transition-colors cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 overflow-hidden border border-zinc-700/50">
<img alt="User" className="w-full h-full opacity-90" src="https://api.dicebear.com/7.x/avataaars/svg?seed=David"/>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">David Goggins</h3>
<p className="text-[10px] text-zinc-500">@cant_hurt_me</p>
</div>
</div>
<button className="px-3 py-1.5 rounded-full bg-neon-400 text-zinc-950 text-[10px] font-bold shadow-[0_0_10px_rgba(74,222,128,0.2)] hover:shadow-[0_0_15px_rgba(74,222,128,0.4)] transition-all">
                            Follow Back
                        </button>
</div>

<div className="flex items-center justify-between py-3 group hover:bg-zinc-900/30 -mx-2 px-2 rounded-xl transition-colors cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 overflow-hidden border border-zinc-700/50">
<img alt="User" className="w-full h-full opacity-90" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Zoe"/>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">Zoe Kravitz</h3>
<p className="text-[10px] text-zinc-500">@catwoman_fit</p>
</div>
</div>
<button className="px-3 py-1.5 rounded-full border border-zinc-700 bg-transparent text-[10px] font-medium text-zinc-400 hover:border-zinc-500 hover:text-zinc-200 transition-all">
                            Following
                        </button>
</div>
</div>
</div>
</main>

<div className="absolute bottom-6 left-6 right-6 h-16 bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-2xl flex items-center justify-around shadow-2xl z-20">
<button className="flex flex-col items-center gap-1 text-zinc-500 hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="home"></i>
</button>
<button className="flex flex-col items-center gap-1 text-zinc-500 hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="dumbbell"></i>
</button>
<button className="flex items-center justify-center w-10 h-10 bg-neon-400 rounded-full text-zinc-950 shadow-[0_0_15px_rgba(74,222,128,0.5)] -translate-y-4 border-4 border-zinc-950">
<i className="w-6 h-6 stroke-[3]" data-lucide="plus"></i>
</button>
<button className="flex flex-col items-center gap-1 text-white transition-colors relative">
<i className="w-5 h-5" data-lucide="users"></i>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-neon-400 rounded-full"></span>
</button>
<button className="flex flex-col items-center gap-1 text-zinc-500 hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="user"></i>
</button>
</div>

<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent pointer-events-none z-10"></div>
</div>


    </>
  );
}
