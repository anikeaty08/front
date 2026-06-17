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



        // Initialize Lucide icons
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
      

<div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
<div className="absolute inset-0 bg-grid-slate opacity-30"></div>
<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[120%] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-[#020204]/80 to-transparent blur-[80px]"></div>
</div>

<nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#030508]/80 backdrop-blur-xl">
<div className="flex max-w-7xl mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<div className="flex items-center gap-8">
<a className="flex items-center gap-3 group" href="#">

<img alt="DELFLO Logo" className="transition-transform group-hover:scale-105 w-auto h-20 object-contain drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]" src="https://i.imgur.com/9YC6WFZ.png"/>
<div className="flex flex-col">
</div>
</a>
<div className="hidden md:flex items-center gap-8 ml-4">
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#solutions">Solutions</a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#capabilities">Capabilities</a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#about">About Us</a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#careers">Careers</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-white/10 border border-white/10 px-5 py-2 text-xs font-semibold text-white transition-all hover:bg-white/20 hover:border-white/20" href="#contact">
<span className="">Contact</span>
</a>
</div>
</div>
</nav>
<main className="relative">

<section className="overflow-hidden min-h-[90vh] flex pt-20 relative items-center justify-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] z-0 pointer-events-none select-none opacity-40">
<div className="relative w-full h-full flex items-center justify-center">
<div className="absolute inset-0 w-full h-full rounded-full animate-[radar-scan_12s_linear_infinite]">
<div className="radar-sweep w-full h-full rounded-full"></div>
<div className="absolute top-0 left-1/2 w-[1px] h-1/2 bg-gradient-to-b from-cyan-300 via-cyan-500 to-transparent origin-bottom -translate-x-1/2 shadow-[0_0_30px_rgba(34,211,238,1)]"></div>
</div>

<div className="absolute w-[80%] h-[80%] rounded-full border border-cyan-500/10 opacity-60"></div>
<div className="absolute w-[60%] h-[60%] rounded-full border border-dashed border-cyan-500/10 opacity-40 animate-[spin-slow_60s_linear_infinite]"></div>
<div className="absolute w-[40%] h-[40%] rounded-full border border-cyan-500/20 opacity-30"></div>

<div className="absolute w-full h-full opacity-10">
<div className="absolute top-0 bottom-0 left-1/2 w-px bg-cyan-400"></div>
<div className="absolute left-0 right-0 top-1/2 h-px bg-cyan-400"></div>
</div>
</div>
</div>

<div className="absolute top-[20%] left-[5%] md:left-[10%] hidden lg:block z-10 opacity-80 animate-float">
<div className="relative group">
<div className="absolute -inset-0.5 bg-cyan-500/30 rounded blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
<div className="relative w-56 rounded bg-[#030508]/90 border border-cyan-500/30 backdrop-blur-md overflow-hidden">
<div className="h-1 w-full bg-cyan-500/50"></div>
<div className="p-2 relative">
<div className="absolute top-2 right-2 flex gap-1">
<div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
<div className="w-1 h-1 bg-cyan-400/50 rounded-full"></div>
</div>
<div className="h-28 w-full overflow-hidden rounded border border-white/5 relative">
<img alt="Target 01" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500 mix-blend-luminosity" src="https://i.imgur.com/OaIOW5N.png"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
<div className="absolute inset-0 scanline opacity-30 pointer-events-none"></div>
<div className="absolute bottom-1 left-2 text-[10px] font-mono text-cyan-400">CAM_01 // LIVE</div>
</div>
<div className="mt-2 flex justify-between items-end">
<div className="flex flex-col">
<span className="text-[9px] text-slate-500 font-mono uppercase">Target ID</span>
<span className="text-xs font-bold text-white font-mono">XJ-900</span>
</div>
<div className="text-[10px] text-cyan-500 font-mono">98% MATCH</div>
</div>
</div>
</div>

<div className="absolute -bottom-12 -right-12 w-24 h-[1px] bg-cyan-500/20 rotate-45"></div>
</div>
</div>

<div className="absolute top-[18%] right-[5%] md:right-[10%] hidden lg:block z-10 opacity-90 animate-float-delayed">
<div className="relative group">

<div className="absolute -top-3 left-0 flex gap-1">
<div className="w-12 h-1 bg-indigo-500/40"></div>
<div className="w-2 h-1 bg-indigo-500/20"></div>
</div>
<div className="absolute -inset-0.5 bg-indigo-500/30 rounded blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
<div className="relative w-64 rounded bg-[#030508]/90 border border-indigo-500/30 backdrop-blur-md overflow-hidden">
<div className="p-3 relative">
<div className="flex justify-between items-center mb-2 border-b border-white/5 pb-2">
<div className="flex items-center gap-2">
<svg className="lucide lucide-crosshair w-3 h-3 text-indigo-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="22" x2="18" y1="12" y2="12"></line><line x1="6" x2="2" y1="12" y2="12"></line><line x1="12" x2="12" y1="6" y2="2"></line><line x1="12" x2="12" y1="22" y2="18"></line></svg>
<span className="text-[9px] text-indigo-300 font-mono uppercase tracking-widest">AERIAL RECON</span>
</div>
<span className="text-[9px] text-indigo-500 font-mono animate-blink">REC ●</span>
</div>
<div className="flex gap-2">

<div className="flex flex-col justify-between w-2 py-1">
<div className="w-1 h-8 bg-indigo-500/20 rounded-full relative overflow-hidden">
<div className="absolute bottom-0 w-full h-3/4 bg-indigo-500"></div>
</div>
<div className="w-1 h-8 bg-indigo-500/20 rounded-full relative overflow-hidden">
<div className="absolute bottom-0 w-full h-1/2 bg-indigo-400/70"></div>
</div>
</div>

<div className="h-28 flex-1 overflow-hidden rounded-sm border border-indigo-500/20 relative group-hover:border-indigo-500/50 transition-colors">
<img alt="Helicopter" className="w-full h-full object-cover opacity-70 grayscale group-hover:grayscale-0 transition-all duration-500 mix-blend-luminosity" src="https://imgur.com/CKBMkw3.png"/>
<div className="absolute inset-0 bg-indigo-900/10 mix-blend-overlay"></div>

<div className="absolute inset-0 flex items-center justify-center opacity-40">
<div className="w-full h-[1px] bg-indigo-500/50"></div>
<div className="absolute w-[1px] h-full bg-indigo-500/50"></div>
<div className="absolute w-12 h-12 border border-indigo-400 rounded-full border-dashed animate-[spin_10s_linear_infinite]"></div>
</div>

<div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-white/50"></div>
<div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-white/50"></div>
<div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-white/50"></div>
<div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-white/50"></div>
</div>
</div>
<div className="mt-2 grid grid-cols-2 gap-2 text-[9px] font-mono text-slate-400">
<div className="flex justify-between bg-white/5 px-1.5 py-0.5 rounded">
<span>ALT</span>
<span className="text-white">12,400</span>
</div>
<div className="flex justify-between bg-white/5 px-1.5 py-0.5 rounded">
<span>SPD</span>
<span className="text-white">142kn</span>
</div>
</div>
</div>
</div>

<div className="absolute -top-8 -left-8 w-16 h-[1px] bg-indigo-500/20 -rotate-45"></div>
</div>
</div>

<div className="absolute bottom-[25%] left-[5%] md:left-[8%] hidden lg:block z-10 opacity-80 animate-float-slow">
<div className="relative group">
<div className="absolute -inset-0.5 bg-emerald-500/30 rounded blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
<div className="relative w-60 rounded-lg bg-[#030508]/90 border border-emerald-500/30 backdrop-blur-md overflow-hidden">

<div className="bg-emerald-950/30 border-b border-emerald-500/20 px-3 py-1.5 flex justify-between items-center">
<span className="text-[9px] text-emerald-400 font-mono font-bold tracking-tight">STEALTH INTERCEPT</span>
<div className="flex gap-0.5">
<div className="w-1 h-1 bg-emerald-500 rounded-full"></div>
<div className="w-1 h-1 bg-emerald-500/30 rounded-full"></div>
<div className="w-1 h-1 bg-emerald-500/30 rounded-full"></div>
</div>
</div>
<div className="p-0 relative">
<div className="h-32 w-full overflow-hidden relative">
<img alt="Stealth Plane" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500 mix-blend-luminosity" src="https://imgur.com/GVFX9EV.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#030508] to-transparent"></div>

<div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="absolute bottom-2 left-3 right-3">
<div className="flex justify-between items-end mb-1">
<span className="text-[10px] text-white font-mono">LOCK_ON</span>
<span className="text-[9px] text-emerald-500 font-mono">ACQUIRED</span>
</div>

<div className="flex items-end gap-0.5 h-4 opacity-70">
<div className="w-1 h-2 bg-emerald-500 animate-[pulse_1s_ease-in-out_infinite]"></div>
<div className="w-1 h-3 bg-emerald-500 animate-[pulse_1.2s_ease-in-out_infinite]"></div>
<div className="w-1 h-full bg-emerald-500 animate-[pulse_0.8s_ease-in-out_infinite]"></div>
<div className="w-1 h-2 bg-emerald-500 animate-[pulse_1.5s_ease-in-out_infinite]"></div>
<div className="w-1 h-1 bg-emerald-500 animate-[pulse_1s_ease-in-out_infinite]"></div>
<div className="flex-1 border-b border-emerald-500/30 mb-0.5 ml-1"></div>
</div>
</div>
</div>
</div>
<div className="px-3 py-2 bg-white/5 border-t border-white/5 flex justify-between items-center">
<span className="text-[9px] text-slate-400 font-mono">SIG: LOW_OBSERVABLE</span>
<svg className="lucide lucide-wifi w-3 h-3 text-emerald-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
</div>
</div>
</div>
</div>

<div className="absolute bottom-[20%] right-[5%] md:right-[10%] hidden lg:block z-10 opacity-80 animate-[float_12s_ease-in-out_infinite_reverse]">
<div className="relative group">
<div className="absolute -inset-0.5 bg-blue-500/30 rounded blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
<div className="relative w-48 rounded bg-[#030508]/90 border border-blue-500/30 backdrop-blur-md overflow-hidden">
<div className="p-2 relative">
<div className="flex justify-between items-center mb-1">
<span className="text-[9px] text-blue-400 font-mono uppercase">SECTOR SCAN</span>
<svg className="lucide lucide-activity w-3 h-3 text-blue-400" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<div className="h-24 w-full overflow-hidden rounded border border-white/5 relative">
<img alt="Sector Scan" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500 mix-blend-luminosity" src="https://i.imgur.com/PvhjMnQ.png"/>
<div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay"></div>
<div className="absolute inset-0 scanline opacity-30 pointer-events-none"></div>

<div className="absolute inset-0 flex items-center justify-center opacity-30">
<div className="w-8 h-8 border border-white rounded-full"></div>
<div className="w-1 h-1 bg-white rounded-full absolute"></div>
</div>
</div>
<div className="mt-2 grid grid-cols-2 gap-1">
<div className="bg-blue-500/10 h-1 rounded w-full"></div>
<div className="bg-blue-500/10 h-1 rounded w-3/4"></div>
</div>
</div>
<div className="h-1 w-full bg-blue-500/50"></div>
</div>
</div>
</div>

<div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-950/30 px-4 py-1.5 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.2)]">
<div className="h-1.5 w-1.5 animate-pulse bg-blue-400 rounded-full"></div>
<span className="text-[10px] font-semibold tracking-widest uppercase text-blue-300">
                        Mission Critical Engineering
                    </span>
