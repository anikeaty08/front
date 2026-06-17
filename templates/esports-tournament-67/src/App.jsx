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
theme: {
extend: {
colors: {
bnb: {
base: '#0A0A0C',
elevated: '#141416',
surface: '#1C1C20',
panel: '#111113',
text: '#F0EDE6',
muted: '#6B6763',
secondary: '#A8A4A0',
red: '#E8312A',
redDark: '#B51F1A',
acid: '#C8FF00',
acidDark: '#9FCC00',
border: '#2A2A2E',
borderLight: '#3A3A3E',
game: {
sf6: '#E8312A',
tekken: '#7C3AED',
ggst: '#DC2626',
mk1: '#166534'
}
}
},
fontFamily: {
display: ['Anton', 'sans-serif'],
sans: ['Poppins', 'sans-serif'],
alt: ['Montserrat', 'sans-serif'],
},
letterSpacing: {
tightest: '-0.05em',
widest: '0.25em',
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
      

<nav className="fixed top-0 w-full z-50 bg-bnb-base/90 backdrop-blur-md border-b border-bnb-border">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="font-display text-2xl tracking-tightest uppercase text-bnb-text group transition-all duration-200" href="#">
                BNB<span className="text-bnb-red group-hover:text-bnb-acid transition-colors">.</span>
</a>

<div className="hidden md:flex items-center space-x-8">
<a className="text-xs font-semibold uppercase tracking-widest text-bnb-secondary hover:text-bnb-text transition-colors" href="#">Tournaments</a>
<a className="text-xs font-semibold uppercase tracking-widest text-bnb-secondary hover:text-bnb-text transition-colors" href="#">Rankings</a>
<a className="text-xs font-semibold uppercase tracking-widest text-bnb-secondary hover:text-bnb-text transition-colors" href="#">Community</a>
</div>

<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 text-bnb-text hover:text-bnb-acid transition-colors">
<iconify-icon icon="solar:user-circle-linear" width="20"></iconify-icon>
<span className="text-xs font-semibold">LOGIN</span>
</button>
<button className="bg-bnb-acid hover:bg-bnb-acidDark text-black font-alt font-bold text-xs uppercase px-5 py-2.5 tracking-wide transition-colors duration-200 shadow-hard transform active:translate-y-0.5 active:shadow-none">
                    Join Fight
                </button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden slash-bg">
<div className="max-w-7xl mx-auto relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-bnb-red/10 border border-bnb-red/20 mb-6">
<div className="w-1.5 h-1.5 bg-bnb-red animate-pulse"></div>
<span className="text-bnb-red text-xs font-bold uppercase tracking-widest">Season 4 Live</span>
</div>

<h1 className="font-display text-7xl md:text-9xl uppercase tracking-tightest leading-[0.8] mb-8 text-bnb-text select-none">
<div className="flex flex-col items-start gap-1 md:gap-2">

<div className="flex items-baseline">
<span className="text-bnb-red letter-animate text-[1.1em] mr-1 md:mr-2 relative z-10" data-letter="B">B</span>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-bnb-text to-bnb-secondary opacity-90">e Confident,</span>
</div>

<div className="flex items-baseline md:pl-20">
<span className="text-bnb-secondary text-2xl md:text-4xl mr-3 md:mr-5 font-sans tracking-wide normal-case opacity-60 translate-y-[-4px] md:translate-y-[-8px]">be</span>
<span className="text-bnb-acid letter-animate text-[1.1em] mr-1 md:mr-2 relative z-10" data-letter="N">N</span>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-bnb-text to-bnb-secondary opacity-90">otorious,</span>
</div>

<div className="flex items-baseline md:pl-8">
<span className="text-bnb-red letter-animate text-[1.1em] mr-1 md:mr-2 relative z-10" data-letter="B">B</span>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-bnb-text to-bnb-secondary opacity-90">e Brave</span>
</div>
</div>
</h1>
<p className="font-alt text-bnb-secondary max-w-xl text-sm md:text-base leading-relaxed mb-10 border-l-2 border-bnb-acid pl-6">
                The definitive competitive platform for fighting games. 
                Rise through the ranks from Bronze to Legend.
                Pure skill. No excuses.
            </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="group relative px-8 py-4 bg-bnb-red hover:bg-bnb-redDark text-white font-display text-xl uppercase tracking-wider transition-all shadow-hard">
                    Start Competing
                    <span className="absolute right-0 bottom-0 w-3 h-3 bg-white transform translate-x-1/2 translate-y-1/2 rotate-45"></span>
</button>
<button className="group px-8 py-4 bg-transparent border border-bnb-border hover:border-bnb-text text-bnb-text font-display text-xl uppercase tracking-wider transition-colors flex items-center gap-2">
<iconify-icon icon="solar:play-circle-linear" width="24"></iconify-icon>
                    Watch Live
                </button>
</div>
</div>

<div className="absolute bottom-0 right-0 w-1/3 h-px bg-gradient-to-l from-bnb-acid to-transparent"></div>
<div className="absolute top-32 right-12 text-bnb-surface text-9xl font-display opacity-20 select-none pointer-events-none rotate-90 hidden lg:block">
            BNB
        </div>
</header>

<div className="border-y border-bnb-border bg-bnb-panel">
<div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col">
<span className="font-display text-3xl md:text-4xl text-bnb-text">245<span className="text-bnb-acid">K</span></span>
<span className="text-bnb-muted text-xs uppercase tracking-widest font-semibold">Active Fighters</span>
</div>
<div className="flex flex-col">
<span className="font-display text-3xl md:text-4xl text-bnb-text">$1.2<span className="text-bnb-red">M</span></span>
<span className="text-bnb-muted text-xs uppercase tracking-widest font-semibold">Prize Pool</span>
</div>
<div className="flex flex-col">
<span className="font-display text-3xl md:text-4xl text-bnb-text">89</span>
<span className="text-bnb-muted text-xs uppercase tracking-widest font-semibold">Daily Tourneys</span>
</div>
<div className="flex flex-col">
<span className="font-display text-3xl md:text-4xl text-bnb-text">12</span>
<span className="text-bnb-muted text-xs uppercase tracking-widest font-semibold">Supported Games</span>
</div>
</div>
</div>

<section className="py-20 px-6">
<div className="max-w-7xl mx-auto">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="font-display text-5xl uppercase tracking-tightest text-bnb-text mb-2">Live Now</h2>
<div className="h-1 w-24 bg-bnb-acid"></div>
</div>
<a className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-bnb-secondary hover:text-bnb-red transition-colors" href="#">
                    View All Brackets <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="group relative bg-bnb-elevated border border-bnb-border hover:border-bnb-text transition-all duration-300">

<div className="absolute top-0 left-0 w-1 h-full bg-bnb-game-sf6 transition-all group-hover:w-2"></div>
<div className="p-6 pl-8">
<div className="flex justify-between items-start mb-6">
<span className="bg-bnb-game-sf6 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider">SF6</span>
<div className="flex items-center gap-1.5 animate-pulse">
<div className="w-1.5 h-1.5 rounded-full bg-bnb-red"></div>
<span className="text-bnb-red text-xs font-bold uppercase tracking-wide">Live</span>
</div>
</div>
<h3 className="font-display text-2xl uppercase text-bnb-text mb-1 tracking-tight">Warlords Cup #44</h3>
<p className="text-bnb-secondary text-xs mb-6">Double Elimination • NA East</p>
<div className="flex items-center justify-between border-t border-bnb-border pt-4 mt-4">
<div className="flex items-center gap-2 text-bnb-muted">
<iconify-icon icon="solar:users-group-rounded-linear" width="16"></iconify-icon>
<span className="text-xs font-mono">128/128</span>
</div>
<span className="text-bnb-acid text-sm font-display tracking-wide">$5,000</span>
</div>
</div>
</article>

<article className="group relative bg-bnb-elevated border border-bnb-border hover:border-bnb-text transition-all duration-300">
<div className="absolute top-0 left-0 w-1 h-full bg-bnb-game-tekken transition-all group-hover:w-2"></div>
<div className="p-6 pl-8">
<div className="flex justify-between items-start mb-6">
<span className="bg-bnb-game-tekken text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider">T8</span>
<div className="flex items-center gap-1.5">
<span className="text-bnb-secondary text-xs font-bold uppercase tracking-wide">Starting in 5m</span>
</div>
</div>
<h3 className="font-display text-2xl uppercase text-bnb-text mb-1 tracking-tight">Iron Fist Weekly</h3>
<p className="text-bnb-secondary text-xs mb-6">Pools • Global</p>
<div className="flex items-center justify-between border-t border-bnb-border pt-4 mt-4">
<div className="flex items-center gap-2 text-bnb-muted">
<iconify-icon icon="solar:users-group-rounded-linear" width="16"></iconify-icon>
<span className="text-xs font-mono">256/512</span>
</div>
<span className="text-bnb-acid text-sm font-display tracking-wide">$2,500</span>
</div>
</div>
</article>

<article className="group relative bg-bnb-elevated border border-bnb-border hover:border-bnb-text transition-all duration-300">
<div className="absolute top-0 left-0 w-1 h-full bg-bnb-game-mk1 transition-all group-hover:w-2"></div>
<div className="p-6 pl-8">
<div className="flex justify-between items-start mb-6">
<span className="bg-bnb-game-mk1 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider">MK1</span>
<div className="flex items-center gap-1.5">
<span className="text-bnb-secondary text-xs font-bold uppercase tracking-wide">Reg Open</span>
</div>
</div>
<h3 className="font-display text-2xl uppercase text-bnb-text mb-1 tracking-tight">Fatal Sunday</h3>
<p className="text-bnb-secondary text-xs mb-6">Swiss Bracket • EU West</p>
<div className="flex items-center justify-between border-t border-bnb-border pt-4 mt-4">
<div className="flex items-center gap-2 text-bnb-muted">
<iconify-icon icon="solar:users-group-rounded-linear" width="16"></iconify-icon>
<span className="text-xs font-mono">64/128</span>
</div>
<span className="text-bnb-acid text-sm font-display tracking-wide">1000 XP</span>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="bg-bnb-surface border-y border-bnb-border py-20 px-6 overflow-hidden relative">

<div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(#6B6763 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="max-w-4xl mx-auto relative z-10 text-center">
<h2 className="font-display text-4xl md:text-5xl uppercase tracking-tightest text-bnb-text mb-4">Progression System</h2>
<p className="text-bnb-secondary text-sm max-w-lg mx-auto mb-16">
                Earn XP in every match. Climb the ladder from Bronze street brawler to a Legend of the arena. 
                Unlock exclusive badges and profile customization.
            </p>

<div className="flex items-center justify-between relative">

<div className="absolute top-1/2 left-0 w-full h-0.5 bg-bnb-border -z-10"></div>

<div className="flex flex-col items-center gap-4 group cursor-pointer">
<div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-[#0A0A0C] border-2 border-[#CD7F32] shadow-[0_0_15px_rgba(205,127,50,0.2)] transform transition-transform group-hover:scale-110">
<iconify-icon className="text-[#CD7F32] text-xl md:text-2xl" icon="solar:shield-linear"></iconify-icon>
</div>
<span className="text-[#CD7F32] font-display uppercase tracking-wider text-sm">Bronze</span>
</div>

<div className="flex flex-col items-center gap-4 group cursor-pointer">
<div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-[#0A0A0C] border-2 border-[#FFD700] shadow-[0_0_15px_rgba(255,215,0,0.2)] transform transition-transform group-hover:scale-110">
<iconify-icon className="text-[#FFD700] text-xl md:text-2xl" icon="solar:star-linear"></iconify-icon>
</div>
<span className="text-[#FFD700] font-display uppercase tracking-wider text-sm">Gold</span>
</div>

<div className="flex flex-col items-center gap-4 group cursor-pointer">
<div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-[#0A0A0C] border-2 border-[#00BCD4] shadow-[0_0_15px_rgba(0,188,212,0.2)] transform transition-transform group-hover:scale-110">
<iconify-icon className="text-[#00BCD4] text-xl md:text-2xl" icon="solar:crown-linear"></iconify-icon>
</div>
<span className="text-[#00BCD4] font-display uppercase tracking-wider text-sm">Diamond</span>
</div>

<div className="flex flex-col items-center gap-4 group cursor-pointer">
<div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-bnb-red border-2 border-bnb-red shadow-[0_0_20px_rgba(232,49,42,0.5)] transform scale-110">
<iconify-icon className="text-white text-2xl md:text-3xl" icon="solar:medal-ribbon-linear"></iconify-icon>
</div>
<span className="text-bnb-red font-display uppercase tracking-wider text-base">Legend</span>
</div>
</div>

<div className="mt-16 bg-bnb-base border border-bnb-border p-6 max-w-lg mx-auto text-left relative">

<div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-bnb-acid"></div>
<div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-bnb-acid"></div>
<div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-bnb-acid"></div>
<div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-bnb-acid"></div>
<div className="flex justify-between mb-2">
<span className="text-xs font-bold uppercase tracking-widest text-bnb-muted">Current XP</span>
<span className="text-xs font-bold font-mono text-bnb-acid">8,450 / 10,000</span>
</div>

<div className="w-full h-3 bg-bnb-surface border border-bnb-border mb-4">
<div className="h-full bg-bnb-red w-[84%] relative">
<div className="absolute right-0 top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_white]"></div>
</div>
</div>
<div className="flex gap-4 items-center">
<label className="text-xs text-bnb-secondary uppercase">Add Boost</label>
<input className="w-full" max="100" min="0" type="range" value="0"/>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
<div className="flex-1">
<h2 className="font-display text-5xl md:text-6xl uppercase tracking-tightest text-bnb-text mb-6">
                    Organize Your<br/>Own <span className="text-bnb-acid">Battle</span>
</h2>
<p className="text-bnb-secondary mb-8 text-sm md:text-base leading-relaxed">
                    Create brackets, manage rulesets, and automate payouts with the BNB toolkit. 
                    Perfect for community locals or major online qualifiers.
                </p>
<form className="flex flex-col gap-4 max-w-md">
<div className="flex flex-col gap-1">
<label className="text-xs font-bold uppercase tracking-widest text-bnb-muted">Tournament Name</label>
<input className="bg-bnb-surface border border-bnb-border text-bnb-text px-4 py-3 text-sm focus:outline-none focus:border-bnb-acid transition-colors placeholder:text-bnb-muted/50 font-mono" placeholder="ENTER NAME..." type="text"/>
</div>
<div className="flex gap-4">
<div className="flex-1 flex flex-col gap-1">
<label className="text-xs font-bold uppercase tracking-widest text-bnb-muted">Game</label>
<div className="relative">
<select className="w-full bg-bnb-surface border border-bnb-border text-bnb-text px-4 py-3 text-sm focus:outline-none focus:border-bnb-acid appearance-none uppercase font-bold">
<option>SF6</option>
<option>Tekken 8</option>
<option>MK1</option>
</select>
<iconify-icon className="absolute right-3 top-3.5 text-bnb-muted pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="flex-1 flex flex-col gap-1">
<label className="text-xs font-bold uppercase tracking-widest text-bnb-muted">Max Players</label>
<input className="bg-bnb-surface border border-bnb-border text-bnb-text px-4 py-3 text-sm focus:outline-none focus:border-bnb-acid transition-colors font-mono" type="number" value="64"/>
</div>
</div>
<button className="mt-2 bg-bnb-text text-black font-display text-lg uppercase tracking-wider py-3 hover:bg-white transition-colors shadow-hard" type="button">
                        Create Bracket
                    </button>
</form>
</div>

<div className="flex-1 flex justify-center relative">
<div className="relative z-10 w-full max-w-sm aspect-square border border-bnb-border bg-bnb-surface p-2 rotate-3">
<div className="w-full h-full bg-bnb-base border border-bnb-border flex items-center justify-center relative overflow-hidden group">
<div className="absolute inset-0 bg-bnb-red/5 group-hover:bg-bnb-red/10 transition-colors"></div>
<iconify-icon className="text-8xl text-bnb-muted group-hover:text-bnb-acid transition-colors duration-500" icon="solar:cup-star-linear"></iconify-icon>

<div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-bnb-text"></div>
<div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-bnb-text"></div>
</div>
</div>

<div className="absolute inset-0 border-2 border-bnb-acid translate-x-4 translate-y-4 -z-10 rotate-3 opacity-30"></div>
</div>
</div>
</section>

<footer className="border-t border-bnb-border bg-bnb-panel pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<a className="font-display text-4xl tracking-tightest uppercase text-bnb-text mb-6 block" href="#">
                        BNB<span className="text-bnb-red">.</span>
</a>
<p className="text-bnb-muted text-xs max-w-xs leading-relaxed mb-6">
                        The world's premier fighting game tournament platform. 
                        Built for the community, by the community. 
                        Fight for glory.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 border border-bnb-border flex items-center justify-center text-bnb-secondary hover:text-white hover:bg-bnb-border transition-all" href="#">
<iconify-icon icon="brandico:twitter-bird" width="16"></iconify-icon>
</a>
<a className="w-10 h-10 border border-bnb-border flex items-center justify-center text-bnb-secondary hover:text-white hover:bg-bnb-border transition-all" href="#">
<iconify-icon icon="brandico:discord" width="16"></iconify-icon>
</a>
<a className="w-10 h-10 border border-bnb-border flex items-center justify-center text-bnb-secondary hover:text-white hover:bg-bnb-border transition-all" href="#">
<iconify-icon icon="simple-icons:twitch" width="16"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="font-bold text-bnb-text uppercase tracking-widest text-xs mb-6">Platform</h4>
<ul className="space-y-4">
<li><a className="text-bnb-secondary hover:text-bnb-acid text-xs uppercase tracking-wide transition-colors" href="#">Tournaments</a></li>
<li><a className="text-bnb-secondary hover:text-bnb-acid text-xs uppercase tracking-wide transition-colors" href="#">Rankings</a></li>
<li><a className="text-bnb-secondary hover:text-bnb-acid text-xs uppercase tracking-wide transition-colors" href="#">Premium</a></li>
<li><a className="text-bnb-secondary hover:text-bnb-acid text-xs uppercase tracking-wide transition-colors" href="#">API</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-bnb-text uppercase tracking-widest text-xs mb-6">Support</h4>
<ul className="space-y-4">
<li><a className="text-bnb-secondary hover:text-bnb-acid text-xs uppercase tracking-wide transition-colors" href="#">Help Center</a></li>
<li><a className="text-bnb-secondary hover:text-bnb-acid text-xs uppercase tracking-wide transition-colors" href="#">Rules</a></li>
<li><a className="text-bnb-secondary hover:text-bnb-acid text-xs uppercase tracking-wide transition-colors" href="#">Privacy</a></li>
<li><a className="text-bnb-secondary hover:text-bnb-acid text-xs uppercase tracking-wide transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center border-t border-bnb-border pt-8">
<p className="text-[10px] text-bnb-muted uppercase tracking-wider mb-4 md:mb-0">
                    © 2024 BNB Platform. All rights reserved.
                </p>
<div className="flex gap-2 items-center">
<div className="w-2 h-2 bg-bnb-success rounded-full bg-green-500"></div>
<span className="text-[10px] text-bnb-secondary uppercase tracking-wider">Systems Normal</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
