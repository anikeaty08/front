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
<span className="font-cyber font-semibold text-xl text-white tracking-widest group-hover:neon-text-cyan transition-all">SOCIETY<span className="text-cyan-400">X</span> STORE</span>
</div>
<div className="hidden md:flex items-center gap-1">
<div className="px-4 py-1 rounded bg-black/50 border border-green-500/30 flex items-center gap-2">
<div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
<span className="text-[10px] font-mono text-green-400">MARKET: OPEN</span>
</div>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-4 py-1.5 bg-transparent border border-white/10 hover:border-white/30 text-white font-mono text-xs rounded transition-all">
<i className="w-3.5 h-3.5 text-cyan-400" data-lucide="layout-dashboard"></i>
<span className="hidden sm:inline">DASHBOARD</span>
</button>
<button className="flex items-center gap-2 px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 font-mono text-xs hover:bg-cyan-500 hover:text-black transition-all clip-tech group">
<i className="w-3.5 h-3.5 group-hover:text-black" data-lucide="shopping-bag"></i>
                    CART (2)
                </button>
</div>
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

<div className="relative z-10 animate-float">
<i className="w-48 h-48 text-cyan-400 opacity-80 neon-text-cyan filter drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]" data-lucide="box"></i>
</div>

<div className="absolute top-10 -left-10 md:left-0 animate-float glass-panel p-3 rounded border-l-2 border-blue-500 w-32 md:w-40 z-20">
<div className="flex items-center gap-2 mb-2 border-b border-white/10 pb-1">
<i className="w-4 h-4 text-blue-400" data-lucide="zap"></i>
<span className="text-[10px] font-mono text-blue-300">ENERGY</span>
</div>
<div className="text-xs font-mono text-white">99.9% EFFICIENCY</div>
</div>
<div className="absolute bottom-10 -right-4 md:right-0 animate-float glass-panel p-3 rounded border-l-2 border-amber-500 w-32 md:w-40 z-20" style={{animationDelay: '2s'}}>
<div className="flex items-center gap-2 mb-2 border-b border-white/10 pb-1">
<i className="w-4 h-4 text-amber-400" data-lucide="shield-check"></i>
<span className="text-[10px] font-mono text-amber-300">DURABILITY</span>
</div>
<div className="text-xs font-mono text-white">MIL-SPEC GRADE</div>
</div>
</div>

<div className="text-center space-y-6 max-w-2xl px-6 relative z-30">
<h2 className="text-2xl md:text-4xl font-cyber font-semibold text-white uppercase tracking-[0.2em] drop-shadow-xl">
                    Upgrade Your Reality <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 neon-text-cyan">Next-Gen Gear</span>
</h2>
<div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
<button className="relative group px-8 py-4 bg-cyan-600 text-white font-cyber font-semibold tracking-widest clip-tech overflow-hidden">
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
<span className="relative z-10 flex items-center gap-2">
                            BROWSE CATALOG <i className="w-4 h-4" data-lucide="arrow-right"></i>
</span>
</button>
<button className="px-8 py-4 bg-transparent border border-white/20 text-white font-cyber font-semibold tracking-widest clip-tech hover:border-fuchsia-500 hover:text-fuchsia-400 hover:shadow-[0_0_20px_rgba(232,121,249,0.2)] transition-all">
                        VIEW DEALS
                    </button>
</div>
</div>
</div>
</header>

<section className="py-12 border-y border-white/5 bg-black/40 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
<div className="flex flex-col items-center border-r border-white/5 last:border-0">
<span className="text-2xl md:text-3xl font-cyber font-bold text-white">2.5K+</span>
<span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mt-1">Products</span>
</div>
<div className="flex flex-col items-center border-r border-white/5 last:border-0">
<span className="text-2xl md:text-3xl font-cyber font-bold text-cyan-400">99%</span>
<span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mt-1">Satisfaction</span>
</div>
<div className="flex flex-col items-center border-r border-white/5 last:border-0">
<span className="text-2xl md:text-3xl font-cyber font-bold text-fuchsia-400">24/7</span>
<span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mt-1">Support</span>
</div>
<div className="flex flex-col items-center">
<span className="text-2xl md:text-3xl font-cyber font-bold text-amber-400">INSTANT</span>
<span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mt-1">Delivery</span>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="catalog">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-10">
<h2 className="text-4xl md:text-5xl font-cyber font-bold text-white mb-2 neon-text-pink">EQUIPMENT DATABASE</h2>
<p className="text-slate-400 font-mono text-xs tracking-widest">AUTHORIZED PERSONNEL ONLY</p>
</div>