</div>
<h1 className="md:text-7xl leading-[1.1] uppercase text-5xl font-bold text-white tracking-tight mb-6">Innovating for <span className="text-gradient-cyan">National Security.</span></h1>
<p className="text-lg text-slate-400 font-light max-w-2xl mx-auto leading-relaxed mb-10">
                    Precision Engineering and Advanced Solutions for the US Military and Government. 
                    Delivering the future of defense infrastructure today.
                </p>
<div className="flex items-center justify-center gap-4">
<a className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-cyan-600 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_35px_rgba(34,211,238,0.5)]" href="#capabilities">
<span className="">EXPLORE OUR CAPABILITIES</span>
<svg className="lucide lucide-chevron-right w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>
</section>

<section className="sm:pt-24 md:pb-10 md:pt-2 text-center max-w-7xl mx-auto pt-24 pb-20 relative items-center justify-center">

<div className="pointer-events-none absolute inset-0 -z-10">
<div className="absolute left-1/2 -translate-x-1/2 -top-16 w-[42rem] h-[42rem] rounded-full bg-gradient-to-b from-indigo-600/15 via-blue-500/10 to-transparent blur-3xl"></div>
</div>
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">

<div className="grid grid-cols-1 sm:grid-cols-3 gap-5">

<div className="group overflow-hidden sm:p-8 bg-white/5 border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative">
<div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 1px, transparent 1px)', backgroundSize: '14px 14px'}}></div>
<div className="flex text-center bg-slate-50/5 w-10 h-10 ring-white/20 ring-1 rounded-full relative shadow-lg items-center justify-center mx-auto">
<svg className="lucide lucide-settings animate-[spin_4s_linear_infinite] w-[20px] h-[20px]" data-icon-replaced="true" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<h3 className="sm:text-3xl text-2xl font-semibold tracking-tight font-manrope text-center mt-5 relative">Custom Manufacturing</h3>
<p className="sm:text-base text-sm text-white/70 text-center mt-2 relative">High-precision parts and components tailored to mission-critical specs.</p>
</div>

