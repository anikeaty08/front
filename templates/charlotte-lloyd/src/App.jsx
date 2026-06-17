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
      

<canvas className="fixed inset-0 z-0 pointer-events-none opacity-60" height="949" id="webgl-stars" width="1728"></canvas>

<div className="fixed inset-0 opacity-[0.04] pointer-events-none z-50 mix-blend-overlay" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E\')'}}></div>

<div className="fixed top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-600/10 blur-[120px] rounded-full pointer-events-none z-0" id="light1"></div>
<div className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-teal-600/10 blur-[100px] rounded-full pointer-events-none z-0" id="light2"></div>
<div className="z-10 w-full relative">

<nav className="sticky top-0 z-50 bg-[#030303]/80 backdrop-blur-sm border-b border-zinc-800/50">
<div className="max-w-[1200px] mx-auto px-6 py-5 flex flex-wrap md:flex-nowrap items-center md:gap-4 lg:gap-8 relative">

<div className="flex-shrink-0 flex items-center gap-2 text-xl tracking-tight font-normal text-white">
            Charlotte Lloyd
            <div className="h-7 px-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg flex items-center justify-center">
<span className="text-xs font-medium text-emerald-300 tracking-wide uppercase">
                Acquisition Club
              </span>
</div>
</div>

<div className="flex items-center gap-4 ml-auto md:hidden">
<a className="flex items-center justify-center px-4 py-1.5 bg-zinc-800 text-emerald-400 border border-emerald-500/30 rounded-full text-sm font-normal hover:bg-zinc-700 shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all" href="#">
              Book a call
            </a>
<button aria-expanded="false" aria-label="Toggle navigation" className="text-zinc-400 hover:text-white transition-colors flex items-center justify-center p-1 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 rounded-md" id="mobile-menu-btn" onclick="const menu = document.getElementById('mobile-menu'); const expanded = this.getAttribute('aria-expanded') === 'true'; this.setAttribute('aria-expanded', !expanded); menu.classList.toggle('opacity-0'); menu.classList.toggle('invisible'); menu.classList.toggle('-translate-y-4'); menu.classList.toggle('opacity-100'); menu.classList.toggle('visible'); menu.classList.toggle('translate-y-0');">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<div className="hidden md:flex lg:hidden flex-1 justify-center items-center gap-6 text-sm text-zinc-400 font-normal relative">
<a className="hover:text-emerald-300 transition-colors drop-shadow-[0_0_5px_rgba(52,211,153,0)] hover:drop-shadow-[0_0_5px_rgba(52,211,153,0.5)]" href="#">
              System
            </a>
<button aria-controls="tablet-more-menu" aria-expanded="false" className="flex items-center gap-1 hover:text-emerald-300 transition-colors focus:outline-none" id="tablet-more-btn" onclick="const menu = document.getElementById('tablet-more-menu'); const expanded = this.getAttribute('aria-expanded') === 'true'; this.setAttribute('aria-expanded', !expanded); menu.classList.toggle('opacity-0'); menu.classList.toggle('invisible'); menu.classList.toggle('-translate-y-2'); menu.classList.toggle('opacity-100'); menu.classList.toggle('visible'); menu.classList.toggle('translate-y-0');">
              More
              <iconify-icon className="text-sm" icon="lucide:chevron-down"></iconify-icon>
</button>
<div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-48 bg-[#030303]/95 backdrop-blur-xl border border-zinc-800/50 rounded-xl px-5 py-5 flex flex-col gap-4 shadow-2xl transition-all duration-300 opacity-0 -translate-y-2 invisible z-50" id="tablet-more-menu">
<a className="hover:text-emerald-300 transition-colors" href="#">Process</a>
<a className="hover:text-emerald-300 transition-colors" href="#">Results</a>
<a className="hover:text-emerald-300 transition-colors" href="#">About</a>
<a className="hover:text-emerald-300 transition-colors" href="#">FAQ</a>
</div>
</div>

<div className="hidden md:flex items-center justify-end flex-shrink-0 gap-4 ml-auto whitespace-nowrap">
<a className="flex items-center justify-center px-6 py-2 bg-zinc-800 text-emerald-400 border border-emerald-500/30 rounded-full text-sm font-normal hover:bg-zinc-700 shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]" href="#">
              Book a call
            </a>
</div>
</div>

<div className="absolute top-full left-0 w-full bg-[#030303]/95 backdrop-blur-xl border-b border-zinc-800/50 px-6 py-6 flex flex-col gap-6 shadow-2xl transition-all duration-300 opacity-0 -translate-y-4 invisible md:hidden z-40" id="mobile-menu">
<div className="flex flex-col gap-4 text-base text-zinc-400 font-normal">
<a className="hover:text-emerald-300 transition-colors" href="#">System</a>
<a className="hover:text-emerald-300 transition-colors" href="#">Process</a>
<a className="hover:text-emerald-300 transition-colors" href="#">Results</a>
<a className="hover:text-emerald-300 transition-colors" href="#">About</a>
<a className="hover:text-emerald-300 transition-colors" href="#">FAQ</a>
</div>
<div className="h-px w-full bg-zinc-800/50"></div>
<div className="flex flex-col gap-4 text-base text-zinc-400 font-normal">
<a className="inline-flex items-center justify-center px-6 py-3 border border-zinc-700 bg-zinc-900/50 rounded-full text-base font-normal text-emerald-400 hover:bg-zinc-800 transition-colors backdrop-blur-sm w-fit" href="#">
              Book a call
            </a>
</div>
</div>
</nav>

<section className="text-center max-w-[1000px] mr-auto ml-auto pt-24 pr-6 pb-16 pl-6 relative">

<div className="absolute inset-0 overflow-hidden pointer-events-none z-0 mix-blend-screen opacity-50">
<svg className="absolute w-[200%] h-full top-0 left-[-50%] opacity-40 animate-[spin_120s_linear_infinite]" fill="none" viewbox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
<path d="M-500,500 C0,300 500,700 1500,500" stroke="url(#emerald-gradient)" stroke-dasharray="10 10" strokeWidth="2"></path>
<path d="M-500,600 C0,400 500,800 1500,600" stroke="url(#emerald-gradient)" stroke-dasharray="5 15" strokeWidth="1.5"></path>
<path d="M-500,400 C0,200 500,600 1500,400" stroke="url(#emerald-gradient)" strokeWidth="1"></path>
<defs>
<lineargradient id="emerald-gradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="transparent"></stop>
<stop offset="50%" stop-color="#10b981"></stop>
<stop offset="100%" stop-color="transparent"></stop>
</lineargradient>
</defs>
</svg>
</div>
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),_0_4px_10px_rgba(0,0,0,0.5)] border border-zinc-700/50 mb-8 backdrop-blur-md mx-auto relative z-10">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
</span>
<span className="text-xs font-light text-emerald-300 tracking-wide uppercase drop-shadow-[0_0_5px_rgba(16,185,129,0.5)]">
            Client Acquisition System
          </span>
