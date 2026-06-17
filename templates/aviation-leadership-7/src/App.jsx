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
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
avionics: {
bg: '#0A0F1C',
panel: '#0E1424',
surface: '#111827',
line: '#1E293B',
green: '#10B981',
cyan: '#06B6D4',
magenta: '#D946EF',
white: '#E2E8F0',
amber: '#F59E0B',
black: '#020617',
}
},
boxShadow: {
'glow-green': '0 0 10px rgba(16, 185, 129, 0.2)',
'glow-cyan': '0 0 10px rgba(6, 182, 212, 0.2)',
},
screens: {
'xs': '475px',
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
      




<div className="fixed inset-0 pointer-events-none z-0 flex justify-center">
<div className="w-full max-w-7xl border-x border-avionics-line h-full grid grid-cols-4 md:grid-cols-6 opacity-30">
<div className="border-r border-avionics-line h-full"></div>
<div className="border-r border-avionics-line h-full"></div>
<div className="border-r border-avionics-line h-full"></div>
<div className="border-r border-avionics-line h-full hidden md:block"></div>
<div className="border-r border-avionics-line h-full hidden md:block"></div>
</div>
</div>

<nav className="sticky top-0 w-full z-50 border-b border-avionics-line bg-avionics-bg/90 backdrop-blur-sm">
<div className="max-w-7xl mx-auto flex items-center justify-between h-14 px-4 md:px-6">
<div className="flex items-center gap-3 md:gap-4">
<a className="text-avionics-white font-medium tracking-tight text-base md:text-lg uppercase whitespace-nowrap" href="#">
                    CPT <span className="text-avionics-cyan">CHRIS</span>
</a>
<div className="h-6 w-px bg-avionics-line hidden xs:block"></div>
<div className="hidden xs:flex gap-1">
<span className="text-[10px] uppercase tracking-widest text-slate-500 font-mono">STS_CHK</span>
<span className="text-[10px] uppercase tracking-widest text-avionics-green font-mono">ACTIVE</span>
</div>
</div>
<div className="flex items-center gap-4 md:gap-6">

<button className="md:hidden text-avionics-white p-1">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>

<div className="hidden md:flex items-center gap-6 text-xs font-mono tracking-wide uppercase">
<a className="hover:text-avionics-cyan transition-colors" href="#">About</a>
<a className="hover:text-avionics-cyan transition-colors" href="#">Media</a>
<a className="hover:text-avionics-cyan transition-colors" href="#">Book</a>
</div>

<button className="hidden md:block border border-avionics-line bg-avionics-panel hover:bg-avionics-cyan hover:text-avionics-bg hover:border-avionics-cyan transition-all duration-200 px-4 py-1.5 text-xs font-mono uppercase tracking-widest group">
                    Contact
                    <span className="inline-block w-1.5 h-1.5 bg-avionics-green rounded-full ml-2 group-hover:bg-avionics-bg transition-colors"></span>
</button>
</div>
</div>
</nav>

<section className="relative z-10 min-h-[90vh] flex flex-col items-center justify-center pt-10 md:pt-20 px-4 md:px-6 pb-20">


<div className="w-full max-w-5xl border border-avionics-line bg-avionics-panel mb-8 shadow-2xl shadow-black/50 overflow-hidden">

<div className="grid grid-cols-3 sm:grid-cols-5 border-b border-avionics-line bg-avionics-bg/50 divide-x divide-avionics-line">
<div className="py-1.5 text-center text-[10px] font-mono text-slate-600 uppercase tracking-widest">Speed</div>
<div className="py-1.5 text-center text-[10px] font-mono text-slate-600 uppercase tracking-widest">Altitude</div>
<div className="py-1.5 text-center text-[10px] font-mono text-slate-600 uppercase tracking-widest">Heading</div>
<div className="hidden sm:block py-1.5 text-center text-[10px] font-mono text-slate-600 uppercase tracking-widest">Role</div>
<div className="hidden sm:block py-1.5 text-center text-[10px] font-mono text-slate-600 uppercase tracking-widest">Link</div>
</div>

<div className="grid grid-cols-3 sm:grid-cols-5 min-h-[70px] sm:min-h-[80px] divide-x divide-avionics-line">
<div className="p-2 sm:p-3 flex flex-col justify-between relative group hover:bg-white/5 transition-colors cursor-default">
<div className="flex flex-col">
<span className="text-avionics-green font-mono font-medium text-xs sm:text-sm tracking-wide uppercase">MACH</span>
<span className="text-avionics-cyan font-mono text-[10px] sm:text-xs tracking-wide uppercase mt-1">.85</span>
</div>
<div className="h-0.5 w-4 bg-avionics-white opacity-20 group-hover:w-full transition-all duration-500"></div>
</div>
<div className="p-2 sm:p-3 flex flex-col justify-between relative group hover:bg-white/5 transition-colors cursor-default">
<div className="flex flex-col">
<span className="text-avionics-green font-mono font-medium text-xs sm:text-sm tracking-wide uppercase">ALT CRZ</span>
<span className="text-avionics-white font-mono text-[10px] sm:text-xs tracking-wide uppercase mt-1">FL 350</span>
</div>
</div>
<div className="p-2 sm:p-3 flex flex-col justify-between relative group hover:bg-white/5 transition-colors cursor-default">
<div className="flex flex-col">
<span className="text-avionics-green font-mono font-medium text-xs sm:text-sm tracking-wide uppercase">NAV</span>
<span className="text-avionics-cyan font-mono text-[10px] sm:text-xs tracking-wide uppercase mt-1">LNAV</span>
</div>
</div>

<div className="hidden sm:flex p-3 flex-col justify-between relative group hover:bg-white/5 transition-colors cursor-default">
<div className="flex flex-col">
<span className="text-avionics-cyan font-mono font-medium text-sm tracking-wide uppercase">CMD A</span>
<span className="text-avionics-white font-mono text-xs tracking-wide uppercase mt-1">CHECK AIRMAN</span>
</div>
</div>
<div className="hidden sm:flex p-3 flex-col justify-between relative group hover:bg-white/5 transition-colors cursor-default">
<div className="flex flex-col">
<span className="text-avionics-white font-mono font-medium text-sm tracking-wide uppercase">UPLINK</span>
<span className="text-avionics-green font-mono text-xs tracking-wide uppercase mt-1">ESTABLISHED</span>
</div>
<div className="absolute bottom-3 right-3">
<span className="iconify text-avionics-white opacity-50" data-icon="lucide:radio" data-width="14"></span>
</div>
</div>
</div>
</div>
<div className="w-full max-w-4xl text-center mt-6 md:mt-8 relative">
<div className="absolute -left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-avionics-line to-transparent hidden lg:block"></div>
<div className="absolute -right-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-avionics-line to-transparent hidden lg:block"></div>
<div className="inline-flex items-center gap-2 mb-4 md:mb-6 px-3 py-1 border border-avionics-line bg-avionics-panel/50">
<span className="w-1.5 h-1.5 bg-avionics-green animate-pulse"></span>
<span className="text-[10px] font-mono uppercase tracking-[0.2em] text-avionics-cyan">Pilot in Command</span>
</div>
<h1 className="text-4xl xs:text-5xl md:text-6xl lg:text-7xl font-medium text-avionics-white tracking-tight leading-[1.1] mb-4 md:mb-6 uppercase">
                Commanding <br/> Excellence <span className="text-slate-600 block sm:inline">at</span> <span className="text-avionics-cyan whitespace-nowrap">35,000 ft.</span>
</h1>
<p className="text-sm md:text-base text-slate-400 font-light max-w-2xl mx-auto leading-relaxed mb-8 md:mb-10 px-2">
                Captain Chris Phol <span className="text-avionics-line px-1 text-lg font-light hidden sm:inline">//</span> <br className="sm:hidden"/>Senior Check Airman &amp; Aviation Voice <br className="sm:hidden"/><span className="text-avionics-line px-1 text-lg font-light hidden sm:inline">//</span> Combining technical precision with leadership.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full px-2 sm:px-0">
<button className="w-full sm:w-auto group relative px-8 py-3 bg-avionics-cyan text-avionics-bg font-mono text-xs uppercase tracking-widest font-semibold hover:bg-white transition-all duration-300 overflow-hidden">
<span className="relative z-10 flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:download" data-width="16"></span>
                        Download E-Book
                    </span>
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
</button>
<button className="w-full sm:w-auto px-8 py-3 border border-avionics-line text-avionics-white font-mono text-xs uppercase tracking-widest hover:border-avionics-cyan hover:text-avionics-cyan transition-colors duration-300 bg-transparent flex items-center justify-center gap-2">
                    About Me
                    <span className="iconify" data-icon="lucide:arrow-down-right" data-width="16"></span>
</button>
</div>
</div>
</section>



<div className="w-full h-px bg-gradient-to-r from-transparent via-avionics-line to-transparent my-10 relative z-20">
<div className="absolute left-1/2 -top-3 -translate-x-1/2 bg-avionics-bg px-4 text-slate-700">
<span className="iconify" data-icon="lucide:arrow-down" data-width="20"></span>
</div>
</div>
<section className="relative z-10 flex flex-col items-center pt-10 md:pt-16 px-4 md:px-6 pb-20 md:pb-24 bg-avionics-bg">
<div className="max-w-5xl w-full mx-auto text-center mb-8 md:mb-10">
<h2 className="text-3xl md:text-5xl font-medium text-avionics-white tracking-tight mb-4 uppercase">
                Flight <span className="text-avionics-cyan">Log</span>
</h2>
<p className="text-sm text-slate-500 max-w-lg mx-auto leading-relaxed">
                Analysis of modern flight operations, leadership protocols, and system redundancy management.
            </p>
</div>
<div className="w-full max-w-6xl mx-auto relative group">
<div className="relative bg-avionics-surface rounded-xl border border-avionics-line p-1 sm:p-3 shadow-2xl">
<div className="bg-avionics-black rounded-lg border border-slate-800 overflow-hidden relative">

<div className="relative z-20 bg-black min-h-[80px] sm:min-h-[96px] border-b border-slate-800">

<div className="flex overflow-x-auto sm:grid sm:grid-cols-5 divide-x divide-slate-800 scrollbar-hide snap-x">
<div className="min-w-[90px] w-full p-2 flex flex-col items-center justify-start text-center snap-start shrink-0">
<div className="w-full flex flex-col gap-1 mt-1">
<span className="text-avionics-green font-mono font-bold text-xs sm:text-lg tracking-tight leading-none">MAN</span>
<span className="text-transparent font-mono text-[10px] select-none">.</span>
<span className="text-avionics-white font-mono font-bold text-xs sm:text-lg tracking-tight leading-none mt-1">TOGA</span>
</div>
</div>
<div className="min-w-[90px] w-full p-2 flex flex-col items-center justify-start text-center snap-start shrink-0">
<div className="w-full flex flex-col gap-1 mt-1">
<span className="text-avionics-green font-mono font-bold text-xs sm:text-lg tracking-tight leading-none">SRS</span>
<span className="text-avionics-cyan font-mono font-bold text-xs sm:text-lg tracking-tight leading-none mt-1">CLB</span>
</div>
</div>
<div className="min-w-[90px] w-full p-2 flex flex-col items-center justify-start text-center snap-start shrink-0">
<div className="w-full flex flex-col gap-1 mt-1">
<span className="text-avionics-green font-mono font-bold text-xs sm:text-lg tracking-tight leading-none">RWY</span>
<span className="text-avionics-cyan font-mono font-bold text-xs sm:text-lg tracking-tight leading-none mt-1">NAV</span>
</div>
</div>
<div className="min-w-[90px] w-full p-2 flex flex-col items-center justify-start text-center snap-start shrink-0">
<div className="w-full flex flex-col gap-1 mt-1">
<span className="text-avionics-white font-mono font-bold text-xs sm:text-lg tracking-tight leading-none">CAT 3</span>
<span className="text-avionics-white font-mono font-bold text-xs sm:text-lg tracking-tight leading-none mt-1">DUAL</span>
</div>
</div>
<div className="min-w-[90px] w-full p-2 flex flex-col items-center justify-start text-center snap-start shrink-0">
<div className="w-full flex flex-col gap-1 mt-1">
<span className="text-avionics-white font-mono font-bold text-xs sm:text-lg tracking-tight leading-none">AP 1+2</span>
<span className="text-avionics-green font-mono font-bold text-xs sm:text-lg tracking-tight leading-none mt-1">1FD2</span>
</div>
</div>
</div>
</div>
<div className="relative w-full aspect-square xs:aspect-video bg-[#050505] overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 z-0 opacity-20" style={{backgroundImage: 'linear-gradient(#1E293B 1px, transparent 1px), linear-gradient(90deg, #1E293B 1px, transparent 1px)', backgroundSize: '40px 40px'}}>
</div>
<div className="absolute w-full h-0.5 bg-avionics-cyan/30 top-1/2 -translate-y-1/2"></div>
<div className="absolute h-12 w-0.5 bg-avionics-cyan/30 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"></div>
<div className="relative z-10 text-center border border-dashed border-avionics-line rounded-lg p-8 sm:p-12 bg-avionics-bg/30 backdrop-blur-sm mx-4">
<div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-slate-800/50 flex items-center justify-center mx-auto mb-4 border border-slate-700">
<span className="iconify text-slate-500" data-icon="lucide:plane" data-width="24"></span>
</div>
<p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1">Awaiting Telemetry</p>
<p className="text-[10px] font-mono text-slate-600">Simulator Session: In Progress</p>
</div>
</div>
</div>
</div>
</div>
</section>



<div className="w-full h-px bg-gradient-to-r from-transparent via-avionics-line to-transparent my-10 relative z-20">
<div className="absolute left-1/2 -top-3 -translate-x-1/2 bg-avionics-bg px-4 text-slate-700">
<span className="iconify" data-icon="lucide:arrow-down" data-width="20"></span>
</div>
</div>
<section className="relative w-full min-h-screen bg-avionics-bg text-slate-300 pb-20">

<nav className="sticky top-0 z-50 w-full bg-avionics-black border-y border-slate-800 shadow-2xl">

<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 md:h-24">

<div className="col-span-2 md:col-span-1 border-b md:border-b-0 border-r-0 md:border-r border-slate-800 p-3 md:p-3 flex flex-row md:flex-col justify-between items-center md:items-start group hover:bg-white/5 transition-colors cursor-pointer bg-avionics-panel/30 md:bg-transparent h-14 md:h-auto">
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-avionics-cyan rounded-sm animate-pulse"></span>
<span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">CPT_CHRIS</span>
</div>
<div className="text-avionics-white font-semibold tracking-tight uppercase leading-none text-sm md:text-lg">
                        AV<span className="text-slate-600">IATION</span>
</div>
</div>

<a className="border-r border-b md:border-b-0 border-slate-800 p-3 h-20 md:h-auto flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-colors" href="#">
<div className="flex flex-col gap-1">
<span className="text-avionics-green font-mono font-bold text-xs md:text-sm lg:text-lg tracking-tight uppercase group-hover:text-white transition-colors">ABOUT</span>
<span className="text-avionics-white font-mono text-[10px] md:text-xs tracking-widest uppercase opacity-70">PROFILE</span>
</div>
</a>

<a className="border-r-0 md:border-r border-b md:border-b-0 border-slate-800 p-3 h-20 md:h-auto flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-colors" href="#">
<div className="flex flex-col gap-1">
<span className="text-avionics-cyan font-mono font-bold text-xs md:text-sm lg:text-lg tracking-tight uppercase group-hover:text-white transition-colors">MEDIA</span>
<span className="text-avionics-white font-mono text-[10px] md:text-xs tracking-widest uppercase opacity-70">PRESS</span>
</div>
</a>

<a className="border-r border-slate-800 p-3 h-20 md:h-auto flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-colors" href="#">
<div className="flex flex-col gap-1">
<span className="text-avionics-white font-mono font-bold text-xs md:text-sm lg:text-lg tracking-tight uppercase group-hover:text-avionics-cyan transition-colors">STORIES</span>
<span className="text-avionics-white font-mono text-[10px] md:text-xs tracking-widest uppercase opacity-70">LOGS</span>
</div>
</a>

<div className="p-3 h-20 md:h-auto flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-colors cursor-pointer bg-avionics-green/5 md:bg-transparent">
<div className="px-4 py-1.5 border border-avionics-green text-avionics-green font-mono text-[10px] uppercase tracking-widest hover:bg-avionics-green hover:text-black transition-all">
                        Book Now
                     </div>
</div>
</div>
<div className="w-full h-px bg-gradient-to-r from-transparent via-avionics-cyan to-transparent opacity-30"></div>
</nav>
<div className="max-w-7xl mx-auto px-4 md:px-6 pt-12 md:pt-24 flex flex-col items-center">
<div className="text-center mb-12 relative z-10 w-full">
<div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-avionics-surface rounded-full border border-slate-800">
<span className="text-[10px] font-mono text-avionics-cyan uppercase tracking-widest">Training v2.4</span>
</div>
<h2 className="text-3xl sm:text-4xl md:text-6xl font-medium text-avionics-white tracking-tight leading-tight mb-4 md:mb-6 uppercase">
                    Visual <span className="text-avionics-cyan">Cockpit</span><br/> 
                    Environments
                </h2>
<p className="text-slate-400 font-light max-w-xl mx-auto leading-relaxed text-sm md:text-base">
                    Integrated HUD overlay systems for training interfaces.
                    Merging aesthetic precision with functional aviation protocols.
                </p>
</div>
<div className="relative w-full max-w-5xl aspect-[4/3] xs:aspect-[16/9] md:aspect-[21/9] bg-black rounded-lg border border-slate-800 shadow-2xl overflow-hidden group">
<img alt="Orbit View" className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale-[40%] group-hover:scale-105 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp;w=2072&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-avionics-bg via-transparent to-transparent opacity-90"></div>
<div className="absolute inset-0 hud-grid opacity-20 pointer-events-none"></div>
<div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between pointer-events-none">
<div className="flex justify-between items-start">
<div className="border border-avionics-cyan/30 bg-black/40 backdrop-blur-sm px-2 py-1.5 sm:px-3 sm:py-2">
<div className="flex items-center gap-2 sm:gap-3 font-mono text-[10px] sm:text-xs text-avionics-cyan">
<span className="iconify" data-icon="lucide:crosshair" data-width="14"></span>
<span>TCAS_TRAFFIC</span>
</div>
</div>
<div className="flex flex-col items-end">
<div className="text-lg sm:text-2xl font-mono font-bold text-avionics-white tracking-tighter">FL 350</div>
<div className="text-[10px] font-mono text-avionics-green uppercase tracking-widest">CRZ MODE</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-64 sm:h-64 border border-avionics-white/10 rounded-full flex items-center justify-center">
<div className="w-1 h-1 bg-avionics-cyan rounded-full"></div>
<div className="absolute top-0 w-0.5 h-2 sm:h-4 bg-avionics-cyan"></div>
<div className="absolute bottom-0 w-0.5 h-2 sm:h-4 bg-avionics-cyan"></div>
<div className="absolute left-0 h-0.5 w-2 sm:w-4 bg-avionics-cyan"></div>
<div className="absolute right-0 h-0.5 w-2 sm:w-4 bg-avionics-cyan"></div>
</div>
<div className="flex justify-between items-end">
<div className="flex gap-3 sm:gap-4">
<div className="text-left">
<div className="text-[10px] font-mono text-slate-400 uppercase">Pitch</div>
<div className="text-sm sm:text-lg font-mono text-avionics-white">2.5°</div>
</div>
<div className="text-left">
<div className="text-[10px] font-mono text-slate-400 uppercase">Bank</div>
<div className="text-sm sm:text-lg font-mono text-avionics-white">0.0°</div>
</div>
</div>
<div className="pointer-events-auto">
<button className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-avionics-cyan/90 hover:bg-avionics-cyan text-black font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-colors backdrop-blur">
<span className="iconify hidden xs:inline" data-icon="lucide:maximize" data-width="14"></span>
                                Systems
                            </button>
</div>
</div>
</div>
</div>

<div className="w-full max-w-5xl mt-6 md:mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-4">
<div className="border-l-2 border-avionics-line pl-3 md:pl-4 py-1">
<div className="text-[10px] text-slate-500 font-mono uppercase tracking-widest mb-1">Status</div>
<div className="text-xs text-slate-300 font-mono">Senior Check Airman</div>
</div>
<div className="border-l-2 border-avionics-line pl-3 md:pl-4 py-1">
<div className="text-[10px] text-slate-500 font-mono uppercase tracking-widest mb-1">Hours</div>
<div className="flex items-center gap-1">
<span className="text-xs text-avionics-green font-mono">15,000+ LOGGED</span>
</div>
</div>
<div className="border-l-2 border-avionics-line pl-3 md:pl-4 py-1 col-span-1">
<div className="text-[10px] text-slate-500 font-mono uppercase tracking-widest mb-1">Availability</div>
<div className="text-xs text-slate-300 font-mono">Open for Consulting</div>
</div>
<div className="border-l-2 border-avionics-line pl-3 md:pl-4 py-1 col-span-1">
<div className="text-[10px] text-slate-500 font-mono uppercase tracking-widest mb-1">Base</div>
<div className="text-xs text-avionics-cyan font-mono">Global Operations</div>
</div>
</div>
</div>
</section>

    </>
  );
}
