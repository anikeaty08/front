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
      

<div className="fixed inset-0 z-[100] pointer-events-none opacity-[0.015] mix-blend-difference" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>

<div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none mix-blend-screen"></div>
<div className="fixed top-[20%] right-[-10%] w-[40%] h-[60%] rounded-full bg-purple-500/5 blur-[150px] pointer-events-none mix-blend-screen"></div>

<div className="fixed top-[45%] left-1/2 w-0 h-0 z-0 pointer-events-none">

<div className="absolute z-0 top-1/2 left-1/2 mix-blend-screen" style={{animation: 'ray-intensity 8s ease-in-out infinite'}}>
<div className="absolute top-1/2 left-1/2 w-[200vw] h-[40vh] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent blur-[120px]" style={{transform: 'translate(-50%, -50%)'}}></div>
<div className="absolute top-1/2 left-1/2 w-[150vw] h-[20vh] bg-gradient-to-r from-transparent via-purple-400/40 to-transparent blur-[60px]" style={{transform: 'translate(-50%, -50%)'}}></div>
</div>

<div className="absolute z-0 top-1/2 left-1/2 w-[70vw] max-w-[800px] h-[70vw] max-h-[800px] rounded-full bg-indigo-600/20 blur-[120px] mix-blend-screen" style={{animation: 'core-pulsar 10s ease-in-out infinite'}}></div>

<div className="absolute z-0 top-1/2 left-1/2 w-[120vw] max-w-[1400px] h-[35vw] max-h-[400px] rounded-[100%] border-[12px] border-indigo-500/10 blur-[24px] mix-blend-screen" style={{animation: 'horizon-pulse 12s ease-in-out infinite'}}></div>
<div className="absolute z-0 top-1/2 left-1/2 w-[120vw] max-w-[1400px] h-[35vw] max-h-[400px] rounded-[100%] border-[3px] border-white/20 blur-[8px] mix-blend-screen" style={{animation: 'horizon-pulse 12s ease-in-out infinite'}}></div>

<div className="absolute z-10 top-1/2 left-1/2 w-[25vw] max-w-[300px] min-w-[150px] h-[25vw] max-h-[300px] min-h-[150px] rounded-full bg-[#030303]" style={{transform: 'translate(-50%, -50%)', boxShadow: 'inset 0 0 40px rgba(0, 0, 0, 1), 0 0 80px 40px rgba(3,3,3,1)'}}></div>

<div className="absolute z-[15] top-1/2 left-1/2 w-[26vw] max-w-[312px] min-w-[156px] h-[26vw] max-h-[312px] min-h-[156px] rounded-full border-[2px] border-white/40 blur-[4px] mix-blend-screen" style={{animation: 'core-pulsar 8s ease-in-out infinite'}}></div>
<div className="absolute z-[15] top-1/2 left-1/2 w-[28vw] max-w-[336px] min-w-[168px] h-[28vw] max-h-[336px] min-h-[168px] rounded-full border-[6px] border-indigo-400/30 blur-[16px] mix-blend-screen" style={{animation: 'core-pulsar 8s ease-in-out infinite reverse'}}></div>

<div className="absolute z-20 top-1/2 left-1/2 mix-blend-screen" style={{animation: 'ray-intensity 8s ease-in-out infinite'}}>
<div className="absolute top-1/2 left-1/2 w-[120vw] h-[4vh] bg-gradient-to-r from-transparent via-indigo-300/80 to-transparent blur-[16px]" style={{transform: 'translate(-50%, -50%)'}}></div>
<div className="absolute top-1/2 left-1/2 w-[100vw] h-[1vh] bg-gradient-to-r from-transparent via-white/90 to-transparent blur-[6px]" style={{transform: 'translate(-50%, -50%)'}}></div>
<div className="absolute top-1/2 left-1/2 w-[100vw] h-[2px] bg-gradient-to-r from-transparent via-white to-transparent blur-[1px]" style={{transform: 'translate(-50%, -50%)'}}></div>
<div className="absolute top-1/2 left-1/2 w-[10vw] max-w-[100px] h-[2vh] bg-white/80 blur-[8px] rounded-[100%]" style={{transform: 'translate(-50%, -50%)'}}></div>
</div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/[0.05] bg-black/20 backdrop-blur-2xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-lg font-medium tracking-tighter text-white/90">AURA</div>
<div className="hidden md:flex items-center gap-8 text-sm text-white/50">
<a className="hover:text-white transition-colors duration-300" href="#">Vision</a>
<a className="hover:text-white transition-colors duration-300" href="#">Architecture</a>
<a className="hover:text-white transition-colors duration-300" href="#">Ecosystem</a>
</div>
<button className="text-xs font-medium tracking-wide bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full backdrop-blur-md transition-all duration-300 border border-white/10">
                Access
            </button>
