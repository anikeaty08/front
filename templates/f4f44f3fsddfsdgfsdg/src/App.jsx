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
      

<div className="fixed inset-0 z-0 bg-grid pointer-events-none"></div>
<div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none opacity-40"></div>

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
<div className="glass-panel rounded-full pl-6 pr-2 py-2 flex items-center justify-between w-full max-w-5xl shadow-2xl shadow-black/50">

<div className="flex items-center gap-2 mr-8">
<i className="w-5 h-5 text-cyan-400 fill-cyan-400/20" data-lucide="zap"></i>
<span className="brand-font font-semibold text-lg tracking-tight text-white">evolucionaMax</span>
</div>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#">Manifesto</a>
<a className="hover:text-white transition-colors" href="#">Services</a>
<a className="hover:text-white transition-colors" href="#">Results</a>
<a className="hover:text-white transition-colors" href="#">Philosophy</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-slate-300 hover:text-white transition-colors mr-2" href="#">Login</a>
<button className="bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-sm font-semibold px-5 py-2.5 rounded-full transition-all flex items-center gap-2 group">
                    Book Intro Call
                    <i className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
</nav>

<main className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-20 px-4 pb-12 overflow-hidden">

<div className="absolute inset-0 flex justify-center items-end opacity-10 pointer-events-none select-none">
<div className="w-[120%] h-[60%] border-t border-slate-700 rounded-t-[50%] absolute bottom-[-10%]"></div>
<div className="w-[100%] h-[50%] border-t border-slate-700 rounded-t-[50%] absolute bottom-[-10%]"></div>
<div className="w-[80%] h-[40%] border-t border-slate-700 rounded-t-[50%] absolute bottom-[-10%]"></div>
</div>

<div className="text-center max-w-5xl mx-auto relative z-20 mt-10 md:mt-0">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-300 text-xs font-medium tracking-wide mb-8 uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                The Future Has Arrived
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.1] text-white text-glow">
                From Decent to a <br className="hidden md:block"/>
<span className="relative inline-block mx-2">

<span className="absolute inset-0 bg-cyan-400 -skew-y-2 transform scale-105 rounded-sm"></span>
<span className="relative text-slate-950 font-semibold px-2">Website that Works</span>
</span>
</h1>
<p className="mt-8 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
                We are business planners that use websites to generate revenue. Stop settling for pretty designs with <span className="text-slate-200 font-medium">zero conversion</span>. Turn your online presence into a competitive advantage.
            </p>
<div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-14 bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-base font-semibold px-8 rounded-full transition-all flex items-center gap-2 shadow-[0_0_40px_-10px_rgba(34,211,238,0.6)] hover:shadow-[0_0_60px_-10px_rgba(34,211,238,0.8)]">
                    Start Your Evolution
                    <i className="w-5 h-5" data-lucide="chevron-right"></i>
</button>
<button className="h-14 px-8 rounded-full border border-white/10 hover:bg-white/5 text-slate-300 hover:text-white transition-all text-base font-medium flex items-center gap-2">
<i className="w-5 h-5" data-lucide="play-circle"></i>
                    See How It Works
                </button>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-[30vh] overflow-hidden pointer-events-none">

<div className="absolute bottom-[-4vh] left-0 w-full whitespace-nowrap opacity-[0.03]">
<span className="text-[12rem] md:text-[16rem] font-bold tracking-tighter leading-none text-white select-none">
                    EVOLUCIONAMAX AGENCY
                </span>
</div>

<div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent"></div>
</div>

<div className="absolute bottom-8 left-4 md:bottom-12 md:left-12 z-30 max-w-xs w-full">
<div className="glass-panel p-5 rounded-2xl animate-fade-in-up">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">Results Focused</span>
<i className="w-4 h-4 text-cyan-400" data-lucide="trending-up"></i>
</div>
<h3 className="text-lg font-medium text-white tracking-tight leading-tight mb-1">
                    "The margin for inefficient websites is gone."
                </h3>
<p className="text-sm text-slate-400 mb-4">Join companies stepping off the sidelines.</p>
<div className="flex items-center gap-3 border-t border-white/10 pt-4">
<div className="flex -space-x-2">
<img alt="" className="w-8 h-8 rounded-full border-2 border-slate-900 grayscale opacity-80" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
<img alt="" className="w-8 h-8 rounded-full border-2 border-slate-900 grayscale opacity-80" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
<img alt="" className="w-8 h-8 rounded-full border-2 border-slate-900 grayscale opacity-80" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
</div>
<div className="flex flex-col">
<div className="flex text-cyan-400">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
<span className="text-xs text-slate-400 font-medium">Trusted Partners</span>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 right-4 md:bottom-12 md:right-12 z-30 hidden md:block">
<div className="flex items-center gap-4 text-slate-500 text-xs font-mono">
<span>SCROLL TO EXPLORE</span>
<div className="h-12 w-[1px] bg-slate-800 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1/2 bg-cyan-500 animate-slide-down"></div>
</div>
</div>
</div>
</main>

<style>
        @keyframes slide-down {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(200%); }
        }
        .animate-slide-down {
            animation: slide-down 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
    </style>

    </>
  );
}