<div className="group overflow-hidden sm:p-8 bg-white/5 border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative">
<div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 1px, transparent 1px)', backgroundSize: '14px 14px'}}></div>
<div className="flex bg-slate-50/5 w-10 h-10 ring-white/20 ring-1 rounded-full relative shadow-lg items-center justify-center mx-auto">
<svg className="lucide lucide-satellite-dish" data-icon-replaced="true" data-icon-set="lucide" data-lucide="satellite-dish" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 10a7.31 7.31 0 0 0 10 10Z"></path><path d="m9 15 3-3"></path><path d="M17 13a6 6 0 0 0-6-6"></path><path d="M21 13A10 10 0 0 0 11 3"></path></svg><style>
    [data-element-id="aura-emisa23xz2aism1fo"] {
        animation: satellite-scan 6s ease-in-out infinite;
        transform-origin: center;
    }
    @keyframes satellite-scan {
        0%, 100% { transform: rotate(-15deg); }
        50% { transform: rotate(15deg); }
    }
</style><span className="absolute inset-0 rounded-full border border-cyan-500/20 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] pointer-events-none"></span><span className="absolute inset-0 rounded-full border border-cyan-500/10 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite_1.5s] pointer-events-none"></span><div className="absolute top-0 right-0 -mt-0.5 -mr-0.5 h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</div>
</div>
<h3 className="sm:text-3xl text-2xl font-semibold tracking-tight font-manrope text-center mt-5 relative">Advanced Machinary</h3>
<p className="sm:text-base text-sm text-white/70 text-center mt-2 relative">State-of-the-art machinery and automated systems for defense applications.</p>
</div>