</div>
<h1 className="text-5xl md:text-7xl font-extralight tracking-tight leading-[1.1] mb-6 text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)] relative z-10">
<span className="block">You Don’t Have a Lead Problem.</span>
<span className="block text-transparent bg-clip-text bg-gradient-to-b from-emerald-300 to-emerald-600 drop-shadow-[0_0_15px_rgba(16,185,129,0.4)] italic font-light">
            You Have a System Problem
          </span>
</h1>
<p className="text-xl text-zinc-300/80 mb-10 max-w-2xl mx-auto font-extralight leading-relaxed relative z-10">
          Most people trying to get clients rely on inconsistent tactics. Charlotte Lloyd helps you build a system that actually brings in clients consistently.
        </p>

<div className="max-w-md mx-auto relative z-10">
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
<a className="w-full sm:w-auto px-8 py-4 bg-zinc-800 text-emerald-400 border border-emerald-500/30 rounded-full text-base font-light shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:bg-zinc-700 transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] whitespace-nowrap" href="#">
              Fix My Client Acquisition
            </a>
</div>
</div>
</section>

<section className="px-6 pb-24 relative z-10">
<div className="max-w-[1000px] mx-auto">
<div className="p-3 rounded-[32px] bg-zinc-800 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),_0_20px_40px_-10px_rgba(0,0,0,0.9),_0_0_0_1px_rgba(0,0,0,1)] flex flex-col relative">
<div className="absolute bottom-3 right-6 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse"></div>
<div className="absolute bottom-3 right-10 w-2 h-2 rounded-full bg-zinc-700 shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)]"></div>
<div className="relative rounded-[20px] bg-[#020a02] shadow-[inset_0_0_40px_rgba(0,0,0,1)] border-[6px] border-zinc-950 flex flex-col md:flex-row min-h-[500px] overflow-hidden">
<div className="absolute inset-0 pointer-events-none z-20 opacity-30 mix-blend-overlay" style={{background: 'repeating-linear-gradient(0deg, #000, #000 2px, transparent 2px, transparent 4px)'}}></div>
<div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none z-10 rounded-t-[14px]"></div>

<div className="md:w-[60%] relative flex items-center justify-center border-b md:border-b-0 md:border-r border-zinc-900 bg-black/60 overflow-hidden group min-h-[300px] md:min-h-full cursor-pointer">
<div className="absolute inset-0 bg-emerald-500/5 mix-blend-screen pointer-events-none z-10 animate-pulse" style={{animationDuration: '4s'}}></div>
<div className="relative z-30 flex flex-col items-center gap-6">
<div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/30 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(16,185,129,0.2)] group-hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]">
<iconify-icon className="text-6xl text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.6)]" icon="solar:play-circle-bold-duotone" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs font-light tracking-[0.2em] text-zinc-500 uppercase bg-black/50 px-4 py-1.5 rounded-full border border-zinc-800">
                    Video Placeholder
                  </span>
</div>
</div>

<div className="md:w-[40%] relative z-30 p-8 flex flex-col gap-6 bg-zinc-950/80 backdrop-blur-md overflow-y-auto">
<div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-light text-emerald-300/90 tracking-wide w-fit">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400/90 shadow-[0_0_10px_rgba(16,185,129,0.35)] animate-pulse"></span>
                  Watch: Why You’re Not Getting Consistent Clients
                </div>
<div className="text-base text-zinc-300 font-extralight leading-relaxed reveal-item is-visible">
                  If you’re not getting clients consistently, the issue isn’t effort.
                  <br/><br/>
<span className="text-emerald-400 font-light">It’s structure.</span>
</div>
<div className="border-l-[1.5px] border-emerald-500/30 pl-4 py-1 reveal-item is-visible">
<p className="text-sm text-zinc-400 font-light mb-3">Most people:</p>
<ul className="text-sm text-zinc-400 font-extralight space-y-2.5 list-disc pl-4 marker:text-emerald-500/50">
<li>try different strategies every week</li>
<li>rely on random outreach</li>
<li>don’t have a clear acquisition system</li>
<li>struggle to turn conversations into clients</li>
</ul>
</div>
<div className="mt-auto pt-4 reveal-item is-visible">
<button className="w-full py-3.5 bg-zinc-800/80 text-emerald-400 border border-emerald-500/30 rounded-xl text-sm font-light hover:bg-zinc-800 shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-all flex items-center justify-center gap-2 group">
                    Fix My Client Acquisition
                    <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="pt-24 pb-24 bg-black/20 backdrop-blur-sm relative z-10">

<section className="mb-24 relative">
<div className="max-w-[1200px] mx-auto px-6 mb-10 text-center flex flex-col items-center gap-3">
<div className="text-sm md:text-base font-light tracking-[0.15em] uppercase text-zinc-300">
              Coaches and consultants getting consistent clients
            </div>
