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
      

<div className="fixed inset-0 pointer-events-none -z-10 bg-[#030014]">
<div className="absolute bottom-0 w-full h-[60vh] cyber-grid opacity-30"></div>
<div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-fuchsia-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] mix-blend-screen"></div>
<div className="absolute inset-0 scanlines z-50 opacity-10"></div>
</div>

<nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-[#030014]/90 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer group">
<span className="font-cyber font-bold text-xl text-white tracking-widest group-hover:neon-text-cyan transition-all">SOCIETY<span className="text-cyan-400">X</span></span>
</div>
<div className="hidden md:flex items-center gap-1">
<div className="px-4 py-1 rounded bg-black/50 border border-green-500/30 flex items-center gap-2">
<div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
<span className="text-[10px] font-mono text-green-400">SYSTEM: ONLINE</span>
</div>
<div className="px-4 py-1 rounded bg-black/50 border border-amber-500/30 flex items-center gap-2">
<i className="w-3 h-3 text-amber-500" data-lucide="users"></i>
<span className="text-[10px] font-mono text-amber-400">POP: 8.2M</span>
</div>
</div>
<button className="px-5 py-1.5 bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 font-mono text-xs hover:bg-cyan-500 hover:text-black transition-all clip-tech">
                JACK IN
            </button>
</div>
</nav>

<header className="relative pt-32 pb-24 min-h-screen flex flex-col justify-center items-center overflow-hidden">

<div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-cyan-900/10 to-transparent blur-xl"></div>

<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-ping"></div>
<div className="absolute top-3/4 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping" style={{animationDuration: '3s'}}></div>
</div>
<div className="relative z-10 flex flex-col items-center">

<div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] flex items-center justify-center mb-10">

<h1 className="font-cyber font-black text-[12rem] md:text-[18rem] leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-cyan-100 to-cyan-900/20 neon-text-cyan z-10 mix-blend-overlay">X</h1>

<div className="absolute top-0 -left-10 md:left-0 animate-float glass-panel p-3 rounded border-l-2 border-blue-500 w-32 md:w-40 z-20">
<div className="flex items-center gap-2 mb-2 border-b border-white/10 pb-1">
<i className="w-4 h-4 text-blue-400" data-lucide="shield"></i>
<span className="text-[10px] font-mono text-blue-300">POLICE</span>
</div>
<div className="h-16 bg-blue-500/10 rounded flex items-center justify-center relative overflow-hidden">
<i className="w-8 h-8 text-blue-400 opacity-50" data-lucide="user"></i>
<div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent"></div>
</div>
</div>
<div className="absolute bottom-10 -right-4 md:right-0 animate-float glass-panel p-3 rounded border-l-2 border-amber-500 w-32 md:w-40 z-20" style={{animationDelay: '2s'}}>
<div className="flex items-center gap-2 mb-2 border-b border-white/10 pb-1">
<i className="w-4 h-4 text-amber-400" data-lucide="gem"></i>
<span className="text-[10px] font-mono text-amber-300">TYCOON</span>
</div>
<div className="h-16 bg-amber-500/10 rounded flex items-center justify-center relative overflow-hidden">
<i className="w-8 h-8 text-amber-400 opacity-50" data-lucide="user"></i>
<div className="absolute inset-0 bg-gradient-to-t from-amber-500/20 to-transparent"></div>
</div>
</div>
<div className="absolute top-10 right-0 md:-right-10 animate-float glass-panel p-3 rounded border-l-2 border-pink-500 w-32 md:w-40 z-0 blur-[1px]" style={{animationDelay: '1s'}}>
<div className="flex items-center gap-2 mb-2 border-b border-white/10 pb-1">
<i className="w-4 h-4 text-pink-400" data-lucide="activity"></i>
<span className="text-[10px] font-mono text-pink-300">DOCTOR</span>
</div>
<div className="h-16 bg-pink-500/10 rounded flex items-center justify-center">
<i className="w-8 h-8 text-pink-400 opacity-50" data-lucide="user"></i>
</div>
</div>
</div>

<div className="text-center space-y-6 max-w-2xl px-6 relative z-30">
<h2 className="text-2xl md:text-4xl font-cyber font-bold text-white uppercase tracking-[0.2em] drop-shadow-xl">
                    Enter the World's First <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 neon-text-cyan">Digital Society</span>
