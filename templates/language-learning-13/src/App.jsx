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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<main className="max-w-md w-full mx-auto relative min-h-screen pb-32 pt-6 px-5 flex flex-col gap-8">

<header className="flex justify-between items-center relative z-10">
<div className="flex flex-col">
<span className="text-xs text-white/50 tracking-[0.2em] uppercase font-medium mb-1">P R E P P R R</span>
<h1 className="text-lg font-medium tracking-tight text-white/95">Hello, Champion 👋</h1>
</div>
<div className="flex items-center gap-2">

<div className="flex items-center gap-1.5 bg-yellow-500/10 text-yellow-500 px-3 py-1.5 rounded-full text-xs font-medium border border-yellow-500/20 shadow-[0_0_15px_rgba(234,179,8,0.1)]">
<iconify-icon className="text-sm" icon="solar:bolt-linear"></iconify-icon> 240 XP
                </div>

<div className="flex items-center gap-1.5 bg-rose-500/10 text-rose-400 px-3 py-1.5 rounded-full text-xs font-medium border border-rose-500/20 shadow-[0_0_15px_rgba(244,63,94,0.1)]">
<iconify-icon className="text-sm" icon="solar:heart-linear"></iconify-icon> 5
                </div>
</div>
</header>

<section className="relative group z-10">
<div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-white/40 group-focus-within:text-lime-400 transition-colors">
<iconify-icon className="text-lg" icon="solar:magnifer-linear"></iconify-icon>
</div>
<input className="w-full bg-white/5 border border-white/10 rounded-full py-3.5 pl-12 pr-14 text-sm text-white placeholder-white/40 focus:outline-none focus:border-lime-400/40 focus:bg-white/10 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.5)] backdrop-blur-md" placeholder="What do you want to learn today?" type="text"/>
<button className="absolute inset-y-0 right-1.5 my-1.5 aspect-square bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all">
<iconify-icon className="text-base" icon="solar:tuning-square-linear"></iconify-icon>
</button>
</section>

<section className="flex gap-2.5 overflow-x-auto no-scrollbar pb-1 -mx-5 px-5 snap-x z-10 relative">
<button className="snap-start shrink-0 px-5 py-2 rounded-full bg-lime-400 text-black text-sm font-medium transition-transform active:scale-95 shadow-[0_0_15px_rgba(163,230,53,0.3)]">All</button>
<button className="snap-start shrink-0 px-5 py-2 rounded-full bg-transparent border border-white/10 text-white/70 text-sm hover:bg-white/5 transition-colors">Reading</button>
<button className="snap-start shrink-0 px-5 py-2 rounded-full bg-transparent border border-white/10 text-white/70 text-sm hover:bg-white/5 transition-colors">Listening</button>
<button className="snap-start shrink-0 px-5 py-2 rounded-full bg-transparent border border-white/10 text-white/70 text-sm hover:bg-white/5 transition-colors">Speaking</button>
<button className="snap-start shrink-0 px-5 py-2 rounded-full bg-transparent border border-white/10 text-white/70 text-sm hover:bg-white/5 transition-colors">Writing</button>
</section>

<section className="relative overflow-hidden rounded-[1.5rem] p-6 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.8)] group z-10">

<div className="absolute -inset-2 bg-gradient-to-r from-lime-500/10 via-blue-500/5 to-purple-500/10 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="relative z-10 flex flex-col gap-5">
<div className="flex justify-between items-center">
<span className="text-xs text-white/40 uppercase tracking-widest font-medium">Current Level</span>
<button className="text-xs text-lime-400 font-medium flex items-center gap-1 hover:text-lime-300 transition-colors bg-lime-400/10 px-2 py-1 rounded-md border border-lime-400/20">
                        Skip Level <iconify-icon icon="solar:double-alt-arrow-right-linear"></iconify-icon>
</button>
</div>
<div>
<h2 className="text-2xl font-medium tracking-tight text-white">Beginner</h2>
<p className="text-sm text-white/50 mt-1">1 / 20 units completed</p>
</div>
<div className="space-y-2.5 mt-1">
<div className="h-1.5 w-full bg-black/60 rounded-full overflow-hidden border border-white/5">
<div className="h-full bg-gradient-to-r from-lime-500 to-lime-300 w-[5%] rounded-full shadow-[0_0_10px_rgba(163,230,53,0.5)]"></div>
</div>
<p className="text-xs text-white/40">Complete 20 units to reach Intermediate</p>
</div>
</div>
</section>

<section className="flex flex-col gap-4 z-10 relative">
<div className="flex justify-between items-end px-1">
<h3 className="text-lg font-medium tracking-tight text-white/90">Now Learning</h3>
<button className="text-sm text-white/40 hover:text-white transition-colors">View All</button>
</div>
<div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 -mx-5 px-5 snap-x">

