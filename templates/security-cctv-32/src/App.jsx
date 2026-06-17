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



          !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.5.2/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        


        lucide.createIcons();

        // Animation Observer
        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationPlayState = 'running';
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.scroll-item').forEach(el => observer.observe(el));
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-20" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="hRFfUymDGOHwtFe7evR2"></div>

</div>

<div className="fixed inset-0 z-0 pointer-events-none opacity-10">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
</div>

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-900/10 rounded-full blur-[120px]"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-soft-light"></div>
</div>

<nav className="flex z-50 w-full pt-6 pr-4 pl-4 fixed top-0 left-0 right-0 items-center justify-center">
<div className="flex bg-black/80 backdrop-blur-xl w-full max-w-6xl border-white/10 border rounded-full py-3 px-6 relative shadow-2xl items-center justify-between scroll-item scroll-fade-up" style={{animationPlayState: 'running'}}>

<a className="flex items-center gap-2 group" href="#">
<div className="flex bg-center text-white w-20 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b09a3000-2ead-4edf-8c5e-7cde6cb9bd6b_320w.png)] bg-cover rounded-lg items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] animate-[scan-horizontal_3s_ease-in-out_infinite]"></div>
</div>
</a>

<div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
<a className="text-[13px] font-medium text-gray-300 hover:text-white transition-colors tracking-wide" href="#">Why Choose Us</a>
<a className="text-[13px] font-medium text-gray-300 hover:text-white transition-colors tracking-wide" href="#">Our Services</a>
<a className="text-[13px] font-medium text-gray-300 hover:text-white transition-colors tracking-wide" href="#">Packages</a>
<a className="text-[13px] font-medium text-gray-300 hover:text-white transition-colors tracking-wide" href="#">Commercial</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-xs font-medium text-gray-400 hover:text-white transition-colors" href="tel:+61432011340">
<span className="relative flex h-2 w-2 mr-1">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                    +61 432 011 340
                </a>
<a className="bg-white text-black hover:bg-gray-200 transition-colors px-5 py-2 rounded-full text-xs font-semibold tracking-tight" href="#">
                    Get Quote
                </a>
</div>
</div>
</nav>

<main className="flex flex-col z-10 w-full max-w-[1400px] mr-auto ml-auto pt-40 pr-6 pl-6 relative items-center justify-center">

<div className="flex flex-col w-full mb-32 relative items-center justify-center">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 hover:bg-white/10 transition-colors cursor-pointer group scroll-item scroll-fade-up relative overflow-hidden" style={{animationPlayState: 'running'}}>
<div className="absolute inset-0 bg-blue-500/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
<span className="bg-blue-500/20 text-blue-400 rounded px-1.5 py-0.5 text-[10px] font-semibold tracking-wide flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-[blink_1s_infinite]"></span> LIVE
                </span>
<span className="text-xs text-gray-300 font-medium pr-1">Advanced Digital Installation</span>
</div>
<h1 className="text-center text-5xl md:text-7xl lg:text-8xl leading-[1.1] max-w-5xl mx-auto font-oswald font-light tracking-tight scroll-item scroll-blur-in delay-100" style={{animationPlayState: 'running'}}>
                Secure Smart <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 relative">
                    Ecosystems
                    <svg className="absolute -right-8 -top-4 w-8 h-8 text-blue-500/50 animate-[spin_10s_linear_infinite]" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke-dasharray="4 4"></circle></svg>
</span>
</h1>
<p className="text-center text-lg text-gray-400 mt-8 max-w-2xl mx-auto leading-relaxed font-light scroll-item scroll-fade-up delay-200" style={{animationPlayState: 'running'}}>
                Next-generation surveillance, NBN, and automation. We protect and connect properties across Melbourne with military-grade precision.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 mt-10 scroll-item scroll-fade-up delay-300" style={{animationPlayState: 'running'}}>