</h2>
<div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
<button className="relative group px-8 py-4 bg-cyan-600 text-white font-cyber font-bold tracking-widest clip-tech overflow-hidden">
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
<span className="relative z-10 flex items-center gap-2">
                            ENTER SOCIETY <i className="w-4 h-4" data-lucide="arrow-right"></i>
</span>
</button>
<button className="px-8 py-4 bg-transparent border border-white/20 text-white font-cyber font-bold tracking-widest clip-tech hover:border-fuchsia-500 hover:text-fuchsia-400 hover:shadow-[0_0_20px_rgba(232,121,249,0.2)] transition-all">
                        CHOOSE ROLE
                    </button>
</div>
</div>
</div>
</header>

<section className="py-12 border-y border-white/5 bg-black/40 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center relative">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
<div className="relative z-10 bg-[#030014] p-4 border border-cyan-500/30 rounded-full w-40 flex flex-col items-center">
<i className="text-cyan-400 w-6 h-6 mb-1" data-lucide="hammer"></i>
<span className="font-cyber font-bold text-white">WORK</span>
<span className="text-[9px] font-mono text-slate-500">COMPLETE TASKS</span>
</div>
<i className="text-slate-600 md:block hidden relative z-10" data-lucide="chevron-right"></i>
<div className="relative z-10 bg-[#030014] p-4 border border-green-500/30 rounded-full w-40 flex flex-col items-center shadow-[0_0_15px_rgba(34,197,94,0.1)]">
<i className="text-green-400 w-6 h-6 mb-1" data-lucide="coins"></i>
<span className="font-cyber font-bold text-white">EARN</span>
<span className="text-[9px] font-mono text-slate-500">GET COINS</span>
</div>
<i className="text-slate-600 md:block hidden relative z-10" data-lucide="chevron-right"></i>
<div className="relative z-10 bg-[#030014] p-4 border border-fuchsia-500/30 rounded-full w-40 flex flex-col items-center">
<i className="text-fuchsia-400 w-6 h-6 mb-1" data-lucide="shopping-bag"></i>
<span className="font-cyber font-bold text-white">SURVIVE</span>
<span className="text-[9px] font-mono text-slate-500">BUY SUPPLIES</span>
</div>
<i className="text-slate-600 md:block hidden relative z-10" data-lucide="chevron-right"></i>
<div className="relative z-10 bg-[#030014] p-4 border border-amber-500/30 rounded-full w-40 flex flex-col items-center">
<i className="text-amber-400 w-6 h-6 mb-1" data-lucide="scale"></i>
<span className="font-cyber font-bold text-white">GOVERN</span>
<span className="text-[9px] font-mono text-slate-500">GAIN RESPECT</span>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#050510] relative overflow-hidden">
<div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-cyan-900/10 to-transparent"></div>
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

<div>
<div className="flex items-center gap-3 mb-6">
<div className="w-1 h-8 bg-cyan-500"></div>
<h3 className="text-3xl font-cyber font-bold text-white uppercase">Identity <br/>Initialization</h3>
</div>
<div className="glass-panel p-6 space-y-6 rounded-lg border-cyan-500/20">
<div>
<label className="text-xs font-mono text-cyan-400 block mb-3">BIOLOGICAL AGE</label>
<div className="grid grid-cols-3 gap-2">
<button className="py-2 bg-white/5 border border-white/10 rounded hover:bg-cyan-500/20 hover:border-cyan-500 text-xs text-white font-mono transition-all">TEEN</button>
<button className="py-2 bg-cyan-500/20 border border-cyan-500 rounded text-xs text-white font-mono shadow-[0_0_10px_rgba(34,211,238,0.3)]">ADULT</button>
<button className="py-2 bg-white/5 border border-white/10 rounded hover:bg-cyan-500/20 hover:border-cyan-500 text-xs text-white font-mono transition-all">ELDER</button>
</div>
</div>
<div>
<label className="text-xs font-mono text-cyan-400 block mb-3">GENDER SIGNATURE</label>
<div className="flex items-center justify-between bg-black p-1 rounded border border-white/10">
<button className="flex-1 py-1.5 rounded text-xs text-slate-400 hover:text-white font-mono">FEMALE</button>
<button className="flex-1 py-1.5 rounded bg-cyan-900/50 text-white font-mono shadow-sm">MALE</button>
</div>
</div>
<div>
<label className="text-xs font-mono text-cyan-400 block mb-3">CYBERNETICS LEVEL</label>
<div className="h-2 bg-slate-900 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-gradient-to-r from-cyan-600 to-fuchsia-600"></div>
</div>
<div className="flex justify-between mt-1 text-[9px] text-slate-500 font-mono">
<span>NATURAL</span>
<span>FULL BORG</span>
</div>
</div>
</div>
</div>