<div className="flex flex-wrap justify-center gap-3 mb-12">
<button className="px-6 py-2 bg-cyan-500/10 border border-cyan-500 text-cyan-400 font-mono text-xs tracking-wide rounded hover:bg-cyan-500 hover:text-black transition-all">ALL</button>
<button className="px-6 py-2 bg-slate-900 border border-white/10 text-slate-400 font-mono text-xs tracking-wide rounded hover:border-white/40 hover:text-white transition-all">CYBERWARE</button>
<button className="px-6 py-2 bg-slate-900 border border-white/10 text-slate-400 font-mono text-xs tracking-wide rounded hover:border-white/40 hover:text-white transition-all">WEAPONS</button>
<button className="px-6 py-2 bg-slate-900 border border-white/10 text-slate-400 font-mono text-xs tracking-wide rounded hover:border-white/40 hover:text-white transition-all">SOFTWARE</button>
<button className="px-6 py-2 bg-slate-900 border border-white/10 text-slate-400 font-mono text-xs tracking-wide rounded hover:border-white/40 hover:text-white transition-all">APPAREL</button>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

<div className="group relative bg-slate-900/40 border border-white/10 hover:border-blue-500 h-64 overflow-hidden clip-card transition-all duration-300 hover:-translate-y-2 cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute top-4 right-4 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all">
<i className="w-6 h-6 text-blue-400 shadow-[0_0_10px_#3b82f6]" data-lucide="eye"></i>
</div>
<div className="absolute top-4 left-4">
<span className="bg-blue-500/20 text-blue-300 text-[9px] px-1.5 py-0.5 rounded border border-blue-500/30">OPTIC</span>
</div>
<div className="absolute bottom-0 p-4 w-full">
<div className="flex justify-between items-end">
<div>
<h3 className="text-sm font-cyber font-bold text-white group-hover:neon-text-cyan leading-tight mb-1">KIROSHI OPTICS</h3>
<div className="text-[10px] font-mono text-slate-400">MK. III</div>
</div>
<span className="text-cyan-400 font-mono font-bold text-sm">2500◈</span>
</div>
</div>
</div>

<div className="group relative bg-slate-900/40 border border-white/10 hover:border-pink-500 h-64 overflow-hidden clip-card transition-all duration-300 hover:-translate-y-2 cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-t from-pink-900/40 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute top-4 right-4 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all">
<i className="w-6 h-6 text-pink-400" data-lucide="heart-pulse"></i>
</div>
<div className="absolute top-4 left-4">
<span className="bg-pink-500/20 text-pink-300 text-[9px] px-1.5 py-0.5 rounded border border-pink-500/30">MED</span>
</div>
<div className="absolute bottom-0 p-4 w-full">
<div className="flex justify-between items-end">
<div>
<h3 className="text-sm font-cyber font-bold text-white leading-tight mb-1">BIOMONITOR</h3>
<div className="text-[10px] font-mono text-slate-400">LIFE SUPPORT</div>
</div>
<span className="text-cyan-400 font-mono font-bold text-sm">1200◈</span>
</div>
</div>
</div>

<div className="group relative bg-slate-900/40 border border-white/10 hover:border-amber-400 h-64 overflow-hidden clip-card transition-all duration-300 hover:-translate-y-2 cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute top-4 right-4 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all">
<i className="w-6 h-6 text-amber-400" data-lucide="book"></i>
</div>
<div className="absolute top-4 left-4">
<span className="bg-amber-500/20 text-amber-300 text-[9px] px-1.5 py-0.5 rounded border border-amber-500/30">SKILL</span>
</div>
<div className="absolute bottom-0 p-4 w-full">
<div className="flex justify-between items-end">
<div>
<h3 className="text-sm font-cyber font-bold text-white leading-tight mb-1">KUNG FU CHIP</h3>
<div className="text-[10px] font-mono text-slate-400">SKILLSHARD</div>
</div>
<span className="text-cyan-400 font-mono font-bold text-sm">500◈</span>
</div>
</div>
</div>