<button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-blue-600 px-8 font-medium text-white transition-all duration-300 hover:bg-blue-700 hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.3)]">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] animate-[scan-horizontal_2s_infinite]"></div>
<span className="mr-2">View Packages</span>
<svg className="lucide lucide-shield h-4 w-4 transition-transform group-hover:scale-110" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</button>
<button className="group flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 font-medium text-white transition-all hover:bg-white/10 hover:border-white/30">
<svg className="lucide lucide-scan-eye h-4 w-4 text-gray-400 group-hover:text-white transition-colors" data-lucide="scan-eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><circle cx="12" cy="12" r="1"></circle><path d="M18.944 12.33a7 7 0 0 0-13.888 0"></path></svg>
<span className="">System Check</span>
</button>
</div>

<div className="relative mt-24 w-full max-w-5xl h-[600px] flex justify-center items-center scroll-item scroll-blur-in delay-500" style={{animationPlayState: 'running'}}>

<div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none opacity-20">
<div className="w-[600px] h-[600px] border border-blue-500/20 rounded-full flex items-center justify-center relative">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent w-full h-full rounded-full animate-[radar-spin_8s_linear_infinite]"></div>
<div className="w-[400px] h-[400px] border border-blue-500/30 rounded-full"></div>
<div className="w-[200px] h-[200px] border border-blue-500/40 rounded-full"></div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-full h-[1px] bg-blue-500/20"></div>
<div className="h-full w-[1px] bg-blue-500/20 absolute"></div>
</div>
</div>
</div>

<div className="absolute left-0 md:-left-12 top-24 z-20 hidden lg:flex items-center gap-3 p-3 bg-[#0A0A0A]/90 backdrop-blur border border-red-500/30 rounded-xl shadow-[0_0_30px_rgba(239,68,68,0.2)] animate-[bounce_4s_infinite]">
<div className="relative w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center border border-red-500/20 overflow-hidden">
<div className="absolute inset-0 bg-red-500/20 animate-ping"></div>
<svg className="lucide lucide-siren w-5 h-5 text-red-500 relative z-10" data-lucide="siren" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 12a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v6H7v-6Z"></path><path d="M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2H5v-2Z"></path><path d="M21 12h1"></path><path d="M18.5 4.5 18 5"></path><path d="M2 12h1"></path><path d="M5.5 4.5 6 5"></path></svg>
</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-red-400 uppercase tracking-wider">Breach Detect</span>
<span className="text-[10px] text-gray-400">Zone 4 • Backyard</span>
</div>
</div>

<div className="absolute right-0 md:-right-8 top-40 z-20 hidden lg:flex items-center gap-3 p-3 bg-[#0A0A0A]/90 backdrop-blur border border-green-500/30 rounded-xl shadow-[0_0_30px_rgba(34,197,94,0.1)] animate-[pulse_6s_infinite]">
<div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center border border-green-500/20">
<svg className="lucide lucide-network w-5 h-5 text-green-500" data-lucide="network" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="6" rx="1" width="6" x="16" y="16"></rect><rect height="6" rx="1" width="6" x="2" y="16"></rect><rect height="6" rx="1" width="6" x="9" y="2"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg>
</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-green-400 uppercase tracking-wider">System Secure</span>
<span className="text-[10px] text-gray-400">Up: 99.9% • Encrypted</span>
</div>
</div>

<div className="relative w-[320px] h-[650px] bg-[#050505] border-[6px] border-[#222] rounded-[3rem] shadow-2xl overflow-hidden ring-1 ring-white/10 z-10 group">

<div className="absolute w-full h-[2px] bg-blue-500/50 top-0 left-0 z-50 shadow-[0_0_15px_rgba(59,130,246,0.8)] animate-[scan-line_4s_linear_infinite] pointer-events-none"></div>

<div className="h-8 w-full flex justify-between items-center px-6 mt-2 relative z-20">
<span className="text-[10px] text-white font-medium font-oswald tracking-widest">LIVE</span>
<div className="flex gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
<svg className="lucide lucide-wifi w-3 h-3 text-white" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
</div>
</div>