</div>
<div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden">
<div className="absolute top-0 left-0 w-24 md:w-40 h-full bg-gradient-to-r from-[#030303] to-transparent z-20 pointer-events-none"></div>
<div className="absolute top-0 right-0 w-24 md:w-40 h-full bg-gradient-to-l from-[#030303] to-transparent z-20 pointer-events-none"></div>
<div className="flex w-max items-center opacity-60 hover:opacity-100 transition-all duration-500 text-zinc-500" id="logo-marquee-track">
<div className="flex items-center gap-x-8 pr-8">
<div className="flex items-center justify-center px-8 py-3 bg-zinc-900/40 border border-zinc-800 rounded-xl text-xs tracking-widest uppercase font-light w-48 shrink-0">Image Placeholder</div>
<div className="flex items-center justify-center px-8 py-3 bg-zinc-900/40 border border-zinc-800 rounded-xl text-xs tracking-widest uppercase font-light w-48 shrink-0">Image Placeholder</div>
<div className="flex items-center justify-center px-8 py-3 bg-zinc-900/40 border border-zinc-800 rounded-xl text-xs tracking-widest uppercase font-light w-48 shrink-0">Image Placeholder</div>
<div className="flex items-center justify-center px-8 py-3 bg-zinc-900/40 border border-zinc-800 rounded-xl text-xs tracking-widest uppercase font-light w-48 shrink-0">Image Placeholder</div>
<div className="flex items-center justify-center px-8 py-3 bg-zinc-900/40 border border-zinc-800 rounded-xl text-xs tracking-widest uppercase font-light w-48 shrink-0">Image Placeholder</div>
</div>
<div aria-hidden="true" className="flex items-center gap-x-8 pr-8">
<div className="flex items-center justify-center px-8 py-3 bg-zinc-900/40 border border-zinc-800 rounded-xl text-xs tracking-widest uppercase font-light w-48 shrink-0">Image Placeholder</div>
<div className="flex items-center justify-center px-8 py-3 bg-zinc-900/40 border border-zinc-800 rounded-xl text-xs tracking-widest uppercase font-light w-48 shrink-0">Image Placeholder</div>
<div className="flex items-center justify-center px-8 py-3 bg-zinc-900/40 border border-zinc-800 rounded-xl text-xs tracking-widest uppercase font-light w-48 shrink-0">Image Placeholder</div>
<div className="flex items-center justify-center px-8 py-3 bg-zinc-900/40 border border-zinc-800 rounded-xl text-xs tracking-widest uppercase font-light w-48 shrink-0">Image Placeholder</div>
<div className="flex items-center justify-center px-8 py-3 bg-zinc-900/40 border border-zinc-800 rounded-xl text-xs tracking-widest uppercase font-light w-48 shrink-0">Image Placeholder</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1200px] mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-16 mb-16 items-start justify-between">
<h2 className="text-3xl md:text-5xl font-extralight tracking-tight text-white leading-[1.2] max-w-2xl drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">
              Client Acquisition System
            </h2>
<div className="flex flex-col items-start lg:items-end text-left lg:text-right shrink-0 max-w-sm">
<div className="text-base text-zinc-300 font-light leading-relaxed mb-4">
                People who get clients consistently don't rely on luck. They rely on:
                <br/>
<span className="text-emerald-400">clear systems, strong messaging, repeatable actions.</span>
</div>
<div className="uppercase text-xs text-zinc-500 tracking-widest">
                This is what turns:
              </div>
<div className="text-sm text-emerald-300 font-light tracking-tight mt-1 flex items-center gap-2 drop-shadow-[0_0_8px_rgba(110,231,183,0.5)]">
                Effort → into clients
              </div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl shadow-[inset_0_1px_10px_rgba(0,0,0,1),_0_1px_0_rgba(255,255,255,0.05)] border border-zinc-800 flex flex-col h-56 justify-between relative overflow-hidden group">
<div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
<div className="flex flex-col h-full relative z-10 justify-between">
<div>
<div className="text-4xl md:text-5xl font-extralight tracking-tight text-emerald-400 leading-none drop-shadow-[0_0_12px_rgba(52,211,153,0.6)] mb-6">
                    Step 1
                  </div>
<h3 className="text-lg text-white font-light leading-snug">
                    Identify gaps in your current approach
                  </h3>
</div>
<div className="mt-5 flex items-center gap-1.5 text-sm font-light text-zinc-500 group-hover:text-emerald-400 transition-colors">
<iconify-icon className="text-lg" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
                  Audit &amp; Analysis
                </div>
</div>
</div>
<div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl shadow-[inset_0_1px_10px_rgba(0,0,0,1),_0_1px_0_rgba(255,255,255,0.05)] border border-zinc-800 flex flex-col h-56 justify-between relative overflow-hidden group">
<div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
<div className="flex flex-col h-full relative z-10 justify-between">
<div>
<div className="text-4xl md:text-5xl font-extralight tracking-tight text-emerald-400 leading-none drop-shadow-[0_0_12px_rgba(52,211,153,0.6)] mb-6">
                    Step 2
                  </div>
<h3 className="text-lg text-white font-light leading-snug">
                    Build a simple acquisition system
                  </h3>
</div>
<div className="mt-5 flex items-center gap-1.5 text-sm font-light text-zinc-500 group-hover:text-emerald-400 transition-colors">
<iconify-icon className="text-lg" icon="solar:structure-linear" strokeWidth="1.5"></iconify-icon>
                  System Architecture
                </div>
</div>
</div>
<div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl shadow-[inset_0_1px_10px_rgba(0,0,0,1),_0_1px_0_rgba(255,255,255,0.05)] border border-zinc-800 flex flex-col h-56 justify-between relative overflow-hidden group">
<div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
<div className="flex flex-col h-full relative z-10 justify-between">
<div>
<div className="text-4xl md:text-5xl font-extralight tracking-tight text-emerald-400 leading-none drop-shadow-[0_0_12px_rgba(52,211,153,0.6)] mb-6">
                    Step 3
                  </div>
<h3 className="text-lg text-white font-light leading-snug">
                    Improve messaging and conversion
                  </h3>
</div>
<div className="mt-5 flex items-center gap-1.5 text-sm font-light text-zinc-500 group-hover:text-emerald-400 transition-colors">
<iconify-icon className="text-lg" icon="solar:chat-square-check-linear" strokeWidth="1.5"></iconify-icon>
                  Outreach Optimization
                </div>
</div>
</div>
</div>
<div className="mt-12 flex justify-center">
<a className="inline-flex items-center justify-center px-8 py-3.5 bg-zinc-800 text-emerald-400 border border-emerald-500/30 rounded-full text-base font-light hover:bg-zinc-700 shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]" href="#">
              Get More Clients
            </a>
</div>
</section>
</div>
<div className="w-full h-px relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-800/80 to-transparent"></div>

<div className="absolute left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent drop-shadow-[0_0_8px_rgba(16,185,129,0.35)]"></div>
</div>

<section className="py-24 px-6 max-w-[1200px] mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-white mb-16 drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">
          Why You’re Not Getting Clients Consistently
        </h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">

<div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-zinc-800/60 transition-colors backdrop-blur-sm group shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)] relative overflow-hidden min-h-[350px]">

<div className="relative z-10 flex flex-col items-center justify-center flex-1 transition-opacity duration-200 md:group-hover:opacity-0">
<div className="w-12 h-12 bg-zinc-950 rounded-xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(16,185,129,0.05)] border border-zinc-700/50 group-hover:border-emerald-500/40 transition-colors">
<iconify-icon className="text-2xl text-zinc-400 group-hover:text-emerald-400 transition-colors" icon="solar:clipboard-remove-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-light tracking-tight text-zinc-200 mb-3 group-hover:text-emerald-300 transition-colors">
                No clear system
              </h3>
<p className="text-base text-zinc-500 font-extralight max-w-[26ch]">
                Everything depends on effort.
              </p>
</div>

