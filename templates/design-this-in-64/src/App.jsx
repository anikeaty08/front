import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
black: '#020402',
card: '#121212',
border: '#27272a',
green: '#4ade80', // neon lime
orange: '#fb923c',
dim: '#a1a1aa'
}
},
fontSize: {
xxs: '0.65rem',
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full max-w-md bg-brand-black min-h-screen relative flex flex-col">

<div className="absolute inset-0 bg-grid-pattern pointer-events-none z-0 fixed h-full w-full max-w-md"></div>

<header className="flex justify-between items-center px-6 pt-10 pb-4 sticky top-0 z-40 bg-brand-black/80 backdrop-blur-md">
<h1 className="text-3xl font-semibold tracking-tighter text-white">History</h1>
<div className="flex items-center gap-4">
<button className="text-zinc-400 hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="calendar"></i>
</button>
<button className="text-zinc-400 hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="sliders-horizontal"></i>
</button>
</div>
</header>

<main className="flex-1 px-5 relative z-10 pb-32 overflow-y-auto no-scrollbar">

<div className="absolute left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-brand-green/50 via-zinc-800 to-transparent z-0"></div>

<div className="space-y-8 relative z-10 pt-4">

<div className="space-y-6">

<div className="flex items-center gap-4">
<div className="w-6 flex justify-center">
<div className="w-2.5 h-2.5 rounded-full bg-brand-green glow-green"></div>
</div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
<div className="w-1.5 h-1.5 rounded-full bg-brand-green"></div>
<span className="text-xs font-semibold tracking-wider uppercase text-zinc-300">October 2023</span>
</div>
</div>

<div className="pl-2">
<div className="group relative bg-brand-card border border-white/5 rounded-3xl p-5 hover:border-brand-green/30 transition-all duration-300">

<div className="absolute -left-[29px] top-8 w-3 h-3 rounded-full bg-brand-black border-2 border-brand-green z-20 shadow-[0_0_10px_rgba(74,222,128,0.4)]"></div>

<div className="flex items-start gap-4 mb-5">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-brand-green shadow-[0_0_15px_rgba(74,222,128,0.1)]">
<i className="w-6 h-6" data-lucide="dumbbell"></i>
</div>
<div>
<h3 className="text-lg font-medium text-white tracking-tight">Upper Body Power</h3>
<div className="flex items-center gap-1.5 mt-1 text-sm text-zinc-500">
<i className="w-3.5 h-3.5" data-lucide="clock"></i>
<span>Oct 24 • 5:30 PM</span>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-3">
<div className="bg-black/40 rounded-xl p-3 border border-white/5">
<p className="text-xxs font-bold text-zinc-500 uppercase tracking-wider mb-0.5">Duration</p>
<p className="text-base font-medium text-zinc-200">1h 15m</p>
</div>
<div className="bg-black/40 rounded-xl p-3 border border-white/5 relative overflow-hidden">
<div className="absolute top-0 right-0 w-8 h-8 bg-brand-green/10 rounded-full blur-xl -mr-2 -mt-2"></div>
<p className="text-xxs font-bold text-brand-green/70 uppercase tracking-wider mb-0.5">Volume</p>
<p className="text-base font-semibold text-brand-green tracking-tight">14,500 <span className="text-xs font-normal text-brand-green/60">kg</span></p>
</div>
</div>
</div>
</div>

<div className="pl-2">
<div className="group relative bg-brand-card border border-white/5 rounded-3xl p-5 hover:border-brand-green/30 transition-all duration-300">

<div className="absolute -left-[27px] top-8 w-2 h-2 rounded-full bg-zinc-800 z-20"></div>
<div className="flex items-start gap-4 mb-5">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-brand-green shadow-[0_0_15px_rgba(74,222,128,0.05)]">
<i className="w-6 h-6" data-lucide="footprints"></i>
</div>
<div>
<h3 className="text-lg font-medium text-white tracking-tight">Leg Day Destruction</h3>
<div className="flex items-center gap-1.5 mt-1 text-sm text-zinc-500">
<i className="w-3.5 h-3.5" data-lucide="clock"></i>
<span>Oct 22 • 6:00 AM</span>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="bg-black/40 rounded-xl p-3 border border-white/5">
<p className="text-xxs font-bold text-zinc-500 uppercase tracking-wider mb-0.5">Duration</p>
<p className="text-base font-medium text-zinc-200">1h 05m</p>
</div>
<div className="bg-black/40 rounded-xl p-3 border border-white/5 relative overflow-hidden">
<div className="absolute top-0 right-0 w-8 h-8 bg-brand-green/10 rounded-full blur-xl -mr-2 -mt-2"></div>
<p className="text-xxs font-bold text-brand-green/70 uppercase tracking-wider mb-0.5">Volume</p>
<p className="text-base font-semibold text-brand-green tracking-tight">18,200 <span className="text-xs font-normal text-brand-green/60">kg</span></p>
</div>
</div>
</div>
</div>

<div className="pl-2">
<div className="group relative bg-brand-card border border-white/5 rounded-3xl p-5 hover:border-brand-green/30 transition-all duration-300">

<div className="absolute -left-[27px] top-8 w-2 h-2 rounded-full bg-zinc-800 z-20"></div>
<div className="flex items-start gap-4 mb-5">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-brand-green shadow-[0_0_15px_rgba(74,222,128,0.05)]">
<i className="w-6 h-6" data-lucide="activity"></i>
</div>
<div>
<h3 className="text-lg font-medium text-white tracking-tight">Active Recovery</h3>
<div className="flex items-center gap-1.5 mt-1 text-sm text-zinc-500">
<i className="w-3.5 h-3.5" data-lucide="clock"></i>
<span>Oct 20 • 9:00 AM</span>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="bg-black/40 rounded-xl p-3 border border-white/5">
<p className="text-xxs font-bold text-zinc-500 uppercase tracking-wider mb-0.5">Duration</p>
<p className="text-base font-medium text-zinc-200">45m</p>
</div>
<div className="bg-black/40 rounded-xl p-3 border border-brand-orange/10 relative overflow-hidden">
<div className="absolute top-0 right-0 w-8 h-8 bg-brand-orange/10 rounded-full blur-xl -mr-2 -mt-2"></div>
<p className="text-xxs font-bold text-brand-orange/70 uppercase tracking-wider mb-0.5">Burned</p>
<p className="text-base font-semibold text-brand-orange tracking-tight">320 <span className="text-xs font-normal text-brand-orange/60">kcal</span></p>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="flex items-center gap-4">
<div className="w-6 flex justify-center">
<div className="w-2 h-2 rounded-full bg-zinc-700"></div>
</div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-500"></div>
<span className="text-xs font-semibold tracking-wider uppercase text-zinc-400">September 2023</span>
</div>
</div>

<div className="pl-2">
<div className="group relative bg-brand-card border border-white/5 rounded-3xl p-5 hover:border-brand-green/30 transition-all duration-300">

<div className="absolute -left-[27px] top-8 w-2 h-2 rounded-full bg-zinc-800 z-20"></div>
<div className="flex items-start gap-4 mb-5">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-brand-green">
<i className="w-6 h-6" data-lucide="accessibility"></i>
</div>
<div>
<h3 className="text-lg font-medium text-white tracking-tight">Pull Day Hypertrophy</h3>
<div className="flex items-center gap-1.5 mt-1 text-sm text-zinc-500">
<i className="w-3.5 h-3.5" data-lucide="clock"></i>
<span>Sept 30 • 7:15 PM</span>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="bg-black/40 rounded-xl p-3 border border-white/5">
<p className="text-xxs font-bold text-zinc-500 uppercase tracking-wider mb-0.5">Duration</p>
<p className="text-base font-medium text-zinc-200">1h 10m</p>
</div>
<div className="bg-black/40 rounded-xl p-3 border border-white/5 relative overflow-hidden">
<div className="absolute top-0 right-0 w-8 h-8 bg-brand-green/10 rounded-full blur-xl -mr-2 -mt-2"></div>
<p className="text-xxs font-bold text-brand-green/70 uppercase tracking-wider mb-0.5">Volume</p>
<p className="text-base font-semibold text-brand-green tracking-tight">11,100 <span className="text-xs font-normal text-brand-green/60">kg</span></p>
</div>
</div>
</div>
</div>

<div className="pl-2">
<div className="group relative bg-brand-card border border-white/5 rounded-3xl p-5 hover:border-brand-green/30 transition-all duration-300">

<div className="absolute -left-[27px] top-8 w-2 h-2 rounded-full bg-zinc-800 z-20"></div>
<div className="flex items-start gap-4 mb-5">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-brand-green">
<i className="w-6 h-6 transform rotate-90" data-lucide="dumbbell"></i>
</div>
<div>
<h3 className="text-lg font-medium text-white tracking-tight">Chest &amp; Triceps</h3>
<div className="flex items-center gap-1.5 mt-1 text-sm text-zinc-500">
<i className="w-3.5 h-3.5" data-lucide="clock"></i>
<span>Sept 28 • 5:45 PM</span>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="bg-black/40 rounded-xl p-3 border border-white/5">
<p className="text-xxs font-bold text-zinc-500 uppercase tracking-wider mb-0.5">Duration</p>
<p className="text-base font-medium text-zinc-200">55m</p>
</div>
<div className="bg-black/40 rounded-xl p-3 border border-white/5 relative overflow-hidden">
<div className="absolute top-0 right-0 w-8 h-8 bg-brand-green/10 rounded-full blur-xl -mr-2 -mt-2"></div>
<p className="text-xxs font-bold text-brand-green/70 uppercase tracking-wider mb-0.5">Volume</p>
<p className="text-base font-semibold text-brand-green tracking-tight">9,850 <span className="text-xs font-normal text-brand-green/60">kg</span></p>
</div>
</div>
</div>
</div>
</div>

<div className="flex justify-center gap-2 py-4">
<div className="w-1.5 h-1.5 rounded-full bg-brand-green"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div>
</div>
</div>
</main>

<nav className="glass-nav absolute bottom-0 left-0 right-0 h-[88px] pb-6 px-6 z-50 flex justify-between items-center max-w-md mx-auto">
<button className="flex flex-col items-center justify-center gap-1.5 w-16 group">
<i className="w-6 h-6 text-brand-green drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]" data-lucide="history"></i>
<span className="text-[10px] font-medium text-brand-green tracking-wide">History</span>
</button>

<button className="relative -top-6 group">
<div className="absolute inset-0 bg-brand-green rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity"></div>
<div className="relative w-16 h-16 rounded-full bg-brand-green flex items-center justify-center text-brand-black glow-fab transition-transform transform group-hover:scale-105 active:scale-95">
<i className="w-8 h-8 stroke-[2.5]" data-lucide="plus"></i>
</div>
<span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-[10px] font-medium text-zinc-400 mt-2 tracking-wide">Workout</span>
</button>
<button className="flex flex-col items-center justify-center gap-1.5 w-16 group hover:text-white text-zinc-500 transition-colors">
<i className="w-6 h-6" data-lucide="user"></i>
<span className="text-[10px] font-medium tracking-wide">Profile</span>
</button>
</nav>
</div>


    </>
  );
}