</div>
</nav>
<main className="relative z-10 flex flex-col gap-y-32 md:gap-y-48 pb-32 pt-48">

<section className="max-w-7xl mx-auto px-6 w-full relative">
<div className="flex flex-col items-center text-center gap-6 mb-24 relative z-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-xl mb-4">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
<span className="text-xs text-white/60 font-medium tracking-wide">Introducing AuraOS 2.0</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tighter font-medium text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/30 max-w-4xl leading-[1.1]">
                    Fluidity mapped to <br className="hidden md:block"/> human intuition.
                </h1>
<p className="text-base md:text-lg text-white/40 max-w-2xl mt-4 font-light">
                    Experience an interface that dissolves into the background. Engineered with liquid glass optics and state-of-the-art haptic rendering for unparalleled depth.
                </p>
</div>

<div className="relative w-full max-w-5xl mx-auto aspect-[16/9] md:aspect-[21/9] rounded-[2rem] md:rounded-[3rem] border border-white/[0.08] bg-white/[0.02] overflow-hidden shadow-[0_0_100px_rgba(255,255,255,0.02)]">

<div className="absolute inset-0 backdrop-blur-3xl z-0"></div>

<div className="absolute inset-0 z-10 opacity-[0.15] mix-blend-overlay pointer-events-none" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%221.2%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>

<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-20"></div>

<div className="absolute inset-0 z-30 p-8 flex items-center justify-center">

<div className="w-full max-w-md bg-black/40 border border-white/10 rounded-2xl p-6 backdrop-blur-xl flex flex-col gap-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] relative overflow-hidden">
<div className="absolute top-[-50px] right-[-50px] w-32 h-32 bg-indigo-500/30 rounded-full blur-2xl"></div>
<div className="flex justify-between items-center border-b border-white/10 pb-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-white/5 to-white/20 border border-white/10 flex items-center justify-center">
<iconify-icon className="text-white/70 text-base" icon="solar:globus-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium tracking-tight text-white/90">Neural Sync</div>
<div className="text-xs text-white/40">Active connection</div>
</div>
</div>
<div className="w-10 h-6 bg-white/10 rounded-full relative shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] cursor-pointer">
<div className="absolute right-1 top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-transform"></div>
</div>
</div>
<div className="space-y-3 mt-2">
<div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full w-[65%] bg-gradient-to-r from-indigo-500/50 to-white/80 rounded-full"></div>
</div>
<div className="flex justify-between text-xs text-white/50 font-medium">
<span>Bandwidth</span>
<span>65%</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 w-full">
<div className="mb-12">
<h2 className="text-2xl md:text-3xl tracking-tighter font-medium text-white/90">Core Architecture.</h2>
<p className="text-sm text-white/50 mt-2">Foundational elements refined to their purest state.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[24rem]">

<div className="relative group rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent overflow-hidden backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] transition-all duration-500 hover:border-white/[0.15]">

<div className="absolute inset-0 opacity-[0.1] mix-blend-overlay pointer-events-none" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%221.5%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/0 via-transparent to-indigo-500/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 p-8 flex flex-col h-full">
<div className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center mb-auto shadow-sm">
<iconify-icon className="text-xl text-white/80" icon="solar:shield-keyhole-linear"></iconify-icon>
</div>
<div>
<h3 className="text-xl tracking-tighter font-medium text-white mb-2">Quantum Security</h3>
<p className="text-sm text-white/40 leading-relaxed">Cryptographic primitives embedded at the hardware layer, ensuring absolute data integrity.</p>
</div>
</div>
</div>