<div className="relative h-[400px] border border-white/10 bg-black/50 rounded-lg flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 cyber-grid opacity-20"></div>

<div className="absolute inset-0 bg-gradient-to-b from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 h-[20%] animate-[scan_3s_linear_infinite] border-y border-cyan-500/30"></div>

<div className="relative z-10 flex flex-col items-center hologram-effect">
<div className="w-32 h-32 rounded-full border-2 border-cyan-500/50 flex items-center justify-center bg-cyan-500/5 mb-4 shadow-[0_0_30px_rgba(34,211,238,0.2)]">
<i className="w-16 h-16 text-cyan-400" data-lucide="user"></i>
</div>
<div className="px-4 py-1 bg-black border border-cyan-500 text-cyan-400 text-xs font-mono tracking-widest rounded-full">
                        GENERATING...
                    </div>
</div>

<div className="absolute top-4 left-4 text-[10px] font-mono text-slate-500 space-y-1">
<div>FACE_ID: #992XA</div>
<div>POLY_COUNT: HIGH</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-cyber font-bold text-white mb-2 neon-text-pink">CHOOSE YOUR PATH</h2>
<p className="text-slate-400 font-mono text-xs tracking-widest">10 CLASSES AVAILABLE // CITIZENSHIP REQUIRED</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