<div className="group overflow-hidden sm:p-8 bg-white/5 border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative">
<div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 1px, transparent 1px)', backgroundSize: '14px 14px'}}></div>
<div className="flex bg-slate-50/5 w-10 h-10 ring-white/20 ring-1 rounded-full relative shadow-lg items-center justify-center mx-auto">
<svg className="lucide lucide-microchip" data-icon-replaced="true" data-icon-set="lucide" data-lucide="microchip" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 12h2"></path><path d="M18 16h2"></path><path d="M18 20h2"></path><path d="M18 4h2"></path><path d="M18 8h2"></path><path d="M4 12h2"></path><path d="M4 16h2"></path><path d="M4 20h2"></path><path d="M4 4h2"></path><path d="M4 8h2"></path><path d="M8 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-1.5c-.276 0-.494.227-.562.495a2 2 0 0 1-3.876 0C9.994 2.227 9.776 2 9.5 2z"></path></svg>
</div><style>
    /* Target the specific Microchip Icon Container by ID */
    [data-element-id="aura-emisa4nlw2cbptktg"] {
        transform-style: preserve-3d;
        transition: all 0.5s ease;
    }

    /* Outer Dashed Orbit Ring */
    [data-element-id="aura-emisa4nlw2cbptktg"]::before {
        content: '';
        position: absolute;
        inset: -6px;
        border-radius: 9999px;
        border: 1px dashed rgba(34, 211, 238, 0.3);
        border-top-color: transparent;
        border-bottom-color: transparent;
        animation: sys-orbit 8s linear infinite;
        pointer-events: none;
    }

    /* Inner Scanner Ring */
    [data-element-id="aura-emisa4nlw2cbptktg"]::after {
        content: '';
        position: absolute;
        inset: -2px;
        border-radius: 9999px;
        border: 1px solid rgba(34, 211, 238, 0.1);
        border-left-color: rgba(34, 211, 238, 0.6);
        animation: sys-spin-fast 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        pointer-events: none;
    }

    /* SVG Glow & Color Shift */
    [data-element-id="aura-emisa4nlw2cbptktg"] svg {
        animation: sys-pulse 3s ease-in-out infinite;
        filter: drop-shadow(0 0 0 rgba(34, 211, 238, 0));
    }

    /* Animation Keyframes */
    @keyframes sys-orbit {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }

    @keyframes sys-spin-fast {
        from { transform: rotate(360deg); }
        to { transform: rotate(0deg); }
    }

    @keyframes sys-pulse {
        0%, 100% {
            color: white;
            filter: drop-shadow(0 0 0 rgba(34, 211, 238, 0));
            transform: scale(1);
        }
        50% {
            color: #22d3ee; /* Cyan-400 */
            filter: drop-shadow(0 0 8px rgba(34, 211, 238, 0.6));
            transform: scale(1.05);
        }
    }
</style>
<h3 className="sm:text-3xl text-2xl font-semibold tracking-tight font-manrope text-center mt-5 relative">Systems Integration</h3>
<p className="sm:text-base text-sm text-white/70 text-center mt-2 relative">Seamless integration of complex hardware and software solutions.</p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#020204] w-full border-white/5 border-t pt-20 pb-20 relative">
<style>
        @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .animate-scroll {
            animation: scroll 60s linear infinite;
        }
        .animate-scroll:hover {
            animation-play-state: paused;
        }
        .scroll-container::-webkit-scrollbar { display: none; }
    </style>

<div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end relative z-20">
<div className="">
<div className="flex items-center gap-2 mb-2">
<div className="h-1 w-1 bg-cyan-500 rounded-full animate-pulse"></div>
<span className="text-cyan-500 font-mono text-xs uppercase tracking-widest">Project Archive</span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold text-white uppercase tracking-tight">Recent Deployments</h2>
</div>
<div className="hidden md:flex gap-4 text-xs font-mono text-slate-500 items-center">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
<span className="">SYSTEM_ONLINE</span>
</div>
<span>//</span>
<span>SCROLL_SPEED: 12%</span>
</div>
</div>

<div className="relative z-10 w-full group">

<div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#020204] to-transparent z-20 pointer-events-none"></div>
<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#020204] to-transparent z-20 pointer-events-none"></div>

<div className="scroll-container overflow-hidden w-full pt-2 pb-4">
<div className="flex gap-6 animate-scroll w-max">


<div className="shrink-0 group/card relative w-[320px] h-[420px] rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300">
<div className="absolute inset-0 bg-neutral-900">
<img alt="Industrial" className="w-full h-full object-cover opacity-60 group-hover/card:scale-110 transition-transform duration-700 grayscale group-hover/card:grayscale-0" src="https://delflo.com/wp-content/uploads/2022/03/20200706_152352.jpg?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="bg-gradient-to-t from-black via-black/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-3 right-3">
<div className="px-2 py-1 bg-black/50 backdrop-blur border border-white/10 rounded text-[9px] font-mono text-cyan-400">
                            SYS_01
                        </div>
</div>
<div className="w-full pt-5 pr-5 pb-5 pl-5 absolute bottom-0 left-0">
<div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent mb-4"></div>
<span className="block text-[10px] font-mono text-cyan-500 mb-1">AUTOMATION</span>
<h3 className="text-lg font-semibold text-white tracking-tight group-hover/card:text-cyan-400 transition-colors">Robotic Assembly</h3>
<p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">High-precision autonomous manufacturing units for component fabrication.</p>
</div>
</div>

<div className="shrink-0 group/card relative w-[320px] h-[420px] rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300">
<div className="absolute inset-0 bg-neutral-900">
<img alt="Tunnel" className="w-full h-full object-cover opacity-60 group-hover/card:scale-110 transition-transform duration-700 grayscale group-hover/card:grayscale-0" src="https://delflo.com/wp-content/uploads/2022/03/20201214_085643.jpg?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="bg-gradient-to-t from-black via-black/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-3 right-3">
<div className="px-2 py-1 bg-black/50 backdrop-blur border border-white/10 rounded text-[9px] font-mono text-cyan-400">
                            INF_04
                        </div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5">
<div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent mb-4"></div>
<span className="block text-[10px] font-mono text-cyan-500 mb-1">INFRASTRUCTURE</span>
<h3 className="text-lg font-semibold text-white tracking-tight group-hover/card:text-cyan-400 transition-colors">Quantum Tunneling</h3>
<p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">Underground secure data transmission corridors with hardened shielding.</p>
</div>
</div>