<div className="group relative bg-slate-900/40 border border-white/10 hover:border-teal-400 h-64 overflow-hidden clip-card transition-all duration-300 hover:-translate-y-2 cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute top-4 right-4 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all">
<i className="w-6 h-6 text-teal-400" data-lucide="cpu"></i>
</div>
<div className="absolute top-4 left-4">
<span className="bg-teal-500/20 text-teal-300 text-[9px] px-1.5 py-0.5 rounded border border-teal-500/30">TECH</span>
</div>
<div className="absolute bottom-0 p-4 w-full">
<div className="flex justify-between items-end">
<div>
<h3 className="text-sm font-cyber font-bold text-white leading-tight mb-1">SANDY DECK</h3>
<div className="text-[10px] font-mono text-slate-400">OPERATING SYS</div>
</div>
<span className="text-cyan-400 font-mono font-bold text-sm">8500◈</span>
</div>
</div>
</div>

<div className="group relative bg-slate-900/40 border border-white/10 hover:border-green-500 h-64 overflow-hidden clip-card transition-all duration-300 hover:-translate-y-2 cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute top-4 right-4 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all">
<i className="w-6 h-6 text-green-400" data-lucide="wifi"></i>
</div>
<div className="absolute top-4 left-4">
<span className="bg-green-500/20 text-green-300 text-[9px] px-1.5 py-0.5 rounded border border-green-500/30">NET</span>
</div>
<div className="absolute bottom-0 p-4 w-full">
<div className="flex justify-between items-end">
<div>
<h3 className="text-sm font-cyber font-bold text-white leading-tight mb-1">ICE BREAKER</h3>
<div className="text-[10px] font-mono text-slate-400">DAEMON v1.0</div>
</div>
<span className="text-cyan-400 font-mono font-bold text-sm">300◈</span>
</div>
</div>
</div>

<div className="group relative bg-slate-900/40 border border-white/10 hover:border-yellow-400 h-64 overflow-hidden clip-card transition-all duration-300 hover:-translate-y-2 cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-t from-yellow-900/40 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute top-4 right-4 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all">
<i className="w-6 h-6 text-yellow-400" data-lucide="crown"></i>
</div>
<div className="absolute top-4 left-4">
<span className="bg-yellow-500/20 text-yellow-300 text-[9px] px-1.5 py-0.5 rounded border border-yellow-500/30">LUX</span>
</div>
<div className="absolute bottom-0 p-4 w-full">
<div className="flex justify-between items-end">
<div>
<h3 className="text-sm font-cyber font-bold text-white leading-tight mb-1">GOLD SKIN</h3>
<div className="text-[10px] font-mono text-slate-400">COSMETIC</div>
</div>
<span className="text-cyan-400 font-mono font-bold text-sm">9999◈</span>
</div>
</div>
</div>

<div className="group relative bg-slate-900/40 border border-white/10 hover:border-purple-500 h-64 overflow-hidden clip-card transition-all duration-300 hover:-translate-y-2 cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute top-4 right-4 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all">
<i className="w-6 h-6 text-purple-400" data-lucide="spray-can"></i>
</div>
<div className="absolute top-4 left-4">
<span className="bg-purple-500/20 text-purple-300 text-[9px] px-1.5 py-0.5 rounded border border-purple-500/30">ART</span>
</div>
<div className="absolute bottom-0 p-4 w-full">
<div className="flex justify-between items-end">
<div>
<h3 className="text-sm font-cyber font-bold text-white leading-tight mb-1">NEON PAINT</h3>
<div className="text-[10px] font-mono text-slate-400">CUSTOMIZER</div>
</div>
<span className="text-cyan-400 font-mono font-bold text-sm">150◈</span>
</div>
</div>
</div>

<div className="group relative bg-slate-900/40 border border-white/10 hover:border-orange-500 h-64 overflow-hidden clip-card transition-all duration-300 hover:-translate-y-2 cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute top-4 right-4 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all">
<i className="w-6 h-6 text-orange-400" data-lucide="package"></i>
</div>
<div className="absolute top-4 left-4">
<span className="bg-orange-500/20 text-orange-300 text-[9px] px-1.5 py-0.5 rounded border border-orange-500/30">KIT</span>
</div>
<div className="absolute bottom-0 p-4 w-full">
<div className="flex justify-between items-end">
<div>
<h3 className="text-sm font-cyber font-bold text-white leading-tight mb-1">SURVIVAL KIT</h3>
<div className="text-[10px] font-mono text-slate-400">ESSENTIALS</div>
</div>
<span className="text-cyan-400 font-mono font-bold text-sm">450◈</span>
</div>
</div>
</div>

