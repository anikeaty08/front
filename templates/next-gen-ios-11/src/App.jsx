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
      

<div className="fixed top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
<div className="fixed bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-indigo-900/20 rounded-full blur-[140px] pointer-events-none z-0"></div>

<nav className="fixed top-0 left-0 w-full z-50 px-6 py-4">
<div className="max-w-7xl mx-auto">
<div className="glass-panel rounded-full px-6 py-3 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-800 to-zinc-700 border border-zinc-600 flex items-center justify-center text-white font-serif-custom italic text-lg group-hover:scale-105 transition-transform duration-300">
                        A
                    </div>
<span className="font-serif-custom text-lg tracking-tight text-white/90 group-hover:text-white transition-colors">Aether</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors tracking-wide" href="#">Product</a>
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors tracking-wide" href="#">Solutions</a>
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors tracking-wide" href="#">Company</a>
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors tracking-wide" href="#">Pricing</a>
</div>

<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors">
<span>Log in</span>
</button>
<button className="bg-white text-neutral-900 px-5 py-2 rounded-full text-xs font-semibold hover:bg-zinc-200 transition-colors tracking-tight flex items-center gap-1.5 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                        Get Access
                        <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<main className="relative z-10 pt-40 pb-20 md:pt-48 md:pb-32 px-6">
<div className="max-w-5xl mx-auto flex flex-col items-center text-center">

<div className="mb-8 opacity-0 animate-[fadeInUp_1s_ease-out_forwards]">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm shadow-sm transition-transform hover:scale-105 cursor-pointer">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
</span>
<span className="text-[11px] font-medium text-zinc-300 tracking-wide uppercase">v2.0 Now Available</span>
<iconify-icon className="text-zinc-500" icon="lucide:chevron-right" strokeWidth="1.5" width="12"></iconify-icon>
</div>
</div>




<h1 className="font-serif-custom text-5xl md:text-7xl lg:text-[5rem] leading-[1.05] tracking-tight text-white mb-8 mx-auto max-w-4xl">

<span className="block md:inline">
<span className="word-animate italic text-zinc-400" style={{animationDelay: '0.1s'}}>Redefining</span>
<span className="word-animate" style={{animationDelay: '0.2s'}}>the</span>
<span className="word-animate" style={{animationDelay: '0.3s'}}>standard</span>
</span>
<span className="block md:inline">
<span className="word-animate" style={{animationDelay: '0.4s'}}>for</span>
<span className="word-animate" style={{animationDelay: '0.5s'}}>modern</span>
<span className="word-animate bg-gradient-to-r from-purple-300 via-purple-500 to-indigo-500 text-transparent bg-clip-text pb-2" style={{animationDelay: '0.6s'}}>interaction.</span>
</span>
</h1>

<p className="text-lg md:text-2xl text-zinc-400 font-light max-w-xl mx-auto leading-relaxed mb-10 opacity-0 animate-[fadeInUp_1s_ease-out_0.6s_forwards]">
                Craft intuitive interfaces with our precision-engineered tools designed for the next generation of creators.
            </p>

<div className="flex flex-col sm:flex-row items-center gap-4 opacity-0 animate-[fadeInUp_1s_ease-out_0.7s_forwards]">
<button className="group relative px-8 py-3.5 bg-zinc-100 hover:bg-white text-neutral-900 rounded-full text-sm font-semibold transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] flex items-center gap-2 overflow-hidden">
<span className="relative z-10">Start Building</span>
<iconify-icon className="relative z-10 transition-transform group-hover:rotate-12 text-purple-600" icon="lucide:sparkles" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="glass-button px-8 py-3.5 rounded-full text-sm font-medium text-zinc-200 flex items-center gap-2 group">
<iconify-icon className="text-zinc-400 group-hover:text-purple-400 transition-colors" icon="lucide:play-circle" strokeWidth="1.5" width="16"></iconify-icon>
<span>Watch Showreel</span>
</button>
</div>
</div>

<div className="mt-20 max-w-6xl mx-auto relative fade-in-up">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-purple-500/20 blur-[100px] rounded-full -z-10"></div>

<div className="glass-panel rounded-[2rem] p-1 shadow-2xl overflow-hidden ring-1 ring-white/10">
<div className="bg-neutral-900/80 rounded-[1.8rem] overflow-hidden relative min-h-[400px] md:min-h-[600px] border border-white/5">

<div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/[0.02]">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-black/40 border border-white/5 text-[10px] text-zinc-500 font-mono">
<iconify-icon icon="lucide:lock" width="10"></iconify-icon>
                            aether.app/dashboard
                        </div>
<div className="w-4"></div> 
</div>

<div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6 h-full">

<div className="hidden md:flex flex-col gap-6 col-span-1">
<div className="space-y-1">
<div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/5 text-zinc-200 text-xs font-medium border border-white/5">
<iconify-icon className="text-purple-400" icon="lucide:layout-dashboard" strokeWidth="1.5" width="16"></iconify-icon>
                                    Overview
                                </div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-500 hover:text-zinc-300 text-xs font-medium transition-colors">
