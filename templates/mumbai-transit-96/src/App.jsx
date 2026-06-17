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
      

<nav className="w-full border-b border-white/5 bg-black/50 backdrop-blur-md sticky top-0 z-50">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white text-xs font-medium tracking-tighter">
                    M
                </div>
<span className="text-zinc-100 text-sm font-medium tracking-tight">MUMBAI<span className="text-zinc-500">BUS</span></span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-zinc-400 hover:text-white transition-colors" href="#">Routes</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">Card</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">Business</a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs text-white bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 px-3 py-1.5 rounded-full transition-all" href="#">Sign in</a>
</div>
</div>
</nav>

<main className="flex-grow flex flex-col lg:py-32 pt-20 pr-6 pb-20 pl-6 relative items-center justify-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] mesh-gradient -z-10 opacity-40"></div>
<div className="max-w-6xl w-full grid lg:grid-cols-2 gap-16 items-center">

<div className="flex flex-col gap-8 z-10 gap-x-8 gap-y-8 items-start">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-xs font-medium">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                    Now live in Mumbai
                </div>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-medium text-white tracking-tighter">
                    Tap. Board. <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Go Anywhere.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 font-light max-w-md leading-relaxed">
                    Experience seamless commuting with the new NCMC contactless card. Zero wait times. Instant boarding across all BEST buses.
                </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
<button className="group flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-zinc-200 transition-all">
                        Get the App
                        <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-zinc-300 border border-zinc-700 hover:border-zinc-500 hover:text-white transition-all bg-zinc-900/50">
                        View Routes
                    </button>
</div>
<div className="flex items-center gap-6 mt-8 pt-8 border-t border-white/5 w-full">
<div className="flex flex-col gap-1">
<span className="text-2xl text-white font-medium tracking-tight">4.2K+</span>
<span className="text-xs text-zinc-500 uppercase tracking-widest">Buses</span>
</div>
<div className="w-px h-10 bg-zinc-800"></div>
<div className="flex flex-col gap-1">
<span className="text-2xl text-white font-medium tracking-tight">3M+</span>
<span className="text-xs text-zinc-500 uppercase tracking-widest">Commuters</span>
</div>
</div>
</div>

<div className="flex min-h-[400px] h-full relative items-center justify-center">

<div className="absolute w-64 h-64 border border-blue-500/20 rounded-full tap-glow"></div>
<div className="absolute w-64 h-64 border border-blue-500/10 rounded-full tap-glow" style={{animationDelay: '1s'}}></div>

<div className="relative w-80 h-52 glass-card rounded-2xl p-6 flex flex-col justify-between transform rotate-[-6deg] hover:rotate-0 hover:scale-105 transition-all duration-500 cursor-default group">
<div className="card-shimmer rounded-2xl overflow-hidden pointer-events-none"></div>

<div className="flex justify-between items-start">
<div className="flex items-center gap-2">
<iconify-icon className="text-white text-xl" icon="solar:bus-linear"></iconify-icon>
<span className="text-xs font-medium text-white tracking-widest uppercase opacity-80">BEST Pass</span>
</div>
<iconify-icon className="text-white/50 text-2xl rotate-90" icon="solar:wifi-router-minimal-linear"></iconify-icon>
</div>

<div className="flex items-center gap-4">
<div className="w-10 h-8 rounded bg-gradient-to-br from-yellow-200 to-yellow-500 border border-yellow-600/50"></div>
<iconify-icon className="text-white/30 text-2xl" icon="solar:nfc-linear"></iconify-icon>
</div>

<div className="space-y-1">
<div className="text-lg text-white font-medium tracking-widest font-mono">
                            **** 8092
                        </div>
<div className="flex justify-between items-end">
<div className="text-[10px] text-zinc-400 font-mono uppercase">Rahul Sharma</div>
<div className="text-[10px] text-zinc-400 font-mono uppercase">EXP 12/28</div>
</div>
</div>
</div>

<div className="absolute -bottom-8 -right-4 glass-card p-4 rounded-xl flex items-center gap-4 animate-bounce" style={{animationDuration: '3s'}}>
<div className="bg-green-500/20 p-2 rounded-lg text-green-400 flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:card-transfer-linear"></iconify-icon>
</div>
<div className="flex flex-col mr-2">
<span className="text-xs text-white font-medium">Auto-Topup</span>
<span className="text-[10px] text-zinc-500">Balance: ₹450</span>
</div>

<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-zinc-800 appearance-none cursor-pointer transition-all duration-300 left-0" id="toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-zinc-700 cursor-pointer" htmlFor="toggle"></label>
</div>
</div>
</div>
</div>

<div className="max-w-6xl w-full grid md:grid-cols-3 gap-6 mt-24">

<div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 group-hover:border-blue-500/30 transition-colors">
<iconify-icon className="text-zinc-400 text-xl group-hover:text-blue-400 transition-colors" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<h3 className="text-white text-base font-medium mb-2">Cashless Travel</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                    No more hunting for change. Load money via UPI and tap to pay instantly on any route.
                </p>
</div>

<div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 group-hover:border-blue-500/30 transition-colors">
<iconify-icon className="text-zinc-400 text-xl group-hover:text-blue-400 transition-colors" icon="solar:map-point-wave-linear"></iconify-icon>
</div>
<h3 className="text-white text-base font-medium mb-2">Live Tracking</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                    Track your bus in real-time. Know exactly when to leave your home or office.
                </p>
</div>

<div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 group-hover:border-blue-500/30 transition-colors">
<iconify-icon className="text-zinc-400 text-xl group-hover:text-blue-400 transition-colors" icon="solar:leaf-linear"></iconify-icon>
</div>
<h3 className="text-white text-base font-medium mb-2">Green Commute</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                    Support Mumbai's shift to electric buses. Calculate your carbon footprint savings.
                </p>
</div>
</div>
<footer className="mt-20 border-t border-white/5 pt-8 w-full max-w-6xl flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-600">© 2024 Mumbai Bus Transport. Designed for the city.</p>
<div className="flex gap-4">
<iconify-icon className="text-zinc-600 hover:text-white cursor-pointer transition-colors" icon="solar:brand-instagram-linear"></iconify-icon>
<iconify-icon className="text-zinc-600 hover:text-white cursor-pointer transition-colors" icon="solar:brand-twitter-linear"></iconify-icon>
</div>
</footer>
</main>

    </>
  );
}
