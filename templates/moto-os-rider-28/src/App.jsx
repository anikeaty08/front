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
      

<div className="fixed inset-0 pointer-events-none z-0">

<div className="absolute inset-0 bg-[#0c0d10]"></div>

<div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay"></div>

<div className="absolute -top-[10%] -right-[10%] w-[300px] h-[300px] bg-[#ccff00] rounded-full blur-[120px] opacity-10"></div>
<div className="absolute bottom-[10%] -left-[10%] w-[250px] h-[250px] bg-blue-500 rounded-full blur-[100px] opacity-5"></div>
</div>

<div className="relative z-10 max-w-md mx-auto min-h-screen flex flex-col pb-24 bg-gradient-to-b from-transparent to-[#09090b]">

<header className="flex items-center justify-between px-6 pt-6 pb-2 sticky top-0 z-50 backdrop-blur-md bg-[#09090b]/50 border-b border-white/5">
<div className="flex items-center gap-3">
<div className="relative">
<div className="w-10 h-10 rounded-full bg-neutral-800 border border-white/10 overflow-hidden relative">
<img alt="Rider" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div className="absolute -bottom-1 -right-1 bg-[#ccff00] w-3 h-3 rounded-full border-2 border-[#09090b]"></div>
</div>
<div>
<h3 className="text-xs uppercase tracking-widest text-neutral-400 font-medium">Moto.OS</h3>
<p className="text-sm font-semibold tracking-tight text-white">Alex • TRK 502</p>
</div>
</div>
<button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 active:bg-white/10 transition-colors">
<iconify-icon className="text-neutral-300" height="20" icon="lucide:bell" width="20"></iconify-icon>
</button>
</header>
<main className="flex-1 px-4 space-y-6 pt-6">

<section className="relative group">

<div className="clip-chamfer bg-[#16171b] border border-white/5 p-6 relative overflow-hidden">

<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover opacity-20 mix-blend-luminosity grayscale group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#16171b] via-[#16171b]/90 to-transparent"></div>
</div>

<div className="relative z-10 flex justify-between items-start">
<div>
<div className="flex items-center gap-2 mb-1">
<span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] animate-pulse"></span>
<span className="text-xs font-mono text-[#ccff00] uppercase tracking-widest">Connected</span>
</div>
<h2 className="text-3xl font-display font-semibold tracking-tighter text-white leading-none mt-2">Ducati<br/>Scrambler</h2>
</div>

<div className="relative w-16 h-16 flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90">
<circle className="text-neutral-800" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" strokeWidth="3"></circle>
<circle className="shadow-[0_0_10px_#ccff00]" cx="32" cy="32" fill="transparent" r="28" stroke="#ccff00" stroke-dasharray="175" stroke-dashoffset="45" strokeWidth="3"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-xs font-bold text-white">82%</span>
<span className="text-[8px] text-neutral-400 uppercase">Fuel</span>
</div>
</div>
</div>
<div className="relative z-10 mt-8 grid grid-cols-3 gap-2">
<div className="bg-black/40 backdrop-blur-sm rounded-lg p-3 border border-white/5 text-center">
<iconify-icon className="text-neutral-400 text-sm mb-1" icon="lucide:thermometer"></iconify-icon>
<p className="text-lg font-semibold tracking-tight">68°</p>
<p className="text-[10px] text-neutral-500 uppercase">Engine</p>
</div>
<div className="bg-black/40 backdrop-blur-sm rounded-lg p-3 border border-white/5 text-center">
<iconify-icon className="text-neutral-400 text-sm mb-1" icon="lucide:gauge"></iconify-icon>
<p className="text-lg font-semibold tracking-tight">3.2k</p>
<p className="text-[10px] text-neutral-500 uppercase">Odo</p>
</div>
<div className="bg-black/40 backdrop-blur-sm rounded-lg p-3 border border-white/5 text-center">
<iconify-icon className="text-neutral-400 text-sm mb-1" icon="lucide:cloud-rain"></iconify-icon>
<p className="text-lg font-semibold tracking-tight">0%</p>
<p className="text-[10px] text-neutral-500 uppercase">Rain</p>
</div>
</div>
</div>
</section>