<iconify-icon icon="lucide:bar-chart-2" strokeWidth="1.5" width="16"></iconify-icon>
                                    Analytics
                                </div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-500 hover:text-zinc-300 text-xs font-medium transition-colors">
<iconify-icon icon="lucide:users" strokeWidth="1.5" width="16"></iconify-icon>
                                    Team
                                </div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-500 hover:text-zinc-300 text-xs font-medium transition-colors">
<iconify-icon icon="lucide:settings" strokeWidth="1.5" width="16"></iconify-icon>
                                    Settings
                                </div>
</div>

<div className="mt-auto p-4 rounded-xl bg-gradient-to-b from-white/5 to-transparent border border-white/5">
<div className="flex items-center justify-between mb-3">
<span className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold">Storage</span>
<iconify-icon className="text-zinc-400" icon="lucide:hard-drive" width="14"></iconify-icon>
</div>
<div className="w-full bg-zinc-800/50 rounded-full h-1.5 mb-2 overflow-hidden">
<div className="bg-purple-500 h-1.5 rounded-full w-[75%]"></div>
</div>
<div className="flex justify-between text-[10px] text-zinc-400">
<span>75 GB used</span>
<span>100 GB</span>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-2 flex flex-col gap-6">

<div className="grid grid-cols-2 gap-4">
<div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between hover:bg-white/[0.04] transition-colors group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-purple-400 transition-colors">
<iconify-icon icon="lucide:activity" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-[10px] text-green-500 flex items-center gap-1 bg-green-500/10 px-2 py-0.5 rounded-full">
                                            +12% <iconify-icon icon="lucide:arrow-up-right" width="10"></iconify-icon>
</span>
</div>
<div>
<div className="text-2xl font-serif-custom text-zinc-100 mb-1">$24,500</div>
<div className="text-[11px] text-zinc-500">Total Revenue</div>
</div>
</div>
<div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between hover:bg-white/[0.04] transition-colors group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-purple-400 transition-colors">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="18"></iconify-icon>
</div>
</div>
<div>
<div className="text-2xl font-serif-custom text-zinc-100 mb-1">98.2%</div>
<div className="text-[11px] text-zinc-500">Uptime Score</div>
</div>
</div>
</div>

<div className="flex-1 rounded-2xl bg-white/[0.02] border border-white/5 p-6 relative overflow-hidden group">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-medium text-zinc-300">Traffic Overview</h3>

<div className="flex bg-black/40 rounded-lg p-0.5 border border-white/5">
<button className="px-3 py-1 rounded-md bg-zinc-700 text-[10px] text-white shadow-sm">Day</button>
<button className="px-3 py-1 rounded-md text-[10px] text-zinc-500 hover:text-zinc-300">Week</button>
<button className="px-3 py-1 rounded-md text-[10px] text-zinc-500 hover:text-zinc-300">Month</button>
</div>
</div>

<div className="flex items-end justify-between h-32 gap-2 mt-4 px-2">
<div className="w-full bg-purple-500/20 rounded-t-sm h-[40%] group-hover:h-[45%] transition-all duration-500 relative overflow-hidden">
<div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-purple-500/40 to-transparent"></div>
</div>
<div className="w-full bg-purple-500/20 rounded-t-sm h-[60%] group-hover:h-[65%] transition-all duration-500 delay-75 relative overflow-hidden">
<div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-purple-500/40 to-transparent"></div>
</div>
<div className="w-full bg-purple-500/20 rounded-t-sm h-[35%] group-hover:h-[40%] transition-all duration-500 delay-100 relative overflow-hidden">
<div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-purple-500/40 to-transparent"></div>
</div>
<div className="w-full bg-zinc-800 rounded-t-sm h-[80%] group-hover:h-[82%] transition-all duration-500 delay-150 relative overflow-hidden">
<div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-purple-500 to-purple-600 opacity-80"></div>
</div>
<div className="w-full bg-purple-500/20 rounded-t-sm h-[55%] group-hover:h-[60%] transition-all duration-500 delay-200 relative overflow-hidden">
<div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-purple-500/40 to-transparent"></div>
</div>
<div className="w-full bg-purple-500/20 rounded-t-sm h-[70%] group-hover:h-[75%] transition-all duration-500 delay-300 relative overflow-hidden">
<div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-purple-500/40 to-transparent"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute top-[20%] right-[5%] w-24 h-24 border border-zinc-700/30 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite] opacity-20 pointer-events-none">
<div className="w-2 h-2 bg-zinc-500 rounded-full absolute top-0"></div>
</div>
</main>

<footer className="border-t border-zinc-900 bg-neutral-900 py-12">
<div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-[12px] text-zinc-600">© 2024 Aether Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-zinc-600 hover:text-zinc-400 transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="16"></iconify-icon></a>
<a className="text-zinc-600 hover:text-zinc-400 transition-colors" href="#"><iconify-icon icon="lucide:github" width="16"></iconify-icon></a>
<a className="text-zinc-600 hover:text-zinc-400 transition-colors" href="#"><iconify-icon icon="lucide:dribbble" width="16"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