<div className="hidden md:flex absolute inset-0 z-20 flex-col translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-zinc-900/95 backdrop-blur-sm">
<div className="absolute top-0 left-0 right-0 h-px bg-emerald-500/25"></div>
<div className="absolute -top-10 left-1/2 -translate-x-1/2 w-2/3 h-24 bg-emerald-500/10 blur-2xl"></div>
<div className="h-full p-6 flex flex-col text-left justify-center">
<h3 className="text-lg font-light tracking-tight text-emerald-300 mb-3">
                  Systematic Approach
                </h3>
<p className="text-sm text-zinc-300/80 font-light leading-relaxed">
                  Without a predictable acquisition structure, you start from zero every month. Systems remove the guesswork and make results repeatable.
                </p>
</div>
</div>
</div>

<div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-zinc-800/60 transition-colors backdrop-blur-sm group shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)] relative overflow-hidden min-h-[350px]">

<div className="relative z-10 flex flex-col items-center justify-center flex-1 transition-opacity duration-200 md:group-hover:opacity-0">
<div className="w-12 h-12 bg-zinc-950 rounded-xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(16,185,129,0.05)] border border-zinc-700/50 group-hover:border-emerald-500/40 transition-colors">
<iconify-icon className="text-2xl text-zinc-400 group-hover:text-emerald-400 transition-colors" icon="solar:graph-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-light tracking-tight text-zinc-200 mb-3 group-hover:text-emerald-300 transition-colors">
                Inconsistent outreach
              </h3>
<p className="text-base text-zinc-500 font-extralight max-w-[26ch]">
                Activity isn’t repeatable.
              </p>
</div>

<div className="hidden md:flex absolute inset-0 z-20 flex-col translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-[transform,opacity] duration-500 ease-out bg-zinc-900/95 backdrop-blur-sm">
<div className="absolute top-0 left-0 right-0 h-px bg-emerald-500/25"></div>
<div className="absolute -top-10 left-1/2 -translate-x-1/2 w-2/3 h-24 bg-emerald-500/10 blur-2xl"></div>
<div className="h-full p-6 flex flex-col text-left justify-center">
<h3 className="text-lg font-light tracking-tight text-emerald-300 mb-3">
                  Predictable Flow
                </h3>
<p className="text-sm text-zinc-300/80 font-light leading-relaxed">
                  Random bursts of outreach lead to random bursts of clients. A structured daily rhythm ensures leads are always entering your pipeline.
                </p>
</div>
</div>
</div>

<div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-zinc-800/60 transition-colors backdrop-blur-sm group shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)] relative overflow-hidden min-h-[350px]">

<div className="relative z-10 flex flex-col items-center justify-center flex-1 transition-opacity duration-200 md:group-hover:opacity-0">
<div className="w-12 h-12 bg-zinc-950 rounded-xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(16,185,129,0.05)] border border-zinc-700/50 group-hover:border-emerald-500/40 transition-colors">
<iconify-icon className="text-2xl text-zinc-400 group-hover:text-emerald-400 transition-colors" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-light tracking-tight text-zinc-200 mb-3 group-hover:text-emerald-300 transition-colors">
                Weak messaging
              </h3>
<p className="text-base text-zinc-500 font-extralight max-w-[26ch]">
                Conversations don’t convert.
              </p>
</div>

<div className="hidden md:flex absolute inset-0 z-20 flex-col translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-[transform,opacity] duration-500 ease-out bg-zinc-900/95 backdrop-blur-sm">
<div className="absolute top-0 left-0 right-0 h-px bg-emerald-500/25"></div>
<div className="absolute -top-10 left-1/2 -translate-x-1/2 w-2/3 h-24 bg-emerald-500/10 blur-2xl"></div>
<div className="h-full p-6 flex flex-col text-left justify-center">
<h3 className="text-lg font-light tracking-tight text-emerald-300 mb-3">
                  Clear Conversion
                </h3>
<p className="text-sm text-zinc-300/80 font-light leading-relaxed">
                  If your message is generic, your response rate will be too. Positioning your offer directly to their pain points changes the dynamic instantly.
                </p>
</div>
</div>
</div>

<div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-zinc-800/60 transition-colors backdrop-blur-sm group shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)] relative overflow-hidden min-h-[350px]">

<div className="relative z-10 flex flex-col items-center justify-center flex-1 transition-opacity duration-200 md:group-hover:opacity-0">
<div className="w-12 h-12 bg-zinc-950 rounded-xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(16,185,129,0.05)] border border-zinc-700/50 group-hover:border-emerald-500/40 transition-colors">
<iconify-icon className="text-2xl text-zinc-400 group-hover:text-emerald-400 transition-colors" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-light tracking-tight text-zinc-200 mb-3 group-hover:text-emerald-300 transition-colors">
                Unpredictable results
              </h3>
<p className="text-base text-zinc-500 font-extralight max-w-[26ch]">
                Income fluctuates month to month.
              </p>
</div>

<div className="hidden md:flex absolute inset-0 z-20 flex-col translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-[transform,opacity] duration-500 ease-out bg-zinc-900/95 backdrop-blur-sm">
<div className="absolute top-0 left-0 right-0 h-px bg-emerald-500/25"></div>
<div className="absolute -top-10 left-1/2 -translate-x-1/2 w-2/3 h-24 bg-emerald-500/10 blur-2xl"></div>
<div className="h-full p-6 flex flex-col text-left justify-center">
<h3 className="text-lg font-light tracking-tight text-emerald-300 mb-3">
                  Steady Growth
                </h3>
<p className="text-sm text-zinc-300/80 font-light leading-snug">
                  The ultimate goal of an acquisition system is removing the anxiety of "where is my next client coming from". You gain control over your revenue.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-[1200px] mx-auto relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="order-2 lg:order-1">
<div className="text-xs uppercase tracking-[0.25em] text-emerald-400/80 mb-4">
              The Real Fix
            </div>
<h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-white mb-8 leading-[1.1] drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">
              The Problem Isn’t Demand.
              <br className="hidden md:block"/>
<span className="block text-emerald-400 italic">
                It’s Structure.
              </span>
</h2>
<ul className="space-y-6 mb-10">
<li className="flex items-start gap-4">
<iconify-icon className="text-2xl text-zinc-600 mt-0.5 shrink-0" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-lg text-zinc-400 font-extralight">
<strong className="text-zinc-200 font-light">More posting won't fix this.</strong> Relying on organic reach keeps you waiting for clients to come to you.
                </span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-2xl text-zinc-600 mt-0.5 shrink-0" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-lg text-zinc-400 font-extralight">