<div className="px-6 mt-4 flex justify-between items-center relative z-20">
<div>
<h3 className="text-white font-oswald text-lg">Command Center</h3>
<p className="text-[10px] text-blue-400 flex items-center gap-1">
<svg className="animate-spin" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>
                                Monitoring Active
                            </p>
</div>
<div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center ring-1 ring-blue-500/50">
<svg className="lucide lucide-shield-check w-4 h-4 text-blue-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
</div>

<div className="px-4 mt-6 space-y-4 relative z-20">

<div className="w-full h-44 bg-[#111] rounded-2xl border border-white/5 relative overflow-hidden group cursor-pointer shadow-lg shadow-black/50">

<img alt="CCTV" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity filter contrast-125 sepia-[0.3]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute inset-0 p-2 pointer-events-none">
<div className="flex justify-between items-start">
<div className="bg-red-600/90 px-2 py-0.5 rounded text-[8px] font-bold text-white flex items-center gap-1 shadow-sm">
<span className="w-1.5 h-1.5 bg-white rounded-full animate-[blink_1s_infinite]"></span> REC
                                    </div>
<div className="text-[8px] font-mono text-white opacity-80">CAM-01 [MAIN]</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border border-white/30 rounded-sm flex items-center justify-center animate-[target-lock_3s_ease-out_infinite]">
<div className="w-14 h-[1px] bg-white/20 absolute"></div>
<div className="h-14 w-[1px] bg-white/20 absolute"></div>
</div>

<div className="absolute top-[30%] left-[40%] w-10 h-10 border border-yellow-500/50 rounded-sm opacity-50">
<div className="absolute -top-3 left-0 text-[6px] text-yellow-500 bg-black/50 px-1">MOTION</div>
</div>
<div className="absolute bottom-2 left-2 text-[8px] font-mono text-white flex flex-col">
<span>24 FPS // 4K HDR</span>
<span><span className="text-blue-400">DETECTING:</span> PERSON</span>
</div>
</div>

<div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.8)_100%)]"></div>
</div>

<div className="grid grid-cols-2 gap-3">

<div className="bg-[#111] p-3 rounded-2xl border border-white/5 hover:border-blue-500/50 transition-colors relative overflow-hidden">
<div className="absolute inset-0 bg-blue-500/5 opacity-0 hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-2 relative z-10">
<svg className="lucide lucide-lock w-5 h-5 text-blue-400" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<div className="relative inline-block w-8 h-4 rounded-full bg-blue-600 cursor-pointer shadow-[0_0_10px_rgba(37,99,235,0.4)]">
<span className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow transition-transform"></span>
</div>
</div>
<div className="text-xs font-medium text-white relative z-10">Smart Lock</div>
<div className="text-[9px] text-green-400 flex items-center gap-1 relative z-10"><span className="w-1 h-1 bg-green-400 rounded-full"></span> Secure</div>
</div>

<div className="bg-[#111] p-3 rounded-2xl border border-white/5 hover:border-red-500/50 transition-colors relative overflow-hidden">
<div className="absolute inset-0 bg-red-500/5 opacity-0 hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-2 relative z-10">
<svg className="lucide lucide-eye w-5 h-5 text-red-400" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<div className="relative inline-block w-8 h-4 rounded-full bg-red-900/50 cursor-pointer border border-red-500/30">
<span className="absolute right-0.5 top-0.5 w-3 h-3 bg-red-500 rounded-full shadow transition-transform animate-pulse"></span>
</div>
</div>
<div className="text-xs font-medium text-white relative z-10">Perimeter</div>
<div className="text-[9px] text-red-400 relative z-10">Armed</div>
</div>
</div>

<div className="bg-[#111] p-4 rounded-2xl border border-white/5 relative overflow-hidden">

