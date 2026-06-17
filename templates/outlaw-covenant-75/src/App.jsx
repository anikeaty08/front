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
                class: "", 
                "stroke-width": 1.5
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
      

<div className="fixed inset-0 z-0 hidden lg:block overflow-hidden">
<div className="absolute inset-0 bg-black"></div>
<img alt="Background" className="w-full h-full object-cover opacity-30 blur-3xl scale-110 grayscale brightness-50 sepia-0" src="https://i.imgur.com/uG9X1jI.jpeg"/>
</div>

<div className="relative z-10 w-full lg:max-w-[400px] bg-zinc-950 h-screen lg:h-[860px] lg:my-auto lg:rounded-[3rem] lg:border-[8px] lg:border-zinc-900 shadow-2xl overflow-hidden flex flex-col ring-1 ring-white/5">

<div className="absolute inset-0 z-0 pointer-events-none">
<img alt="App Background" className="w-full h-full object-cover opacity-40 mix-blend-overlay" src="https://i.imgur.com/uG9X1jI.jpeg"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/80 via-zinc-950/90 to-black"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent"></div>
</div>

<div className="px-6 pt-4 pb-2 flex justify-between items-center text-[10px] font-medium text-zinc-500 relative z-50">
<span>22:04</span>
<div className="flex items-center gap-1.5">
<i className="w-3 h-3 text-zinc-400" data-lucide="signal"></i>
<i className="w-3 h-3 text-zinc-400" data-lucide="wifi"></i>
<div className="w-5 h-2.5 border border-zinc-700 rounded-[2px] relative overflow-hidden">
<div className="absolute inset-0 bg-zinc-400 w-full"></div>
</div>
</div>
</div>

<header className="px-6 py-5 flex justify-between items-start relative z-40">
<div className="flex items-center gap-3">

<div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 border border-amber-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.2)]">
<i className="w-5 h-5 text-black fill-black/20 stroke-[2.5]" data-lucide="shield"></i>
</div>
<div className="flex flex-col">
<h1 className="text-2xl font-display font-bold tracking-tight text-amber-500 leading-none uppercase gold-glow drop-shadow-sm">
                        Outlaw
                    </h1>
<span className="text-[10px] text-zinc-400 font-bold tracking-[0.35em] uppercase leading-none mt-1 ml-0.5">Covenant</span>
</div>
</div>
<div className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center relative shadow-lg">
<img className="w-full h-full rounded-full object-cover opacity-80 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-amber-500 border-2 border-zinc-950 rounded-full"></div>
</div>
</header>

<main className="flex-1 overflow-y-auto no-scrollbar pb-32 space-y-7 relative z-30 px-5">

<section>
<div className="flex items-center justify-between mb-2.5">
<h3 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Membership ID</h3>
<div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-950/30 border border-amber-900/50">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></div>
<span className="text-[9px] font-medium text-amber-500 uppercase tracking-wider">Active</span>
</div>
</div>
<div className="glass-panel rounded-xl p-0.5 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent opacity-50"></div>
<div className="bg-zinc-900/40 rounded-[10px] p-4 relative">

<div className="flex gap-4">
<div className="w-20 h-24 bg-zinc-800 rounded overflow-hidden border border-zinc-700/50 shrink-0 shadow-inner">
<img className="w-full h-full object-cover grayscale mix-blend-luminosity contrast-125 group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex-1 space-y-3 pt-1">
<div>
<h2 className="text-2xl font-display font-bold text-white uppercase tracking-tight leading-none">Jax Teller</h2>
<div className="flex items-center gap-1 mt-1 text-amber-500/90">
<span className="text-[9px] font-bold border border-amber-500/30 px-1 rounded bg-amber-500/10">VP</span>
<span className="text-[10px] font-medium tracking-wider text-zinc-400">@jax_reaper</span>
</div>
</div>
<div className="grid grid-cols-1 gap-1.5">
<div className="flex items-center gap-2 text-xs text-zinc-300">
<i className="w-3 h-3 text-zinc-600" data-lucide="phone"></i>
<span className="font-mono text-zinc-400">+1 (555) 019-2834</span>
</div>
<div className="flex items-center gap-2 text-xs text-zinc-300">
<i className="w-3 h-3 text-zinc-600" data-lucide="bike"></i>
<span className="font-medium">H-D Dyna Super Glide</span>
</div>
</div>
</div>
</div>

<div className="mt-4 pt-3 border-t border-dashed border-zinc-800 flex justify-between items-center">
<div className="flex flex-col">
<span className="text-[9px] text-zinc-600 uppercase font-bold tracking-wider">Chapter</span>
<span className="text-[10px] text-zinc-300 font-display tracking-wide uppercase">Redwood Original</span>
</div>
<div className="flex flex-col text-right">
<span className="text-[9px] text-zinc-600 uppercase font-bold tracking-wider">Member Since</span>
<span className="text-[10px] text-zinc-300 font-mono">2008</span>
</div>
</div>
</div>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-2.5">
<h3 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Upcoming Run</h3>
<span className="text-[10px] text-amber-600 font-bold">Ticket #8492</span>
</div>

