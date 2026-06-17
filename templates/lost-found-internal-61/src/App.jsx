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
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['Space Mono', 'monospace'],
},
colors: {
stone: {
850: '#1f1f1e',
900: '#1c1917', // Base
}
},
animation: {
'slide-up': 'slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
},
keyframes: {
slideUpFade: {
'0%': { opacity: 0, transform: 'translateY(20px)' },
'100%': { opacity: 1, transform: 'translateY(0)' },
}
}
}
}
}

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
      

<aside className="w-20 h-full glass-panel flex flex-col items-center py-8 z-50 flex-shrink-0 animate-slide-up">

<div className="mb-12 cursor-pointer group">
<div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-mono tracking-tighter group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                CN
            </div>
</div>

<nav className="flex-1 flex flex-col gap-8 w-full items-center">
<button className="text-stone-400 hover:text-indigo-400 transition-colors p-2 rounded-xl hover:bg-white/5 group relative">
<span className="iconify" data-icon="lucide:layout-grid" data-width="24" style={{strokeWidth: '1.5'}}></span>
<span className="absolute left-full ml-4 px-2 py-1 bg-stone-800 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-stone-700">Dashboard</span>
</button>
<button className="text-indigo-400 p-2 rounded-xl bg-indigo-500/10 relative">
<span className="iconify" data-icon="lucide:search" data-width="24" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="text-stone-400 hover:text-indigo-400 transition-colors p-2 rounded-xl hover:bg-white/5 relative group">
<span className="iconify" data-icon="lucide:plus-circle" data-width="24" style={{strokeWidth: '1.5'}}></span>
<span className="absolute left-full ml-4 px-2 py-1 bg-stone-800 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-stone-700">Upload Item</span>
</button>
<button className="text-stone-400 hover:text-indigo-400 transition-colors p-2 rounded-xl hover:bg-white/5 relative group">
<span className="iconify" data-icon="lucide:bell" data-width="24" style={{strokeWidth: '1.5'}}></span>
<div className="absolute top-2 right-2 w-2 h-2 bg-indigo-500 rounded-full"></div>
</button>
</nav>

<div className="mt-auto">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-stone-700 to-stone-600 border border-stone-500/30 overflow-hidden cursor-pointer hover:ring-2 hover:ring-indigo-500/50 transition-all">
<img alt="User" className="w-full h-full object-cover opacity-80 hover:opacity-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
</div>
</div>
</aside>

<main className="flex-1 relative h-full overflow-y-auto overflow-x-hidden">

<div className="fixed top-[-20%] right-[-10%] w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none"></div>
<div className="fixed bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-stone-800/40 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-8 py-10 relative z-10">

<header className="flex justify-between items-center mb-16 animate-slide-up animate-delay-100">
<div className="flex flex-col">
<span className="text-xs font-mono text-indigo-400 tracking-widest uppercase mb-1">Internal Portal</span>
<h2 className="text-sm font-light text-stone-400">Welcome back, Alex.</h2>
</div>
<div className="flex items-center gap-4">

<div className="relative group">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-500 group-focus-within:text-indigo-400 transition-colors">
<span className="iconify" data-icon="lucide:search" data-width="18" style={{strokeWidth: '1.5'}}></span>
</span>
<input className="pl-10 pr-4 py-2.5 bg-stone-800/40 border border-stone-800 text-sm text-stone-200 rounded-full w-64 focus:w-80 focus:bg-stone-800/80 focus:border-indigo-500/50 outline-none transition-all duration-300 placeholder:text-stone-600 font-light" placeholder="Search by keyword, date, or ID..." type="text"/>
</div>
</div>
</header>

<section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-center">
<div className="lg:col-span-7 flex flex-col justify-center animate-slide-up animate-delay-200">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-800/50 border border-stone-700/50 w-fit mb-6">
<span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
<span className="text-xs font-mono text-stone-400 tracking-tight">LIVE UPDATES ENABLED</span>
</div>
<h1 className="font-mono font-medium text-4xl lg:text-5xl leading-tight tracking-widest text-stone-100 mb-6">
                        RECOVER <span className="text-stone-500">WHAT</span><br/>