<div className="group relative bg-slate-900/40 border border-white/10 hover:border-indigo-400 h-64 overflow-hidden clip-card transition-all duration-300 hover:-translate-y-2 cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute top-4 right-4 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all">
<i className="w-6 h-6 text-indigo-400" data-lucide="shield"></i>
</div>
<div className="absolute top-4 left-4">
<span className="bg-indigo-500/20 text-indigo-300 text-[9px] px-1.5 py-0.5 rounded border border-indigo-500/30">ARMOR</span>
</div>
<div className="absolute bottom-0 p-4 w-full">
<div className="flex justify-between items-end">
<div>
<h3 className="text-sm font-cyber font-bold text-white leading-tight mb-1">KEVLAR VEST</h3>
<div className="text-[10px] font-mono text-slate-400">LIGHT ARMOR</div>
</div>
<span className="text-cyan-400 font-mono font-bold text-sm">800◈</span>
</div>
</div>
</div>

<div className="group relative bg-slate-900/40 border border-white/10 hover:border-red-600 h-64 overflow-hidden clip-card transition-all duration-300 hover:-translate-y-2 cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-t from-red-900/40 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute top-4 right-4 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all">
<i className="w-6 h-6 text-red-500" data-lucide="crosshair"></i>
</div>
<div className="absolute top-4 left-4">
<span className="bg-red-500/20 text-red-300 text-[9px] px-1.5 py-0.5 rounded border border-red-500/30">WEAPON</span>
</div>
<div className="absolute bottom-0 p-4 w-full">
<div className="flex justify-between items-end">
<div>
<h3 className="text-sm font-cyber font-bold text-white leading-tight mb-1">THERMAL BLADE</h3>
<div className="text-[10px] font-mono text-red-500">MELEE</div>
</div>
<span className="text-cyan-400 font-mono font-bold text-sm">3200◈</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#050510] relative overflow-hidden border-t border-white/5">
<div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-cyan-900/10 to-transparent"></div>
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

<div>
<div className="flex items-center gap-3 mb-6">
<div className="w-1 h-8 bg-cyan-500"></div>
<h3 className="text-3xl font-cyber font-bold text-white uppercase">Customize <br/>Loadout</h3>
</div>
<div className="glass-panel p-6 space-y-6 rounded-lg border-cyan-500/20">
<div>
<label className="text-xs font-mono text-cyan-400 block mb-3">MATERIAL FINISH</label>
<div className="grid grid-cols-3 gap-2">
<button className="py-2 bg-white/5 border border-white/10 rounded hover:bg-cyan-500/20 hover:border-cyan-500 text-xs text-white font-mono transition-all">MATTE</button>
<button className="py-2 bg-cyan-500/20 border border-cyan-500 rounded text-xs text-white font-mono shadow-[0_0_10px_rgba(34,211,238,0.3)]">CHROME</button>
<button className="py-2 bg-white/5 border border-white/10 rounded hover:bg-cyan-500/20 hover:border-cyan-500 text-xs text-white font-mono transition-all">NEON</button>
</div>
</div>
<div>
<label className="text-xs font-mono text-cyan-400 block mb-3">POWER CORE</label>
<div className="flex items-center justify-between bg-black p-1 rounded border border-white/10">
<button className="flex-1 py-1.5 rounded text-xs text-slate-400 hover:text-white font-mono">STANDARD</button>
<button className="flex-1 py-1.5 rounded bg-cyan-900/50 text-white font-mono shadow-sm">OVERCLOCKED</button>
</div>
</div>
<div>
<label className="text-xs font-mono text-cyan-400 block mb-3">CALIBRATION LEVEL</label>
<div className="h-2 bg-slate-900 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-gradient-to-r from-cyan-600 to-fuchsia-600"></div>
</div>
<div className="flex justify-between mt-1 text-[9px] text-slate-500 font-mono">
<span>FACTORY</span>
<span>CUSTOM</span>
</div>
</div>
</div>
</div>

<div className="relative h-[400px] border border-white/10 bg-black/50 rounded-lg flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 cyber-grid opacity-20"></div>

<div className="absolute inset-0 bg-gradient-to-b from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 h-[20%] animate-[scan_3s_linear_infinite] border-y border-cyan-500/30"></div>