<div className="absolute bottom-0 left-0 right-0 h-10 flex items-end opacity-20 gap-1 px-4">
<div className="w-1 bg-blue-500 h-[40%] animate-[pulse_1s_infinite]"></div>
<div className="w-1 bg-blue-500 h-[70%] animate-[pulse_1.2s_infinite]"></div>
<div className="w-1 bg-blue-500 h-[30%] animate-[pulse_0.8s_infinite]"></div>
<div className="w-1 bg-blue-500 h-[80%] animate-[pulse_1.5s_infinite]"></div>
<div className="w-1 bg-blue-500 h-[50%] animate-[pulse_1.1s_infinite]"></div>
<div className="w-1 bg-blue-500 h-[90%] animate-[pulse_1.3s_infinite]"></div>
<div className="w-1 bg-blue-500 h-[60%] animate-[pulse_0.9s_infinite]"></div>
<div className="w-1 bg-blue-500 h-[40%] animate-[pulse_1.4s_infinite]"></div>
</div>
<div className="flex justify-between items-center mb-3 relative z-10">
<span className="text-xs font-medium text-white">NBN Uplink</span>
<span className="text-[9px] text-green-400 bg-green-500/10 px-1.5 py-0.5 rounded border border-green-500/20">Optimized</span>
</div>
<div className="space-y-2 relative z-10">
<div className="flex justify-between text-[10px] text-gray-400">
<span>Throughput</span>
<span className="text-white font-mono">250 MBPS</span>
</div>
<div className="w-full h-1 bg-[#222] rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 w-[90%] rounded-full shadow-[0_0_10px_cyan]"></div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full h-16 bg-[#0A0A0A]/90 backdrop-blur border-t border-white/5 flex justify-around items-center px-2 z-20">
<div className="p-2 rounded-full bg-white/10"><svg className="lucide lucide-home w-5 h-5 text-white" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg></div>
<svg className="lucide lucide-activity w-5 h-5 text-gray-500 hover:text-white transition-colors" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<svg className="lucide lucide-settings w-5 h-5 text-gray-500 hover:text-white transition-colors" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 via-purple-600/10 to-transparent blur-3xl -z-10 rounded-full transform scale-75 animate-[pulse_4s_infinite]"></div>
</div>
</div>

<section className="w-full max-w-6xl mt-24 mb-32" id="services">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div className="">
<div className="flex items-center gap-2 mb-4">
<span className="w-6 h-6 rounded bg-blue-500/10 text-blue-400 flex items-center justify-center text-xs font-bold border border-blue-500/20">01</span>
<span className="text-xs tracking-widest uppercase text-gray-500 font-semibold">Our Services</span>
</div>
<h2 className="text-4xl md:text-5xl font-oswald font-light text-white tracking-tight">
                        Integrated <span className="text-gray-500">Defense Systems</span>
</h2>
</div>
<p className="text-gray-400 max-w-sm text-sm leading-relaxed">
                    Surveillance, access control, and high-speed data. We fortify your environment with cutting-edge technology.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]">

<div className="md:col-span-2 relative group overflow-hidden bg-[#0A0A0A] border border-white/10 rounded-[2rem] p-8 hover:border-white/20 transition-all">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_50%)]"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="">
<div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mb-4 border border-blue-500/20 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-zap w-5 h-5 text-blue-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-2xl font-oswald font-light">Gigabit NBN Infrastructure</h3>
<p className="text-gray-400 text-sm mt-2 max-w-md">Enterprise-grade cabling and fiber optics ensuring zero-latency monitoring and data transmission.</p>
</div>

<div className="w-full h-32 relative flex items-end gap-1">
<div className="absolute top-0 w-full h-[1px] bg-blue-500/10"></div>
<div className="absolute bottom-0 w-full h-[1px] bg-blue-500/10"></div>