<div className="bg-gradient-to-b from-zinc-900 to-black rounded-xl overflow-hidden border border-zinc-800 relative shadow-2xl">

<div className="p-5 pb-8 relative z-10">
<div className="absolute top-0 right-0 p-4 opacity-10">
<i className="w-24 h-24 text-white" data-lucide="skull"></i>
</div>
<div className="flex justify-between items-start relative z-10">
<div>
<span className="inline-block px-1.5 py-0.5 rounded bg-red-900/30 border border-red-900/50 text-[9px] font-bold text-red-500 uppercase mb-2">Mandatory</span>
<h2 className="text-2xl font-display font-bold text-white uppercase italic tracking-tighter">Blackwater Run</h2>
<p className="text-[11px] text-zinc-400 mt-1 font-medium flex items-center gap-1.5">
<i className="w-3 h-3 text-amber-600" data-lucide="calendar"></i>
                                    Saturday, Oct 28 • 08:00 KSU
                                </p>
</div>
<div className="text-right">
<span className="block text-[9px] text-zinc-600 uppercase font-bold tracking-wider">Dues</span>
<span className="text-lg font-bold text-amber-500 font-display tracking-wide">$25.00</span>
</div>
</div>
</div>

<div className="relative h-4 bg-black flex items-center justify-center">
<div className="absolute left-0 -ml-2 w-4 h-4 rounded-full bg-zinc-950 border-r border-zinc-800"></div>
<div className="w-full border-t border-dashed border-zinc-800 mx-2 opacity-50"></div>
<div className="absolute right-0 -mr-2 w-4 h-4 rounded-full bg-zinc-950 border-l border-zinc-800"></div>
</div>

<div className="bg-zinc-900/50 p-4 flex items-center justify-between backdrop-blur-sm">
<div className="space-y-1">
<p className="text-[9px] text-zinc-500 uppercase tracking-wider font-bold mb-1">Gate Pass</p>

<div className="w-12 h-12 bg-white p-0.5 rounded-sm">
<div className="w-full h-full border border-black grid grid-cols-4 gap-px bg-black">
<div className="col-span-2 row-span-2 bg-white"></div>
<div className="bg-white"></div><div className="bg-black"></div>
<div className="bg-black"></div><div className="bg-white"></div>
<div className="col-span-2 row-span-2 bg-white col-start-3 row-start-3"></div>
<div className="col-span-2 row-span-2 bg-white col-start-1 row-start-3"></div>
</div>
</div>
</div>

<div className="flex items-center gap-2">
<div className="text-right">
<p className="text-[9px] font-bold text-zinc-300 uppercase">Payment</p>
<p className="text-[9px] font-bold text-emerald-500 uppercase tracking-tight">Confirmed</p>
</div>
<div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
<i className="w-4 h-4 text-emerald-500 stroke-[3]" data-lucide="check"></i>
</div>
</div>
</div>
</div>
<button className="w-full mt-3 flex items-center justify-center gap-1 text-[10px] text-zinc-500 hover:text-amber-500 transition-colors uppercase tracking-widest font-bold group">
                    View Receipt 
                    <i className="w-3 h-3 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right"></i>
</button>
</section>

<section>
<div className="flex items-center justify-between mb-2.5">
<h3 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Encrypted Comms</h3>
<i className="w-3 h-3 text-zinc-600" data-lucide="lock"></i>
</div>
<div className="glass-panel rounded-xl overflow-hidden border border-zinc-800 flex flex-col h-64 bg-black/40">

<div className="flex-1 p-4 space-y-4 overflow-y-auto no-scrollbar">

<div className="flex gap-3">
<div className="w-7 h-7 rounded-full bg-zinc-800 shrink-0 border border-zinc-700 p-0.5">
<img className="rounded-full grayscale w-full h-full object-cover" src="https://i.pravatar.cc/150?u=5"/>
</div>
<div className="max-w-[85%]">
<div className="flex items-baseline gap-2 mb-1">
<span className="text-[10px] font-bold text-amber-600 uppercase tracking-wide">Marcus</span>
<span className="text-[9px] text-zinc-600">10:02 AM</span>
</div>
<div className="bg-zinc-800/80 rounded-tr-lg rounded-bl-lg rounded-br-lg p-2.5 text-xs text-zinc-300 leading-relaxed border border-zinc-700/50">
                                    Meeting point shifted to North Gas Station. 12 o'clock sharp.
                                </div>
</div>
</div>

<div className="flex gap-3">
<div className="w-7 h-7 rounded-full bg-zinc-800 shrink-0 border border-zinc-700 p-0.5">
<img className="rounded-full grayscale w-full h-full object-cover" src="https://i.pravatar.cc/150?u=8"/>
</div>
<div className="max-w-[85%]">
<div className="flex items-baseline gap-2 mb-1">
<span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wide">Viper</span>
<span className="text-[9px] text-zinc-600">10:05 AM</span>
</div>
<div className="bg-zinc-800/80 rounded-tr-lg rounded-bl-lg rounded-br-lg overflow-hidden border border-zinc-700/50 p-1">
<img className="w-full h-24 object-cover rounded opacity-80 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1558981806-ec527fa84f3d?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
</div>
</div>
</div>