<div className="relative z-10 flex flex-col items-center hologram-effect">
<div className="w-40 h-40 border border-cyan-500/30 flex items-center justify-center bg-cyan-500/5 mb-4 shadow-[0_0_30px_rgba(34,211,238,0.2)]">
<i className="w-20 h-20 text-cyan-400" data-lucide="cpu"></i>
</div>
<div className="px-4 py-1 bg-black border border-cyan-500 text-cyan-400 text-xs font-mono tracking-widest rounded-full">
                        RENDERING PREVIEW...
                    </div>
</div>

<div className="absolute top-4 left-4 text-[10px] font-mono text-slate-500 space-y-1">
<div>SKU: #992XA-MOD</div>
<div>COMPATIBILITY: 100%</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black/80 border-y border-white/5 relative">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl font-cyber font-bold text-white mb-12 flex items-center gap-3">
<span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
                SECURE DELIVERY PROTOCOL
            </h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-2 relative">

<div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-slate-800 z-0"></div>

<div className="relative z-10 p-6 bg-slate-950 border border-slate-800 hover:border-cyan-500 transition-colors group h-full">
<div className="w-16 h-16 bg-slate-900 border border-slate-700 flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]">
<i className="w-8 h-8 text-slate-500 group-hover:text-cyan-500 transition-colors" data-lucide="shopping-cart"></i>
</div>
<h4 className="text-lg font-semibold text-white font-cyber mb-2">ORDER LOGGED</h4>
<p className="text-xs text-slate-500 font-mono">Encrypted transaction verified.</p>
</div>

<div className="relative z-10 p-6 bg-slate-950 border border-slate-800 hover:border-blue-500 transition-colors group h-full">
<div className="w-16 h-16 bg-slate-900 border border-slate-700 flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]">
<i className="w-8 h-8 text-slate-500 group-hover:text-blue-500 transition-colors" data-lucide="package-search"></i>
</div>
<h4 className="text-lg font-semibold text-white font-cyber mb-2">PROCESSING</h4>
<p className="text-xs text-slate-500 font-mono">Automated drone retrieval.</p>
</div>

<div className="relative z-10 p-6 bg-slate-950 border border-slate-800 hover:border-indigo-500 transition-colors group h-full">
<div className="w-16 h-16 bg-slate-900 border border-slate-700 flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]">
<i className="w-8 h-8 text-slate-500 group-hover:text-indigo-500 transition-colors" data-lucide="truck"></i>
</div>
<h4 className="text-lg font-semibold text-white font-cyber mb-2">DISPATCH</h4>
<p className="text-xs text-slate-500 font-mono">Sub-orbital transport route.</p>
</div>

<div className="relative z-10 p-6 bg-slate-950 border border-slate-800 hover:border-green-500 transition-colors group h-full">
<div className="w-16 h-16 bg-slate-900 border border-slate-700 flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.2)]">
<i className="w-8 h-8 text-slate-500 group-hover:text-green-500 transition-colors" data-lucide="map-pin"></i>
</div>
<h4 className="text-lg font-semibold text-white font-cyber mb-2">ARRIVAL</h4>
<p className="text-xs text-slate-500 font-mono">Drop-pod secure landing.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#060611]">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-10">

<div className="lg:col-span-1 space-y-6">
<div className="glass-panel p-6 border-t-2 border-t-cyan-500 relative">
<div className="absolute top-2 right-2 text-[10px] font-mono text-cyan-500 animate-pulse">LIVE TRENDS</div>
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 bg-slate-800 rounded border border-white/10 flex items-center justify-center">
<i className="text-green-400" data-lucide="trending-up"></i>
</div>
<div>
<div className="font-bold text-white font-cyber text-lg">MARKET CAP</div>
<div className="text-xs text-slate-400 font-mono">VOL: HIGH</div>
</div>
</div>

<div className="space-y-4">
<div>
<div className="flex justify-between text-[10px] font-mono text-slate-400 mb-1">
<span>CYBERWARE DEMAND</span> <span>85%</span>
</div>
<div className="h-1.5 w-full bg-slate-900 rounded-full">
<div className="h-full bg-cyan-500 w-[85%] shadow-[0_0_5px_#06b6d4]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] font-mono text-slate-400 mb-1">
<span>WEAPON SALES</span> <span>62%</span>
</div>
<div className="h-1.5 w-full bg-slate-900 rounded-full">
<div className="h-full bg-orange-500 w-[62%] shadow-[0_0_5px_#f97316]"></div>
</div>
</div>
</div>

