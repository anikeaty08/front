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
      

<div className="fixed inset-0 pointer-events-none z-0">
<div className="absolute inset-0 bg-grid"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none"></div>
</div>

<header className="fixed top-0 w-full z-50 pt-6 px-6">
<div className="max-w-7xl mx-auto flex items-center justify-between">

<a className="text-xl font-medium tracking-tight text-white/90 hover:text-white transition-colors" href="#">
                Farness<span className="text-[10px] align-top ml-0.5 text-neutral-500">®</span>
</a>

<nav className="hidden md:flex items-center gap-1 px-1.5 py-1.5 bg-neutral-900/80 backdrop-blur-md border border-white/5 rounded-full shadow-2xl shadow-black/50">
<a className="px-4 py-1.5 text-sm text-neutral-400 hover:text-white transition-colors" href="#">Home</a>
<a className="px-4 py-1.5 text-sm text-neutral-400 hover:text-white transition-colors" href="#">Technologies</a>
<a className="px-4 py-1.5 text-sm bg-white/10 text-white rounded-full transition-colors border border-white/5" href="#">Use cases</a>
</nav>

<a className="px-5 py-2 text-sm font-medium bg-white text-black rounded-full hover:bg-neutral-200 transition-colors" href="#">
                Contact
            </a>
</div>
</header>
<main className="relative z-10 flex-grow pt-32 pb-24 px-6">
<div className="max-w-7xl mx-auto space-y-24">

<section className="max-w-4xl">
<div className="flex items-center gap-2 mb-6">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
<span className="text-sm font-medium text-blue-400 uppercase tracking-widest">Core Industry</span>
</div>
<h2 className="text-5xl md:text-6xl font-medium tracking-tight text-white mb-2 leading-[1.1]">
                    Our Main Industry: <br/>
<span className="text-neutral-400">Mining</span>
</h2>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative p-8 bg-neutral-900/40 border border-white/5 rounded-3xl hover:bg-neutral-900/60 hover:border-white/10 transition-all duration-500 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center mb-8 text-white/80">
<i className="w-6 h-6" data-lucide="shield-check"></i>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-3">24/7 Aerial Patrols</h3>
<p className="text-lg text-neutral-400 leading-relaxed">Secure large mining sites with autonomous drones capable of detecting intrusions or anomalies in real time.</p>
</div>
</div>

<div className="group relative p-8 bg-neutral-900/40 border border-white/5 rounded-3xl hover:bg-neutral-900/60 hover:border-white/10 transition-all duration-500 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center mb-8 text-white/80">
<i className="w-6 h-6" data-lucide="scan-line"></i>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-3">Infrastructure Inspection</h3>
<p className="text-lg text-neutral-400 leading-relaxed">Inspect pipelines, conveyors, power lines, and rail systems without interrupting operations or exposing personnel to risk.</p>
</div>
</div>

<div className="group relative p-8 bg-neutral-900/40 border border-white/5 rounded-3xl hover:bg-neutral-900/60 hover:border-white/10 transition-all duration-500 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center mb-8 text-white/80">
<i className="w-6 h-6" data-lucide="layers"></i>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-3">Stockpile Estimation</h3>
<p className="text-lg text-neutral-400 leading-relaxed">Generate high-precision 3D models to instantly calculate stockpile volumes and support logistics and sales decisions.</p>
</div>
</div>

<div className="group relative p-8 bg-neutral-900/40 border border-white/5 rounded-3xl hover:bg-neutral-900/60 hover:border-white/10 transition-all duration-500 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center mb-8 text-white/80">
<i className="w-6 h-6" data-lucide="mountain-snow"></i>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-3">New Zone Exploration</h3>
<p className="text-lg text-neutral-400 leading-relaxed">Autonomously map and analyze unexplored terrain for geological assessment or strategic planning.</p>
</div>
</div>

<div className="group relative p-8 bg-neutral-900/40 border border-white/5 rounded-3xl hover:bg-neutral-900/60 hover:border-white/10 transition-all duration-500 overflow-hidden flex flex-col justify-between">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 mb-8">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center mb-8 text-white/80">
<i className="w-6 h-6" data-lucide="trending-up"></i>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-3">ROI Comparison</h3>
<p className="text-lg text-neutral-400 leading-relaxed">Visualize cost reduction and efficiency gains achieved through drone-based automation.</p>
</div>

<div className="relative z-10 mt-auto h-24 flex items-end gap-3 px-2 border-b border-white/10 pb-0">
<div className="w-1/4 h-[40%] bg-white/5 rounded-t-sm"></div>
<div className="w-1/4 h-[65%] bg-white/10 rounded-t-sm"></div>
<div className="w-1/4 h-[50%] bg-white/5 rounded-t-sm"></div>
<div className="w-1/4 h-[85%] bg-gradient-to-t from-blue-500/20 to-blue-500/80 rounded-t-sm border-t border-x border-blue-400/30"></div>
</div>
</div>