<div className="group relative bg-slate-900/40 border border-white/10 hover:border-blue-500 h-64 overflow-hidden clip-card transition-all duration-300 hover:-translate-y-2">
<div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute top-4 right-4 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all">
<i className="w-6 h-6 text-blue-400 shadow-[0_0_10px_#3b82f6]" data-lucide="shield"></i> 
</div>
<div className="absolute bottom-0 p-4 w-full">
<div className="text-[9px] font-mono text-blue-400 mb-1">LAW</div>
<h3 className="text-xl font-cyber font-bold text-white group-hover:neon-text-cyan">POLICE</h3>
</div>
</div>
<div className="group relative bg-slate-900/40 border border-white/10 hover:border-pink-500 h-64 overflow-hidden clip-card transition-all duration-300 hover:-translate-y-2">
<div className="absolute inset-0 bg-gradient-to-t from-pink-900/40 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute top-4 right-4 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all">
<i className="w-6 h-6 text-pink-400" data-lucide="stethoscope"></i> 
</div>
<div className="absolute bottom-0 p-4 w-full">
<div className="text-[9px] font-mono text-pink-400 mb-1">HEALTH</div>
<h3 className="text-xl font-cyber font-bold text-white">DOCTOR</h3>
</div>
</div>
<div className="group relative bg-slate-900/40 border border-white/10 hover:border-amber-400 h-64 overflow-hidden clip-card transition-all duration-300 hover:-translate-y-2">
<div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute top-4 right-4 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all">
<i className="w-6 h-6 text-amber-400" data-lucide="book-open"></i> 
</div>
<div className="absolute bottom-0 p-4 w-full">
<div className="text-[9px] font-mono text-amber-400 mb-1">EDU</div>
<h3 className="text-xl font-cyber font-bold text-white">TEACHER</h3>
</div>
</div>
<div className="group relative bg-slate-900/40 border border-white/10 hover:border-teal-400 h-64 overflow-hidden clip-card transition-all duration-300 hover:-translate-y-2">
<div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute top-4 right-4 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all">
<i className="w-6 h-6 text-teal-400" data-lucide="backpack"></i>
</div>
<div className="absolute bottom-0 p-4 w-full">
<div className="text-[9px] font-mono text-teal-400 mb-1">LEARN</div>
<h3 className="text-xl font-cyber font-bold text-white">STUDENT</h3>
</div>
</div>
<div className="group relative bg-slate-900/40 border border-white/10 hover:border-green-500 h-64 overflow-hidden clip-card transition-all duration-300 hover:-translate-y-2">
<div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute top-4 right-4 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all">
<i className="w-6 h-6 text-green-400" data-lucide="laptop"></i> 
</div>
<div className="absolute bottom-0 p-4 w-full">
<div className="text-[9px] font-mono text-green-400 mb-1">NET</div>
<h3 className="text-xl font-cyber font-bold text-white">HACKER</h3>
</div>
</div>
<div className="group relative bg-slate-900/40 border border-white/10 hover:border-yellow-400 h-64 overflow-hidden clip-card transition-all duration-300 hover:-translate-y-2">
<div className="absolute inset-0 bg-gradient-to-t from-yellow-900/40 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute top-4 right-4 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all">
<i className="w-6 h-6 text-yellow-400" data-lucide="coins"></i> 
</div>
<div className="absolute bottom-0 p-4 w-full">
<div className="text-[9px] font-mono text-yellow-400 mb-1">ELITE</div>
<h3 className="text-xl font-cyber font-bold text-white">BILLIONAIRE</h3>
</div>
</div>
<div className="group relative bg-slate-900/40 border border-white/10 hover:border-purple-500 h-64 overflow-hidden clip-card transition-all duration-300 hover:-translate-y-2">
<div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute top-4 right-4 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all">
<i className="w-6 h-6 text-purple-400" data-lucide="palette"></i> 
</div>
<div className="absolute bottom-0 p-4 w-full">
<div className="text-[9px] font-mono text-purple-400 mb-1">CREATIVE</div>
<h3 className="text-xl font-cyber font-bold text-white">ARTIST</h3>
</div>
</div>
<div className="group relative bg-slate-900/40 border border-white/10 hover:border-orange-500 h-64 overflow-hidden clip-card transition-all duration-300 hover:-translate-y-2">
<div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute top-4 right-4 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all">
<i className="w-6 h-6 text-orange-400" data-lucide="shopping-cart"></i> 
</div>
<div className="absolute bottom-0 p-4 w-full">
<div className="text-[9px] font-mono text-orange-400 mb-1">TRADE</div>
<h3 className="text-xl font-cyber font-bold text-white">SHOPKEEPER</h3>
</div>
</div>
<div className="group relative bg-slate-900/40 border border-white/10 hover:border-indigo-400 h-64 overflow-hidden clip-card transition-all duration-300 hover:-translate-y-2">
<div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute top-4 right-4 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all">
<i className="w-6 h-6 text-indigo-400" data-lucide="home"></i> 
</div>
<div className="absolute bottom-0 p-4 w-full">
<div className="text-[9px] font-mono text-indigo-400 mb-1">CIVIL</div>
<h3 className="text-xl font-cyber font-bold text-white">HOMEMAKER</h3>
</div>
</div>
<div className="group relative bg-slate-900/40 border border-white/10 hover:border-red-600 h-64 overflow-hidden clip-card transition-all duration-300 hover:-translate-y-2">
<div className="absolute inset-0 bg-gradient-to-t from-red-900/40 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute top-4 right-4 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all">
<i className="w-6 h-6 text-red-500" data-lucide="gavel"></i> 
</div>
<div className="absolute bottom-0 p-4 w-full">
<div className="text-[9px] font-mono text-red-500 mb-1">JUSTICE</div>
<h3 className="text-xl font-cyber font-bold text-white">JUDGE</h3>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black/80 border-y border-white/5 relative">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl font-cyber font-bold text-white mb-12 flex items-center gap-3">
<span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
                LIVE JUSTICE SYSTEM
            </h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-2 relative">

<div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-slate-800 z-0"></div>

<div className="relative z-10 p-6 bg-slate-950 border border-slate-800 hover:border-red-500 transition-colors group h-full">
<div className="w-16 h-16 bg-slate-900 border border-slate-700 flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.2)]">
<i className="w-8 h-8 text-slate-500 group-hover:text-red-500 transition-colors" data-lucide="file-warning"></i>
</div>
<h4 className="text-lg font-bold text-white font-cyber mb-2">COMPLAINT</h4>
<p className="text-xs text-slate-500 font-mono">Terminal Log #492. Citizen files report.</p>
</div>

