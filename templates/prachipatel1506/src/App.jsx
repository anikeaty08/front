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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-6 h-6 rounded-md bg-gradient-to-tr from-rose-500 to-purple-600 flex items-center justify-center text-white shadow-[0_0_15px_rgba(244,63,94,0.4)]">
<iconify-icon icon="solar:heart-angle-linear" strokeWidth="2" width="14"></iconify-icon>
</div>
<span className="text-sm font-medium tracking-tight text-white/90 group-hover:text-white transition-colors">VALENTINE<span className="text-neutral-500">.OS</span></span>
</div>
<div className="hidden md:flex items-center gap-6 text-xs font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#">Overview</a>
<a className="hover:text-white transition-colors" href="#">Memories</a>
<a className="hover:text-white transition-colors" href="#">Planning</a>
</div>
<div className="flex items-center gap-3">
<button className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-medium text-white transition-all hover:border-white/20">
<span>Connect</span>
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
</button>
</div>
</div>
</nav>

<main className="flex-grow pt-32 pb-20 px-6">
<div className="max-w-5xl mx-auto space-y-16">

<section className="text-center space-y-6 relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-rose-500/20 blur-[100px] rounded-full pointer-events-none opacity-50"></div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-rose-300/90 mb-4 animate-fade-in">
<iconify-icon icon="solar:stars-minimalistic-linear" width="14"></iconify-icon>
<span>Feb 14 Update Available</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white relative z-10">
                    The language of <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-400 to-indigo-400">digital affection.</span>
</h1>
<p className="text-lg text-neutral-400 max-w-xl mx-auto leading-relaxed font-light">
                    Sync your hearts. Organize date nights, track shared memories, and deploy appreciation with our high-performance romance protocol.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
<button className="group h-10 px-6 rounded-full bg-white text-neutral-950 text-sm font-medium hover:bg-neutral-200 transition-colors flex items-center gap-2">
<span>Initiate Date</span>
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<button className="h-10 px-6 rounded-full bg-transparent border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-colors">
                        View Documentation
                    </button>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4">

<div className="glass-card md:col-span-3 lg:col-span-4 rounded-xl p-6 flex flex-col justify-between group hover:border-rose-500/30 transition-colors">
<div className="flex justify-between items-start">
<div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center text-rose-400">
<iconify-icon icon="solar:heart-pulse-linear" width="20"></iconify-icon>
</div>
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
</span>
</div>
<div className="space-y-1 mt-8">
<h3 className="text-sm font-medium text-white">Relationship Health</h3>
<p className="text-xs text-neutral-500">98% optimized connectivity</p>
</div>

<div className="mt-4 h-12 flex items-end gap-1">
<div className="w-full bg-rose-500/20 rounded-t-sm h-[40%]"></div>
<div className="w-full bg-rose-500/20 rounded-t-sm h-[60%]"></div>
<div className="w-full bg-rose-500/20 rounded-t-sm h-[30%]"></div>
<div className="w-full bg-rose-500/20 rounded-t-sm h-[70%]"></div>
<div className="w-full bg-rose-500/20 rounded-t-sm h-[50%]"></div>
<div className="w-full bg-rose-500/40 rounded-t-sm h-[80%]"></div>
<div className="w-full bg-gradient-to-t from-rose-500 to-rose-400 rounded-t-sm h-[95%] shadow-[0_0_15px_rgba(244,63,94,0.3)]"></div>
</div>
</div>

<div className="glass-card md:col-span-3 lg:col-span-4 rounded-xl p-6 relative overflow-hidden group">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-medium text-white">Next Event</h3>
<iconify-icon className="text-neutral-500" icon="solar:calendar-linear" width="18"></iconify-icon>
</div>
<div className="flex items-center gap-4">
<div className="flex flex-col items-center justify-center w-14 h-14 rounded-lg bg-neutral-900 border border-white/10">
<span className="text-[10px] uppercase font-medium text-rose-500">Feb</span>
<span className="text-xl font-medium text-white">14</span>
</div>
<div className="space-y-1">
<p className="text-sm text-white">Dinner Reservation</p>
<p className="text-xs text-neutral-500 flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear" width="12"></iconify-icon>
                                20:00 @ Chez Linear
                            </p>
</div>
</div>
<div className="mt-6 flex items-center gap-2">
<div className="h-1 flex-grow bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full w-3/4 bg-white rounded-full"></div>
</div>
<span className="text-[10px] text-neutral-400 font-mono">T-MINUS 4H</span>
</div>
</div>

<div className="glass-card md:col-span-6 lg:col-span-4 rounded-xl p-6 flex flex-col justify-center space-y-5">

<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<iconify-icon className="text-neutral-400" icon="solar:gift-linear" width="18"></iconify-icon>
<span className="text-sm text-neutral-200">Gift Wrapped</span>
</div>

<div className="w-9 h-5 rounded-full bg-rose-500/20 border border-rose-500/50 relative cursor-pointer">
<div className="absolute right-0.5 top-0.5 h-3.5 w-3.5 rounded-full bg-rose-500 shadow-sm"></div>
</div>
</div>

<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<iconify-icon className="text-neutral-400" icon="solar:music-note-linear" width="18"></iconify-icon>
<span className="text-sm text-neutral-200">Mood Music</span>
</div>
<div className="w-9 h-5 rounded-full bg-neutral-800 border border-white/5 relative cursor-pointer hover:border-white/20 transition-colors">
<div className="absolute left-0.5 top-0.5 h-3.5 w-3.5 rounded-full bg-neutral-500"></div>
</div>
</div>