<div className="mt-6 pt-6 border-t border-white/10">
<div className="flex justify-between items-center bg-black/40 p-3 rounded border border-yellow-500/20">
<span className="text-xs text-yellow-500 font-mono">1 ◈ COIN</span>
<span className="text-xl font-bold font-cyber text-white">= $1.42 USD</span>
</div>
</div>
</div>

<div className="glass-panel p-5">
<h3 className="text-sm font-bold text-white font-cyber mb-4">MEMBER REWARDS</h3>
<div className="space-y-2">
<div className="flex items-center gap-3 text-xs text-slate-300 p-2 bg-white/5 border-l-2 border-yellow-500">
<i className="w-3 h-3 text-yellow-500" data-lucide="gift"></i>
<span>First Purchase: -10% OFF</span>
</div>
<div className="flex items-center gap-3 text-xs text-slate-300 p-2 bg-white/5 border-l-2 border-purple-500">
<i className="w-3 h-3 text-purple-500" data-lucide="star"></i>
<span>Review Item: +50 Credits</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-2">
<div className="flex justify-between items-end mb-6">
<h2 className="text-3xl font-cyber font-bold text-white">FLASH SALES</h2>
<div className="flex gap-2">
<button className="px-3 py-1 bg-red-600/20 text-red-400 border border-red-600/50 text-[10px] font-mono rounded animate-pulse">ENDING SOON</button>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-4">

<div className="bg-slate-900 border border-white/10 p-4 relative group hover:border-cyan-400 transition-all">
<div className="absolute top-2 right-2 text-[10px] text-green-400 font-mono bg-green-900/30 px-1 rounded">-20%</div>
<div className="h-32 bg-black/40 rounded mb-3 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-transparent"></div>
<i className="w-12 h-12 text-cyan-200 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]" data-lucide="battery"></i>
</div>
<h4 className="font-bold text-white font-cyber">ENERGY CELL</h4>
<div className="flex justify-between items-center mt-2">
<span className="text-[10px] text-slate-400 font-mono line-through">100◈</span>
<span className="font-bold text-yellow-400 text-sm">80◈</span>
</div>
</div>

<div className="bg-slate-900 border border-white/10 p-4 relative group hover:border-fuchsia-400 transition-all">
<div className="absolute top-2 right-2 text-[10px] text-green-400 font-mono bg-green-900/30 px-1 rounded">-15%</div>
<div className="h-32 bg-black/40 rounded mb-3 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-fuchsia-900/20 to-transparent"></div>
<i className="w-12 h-12 text-fuchsia-200 drop-shadow-[0_0_10px_rgba(232,121,249,0.5)]" data-lucide="zap"></i>
</div>
<h4 className="font-bold text-white font-cyber">PLASMA COIL</h4>
<div className="flex justify-between items-center mt-2">
<span className="text-[10px] text-slate-400 font-mono line-through">200◈</span>
<span className="font-bold text-yellow-400 text-sm">170◈</span>
</div>
</div>

<div className="bg-slate-900 border border-white/10 p-4 relative group hover:border-green-400 transition-all">
<div className="absolute top-2 right-2 text-[10px] text-green-400 font-mono bg-green-900/30 px-1 rounded">-30%</div>
<div className="h-32 bg-black/40 rounded mb-3 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent"></div>
<i className="w-12 h-12 text-green-200 drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]" data-lucide="flask-conical"></i>
</div>
<h4 className="font-bold text-white font-cyber">STIM PACK</h4>
<div className="flex justify-between items-center mt-2">
<span className="text-[10px] text-slate-400 font-mono line-through">60◈</span>
<span className="font-bold text-yellow-400 text-sm">42◈</span>
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
<i className="w-16 h-16 text-amber-500 relative z-10 animate-pulse" data-lucide="gem"></i>
</div>
<h2 className="text-5xl font-cyber font-bold text-transparent bg-clip-text bg-gradient-to-b from-amber-300 to-amber-700 mb-4 neon-text-gold">ELITE MEMBERSHIP</h2>
<p className="text-amber-200/60 font-mono text-sm tracking-[0.3em] mb-12">UNLOCK EXCLUSIVE GEAR // PRESTIGE RANK 100+</p>
<div className="glass-panel border border-amber-500/30 p-8 rounded-xl shadow-[0_0_50px_rgba(245,158,11,0.1)] backdrop-blur-xl">
<div className="flex items-center justify-between border-b border-amber-500/20 pb-4 mb-4">
<span className="font-mono text-amber-500">BENEFITS PACKAGE</span>
<span className="font-mono text-amber-500">COST: 5000◈ / YR</span>
</div>
<div className="flex items-center gap-6 text-left">
<div className="w-24 h-24 bg-gradient-to-br from-amber-600 to-amber-900 rounded-lg flex items-center justify-center border border-amber-400 shadow-lg">
<span className="text-4xl">👑</span>
</div>
<div>
<h3 className="text-2xl font-bold text-white font-cyber">BLACK CARD ACCESS</h3>
<div className="text-sm text-amber-400 font-mono mt-1">"Limitless Possibilities."</div>
<div className="mt-2 flex gap-2">
<span className="px-2 py-0.5 bg-amber-500/20 border border-amber-500/50 text-[10px] text-amber-300 rounded">EARLY ACCESS</span>
<span className="px-2 py-0.5 bg-amber-500/20 border border-amber-500/50 text-[10px] text-amber-300 rounded">FREE SHIPPING</span>
</div>
</div>
<div className="ml-auto">
<button className="px-6 py-2 bg-amber-500 text-black font-bold font-mono text-xs rounded hover:bg-white transition-colors">UPGRADE</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#030014] relative">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-3xl font-cyber font-bold text-white mb-16">TRADE ON THE GO</h2>
<div className="flex flex-col md:flex-row justify-center items-center gap-8">