<strong className="text-zinc-200 font-light">More outreach won't fix this.</strong> Doing more of the wrong activity just burns through your market faster.
                </span>
</li>
<li className="flex items-start gap-4 mt-8 pt-6 border-t border-zinc-800/50">
<iconify-icon className="text-2xl text-emerald-500 mt-0.5 shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.3)] rounded-full bg-emerald-900/20" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xl text-zinc-300 font-light">
                  Consistency comes from: <span className="text-emerald-400">systems, messaging, repeatable actions.</span>
</span>
</li>
</ul>
</div>

<div className="order-1 lg:order-2 bg-zinc-900 border border-zinc-800 rounded-[2rem] p-6 sm:p-10 shadow-[inset_0_1px_10px_rgba(0,0,0,1)] relative overflow-hidden h-[500px] flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/20 to-transparent opacity-50"></div>

<div className="relative w-full h-full bg-[#050505] rounded-xl shadow-[0_0_30px_rgba(0,0,0,1)] flex flex-col border border-zinc-800 overflow-hidden">
<div className="absolute inset-0 pointer-events-none z-20 opacity-20 mix-blend-overlay" style={{background: 'repeating-linear-gradient(0deg, #000, #000 2px, transparent 2px, transparent 4px)'}}></div>

<div className="h-10 bg-zinc-950 border-b border-zinc-800 flex items-center px-4 gap-2 shrink-0 relative z-30">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
</div>
</div>

<div className="flex-1 flex overflow-hidden relative z-30 items-center justify-center bg-[#020502]">
<div className="absolute inset-0 bg-emerald-500/5 mix-blend-screen pointer-events-none z-10 animate-pulse" style={{animationDuration: '4s'}}></div>
<div className="text-zinc-600 font-light tracking-widest text-sm uppercase flex flex-col items-center gap-3">
<iconify-icon className="text-5xl text-emerald-500/30 drop-shadow-[0_0_10px_rgba(16,185,129,0.2)]" icon="solar:gallery-wide-linear"></iconify-icon>
                  IMAGE PLACEHOLDER
                </div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1200px] mx-auto px-6 py-24 relative z-10 border-t border-zinc-800/50">
<h2 className="text-3xl md:text-4xl font-extralight tracking-tight text-white mb-12 text-center drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">What’s Included</h2>
<div className="flex flex-wrap justify-center gap-4">
<div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 flex items-center gap-4 w-full md:w-[calc(33.333%-1rem)] shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)] hover:bg-zinc-800/60 transition-colors">
<iconify-icon className="text-2xl text-emerald-400" icon="solar:target-linear"></iconify-icon>
<span className="text-zinc-300 font-light text-base">Client Acquisition Strategy</span>
</div>
<div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 flex items-center gap-4 w-full md:w-[calc(33.333%-1rem)] shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)] hover:bg-zinc-800/60 transition-colors">
<iconify-icon className="text-2xl text-emerald-400" icon="solar:letter-linear"></iconify-icon>
<span className="text-zinc-300 font-light text-base">Outbound Messaging</span>
</div>
<div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 flex items-center gap-4 w-full md:w-[calc(33.333%-1rem)] shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)] hover:bg-zinc-800/60 transition-colors">
<iconify-icon className="text-2xl text-emerald-400" icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="text-zinc-300 font-light text-base">Lead Generation Systems</span>
</div>
<div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 flex items-center gap-4 w-full md:w-[calc(50%-0.5rem)] shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)] hover:bg-zinc-800/60 transition-colors">
<iconify-icon className="text-2xl text-emerald-400" icon="solar:hand-shake-linear"></iconify-icon>
<span className="text-zinc-300 font-light text-base">Sales Conversion Support</span>
</div>
<div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 flex items-center gap-4 w-full md:w-[calc(50%-0.5rem)] shadow-[inset_0_1px_2px_rgba(255,255,255,0.02)] hover:bg-zinc-800/60 transition-colors">
<iconify-icon className="text-2xl text-emerald-400" icon="solar:mentor-linear"></iconify-icon>
<span className="text-zinc-300 font-light text-base">Coaching &amp; Training</span>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-[1200px] mx-auto relative z-10 border-t border-zinc-800/50">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="order-1 bg-zinc-900 border border-zinc-800 rounded-[2rem] p-4 shadow-[inset_0_1px_10px_rgba(0,0,0,1)] relative overflow-hidden h-[600px] flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/10 to-transparent opacity-50"></div>
<div className="relative w-full h-full bg-[#050505] rounded-xl flex items-center justify-center border border-zinc-800/50">
<div className="text-zinc-600 font-light tracking-widest text-sm uppercase flex flex-col items-center gap-3">
<iconify-icon className="text-5xl text-emerald-500/30" icon="solar:user-circle-linear"></iconify-icon>
                  IMAGE PLACEHOLDER
               </div>
</div>
</div>

<div className="order-2">
<div className="text-xs uppercase tracking-[0.25em] text-emerald-400/80 mb-4">
              About
            </div>
<h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-white mb-8 drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">
              Hi, I’m Charlotte Lloyd.
            </h2>
<div className="space-y-6 text-lg text-zinc-400 font-extralight leading-relaxed">
<p>
                I work with coaches and consultants who want consistent clients but feel stuck in unpredictable results.
              </p>
<p>
                The issue isn’t effort — <strong className="text-emerald-400 font-light">it’s structure.</strong>
</p>
<p>
                My focus is helping you build a system that actually brings in clients consistently, without relying on random tactics or burning yourself out on the wrong outreach.
              </p>
</div>
</div>
</div>
</section>

<section className="max-w-[1000px] mx-auto px-6 py-24 relative z-10 border-t border-zinc-800/50">
<h2 className="text-3xl md:text-4xl font-extralight tracking-tight text-white mb-12 text-center drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">Frequently Asked Questions</h2>
<div className="grid md:grid-cols-2 gap-6">
<div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition-colors">
<h4 className="text-lg text-zinc-200 font-light mb-3">Who is this for?</h4>
<p className="text-zinc-400 font-extralight leading-relaxed">Coaches, consultants, and service providers.</p>
</div>
<div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition-colors">
<h4 className="text-lg text-zinc-200 font-light mb-3">Is this coaching or done-for-you?</h4>
<p className="text-zinc-400 font-extralight leading-relaxed">It’s guidance focused on systems and execution.</p>
</div>
<div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition-colors">
<h4 className="text-lg text-zinc-200 font-light mb-3">Does this work for beginners?</h4>
<p className="text-zinc-400 font-extralight leading-relaxed">Yes, especially those struggling with consistency.</p>
</div>
<div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition-colors">
<h4 className="text-lg text-zinc-200 font-light mb-3">What makes this different?</h4>
<p className="text-zinc-400 font-extralight leading-relaxed">Focus on systems, not random tactics.</p>
</div>
<div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition-colors md:col-span-2 flex flex-col items-center text-center">
<h4 className="text-lg text-zinc-200 font-light mb-3">How do we start?</h4>
<p className="text-zinc-400 font-extralight leading-relaxed mb-6">Book a call to review your current acquisition process.</p>
<a className="px-6 py-2 bg-emerald-600/10 text-emerald-400 border border-emerald-500/30 rounded-full text-sm font-light hover:bg-emerald-600/20 transition-colors" href="#">Book a Call</a>
</div>
</div>
</section>