<div className="relative z-10 p-6 bg-slate-950 border border-slate-800 hover:border-blue-500 transition-colors group h-full">
<div className="w-16 h-16 bg-slate-900 border border-slate-700 flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]">
<i className="w-8 h-8 text-slate-500 group-hover:text-blue-500 transition-colors" data-lucide="siren"></i>
</div>
<h4 className="text-lg font-bold text-white font-cyber mb-2">INVESTIGATION</h4>
<p className="text-xs text-slate-500 font-mono">Unit 7 deployed. Evidence collected.</p>
</div>

<div className="relative z-10 p-6 bg-slate-950 border border-slate-800 hover:border-indigo-500 transition-colors group h-full">
<div className="w-16 h-16 bg-slate-900 border border-slate-700 flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]">
<i className="w-8 h-8 text-slate-500 group-hover:text-indigo-500 transition-colors" data-lucide="gavel"></i>
</div>
<h4 className="text-lg font-bold text-white font-cyber mb-2">COURTROOM</h4>
<p className="text-xs text-slate-500 font-mono">Judge presides. Defense vs Prosecution.</p>
</div>

<div className="relative z-10 p-6 bg-slate-950 border border-slate-800 hover:border-green-500 transition-colors group h-full">
<div className="w-16 h-16 bg-slate-900 border border-slate-700 flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.2)]">
<i className="w-8 h-8 text-slate-500 group-hover:text-green-500 transition-colors" data-lucide="check-circle-2"></i>
</div>
<h4 className="text-lg font-bold text-white font-cyber mb-2">VERDICT</h4>
<p className="text-xs text-slate-500 font-mono">Jail Time: 2 Years OR Fine: 5000◈</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#060611]">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-10">

<div className="lg:col-span-1 space-y-6">
<div className="glass-panel p-6 border-t-2 border-t-cyan-500 relative">
<div className="absolute top-2 right-2 text-[10px] font-mono text-cyan-500 animate-pulse">LIVE DATA</div>
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 bg-slate-800 rounded border border-white/10 flex items-center justify-center">
<i className="text-white" data-lucide="user"></i>
</div>
<div>
<div className="font-bold text-white font-cyber text-lg">CITIZEN #9902</div>
<div className="text-xs text-slate-400 font-mono">RANK: NOVICE</div>
</div>
</div>

<div className="space-y-4">
<div>
<div className="flex justify-between text-[10px] font-mono text-slate-400 mb-1">
<span>FOOD</span> <span>78%</span>
</div>
<div className="h-1.5 w-full bg-slate-900 rounded-full">
<div className="h-full bg-orange-500 w-[78%] shadow-[0_0_5px_#f97316]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] font-mono text-slate-400 mb-1">
<span>WATER</span> <span>42%</span>
</div>
<div className="h-1.5 w-full bg-slate-900 rounded-full">
<div className="h-full bg-cyan-500 w-[42%] shadow-[0_0_5px_#06b6d4]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] font-mono text-slate-400 mb-1">
<span>RESPECT</span> <span>15%</span>
</div>
<div className="h-1.5 w-full bg-slate-900 rounded-full">
<div className="h-full bg-fuchsia-500 w-[15%] shadow-[0_0_5px_#d946ef]"></div>
</div>
</div>
</div>

<div className="mt-6 pt-6 border-t border-white/10">
<div className="flex justify-between items-center bg-black/40 p-3 rounded border border-yellow-500/20">
<span className="text-xs text-yellow-500 font-mono">BALANCE</span>
<span className="text-xl font-bold font-cyber text-white">24,592 ◈</span>
</div>
</div>
</div>