<section>
<div className="w-full h-16 bg-[#ccff00] rounded-xl flex items-center justify-between px-2 cursor-pointer active:scale-[0.98] transition-transform duration-200 relative overflow-hidden group shadow-[0_0_20px_rgba(204,255,0,0.15)]">

<div className="absolute top-0 bottom-0 w-12 bg-white/30 skew-x-12 -translate-x-20 group-hover:translate-x-[400px] transition-transform duration-1000"></div>
<div className="flex items-center gap-4 pl-4 z-10">
<div className="bg-black/10 p-2 rounded-lg">
<iconify-icon className="text-black" icon="lucide:navigation" width="24"></iconify-icon>
</div>
<span className="text-black font-bold text-lg tracking-tight uppercase">Start Ride</span>
</div>

<div className="h-12 w-12 bg-black rounded-lg flex items-center justify-center shadow-lg mr-1 z-10">
<iconify-icon className="text-[#ccff00]" icon="lucide:chevron-right" width="24"></iconify-icon>
</div>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-4 px-1">
<h3 className="text-sm font-medium text-neutral-300 uppercase tracking-widest">Active Comms</h3>
<span className="text-xs text-[#ccff00]">Live</span>
</div>
<div className="bg-[#16171b] border border-white/5 rounded-2xl p-1">

<div className="flex items-center gap-3 p-3 hover:bg-white/5 rounded-xl transition-colors cursor-pointer border-b border-white/5">
<div className="relative">
<div className="w-12 h-12 rounded-xl bg-neutral-800 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
</div>
<div className="absolute -top-1 -right-1 bg-red-500 w-3 h-3 rounded-full border border-[#16171b]"></div>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline mb-0.5">
<h4 className="text-sm font-semibold text-white">Sunday Scramble</h4>
<span className="text-xs text-neutral-500">2m ago</span>
</div>
<div className="flex items-center gap-1">
<iconify-icon className="text-[#ccff00] text-xs" icon="lucide:mic"></iconify-icon>
<p className="text-xs text-neutral-400 truncate">Marco: "Watch out for gravel on turn 4."</p>
</div>
</div>
</div>

<div className="flex items-center gap-3 p-3 hover:bg-white/5 rounded-xl transition-colors cursor-pointer">
<div className="relative">
<div className="w-12 h-12 rounded-xl bg-neutral-800 overflow-hidden flex items-center justify-center">
<span className="font-display font-bold text-lg text-white">DK</span>
</div>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline mb-0.5">
<h4 className="text-sm font-semibold text-white">Drift Kings</h4>
<span className="text-xs text-neutral-500">1h ago</span>
</div>
<p className="text-xs text-neutral-400 truncate">New route posted. Check the map.</p>
</div>
</div>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-4 px-1">
<h3 className="text-sm font-medium text-neutral-300 uppercase tracking-widest">Featured Routes</h3>
<iconify-icon className="text-neutral-500" icon="lucide:arrow-right"></iconify-icon>
</div>
<div className="flex overflow-x-auto gap-4 no-scrollbar pb-4 -mx-4 px-4 snap-x">

