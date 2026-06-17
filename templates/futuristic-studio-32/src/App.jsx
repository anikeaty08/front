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
      

<div className="scanline"></div>
<div className="fixed top-0 left-0 w-full h-full pointer-events-none z-40 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDIiLz4KPC9zdmc+')] opacity-20"></div>

<nav className="fixed md:px-12 flex mix-blend-difference w-full z-50 pt-6 pr-6 pb-6 pl-6 top-0 items-center justify-between">
<div className="font-bold tracking-tighter text-sm md:text-base text-white uppercase flex items-center gap-2">
<span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            High Sequence
        </div>
<div className="hidden md:flex gap-8 text-xs font-mono tracking-widest text-zinc-500 uppercase">
<span>[ System Status: Nominal ]</span>
<span>[ 34.0522° N, 118.2437° W ]</span>
</div>
<button className="group flex items-center gap-2 text-xs uppercase tracking-widest text-white hover:text-zinc-300 transition-colors">
<span className="group-hover:opacity-100 transition-opacity opacity-0"></span>
<svg className="lucide lucide-activity" data-icon-replaced="true" data-icon-set="lucide" data-lucide="activity" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(212, 212, 216)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</button>
</nav>

<section className="flex flex-col overflow-hidden w-full h-screen relative items-center justify-center">
<div className="liquid-bg"></div>

<div className="z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
<div className="mb-6 fade-in-up delay-100">
<svg className="lucide lucide-aperture w-8 h-8 md:w-12 md:h-12 text-zinc-500 mx-auto animate-[spin_10s_linear_infinite]" data-lucide="aperture" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m14.31 8 5.74 9.94"></path><path d="M9.69 8h11.48"></path><path d="m7.38 12 5.74-9.94"></path><path d="M9.69 16 3.95 6.06"></path><path d="M14.31 16H2.83"></path><path d="m16.62 12-5.74 9.94"></path></svg>
</div>
<h1 className="text-5xl md:text-8xl lg:text-9xl font-semibold tracking-tighter text-chrome mb-8 fade-in-up delay-300 leading-none">
                REALITY<br/>OVERWRITE
            </h1>
<p className="font-mono text-xs md:text-sm text-zinc-500 max-w-md mx-auto tracking-widest uppercase fade-in-up delay-500 border-l border-zinc-800 pl-4 text-left">
                // Initiating Protocol 09<br/>
                // We engineer the inevitable.<br/>
                // Post-cinematic design systems.
            </p>
</div>

<div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 fade-in-up delay-700">
<span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600">Initialize</span>
<div className="h-12 w-[1px] bg-gradient-to-b from-zinc-800 via-white to-zinc-800"></div>
</div>
</section>

<section className="py-24 md:py-40 px-6 md:px-12 bg-black relative border-t border-zinc-900">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
<div className="md:col-span-4 sticky top-32">
<span className="font-mono text-xs text-zinc-600 block mb-4 tracking-widest">[ 01. IDENTITY ]</span>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight leading-tight">
                    We do not decorate. We build the logic of future history.
                </h2>
</div>
<div className="md:col-span-7 md:col-start-6 space-y-12">
<p className="text-lg md:text-xl font-light leading-relaxed text-zinc-300">
                    High Sequence operates in the vacuum between theoretical science and cinematic reality. We are not a design agency; we are an R&amp;D division for intellectual property that hasn't been invented yet.
                </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-zinc-900 pt-8">
<div>
<h3 className="text-white font-medium mb-2 flex items-center gap-2">
<svg className="lucide lucide-cpu w-4 h-4 text-zinc-500" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg> Engineered Aesthetics
                        </h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                            Interfaces that function with military precision. Visuals derived from simulation data, not trends.
                        </p>
</div>
<div>
<h3 className="text-white font-medium mb-2 flex items-center gap-2">
<svg className="lucide lucide-orbit w-4 h-4 text-zinc-500" data-lucide="orbit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.341 6.484A10 10 0 0 1 10.266 21.85"></path><path d="M3.659 17.516A10 10 0 0 1 13.74 2.152"></path><circle cx="12" cy="12" r="3"></circle><circle cx="19" cy="5" r="2"></circle><circle cx="5" cy="19" r="2"></circle></svg> Speculative Physics
                        </h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                            Visualizing technologies that obey the laws of physics, even if those laws are alien.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 border-t border-white/5">