<div className="glass-panel p-5">
<h3 className="text-sm font-bold text-white font-cyber mb-4">ACTIVE MISSIONS</h3>
<div className="space-y-2">
<div className="flex items-center gap-3 text-xs text-slate-300 p-2 bg-white/5 border-l-2 border-red-500">
<i className="w-3 h-3 text-red-500" data-lucide="crosshair"></i>
<span>Neutralize Target (Sector 4)</span>
</div>
<div className="flex items-center gap-3 text-xs text-slate-300 p-2 bg-white/5 border-l-2 border-green-500">
<i className="w-3 h-3 text-green-500" data-lucide="box"></i>
<span>Deliver Package (15m)</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-2">
<div className="flex justify-between items-end mb-6">
<h2 className="text-3xl font-cyber font-bold text-white">NEON BAZAAR</h2>
<div className="flex gap-2">
<button className="px-3 py-1 bg-fuchsia-600/20 text-fuchsia-400 border border-fuchsia-600/50 text-[10px] font-mono rounded">ALL</button>
<button className="px-3 py-1 bg-black text-slate-400 border border-white/10 text-[10px] font-mono rounded hover:bg-white/10">FOOD</button>
<button className="px-3 py-1 bg-black text-slate-400 border border-white/10 text-[10px] font-mono rounded hover:bg-white/10">GEAR</button>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-4">

<div className="bg-slate-900 border border-white/10 p-4 relative group hover:border-cyan-400 transition-all">
<div className="absolute top-2 right-2 text-[10px] text-green-400 font-mono">STABLE</div>
<div className="h-32 bg-black/40 rounded mb-3 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-transparent"></div>
<i className="w-12 h-12 text-cyan-200 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]" data-lucide="coffee"></i>
</div>
<h4 className="font-bold text-white font-cyber">SYNTH-COFFEE</h4>
<div className="flex justify-between items-center mt-2">
<span className="text-[10px] text-slate-400 font-mono">+10 ENERGY</span>
<span className="font-bold text-yellow-400 text-sm">25◈</span>
</div>
</div>

<div className="bg-slate-900 border border-white/10 p-4 relative group hover:border-fuchsia-400 transition-all">
<div className="absolute top-2 right-2 text-[10px] text-red-400 font-mono">SCARCE</div>
<div className="h-32 bg-black/40 rounded mb-3 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-fuchsia-900/20 to-transparent"></div>
<i className="w-12 h-12 text-fuchsia-200 drop-shadow-[0_0_10px_rgba(232,121,249,0.5)]" data-lucide="zap"></i>
</div>
<h4 className="font-bold text-white font-cyber">POWER CELL</h4>
<div className="flex justify-between items-center mt-2">
<span className="text-[10px] text-slate-400 font-mono">BATTERY</span>
<span className="font-bold text-yellow-400 text-sm">150◈</span>
</div>
</div>