<div className="absolute top-0 left-0 w-full h-full pointer-events-none">
<div className="absolute top-[20%] left-0 w-1 h-1 bg-blue-400 rounded-full animate-[scan-horizontal_2s_linear_infinite]"></div>
<div className="absolute top-[50%] left-0 w-1 h-1 bg-blue-400 rounded-full animate-[scan-horizontal_3s_linear_infinite]"></div>
<div className="absolute top-[80%] left-0 w-1 h-1 bg-blue-400 rounded-full animate-[scan-horizontal_1.5s_linear_infinite]"></div>
</div>
<div className="w-[5%] h-[40%] bg-blue-500/20 rounded-t-sm group-hover:h-[50%] transition-all duration-500"></div>
<div className="w-[5%] h-[60%] bg-blue-500/20 rounded-t-sm group-hover:h-[45%] transition-all duration-500 delay-75"></div>
<div className="w-[5%] h-[30%] bg-blue-500/20 rounded-t-sm group-hover:h-[60%] transition-all duration-500 delay-100"></div>
<div className="w-[5%] h-[80%] bg-blue-500/20 rounded-t-sm group-hover:h-[70%] transition-all duration-500 delay-150"></div>
<div className="w-[5%] h-[50%] bg-blue-500/20 rounded-t-sm group-hover:h-[65%] transition-all duration-500 delay-200"></div>
<div className="w-[5%] h-[90%] bg-blue-500/20 rounded-t-sm group-hover:h-[80%] transition-all duration-500 delay-300"></div>
<div className="w-[5%] h-[70%] bg-blue-500/20 rounded-t-sm"></div>
<div className="w-[5%] h-[40%] bg-blue-500/20 rounded-t-sm"></div>
<div className="w-[5%] h-[100%] bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-sm shadow-[0_0_15px_rgba(59,130,246,0.5)] relative">
<div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-ping"></div>
</div>
<div className="w-[5%] h-[60%] bg-blue-500/20 rounded-t-sm"></div>
</div>
</div>
</div>

<div className="relative group overflow-hidden bg-[#0A0A0A] border border-white/10 rounded-[2rem] p-0 hover:border-red-500/30 transition-all">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.05),transparent_70%)] z-0"></div>
<div className="absolute inset-0 scan-overlay z-0 opacity-20"></div>

<div className="absolute w-full h-[2px] bg-red-500 shadow-[0_0_15px_red] z-20 animate-[scan-line_3s_linear_infinite]"></div>
<div className="relative z-10 p-8 h-full flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20">
<svg className="lucide lucide-scan-face w-5 h-5 text-red-400" data-lucide="scan-face" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><path d="M12 7a5 5 0 0 1 5 5"></path><path d="M7 12a5 5 0 0 1 5-5"></path><path d="M12 17a5 5 0 0 0 5-5"></path><path d="M7 12a5 5 0 0 0 5 5"></path></svg>
</div>
<span className="text-[10px] bg-red-900/30 text-red-400 px-2 py-1 rounded border border-red-500/20 animate-pulse">DETECTING</span>
</div>
<div className="mt-auto">
<h3 className="text-2xl font-oswald font-light">Perimeter Defense</h3>
<p className="text-gray-400 text-sm mt-2">Thermal CCTV, motion tracking &amp; automated alerts.</p>
</div>
</div>

<div className="absolute bottom-[-20px] right-[-20px] w-48 h-48 rounded-full border border-white/5 flex items-center justify-center pointer-events-none">
<div className="absolute inset-0 rounded-full border border-white/5 scale-75"></div>
<div className="absolute inset-0 rounded-full border border-white/5 scale-50"></div>
<div className="w-full h-full rounded-full bg-gradient-to-r from-transparent via-red-500/10 to-transparent animate-[radar-spin_4s_linear_infinite] origin-center"></div>
</div>
</div>