<div className="group relative p-8 bg-neutral-900/40 border border-white/5 rounded-3xl hover:bg-neutral-900/60 hover:border-white/10 transition-all duration-500 overflow-hidden flex flex-col justify-between">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 mb-8">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center mb-8 text-white/80">
<i className="w-6 h-6" data-lucide="map"></i>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-3">Map Overlay</h3>
<p className="text-lg text-neutral-400 leading-relaxed">Layer operational maps of mining zones to support terrain analysis, planning, and exploration initiatives.</p>
</div>

<div className="relative z-10 mt-auto h-24 w-full rounded-lg overflow-hidden border border-white/5 bg-black/20">

<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)', backgroundSize: '10px 10px', opacity: '0.5'}}></div>

<svg className="absolute inset-0 w-full h-full text-white/10" fill="none" stroke="currentColor" strokeWidth="1">
<path d="M0 20 Q 30 50 60 40 T 120 50 T 180 30 T 240 60 T 300 40"></path>
<path d="M0 50 Q 40 80 80 60 T 160 70 T 240 50 T 320 80"></path>
<path d="M0 80 Q 50 100 100 90 T 200 100 T 300 80"></path>
</svg>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)] animate-pulse"></div>
</div>
</div>
</section>

<section className="border-t border-white/5 pt-20">
<div className="flex flex-col md:flex-row gap-12 md:gap-24">
<div className="md:w-1/3">
<div className="flex items-center gap-2 mb-4">
<div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
<h3 className="text-lg font-medium text-white uppercase tracking-widest">Analysis</h3>
</div>
</div>
<div className="md:w-2/3">
<p className="text-xl md:text-2xl leading-relaxed text-neutral-400 font-light">
                            In mining environments, autonomous drone operations <span className="text-white font-normal">reduce human exposure</span> to hazardous areas, minimize operational delays, and provide continuous situational awareness. This results in improved site safety, better planning accuracy, and <span className="text-white font-normal">measurable cost reductions</span>.
                        </p>
</div>
</div>
</section>
</div>
</main>

<footer className="relative z-10 border-t border-white/5 bg-black pt-24 pb-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col items-center">

<div className="mb-24 text-center">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs font-medium text-neutral-400 mb-8">
<span className="w-1 h-1 rounded-full bg-green-500"></span>
                    Ecosystem
                </span>
<h4 className="text-3xl font-medium text-white tracking-tight mb-2">Our Partners</h4>
<p className="text-neutral-500 text-sm">Trusted by leading technology and innovation partners</p>
<div className="flex flex-wrap justify-center gap-12 mt-12 opacity-40 grayscale mix-blend-screen">

<div className="flex items-center gap-2"><div className="w-6 h-6 bg-white rounded-sm"></div><span className="font-bold text-white tracking-tighter text-xl">ACME</span></div>
<div className="flex items-center gap-2"><div className="w-6 h-6 bg-white rounded-full"></div><span className="font-bold text-white tracking-tighter text-xl">GLOBEX</span></div>
<div className="flex items-center gap-2"><div className="w-6 h-6 border-2 border-white rounded-sm"></div><span className="font-bold text-white tracking-tighter text-xl">SOYUZ</span></div>
</div>
</div>

<div className="w-full max-w-4xl bg-neutral-900/30 border border-white/5 rounded-[2rem] p-12 md:p-20 text-center mb-32 relative overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6 relative z-10">
                    Ready to Deploy<br/>Autonomous Intelligence?
                </h2>
<p className="text-lg text-neutral-400 mb-10 max-w-lg mx-auto relative z-10">
                    Discover how Farness can automate your critical operations with intelligent, coordinated drone systems.
                </p>
<button className="relative z-10 px-8 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-neutral-200 transition-colors">
                    Request a Demo
                </button>
</div>

<div className="w-full flex justify-center mb-16 select-none pointer-events-none">
<h1 className="text-[14vw] leading-none font-medium tracking-tighter text-white relative">
                    Farness<sup className="text-[2vw] border-2 border-white rounded-full w-[4vw] h-[4vw] inline-flex items-center justify-center align-top mt-[2vw] ml-[1vw]">c</sup>
</h1>
</div>

<div className="w-full flex flex-col md:flex-row items-center justify-between text-xs text-neutral-500 gap-6 border-t border-white/5 pt-8">
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors" href="#"><i className="w-3.5 h-3.5" data-lucide="twitter"></i></a>
<a className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors" href="#"><i className="w-3.5 h-3.5" data-lucide="instagram"></i></a>
<a className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors" href="#"><i className="w-3.5 h-3.5" data-lucide="linkedin"></i></a>
</div>
<div className="flex gap-8">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors" href="#">Status</a>
</div>
<div>
                    © 2024 Farness . All rights reserved.
                </div>
</div>
</div>
</footer>


    </>
  );
}