<div className="bg-slate-900 border border-white/10 p-4 relative group hover:border-green-400 transition-all">
<div className="absolute top-2 right-2 text-[10px] text-green-400 font-mono">STABLE</div>
<div className="h-32 bg-black/40 rounded mb-3 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent"></div>
<i className="w-12 h-12 text-green-200 drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]" data-lucide="droplet"></i>
</div>
<h4 className="font-bold text-white font-cyber">PURE H2O</h4>
<div className="flex justify-between items-center mt-2">
<span className="text-[10px] text-slate-400 font-mono">+50 HYDRATION</span>
<span className="font-bold text-yellow-400 text-sm">45◈</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gradient-to-b from-black to-[#0a0500] border-t border-amber-900/30 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjM0LIDE3OSwgOCwgMC4wNSkiLz48L3N2Zz4=')] opacity-30"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<div className="inline-block mb-6 relative">
<div className="absolute inset-0 bg-amber-500/20 blur-xl rounded-full"></div>
<i className="w-16 h-16 text-amber-500 relative z-10 animate-pulse" data-lucide="crown"></i>
</div>
<h2 className="text-5xl font-cyber font-bold text-transparent bg-clip-text bg-gradient-to-b from-amber-300 to-amber-700 mb-4 neon-text-gold">COUNCIL OF ELDERS</h2>
<p className="text-amber-200/60 font-mono text-sm tracking-[0.3em] mb-12">SUPREME GOVERNANCE // PRESTIGE RANK 100+</p>
<div className="glass-panel border border-amber-500/30 p-8 rounded-xl shadow-[0_0_50px_rgba(245,158,11,0.1)] backdrop-blur-xl">
<div className="flex items-center justify-between border-b border-amber-500/20 pb-4 mb-4">
<span className="font-mono text-amber-500">CURRENT RULER</span>
<span className="font-mono text-amber-500">NET WORTH: ∞</span>
</div>
<div className="flex items-center gap-6 text-left">
<div className="w-24 h-24 bg-gradient-to-br from-amber-600 to-amber-900 rounded-lg flex items-center justify-center border border-amber-400 shadow-lg">
<span className="text-4xl">👑</span>
</div>
<div>
<h3 className="text-2xl font-bold text-white font-cyber">LORD_CYPHER</h3>
<div className="text-sm text-amber-400 font-mono mt-1">"Order through Code."</div>
<div className="mt-2 flex gap-2">
<span className="px-2 py-0.5 bg-amber-500/20 border border-amber-500/50 text-[10px] text-amber-300 rounded">VETO POWER</span>
<span className="px-2 py-0.5 bg-amber-500/20 border border-amber-500/50 text-[10px] text-amber-300 rounded">TAX CONTROL</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#030014] relative">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-3xl font-cyber font-bold text-white mb-16">MOBILE INTERFACE LINKED</h2>
<div className="flex flex-col md:flex-row justify-center items-center gap-8">

<div className="w-64 h-[500px] border-4 border-slate-800 rounded-[2rem] bg-black relative overflow-hidden shadow-2xl hover:scale-105 transition-transform">
<div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-black via-cyan-950 to-black">
<div className="w-20 h-20 border-2 border-cyan-500 flex items-center justify-center rounded-lg mb-6 neon-box-cyan">
<span className="font-cyber font-bold text-4xl text-white">X</span>
</div>
<div className="text-white font-cyber font-bold text-xl">WELCOME</div>
<button className="mt-8 px-6 py-2 bg-cyan-600 text-white rounded-full text-xs font-bold">CONNECT</button>
</div>
</div>

<div className="w-64 h-[500px] border-4 border-slate-800 rounded-[2rem] bg-black relative overflow-hidden shadow-2xl hover:scale-105 transition-transform z-10 -mt-0 md:-mt-10">
<div className="p-6">
<div className="text-white font-mono text-xs mb-4 text-center">SELECT CLASS</div>
<div className="space-y-3">
<div className="h-20 bg-blue-900/30 border border-blue-500 rounded p-2 flex items-center gap-3">
<i className="text-blue-400" data-lucide="shield"></i>
<div className="text-white text-sm font-bold">POLICE</div>
</div>
<div className="h-20 bg-pink-900/30 border border-pink-500/50 rounded p-2 flex items-center gap-3 opacity-60">
<i className="text-pink-400" data-lucide="activity"></i>
<div className="text-white text-sm font-bold">DOCTOR</div>
</div>
</div>
</div>
<div className="absolute bottom-6 left-0 w-full text-center">
<div className="w-12 h-1 bg-white/20 mx-auto rounded-full"></div>
</div>
</div>

<div className="w-64 h-[500px] border-4 border-slate-800 rounded-[2rem] bg-black relative overflow-hidden shadow-2xl hover:scale-105 transition-transform">
<div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-black p-4">
<div className="mt-8 mx-auto w-32 h-32 rounded-full border-2 border-cyan-500 relative flex items-center justify-center">
<i className="w-16 h-16 text-white" data-lucide="user"></i>
<div className="absolute bottom-0 right-0 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-black">+</div>
</div>
<div className="mt-8 space-y-2">
<div className="h-2 bg-slate-800 rounded-full w-full"></div>
<div className="h-2 bg-slate-800 rounded-full w-2/3"></div>
</div>
<button className="absolute bottom-8 left-8 right-8 py-3 bg-white text-black font-bold text-xs rounded">FINALIZE</button>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-black pt-12 pb-8">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<span className="font-cyber font-bold text-2xl text-white">SOCIETY<span className="text-cyan-400">X</span></span>
<div className="flex gap-8 text-[10px] font-mono text-slate-500">
<a className="hover:text-cyan-400" href="#">LEGAL</a>
<a className="hover:text-cyan-400" href="#">PRIVACY</a>
<a className="hover:text-cyan-400" href="#">STATUS</a>
</div>
<div className="text-[10px] font-mono text-slate-600">
                SECURE CONNECTION ESTABLISHED
            </div>
</div>
</footer>


    </>
  );
}