<div className="relative group overflow-hidden bg-[#0A0A0A] border border-white/10 rounded-[2rem] p-8 hover:border-purple-500/30 transition-all">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.1),transparent_60%)]"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center mb-4 border border-purple-500/20 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-shadow">
<svg className="lucide lucide-monitor-play w-5 h-5 text-purple-400" data-lucide="monitor-play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 7 5 3-5 3Z"></path><rect height="14" rx="2" width="20" x="2" y="3"></rect><path d="M12 17v4"></path><path d="M8 21h8"></path></svg>
</div>
<h3 className="text-2xl font-oswald font-light">Media Centers</h3>
<p className="text-gray-400 text-sm mt-2">4K distribution, surround sound &amp; theater automation.</p>
</div>

<div className="mt-8 flex gap-1 items-end h-10">
<div className="flex-1 bg-purple-500/50 rounded-full animate-[pulse_0.5s_infinite] h-[40%]"></div>
<div className="flex-1 bg-purple-500/50 rounded-full animate-[pulse_0.7s_infinite] h-[80%]"></div>
<div className="flex-1 bg-purple-500/50 rounded-full animate-[pulse_0.4s_infinite] h-[30%]"></div>
<div className="flex-1 bg-purple-500/50 rounded-full animate-[pulse_0.9s_infinite] h-[90%]"></div>
<div className="flex-1 bg-purple-500/50 rounded-full animate-[pulse_0.6s_infinite] h-[50%]"></div>
</div>
</div>

<div className="md:col-span-2 relative group overflow-hidden bg-[#0A0A0A] border border-white/10 rounded-[2rem] p-8 hover:border-green-500/30 transition-all">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
<div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
<div className="flex-1">
<div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center mb-4 border border-green-500/20">
<svg className="lucide lucide-building-2 w-5 h-5 text-green-400" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
</div>
<h3 className="text-2xl font-oswald font-light">Commercial Security</h3>
<p className="text-gray-400 text-sm mt-2">Biometric access control, thermal crowd monitoring, and data logging for improved safety protocols.</p>
<button className="mt-6 text-xs border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors flex items-center gap-2 group-hover:gap-3 transition-all">
                                Learn More <svg className="lucide lucide-arrow-right w-3 h-3" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>

<div className="w-full md:w-1/2 bg-[#000] rounded-xl border border-white/10 p-4 relative overflow-hidden">

<div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-green-500"></div>
<div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-green-500"></div>
<div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-green-500"></div>
<div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-green-500"></div>
<div className="flex justify-between items-center mb-4 border-b border-white/5 pb-2">
<span className="text-xs text-green-400 font-mono">CAM-EXT-04</span>
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between text-xs text-gray-400">
<span className="flex items-center gap-2"><svg className="lucide lucide-scan w-3 h-3 text-green-500" data-lucide="scan" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path></svg> Identity</span>
<span className="text-white bg-green-900/40 px-1 rounded animate-pulse">VERIFIED</span>
</div>
<div className="flex items-center justify-between text-xs text-gray-400">
<span className="flex items-center gap-2"><svg className="lucide lucide-thermometer w-3 h-3 text-yellow-500" data-lucide="thermometer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path></svg> Body Temp</span>
<span className="text-white">36.6°C</span>
</div>

