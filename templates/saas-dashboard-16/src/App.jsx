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
      

<aside className="hidden md:flex flex-col w-64 border-r border-white/5 bg-zinc-950 h-full flex-shrink-0 relative z-20">

<div className="h-16 flex items-center px-6 border-b border-white/5">
<div className="flex items-center gap-2 text-zinc-100">
<div className="h-6 w-6 bg-indigo-500 rounded-md flex items-center justify-center shadow-lg shadow-indigo-500/20">
<span className="font-medium text-xs text-white">V</span>
</div>
<span className="font-medium text-sm tracking-tight">VELOCITY</span>
</div>
</div>

<div className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
<div className="px-3 pb-2">
<p className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Platform</p>
</div>
<a className="group flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 rounded-md hover:bg-white/5 hover:text-zinc-100 transition-colors" href="#">
<i className="w-4 h-4 text-zinc-500 group-hover:text-zinc-100 transition-colors" data-lucide="layout-grid"></i>
                Dashboard
            </a>
<a className="group flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 rounded-md hover:bg-white/5 hover:text-zinc-100 transition-colors" href="#">
<i className="w-4 h-4 text-zinc-500 group-hover:text-zinc-100 transition-colors" data-lucide="bar-chart-2"></i>
                Analytics
            </a>
<a className="group flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-100 bg-white/5 rounded-md transition-colors" href="#">
<i className="w-4 h-4 text-indigo-400" data-lucide="layers"></i>
                Projects
            </a>
<a className="group flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 rounded-md hover:bg-white/5 hover:text-zinc-100 transition-colors" href="#">
<i className="w-4 h-4 text-zinc-500 group-hover:text-zinc-100 transition-colors" data-lucide="users"></i>
                Team
            </a>
<div className="mt-8 px-3 pb-2">
<p className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Configuration</p>
</div>
<a className="group flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 rounded-md hover:bg-white/5 hover:text-zinc-100 transition-colors" href="#">
<i className="w-4 h-4 text-zinc-500 group-hover:text-zinc-100 transition-colors" data-lucide="settings"></i>
                Settings
            </a>
<a className="group flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 rounded-md hover:bg-white/5 hover:text-zinc-100 transition-colors" href="#">
<i className="w-4 h-4 text-zinc-500 group-hover:text-zinc-100 transition-colors" data-lucide="shield"></i>
                Security
            </a>
</div>

<div className="p-4 border-t border-white/5">
<button className="flex items-center gap-3 w-full p-2 rounded-md hover:bg-white/5 transition-colors group text-left">
<div className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-xs font-medium text-white ring-2 ring-zinc-900 group-hover:ring-zinc-800 transition-all">
                    JD
                </div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-zinc-200 truncate">John Doe</p>
<p className="text-xs text-zinc-500 truncate">john@velocity.dev</p>
</div>
<i className="w-4 h-4 text-zinc-600" data-lucide="chevrons-up-down"></i>
</button>
</div>
</aside>

<main className="flex-1 relative flex flex-col h-full overflow-hidden bg-zinc-950">

<div className="absolute inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950 via-transparent to-transparent z-10"></div>
<div className="absolute inset-0 hero-glow z-0"></div>
</div>

<header className="relative z-10 flex items-center justify-between h-16 px-6 lg:px-10 border-b border-white/5 bg-zinc-950/50 backdrop-blur-md">

<button className="md:hidden p-2 -ml-2 text-zinc-400 hover:text-white">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>

<div className="hidden md:flex items-center text-sm text-zinc-500 gap-2">
<span className="hover:text-zinc-300 transition-colors cursor-pointer">Velocity</span>
<span className="text-zinc-700">/</span>
<span className="text-zinc-200 font-medium">Overview</span>
</div>

<div className="flex items-center gap-4 ml-auto">
<div className="relative hidden sm:block">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" data-lucide="search"></i>
<input className="bg-zinc-900/50 border border-white/10 rounded-full py-1.5 pl-9 pr-4 text-sm text-zinc-300 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 placeholder:text-zinc-600 w-64 transition-all" placeholder="Search..." type="text"/>
<div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
<kbd className="hidden lg:inline-flex items-center h-4 px-1.5 text-[10px] font-medium text-zinc-500 bg-zinc-800 rounded border border-zinc-700">⌘K</kbd>
</div>
</div>
<button className="relative p-2 text-zinc-400 hover:text-zinc-100 transition-colors">
<i className="w-5 h-5" data-lucide="bell"></i>
<span className="absolute top-2 right-2 w-2 h-2 bg-indigo-500 rounded-full border-2 border-zinc-950"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto relative z-10 scroll-smooth">
<div className="max-w-6xl mx-auto px-6 lg:px-10 py-20 lg:py-28">

<div className="flex justify-center mb-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium hover:bg-indigo-500/20 transition-colors cursor-pointer">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                        v2.0 is now live
                        <i className="w-3 h-3 ml-1" data-lucide="arrow-right"></i>