<div className="p-2 bg-zinc-950/80 border-t border-zinc-800 flex items-center gap-2 backdrop-blur-md">
<button className="w-8 h-8 flex items-center justify-center rounded-full text-zinc-500 hover:text-white hover:bg-zinc-800 transition-all">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
<input className="flex-1 bg-black border border-zinc-800 rounded-full h-9 px-4 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600/20 transition-all" placeholder="Secure message..." type="text"/>
<button className="w-9 h-9 flex items-center justify-center bg-amber-600 rounded-full text-black hover:bg-amber-500 transition-all shadow-[0_0_10px_rgba(217,119,6,0.4)]">
<i className="w-3.5 h-3.5 fill-current ml-0.5" data-lucide="send"></i>
</button>
</div>
</div>
</section>

<section>
<h3 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-3">Previous Runs</h3>
<div className="space-y-px bg-zinc-800/50 border border-zinc-800 rounded-xl overflow-hidden">

<div className="bg-zinc-900/40 p-3.5 flex items-center justify-between hover:bg-zinc-800 transition-colors cursor-pointer group">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded bg-zinc-950 flex flex-col items-center justify-center border border-zinc-800 text-zinc-500 group-hover:border-amber-900/50 group-hover:text-amber-600 transition-colors">
<span className="text-[8px] uppercase tracking-wide font-bold">Sep</span>
<span className="text-sm font-display font-bold text-white">12</span>
</div>
<div>
<h4 className="text-xs font-bold text-zinc-200 group-hover:text-white transition-colors">Canyon Loop</h4>
<span className="text-[10px] text-zinc-500 font-medium">124 Miles • 12 Riders</span>
</div>
</div>
<i className="w-4 h-4 text-zinc-700 group-hover:text-amber-600 transition-colors" data-lucide="chevron-right"></i>
</div>

<div className="bg-zinc-900/40 p-3.5 flex items-center justify-between hover:bg-zinc-800 transition-colors cursor-pointer group">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded bg-zinc-950 flex flex-col items-center justify-center border border-zinc-800 text-zinc-500 group-hover:border-amber-900/50 group-hover:text-amber-600 transition-colors">
<span className="text-[8px] uppercase tracking-wide font-bold">Aug</span>
<span className="text-sm font-display font-bold text-white">28</span>
</div>
<div>
<h4 className="text-xs font-bold text-zinc-200 group-hover:text-white transition-colors">Coastline Charity</h4>
<span className="text-[10px] text-zinc-500 font-medium">86 Miles • 45 Riders</span>
</div>
</div>
<i className="w-4 h-4 text-zinc-700 group-hover:text-amber-600 transition-colors" data-lucide="chevron-right"></i>
</div>
</div>
</section>
</main>

<nav className="absolute bottom-0 w-full z-50 px-6 pb-8 pt-4">

<div className="absolute inset-0 bg-black/80 backdrop-blur-xl border-t border-white/5 mask-image-b-0">
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent"></div>
</div>
<div className="relative flex justify-between items-center z-10 px-1">
<button className="flex flex-col items-center gap-1.5 w-12 group text-amber-500">
<i className="w-5 h-5 transition-transform group-active:scale-95 stroke-[2]" data-lucide="layout-grid"></i>
<span className="text-[9px] font-bold uppercase tracking-wide">Hub</span>
</button>
<button className="flex flex-col items-center gap-1.5 w-12 group text-zinc-600 hover:text-white transition-colors">
<i className="w-5 h-5 transition-transform group-active:scale-95 stroke-[2]" data-lucide="map"></i>
<span className="text-[9px] font-medium uppercase tracking-wide">Rides</span>
</button>

<button className="relative -top-6 group">
<div className="absolute inset-0 bg-amber-600 blur-lg opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
<div className="w-14 h-14 bg-zinc-900 rounded-full flex items-center justify-center border-[3px] border-zinc-800 shadow-xl group-active:scale-95 transition-all relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-800 to-black"></div>
<i className="w-6 h-6 text-amber-500 stroke-[2] relative z-10" data-lucide="scan-line"></i>
</div>
</button>
<button className="flex flex-col items-center gap-1.5 w-12 group text-zinc-600 hover:text-white transition-colors">
<div className="relative">
<div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-amber-500 rounded-full border border-black"></div>
<i className="w-5 h-5 transition-transform group-active:scale-95 stroke-[2]" data-lucide="message-square"></i>
</div>
<span className="text-[9px] font-medium uppercase tracking-wide">Comms</span>
</button>
<button className="flex flex-col items-center gap-1.5 w-12 group text-zinc-600 hover:text-white transition-colors">
<div className="w-5 h-5 rounded-full bg-zinc-800 border border-zinc-600 overflow-hidden ring-1 ring-transparent group-hover:ring-amber-500/50 transition-all">
<img className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<span className="text-[9px] font-medium uppercase tracking-wide">Jax</span>
</button>
</div>

<div className="relative z-10 w-32 h-1 bg-zinc-800 rounded-full mx-auto mt-6"></div>
</nav>
</div>


    </>
  );
}