<div className="w-full h-px relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-800/80 to-transparent"></div>
<div className="absolute left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent drop-shadow-[0_0_8px_rgba(16,185,129,0.35)]"></div>
</div>
<section className="w-full py-24 relative z-10 bg-black/30 backdrop-blur-sm overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-14">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-10 items-start">
<div className="max-w-xl">
<h2 className="md:text-5xl text-4xl text-white tracking-tight font-extralight mb-4 drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">
                Clients improving acquisition
                <br className="hidden md:block"/>
<span className="block text-zinc-300/70">and consistency</span>
</h2>
<p className="leading-relaxed text-lg font-light text-zinc-400 mt-4">
                Coaches and consultants use Charlotte Lloyd’s approach to build more consistent client acquisition.
              </p>
</div>
<div className="lg:text-right flex lg:justify-end items-center">
<div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-sm font-light text-emerald-300/90 tracking-wide">
<span className="w-2 h-2 rounded-full bg-emerald-400/90 shadow-[0_0_10px_rgba(16,185,129,0.35)] animate-pulse"></span>
                Systemizing Growth
              </div>
</div>
</div>
</div>
<div className="relative w-full max-w-[1200px] mx-auto overflow-hidden mask-fade">
<div className="flex w-max gap-4 mb-4 animate-marquee-left hover:pause">

<div className="w-[380px] shrink-0 mr-6 p-3 rounded-[32px] bg-zinc-800 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),_0_20px_40px_-10px_rgba(0,0,0,0.9),_0_0_0_1px_rgba(0,0,0,1)] flex flex-col relative">
<div className="absolute bottom-3 right-6 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse"></div>
<div className="absolute bottom-3 right-10 w-2 h-2 rounded-full bg-zinc-700 shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)]"></div>
<div className="relative h-full rounded-[20px] bg-[#020a02] p-6 shadow-[inset_0_0_40px_rgba(0,0,0,1)] border-[6px] border-zinc-950 flex flex-col justify-between overflow-hidden">
<div className="absolute inset-0 pointer-events-none z-20 opacity-30 mix-blend-overlay" style={{background: 'repeating-linear-gradient(0deg,#000,#000 2px,transparent 2px,transparent 4px)'}}></div>
<div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none z-10 rounded-t-[14px]"></div>
<div className="absolute inset-0 bg-emerald-500/5 mix-blend-screen pointer-events-none z-10 animate-pulse" style={{animationDuration: '4s'}}></div>
<div className="relative z-30 mb-6">
<span className="text-xs font-light text-emerald-500/70 uppercase tracking-widest block mb-4">
                    Consultant
                  </span>
<p className="text-sm text-emerald-400/90 font-light leading-relaxed drop-shadow-[0_0_3px_rgba(52,211,153,0.6)]">
                    “The system surfaces the right accounts before our competitors even see them. It's truly repeatable.”
                  </p>
</div>
<div className="relative z-30 flex items-center gap-4">
<div className="relative p-0.5 rounded-full bg-emerald-950 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
<img alt="Liam" className="w-10 h-10 rounded-full border-[1.5px] border-emerald-500/50 object-cover opacity-80 mix-blend-luminosity grayscale sepia-[.5] hue-rotate-[90deg]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div>
<div className="text-sm text-emerald-300 font-light drop-shadow-[0_0_4px_rgba(110,231,183,0.6)]">Liam Carter</div>
<div className="text-[10px] text-emerald-500/70 font-extralight uppercase tracking-widest">Founder</div>
</div>
</div>
</div>
</div>
<div className="w-[380px] shrink-0 mr-6 p-3 rounded-[32px] bg-zinc-800 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),_0_20px_40px_-10px_rgba(0,0,0,0.9),_0_0_0_1px_rgba(0,0,0,1)] flex flex-col relative">
<div className="absolute bottom-3 right-6 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse" style={{animationDelay: '0.5s'}}></div>
<div className="absolute bottom-3 right-10 w-2 h-2 rounded-full bg-zinc-700 shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)]"></div>
<div className="relative h-full rounded-[20px] bg-[#020a02] p-6 shadow-[inset_0_0_40px_rgba(0,0,0,1)] border-[6px] border-zinc-950 flex flex-col justify-between overflow-hidden">
<div className="absolute inset-0 pointer-events-none z-20 opacity-30 mix-blend-overlay" style={{background: 'repeating-linear-gradient(0deg,#000,#000 2px,transparent 2px,transparent 4px)'}}></div>
<div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none z-10 rounded-t-[14px]"></div>
<div className="absolute inset-0 bg-emerald-500/5 mix-blend-screen pointer-events-none z-10 animate-pulse" style={{animationDuration: '3s'}}></div>
<div className="relative z-30 mb-6">
<span className="text-xs font-light text-emerald-500/70 uppercase tracking-widest block mb-4">
                    Coach
                  </span>
<p className="text-sm text-emerald-400/90 font-light leading-relaxed drop-shadow-[0_0_3px_rgba(52,211,153,0.6)]">
                    “We built a repeatable process and our pipeline velocity doubled within two quarters.”
                  </p>