</div>
</div>

<div className="text-center max-w-3xl mx-auto">
<h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white mb-6">
                        Build software at <br className="hidden sm:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">lightspeed.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
                        Experience the new standard for software development. 
                        Streamline your workflow with an intelligent interface designed for speed and precision.
                    </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<button className="h-11 px-6 rounded-full bg-white text-zinc-950 text-sm font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center shadow-lg shadow-white/5">
                            Start Building
                            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="h-11 px-6 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm font-medium hover:bg-zinc-800 hover:text-white transition-colors flex items-center gap-2 w-full sm:w-auto justify-center">
<i className="w-4 h-4" data-lucide="play-circle"></i>
                            Watch Demo
                        </button>
</div>
</div>

<div className="relative w-full max-w-4xl mx-auto group">

<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>

<div className="relative glass-panel rounded-xl overflow-hidden aspect-[16/9] md:aspect-[2/1] border-zinc-800/50">

<div className="h-10 border-b border-white/5 flex items-center px-4 bg-zinc-900/50 gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-amber-500/20 border border-amber-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/50"></div>
</div>
<div className="flex-1 text-center">
<div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-zinc-950/50 border border-white/5">
<i className="w-2.5 h-2.5 text-zinc-500" data-lucide="lock"></i>
<span className="text-[10px] text-zinc-500 font-medium">velocity.dev/app</span>
</div>
</div>
</div>

<div className="p-6 md:p-8 grid grid-cols-12 gap-6 h-full">

<div className="col-span-12 md:col-span-4 space-y-4">
<div className="h-24 rounded-lg bg-white/5 border border-white/5 p-4 flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="w-8 h-8 rounded bg-indigo-500/20 flex items-center justify-center text-indigo-400">
<i className="w-4 h-4" data-lucide="activity"></i>
</div>
<span className="text-xs text-green-400">+12%</span>
</div>
<div>
<div className="text-2xl font-medium text-white tracking-tight">24.5k</div>
<div className="text-xs text-zinc-500">Active Users</div>
</div>
</div>
<div className="h-24 rounded-lg bg-white/5 border border-white/5 p-4 flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="w-8 h-8 rounded bg-purple-500/20 flex items-center justify-center text-purple-400">
<i className="w-4 h-4" data-lucide="zap"></i>
</div>
<span className="text-xs text-zinc-500">0%</span>
</div>
<div>
<div className="text-2xl font-medium text-white tracking-tight">98ms</div>
<div className="text-xs text-zinc-500">Latency</div>
</div>
</div>
</div>

<div className="col-span-12 md:col-span-8 rounded-lg bg-white/5 border border-white/5 p-4 relative overflow-hidden">
<div className="flex items-center justify-between mb-6">
<h3 className="text-xs font-medium text-zinc-300">Traffic Overview</h3>
<div className="flex gap-2">
<div className="w-16 h-1.5 rounded-full bg-zinc-800"></div>
<div className="w-8 h-1.5 rounded-full bg-zinc-800"></div>
</div>
</div>

<div className="flex items-end justify-between h-32 gap-2 mt-auto">
<div className="w-full bg-indigo-500/20 h-[40%] rounded-sm hover:bg-indigo-500/40 transition-colors"></div>
<div className="w-full bg-indigo-500/20 h-[65%] rounded-sm hover:bg-indigo-500/40 transition-colors"></div>
<div className="w-full bg-indigo-500/20 h-[50%] rounded-sm hover:bg-indigo-500/40 transition-colors"></div>
<div className="w-full bg-indigo-500/20 h-[80%] rounded-sm hover:bg-indigo-500/40 transition-colors"></div>
<div className="w-full bg-indigo-500/20 h-[60%] rounded-sm hover:bg-indigo-500/40 transition-colors"></div>
<div className="w-full bg-indigo-500/20 h-[90%] rounded-sm hover:bg-indigo-500/40 transition-colors"></div>
<div className="w-full bg-indigo-500 h-[75%] rounded-sm shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
<div className="w-full bg-indigo-500/20 h-[45%] rounded-sm hover:bg-indigo-500/40 transition-colors"></div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-20 pt-10 border-t border-white/5 text-center">
<p className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-6">Trusted by engineering teams at</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">

<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-white rounded-full"></div>
<span className="font-bold text-lg text-white tracking-tighter">ACME</span>
</div>
<div className="flex items-center gap-2">
<div className="w-5 h-5 border-2 border-white transform rotate-45"></div>
<span className="font-bold text-lg text-white tracking-tighter">KINETIC</span>
</div>
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-white clip-path-polygon"></div>
<span className="font-bold text-lg text-white tracking-tighter">ECHO</span>
</div>
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-sm border border-white"></div>
<span className="font-bold text-lg text-white tracking-tighter">PULSE</span>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