<div className="snap-center shrink-0 w-[280px] h-[360px] relative rounded-3xl overflow-hidden group">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>
<div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
<span className="text-[10px] font-bold uppercase tracking-wider text-white">Pacific Coast</span>
</div>
<div className="absolute bottom-6 left-6 right-6">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-[#ccff00] text-sm" icon="lucide:map-pin"></iconify-icon>
<span className="text-xs text-neutral-300">California, USA</span>
</div>
<h4 className="text-xl font-display font-semibold text-white leading-tight mb-3">Big Sur Coastal Highway Run</h4>
<div className="flex gap-2">
<span className="text-[10px] bg-white/10 px-2 py-1 rounded text-neutral-200">140 mi</span>
<span className="text-[10px] bg-white/10 px-2 py-1 rounded text-neutral-200">Twisty</span>
<span className="text-[10px] bg-white/10 px-2 py-1 rounded text-neutral-200">4.5h</span>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[280px] h-[360px] relative rounded-3xl overflow-hidden group">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>
<div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
<span className="text-[10px] font-bold uppercase tracking-wider text-white">Alpine Pass</span>
</div>
<div className="absolute bottom-6 left-6 right-6">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-[#ccff00] text-sm" icon="lucide:map-pin"></iconify-icon>
<span className="text-xs text-neutral-300">Tyrol, Austria</span>
</div>
<h4 className="text-xl font-display font-semibold text-white leading-tight mb-3">Grossglockner High Alpine</h4>
<div className="flex gap-2">
<span className="text-[10px] bg-white/10 px-2 py-1 rounded text-neutral-200">48 km</span>
<span className="text-[10px] bg-white/10 px-2 py-1 rounded text-neutral-200">Technical</span>
</div>
</div>
</div>
</div>
</section>

<section className="pb-6">
<div className="bg-[#121214] rounded-2xl p-1 border border-white/5 relative overflow-hidden">
<div className="absolute right-0 top-0 w-32 h-32 bg-[#ccff00] blur-[80px] opacity-10"></div>
<div className="flex gap-4 p-4">
<div className="w-20 h-24 bg-neutral-800 rounded-lg shrink-0 overflow-hidden relative border border-white/5">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex flex-col justify-center">
<span className="text-[10px] text-[#ccff00] uppercase tracking-wider font-bold mb-1">New Arrival</span>
<h4 className="text-lg font-display font-semibold text-white">Carbon Modular Helmet</h4>
<p className="text-xs text-neutral-400 mt-1">Lightweight. Aerodynamic. Quiet.</p>
<div className="mt-3 flex items-center gap-2 text-xs font-medium text-white hover:text-[#ccff00] transition-colors cursor-pointer">
<span>View in Shop</span>
<iconify-icon className="w-3 h-3" icon="lucide:arrow-right"></iconify-icon>
</div>
</div>
</div>
</div>
</section>
</main>

<div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[380px] z-50">
<nav className="bg-[#121214]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-black/50 px-2 py-2 flex justify-between items-center relative">

<a className="flex flex-col items-center justify-center w-14 h-12 rounded-xl text-neutral-400 hover:text-white hover:bg-white/5 transition-all" href="#">
<iconify-icon height="22" icon="lucide:compass" width="22"></iconify-icon>
</a>

<a className="flex flex-col items-center justify-center w-14 h-12 rounded-xl text-neutral-400 hover:text-white hover:bg-white/5 transition-all" href="#">
<iconify-icon height="22" icon="lucide:map" width="22"></iconify-icon>
</a>

<div className="relative -top-6">
<button className="w-16 h-16 bg-[#ccff00] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(204,255,0,0.4)] border-4 border-[#09090b] text-black transform hover:scale-105 active:scale-95 transition-transform">
<iconify-icon height="28" icon="lucide:zap" strokeWidth="2" width="28"></iconify-icon>
</button>
</div>

<a className="flex flex-col items-center justify-center w-14 h-12 rounded-xl text-neutral-400 hover:text-white hover:bg-white/5 transition-all" href="#">
<iconify-icon height="22" icon="lucide:users" width="22"></iconify-icon>
</a>

<a className="flex flex-col items-center justify-center w-14 h-12 rounded-xl text-neutral-400 hover:text-white hover:bg-white/5 transition-all" href="#">
<iconify-icon height="22" icon="lucide:user" width="22"></iconify-icon>
</a>
</nav>
</div>
</div>

    </>
  );
}