<div className="shrink-0 group/card relative w-[320px] h-[420px] rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300">
<div className="absolute inset-0 bg-neutral-900">
<img alt="Chip" className="w-full h-full object-cover opacity-60 group-hover/card:scale-110 transition-transform duration-700 grayscale group-hover/card:grayscale-0" src="https://delflo.com/wp-content/uploads/2022/03/img_4710-965x1024.jpg?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
<div className="absolute top-3 right-3">
<div className="px-2 py-1 bg-black/50 backdrop-blur border border-white/10 rounded text-[9px] font-mono text-cyan-400">
                            CYB_09
                        </div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5">
<div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent mb-4"></div>
<span className="block text-[10px] font-mono text-cyan-500 mb-1">CYBERNETICS</span>
<h3 className="text-lg font-semibold text-white tracking-tight group-hover/card:text-cyan-400 transition-colors">Neural Interface</h3>
<p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">Direct brain-computer interfaces for pilot synchronization and telemetry.</p>
</div>
</div>

<div className="shrink-0 group/card relative w-[320px] h-[420px] rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300">
<div className="absolute inset-0 bg-neutral-900">
<img alt="Shield" className="w-full h-full object-cover opacity-60 group-hover/card:scale-110 transition-transform duration-700 grayscale group-hover/card:grayscale-0" src="https://delflo.com/wp-content/uploads/2022/03/img_7515-719x1024.jpg?w=2160&amp;q=80"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
<div className="absolute top-3 right-3">
<div className="px-2 py-1 bg-black/50 backdrop-blur border border-white/10 rounded text-[9px] font-mono text-cyan-400">
                            DEF_12
                        </div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5">
<div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent mb-4"></div>
<span className="block text-[10px] font-mono text-cyan-500 mb-1">DEFENSE</span>
<h3 className="text-lg font-semibold text-white tracking-tight group-hover/card:text-cyan-400 transition-colors">Aegis Shielding</h3>
<p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">Next-generation electromagnetic pulse hardening for critical infrastructure.</p>
</div>
</div>

<div className="shrink-0 group/card relative w-[320px] h-[420px] rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300">
<div className="absolute inset-0 bg-neutral-900">
<img alt="Grid" className="w-full h-full object-cover opacity-60 group-hover/card:scale-110 transition-transform duration-700 grayscale group-hover/card:grayscale-0" src="https://delflo.com/wp-content/uploads/2022/03/img_7808-768x1024.jpg?w=2160&amp;q=80"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
<div className="absolute top-3 right-3">
<div className="px-2 py-1 bg-black/50 backdrop-blur border border-white/10 rounded text-[9px] font-mono text-cyan-400">
                            SAT_05
                        </div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5">
<div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent mb-4"></div>
<span className="block text-[10px] font-mono text-cyan-500 mb-1">AEROSPACE</span>
<h3 className="text-lg font-semibold text-white tracking-tight group-hover/card:text-cyan-400 transition-colors">Orbital Grid</h3>
<p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">Low-latency satellite constellation for global secure communications.</p>
</div>
</div>

<div className="shrink-0 group/card relative w-[320px] h-[420px] rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300">
<div className="absolute inset-0 bg-neutral-900">
<img alt="Data" className="w-full h-full object-cover opacity-60 group-hover/card:scale-110 transition-transform duration-700 grayscale group-hover/card:grayscale-0" src="https://delflo.com/wp-content/uploads/2022/03/img_9135-scaled-289x1024.jpg?w=2160&amp;q=80"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
<div className="absolute top-3 right-3">
<div className="px-2 py-1 bg-black/50 backdrop-blur border border-white/10 rounded text-[9px] font-mono text-cyan-400">
                            SEC_08
                        </div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5">
<div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent mb-4"></div>
<span className="block text-[10px] font-mono text-cyan-500 mb-1">SECURITY</span>
<h3 className="text-lg font-semibold text-white tracking-tight group-hover/card:text-cyan-400 transition-colors">Data Fortress</h3>
<p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">Decentralized encrypted storage networks with biometric access control.</p>
</div>
</div>

<div className="shrink-0 group/card relative w-[320px] h-[420px] rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300">
<div className="absolute inset-0 bg-neutral-900">
<img alt="Industrial" className="w-full h-full object-cover opacity-60 group-hover/card:scale-110 transition-transform duration-700 grayscale group-hover/card:grayscale-0" src="https://delflo.com/wp-content/uploads/2022/03/20200706_152352.jpg?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
<div className="absolute top-3 right-3">
<div className="px-2 py-1 bg-black/50 backdrop-blur border border-white/10 rounded text-[9px] font-mono text-cyan-400">
                            SYS_02
                        </div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5">
<div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent mb-4"></div>
<span className="block text-[10px] font-mono text-cyan-500 mb-1">AUTOMATION</span>
<h3 className="text-lg font-semibold text-white tracking-tight group-hover/card:text-cyan-400 transition-colors">Swarm Logistics</h3>
<p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">Autonomous drone fleets for rapid supply chain deployment in hostile zones.</p>
</div>
</div>