<div className="snap-center shrink-0 w-[82vw] sm:w-[300px] relative overflow-hidden rounded-[1.75rem] p-6 border border-white/10 bg-[#121212] flex flex-col gap-6 shadow-2xl transition-transform focus-within:scale-[1.02]">

<div className="absolute top-[-20%] left-[-10%] w-48 h-48 bg-lime-500/20 rounded-full blur-[40px] pointer-events-none"></div>
<div className="absolute bottom-[-20%] right-[-10%] w-48 h-48 bg-blue-500/20 rounded-full blur-[40px] pointer-events-none"></div>
<div className="relative z-10 flex justify-between items-start">
<div className="flex flex-col">
<span className="text-xs font-medium text-lime-400 uppercase tracking-widest mb-1.5">Unit 1</span>
<h4 className="text-xl font-medium tracking-tight text-white">Introduction</h4>
</div>
<div className="text-xs text-white/60 bg-white/5 px-2.5 py-1.5 rounded-full border border-white/10 flex items-center gap-1.5 backdrop-blur-sm">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 20m
                        </div>
</div>

<div className="relative z-10 space-y-2.5">
<div className="flex justify-between text-xs text-white/50 font-medium">
<span>1/5 lessons done</span>
<span className="text-lime-400">20%</span>
</div>
<div className="h-1.5 w-full bg-black/50 rounded-full overflow-hidden border border-white/5">
<div className="h-full bg-lime-400 w-[20%] rounded-full shadow-[0_0_12px_rgba(163,230,53,0.6)]"></div>
</div>
</div>

<div className="relative z-10 flex gap-2.5">