<span className="text-indigo-500">MATTERS</span> MOST.
                    </h1>
<p className="font-sans font-light text-lg text-stone-400 mb-10 max-w-lg leading-relaxed">
                        Effortlessly report lost items or log found belongings within the company premises. Real-time matching powered by our internal network.
                    </p>
<div className="flex gap-4">
<button className="bg-stone-200 text-stone-900 hover:bg-white px-8 py-3.5 rounded-full font-medium text-sm tracking-wide transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
<span className="iconify" data-icon="lucide:plus" data-width="18" style={{strokeWidth: '1.5'}}></span>
                            I Found an Item
                        </button>
<button className="bg-stone-800/50 text-stone-300 border border-stone-700 hover:border-indigo-500/50 hover:text-indigo-300 px-8 py-3.5 rounded-full font-medium text-sm tracking-wide transition-all hover:bg-stone-800 active:scale-95 flex items-center gap-2 backdrop-blur-sm">
<span className="iconify" data-icon="lucide:search" data-width="18" style={{strokeWidth: '1.5'}}></span>
                            I Lost Something
                        </button>
</div>
</div>

<div className="lg:col-span-5 animate-slide-up animate-delay-300">
<div className="grid grid-cols-2 gap-4">

<div className="glass-card p-6 rounded-3xl flex flex-col justify-between h-40 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify" data-icon="lucide:package-open" data-width="64" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="flex justify-between items-start">
<span className="text-stone-500 text-xs font-mono uppercase tracking-widest">Found Today</span>
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
</div>
<div>
<span className="text-4xl font-mono font-medium text-stone-100 tracking-tight">12</span>
<div className="text-xs text-stone-500 mt-1 font-light">Items waiting for owners</div>
</div>
</div>

<div className="glass-card p-6 rounded-3xl flex flex-col justify-between h-40 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify" data-icon="lucide:check-circle" data-width="64" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="flex justify-between items-start">
<span className="text-stone-500 text-xs font-mono uppercase tracking-widest">Returned</span>
</div>
<div>
<span className="text-4xl font-mono font-medium text-indigo-400 tracking-tight">84%</span>
<div className="text-xs text-stone-500 mt-1 font-light">Success rate this month</div>
</div>
</div>

<div className="col-span-2 glass-card p-6 rounded-3xl flex items-center justify-between group cursor-pointer border border-indigo-500/20 hover:border-indigo-500/40">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center text-indigo-400">
<span className="iconify" data-icon="lucide:map-pin" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<h3 className="text-stone-200 text-sm font-medium">Browse by Location</h3>
<p className="text-stone-500 text-xs mt-0.5 font-light">Cafeteria, Lobby, Meeting Rooms...</p>
</div>
</div>
<span className="iconify text-stone-600 group-hover:text-indigo-400 transition-colors" data-icon="lucide:arrow-right" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</div>
</section>

<section className="animate-slide-up animate-delay-400">
<div className="flex justify-between items-end mb-8 border-b border-stone-800 pb-4">
<div>
<h3 className="font-mono text-xl tracking-tight text-stone-200">Recent Activity</h3>
<p className="text-xs text-stone-500 mt-1 font-light">Latest uploads from the community</p>
</div>

<div className="flex bg-stone-800/50 p-1 rounded-lg">
<button className="px-4 py-1.5 rounded-md bg-stone-700/50 text-stone-200 text-xs font-medium shadow-sm transition-all">All</button>
<button className="px-4 py-1.5 rounded-md hover:bg-stone-800 text-stone-500 hover:text-stone-300 text-xs font-medium transition-all">Lost</button>
<button className="px-4 py-1.5 rounded-md hover:bg-stone-800 text-stone-500 hover:text-stone-300 text-xs font-medium transition-all">Found</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<article className="glass-card rounded-2xl overflow-hidden group cursor-pointer">
<div className="h-40 bg-stone-800 relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 to-transparent z-10"></div>
<div className="w-full h-full bg-stone-800 flex items-center justify-center text-stone-700 group-hover:scale-105 transition-transform duration-500">
<span className="iconify" data-icon="lucide:headphones" data-width="48" style={{strokeWidth: '1'}}></span>
</div>
<span className="absolute top-3 left-3 z-20 px-2 py-1 rounded bg-stone-900/80 border border-stone-700/50 text-[10px] font-mono uppercase tracking-wider text-indigo-300 backdrop-blur-md">
                                FOUND
                            </span>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-2">