<div className="shrink-0 group/card relative w-[320px] h-[420px] rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300">
<div className="absolute inset-0 bg-neutral-900">
<img alt="Tunnel" className="w-full h-full object-cover opacity-60 group-hover/card:scale-110 transition-transform duration-700 grayscale group-hover/card:grayscale-0" src="https://delflo.com/wp-content/uploads/2022/03/20201214_085643.jpg?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
<div className="absolute top-3 right-3">
<div className="px-2 py-1 bg-black/50 backdrop-blur border border-white/10 rounded text-[9px] font-mono text-cyan-400">
                            INF_05
                        </div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5">
<div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent mb-4"></div>
<span className="block text-[10px] font-mono text-cyan-500 mb-1">INFRASTRUCTURE</span>
<h3 className="text-lg font-semibold text-white tracking-tight group-hover/card:text-cyan-400 transition-colors">Deep Bore</h3>
<p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">Geothermal energy extraction systems for off-grid military outposts.</p>
</div>
</div>


<div className="shrink-0 group/card relative w-[320px] h-[420px] rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300">
<div className="absolute inset-0 bg-neutral-900">
<img alt="Industrial" className="w-full h-full object-cover opacity-60 group-hover/card:scale-110 transition-transform duration-700 grayscale group-hover/card:grayscale-0" src="https://delflo.com/wp-content/uploads/2022/03/20200706_152352.jpg?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="bg-gradient-to-t from-black via-black/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-3 right-3">
<div className="px-2 py-1 bg-black/50 backdrop-blur border border-white/10 rounded text-[9px] font-mono text-cyan-400">
                            SYS_01
                        </div>
</div>
<div className="w-full pt-5 pr-5 pb-5 pl-5 absolute bottom-0 left-0">
<div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent mb-4"></div>
<span className="block text-[10px] font-mono text-cyan-500 mb-1">AUTOMATION</span>
<h3 className="text-lg font-semibold text-white tracking-tight group-hover/card:text-cyan-400 transition-colors">Robotic Assembly</h3>
<p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">High-precision autonomous manufacturing units for component fabrication.</p>
</div>
</div>

<div className="shrink-0 group/card relative w-[320px] h-[420px] rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300">
<div className="absolute inset-0 bg-neutral-900">
<img alt="Tunnel" className="w-full h-full object-cover opacity-60 group-hover/card:scale-110 transition-transform duration-700 grayscale group-hover/card:grayscale-0" src="https://delflo.com/wp-content/uploads/2022/03/20201214_085643.jpg?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="bg-gradient-to-t from-black via-black/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-3 right-3">
<div className="px-2 py-1 bg-black/50 backdrop-blur border border-white/10 rounded text-[9px] font-mono text-cyan-400">
                            INF_04
                        </div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5">
<div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent mb-4"></div>
<span className="block text-[10px] font-mono text-cyan-500 mb-1">INFRASTRUCTURE</span>
<h3 className="text-lg font-semibold text-white tracking-tight group-hover/card:text-cyan-400 transition-colors">Quantum Tunneling</h3>
<p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">Underground secure data transmission corridors with hardened shielding.</p>
</div>
</div>

<div className="shrink-0 group/card relative w-[320px] h-[420px] rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300">
<div className="absolute inset-0 bg-neutral-900">
<img alt="Chip" className="w-full h-full object-cover opacity-60 group-hover/card:scale-110 transition-transform duration-700 grayscale group-hover/card:grayscale-0" src="https://delflo.com/wp-content/uploads/2022/03/img_4710-965x1024.jpg?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
<div className="absolute top-3 right-3">
<div className="px-2 py-1 bg-black/50 backdrop-blur border border-white/10 rounded text-[9px] font-mono text-cyan-400">
                            CYB_09
                        </div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5">
<div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent mb-4"></div>
<span className="block text-[10px] font-mono text-cyan-500 mb-1">CYBERNETICS</span>
<h3 className="text-lg font-semibold text-white tracking-tight group-hover/card:text-cyan-400 transition-colors">Neural Interface</h3>
<p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">Direct brain-computer interfaces for pilot synchronization and telemetry.</p>
</div>
</div>

<div className="shrink-0 group/card relative w-[320px] h-[420px] rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300">
<div className="absolute inset-0 bg-neutral-900">
<img alt="Shield" className="w-full h-full object-cover opacity-60 group-hover/card:scale-110 transition-transform duration-700 grayscale group-hover/card:grayscale-0" src="https://delflo.com/wp-content/uploads/2022/03/img_9996-633x1024.jpg?w=2160&amp;q=80"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
<div className="absolute top-3 right-3">
<div className="px-2 py-1 bg-black/50 backdrop-blur border border-white/10 rounded text-[9px] font-mono text-cyan-400">
                            DEF_12
                        </div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5">
<div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent mb-4"></div>
<span className="block text-[10px] font-mono text-cyan-500 mb-1">DEFENSE</span>
<h3 className="text-lg font-semibold text-white tracking-tight group-hover/card:text-cyan-400 transition-colors">Aegis Shielding</h3>
<p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">Next-generation electromagnetic pulse hardening for critical infrastructure.</p>
</div>
</div>

<div className="shrink-0 group/card relative w-[320px] h-[420px] rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300">
<div className="absolute inset-0 bg-neutral-900">
<img alt="Grid" className="w-full h-full object-cover opacity-60 group-hover/card:scale-110 transition-transform duration-700 grayscale group-hover/card:grayscale-0" src="https://delflo.com/wp-content/uploads/2022/03/production-scaled-1024x768.jpg?w=2160&amp;q=80"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
<div className="absolute top-3 right-3">
<div className="px-2 py-1 bg-black/50 backdrop-blur border border-white/10 rounded text-[9px] font-mono text-cyan-400">
                            SAT_05
                        </div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5">