</div>
<div className="relative z-30 flex items-center gap-4">
<div className="relative p-0.5 rounded-full bg-emerald-950 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
<img alt="Elena" className="w-10 h-10 rounded-full border-[1.5px] border-emerald-500/50 object-cover opacity-80 mix-blend-luminosity grayscale sepia-[.5] hue-rotate-[90deg]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6e825b87-0682-49e3-98c2-dbdab1f8f9c5_320w.webp"/>
</div>
<div>
<div className="text-sm text-emerald-300 font-light drop-shadow-[0_0_4px_rgba(110,231,183,0.6)]">Elena Park</div>
<div className="text-[10px] text-emerald-500/70 font-extralight uppercase tracking-widest">Business Coach</div>
</div>
</div>
</div>
</div>
<div className="w-[380px] shrink-0 mr-6 p-3 rounded-[32px] bg-zinc-800 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),_0_20px_40px_-10px_rgba(0,0,0,0.9),_0_0_0_1px_rgba(0,0,0,1)] flex flex-col relative">
<div className="absolute bottom-3 right-6 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse" style={{animationDelay: '1s'}}></div>
<div className="absolute bottom-3 right-10 w-2 h-2 rounded-full bg-zinc-700 shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)]"></div>
<div className="relative h-full rounded-[20px] bg-[#020a02] p-6 shadow-[inset_0_0_40px_rgba(0,0,0,1)] border-[6px] border-zinc-950 flex flex-col justify-between overflow-hidden">
<div className="absolute inset-0 pointer-events-none z-20 opacity-30 mix-blend-overlay" style={{background: 'repeating-linear-gradient(0deg,#000,#000 2px,transparent 2px,transparent 4px)'}}></div>
<div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none z-10 rounded-t-[14px]"></div>
<div className="absolute inset-0 bg-emerald-500/5 mix-blend-screen pointer-events-none z-10 animate-pulse" style={{animationDuration: '5s'}}></div>
<div className="relative z-30 mb-6">
<span className="text-xs font-light text-emerald-500/70 uppercase tracking-widest block mb-4">
                    Service Provider
                  </span>
<p className="text-sm text-emerald-400/90 font-light leading-relaxed drop-shadow-[0_0_3px_rgba(52,211,153,0.6)]">
                    “The acquisition strategy is incredibly accurate. We focus only on conversations that matter.”
                  </p>
</div>
<div className="relative z-30 flex items-center gap-4">
<div className="relative p-0.5 rounded-full bg-emerald-950 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
<img alt="Marcus" className="w-10 h-10 rounded-full border-[1.5px] border-emerald-500/50 object-cover opacity-80 mix-blend-luminosity grayscale sepia-[.5] hue-rotate-[90deg]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/25df7579-09f7-4c8c-bb39-18a974a980d0_320w.webp"/>
</div>
<div>
<div className="text-sm text-emerald-300 font-light drop-shadow-[0_0_4px_rgba(110,231,183,0.6)]">Marcus Delaney</div>
<div className="text-[10px] text-emerald-500/70 font-extralight uppercase tracking-widest">Agency Owner</div>
</div>
</div>
</div>
</div>
<div className="w-[380px] shrink-0 mr-6 p-3 rounded-[32px] bg-zinc-800 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),_0_20px_40px_-10px_rgba(0,0,0,0.9),_0_0_0_1px_rgba(0,0,0,1)] flex flex-col relative">
<div className="absolute bottom-3 right-6 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse" style={{animationDelay: '1.5s'}}></div>
<div className="absolute bottom-3 right-10 w-2 h-2 rounded-full bg-zinc-700 shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)]"></div>
<div className="relative h-full rounded-[20px] bg-[#020a02] p-6 shadow-[inset_0_0_40px_rgba(0,0,0,1)] border-[6px] border-zinc-950 flex flex-col justify-between overflow-hidden">
<div className="absolute inset-0 pointer-events-none z-20 opacity-30 mix-blend-overlay" style={{background: 'repeating-linear-gradient(0deg,#000,#000 2px,transparent 2px,transparent 4px)'}}></div>
<div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none z-10 rounded-t-[14px]"></div>
<div className="absolute inset-0 bg-emerald-500/5 mix-blend-screen pointer-events-none z-10 animate-pulse" style={{animationDuration: '4s'}}></div>
<div className="relative z-30 mb-6">
<span className="text-xs font-light text-emerald-500/70 uppercase tracking-widest block mb-4">
                    Consultant
                  </span>
<p className="text-sm text-emerald-400/90 font-light leading-relaxed drop-shadow-[0_0_3px_rgba(52,211,153,0.6)]">
                    “Charlotte turned our outbound into a predictable pipeline engine.”
                  </p>
</div>
<div className="relative z-30 flex items-center gap-4">
<div className="relative p-0.5 rounded-full bg-emerald-950 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
<img alt="Sofia" className="w-10 h-10 rounded-full border-[1.5px] border-emerald-500/50 object-cover opacity-80 mix-blend-luminosity grayscale sepia-[.5] hue-rotate-[90deg]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0a04490f-27f4-44a6-b75a-f64e08d7caf2_320w.jpg"/>
</div>
<div>
<div className="text-sm text-emerald-300 font-light drop-shadow-[0_0_4px_rgba(110,231,183,0.6)]">Sofia Mendes</div>
<div className="text-[10px] text-emerald-500/70 font-extralight uppercase tracking-widest">Consultant</div>
</div>
</div>
</div>
</div>
</div>
<div className="flex w-max gap-4 animate-marquee-right hover:pause">
<div className="w-[380px] shrink-0 mr-6 p-3 rounded-[32px] bg-zinc-800 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),_0_20px_40px_-10px_rgba(0,0,0,0.9),_0_0_0_1px_rgba(0,0,0,1)] flex flex-col relative">
<div className="absolute bottom-3 right-6 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse"></div>
<div className="absolute bottom-3 right-10 w-2 h-2 rounded-full bg-zinc-700 shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)]"></div>
<div className="relative h-full rounded-[20px] bg-[#020a02] p-6 shadow-[inset_0_0_40px_rgba(0,0,0,1)] border-[6px] border-zinc-950 flex flex-col justify-between overflow-hidden">
<div className="absolute inset-0 pointer-events-none z-20 opacity-30 mix-blend-overlay" style={{background: 'repeating-linear-gradient(0deg,#000,#000 2px,transparent 2px,transparent 4px)'}}></div>
<div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none z-10 rounded-t-[14px]"></div>
<div className="absolute inset-0 bg-emerald-500/5 mix-blend-screen pointer-events-none z-10 animate-pulse" style={{animationDuration: '4.5s'}}></div>
<div className="relative z-30 mb-6">
<span className="text-xs font-light text-emerald-500/70 uppercase tracking-widest block mb-4">
                    Agency Owner
                  </span>
<p className="text-sm text-emerald-400/90 font-light leading-relaxed drop-shadow-[0_0_3px_rgba(52,211,153,0.6)]">
                    “We finally have a system that connects effort to real revenue outcomes.”
                  </p>