<div className="absolute top-[40%] left-0 w-full h-[1px] bg-green-500/50 animate-[scan-line_2s_linear_infinite]"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-6xl mb-32 relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-blue-900/10 blur-[100px] pointer-events-none"></div>
<div className="text-center mb-16 relative">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 text-blue-400 mb-4 border border-blue-500/20 relative">
<div className="absolute inset-0 rounded-full border border-blue-400 opacity-20 animate-[ping-slow_3s_infinite]"></div>
<svg className="lucide lucide-package-check w-6 h-6" data-lucide="package-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 16 2 2 4-4"></path><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"></path><path d="m7.5 4.27 9 5.15"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><line x1="12" x2="12" y1="22" y2="12"></line></svg>
</div>
<h2 className="text-4xl md:text-5xl font-oswald font-light text-white tracking-tight mb-4">Visioncom <span className="text-blue-500">Package Deals</span></h2>
<p className="text-gray-400 max-w-xl mx-auto">Turnkey security and data solutions bundled for maximum protection and savings.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-[#0A0A0A] border border-white/10 rounded-[2.5rem] p-10 relative overflow-hidden group hover:border-blue-500/30 transition-all">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<svg className="lucide lucide-shield w-32 h-32 text-blue-500 rotate-12" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<div className="flex items-center gap-2 mb-2">
<h3 className="text-2xl font-oswald text-white">Starter Secure</h3>
<span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-gray-300">BASIC</span>
</div>
<div className="text-sm text-gray-400 mb-8">Essential coverage for residential properties.</div>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-sm text-gray-300 group-hover:text-white transition-colors">
<svg className="lucide lucide-check-circle w-4 h-4 text-blue-500" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> NBN Cabling &amp; Setup
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-300 group-hover:text-white transition-colors">
<svg className="lucide lucide-check-circle w-4 h-4 text-blue-500" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> Digital Antenna Install
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-300 group-hover:text-white transition-colors">
<svg className="lucide lucide-check-circle w-4 h-4 text-blue-500" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> Basic Wi-Fi Optimization
                        </li>
</ul>
<button className="w-full py-4 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white hover:text-black transition-all">
                        Request Quote
                    </button>
</div>

<div className="bg-gradient-to-b from-[#111] to-[#0A0A0A] border border-blue-500/30 rounded-[2.5rem] p-10 relative overflow-hidden group shadow-[0_0_40px_-10px_rgba(59,130,246,0.2)] hover:shadow-[0_0_60px_-10px_rgba(59,130,246,0.4)] transition-all">

<div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-600/20 to-transparent"></div>
<div className="absolute top-4 right-8 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-[0_0_10px_blue]">
<span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span> RECOMMENDED
                    </div>
<h3 className="text-2xl font-oswald text-white mb-2">Fortress &amp; Media</h3>
<div className="text-sm text-gray-400 mb-8">Total situational awareness &amp; entertainment</div>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-sm text-white">
<div className="bg-blue-500 rounded-full p-0.5 shadow-[0_0_5px_blue]"><svg className="lucide lucide-check w-3 h-3 text-black" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="group-hover:text-blue-200 transition-colors">4K CCTV (4 Cameras + DVR)</span>
</li>
<li className="flex items-center gap-3 text-sm text-white">
<div className="bg-blue-500 rounded-full p-0.5 shadow-[0_0_5px_blue]"><svg className="lucide lucide-check w-3 h-3 text-black" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="group-hover:text-blue-200 transition-colors">Smart App Integration (Remote View)</span>
</li>
<li className="flex items-center gap-3 text-sm text-white">
<div className="bg-blue-500 rounded-full p-0.5 shadow-[0_0_5px_blue]"><svg className="lucide lucide-check w-3 h-3 text-black" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="group-hover:text-blue-200 transition-colors">Alarm Sensors &amp; Sirens</span>
</li>
<li className="flex items-center gap-3 text-sm text-white">
<div className="bg-blue-500 rounded-full p-0.5 shadow-[0_0_5px_blue]"><svg className="lucide lucide-check w-3 h-3 text-black" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="group-hover:text-blue-200 transition-colors">Wall Mount TV &amp; Audio Cabling</span>
</li>
</ul>
<button className="w-full py-4 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-500 transition-all shadow-lg hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] relative overflow-hidden">
<div className="absolute inset-0 bg-white/20 translate-x-[-100%] animate-[scan-horizontal_2s_infinite]"></div>
                        Secure Your Home Now
                    </button>
</div>
</div>
</section>

<section className="w-full max-w-4xl bg-[#0A0A0A] border border-white/10 rounded-[2rem] p-8 md:p-12 mb-32 text-center relative overflow-hidden">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
<div className="w-[800px] h-[800px] border border-white/5 rounded-full animate-[ping_3s_infinite]"></div>
<div className="w-[600px] h-[600px] border border-white/5 rounded-full animate-[ping_3s_infinite_0.5s]"></div>
</div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
<div className="relative z-10">
<h2 className="text-3xl font-oswald text-white mb-4">Upgrade Your Security Grid</h2>
<p className="text-gray-400 mb-8">Serving Melbourne, Victoria with licensed security installers.</p>
<div className="flex flex-col md:flex-row justify-center gap-6">
<a className="flex items-center gap-3 bg-[#111] border border-white/10 px-6 py-4 rounded-xl hover:border-blue-500/50 transition-colors group relative overflow-hidden" href="mailto:amitkishore@visioncom.com.au">
<div className="absolute inset-0 bg-blue-500/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
<div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors text-blue-500 z-10">
<svg className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<div className="text-left z-10">
<div className="text-[10px] text-gray-500 uppercase tracking-wider group-hover:text-gray-300">Email Us</div>
<div className="text-sm font-medium text-white">amitkishore@visioncom.com.au</div>
</div>
</a>
<a className="flex items-center gap-3 bg-[#111] border border-white/10 px-6 py-4 rounded-xl hover:border-green-500/50 transition-colors group relative overflow-hidden" href="tel:+61432011340">
<div className="absolute inset-0 bg-green-500/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
<div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-colors text-green-500 z-10">
<svg className="lucide lucide-phone w-5 h-5" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<div className="text-left z-10">
<div className="text-[10px] text-gray-500 uppercase tracking-wider group-hover:text-gray-300">Emergency / Quote</div>
<div className="text-sm font-medium text-white">+61 (0)432 011 340</div>
</div>
</a>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/10 bg-[#050505] pt-20 pb-10 relative z-10">
<div className="w-full max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between gap-12 mb-20">
<div className="max-w-sm">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center text-white shadow-[0_0_10px_blue]">
<svg className="lucide lucide-fingerprint w-4 h-4" data-lucide="fingerprint" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4"></path><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"></path><path d="M8.65 22c.21-.66.45-1.32.57-2"></path><path d="M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 .95-.07 1.43"></path><path d="M14 20c.4-.73.66-1.5.8-2.28a4 4 0 0 1 .69-2.02"></path><path d="M10.3 21a1.96 1.96 0 0 0 1.68-2.6c-.25-.6-.56-1.23-.87-1.85"></path><path d="M15 6a4 4 0 0 1 1 2"></path></svg>
</div>
<span className="text-lg font-oswald text-white">VisionCom</span>
</a>
<p className="text-gray-400 text-sm leading-relaxed mb-6">
                        Advanced digital security infrastructure. Monitoring your world with precision and reliability.
                    </p>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-blue-500 transition-colors" href="#"><svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
<a className="text-gray-400 hover:text-blue-500 transition-colors" href="#"><svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-12 w-full max-w-2xl">
<div>
<h4 className="text-white font-medium mb-4 text-sm">Services</h4>
<ul className="space-y-3 text-xs text-gray-400">
<li><a className="hover:text-white transition-colors" href="#">CCTV Installation</a></li>
<li><a className="hover:text-white transition-colors" href="#">Alarm Systems</a></li>
<li><a className="hover:text-white transition-colors" href="#">Fiber Optics</a></li>
<li><a className="hover:text-white transition-colors" href="#">Home Theater</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Company</h4>
<ul className="space-y-3 text-xs text-gray-400">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Package Deals</a></li>
<li><a className="hover:text-white transition-colors" href="#">Commercial</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Contact</h4>
<ul className="space-y-3 text-xs text-gray-400">
<li>Melbourne, Victoria</li>
<li>amitkishore@visioncom.com.au</li>
<li>+61 (0)432 011 340</li>
</ul>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-gray-500">© 2024 VisionCom. All rights reserved.</p>
<div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-[10px] text-green-400 font-mono tracking-wider">SYSTEMS OPERATIONAL</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