<div className="w-11 h-11 rounded-full bg-lime-400/10 border border-lime-400/30 flex items-center justify-center text-lime-400 relative shadow-[0_0_15px_rgba(163,230,53,0.1)]">
<iconify-icon className="text-lg" icon="solar:book-bookmark-linear"></iconify-icon>
<div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-lime-400 rounded-full flex items-center justify-center text-black border-2 border-[#121212]">
<iconify-icon className="text-xs scale-75" icon="solar:check-read-linear"></iconify-icon>
</div>
</div>

<div className="w-11 h-11 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/30 backdrop-blur-sm">
<iconify-icon className="text-lg" icon="solar:headphones-square-linear"></iconify-icon>
</div>

<div className="w-11 h-11 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/30 backdrop-blur-sm">
<iconify-icon className="text-lg" icon="solar:microphone-2-linear"></iconify-icon>
</div>

<div className="w-11 h-11 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/30 backdrop-blur-sm">
<iconify-icon className="text-lg" icon="solar:pen-linear"></iconify-icon>
</div>
</div>

<button className="relative z-10 w-full py-3.5 rounded-[1rem] bg-lime-400 text-black font-medium text-sm flex items-center justify-center gap-2 hover:bg-lime-300 transition-colors mt-1 shadow-[0_4px_15px_rgba(163,230,53,0.2)]">
                        Continue Learning <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="snap-center shrink-0 w-[82vw] sm:w-[300px] relative overflow-hidden rounded-[1.75rem] p-6 border border-white/5 bg-[#0a0a0a] flex flex-col gap-6 opacity-80">

<div className="absolute inset-0 bg-black/40 backdrop-blur-[3px] z-20 flex flex-col items-center justify-center gap-3">
<div className="w-12 h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white/60 backdrop-blur-md shadow-xl">
<iconify-icon className="text-xl" icon="solar:lock-password-linear"></iconify-icon>
</div>
<span className="text-xs text-white/60 font-medium px-4 text-center">Unlock after previous lesson</span>
</div>
<div className="relative z-10 flex justify-between items-start opacity-40">
<div className="flex flex-col">
<span className="text-xs font-medium text-white/40 uppercase tracking-widest mb-1.5">Unit 2</span>
<h4 className="text-xl font-medium tracking-tight text-white/70">Reading Mastery</h4>
</div>
</div>

<div className="relative z-10 space-y-2.5 opacity-40">
<div className="flex justify-between text-xs text-white/40 font-medium">
<span>0/5 lessons done</span>
<span>0%</span>
</div>
<div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden"></div>
</div>

<div className="relative z-10 flex gap-2.5 opacity-40">
<div className="w-11 h-11 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white/30">
<iconify-icon className="text-lg" icon="solar:book-bookmark-linear"></iconify-icon>
</div>
<div className="w-11 h-11 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white/30">
<iconify-icon className="text-lg" icon="solar:headphones-square-linear"></iconify-icon>
</div>
</div>

<div className="w-full py-3.5 mt-1 opacity-0"></div>
</div>
</div>
</section>

<section className="flex flex-col gap-4 z-10 relative">
<h3 className="text-lg font-medium tracking-tight text-white/90 px-1">My Progress</h3>
<div className="bg-white/[0.03] border border-white/10 rounded-[1.25rem] p-4 flex items-center gap-4 hover:bg-white/[0.05] transition-colors cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center shrink-0 border border-lime-400/20 shadow-[0_0_10px_rgba(163,230,53,0.1)]">
<iconify-icon className="text-xl" icon="solar:chart-square-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-1">
<h4 className="text-sm font-medium text-white truncate">Unit 1 - Introduction</h4>
<span className="text-xs text-lime-400 bg-lime-400/10 px-2 py-0.5 rounded text-opacity-90">In Progress</span>
</div>
<div className="flex items-center gap-3">
<div className="h-1 flex-1 bg-black/60 rounded-full overflow-hidden border border-white/5">
<div className="h-full bg-lime-400 w-[20%] rounded-full shadow-[0_0_8px_rgba(163,230,53,0.5)]"></div>
</div>
<span className="text-xs text-white/40 w-6 text-right">20%</span>
</div>
</div>
</div>
</section>

<section className="flex flex-col gap-4 z-10 relative">
<h3 className="text-lg font-medium tracking-tight text-white/90 px-1">Coming Next</h3>
<div className="flex flex-col gap-3">

<div className="bg-[#121212]/50 border border-white/5 rounded-[1.25rem] p-4 flex items-center gap-4 group">
<div className="w-11 h-11 rounded-full bg-white/5 border border-white/10 text-white/30 flex items-center justify-center shrink-0">
<iconify-icon className="text-lg group-hover:scale-110 group-hover:text-white/50 transition-all" icon="solar:lock-keyhole-linear"></iconify-icon>
</div>
<div className="flex-1">
<h4 className="text-sm font-medium text-white/60">Unit 2 – Reading Skill</h4>
<p className="text-xs text-white/30 mt-0.5">Complete Unit 1 to unlock</p>
</div>
</div>

<div className="bg-[#121212]/50 border border-white/5 rounded-[1.25rem] p-4 flex items-center gap-4 group">
<div className="w-11 h-11 rounded-full bg-white/5 border border-white/10 text-white/30 flex items-center justify-center shrink-0">
<iconify-icon className="text-lg group-hover:scale-110 group-hover:text-white/50 transition-all" icon="solar:lock-keyhole-linear"></iconify-icon>
</div>
<div className="flex-1">
<h4 className="text-sm font-medium text-white/60">Unit 3 – Listening Pro</h4>
<p className="text-xs text-white/30 mt-0.5">Complete Unit 2 to unlock</p>
</div>
</div>
</div>
</section>

<nav className="fixed bottom-6 left-0 right-0 z-50 px-5 pointer-events-none flex justify-center">
<div className="w-full max-w-md bg-black/80 backdrop-blur-xl border border-white/10 rounded-[1.5rem] p-2 flex justify-between items-center pointer-events-auto shadow-[0_20px_40px_rgba(0,0,0,0.9)]">

<button className="flex flex-col items-center justify-center gap-1.5 p-2 w-16 text-lime-400 group relative">
<div className="absolute -top-2 w-8 h-1 bg-lime-400 rounded-b-full shadow-[0_0_15px_rgba(163,230,53,0.8)]"></div>
<iconify-icon className="text-[1.35rem] group-active:scale-90 transition-transform" icon="solar:home-smile-linear"></iconify-icon>
<span className="text-xs scale-75 origin-top font-medium tracking-wide">Home</span>
</button>

<button className="flex flex-col items-center justify-center gap-1.5 p-2 w-16 text-white/40 hover:text-white/80 transition-colors group">
<iconify-icon className="text-[1.35rem] group-active:scale-90 transition-transform" icon="solar:map-linear"></iconify-icon>
<span className="text-xs scale-75 origin-top font-medium tracking-wide">Guided</span>
</button>

<button className="flex flex-col items-center justify-center gap-1.5 p-2 w-16 text-white/40 hover:text-white/80 transition-colors group">
<iconify-icon className="text-[1.35rem] group-active:scale-90 transition-transform" icon="solar:cards-linear"></iconify-icon>
<span className="text-xs scale-75 origin-top font-medium tracking-wide">Cards</span>
</button>

<button className="flex flex-col items-center justify-center gap-1.5 p-2 w-16 text-white/40 hover:text-white/80 transition-colors group">
<iconify-icon className="text-[1.35rem] group-active:scale-90 transition-transform" icon="solar:document-medicine-linear"></iconify-icon>
<span className="text-xs scale-75 origin-top font-medium tracking-wide">Mock</span>
</button>

<button className="flex flex-col items-center justify-center gap-1.5 p-2 w-16 text-white/40 hover:text-white/80 transition-colors group">
<iconify-icon className="text-[1.35rem] group-active:scale-90 transition-transform" icon="solar:user-rounded-linear"></iconify-icon>
<span className="text-xs scale-75 origin-top font-medium tracking-wide">Profile</span>
</button>
</div>
</nav>
</main>

    </>
  );
}