<div className="w-64 h-[500px] border-4 border-slate-800 rounded-[2rem] bg-black relative overflow-hidden shadow-2xl hover:scale-105 transition-transform">
<div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-black via-cyan-950 to-black">
<div className="w-20 h-20 border-2 border-cyan-500 flex items-center justify-center rounded-lg mb-6 neon-box-cyan">
<span className="font-cyber font-bold text-4xl text-white">X</span>
</div>
<div className="text-white font-cyber font-bold text-xl">STORE APP</div>
<button className="mt-8 px-6 py-2 bg-cyan-600 text-white rounded-full text-xs font-bold">DOWNLOAD</button>
</div>
</div>

<div className="w-64 h-[500px] border-4 border-slate-800 rounded-[2rem] bg-black relative overflow-hidden shadow-2xl hover:scale-105 transition-transform z-10 -mt-0 md:-mt-10">
<div className="p-6">
<div className="text-white font-mono text-xs mb-4 text-center">HOT ITEMS</div>
<div className="space-y-3">
<div className="h-20 bg-blue-900/30 border border-blue-500 rounded p-2 flex items-center gap-3">
<i className="text-blue-400" data-lucide="box"></i>
<div className="text-white text-sm font-bold">MYSTERY BOX</div>
</div>
<div className="h-20 bg-pink-900/30 border border-pink-500/50 rounded p-2 flex items-center gap-3 opacity-60">
<i className="text-pink-400" data-lucide="zap"></i>
<div className="text-white text-sm font-bold">ENERGY PACK</div>
</div>
</div>
</div>
<div className="absolute bottom-6 left-0 w-full text-center">
<div className="w-12 h-1 bg-white/20 mx-auto rounded-full"></div>
</div>
</div>

<div className="w-64 h-[500px] border-4 border-slate-800 rounded-[2rem] bg-black relative overflow-hidden shadow-2xl hover:scale-105 transition-transform">
<div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-black p-4">
<div className="mt-8 mx-auto w-32 h-32 rounded-lg border-2 border-cyan-500 relative flex items-center justify-center bg-slate-900">
<i className="w-16 h-16 text-white" data-lucide="qr-code"></i>
</div>
<div className="mt-8 text-center">
<h4 className="text-white font-bold mb-2">SCAN &amp; PAY</h4>
<p className="text-xs text-slate-500">Secure instant transactions.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-black pt-12 pb-8">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<span className="font-cyber font-bold text-2xl text-white">SOCIETY<span className="text-cyan-400">X</span> STORE</span>
<div className="flex gap-8 text-[10px] font-mono text-slate-500">
<a className="hover:text-cyan-400" href="#">SHIPPING</a>
<a className="hover:text-cyan-400" href="#">RETURNS</a>
<a className="hover:text-cyan-400" href="#">TERMS</a>
</div>
<div className="text-[10px] font-mono text-slate-600">
                ENCRYPTED SSL CONNECTION
            </div>
</div>
</footer>


    </>
  );
}