<div className="px-6 md:px-12 mb-16 flex justify-between items-end">
<div>
<span className="font-mono text-xs text-zinc-600 block mb-2 tracking-widest">[ 02. ARTIFACTS ]</span>
<h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">CLASSIFIED ARCHIVES</h2>
</div>
<div className="hidden md:block text-right">
<span className="font-mono text-xs text-zinc-600 block">ENCRYPTION LEVEL: ZERO</span>
</div>
</div>

<div className="overflow-x-auto pb-12 px-6 md:px-12 flex gap-6 snap-x snap-mandatory scrollbar-hide">

<div className="min-w-[85vw] md:min-w-[600px] snap-center group relative cursor-pointer">
<div className="aspect-video bg-zinc-900 border border-white/10 overflow-hidden relative glow-hover">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-700 via-black to-black opacity-80 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-32 h-32 border border-white/20 rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite]">
<div className="w-24 h-24 border border-white/10 rotate-45"></div>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<span className="font-mono text-xs text-emerald-400 mb-1 block">:: PROJECT ORION</span>
<h3 className="text-xl text-white font-medium tracking-tight">Orbital Defense Interface</h3>
</div>
</div>
<div className="mt-4 flex justify-between items-center text-xs font-mono text-zinc-500 group-hover:text-white transition-colors">
<span>SYS_ARCH_01</span>
<span>2049</span>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[600px] snap-center group relative cursor-pointer">
<div className="aspect-video bg-zinc-900 border border-white/10 overflow-hidden relative glow-hover">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800 via-black to-black opacity-80 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="absolute inset-0 flex items-center justify-center">

<div className="grid grid-cols-4 gap-1 opacity-20 group-hover:opacity-40 transition-opacity">
<div className="w-4 h-12 bg-white"></div>
<div className="w-4 h-12 bg-transparent border border-white"></div>
<div className="w-4 h-12 bg-white"></div>
<div className="w-4 h-12 bg-transparent border border-white"></div>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<span className="font-mono text-xs text-emerald-400 mb-1 block">:: SYNTHETIC BIOLOGY</span>
<h3 className="text-xl text-white font-medium tracking-tight">Neural Link Dashboard</h3>
</div>
</div>
<div className="mt-4 flex justify-between items-center text-xs font-mono text-zinc-500 group-hover:text-white transition-colors">
<span>BIO_LNK_04</span>
<span>2051</span>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[600px] snap-center group relative cursor-pointer">
<div className="aspect-video bg-zinc-900 border border-white/10 overflow-hidden relative glow-hover">
<div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-black"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-30">
<svg className="lucide lucide-scan-line w-24 h-24 text-white stroke-1" data-lucide="scan-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><path d="M7 12h10"></path></svg>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<span className="font-mono text-xs text-emerald-400 mb-1 block">:: QUANTUM DATA</span>
<h3 className="text-xl text-white font-medium tracking-tight">Timeline Analytics</h3>
</div>
</div>
<div className="mt-4 flex justify-between items-center text-xs font-mono text-zinc-500 group-hover:text-white transition-colors">
<span>QTM_DATA_09</span>
<span>2052</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-black border-t border-zinc-900">
<div className="max-w-7xl mx-auto">
<span className="font-mono text-xs text-zinc-600 block mb-12 tracking-widest">[ 03. CAPABILITIES ]</span>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-900 border border-zinc-900">

<div className="bg-black p-8 md:p-12 hover:bg-zinc-950 transition-colors duration-500 group">
<div className="mb-8 opacity-50 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-box w-8 h-8 text-white stroke-1" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-4 tracking-tight">Tangible Holography</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">
                        Developing volumetric interfaces that respond to physical presence. We render light as matter.
                    </p>
</div>

<div className="bg-black p-8 md:p-12 hover:bg-zinc-950 transition-colors duration-500 group">
<div className="mb-8 opacity-50 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-network w-8 h-8 text-white stroke-1" data-lucide="network" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="6" rx="1" width="6" x="16" y="16"></rect><rect height="6" rx="1" width="6" x="2" y="16"></rect><rect height="6" rx="1" width="6" x="9" y="2"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-4 tracking-tight">Fictional Systems</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">
                        Complete operating systems for worlds that don't exist yet. From boot sequences to kernel panics.
                    </p>