</div>
<div className="relative z-30 flex items-center gap-4">
<div className="relative p-0.5 rounded-full bg-emerald-950 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
<img alt="Noah" className="w-10 h-10 rounded-full border-[1.5px] border-emerald-500/50 object-cover opacity-80 mix-blend-luminosity grayscale sepia-[.5] hue-rotate-[90deg]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/71d7ad40-af9f-4af2-baa2-8d7eb0382908_3840w.webp?w=800&amp;q=80"/>
</div>
<div>
<div className="text-sm text-emerald-300 font-light drop-shadow-[0_0_4px_rgba(110,231,183,0.6)]">Noah Bennett</div>
<div className="text-[10px] text-emerald-500/70 font-extralight uppercase tracking-widest">Founder</div>
</div>
</div>
</div>
</div>
<div className="w-[380px] shrink-0 mr-6 p-3 rounded-[32px] bg-zinc-800 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),_0_20px_40px_-10px_rgba(0,0,0,0.9),_0_0_0_1px_rgba(0,0,0,1)] flex flex-col relative">
<div className="absolute bottom-3 right-6 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse" style={{animationDelay: '0.5s'}}></div>
<div className="absolute bottom-3 right-10 w-2 h-2 rounded-full bg-zinc-700 shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)]"></div>
<div className="relative h-full rounded-[20px] bg-[#020a02] p-6 shadow-[inset_0_0_40px_rgba(0,0,0,1)] border-[6px] border-zinc-950 flex flex-col justify-between overflow-hidden">
<div className="absolute inset-0 pointer-events-none z-20 opacity-30 mix-blend-overlay" style={{background: 'repeating-linear-gradient(0deg,#000,#000 2px,transparent 2px,transparent 4px)'}}></div>
<div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none z-10 rounded-t-[14px]"></div>
<div className="absolute inset-0 bg-emerald-500/5 mix-blend-screen pointer-events-none z-10 animate-pulse" style={{animationDuration: '3.2s'}}></div>
<div className="relative z-30 mb-6">
<span className="text-xs font-light text-emerald-500/70 uppercase tracking-widest block mb-4">
                    Coach
                  </span>
<p className="text-sm text-emerald-400/90 font-light leading-relaxed drop-shadow-[0_0_3px_rgba(52,211,153,0.6)]">
                    “Pipeline generation became measurable the moment we adopted this structure.”
                  </p>
</div>
<div className="relative z-30 flex items-center gap-4">
<div className="relative p-0.5 rounded-full bg-emerald-950 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
<img alt="Jordan" className="w-10 h-10 rounded-full border-[1.5px] border-emerald-500/50 object-cover opacity-80 mix-blend-luminosity grayscale sepia-[.5] hue-rotate-[90deg]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f4bda977-4e02-4ce3-b6d3-1f8a5d3197db_3840w.jpg?w=800&amp;q=80"/>
</div>
<div>
<div className="text-sm text-emerald-300 font-light drop-shadow-[0_0_4px_rgba(110,231,183,0.6)]">Jordan Malik</div>
<div className="text-[10px] text-emerald-500/70 font-extralight uppercase tracking-widest">Leadership Coach</div>
</div>
</div>
</div>
</div>
<div className="w-[380px] shrink-0 mr-6 p-3 rounded-[32px] bg-zinc-800 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),_0_20px_40px_-10px_rgba(0,0,0,0.9),_0_0_0_1px_rgba(0,0,0,1)] flex flex-col relative">
<div className="absolute bottom-3 right-6 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse" style={{animationDelay: '1s'}}></div>
<div className="absolute bottom-3 right-10 w-2 h-2 rounded-full bg-zinc-700 shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)]"></div>
<div className="relative h-full rounded-[20px] bg-[#020a02] p-6 shadow-[inset_0_0_40px_rgba(0,0,0,1)] border-[6px] border-zinc-950 flex flex-col justify-between overflow-hidden">
<div className="absolute inset-0 pointer-events-none z-20 opacity-30 mix-blend-overlay" style={{background: 'repeating-linear-gradient(0deg,#000,#000 2px,transparent 2px,transparent 4px)'}}></div>
<div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none z-10 rounded-t-[14px]"></div>
<div className="absolute inset-0 bg-emerald-500/5 mix-blend-screen pointer-events-none z-10 animate-pulse" style={{animationDuration: '5.2s'}}></div>
<div className="relative z-30 mb-6">
<span className="text-xs font-light text-emerald-500/70 uppercase tracking-widest block mb-4">
                    Consultant
                  </span>
<p className="text-sm text-emerald-400/90 font-light leading-relaxed drop-shadow-[0_0_3px_rgba(52,211,153,0.6)]">
                    “Our outbound campaigns now start with a real strategy instead of guesswork.”
                  </p>
</div>
<div className="relative z-30 flex items-center gap-4">
<div className="relative p-0.5 rounded-full bg-emerald-950 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
<img alt="Camila" className="w-10 h-10 rounded-full border-[1.5px] border-emerald-500/50 object-cover opacity-80 mix-blend-luminosity grayscale sepia-[.5] hue-rotate-[90deg]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b5fa796b-5a4e-4746-8463-8e491f896f5c_3840w.jpg?w=800&amp;q=80"/>
</div>
<div>
<div className="text-sm text-emerald-300 font-light drop-shadow-[0_0_4px_rgba(110,231,183,0.6)]">Camila Ortega</div>
<div className="text-[10px] text-emerald-500/70 font-extralight uppercase tracking-widest">Growth Consultant</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-32 text-center relative z-10">
<h2 className="text-5xl md:text-6xl font-extralight tracking-tight text-white mb-6 drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">
          Start Getting Clients Consistently
        </h2>
<p className="text-xl text-zinc-400 font-extralight mb-12">
          Book a call to build a system that brings in clients.
        </p>
<div className="w-full h-[500px] md:h-[600px] bg-zinc-900/50 border border-zinc-800 rounded-[2rem] flex flex-col items-center justify-center relative overflow-hidden backdrop-blur-sm shadow-[inset_0_1px_10px_rgba(0,0,0,1)]">
<div className="absolute inset-0 bg-gradient-to-b from-emerald-900/10 to-transparent pointer-events-none"></div>
<div className="text-emerald-500/50 mb-6 drop-shadow-[0_0_15px_rgba(16,185,129,0.2)]">
<iconify-icon className="text-7xl" icon="solar:calendar-date-linear"></iconify-icon>
</div>
<div className="text-zinc-500 tracking-[0.2em] uppercase text-sm mb-10 font-light">Calendly Placeholder</div>
<button className="px-10 py-4 bg-emerald-600/20 text-emerald-400 border border-emerald-500/50 rounded-full text-lg font-light shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:bg-emerald-600/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all">
            Book My Call
          </button>
</div>
</section>
</div>

    </>
  );
}