<div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent mb-4"></div>
<span className="block text-[10px] font-mono text-cyan-500 mb-1">AEROSPACE</span>
<h3 className="text-lg font-semibold text-white tracking-tight group-hover/card:text-cyan-400 transition-colors">Orbital Grid</h3>
<p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">Low-latency satellite constellation for global secure communications.</p>
</div>
</div>

<div className="shrink-0 group/card relative w-[320px] h-[420px] rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300">
<div className="absolute inset-0 bg-neutral-900">
<img alt="Data" className="w-full h-full object-cover opacity-60 group-hover/card:scale-110 transition-transform duration-700 grayscale group-hover/card:grayscale-0" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
<div className="absolute top-3 right-3">
<div className="px-2 py-1 bg-black/50 backdrop-blur border border-white/10 rounded text-[9px] font-mono text-cyan-400">
                            SEC_08
                        </div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5">
<div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent mb-4"></div>
<span className="block text-[10px] font-mono text-cyan-500 mb-1">SECURITY</span>
<h3 className="text-lg font-semibold text-white tracking-tight group-hover/card:text-cyan-400 transition-colors">Data Fortress</h3>
<p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">Decentralized encrypted storage networks with biometric access control.</p>
</div>
</div>

<div className="shrink-0 group/card relative w-[320px] h-[420px] rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300">
<div className="absolute inset-0 bg-neutral-900">
<img alt="Industrial" className="w-full h-full object-cover opacity-60 group-hover/card:scale-110 transition-transform duration-700 grayscale group-hover/card:grayscale-0" src="https://delflo.com/wp-content/uploads/2022/03/20200706_152352.jpg?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
<div className="absolute top-3 right-3">
<div className="px-2 py-1 bg-black/50 backdrop-blur border border-white/10 rounded text-[9px] font-mono text-cyan-400">
                            SYS_02
                        </div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5">
<div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent mb-4"></div>
<span className="block text-[10px] font-mono text-cyan-500 mb-1">AUTOMATION</span>
<h3 className="text-lg font-semibold text-white tracking-tight group-hover/card:text-cyan-400 transition-colors">Swarm Logistics</h3>
<p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">Autonomous drone fleets for rapid supply chain deployment in hostile zones.</p>
</div>
</div>

<div className="shrink-0 group/card relative w-[320px] h-[420px] rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300">
<div className="absolute inset-0 bg-neutral-900">
<img alt="Tunnel" className="w-full h-full object-cover opacity-60 group-hover/card:scale-110 transition-transform duration-700 grayscale group-hover/card:grayscale-0" src="https://delflo.com/wp-content/uploads/2022/03/20201214_085643.jpg?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
<div className="absolute top-3 right-3">
<div className="px-2 py-1 bg-black/50 backdrop-blur border border-white/10 rounded text-[9px] font-mono text-cyan-400">
                            INF_05
                        </div>
</div>
<div className="absolute bottom-0 left-0 w-full p-5">
<div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent mb-4"></div>
<span className="block text-[10px] font-mono text-cyan-500 mb-1">INFRASTRUCTURE</span>
<h3 className="text-lg font-semibold text-white tracking-tight group-hover/card:text-cyan-400 transition-colors">Deep Bore</h3>
<p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">Geothermal energy extraction systems for off-grid military outposts.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden pt-24 pb-24 relative" id="about">

<div className="absolute inset-0 opacity-10 pointer-events-none">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0 100 L100 0" stroke="white" strokeWidth="0.1"></path>
<path d="M20 100 L100 20" stroke="white" strokeWidth="0.1"></path>
<path d="M40 100 L100 40" stroke="white" strokeWidth="0.1"></path>
</svg>
</div>
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-16 items-center">

<div className="w-full lg:w-1/2 relative group">
<div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
<div className="relative rounded-2xl overflow-hidden border border-white/10">
<img alt="Engineering Team" className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://delflo.com/wp-content/uploads/2022/03/img_7515-719x1024.jpg?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div><video autoplay="" className="z-10 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 brightness-75" loop="" muted="" playsinline="" src="https://delflo.com/wp-content/uploads/2022/03/delflo-battleship.mp4"></video>
</div>

<div className="absolute bottom-8 right-8 bg-black/80 backdrop-blur-xl border border-white/10 p-4 rounded-lg flex items-center gap-3">
<div className="text-3xl font-bold text-cyan-400">25+</div>
<div className="text-xs text-slate-400 leading-tight">Years ofExcellence</div>
</div>
</div>

<div className="w-full lg:w-1/2">
<h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-tight">About Delflo</h2>
<p className="text-lg font-light text-slate-300 mb-6">We are a manufacturing company specializing in machining metals and plastics. We are committed to maintaining the highest degree of integrity with our clients maintaining confidentiality and the protection of all client information. Our expertise is extended to Government Agencies.</p>
<p className="leading-relaxed text-slate-400 mb-8">
                            DELFLO is formed to preserve, incorporate and process smart engineering. Our professional team and our technical requirements ensure that every project meets the rigorous demands of national security. From prototype to battlefield deployment, we stand by our engineering.
                        </p>