</div>

<div className="bg-black p-8 md:p-12 hover:bg-zinc-950 transition-colors duration-500 group">
<div className="mb-8 opacity-50 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-zap w-8 h-8 text-white stroke-1" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-4 tracking-tight">Kinetic Branding</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">
                        Identities that live in motion. Static logos are dead artifacts; we build living marks.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-40 px-6 md:px-12 bg-black relative overflow-hidden">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>
<div className="max-w-2xl mx-auto relative z-10">
<div className="text-center mb-16">
<svg className="lucide lucide-radio-tower w-8 h-8 text-zinc-600 mx-auto mb-6" data-lucide="radio-tower" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.9 16.1C1 12.2 1 5.8 4.9 1.9"></path><path d="M7.8 4.7a6.14 6.14 0 0 0-.8 7.5"></path><circle cx="12" cy="9" r="2"></circle><path d="M16.2 4.8c2 2 2.26 5.11.8 7.47"></path><path d="M19.1 1.9a9.96 9.96 0 0 1 0 14.1"></path><path d="M9.5 18h5"></path><path d="m8 22 4-11 4 11"></path></svg>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tighter mb-4">INITIATE UPLINK</h2>
<p className="font-mono text-xs text-zinc-500 tracking-widest uppercase">Secure Channel Open // Encryption Key: ACTIVE</p>
</div>
<form className="space-y-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="group relative">
<label className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest block mb-2 group-focus-within:text-white transition-colors">Identifier</label>
<input className="w-full bg-transparent border-b border-zinc-800 py-3 text-white font-light text-lg focus:border-white transition-colors placeholder-zinc-800" placeholder="CODENAME / NAME" type="text"/>
<div className="absolute bottom-0 left-0 w-0 h-px bg-white group-focus-within:w-full transition-all duration-500"></div>
</div>
<div className="group relative">
<label className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest block mb-2 group-focus-within:text-white transition-colors">Frequency</label>
<input className="w-full bg-transparent border-b border-zinc-800 py-3 text-white font-light text-lg focus:border-white transition-colors placeholder-zinc-800" placeholder="EMAIL ADDRESS" type="email"/>
<div className="absolute bottom-0 left-0 w-0 h-px bg-white group-focus-within:w-full transition-all duration-500"></div>
</div>
</div>
<div className="group relative">
<label className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest block mb-2 group-focus-within:text-white transition-colors">Transmission Data</label>
<textarea className="w-full bg-transparent border-b border-zinc-800 py-3 text-white font-light text-lg focus:border-white transition-colors placeholder-zinc-800 resize-none overflow-hidden" oninput="this.style.height = ''; this.style.height = this.scrollHeight + 'px'" placeholder="OBJECTIVE PARAMETERS..." rows="1"></textarea>
<div className="absolute bottom-0 left-0 w-0 h-px bg-white group-focus-within:w-full transition-all duration-500"></div>
</div>
<div className="pt-8 flex justify-center">
<button className="group relative px-8 py-4 bg-zinc-900 hover:bg-white transition-colors duration-500 overflow-hidden" type="button">
<div className="absolute inset-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')] opacity-0 group-hover:opacity-100"></div>
<span className="relative z-10 font-mono text-xs text-white group-hover:text-black uppercase tracking-[0.2em] transition-colors">Transmit Signal</span>
<div className="absolute top-0 left-0 w-1 h-1 bg-white group-hover:bg-black"></div>
<div className="absolute top-0 right-0 w-1 h-1 bg-white group-hover:bg-black"></div>
<div className="absolute bottom-0 left-0 w-1 h-1 bg-white group-hover:bg-black"></div>
<div className="absolute bottom-0 right-0 w-1 h-1 bg-white group-hover:bg-black"></div>
</button>
</div>
</form>
</div>
</section>

<footer className="py-12 border-t border-zinc-900 bg-black flex flex-col md:flex-row justify-between items-center px-6 md:px-12 text-[10px] text-zinc-600 font-mono uppercase tracking-widest">
<div>High Sequence © 2088</div>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Index</a>
<a className="hover:text-white transition-colors" href="#">Legal</a>
<a className="hover:text-white transition-colors" href="#">System</a>
</div>
</footer>


    </>
  );
}