<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<iconify-icon className="text-neutral-400" icon="solar:shield-heart-linear" width="18"></iconify-icon>
<span className="text-sm text-neutral-200">Do Not Disturb</span>
</div>

<div className="w-9 h-5 rounded-full bg-rose-500/20 border border-rose-500/50 relative cursor-pointer">
<div className="absolute right-0.5 top-0.5 h-3.5 w-3.5 rounded-full bg-rose-500 shadow-sm"></div>
</div>
</div>
</div>

<div className="glass-card md:col-span-6 lg:col-span-8 rounded-xl p-8 relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-20">
<iconify-icon className="text-white transform rotate-12" icon="solar:letter-heart-linear" width="120"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-1">Message Protocol</h3>
<p className="text-sm text-neutral-500 mb-6">Encrypted end-to-end affection.</p>
<form className="space-y-4 max-w-md relative z-10">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-[11px] font-medium uppercase tracking-wider text-neutral-500">Recipient</label>
<div className="relative">
<input className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/20 transition-all placeholder:text-neutral-600" type="text" value="My Valentine"/>
<iconify-icon className="absolute right-3 top-2.5 text-neutral-500" icon="solar:user-heart-linear" width="16"></iconify-icon>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[11px] font-medium uppercase tracking-wider text-neutral-500">Mood</label>
<div className="relative">
<div className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-3 py-2 text-sm text-white flex items-center justify-between cursor-pointer hover:bg-neutral-800/50 transition-colors">
<span>Romantic</span>
<iconify-icon className="text-neutral-600" icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[11px] font-medium uppercase tracking-wider text-neutral-500">Message Payload</label>
<textarea className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/20 transition-all resize-none placeholder:text-neutral-600" placeholder="Type your message here..." rows="3"></textarea>
</div>
<div className="pt-2 flex items-center justify-between">
<label className="flex items-center gap-2 cursor-pointer group">
<div className="w-4 h-4 rounded border border-white/20 bg-neutral-900 flex items-center justify-center group-hover:border-rose-500/50 transition-colors">
<iconify-icon className="text-rose-500 opacity-0 group-hover:opacity-100" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="text-xs text-neutral-400 group-hover:text-neutral-300">Notify on open</span>
</label>
<button className="px-4 py-2 rounded-lg bg-white text-neutral-950 text-sm font-medium hover:bg-rose-50 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(244,63,94,0.3)]" type="button">
                                Send Message
                            </button>
</div>
</form>
</div>

<div className="glass-card md:col-span-6 lg:col-span-4 rounded-xl p-6 flex flex-col justify-between">
<div className="flex items-start gap-4">
<div className="w-16 h-16 rounded-lg bg-neutral-800 relative overflow-hidden group">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&amp;fit=crop&amp;q=80&amp;w=200')] bg-cover bg-center opacity-60 group-hover:scale-110 transition-transform duration-700"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-4 h-4 rounded-full bg-neutral-900/80 border border-white/10"></div>
</div>
</div>
<div>
<div className="flex items-center gap-1.5 mb-1">
<span className="flex gap-0.5 items-end h-3">
<span className="w-0.5 bg-rose-500 h-2 animate-[pulse_1s_ease-in-out_infinite]"></span>
<span className="w-0.5 bg-rose-500 h-3 animate-[pulse_1.5s_ease-in-out_infinite]"></span>
<span className="w-0.5 bg-rose-500 h-1.5 animate-[pulse_0.8s_ease-in-out_infinite]"></span>
</span>
<span className="text-[10px] font-medium tracking-wide text-rose-400 uppercase">Now Playing</span>
</div>
<h4 className="text-sm font-medium text-white leading-tight">Smooth Operator</h4>
<p className="text-xs text-neutral-500 mt-0.5">Sade • Diamond Life</p>
</div>
</div>
<div className="space-y-3 mt-4">

<div className="relative h-1 bg-neutral-800 rounded-full w-full group cursor-pointer">
<div className="absolute left-0 top-0 h-full w-[45%] bg-white rounded-full"></div>
<div className="absolute left-[45%] top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<div className="flex items-center justify-between text-neutral-400">
<button className="hover:text-white transition-colors"><iconify-icon icon="solar:skip-previous-linear" width="20"></iconify-icon></button>
<button className="w-8 h-8 rounded-full bg-white text-neutral-950 flex items-center justify-center hover:scale-105 transition-transform">
<iconify-icon icon="solar:pause-linear" width="16"></iconify-icon>
</button>
<button className="hover:text-white transition-colors"><iconify-icon icon="solar:skip-next-linear" width="20"></iconify-icon></button>
</div>
</div>
</div>
</section>

<div className="border-t border-white/5 pt-10 pb-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
<div>
<h4 className="text-base font-medium text-white">Ready to deploy?</h4>
<p className="text-sm text-neutral-500 mt-1">Upgrade to the Pro Plan for unlimited hugs and kisses.</p>
</div>
<div className="flex items-center gap-4">
<span className="text-xs text-neutral-500 font-mono">v14.02.24</span>
<button className="px-4 py-2 rounded-lg bg-neutral-900 border border-white/10 text-xs font-medium text-white hover:bg-neutral-800 transition-colors">
                        System Status
                    </button>
</div>
</div>
</div>
</main>

    </>
  );
}