<h4 className="text-sm font-medium text-stone-200 line-clamp-1">Sony WH-1000XM4</h4>
<span className="text-[10px] text-stone-500 whitespace-nowrap">2h ago</span>
</div>
<p className="text-xs text-stone-500 font-light mb-4 line-clamp-2">Found on the 3rd floor couch area near the coffee machine.</p>
<div className="flex items-center gap-2 pt-3 border-t border-stone-800/50">
<div className="w-5 h-5 rounded-full bg-stone-700 flex items-center justify-center text-[8px] text-stone-300">JD</div>
<span className="text-[10px] text-stone-400">John Doe</span>
</div>
</div>
</article>

<article className="glass-card rounded-2xl overflow-hidden group cursor-pointer">
<div className="h-40 bg-stone-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 to-transparent z-10"></div>
<div className="w-full h-full bg-stone-800 flex items-center justify-center text-stone-700 group-hover:scale-105 transition-transform duration-500">
<span className="iconify" data-icon="lucide:credit-card" data-width="48" style={{strokeWidth: '1'}}></span>
</div>
<span className="absolute top-3 left-3 z-20 px-2 py-1 rounded bg-stone-900/80 border border-stone-700/50 text-[10px] font-mono uppercase tracking-wider text-rose-300 backdrop-blur-md">
                                LOST
                            </span>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-2">
<h4 className="text-sm font-medium text-stone-200 line-clamp-1">Access Card (Badge)</h4>
<span className="text-[10px] text-stone-500 whitespace-nowrap">5h ago</span>
</div>
<p className="text-xs text-stone-500 font-light mb-4 line-clamp-2">Lost somewhere between the parking lot and lobby elevator.</p>
<div className="flex items-center gap-2 pt-3 border-t border-stone-800/50">
<div className="w-5 h-5 rounded-full bg-indigo-900/50 flex items-center justify-center text-[8px] text-indigo-300">SL</div>
<span className="text-[10px] text-stone-400">Sarah Lee</span>
</div>
</div>
</article>

<article className="glass-card rounded-2xl overflow-hidden group cursor-pointer">
<div className="h-40 bg-stone-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 to-transparent z-10"></div>
<div className="w-full h-full bg-stone-800 flex items-center justify-center text-stone-700 group-hover:scale-105 transition-transform duration-500">
<span className="iconify" data-icon="lucide:umbrella" data-width="48" style={{strokeWidth: '1'}}></span>
</div>
<span className="absolute top-3 left-3 z-20 px-2 py-1 rounded bg-stone-900/80 border border-stone-700/50 text-[10px] font-mono uppercase tracking-wider text-indigo-300 backdrop-blur-md">
                                FOUND
                            </span>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-2">
<h4 className="text-sm font-medium text-stone-200 line-clamp-1">Black Umbrella</h4>
<span className="text-[10px] text-stone-500 whitespace-nowrap">1d ago</span>
</div>
<p className="text-xs text-stone-500 font-light mb-4 line-clamp-2">Left in Meeting Room B. It has a wooden handle.</p>
<div className="flex items-center gap-2 pt-3 border-t border-stone-800/50">
<div className="w-5 h-5 rounded-full bg-stone-700 flex items-center justify-center text-[8px] text-stone-300">MK</div>
<span className="text-[10px] text-stone-400">Mike K.</span>
</div>
</div>
</article>

<article className="glass-card rounded-2xl overflow-hidden group cursor-pointer border border-dashed border-stone-700 flex flex-col items-center justify-center text-center p-6 bg-transparent hover:bg-stone-800/20">
<div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 mb-3 group-hover:text-indigo-400 transition-colors">
<span className="iconify" data-icon="lucide:plus" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h4 className="text-sm font-medium text-stone-300">Submit New</h4>
<p className="text-xs text-stone-500 font-light mt-1">Report a lost or found item to the list</p>
</article>
</div>
</section>
</div>
</main>

    </>
  );
}