<div className="flex gap-6 mb-8">
<div className="flex flex-col">
<span className="text-2xl font-bold text-white">100%</span>
<span className="text-xs text-slate-500 uppercase tracking-wider">Secure</span>
</div>
<div className="flex flex-col">
<span className="text-2xl font-bold text-white">ISO</span>
<span className="text-xs text-slate-500 uppercase tracking-wider">Certified</span>
</div>
<div className="flex flex-col">
<span className="text-2xl font-bold text-white">500+</span>
<span className="text-xs text-slate-500 uppercase tracking-wider">Projects</span>
</div>
</div>
<a className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium transition-colors border border-white/10" href="#">
                            Read More About Us
                        </a>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-black/20">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
<div className="">
<div className="flex items-center gap-2 mb-3">
<div className="h-px w-8 bg-cyan-500"></div>
<span className="text-cyan-500 text-xs font-mono uppercase tracking-widest">Trust &amp; Partners</span>
</div>
<h2 className="text-3xl font-bold tracking-tight text-white uppercase">Proud to Service</h2>
<p className="text-slate-400 mt-2 text-sm max-w-xl">Delivering mission-critical engineering solutions to the nation's premier defense organizations.</p>
</div>
<div className="hidden md:flex gap-4 text-xs font-mono text-slate-500 items-center">
<span className="text-cyan-500">STATUS: VERIFIED</span>
<span>//</span>
<span>SECURE_LINK_ESTABLISHED</span>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

<div className="group relative flex items-center justify-center bg-white/[0.02] border border-white/10 rounded-xl p-8 hover:bg-white/[0.05] hover:border-cyan-500/30 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
<img alt="US Navy" className="h-24 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 relative z-10 brightness-125" src="https://delflo.com/wp-content/uploads/2017/05/logo-navy.png"/>

<div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
</div>
</div>

<div className="group relative flex items-center justify-center bg-white/[0.02] border border-white/10 rounded-xl p-8 hover:bg-white/[0.05] hover:border-cyan-500/30 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
<img alt="US Marine Corps" className="h-24 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 relative z-10 brightness-125" src="https://delflo.com/wp-content/uploads/2017/05/logo-marine.png"/>
<div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
</div>
</div>

<div className="group relative flex items-center justify-center bg-white/[0.02] border border-white/10 rounded-xl p-8 hover:bg-white/[0.05] hover:border-cyan-500/30 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
<img alt="Department of Defense" className="h-24 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 relative z-10 brightness-125" src="https://delflo.com/wp-content/uploads/2017/05/logo-defense.png"/>
<div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
</div>
</div>

<div className="group relative flex items-center justify-center bg-white/[0.02] border border-white/10 rounded-xl p-8 hover:bg-white/[0.05] hover:border-cyan-500/30 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
<img alt="US Army" className="h-20 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 relative z-10 brightness-125" src="https://delflo.com/wp-content/uploads/2017/05/logo-army.png"/>
<div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
</div>
</div>

<div className="group relative flex items-center justify-center bg-white/[0.02] border border-white/10 rounded-xl p-8 hover:bg-white/[0.05] hover:border-cyan-500/30 transition-all duration-300 col-span-2 md:col-span-1">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
<img alt="US Air Force" className="h-20 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 relative z-10 brightness-125" src="https://delflo.com/wp-content/uploads/2022/03/logo-airforce.png"/>
<div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/10 bg-[#010203] pt-16 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

<div className="col-span-1 lg:col-span-1">
<a className="flex items-center gap-2 mb-6 group" href="#">

<img alt="DELFLO Logo" className="w-8 h-8 object-contain opacity-80 group-hover:opacity-100 transition-opacity" src="https://i.imgur.com/c169Iv6.png"/>
<div className="flex flex-col">
<span className="text-lg font-bold text-white tracking-tight leading-none">DELFLO</span>
<span className="text-[10px] font-medium text-slate-400 tracking-wider uppercase leading-none mt-0.5">Defense Solutions</span>
</div>
</a>
<p className="text-xs text-slate-500 mb-2" style={{}}>2025 Delflo</p>
<p className="text-xs text-slate-500 mb-2">1364 Gwenzell Ave </p>
<p className="text-xs text-slate-500">Delray Beach FI 33444</p>
</div>

<div className="">
<h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h4>
<ul className="space-y-2 text-sm text-slate-400">
<li className=""><a className="hover:text-cyan-400 transition-colors" href="#">Contact Us</a></li>
<li className=""><a className="hover:text-cyan-400 transition-colors" href="#">Documentation</a></li>
<li className=""><a className="hover:text-cyan-400 transition-colors" href="#"></a></li>
<li className=""><a className="hover:text-cyan-400 transition-colors" href="#"></a></li>
</ul>
</div>

<div className="">
<h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h4>
<ul className="space-y-2 text-sm text-slate-400">
<li className=""><a className="hover:text-cyan-400 transition-colors" href="#">View</a></li>
<li className=""><a className="hover:text-cyan-400 transition-colors" href="#">About Us</a></li>
<li className=""><a className="hover:text-cyan-400 transition-colors" href="#">Centure</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>

<div className="">
<h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Social Media</h4>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-cyan-600 transition-all" href="#">
<svg className="lucide lucide-facebook w-4 h-4" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-cyan-600 transition-all" href="#">
<svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-cyan-600 transition-all" href="#">
<svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-cyan-600 transition-all" href="#">
<svg className="lucide lucide-youtube w-4 h-4" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
</a>
</div>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
<p>© SOM Delflo Exthnse Solutions. All rights reserved.</p>
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="font-mono text-slate-500">Secure Connection</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