<div className="md:col-span-2 relative group rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent overflow-hidden backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] transition-all duration-500 hover:border-white/[0.15]">

<div className="absolute inset-0 opacity-[0.1] mix-blend-overlay pointer-events-none" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%221.5%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_50%)] pointer-events-none"></div>
<div className="relative z-10 p-8 flex flex-col md:flex-row h-full gap-8 items-start md:items-end justify-between">
<div className="flex-1 md:pb-4">
<div className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center mb-12 shadow-sm">
<iconify-icon className="text-xl text-white/80" icon="solar:cpu-linear"></iconify-icon>
</div>
<h3 className="text-2xl tracking-tighter font-medium text-white mb-2">Adaptive Processing</h3>
<p className="text-sm text-white/40 leading-relaxed max-w-sm">Resources shift dynamically based on intent, providing instantaneous feedback without thermal throttling.</p>
</div>

<div className="w-full md:w-64 h-32 md:h-48 rounded-2xl border border-white/10 bg-black/50 backdrop-blur-md relative overflow-hidden flex items-end p-4">
<div className="absolute top-[-20%] right-[-20%] w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
<div className="w-full flex items-end gap-2 h-full opacity-60">
<div className="flex-1 bg-white/20 rounded-t-sm h-[30%]"></div>
<div className="flex-1 bg-white/40 rounded-t-sm h-[60%]"></div>
<div className="flex-1 bg-white/80 rounded-t-sm h-[90%] relative shadow-[0_0_15px_rgba(255,255,255,0.3)]"></div>
<div className="flex-1 bg-white/30 rounded-t-sm h-[45%]"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 w-full">
<div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

<div className="flex-1 space-y-8">
<h2 className="text-3xl md:text-5xl tracking-tighter font-medium leading-[1.1] text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40">
                        Precision down to <br/> the sub-pixel.
                    </h2>
<p className="text-base text-white/50 font-light leading-relaxed max-w-md">
                        Every shadow, blur radius, and border thickness is mathematically calculated to emulate real-world physics. The result is a digital environment that feels tangibly real.
                    </p>
<ul className="space-y-4 pt-4 border-t border-white/10">
<li className="flex items-center gap-4 text-sm text-white/70">
<iconify-icon className="text-base text-white/40" icon="solar:check-circle-linear"></iconify-icon>
                            Volumetric rendering engine
                        </li>
<li className="flex items-center gap-4 text-sm text-white/70">
<iconify-icon className="text-base text-white/40" icon="solar:check-circle-linear"></iconify-icon>
                            Kinetic typography scaling
                        </li>
<li className="flex items-center gap-4 text-sm text-white/70">
<iconify-icon className="text-base text-white/40" icon="solar:check-circle-linear"></iconify-icon>
                            Zero-latency spatial audio
                        </li>
</ul>
</div>

<div className="flex-1 w-full relative">
<div className="absolute inset-0 bg-indigo-500/10 blur-[100px] rounded-full"></div>
<div className="relative w-full aspect-square max-w-[500px] mx-auto rounded-[2.5rem] border border-white/[0.08] bg-black/40 backdrop-blur-3xl shadow-[0_20px_40px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)] overflow-hidden p-6 flex flex-col gap-4">

<div className="absolute inset-0 opacity-[0.12] mix-blend-overlay pointer-events-none" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%221.8%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>

<div className="relative z-10 flex justify-between items-center px-2">
<div className="w-16 h-1.5 bg-white/20 rounded-full"></div>
<div className="flex gap-1.5">
<div className="w-2 h-2 rounded-full bg-white/10"></div>
<div className="w-2 h-2 rounded-full bg-white/10"></div>
</div>
</div>

<div className="relative z-10 flex-1 rounded-2xl border border-white/5 bg-white/[0.03] p-5 flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center">
<iconify-icon className="text-lg text-white/60" icon="solar:chart-square-linear"></iconify-icon>
</div>
<div className="text-right">
<div className="text-xs text-white/40 uppercase tracking-widest font-medium">Index</div>
<div className="text-lg font-medium tracking-tighter text-white mt-1">142.08</div>
</div>
</div>

<div className="relative h-24 w-full mt-4 border-b border-white/5">
<svg className="absolute inset-0 w-full h-full" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0,80 Q25,20 50,60 T100,10" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2"></path>
<path d="M0,90 Q30,50 60,70 T100,30" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2"></path>
</svg>
</div>
</div>

<div className="relative z-10 h-24 flex gap-4">
<div className="flex-1 rounded-2xl border border-white/5 bg-white/[0.02] p-4 flex flex-col justify-center gap-1">
<div className="text-xs text-white/30">Latency</div>
<div className="text-base tracking-tighter text-white/80">0.2ms</div>
</div>
<div className="flex-1 rounded-2xl border border-white/5 bg-white/[0.02] p-4 flex flex-col justify-center gap-1 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/[0.05]"></div>
<div className="text-xs text-white/30">Status</div>
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
<span className="text-base tracking-tighter text-white/80">Optimal</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 w-full py-12 border-y border-white/[0.05] bg-gradient-to-r from-transparent via-white/[0.01] to-transparent">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-white/[0.05]">
<div className="flex flex-col items-center justify-center text-center px-4">
<div className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tighter text-white mb-2">99.9%</div>
<div className="text-xs text-white/40 uppercase tracking-[0.2em]">Uptime</div>
</div>
<div className="flex flex-col items-center justify-center text-center px-4">
<div className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tighter text-white mb-2">&lt;1ms</div>
<div className="text-xs text-white/40 uppercase tracking-[0.2em]">Response</div>
</div>
<div className="flex flex-col items-center justify-center text-center px-4">
<div className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tighter text-white mb-2">256b</div>
<div className="text-xs text-white/40 uppercase tracking-[0.2em]">Encryption</div>
</div>
<div className="flex flex-col items-center justify-center text-center px-4">
<div className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tighter text-white mb-2">∞</div>
<div className="text-xs text-white/40 uppercase tracking-[0.2em]">Scalability</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 w-full py-24 md:py-32 flex flex-col items-center justify-center relative">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none"></div>
<iconify-icon className="text-3xl text-white/20 mb-8" icon="solar:quote-right-linear"></iconify-icon>
<h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tighter font-light text-center text-white/30 leading-[1.3] max-w-4xl">
                "It feels less like interacting with a machine, and more like an <span className="text-white font-medium">extension of thought</span>. The interface doesn't just respond; it anticipates."
            </h2>
<div className="mt-12 text-sm text-white/50 tracking-wide uppercase">
                Chief Design Officer
            </div>
</section>

<section className="max-w-7xl mx-auto px-6 w-full mt-12">

<div className="relative w-full rounded-[2rem] border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-black overflow-hidden backdrop-blur-3xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] p-12 md:p-20 text-center flex flex-col items-center">

<div className="absolute inset-0 opacity-[0.1] mix-blend-overlay pointer-events-none" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%221.5%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-[300px] bg-white/5 blur-[80px] rounded-full pointer-events-none"></div>
<h2 className="relative z-10 text-4xl md:text-5xl lg:text-6xl tracking-tighter font-medium text-white mb-6">Experience clarity.</h2>
<p className="relative z-10 text-sm md:text-base text-white/40 max-w-md mx-auto mb-10">
                    Join the closed beta and touch the future of human-computer interaction. Limited allocations available.
                </p>
<button className="relative z-10 px-8 py-3 rounded-full bg-white text-black font-medium text-sm tracking-wide hover:bg-white/90 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                    Request Invite
                </button>
</div>

<footer className="mt-24 pt-8 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-xl font-medium tracking-tighter text-white/80">AURA</div>
<div className="flex items-center gap-6 text-xs text-white/40">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">GitHub</a>
</div>
<div className="text-xs text-white/30">
                    © 2024 Aura Systems. All rights reserved.
                </div>
</footer>
</section>
</main>

    </>
  );
}
